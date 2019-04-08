import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import style from '../style.module.scss'

const cx = classNames.bind(style)

const ModalFooter = ({ children }) => (
  <footer className={cx('wizard-modal__footer')}>{children}</footer>
)

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
}

export default ModalFooter