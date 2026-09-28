# EP 1.1. Requerimientos
## EP 1.1.1. Requerimientos Funcionales
| ID  | Rol  | Titulo  | Descripción  |
| ------------ | ------------ | ------------ | ------------ |
| RF1 | Ciudadano | Reconocimiento de gastos | Los ciudadanos podrán buscar gastos filtrando por fecha, departamento municipal, proveedor o rango de monto. |
| RF2 | Ciudadano | Busqueda de ingresos | Los ciudadanos podrán buscar ingresos filtrando por fecha, evento o proveedor de origen, rango de monto. |
| RF3 | Ciudadano | Visualización de ingresos | Los ciudadanos podrán visualizar mediante gráficos los ingresos con mayor importancia para el presupuesto municipal. |
| RF4 | Ciudadano | Generación de Tableros | El sistema generará gráficos interactivos para comparar visualmente los ingresos versus los gastos ejecutados para ciertos períodos indicados. |
| RF5 | Ciudadano | Módulo de Trazabilidad | El usuario podrá rastrear el estado histórico de un contrato específico, desde su licitación hasta su pago final. |
| RF6 | Ciudadano | Exportación Abierta | El sistema habilitará la descarga completa de los reportes financieros en formatos de datos abiertos (CSV o JSON) para análisis independientes. |
| RF7 | Ciudadano | Reporte de Anomalias | El ciudadano podrá marcar un gasto específico como dudoso o solicitar aclaraciones, adjuntando pruebas o comentaros, lo que generará un ticket de auditoría. |
| RF8 | Funcionario | Gestión de Justificaciones | El sistema permitirá al funcionario adjuntar documentos respaldatorios (PDFs) a cada gasto publicado para validar su legitimidad. |
| RF9 | Funcionario | Gestión de Ticket | El funcionario tendrá un panel para revisar,responder, y dar por resuelto los ticket de anomalías levantados por los usuarios, dejando registro público de la respuesta |

## EP 1.1.2. Requerimientos No Funcionales
| ID  | Tipo  | Descripción  |
| ------------ | ------------ | ------------ |
| RNF1 |  Rendimiento |El tiempo de carga de los gráficos interactivos y tableros financieros no deberá superar tiempos muy elevados.|
|  RNF2 |Seguridad|Se aplicará un control de acceso basado en roles (RBAC) estricto para garantizar que los ciudadanos solo tengan permisos de lectura y no puedan alterar las finanzas. |
| RNF3   |Usabilidad|La interfaz web debe ser responsiva y cumplir con estándares de accesibilidad para garantizar el acceso a usuarios con discapacidades y alfabetización digital.|
| RNF4  |Portabilidad|El sistema debe estar construido bajo una arquitectura híbrida con Ionic y React, garantizando que el mismo código se compile funcionalmente para web, Android e iOS sin perder características. |
| RNF5  |Seguridad de Sesión|Por normativas de seguridad municipal, el sistema cerrará automáticamente la sesión de cualquier Funcionario tras 15 minutos de inactividad, previniendo accesos no autorizados.|
| RNF6  |Disponibilidad Offline| La aplicación móvil deberá cachear localmente los últimos reportes financieros consultados (usando Ionic Storage o similar) para que el ciudadano pueda leerlos incluso sin conexión a internet. |
| RNF7  |Mantenibilidad| El desarrollo frontend en React deberá seguir un patrón basado en componentes reutilizables, estableciendo que ningún componente exceda muchas líneas de código que podrían ser mejor modularizadas para facilitar su futura actualización, mantenimiento o escalabilidad.  |

# EP 1.2. Contextualización de la problemática
## EP 1.2.1. Justificación del problema
La correcta administración de los recursos públicos es fundamental para mejorar la calidad de vida de los ciudadanos. Este objetivo se aborda de distintas maneras dependiendo de las características de cada comuna, como su cantidad de habitantes, sus oportunidades de desarrollo turístico y las posibilidades laborales y de emprendimiento dentro de su territorio. La diversidad de estos factores genera diferencias significativas en las estrategias y decisiones adoptadas por cada municipalidad, así como en los resultados obtenidos.

