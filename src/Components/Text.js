import React from 'react'

const Text = ({color = '', type, size, weight, children}) => {
  return <span className={type}>{children}</span>;
}

Text.COLOR = {
  BLUE: 'blue-text',
  GREEN: 'green-text',
  YELLOW: 'yellow-text',
  RED: 'red-text',
};

Text.TYPE = {
  CODE: 'code',
}

Text.WEIGHT = {
  DEFAULT: 'default',
  SEMIBOLD: 'semibold',
  BOLD: 'bold'
}

export default Text;