"use server";
import { formSchema, itinerarySchema, LoginFormSchema, SignupFormSchema } from "@/app/lib/definitions";
import db, { storageDB } from "../lib/firebase.config";
import bcrypt from "bcrypt";
import { collection, addDoc, getDocs, where, query, doc, Timestamp, updateDoc } from "firebase/firestore";
import { createSession, getCurrentUser } from "./session";
import { redirect } from "next/navigation";
import parseDays from "@/utils/parseFormData";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function signup(state, formData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Query to check if user alreadcy exist
  const alreadyExistQuery = query(
    collection(db, "users"),
    where("email", "==", validatedFields.data.email)
  );

  try {
    const querySnapshot = await getDocs(alreadyExistQuery);
    if (querySnapshot.docs.length > 0) {
      return {
        errors: {
          userExist: true,
        },
      };
    } else {
      const docRef = await addDoc(collection(db, "users"), {
        name,
        email,
        password: hashedPassword,
      });
      console.log("Document written with ID: ", docRef.id);
      return true;
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function login(state, formData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const alreadyExistQuery = query(
      collection(db, "users"),
      where("email", "==", validatedFields.data.email)
    );

    const querySnapshot = await getDocs(alreadyExistQuery);

    if (querySnapshot.docs.length > 0) {
      const hash = querySnapshot.docs[0].data().password;
      const passwordCorrect = await bcrypt.compare(
        validatedFields.data.password,
        hash
      );
      if (!passwordCorrect) {
        return {
          errors: {
            passwordIncorrect: true,
          },
        };
      } else {
        await createSession(querySnapshot.docs[0].id);
      }
    } else {
      return {
        errors: {
          userNotExist: true,
        },
      };
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  } finally {
    redirect("/dashboard");
  }
}

export async function addItinerary(state, formData) {
  let redirectUrl;
  const image = formData.get("image");
  try {
    //  Basic validation for title, country and duration field
    const basicFieldsValidation = itinerarySchema.safeParse({
      title: formData.get("title"),
      country: formData.get("country"),
      duration: Number(formData.get("duration")),
      description: formData.get("description"),
      image: image
    })
    if (!basicFieldsValidation.success) {
      return {
        errors: basicFieldsValidation.error.flatten().fieldErrors,
      };
    }
    let errorObject = {};

    const validatedFields = formSchema.safeParse(parseDays(formData));

    if (!validatedFields.success) {
      validatedFields.error.errors.map((error) => {
        errorObject[`Day-${error.path[0]}__${error.path[1]}__${error.path[2]}`] = error.message;
      });

      console.error('Form data validation failed', errorObject);
      return {
        errors: errorObject,
      };
    }

    // Reference to the 'images/' directory in Firebase Storage


    const file = basicFieldsValidation.data.image; // Assuming 'image' is the key for the file in your validation data
    const imagesRef = ref(storageDB, `images/${file.name}`);
    const downloadURL = await uploadBytes(imagesRef, file).then(async (snapshot) => {
      return await getDownloadURL(snapshot.ref);
    });

    const finalObject = { createdAt: Timestamp.now(), userId: await getCurrentUser(),  ...basicFieldsValidation.data,image: downloadURL, days: validatedFields.data };
    const docRef = await addDoc(collection(db, "itineraries"), finalObject);
    if (docRef) {
      redirectUrl = "/dashboard";
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  // console.log(redirectUrl)
  if (redirectUrl) {
    redirect(redirectUrl)
  }
}

export async function editItinerary(state, formData) {
  let redirectUrl;
  const id = formData.get("id");
  const image = formData.get("image");
  try {
    //  Basic validation for title, country and duration field
    const basicFieldsValidation = itinerarySchema.safeParse({
      title: formData.get("title"),
      country: formData.get("country"),
      duration: Number(formData.get("duration")),
      description: formData.get("description"),
      image: image
    })
    if (!basicFieldsValidation.success) {
      return {
        errors: basicFieldsValidation.error.flatten().fieldErrors,
      };
    }
    let errorObject = {};

    const validatedFields = formSchema.safeParse(parseDays(formData));

    if (!validatedFields.success) {
      validatedFields.error.errors.map((error) => {
        errorObject[`Day-${error.path[0]}__${error.path[1]}__${error.path[2]}`] = error.message;
      });

      console.error('Form data validation failed', errorObject);
      return {
        errors: errorObject,
      };
    }
    const file = basicFieldsValidation.data.image; // Assuming 'image' is the key for the file in your validation data
    const imagesRef = ref(storageDB, `images/${file.name}`);
    const downloadURL = await uploadBytes(imagesRef, file).then(async (snapshot) => {
      return await getDownloadURL(snapshot.ref);
    });

    const finalObject = { createdAt: Timestamp.now(), userId: await getCurrentUser(),  ...basicFieldsValidation.data,image: downloadURL, days: validatedFields.data };
    
    const washingtonRef = doc(db, "itineraries", id);

    await updateDoc(washingtonRef, finalObject);
    redirectUrl = "/dashboard";

  } catch (e) {
    console.error("Error adding document: ", e);
  }

  if (redirectUrl) {
    redirect(redirectUrl)
  }
}