import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";

function Recents() {
    const callHistory = useSelector((state) => state.dailer.callHistory);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch({ type: "DELETE_CALL", payload: id });
    };

    return (
        <Container className="dialer-container d-flex flex-column justify-content-start align-items-center mt-5">
            <div className="w-100 d-flex justify-content-start px-3">
                <h6 className="edit-button">Edit</h6>
            </div>

            <div className="tabs-container d-flex justify-content-center mt-2">
                <button className="tab active">All</button>
                <button className="tab">Missed</button>
            </div>

            <div className="w-100 d-flex justify-content-start px-3 mt-2 text-white">
                <h5>Recents</h5>
            </div>

            <div className="call-history mt-3 w-100">
                {callHistory.length === 0 ? (
                    <p className="text-center text-muted">No recent calls</p>
                ) : (
                    callHistory.map((call) => (
                        <div
                            key={call.id}
                            className="call-card d-flex justify-content-between align-items-center px-3 py-2 my-2"
                        >
                            <div className="call-info">
                                <h6 className="call-number mb-1 text-danger">
                                    {call.number}
                                </h6>
                                <p className="call-description mb-0 text-white">
                                    Phone audio call
                                </p>
                            </div>
                            <p className="call-time mb-3 text-muted">
                                {call.time}
                            </p>
                            <Button
                                className="delete-button text-danger bg-dark border-dark"
                                onClick={() => handleDelete(call.id)}
                            >
                                <i className="fa-solid fa-trash"></i>
                            </Button>
                        </div>
                    ))
                )}
            </div>

            <Footer />
        </Container>
    );
}

export default Recents;
