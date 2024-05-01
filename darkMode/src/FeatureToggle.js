import React from 'react';

function FeatureToggle({ isEnabled, lightSwitch }) {
  return (
    <div>
      {isEnabled ? (
        <p>ON</p>
      ) : (
        <p>OFF</p>
      )}
      <button onClick={lightSwitch}>Toggle Light</button>
    </div>
  );
}
export default FeatureToggle;