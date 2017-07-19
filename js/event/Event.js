class Event {
    constructor() {
        this.events = [];
        this.listeners = [];
    }

    on(type, listener) {
        if (typeof listener != 'function') {
            throw TypeError('listener must be function');
        }

        if (this.events.indexOf(type) === -1) {
            this.events.push(type);
            this.listeners[type] = [];
        }

        this.listeners[type].push(listener);
    }

    emit(type, ...args) {
        let typeListeners = this.listeners[type];
        typeListeners.forEach(listener => listener.apply(null, args));
    }
}

export {Event};
