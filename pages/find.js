var selectedColor = 'violet'
export default () => (
  <div>
    <b>You want a {selectedColor} tshirt color:</b><br />
    {['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].find(color => color === selectedColor)
    ? 'We have that color'
    : 'We do not have that color'}
  </div>
)
