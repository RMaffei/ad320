// component for user profile to initialize w/ nested properties
import React, {useState} from 'react';

const UserProfile = () => {
    // default values below in initializes userProfile state
    const [userProfile, setUserProfile] = useState({
      name: 'Curious George',
      email: 'man@yellowhat.com',
      address: {
        street: '9600 College Way N',
        city: 'Seattle',
        state: 'WA',
        country: 'USA',
      },
    });
    // update address function within userProfile state
    const updateAddress = (newStreet, newCity, newState, newCountry) => {
        setUserProfile(prevProfile => ({
          ...prevProfile,
          address: {
            ...prevProfile.address,
            street: newStreet,
            city: newCity,
            state: newState,
            country: newCountry,
          },
        }));
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const newStreet = form.elements.street.value;
        const newCity = form.elements.city.value;
        const newState = form.elements.state.value;
        const newCountry = form.elements.country.value;
        updateAddress(newStreet, newCity, newState, newCountry);
      };
    
      return (
        <div className="user-profile">
          <h1>User Profile</h1>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Street:</label>
              <input type="text" name="street" defaultValue={userProfile.address.street} />
            </div>
            <div>
              <label>City:</label>
              <input type="text" name="city" defaultValue={userProfile.address.city} />
            </div>
            <div>
              <label>State:</label>
              <input type="text" name="state" defaultValue={userProfile.address.state} />
            </div>
            <div>
              <label>Country:</label>
              <input type="text" name="country" defaultValue={userProfile.address.country} />
            </div>
            <button type="submit">Update Address</button>
          </form>
          <div className="current-profile">
            <h2>Updated Profile:</h2>
            <p className="profile-name">Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            <p className="profile-address">Address:</p>
            <p>Street: {userProfile.address.street}</p>
            <p>City: {userProfile.address.city}</p>
            <p>State: {userProfile.address.state}</p>
            <p>Country: {userProfile.address.country}</p>
          </div>
        </div>
      );
    };
    
export default UserProfile;