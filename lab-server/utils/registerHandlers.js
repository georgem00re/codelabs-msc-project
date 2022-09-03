
const onCodeChange = require("../handlers/onCodeChange.js");
const onDisconnecting = require("../handlers/onDisconnecting.js");
const onJoinLab = require("../handlers/onJoinLab.js");
const onModeChange = require("../handlers/onModeChange.js");
const onRunCode = require("../handlers/onRunCode.js");
const onSendMessage = require("../handlers/onSendMessage.js");
const onToggleAudio = require("../handlers/onToggleAudio.js");
const onToggleVideo = require("../handlers/onToggleVideo.js");

module.exports = function registerHandlers(io, socket) {
	onCodeChange(io, socket);
	onDisconnecting(io, socket);
	onJoinLab(io, socket);
	onModeChange(io, socket);
	onRunCode(io, socket);
	onSendMessage(io, socket);
	onToggleAudio(io, socket);
	onToggleVideo(io, socket);
}

