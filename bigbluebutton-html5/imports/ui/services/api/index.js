import {getInStorage} from '/imports/ui/components/app/service';

function callServer(name) {
  if (!name || !(typeof (name) === 'string' || name instanceof String) || name.length === 0 ||
    !name.trim() || /^\s*$/.test(name)) {
    console.error(`serverCall: invalid function name '${name}'`);
    return false;
  }

  const credentials = {
    meetingId: getInStorage('meetingID'),
    requesterUserId: getInStorage('userID'),
    requesterToken: getInStorage('authToken'),
  };

  // slice off the first element. That is the function name but we already have that.
  const args = Array.prototype.slice.call(arguments, 1);
  Meteor.call(name, credentials, ...args);
};

export {
  callServer,
};