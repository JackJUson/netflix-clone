import MuiModal from "@mui/material/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilValue, useRecoilState } from "recoil";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 
          border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XMarkIcon className="h-7 w-7" />
        </button>
      </>
    </MuiModal>
  );
}
export default Modal;
