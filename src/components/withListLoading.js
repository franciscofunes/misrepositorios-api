import React from 'react';

function WithListLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Aguarde unos minutos, la respuesta de la información solicitada puede demorar unos minutos :)
      </p>
    );
  };
}
export default WithListLoading;