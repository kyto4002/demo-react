import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc'

import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiService'
import _ from 'lodash'

function ModelUploadUser(props) {
    // const [show, setShow] = useState(false);
    const { show, setShow, dataUpdate } = props

    const handleClose = () => {
        setShow(false)
        setEmail('')
        setUsername('')
        setPassword('')
        setRole('USER')
        setImage('');
        setPreviewImage('');
    }
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('USER')
    const [image, setImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email)
            setUsername(dataUpdate.username)
            setRole(dataUpdate.role)
            setImage('')
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }

        }
    }, [dataUpdate])


    const handleUploadImage = (event) => {
        if (event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {

        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitCreateUser = async () => {
        // //Validate
        // const isValiEmail = validateEmail(email)
        // if (!isValiEmail) {
        //     // alert('invail Email')
        //     toast.error('Invail Email')
        //     return
        // }

        if (!password) {
            toast.error('Invail Password')
            return
        }



        let data = await postCreateNewUser(email, password, username, role, image)
        console.log('component res', data)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose()
            await props.fetchListUsers()
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }
    console.log('check dât Upload:', props.dataUpdate)
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                disabled
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                onChange={(event) => setRole(event.target.value)}
                                value={role}>
                                <option selected value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <FcPlus /> Upload Image User
                            </label>
                            <input
                                type='file'
                                hidden id='labelUpload'
                                onChange={(event) => handleUploadImage(event)}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>

                            {
                                previewImage ?
                                    <img src={previewImage} />
                                    :
                                    <span>Preview Image</span>
                            }

                        </div>
                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModelUploadUser
