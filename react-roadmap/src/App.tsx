import React, { useEffect, useState } from 'react'
import FuncionalComponent from './components/funcionalComponent'

function Notification({ status }) {
	return (
	  <div>
		{(() => {
		  switch (status) {
			case 'info':
			  return 'info';
			case 'warning':
			  return 'warning';
			case 'error':
			  return 'error';
			default:
			  return null;
		  }
		})()}
	  </div>
	);
  }
  function NotificationTwo({ status }) {
	return (
	  <div>
		{
		  {
			info: <p>info</p>,
			warning: <p>warning</p>,
			error: <p>error</p>,
		  }[status]
		}
	  </div>
	);
  }

const App = () => {
	return (
		<>
			<h1 className="text-1xl font-bold">Hola</h1>
			<FuncionalComponent />
			<Notification />
			<NotificationTwo />
		</>
	)
}

export default App
