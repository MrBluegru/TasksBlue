import React, { useState } from 'react';

const RegisterForm = () => {
    const initialData = [
        {
          user: "",
          name: "",
          email: "",
          password: "",

        },
      ];
    
      const [credentials, setCredentials] = useState(initialData);
    
    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
