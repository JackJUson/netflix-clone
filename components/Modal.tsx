import MuiModal from "@mui/material/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilValue } from "recoil";

function Modal() {
  const showModal = useRecoilValue(modalState);

  return (
    <MuiModal open={showModal}>
      <>
        Modal
      </>
    </MuiModal>
  )
}
export default Modal