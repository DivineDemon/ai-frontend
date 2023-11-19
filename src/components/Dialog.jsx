import {
  Modal,
  // Button,
  ModalBody,
  ModalHeader,
  // ModalFooter,
  ModalContent,
} from "@nextui-org/react";
import Dropzone from "./Dropzone";

const Dialog = ({ isOpen, onOpenChange, title }) => {
  return (
    <Modal size={"2xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 border-b">
              {title}
            </ModalHeader>
            <ModalBody style={{ padding: "0px" }}>
              <div className="w-full h-full grid grid-cols-2 items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-center p-5">
                  <Dropzone />
                </div>
                <div className="w-full h-full flex items-center justify-center text-center">
                  Wait for your Results Here.
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default Dialog;
