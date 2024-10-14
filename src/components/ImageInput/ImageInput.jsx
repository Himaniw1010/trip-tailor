
import styles from "./ImageInput.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import { BiPlus, BiUpload } from "react-icons/bi";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/app/lib/definitions";

function ImageInput({
  className,
  state,
  data
}) {
  const inputFileRef = useRef()
  // const MAX_FILE_SIZE = 5000000;
  // const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  const [image, setImage] = useState(null)
  useEffect(() => {
    const fetchImage = async () => {
      if (data) {
        setImage(data);
      }
      try {
        //  = await fetch('/get-image', method: 'POST',);
        let response = await fetch("/get-image", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
            // Other headers as needed
          },
          body: JSON.stringify({ url: data }) // Convert the data object to a JSON string
        })
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const blob = await response.blob();
        // console.log(blob);
        // Convert blob to URL and set it as the image
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);

        // Setting to input src
        // Create a File object from the blob
        const file = new File([blob], 'image.jpg', { type: blob.type });

        // Use DataTransfer to set the file to the input
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        if (inputFileRef.current) {
          inputFileRef.current.files = dataTransfer.files;
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [])

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && ACCEPTED_IMAGE_TYPES.includes(file.type) && file.size <= MAX_FILE_SIZE) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image file (JPEG, PNG, WEBP, AVIF) under 5MB.");
    }
  }
  {
    return <div className={`${styles.wrapper} ${className} ${state?.errors && state?.errors["image"] && styles.error}`}>
      {image ?
        <>
          <Button buttonType="button" type="button" icon={<BiPlus />} className={styles.clear} variant="red" onClick={() => setImage(null)} />
          <Image alt="thumbnail" src={image} fill objectFit="cover" className={styles.thumbnail} />
        </> :
        <div className={styles.imageContainer}>
          <label htmlFor="image">
            <p><BiUpload /></p>
            <p>Upload Image</p>
          </label>
        </div>}
      <input ref={inputFileRef} id="image" label="Image" type="file" name="image" onChange={handleFileChange} accept="image/png, image/gif, image/jpeg, image/webp, image/avif" />
    </div>
  }
};

export default ImageInput;
