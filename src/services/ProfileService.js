// Profile.js
import React, { useState, useEffect } from 'react';
import ProfileService from '../../services/ProfileService';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await ProfileService.getProfile();
        setUserProfile(profileData);
      } catch (error) {
        console.error('Error al obtener perfil:', error);
      }
    };

    fetchProfile();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h2>Perfil</h2>
      {userProfile ? (
        <div>
          <p>Nombre: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          {/* Agrega más detalles según tu modelo de datos */}
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  );
};

export default Profile;
