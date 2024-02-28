import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createRole, updateRole } from '../redux/actions/rolesActions';

interface RoleModalProps {
  onClose: () => void;
  role: any | null;
}

const RoleModal: React.FC<RoleModalProps> = ({ onClose, role }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [permissions, setPermissions] = useState<string[]>([]); // Change the type to string[]
  const [isDefault, setIsDefault] = useState(false);

  useEffect(() => {
    if (role) {
      setName(role.name);
      setDescription(role.description);
      setPermissions(role.permissions);
      setIsDefault(role.default);
    } else {
      setName('');
      setDescription('');
      setPermissions([] as string[]); // Initialize as an empty string array
      setIsDefault(false);
    }
  }, [role]);

  const handleSave = () => {
    if (role) {
      dispatch(updateRole(role.id, { name, description, permissions, default: isDefault }));
    } else {
      dispatch(createRole({ name, description, permissions, default: isDefault }));
    }
    onClose();
  };

  return (
    <div>
      <h2>{role ? 'Edit Role' : 'Create Role'}</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Permissions:
        <input type="text" value={permissions.join(',')} onChange={(e) => setPermissions(e.target.value.split(','))} />
      </label>
      <label>
        Default:
        <input type="checkbox" checked={isDefault} onChange={() => setIsDefault(!isDefault)} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default RoleModal;
