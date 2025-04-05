import './UploadButton.css';

function UploadButton() {
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <input type="file" className="form-control mb-2" />
      <button className="btn btn-primary">Upload</button>
    </div>
  );
}

export default UploadButton;