import React from 'react';

const AccessRoom = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Ingresar</h2>

      <div>
        <label htmlFor='name'>Nombre:</label>
        <input
          type='text'
          id='field'
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>

      <div>
        <label htmlFor='room'>Room:</label>
        <input
          type='text'
          id='room'
          value={roomName}
          onChange={handleRoomNameChange}
          required
        />
      </div>
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default AccessRoom;
