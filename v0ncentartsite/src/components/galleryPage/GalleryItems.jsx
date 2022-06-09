export default function GalleryItems(image) {
  return (
    <>
      <p>{image.title}</p>
      <img src={image.imageURL}></img>
    </>
  );
}
