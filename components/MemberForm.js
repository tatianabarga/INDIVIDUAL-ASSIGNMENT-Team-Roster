// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';

// const initialState = {
//   email: '',
//   favorite: '',
//   first_name: '',
//   last_name: '',
//   uid: '',
//   firebaseKey: '',
// };

// function MemberForm({ obj }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const router = useRouter();
//   const { user } = useAuth();

//   useEffect(() => {
//     if (obj.firebaseKey) setFormInput(obj);
//   }, [obj, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (obj.firebaseKey) {
//       updateAuthor(formInput).then(() => router.push(`/author/${obj.firebaseKey}`));
//     } else {
//       const payload = { ...formInput, uid: user.uid };
//       createAuthor(payload).then(({ name }) => {
//         const patchPayload = { firebaseKey: name };
//         updateAuthor(patchPayload).then(() => {
//           router.push('/authors');
//         });
//       });
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Team Member</h2>

//       {/* TITLE INPUT  */}
//       <FloatingLabel controlId="floatingInput1" label="Author First Name" className="mb-3">
//         <Form.Control
//           as="textarea"
//           placeholder="enter name"
//           name="first_name"
//           value={formInput.first_name}
//           onChange={handleChange}
//           required
//         />
//       </FloatingLabel>

//       <FloatingLabel controlId="floatingInput2" label="Author Last Name" className="mb-3">
//         <Form.Control
//           as="textarea"
//           placeholder="enter name"
//           name="last_name"
//           value={formInput.last_name}
//           onChange={handleChange}
//           required
//         />
//       </FloatingLabel>

//       {/* IMAGE INPUT  */}
//       <FloatingLabel controlId="floatingInput2" label="Member Image Link" className="mb-3">
//         <Form.Control
//           type="url"
//           placeholder="Enter an image url"
//           name="image"
//           value={formInput.image}
//           onChange={handleChange}
//           required
//         />
//       </FloatingLabel>

//       {/* PRICE INPUT  */}
//       <FloatingLabel controlId="floatingInput3" label="Where is This Character From?" className="mb-3">
//         <Form.Control
//           as="textarea"
//           placeholder="enter reference"
//           name="email"
//           value={formInput.email}
//           onChange={handleChange}
//           required
//         />
//       </FloatingLabel>

//       {/* DESCRIPTION TEXTAREA  */}
//       <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
//         <Form.Control
//           as="textarea"
//           placeholder="Description"
//           style={{ height: '100px' }}
//           name="description"
//           value={formInput.description}
//           onChange={handleChange}
//           required
//         />
//       </FloatingLabel>

//       {/* SUBMIT BUTTON  */}
//       <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Author</Button>
//     </Form>
//   );
// }

// MemberForm.propTypes = {
//   obj: PropTypes.shape({
//     reference: PropTypes.string,
//     first_name: PropTypes.string,
//     last_name: PropTypes.string,
//     uid: PropTypes.string,
//     firebaseKey: PropTypes.string,
//   }),
// };

// MemberForm.defaultProps = {
//   obj: initialState,
// };

// export default MemberForm;