Sin embargo, la variedad de procesos y decisiones involucrados dificulta que las municipalidades puedan fiscalizar adecuadamente todas sus operaciones, tanto estructurales como financieras. Por lo general, estas labores requieren de un equipo especializado en el ámbito financiero. No obstante, según el estudio<sup>[1](https://www.latercera.com/nacional/noticia/estudio-alerta-escasa-fiscalizacion-en-municipios-un-30-no-realizo-auditorias-en-el-ultimo-ano-y-tiene-solo-un-funcionario-en-esa-labor/USYQIMUYUZCRXP64JZPH37X3HQ/ "1")</sup> proporcionado para la temática de este proyecto, la mayoría de las municipalidades cuenta con apenas uno o dos responsables de fiscalizar las auditorías, quienes, además, no suelen disponer de presupuestos independientes para desarrollar sus funciones. Esta situación puede provocar que, durante períodos de menor disponibilidad presupuestaria, las labores de fiscalización no puedan llevarse a cabo en su totalidad.

Por otro lado, las deficiencias en la fiscalización no siempre se deben a limitaciones presupuestarias, sino que también pueden presentarse en contextos de corrupción. Estos hechos afectan directamente la confianza de la ciudadanía en las instituciones públicas. Según un estudio más reciente<sup>[2](https://www.imaginaccion.cl/post/estudio-sobre-corrupci%C3%B3n-municipal-en-medios-44-comunas-se-llevan-la-atenci%C3%B3n "2")</sup>, al menos una cuarta parte de la población chilena reside en comunas que han sido denunciadas durante los últimos años por el uso indebido de recursos públicos. Esta problemática no solo repercute en los habitantes de dichas comunas, sino que también afecta la percepción general de la gestión municipal, incluso en aquellas localidades donde los recursos se administran responsablemente. En estos casos, la falta de equipos de auditoría adecuadamente conformados y financiados puede dificultar que las municipalidades garanticen la transparencia de su gestión ante la ciudadanía.

En este contexto, mejorar la transparencia de la Municipalidad de Santo Domingo resulta relevante para continuar fortaleciendo la confianza de los ciudadanos en su municipalidad y mantenerlos informados mediante mecanismos de comunicación accesibles y comprensibles, sin que sea necesario contar con conocimientos financieros previos.

Actualmente, algunas de las soluciones existentes orientadas a promover la transparencia presentan información excesivamente técnica o demasiado extensa, lo que dificulta su comprensión incluso después de una primera revisión. Como consecuencia, algunos ciudadanos pueden perder el interés en mantenerse informados debido a la complejidad que implica interpretar estos datos. Esta falta de información, a su vez, puede favorecer la aparición de especulaciones y desinformación, afectando la percepción ciudadana sobre la gestión municipal de turno.

## EP 1.2.2. Análisis de soluciones existentes
Entre las soluciones actuales que abordan parcialmente la problemática identificada, se encuentran las siguientes:
- La cuenta pública: Es una instancia oficial y anual en la que una autoridad del Estado debe presentar un informe sobre diversos aspectos de su gestión en la comuna, tales como los gastos realizados, los planes de seguridad, los proyectos ejecutados, las ayudas sociales y las gestiones internas. Asimismo, contempla una resolución en la que se evalúan los desafíos futuros.
	- Ventajas:
		- Al tratarse de una instancia oficial, proporciona información legítima y suele abordar hitos relevantes para la ciudadanía. Esta instancia se desarrolla en el marco del artículo 67 de la Ley N.º 18.695<sup>[3](https://bcn.cl/2f9uj "3")</sup>, que busca promover la participación ciudadana.
		- Durante la etapa final de este informe, en la que se evalúan los próximos desafíos, se considera a los ciudadanos como uno de los principales ejes de la gestión municipal, reconociendo su importancia y los beneficios que pueden obtener de las acciones propuestas.
	- Desventajas:
		- Al realizarse únicamente una vez al año, dificulta el seguimiento continuo de la gestión municipal y la detección oportuna de posibles anomalías, las cuales podrían identificarse recién cuando sus consecuencias se hagan evidentes.
		- Los ciudadanos con menor familiaridad con el lenguaje administrativo o financiero pueden encontrar dificultades para comprender la información presentada durante una exposición formal y extensa.
		- Debido a su formato expositivo, no siempre se generan instancias de participación directa que permitan a los ciudadanos expresar sus opiniones, realizar críticas o plantear inquietudes durante la presentación del informe.

- [Portal Transparencia<sup>4</sup>](https://www.portaltransparencia.cl/PortalPdT/ "Portal Transparencia<sup>4</sup>"): Es una plataforma del Estado de Chile orientada a facilitar el acceso de las personas a la información pública, permitiéndoles consultar y solicitar antecedentes. Esta iniciativa surge en el marco de la Ley de Transparencia o Ley N.º 20.285<sup>[5](https://bcn.cl/25bya "5")</sup>
	- Ventajas:
		- Facilita el acceso de los ciudadanos a información relacionada con la gestión y el uso de los recursos públicos, permitiéndoles consultar antecedentes cuando lo estimen necesario. 
		- Favorece la investigación de posibles anomalías mediante el acceso a una mayor cantidad de datos cuantitativos.
	- Desventajas:
		- Al tratarse de una alternativa exclusivamente digital, puede representar una dificultad para personas afectadas por la brecha digital, especialmente aquellas que no cuentan con experiencia en el uso de herramientas tecnológicas.
		- El proceso de ingreso, solicitud y revisión de información puede requerir un tiempo considerable de aprendizaje, particularmente cuando es necesario completar formularios de inscripción o utilizar herramientas específicas para interpretar los archivos descargados.
		- Por otro lado, la actualización de la información por parte de algunos municipios puede presentar desfases considerables respecto de la fecha en que se generan los antecedentes, lo que limita la posibilidad de realizar un seguimiento oportuno de su gestión.

- Organizaciones y/o activistas independientes: Corresponden a personas u organizaciones que, motivadas por sus propios intereses e ideales, investigan activamente la gestión interna de los gobiernos o municipios. Posteriormente, difunden sus hallazgos mediante sitios web independientes o redes sociales, seleccionando la información que consideran relevante para sus seguidores o suscriptores.
	- Ventajas:
		- Esta alternativa suele destacar por su rapidez y actividad en la difusión de información, ya que sus integrantes pueden contar con experiencia o conocimientos en materias financieras y políticas. 
		- Su familiaridad con estos temas les permite interpretar la información con mayor facilidad y comunicar mediante un lenguaje más sencillo y comprensible para la ciudadanía.
	- Desventajas:
		- Las personas u organizaciones independientes pueden presentar sesgos en el análisis y la comunicación de la información, debido a sus propios intereses o perspectivas. 
		- En determinadas ocasiones, estos sesgos pueden llevar a interpretar o difundir información errónea, afectando la comprensión de los hechos y la confianza de los ciudadanos hacia determinados sectores o instituciones.

- [Cambiometro<sup>6</sup>](https://cambiometro.impulsacv.cl/municipalidades/santo-domingo/ "Cambiometro<sup>6</sup>"): Es una plataforma ciudadana e independiente creada por Jorge Morgado e impulsada por ImpulsaCV. Recopila, consolida y presenta, tanto de manera estática como interactiva, datos oficiales relacionados con el Estado de Chile, incluyendo información sobre autoridades, remuneraciones, municipios, votaciones y gasto público. 
	- Ventajas:
		- Es una plataforma consolidada que permite comparar información entre distintos municipios de manera sencilla.
		- A diferencia de otras alternativas digitales que requieren descargar archivos para realizar análisis comparativos, facilita la visualización y comparación de datos desde una misma interfaz.
		- Además, se diferencia de las iniciativas impulsadas por personas u organizaciones independientes al utilizar fuentes oficiales y verificadas para recopilar sus datos. La inclusión de referencias, enlaces y archivos de respaldo contribuye a entregar mayor confianza a los usuarios respecto de la legitimidad de la información presentada.
	- Desventajas:
		- Aunque su diseño es ordenado y evita la sobrecarga visual de información, la interpretación de los datos continúa requiriendo ciertos conocimientos técnicos, lo que puede dificultar su comprensión para ciudadanos sin experiencia en materias financieras o administrativas.
		- Al utilizar exclusivamente información oficial, presenta una limitación similar a la del Portal de Transparencia: algunos apartados pueden contener advertencias sobre la falta de información actualizada, debido a que los municipios no siempre publican sus antecedentes en tiempo real o en plazos breves.
		- Al tratarse de una iniciativa independiente, su continuidad depende en parte del financiamiento obtenido mediante donaciones. A largo plazo, esta dependencia podría afectar el mantenimiento de la plataforma, de manera similar a las limitaciones presupuestarias que enfrentan los departamentos de auditoría interna de algunas municipalidades. Mientras que estas últimas pueden experimentar interrupciones en sus labores de fiscalización, la plataforma podría enfrentar dificultades para mantener sus servicios, renovar sus dominios o financiar los recursos necesarios para su funcionamiento y despliegue.

## EP 1.2.3. Caracterización de los usuarios
La aplicación estará dirigida a dos grupos principales de usuarios: los ciudadanos de la comuna de Santo Domingo y los funcionarios municipales responsables de la administración, publicación y fiscalización de la información financiera. Ambos grupos presentan necesidades diferentes, pero complementarias, relacionadas con la transparencia y la trazabilidad de los recursos públicos.
Por un lado, se busca facilitar el acceso a la información municipal para los ciudadanos, especialmente aquellos que no cuentan con conocimientos financieros previos o que presentan una baja predisposición a participar activamente en instancias de fiscalización y participación ciudadana. Por otro lado, se contempla a los funcionarios municipales, particularmente a aquellos vinculados con las labores de auditoría interna, considerando las limitaciones de recursos humanos que pueden dificultar el seguimiento y la fiscalización de los procesos financieros.

------------


### Ciudadanos de Santo Domingo

Este grupo corresponde a los habitantes de la comuna que buscan o deberían (por los deberes cívicos de todos los chilenos) informarse sobre la gestión municipal, el uso de los recursos públicos y los proyectos financiados mediante el presupuesto comunal.

El proyecto se enfocará especialmente en ciudadanos que no poseen formación académica ni experiencia previa en materias financieras, contables o administrativas, así como en aquellos que no suelen involucrarse activamente en instancias de participación ciudadana. Esta caracterización responde a la necesidad de ofrecer una alternativa que permita consultar información municipal sin requerir conocimientos especializados ni una participación activa en organizaciones comunitarias.

#### Características generales:
- Residentes de la comuna de Santo Domingo, con distintos niveles de formación académica y experiencia tecnológica.
- Con conocimientos financieros limitados o inexistentes.
- Con distintos grados de interés y participación en asuntos relacionados con la gestión municipal.
- Usuarios que pueden presentar dificultades para interpretar documentos financieros, presupuestos o informes de auditoría.
- Potenciales usuarios que prefieren acceder a información de manera rápida, autónoma y mediante interfaces intuitivas.

#### Necesidades principales:
- Acceder fácilmente a información sobre los ingresos, gastos, contratos y proyectos financiados por la municipalidad.
- Comprender el destino de los recursos públicos mediante explicaciones claras y visualizaciones sencillas.
- Consultar información actualizada sin necesidad de asistir presencialmente a instancias municipales.
- Identificar el origen de los datos publicados y acceder a sus respectivas fuentes oficiales.
- Mantenerse informados sobre la gestión municipal sin requerir conocimientos técnicos ni una participación comunitaria constante.

#### Contexto de uso:

Se contempla que los ciudadanos utilicen la aplicación principalmente desde sus dispositivos personales, como teléfonos inteligentes, computadores o tabletas, en sus hogares o durante sus actividades cotidianas, esta fácil accesibilidad del ciudadano promedio se puede evidenciar en la alta digitalización<sup>[7](https://www.diariousach.cl/las-condes-santo-domingo-y-vina-del-mar-son-comunas-mas-digitalizadas-de#:~:text=Digitales%20%28Nudos%29,a%20nivel%20local. "7")</sup> que existe en la comuna. El acceso podría producirse de manera ocasional, motivado por el interés en conocer el estado de algún proyecto municipal, revisar el destino de determinados recursos o consultar información relacionada con la gestión de las autoridades comunales.


#### Objetivos y tareas dentro del sistema:

- Consultar información sobre ingresos y gastos municipales.
- Visualizar la distribución de los recursos públicos mediante gráficos y elementos interactivos.
- Revisar el estado de proyectos, contratos y otras iniciativas financiadas por la municipalidad.
- Consultar información histórica para comparar períodos de gestión.
- Acceder a documentos y fuentes oficiales que respalden los datos presentados.
- Comprender de manera sencilla cómo se administran los recursos de la comuna.


#### Experiencia tecnológica y necesidades de accesibilidad:

Se considera un nivel de experiencia tecnológica variable, desde usuarios familiarizados con plataformas digitales hasta personas que requieren interfaces más intuitivas y orientación durante la navegación para adultos mayores, ya que presentan una alta tasa de abandono<sup>[8](https://www.sanantonio.cl/municipalidad/noticias/item/14937-la-oficina-de-la-juventud-mantendra-un-punto-de-atencion-presencial-hasta-el-5-de-junio-para-asesorar-a-la-comunidad-en-la-tramitacion-digital-del-vale-de-gas-y-el-subsidio-electrico.html "8")</sup> al momento de utilizar sitios web.

Por esta razón, la aplicación deberá priorizar una interfaz sencilla, con navegación clara, lenguaje comprensible y una presentación visual de los datos que reduzca la necesidad de interpretar documentos financieros complejos. Asimismo, se deberá considerar la legibilidad de los contenidos, el contraste visual y la adaptación a distintos tamaños de pantalla.

------------

### Funcionarios municipales de Santo Domingo

Este grupo corresponde a los funcionarios encargados de gestionar, registrar, revisar y publicar información relacionada con los recursos financieros de la municipalidad, considerando especialmente a quienes desempeñan labores de auditoría interna.

Para este proyecto se contempla como antecedente que la municipalidad cuenta con dos personas designadas para las labores de auditoría interna<sup>[9](https://santodomingo.cl/direcciones/ "9")</sup>. Esta condición representa una consideración importante para el diseño de la aplicación, ya que la disponibilidad limitada de personal puede dificultar el seguimiento continuo de los procesos financieros y la preparación de información destinada a la ciudadanía, por lo que se considerará la posibilidad de considerar dentro del rol de funcionarios a trabajadores que aunque no pertenezcan a las labores de auditoría interna, si tengan acceso a archivos o datos necesarios para estas labores.

#### Características generales:

- Funcionarios pertenecientes a la Municipalidad de Santo Domingo.
- Personal relacionado con la gestión financiera, administrativa y de auditoría interna.
- Conocimientos variables en herramientas digitales y sistemas de gestión.
- Responsabilidades asociadas al registro, revisión, organización y publicación de información municipal independiente de su dirección de trabajo.
- Disponibilidad limitada de tiempo y recursos humanos para desarrollar labores de fiscalización y seguimiento de manera recurrente.

#### Necesidades principales:

- Disponer de un espacio centralizado para consultar y organizar información financiera municipal.
- Facilitar el seguimiento de ingresos, gastos, contratos y proyectos.
- Mantener registros que permitan identificar el origen y las modificaciones de la información.
- Facilitar la preparación de información comprensible y verificable para su posterior publicación.
- Contar con mecanismos que permitan detectar inconsistencias o antecedentes pendientes de revisión.


#### Contexto de uso:

Se contempla que los funcionarios utilicen la aplicación principalmente desde sus computadores de trabajo, durante sus jornadas laborales, como parte de las actividades relacionadas con la administración financiera, revisión de antecedentes y fiscalización interna.

El uso de la plataforma podría ser recurrente, especialmente durante los procesos de actualización de información, revisión de movimientos financieros y preparación de reportes destinados a la ciudadanía.


#### Objetivos y tareas dentro del sistema:

- Registrar y actualizar información relacionada con ingresos y gastos municipales.
Incorporar antecedentes sobre contratos y proyectos financiados con recursos públicos.
- Consultar registros históricos y realizar seguimiento de los movimientos financieros.
- Revisar la documentación asociada a cada registro.
- Identificar información incompleta o inconsistencias que requieran revisión.
- Preparar y publicar información para su consulta ciudadana.
- Facilitar la trazabilidad de los datos mediante registros de actualización y fuentes documentales.
- Gestionar consultas ciudadanas sobre movimientos o detalles en la trazabilidad de los gastos

#### Experiencia tecnológica y necesidades de seguridad:

Se considera que los funcionarios poseen experiencia en el uso de herramientas informáticas de oficina, aunque su familiaridad con sistemas especializados de visualización y seguimiento financiero puede variar.

Por ello, la aplicación deberá ofrecer herramientas de administración intuitivas, formularios estructurados y mecanismos que reduzcan los errores durante el ingreso de información.

En cuanto a seguridad, será necesario diferenciar los permisos de acceso según el rol del funcionario, resguardar la integridad de los registros y mantener mecanismos de trazabilidad que permitan identificar las modificaciones realizadas, su responsable y la fecha correspondiente.


# Referencias
1. https://www.latercera.com/nacional/noticia/estudio-alerta-escasa-fiscalizacion-en-municipios-un-30-no-realizo-auditorias-en-el-ultimo-ano-y-tiene-solo-un-funcionario-en-esa-labor/USYQIMUYUZCRXP64JZPH37X3HQ/

2. https://www.imaginaccion.cl/post/estudio-sobre-corrupci%C3%B3n-municipal-en-medios-44-comunas-se-llevan-la-atenci%C3%B3n

3. Congreso Nacional de Chile. (16 de noviembre de 2007). Ley no. 18.695. Ley Orgánica Constitucional de Municipalidades. 31 de marzo de 1988. https://bcn.cl/2f9uj

4. https://www.portaltransparencia.cl/PortalPdT/

5. Congreso Nacional de Chile. (11 de julio de 2025). Ley no. 20.285. Sobre Acceso a la Información Pública. 20 de agosto de 2008. https://bcn.cl/25bya

6. https://cambiometro.impulsacv.cl/municipalidades/santo-domingo/

7. https://www.diariousach.cl/las-condes-santo-domingo-y-vina-del-mar-son-comunas-mas-digitalizadas-de#:~:text=Digitales%20%28Nudos%29,a%20nivel%20local.

8. https://www.sanantonio.cl/municipalidad/noticias/item/14937-la-oficina-de-la-juventud-mantendra-un-punto-de-atencion-presencial-hasta-el-5-de-junio-para-asesorar-a-la-comunidad-en-la-tramitacion-digital-del-vale-de-gas-y-el-subsidio-electrico.html

9. https://santodomingo.cl/direcciones/
