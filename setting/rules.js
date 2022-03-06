/*Kalian bisa ganti ini rulesnya
ingat !! yang ${botname} jangan di ganti
biarin aja sans ntar bakalan keluar nama bot luh kok
*/
const rules = (prefix, botname) => { 
return `*_RULES BOT_*

1. No envíe spam a los bots.
Sanciones: *ADVERTENCIA/BLOQUEO SUAVE*

2. No llames a los bots.
Sanciones: *BLOQUEO SUAVE*

3. No aproveche los bots.
Sanciones: *BLOQUEO PERMANENTE*

Si entiende las reglas, por favor escriba *${prefix}menu* para comenzar !

──「 *${botname}* 」──`
}
exports.rules = rules