function Publisher(){
	var _subscribers = {};
	this.addSubscriber = function(evtName,subscriberFn){
		if (!_subscribers[evtName]) _subscribers[evtName] = [];
		_subscribers[evtName].push(subscriberFn);
	};
	this.publish = function(evtName){
		if (!_subscribers[evtName]) return;
		var evtSubscribers = _subscribers[evtName];
		for(var i=0;i<evtSubscribers.length;i++)
			evtSubscribers[i]();
	}
}

var publisher = new Publisher();


//subscriber code
publisher.addSubscriber("event1",function(){console.log("first subscriber for event1")});
publisher.addSubscriber("event2",function(){console.log("first subscriber for event2")});
publisher.addSubscriber("event1",function(){console.log("another subscriber for event1")});

//publisher
publisher.publish("event1");
