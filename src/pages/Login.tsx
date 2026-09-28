import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonInput,
  IonButton,
  IonText,
  IonImg,
} from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../theme/auth.css';

const Login: React.FC = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

      const handleLogin = () => {
    //Valida campos vacios
    if (!correo.trim() || !password) 
      {
      alert('Completa todos los campos');
      return;
    }
    // Simulacion
    console.log({ correo });
    alert('Inicio de sesión (simulado)');
  };

return (
    <IonPage className="auth-page">
      <IonHeader className="ion-no-border">
        <IonToolbar />
      </IonHeader>
      <IonContent className="auth-content auth-split">
        <div className="auth-wrap">
            <IonImg src="/logo.png" alt="Logo" className="auth-logo" />
            
            <div className="auth-card">
                <h1>Inicio de sesión</h1>
                <p className="auth-subtitle">Inicia sesión para continuar!</p>

                <div className="field">
                  <label className="field-label">
                     Correo
                  </label>
                <IonInput
                    placeholder="Ingresa tu correo"
                    type="email"
                    required
                    value={correo}
                    onIonInput={(e) => setCorreo(e.detail.value ?? '')}
                />
                </div>

                <div className="field">
                    <label className="field-label">
                     Contraseña
                    </label>
                <IonInput
                    placeholder="Ingresa tu contraseña"
                    type="password"
                    required
                    value={password}
                    onIonInput={(e) => setPassword(e.detail.value ?? '')}
                />
                </div>

                <div className="auth-actions">
                    <IonButton expand="block" shape="round" onClick={handleLogin}>
                        Iniciar Sesión
                    </IonButton>
                    <p className="login-link">
                        ¿No tienes cuenta? <Link to="/register">Crea tu cuenta aquí</Link>
                    </p>
                    <p className="login-link">
                        <Link to="/recuperar">Recuperar contraseña</Link>
                    </p>
                </div>
            </div>

        </div>
      </IonContent>
    </IonPage>
  );
};
export default Login;