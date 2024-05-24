import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import './UserProfile.css';

const UserProfileWithImmer = () => {
    const [userProfile, updateUserProfile] = useImmer(() => {
        const storedProfile = localStorage.getItem('userProfile');
        return storedProfile ? JSON.parse(storedProfile) : {
            name: '',
            email: '',
            contactDetails: {
                phone: '',
                address: ''
            },
            preferences: {
                newsletter: false
            }
        };
    });

    useEffect(() => {
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }, [userProfile]);

    const updateName = (name) => {
        updateUserProfile(draft => {
            draft.name = name;
        });
    };

    const updateEmail = (email) => {
        updateUserProfile(draft => {
            draft.email = email;
        });
    };

    const updateContactDetails = (field, value) => {
        updateUserProfile(draft => {
            draft.contactDetails[field] = value;
        });
    };

    const toggleNewsletterSubscription = () => {
        updateUserProfile(draft => {
            draft.preferences.newsletter = !draft.preferences.newsletter;
        });
    };

    return (
        <div className="UserProfile">
            <h1>User Profile</h1>
            <div className="profile-image">
                <img src="https://via.placeholder.com/150" alt="Profile" />
            </div>
            <div className="profile-details">
                <h2>Info</h2>
                <div>Name: {userProfile.name || 'N/A'}</div>
                <div>Email: {userProfile.email || 'N/A'}</div>
                <div>Phone: {userProfile.contactDetails.phone || 'N/A'}</div>
                <div>Address: {userProfile.contactDetails.address || 'N/A'}</div>
                <div>Newsletter: {userProfile.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}</div>
            </div>
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={userProfile.name}
                    onChange={(e) => updateName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={userProfile.email}
                    onChange={(e) => updateEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={userProfile.contactDetails.phone}
                    onChange={(e) => updateContactDetails('phone', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input
                    type="text"
                    placeholder="Enter your address"
                    value={userProfile.contactDetails.address}
                    onChange={(e) => updateContactDetails('address', e.target.value)}
                />
            </div>
            <div className="form-group checkbox-group">
                <input
                    type="checkbox"
                    id="newsletter"
                    checked={userProfile.preferences.newsletter}
                    onChange={toggleNewsletterSubscription}
                />
                <label htmlFor="newsletter">Subscribe to Newsletter</label>
            </div>
        </div>
    );
};

export default UserProfileWithImmer;