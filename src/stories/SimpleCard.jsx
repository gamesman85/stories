export const SimpleCard = ({ title, description, isActive = false }) => {
  const cardStyle = {
    padding: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    backgroundColor: isActive ? '#f0f8ff' : 'white',
    maxWidth: '300px',
    margin: '16px'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>
      {description && <p style={{ margin: 0 }}>{description}</p>}
    </div>
  );
};