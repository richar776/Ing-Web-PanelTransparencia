import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonMenuButton,
} from '@ionic/react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom';
import '../theme/Inicio.css';

ChartJS.register(ArcElement, Tooltip);

const pieData = {
  labels: ['Utilizado', 'Disponible'],
  datasets: [
    {
      data: [32.3, 67.7],
      backgroundColor: ['#5ba3e6', '#1e4a8c'],
      borderWidth: 0,
    },
  ],
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: 0,
  rotation: 0,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
};

const BARRAS = [
  { nombre: 'Mantenimiento', valor: 880000 },
  { nombre: 'Sueldos', valor: 760000 },
  { nombre: 'Proyectos', valor: 420000 },
];

const MAX_BARRA = 1_000_000;

const TAB_TITLES: Record<string, string> = {
  inicio: 'Inicio',
  ingresos: 'Ingresos',
  gastos: 'Gastos',
  contratos: 'Contratos',
  proyectos: 'Proyectos',
  perfil: 'Perfil',
};

const Inicio: React.FC = () => {
  const { pathname } = useLocation();
  const tab = pathname.split('/').filter(Boolean).pop() ?? 'inicio';
  const seccion = TAB_TITLES[tab] ?? 'Inicio';

  return (
  <IonPage className="inicio-page">
    <IonHeader className="ion-no-border">
      <IonToolbar />
    </IonHeader>
    <IonContent className="inicio-content" fullscreen>
      <div className="inicio-wrap">
        <header className="inicio-desktop-header">
          <div className="inicio-desktop-left">
            <div className="inicio-menu-block">
              <IonMenuButton autoHide={false} />
              <span>Menu</span>
            </div>
            <IonImg src="/logo.png" alt="Logo" className="inicio-logo-desktop" />
          </div>
          <h1 className="inicio-title-desktop">Panel de transparencia</h1>
          <div className="inicio-desktop-user">
            <img src="/perfil.png" alt="Perfil" className="inicio-avatar" />
            <p>Bienvenido usuario</p>
          </div>
        </header>

        <IonImg src="/logo.png" alt="Logo" className="inicio-logo" />
        <h1 className="inicio-title">Panel de transparencia</h1>

        <div className="inicio-panel">
          <p className="inicio-kicker">{seccion}</p>
          <IonCard className="inicio-card">
            <IonCardHeader>
              <IonCardTitle>Presupuesto municipal 2026</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="pie-layout">
                <p className="pie-label pie-label-left">
                  Disponible 67.7%
                </p>
                <div className="pie-canvas">
                  <Pie data={pieData} options={pieOptions} />
                </div>
                <p className="pie-label pie-label-right">
                  Utilizado 32.3%
                </p>
              </div>
              <p className="inicio-total">Presupuesto total $346.489.950.345</p>
            </IonCardContent>
          </IonCard>

          <IonCard className="inicio-card">
            <IonCardContent>
              <div className="bars-chart">
                <div className="bars-y">
                  <span>$20.000.000</span>
                  <span>$10.000.000</span>
                  <span>$5.000.000</span>
                  <span>$1.000.000</span>
                  <span>$0</span>
                </div>
                <div className="bars-plot">
                  <div className="bars-grid">
                    <i /><i /><i /><i /><i />
                  </div>
                  <div className="bars-row">
                    {BARRAS.map((b) => (
                      <div key={b.nombre} className="bar-col">
                        <div
                          className="iso-bar"
                          style={{ height: `${(b.valor / MAX_BARRA) * 100}%` }}
                        >
                          <span className="iso-top" />
                          <span className="iso-side" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bars-x">
                    {BARRAS.map((b) => (
                      <span key={b.nombre}>{b.nombre}</span>
                    ))}
                  </div>
                </div>
              </div>
              <IonCardTitle className="inicio-title-bottom">Últimos gastos</IonCardTitle>
            </IonCardContent>
          </IonCard>
        </div>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default Inicio;
