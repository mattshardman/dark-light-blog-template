import React from 'react';
import PropTypes from 'prop-types';

function Switch({ dark, setDark }) {
  return (
    <div className="switch">
      <div className="dark">
        <i
          className="fas fa-moon"
          style={{ fontSize: 14, color: '#fff' }}
        />
      </div>
      <div className="light">
        <i
          className="fas fa-sun"
          style={{ fontSize: 14, color: '#fff' }}
        />
      </div>
      <button
        type="button"
        className="slider"
        onClick={() => setDark(!dark)}
      />
      <style jsx>{`
        .switch {
            display: flex;
            position: relative;
            width: 60px;
            height: 30px;
            border-radius: 15px;
            background: #000;
        }

        .slider {
            position: absolute;
            height: 30px;
            width: 30px;
            border-radius: 15px;
            background: #fff;
            outline: none;
            border: 3px #000 solid;
            transition: transform 400ms;
            transform: translateX(${dark ? '0%' : '100%'});
            cursor: pointer;
        }

        .dark {
            display: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            right: 0;
        }

        .light {
            display: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            left: 0;
        }
      `}
      </style>
    </div>
  );
}

Switch.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
};

export default Switch;
