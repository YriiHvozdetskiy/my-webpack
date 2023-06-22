// Для JS файлів
const requireAll = (r) => r.keys().forEach(r);
requireAll(require.context('./scripts/', true, /\.js$/));

import './styles/styles.scss';

