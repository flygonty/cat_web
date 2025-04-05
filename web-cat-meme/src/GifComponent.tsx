import gif from './assets/oiia-cat.gif';
function GifComponent() {
  return (
    <div>
      <img src={gif} alt="GIF" />
    </div>
  );
}
export default GifComponent;
// This component takes a gif URL as a prop and displays it in an <img> tag.