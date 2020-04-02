const recorderContainer = document.getElementById("jsREcordContainer");
const recordBtn = document.getElementById("jsRecordButton");
const videoPreview = document.getElementById("jsVideoPreview");

const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });
    console.log(stream);
  } catch (error) {
    recordBtn.innerHTML = "😟 Can't record";
    recordBtn.removeEventListener("click", startRecording);
  }
};

function init() {
  recordBtn.addEventListener("click", startRecording);
}

if (recorderContainer) {
  init();
}
