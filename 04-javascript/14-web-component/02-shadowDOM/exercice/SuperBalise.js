"use strict";

export function createWeatherWidget(data) {
  const container = document.createElement('div');
  const shadow = container.attachShadow({ mode: 'open' });

  shadow.innerHTML = `
    <style>
      .widget {
        font-family: sans-serif;
        background: #e0f7fa;
        padding: 10px;
        border-radius: 8px;
        width: 180px;
        text-align: center;
      }
      .icon {
        font-size: 2.5em;
      }
      .temp {
        font-size: 1.8em;
      }
      .city {
        color: #555;
        margin-top: 5px;
      }
    </style>
    <div class="widget">
      <div class="icon">${data.icon}</div>
      <div class="temp">${data.temp}°C</div>
      <div class="city">${data.city}</div>
    </div>
  `;

  return container;
}
