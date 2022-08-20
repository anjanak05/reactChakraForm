import React from "react"
import {
    Button, Select,  useDisclosure,Input,FormControl, FormLabel,Modal, ModalOverlay,    ModalContent,    ModalHeader,     ModalFooter,    ModalBody,     ModalCloseButton,
    
  } from '@chakra-ui/react'
  

const ModalDoctor=({handleChnageDoc, handleSubmitDoc, formDoctor, data})=>{
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
        <>
        <Button width={60} onClick={onOpen}>Doctor Details</Button>
      
      <Modal 
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Doctor Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl >
              <FormLabel>Doctor Name</FormLabel>
              <Input  onChange={handleChnageDoc} name="name" value={formDoctor.name} ref={initialRef} placeholder='name' />
        
              <FormLabel>Hospital</FormLabel>
              <Select onChange={handleChnageDoc} 
               placeholder='Select Hospital' name="hospName" value={formDoctor.hospName} >
              {data.map((e)=>(
                <option key={e.id} value={e.first}>{e.first}</option> 
              ))}
                 {/* */}
                </Select>  
       

              <FormLabel>Doctor Specialization</FormLabel>
              <Select placeholder='Select Specialization'  name="spec" value={formDoctor.spec} onChange={handleChnageDoc}>
                    <option value='Nephrology	'>Nephrology</option>
                    <option value='General'>General</option>
                    <option value='Radiologist'>Radiologist</option>
                </Select>     

              <FormLabel>Salary</FormLabel>
              <Input   onChange={handleChnageDoc} name="salary"  type="number" value={formDoctor.salary} placeholder='salary' />

              
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmitDoc} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}
export default ModalDoctor