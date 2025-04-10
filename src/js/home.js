import { startCountdown } from './countdown.mjs';
import { initMap } from './mapLocation.mjs';

startCountdown('2025-06-13T16:00:00', '#countdown');

window.initMap = initMap;