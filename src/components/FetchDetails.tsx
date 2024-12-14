import React from 'react';


interface User {
    first_name: string;
    last_name: string;
    city: string;
    contact_number: string;
    profile_url: string;
  }
  
  interface FetchDetailsProps {
    user: User;
  }

const FetchDetails: React.FC<FetchDetailsProps> = ({user}) => {
    return (
        <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div>
                            <h1>Fetch Details</h1>
                            <p className="text-secondary">Here are the details of following employee.</p>
                            {
                                user && (
                                    <>
                                        <p>
                                            <span className="modal-para-list">Name: {user.first_name}{" "}{user.last_name}</span><br />
                                            <span className="modal-para-list">Location: {user.city}</span><br />
                                            <span className="modal-para-list">Contact Number: {user.contact_number}</span>
                                        </p>
                                        <p>Profile Image:</p>
                                        <img src={user.profile_url} alt="User Profile" width="200px" />
                                    </>
                                )
                            }
                        </div>
                        <button type="button" className="btn btn-secondary float-end" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FetchDetails;