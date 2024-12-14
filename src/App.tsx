import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import { useState } from 'react';
import girmantech_logo from './images/girmantech_logo.svg'
import notFound from './images/notFound.svg'
import useFetch from './useFetch';
import FetchDetails from './components/FetchDetails'

interface User {
  first_name: string;
  last_name: string;
  profile_url: string;
  city: string;
  contact_number: string;
}

const App: React.FC = () => {
  const { data, loading, error } = useFetch<User[]>('https://girman-tech-be.vercel.app/users',[])

  const [input, setInput] = useState<string>("")
  const [user, setUser] = useState<User | null>(null)

  const serachProfile = data ? input === "" ? data : data.filter(user => (user.first_name.toLowerCase() + " " + user.last_name.toLowerCase()).includes(input.toLowerCase())) : data

  return (
    <>
      <Header />
      <FetchDetails user={user as User} />
      <main className='container mt-5'>
        <div className='company-logo-img-input'>
        {
          input === "" && (
            <div className='company-logo-img container-center-row'>
              <img className='img-fluid px-2' width={'600px'}  src={girmantech_logo} alt='Company Logo' />
            </div>
          )
        }
        <div className="input-group container-center-row mt-4">
          <span className="input-group-text bg-white">
            <i className="bi bi-search text-dark"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        </div>
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center text-danger">Error loading data!</p>}
        <div className='container-center-row user-card-container '>
          {
            input !== "" &&  (
              <>
                  {
                    serachProfile && serachProfile.length > 0 ? (
                      <>
                          {
                            serachProfile.map((user, idx) => (
                              <div className='card mx-card'>
                                <div className='ps-2'>
                                  <img className='img-rounded' src={user.profile_url} alt={`${user.first_name} ${user.last_name} profile.`} />
                                  <h2 className='pt-2'>{`${user.first_name} ${user.last_name}`}</h2>
                                  <p><i className="bi bi-geo-alt-fill"></i> {user.city}</p>
                                  <hr />
                                  <div className="contact-container">
                                  <div>
                                    <p><i className="bi bi-telephone-fill"></i> {user.contact_number}<br /><span>Available on phone</span></p>
                                  </div>
                                  <div>
                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-dark btn-arrangement" onClick={() => setUser(user)}>Fetch Details</button>
                                  </div>
                                </div>
                                </div>
                              </div>
                            ))
                          }
                      </>
                    ) : !loading && (
                      <div className="text-center">
                      <img
                        className="img-fluid"
                        src={notFound}
                        alt="Data Not Found"
                        style={{ width: "300px" }}
                      />
                      <p className="mt-3">Oops, no data found.</p>
                      </div>
                  )
                  }
                </>
            )
          }
        </div>
      </main>
    </>     
  );
}

export default App;
