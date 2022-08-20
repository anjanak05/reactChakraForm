import React from "react"
import {
    Button,
    useDisclosure,
    Input, 
    FormControl,
    FormLabel,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  

const ModalHospital=({handleChnage, handleSubmit, formData})=>{
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Button width={60} onClick={onOpen}>Hospital Details</Button>
      
      <Modal 
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter HOspital Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl >
              <FormLabel>Hospital Name</FormLabel>
              <Input  onChange={handleChnage} name="first" value={formData.first} ref={initialRef} placeholder='First name' />
        

            
              <FormLabel>Hospital Address</FormLabel>
              <Input   onChange={handleChnage} name="last" value={formData.last} placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}
export default ModalHospital