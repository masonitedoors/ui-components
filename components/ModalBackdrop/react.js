import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const ModalBackdrop = ({
  children,
  className,
  dismissOnEsc = true,
  onOutsideClick,
  show,
  style,
}) => {
  const [entered, setEntered] = useState(false)
  const backdropRef = useRef()

  useEffect(() => {
    // Inner transition won't fire, if outer transition's `in` is already true.
    setEntered(show)

    const dismissModal = event => ['Esc', 'Escape'].includes(event.key) && onOutsideClick()

    dismissOnEsc && window.addEventListener('keyup', dismissModal)

    return () => window.removeEventListener('keyup', dismissModal)
  }, [])

  return (
    <CSSTransition
      in={show}
      timeout={150}
      classNames="modal-backdrop"
      onEntered={() => setEntered(true)}
      onExited={() => setEntered(false)}
    >
      <div
        ref={backdropRef}
        className={cx('modal-backdrop', show && 'modal-backdrop--active', className)}
        style={style}
        onClick={event => event.target === backdropRef.current && onOutsideClick()}
      >
        <CSSTransition in={entered} timeout={250} classNames="modal-backdrop__content">
          <div className={cx('modal-backdrop__content')}>{children}</div>
        </CSSTransition>
      </div>
    </CSSTransition>
  )
}

export default ModalBackdrop

ModalBackdrop.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  onOutsideClick: PropTypes.func,
  show: PropTypes.bool,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    background: PropTypes.string,
  }),
}

ModalBackdrop.defaultProps = {
  className: '',
  onOutsideClick: null,
  show: true,
  style: null,
}
