
import { collection, documentId, getDocs, limit, query, where } from "firebase/firestore";
import styles from "./page.module.css";
import EditItinerary from "@/components/EditItinerary/EditItinerary";
import db from "@/app/lib/firebase.config";
import { getCurrentUser } from "@/app/actions/session";
import NoPermission from "@/components/NoPermission/NoPermission";


async function getData(slug) {
  const alreadyExistQuery = query(
    collection(db, "itineraries"),
    where(documentId(), "==", slug), limit(1)
  );
  const querySnapshot = await getDocs(alreadyExistQuery);

  const data = querySnapshot.docs.map((doc) => {
    const docData = doc.data();
    return {
      id: doc.id,
      days: docData.days,
      title: docData.title,
      country: docData.country,
      description: docData.description,
      userId: docData.userId,
      image: docData.image,
      createdAt: docData.createdAt.toDate().toISOString(), // Convert Firestore timestamp to ISO string
    };
  });

  return {
    data: data[0]
  }
}
export default async function Edititinerary({ params }) {
  const { data } = await getData(params.slug)

  return (
    <div className={styles.page}>
      {data.userId === await getCurrentUser() ?
        <EditItinerary data={data} /> : <NoPermission /> }
    </div>
  );
}
