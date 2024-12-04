export function formatDateString(isoDate) {
    const date = new Date(isoDate);

    const day = date.toISOString().split("T")[0];
    const hour = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`; 

    return { day, hour };
}

export const AuditStateToUser ={
	ACTIVE: "Activa",
	PAUSED: "Pausada",
	CANCELED: "Cancelada",
	FINALIZED: "Finalizada",
}