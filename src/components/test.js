
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
<Modal
    show={show}
    onHide={handleClose}
    keyboard={false}
    centered
>
    <Modal.Body style={{ padding: "15px 50px" }}>
        <div className="card card-body">
            <div className="col-sm-12 col-xs-12">
                <div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name" />
                        </div>
                    </div>
                    <button type="submit" >Submit</button>
                </div>
            </div>
        </div>

    </Modal.Body>
</Modal>