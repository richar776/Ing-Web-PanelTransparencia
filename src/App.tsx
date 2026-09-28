import { Navigate, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Register from './pages/Register';
import Login from './pages/Login';
import Inicio from './pages/Inicio';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

import './theme/auth.css';
import './theme/Inicio.css';

setupIonicReact();

const MainTabs: React.FC = () => (
  <>
    <IonMenu contentId="main-content" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menú</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/tabs/inicio" routerDirection="root">
            Inicio
          </IonItem>
          <IonItem routerLink="/tabs/ingresos" routerDirection="root">
            Ingresos
          </IonItem>
          <IonItem routerLink="/tabs/gastos" routerDirection="root">
            Gastos
          </IonItem>
          <IonItem routerLink="/tabs/contratos" routerDirection="root">
            Contratos
          </IonItem>
          <IonItem routerLink="/tabs/proyectos" routerDirection="root">
            Proyectos
          </IonItem>
          <IonItem routerLink="/tabs/perfil" routerDirection="root">
            Perfil
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonTabs>
      <IonRouterOutlet id="main-content">
        <Route path="inicio" element={<Inicio />} />
        <Route path="ingresos" element={<Inicio />} />
        <Route path="gastos" element={<Inicio />} />
        <Route path="contratos" element={<Inicio />} />
        <Route path="proyectos" element={<Inicio />} />
        <Route path="perfil" element={<Inicio />} />
        <Route path="" element={<Navigate to="/tabs/inicio" replace />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="main-tab-bar">
        <IonTabButton tab="inicio" href="/tabs/inicio">
          <img className="tab-img" src="/home.png" alt="" />
        </IonTabButton>
        <IonTabButton tab="ingresos" href="/tabs/ingresos">
          <img className="tab-img" src="/ingresos.png" alt="" />
        </IonTabButton>
        <IonTabButton tab="gastos" href="/tabs/gastos">
          <img className="tab-img" src="/gastos.jpg" alt="" />
        </IonTabButton>
        <IonTabButton tab="contratos" href="/tabs/contratos">
          <img className="tab-img" src="/contrato.jpg" alt="" />
        </IonTabButton>
        <IonTabButton tab="proyectos" href="/tabs/proyectos">
          <img className="tab-img" src="/proyectos.jpg" alt="" />
        </IonTabButton>
        <IonTabButton tab="perfil" href="/tabs/perfil">
          <img className="tab-img" src="/perfil.png" alt="" />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </>
);

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tabs/*" element={<MainTabs />} />
        <Route path="/inicio" element={<Navigate to="/tabs/inicio" replace />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
