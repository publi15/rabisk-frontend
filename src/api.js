const API = "http://localhost:4242";

export const ativarGratis = (email, deviceId) =>
  fetch(`${API}/api/activate-free`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, device_id: deviceId }),
  }).then((r) => r.json());

export const comprar = (email, deviceId, plano) =>
  fetch(`${API}/api/create-checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, device_id: deviceId, plan: plano }),
  }).then((r) => r.json());

export const verificarLicenca = (chave) =>
  fetch(`${API}/api/verify-license`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ license_key: chave }),
  }).then((r) => r.json());