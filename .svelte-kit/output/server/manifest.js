export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BqnOSbt3.js","app":"_app/immutable/entry/app.Cg3tF98v.js","imports":["_app/immutable/entry/start.BqnOSbt3.js","_app/immutable/chunks/entry.DpLCWdWq.js","_app/immutable/chunks/scheduler.FLmlRqdj.js","_app/immutable/chunks/index.CpHgRmVI.js","_app/immutable/entry/app.Cg3tF98v.js","_app/immutable/chunks/preload-helper.CN7R4D5X.js","_app/immutable/chunks/scheduler.FLmlRqdj.js","_app/immutable/chunks/index.qEUg-WN-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
