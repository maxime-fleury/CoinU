var XW="185",O9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},D9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},YW=0,cQ=1,HW=2;var j9=1,UW=2,N7=3,F7=0,aJ=1,BJ=2,v8=0,p7=1,t8=2,nQ=3,sQ=4,qW=5;var O7=100,GW=101,NW=102,FW=103,OW=104,DW=200,EW=201,RW=202,kW=203,MW=204,VW=205,BW=206,LW=207,zW=208,IW=209,AW=210,PW=211,wW=212,_W=213,CW=214,TW=0,SW=1,jW=2,iQ=3,yW=4,hW=5,vW=6,bW=7,fW=0,xW=1,gW=2,C8=0,oQ=1,aQ=2,rQ=3,m7=4,tQ=5,eQ=6,J$=7;var D7=301,y9=302,h6=303,v6=304,d7=306,u7=1000,b6=1001,pW=1002,E9=1003,mW=1004;var l7=1005;var Z8=1006,f6=1007;var h9=1008;var T8=1009,dW=1010,uW=1011,c7=1012,Q$=1013,R9=1014,e8=1015,J9=1016,$$=1017,K$=1018,E7=1020,lW=35902,cW=35899,nW=1021,sW=1022,b8=1023,v9=1026,b9=1027,iW=1028,W$=1029,f9=1030,Z$=1031;var X$=1033,x6=33776,g6=33777,p6=33778,m6=33779,Y$=35840,H$=35841,U$=35842,q$=35843,G$=36196,N$=37492,F$=37496,O$=37488,D$=37489,d6=37490,E$=37491,R$=37808,k$=37809,M$=37810,V$=37811,B$=37812,L$=37813,z$=37814,I$=37815,A$=37816,P$=37817,w$=37818,_$=37819,C$=37820,T$=37821,S$=36492,j$=36494,y$=36495,h$=36283,v$=36284,u6=36285,b$=36286;var f$=0,oW=1,x9="",f8="srgb",x$="srgb-linear",g$="linear",MJ="srgb";var aW=512,rW=513,tW=514,l6=515,eW=516,JZ=517,c6=518,QZ=519;var p$="300 es",m$=2000;function SX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function jX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function g7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function $Z(){let J=g7("canvas");return J.style.display="block",J}var fK={},G7=null;function d$(...J){let Q="THREE."+J.shift();if(G7)G7("log",Q,...J);else console.log(Q,...J)}function KZ(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function s0(...J){J=KZ(J);let Q="THREE."+J.shift();if(G7)G7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function i0(...J){J=KZ(J);let Q="THREE."+J.shift();if(G7)G7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function T9(...J){let Q=J.join(" ");if(Q in fK)return;fK[Q]=!0,s0(...J)}function WZ(J,Q,$){return new Promise(function(K,W){function Z(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(Z,$);break;default:K()}}setTimeout(Z,$)})}var ZZ={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class x8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let K=$[J];if(K!==void 0){let W=K.indexOf(Q);if(W!==-1)K.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let K=$.slice(0);for(let W=0,Z=K.length;W<Z;W++)K[W].call(this,J);J.target=null}}}var iJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xK=1234567,f7=Math.PI/180,S9=180/Math.PI;function R7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(iJ[J&255]+iJ[J>>8&255]+iJ[J>>16&255]+iJ[J>>24&255]+"-"+iJ[Q&255]+iJ[Q>>8&255]+"-"+iJ[Q>>16&15|64]+iJ[Q>>24&255]+"-"+iJ[$&63|128]+iJ[$>>8&255]+"-"+iJ[$>>16&255]+iJ[$>>24&255]+iJ[K&255]+iJ[K>>8&255]+iJ[K>>16&255]+iJ[K>>24&255]).toLowerCase()}function ZJ(J,Q,$){return Math.max(Q,Math.min($,J))}function u$(J,Q){return(J%Q+Q)%Q}function yX(J,Q,$,K,W){return K+(J-Q)*(W-K)/($-Q)}function hX(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function x7(J,Q,$){return(1-$)*J+$*Q}function vX(J,Q,$,K){return x7(J,Q,1-Math.exp(-$*K))}function bX(J,Q=1){return Q-Math.abs(u$(J,Q*2)-Q)}function fX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function xX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function gX(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function pX(J,Q){return J+Math.random()*(Q-J)}function mX(J){return J*(0.5-Math.random())}function dX(J){if(J!==void 0)xK=J;let Q=xK+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function uX(J){return J*f7}function lX(J){return J*S9}function cX(J){return(J&J-1)===0&&J!==0}function nX(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function sX(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function iX(J,Q,$,K,W){let{cos:Z,sin:X}=Math,Y=Z($/2),H=X($/2),U=Z((Q+K)/2),E=X((Q+K)/2),O=Z((Q-K)/2),q=X((Q-K)/2),R=Z((K-Q)/2),M=X((K-Q)/2);switch(W){case"XYX":J.set(Y*E,H*O,H*q,Y*U);break;case"YZY":J.set(H*q,Y*E,H*O,Y*U);break;case"ZXZ":J.set(H*O,H*q,Y*E,Y*U);break;case"XZX":J.set(Y*E,H*M,H*R,Y*U);break;case"YXY":J.set(H*R,Y*E,H*M,Y*U);break;case"ZYZ":J.set(H*M,H*R,Y*E,Y*U);break;default:s0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function U7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function J8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var l$={DEG2RAD:f7,RAD2DEG:S9,generateUUID:R7,clamp:ZJ,euclideanModulo:u$,mapLinear:yX,inverseLerp:hX,lerp:x7,damp:vX,pingpong:bX,smoothstep:fX,smootherstep:xX,randInt:gX,randFloat:pX,randFloatSpread:mX,seededRandom:dX,degToRad:uX,radToDeg:lX,isPowerOfTwo:cX,ceilPowerOfTwo:nX,floorPowerOfTwo:sX,setQuaternionFromProperEuler:iX,normalize:J8,denormalize:U7};class n0{static{n0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6],this.y=K[1]*Q+K[4]*$+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(ZJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(ZJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),K=Math.sin(Q),W=this.x-J.x,Z=this.y-J.y;return this.x=W*$-Z*K+J.x,this.y=W*K+Z*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class M8{constructor(J=0,Q=0,$=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=K}static slerpFlat(J,Q,$,K,W,Z,X){let Y=$[K+0],H=$[K+1],U=$[K+2],E=$[K+3],O=W[Z+0],q=W[Z+1],R=W[Z+2],M=W[Z+3];if(E!==M||Y!==O||H!==q||U!==R){let z=Y*O+H*q+U*R+E*M;if(z<0)O=-O,q=-q,R=-R,M=-M,z=-z;let D=1-X;if(z<0.9995){let G=Math.acos(z),S=Math.sin(G);D=Math.sin(D*G)/S,X=Math.sin(X*G)/S,Y=Y*D+O*X,H=H*D+q*X,U=U*D+R*X,E=E*D+M*X}else{Y=Y*D+O*X,H=H*D+q*X,U=U*D+R*X,E=E*D+M*X;let G=1/Math.sqrt(Y*Y+H*H+U*U+E*E);Y*=G,H*=G,U*=G,E*=G}}J[Q]=Y,J[Q+1]=H,J[Q+2]=U,J[Q+3]=E}static multiplyQuaternionsFlat(J,Q,$,K,W,Z){let X=$[K],Y=$[K+1],H=$[K+2],U=$[K+3],E=W[Z],O=W[Z+1],q=W[Z+2],R=W[Z+3];return J[Q]=X*R+U*E+Y*q-H*O,J[Q+1]=Y*R+U*O+H*E-X*q,J[Q+2]=H*R+U*q+X*O-Y*E,J[Q+3]=U*R-X*E-Y*O-H*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,K){return this._x=J,this._y=Q,this._z=$,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:K,_z:W,_order:Z}=J,X=Math.cos,Y=Math.sin,H=X($/2),U=X(K/2),E=X(W/2),O=Y($/2),q=Y(K/2),R=Y(W/2);switch(Z){case"XYZ":this._x=O*U*E+H*q*R,this._y=H*q*E-O*U*R,this._z=H*U*R+O*q*E,this._w=H*U*E-O*q*R;break;case"YXZ":this._x=O*U*E+H*q*R,this._y=H*q*E-O*U*R,this._z=H*U*R-O*q*E,this._w=H*U*E+O*q*R;break;case"ZXY":this._x=O*U*E-H*q*R,this._y=H*q*E+O*U*R,this._z=H*U*R+O*q*E,this._w=H*U*E-O*q*R;break;case"ZYX":this._x=O*U*E-H*q*R,this._y=H*q*E+O*U*R,this._z=H*U*R-O*q*E,this._w=H*U*E+O*q*R;break;case"YZX":this._x=O*U*E+H*q*R,this._y=H*q*E+O*U*R,this._z=H*U*R-O*q*E,this._w=H*U*E-O*q*R;break;case"XZY":this._x=O*U*E-H*q*R,this._y=H*q*E-O*U*R,this._z=H*U*R+O*q*E,this._w=H*U*E+O*q*R;break;default:s0("Quaternion: .setFromEuler() encountered an unknown order: "+Z)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,K=Math.sin($);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],K=Q[4],W=Q[8],Z=Q[1],X=Q[5],Y=Q[9],H=Q[2],U=Q[6],E=Q[10],O=$+X+E;if(O>0){let q=0.5/Math.sqrt(O+1);this._w=0.25/q,this._x=(U-Y)*q,this._y=(W-H)*q,this._z=(Z-K)*q}else if($>X&&$>E){let q=2*Math.sqrt(1+$-X-E);this._w=(U-Y)/q,this._x=0.25*q,this._y=(K+Z)/q,this._z=(W+H)/q}else if(X>E){let q=2*Math.sqrt(1+X-$-E);this._w=(W-H)/q,this._x=(K+Z)/q,this._y=0.25*q,this._z=(Y+U)/q}else{let q=2*Math.sqrt(1+E-$-X);this._w=(Z-K)/q,this._x=(W+H)/q,this._y=(Y+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(ZJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let K=Math.min(1,Q/$);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:K,_z:W,_w:Z}=J,X=Q._x,Y=Q._y,H=Q._z,U=Q._w;return this._x=$*U+Z*X+K*H-W*Y,this._y=K*U+Z*Y+W*X-$*H,this._z=W*U+Z*H+$*Y-K*X,this._w=Z*U-$*X-K*Y-W*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:K,_z:W,_w:Z}=J,X=this.dot(J);if(X<0)$=-$,K=-K,W=-W,Z=-Z,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+Z*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+Z*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),K=Math.sqrt(1-$),W=Math.sqrt($);return this.set(K*Math.sin(J),K*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class m{static{m.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(gK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(gK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*K,this.y=W[1]*Q+W[4]*$+W[7]*K,this.z=W[2]*Q+W[5]*$+W[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,K=this.z,W=J.elements,Z=1/(W[3]*Q+W[7]*$+W[11]*K+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*K+W[12])*Z,this.y=(W[1]*Q+W[5]*$+W[9]*K+W[13])*Z,this.z=(W[2]*Q+W[6]*$+W[10]*K+W[14])*Z,this}applyQuaternion(J){let Q=this.x,$=this.y,K=this.z,W=J.x,Z=J.y,X=J.z,Y=J.w,H=2*(Z*K-X*$),U=2*(X*Q-W*K),E=2*(W*$-Z*Q);return this.x=Q+Y*H+Z*E-X*U,this.y=$+Y*U+X*H-W*E,this.z=K+Y*E+W*U-Z*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*K,this.y=W[1]*Q+W[5]*$+W[9]*K,this.z=W[2]*Q+W[6]*$+W[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this.z=ZJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this.z=ZJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(ZJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:K,z:W}=J,Z=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-W*X,this.y=W*Z-$*Y,this.z=$*X-K*Z,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return LQ.copy(this).projectOnVector(J),this.sub(LQ)}reflect(J){return this.sub(LQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(ZJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,K=this.z-J.z;return Q*Q+$*$+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let K=Math.sin(Q)*J;return this.x=K*Math.sin($),this.y=Math.cos(Q)*J,this.z=K*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var LQ=new m,gK=new M8;class r0{static{r0.prototype.isMatrix3=!0}constructor(J,Q,$,K,W,Z,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,K,W,Z,X,Y,H)}set(J,Q,$,K,W,Z,X,Y,H){let U=this.elements;return U[0]=J,U[1]=K,U[2]=X,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=Z,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,K=Q.elements,W=this.elements,Z=$[0],X=$[3],Y=$[6],H=$[1],U=$[4],E=$[7],O=$[2],q=$[5],R=$[8],M=K[0],z=K[3],D=K[6],G=K[1],S=K[4],I=K[7],V=K[2],w=K[5],_=K[8];return W[0]=Z*M+X*G+Y*V,W[3]=Z*z+X*S+Y*w,W[6]=Z*D+X*I+Y*_,W[1]=H*M+U*G+E*V,W[4]=H*z+U*S+E*w,W[7]=H*D+U*I+E*_,W[2]=O*M+q*G+R*V,W[5]=O*z+q*S+R*w,W[8]=O*D+q*I+R*_,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return Q*Z*U-Q*X*H-$*W*U+$*X*Y+K*W*H-K*Z*Y}invert(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],E=U*Z-X*H,O=X*Y-U*W,q=H*W-Z*Y,R=Q*E+$*O+K*q;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/R;return J[0]=E*M,J[1]=(K*H-U*$)*M,J[2]=(X*$-K*Z)*M,J[3]=O*M,J[4]=(U*Q-K*Y)*M,J[5]=(K*W-X*Q)*M,J[6]=q*M,J[7]=($*Y-H*Q)*M,J[8]=(Z*Q-$*W)*M,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,K,W,Z,X){let Y=Math.cos(W),H=Math.sin(W);return this.set($*Y,$*H,-$*(Y*Z+H*X)+Z+J,-K*H,K*Y,-K*(-H*Z+Y*X)+X+Q,0,0,1),this}scale(J,Q){return T9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zQ.makeScale(J,Q)),this}rotate(J){return T9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zQ.makeRotation(-J)),this}translate(J,Q){return T9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let K=0;K<9;K++)if(Q[K]!==$[K])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var zQ=new r0,pK=new r0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),mK=new r0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function oX(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,Z,X){if(this.enabled===!1||Z===X||!Z||!X)return W;if(this.spaces[Z].transfer==="srgb")W.r=a8(W.r),W.g=a8(W.g),W.b=a8(W.b);if(this.spaces[Z].primaries!==this.spaces[X].primaries)W.applyMatrix3(this.spaces[Z].toXYZ),W.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")W.r=q7(W.r),W.g=q7(W.g),W.b=q7(W.b);return W},workingToColorSpace:function(W,Z){return this.convert(W,this.workingColorSpace,Z)},colorSpaceToWorking:function(W,Z){return this.convert(W,Z,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,Z=this.workingColorSpace){return W.fromArray(this.spaces[Z].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,Z,X){return W.copy(this.spaces[Z].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,Z){return T9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,Z)},toWorkingColorSpace:function(W,Z){return T9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,Z)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:pK,fromXYZ:mK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:pK,fromXYZ:mK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var UJ=oX();function a8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function q7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var r9;class c${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(r9===void 0)r9=g7("canvas");r9.width=J.width,r9.height=J.height;let K=r9.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);$=r9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=g7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let K=$.getImageData(0,0,J.width,J.height),W=K.data;for(let Z=0;Z<W.length;Z++)W[Z]=a8(W[Z]/255)*255;return $.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(a8(Q[$]/255)*255);else Q[$]=a8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return s0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var aX=0;class n7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aX++}),this.uuid=R7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},K=this.data;if(K!==null){let W;if(Array.isArray(K)){W=[];for(let Z=0,X=K.length;Z<X;Z++)if(K[Z].isDataTexture)W.push(IQ(K[Z].image));else W.push(IQ(K[Z]))}else W=IQ(K);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function IQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return c$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return s0("Texture: Unable to serialize Texture."),{}}var rX=0,AQ=new m;class cJ extends x8{constructor(J=cJ.DEFAULT_IMAGE,Q=cJ.DEFAULT_MAPPING,$=1001,K=1001,W=1006,Z=1008,X=1023,Y=1009,H=cJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:rX++}),this.uuid=R7(),this.name="",this.source=new n7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=K,this.magFilter=W,this.minFilter=Z,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new n0(0,0),this.repeat=new n0(1,1),this.center=new n0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new r0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(AQ).x}get height(){return this.source.getSize(AQ).y}get depth(){return this.source.getSize(AQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){s0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){s0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&$&&(K.isVector2&&$.isVector2))K.copy($);else if(K&&$&&(K.isVector3&&$.isVector3))K.copy($);else if(K&&$&&(K.isMatrix3&&$.isMatrix3))K.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}cJ.DEFAULT_IMAGE=null;cJ.DEFAULT_MAPPING=300;cJ.DEFAULT_ANISOTROPY=1;class wJ{static{wJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,K=1){this.x=J,this.y=Q,this.z=$,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,K){return this.x=J,this.y=Q,this.z=$,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,K=this.z,W=this.w,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*K+Z[12]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*K+Z[13]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*K+Z[14]*W,this.w=Z[3]*Q+Z[7]*$+Z[11]*K+Z[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,K,W,Z=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],E=Y[8],O=Y[1],q=Y[5],R=Y[9],M=Y[2],z=Y[6],D=Y[10];if(Math.abs(U-O)<0.01&&Math.abs(E-M)<0.01&&Math.abs(R-z)<0.01){if(Math.abs(U+O)<0.1&&Math.abs(E+M)<0.1&&Math.abs(R+z)<0.1&&Math.abs(H+q+D-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let S=(H+1)/2,I=(q+1)/2,V=(D+1)/2,w=(U+O)/4,_=(E+M)/4,C=(R+z)/4;if(S>I&&S>V)if(S<0.01)$=0,K=0.707106781,W=0.707106781;else $=Math.sqrt(S),K=w/$,W=_/$;else if(I>V)if(I<0.01)$=0.707106781,K=0,W=0.707106781;else K=Math.sqrt(I),$=w/K,W=C/K;else if(V<0.01)$=0.707106781,K=0.707106781,W=0;else W=Math.sqrt(V),$=_/W,K=C/W;return this.set($,K,W,Q),this}let G=Math.sqrt((z-R)*(z-R)+(E-M)*(E-M)+(O-U)*(O-U));if(Math.abs(G)<0.001)G=1;return this.x=(z-R)/G,this.y=(E-M)/G,this.z=(O-U)/G,this.w=Math.acos((H+q+D-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this.z=ZJ(this.z,J.z,Q.z),this.w=ZJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this.z=ZJ(this.z,J,Q),this.w=ZJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(ZJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n$ extends x8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new wJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new wJ(0,0,J,Q),this.textures=[];let K={width:J,height:Q,depth:$.depth},W=new cJ(K),Z=$.count;for(let X=0;X<Z;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let K=0,W=this.textures.length;K<W;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=$,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new n7(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class V8 extends n${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class n6 extends cJ{constructor(J=null,Q=1,$=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class s$ extends cJ{constructor(J=null,Q=1,$=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zJ{static{zJ.prototype.isMatrix4=!0}constructor(J,Q,$,K,W,Z,X,Y,H,U,E,O,q,R,M,z){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,K,W,Z,X,Y,H,U,E,O,q,R,M,z)}set(J,Q,$,K,W,Z,X,Y,H,U,E,O,q,R,M,z){let D=this.elements;return D[0]=J,D[4]=Q,D[8]=$,D[12]=K,D[1]=W,D[5]=Z,D[9]=X,D[13]=Y,D[2]=H,D[6]=U,D[10]=E,D[14]=O,D[3]=q,D[7]=R,D[11]=M,D[15]=z,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,K=1/t9.setFromMatrixColumn(J,0).length(),W=1/t9.setFromMatrixColumn(J,1).length(),Z=1/t9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*K,Q[1]=$[1]*K,Q[2]=$[2]*K,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*Z,Q[9]=$[9]*Z,Q[10]=$[10]*Z,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,K=J.y,W=J.z,Z=Math.cos($),X=Math.sin($),Y=Math.cos(K),H=Math.sin(K),U=Math.cos(W),E=Math.sin(W);if(J.order==="XYZ"){let O=Z*U,q=Z*E,R=X*U,M=X*E;Q[0]=Y*U,Q[4]=-Y*E,Q[8]=H,Q[1]=q+R*H,Q[5]=O-M*H,Q[9]=-X*Y,Q[2]=M-O*H,Q[6]=R+q*H,Q[10]=Z*Y}else if(J.order==="YXZ"){let O=Y*U,q=Y*E,R=H*U,M=H*E;Q[0]=O+M*X,Q[4]=R*X-q,Q[8]=Z*H,Q[1]=Z*E,Q[5]=Z*U,Q[9]=-X,Q[2]=q*X-R,Q[6]=M+O*X,Q[10]=Z*Y}else if(J.order==="ZXY"){let O=Y*U,q=Y*E,R=H*U,M=H*E;Q[0]=O-M*X,Q[4]=-Z*E,Q[8]=R+q*X,Q[1]=q+R*X,Q[5]=Z*U,Q[9]=M-O*X,Q[2]=-Z*H,Q[6]=X,Q[10]=Z*Y}else if(J.order==="ZYX"){let O=Z*U,q=Z*E,R=X*U,M=X*E;Q[0]=Y*U,Q[4]=R*H-q,Q[8]=O*H+M,Q[1]=Y*E,Q[5]=M*H+O,Q[9]=q*H-R,Q[2]=-H,Q[6]=X*Y,Q[10]=Z*Y}else if(J.order==="YZX"){let O=Z*Y,q=Z*H,R=X*Y,M=X*H;Q[0]=Y*U,Q[4]=M-O*E,Q[8]=R*E+q,Q[1]=E,Q[5]=Z*U,Q[9]=-X*U,Q[2]=-H*U,Q[6]=q*E+R,Q[10]=O-M*E}else if(J.order==="XZY"){let O=Z*Y,q=Z*H,R=X*Y,M=X*H;Q[0]=Y*U,Q[4]=-E,Q[8]=H*U,Q[1]=O*E+M,Q[5]=Z*U,Q[9]=q*E-R,Q[2]=R*E-q,Q[6]=X*U,Q[10]=M*E+O}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(tX,J,eX)}lookAt(J,Q,$){let K=this.elements;if(q8.subVectors(J,Q),q8.lengthSq()===0)q8.z=1;if(q8.normalize(),H9.crossVectors($,q8),H9.lengthSq()===0){if(Math.abs($.z)===1)q8.x+=0.0001;else q8.z+=0.0001;q8.normalize(),H9.crossVectors($,q8)}return H9.normalize(),N6.crossVectors(q8,H9),K[0]=H9.x,K[4]=N6.x,K[8]=q8.x,K[1]=H9.y,K[5]=N6.y,K[9]=q8.y,K[2]=H9.z,K[6]=N6.z,K[10]=q8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,K=Q.elements,W=this.elements,Z=$[0],X=$[4],Y=$[8],H=$[12],U=$[1],E=$[5],O=$[9],q=$[13],R=$[2],M=$[6],z=$[10],D=$[14],G=$[3],S=$[7],I=$[11],V=$[15],w=K[0],_=K[4],C=K[8],k=K[12],L=K[1],r=K[5],j=K[9],c=K[13],$0=K[2],s=K[6],J0=K[10],K0=K[14],l=K[3],n=K[7],d=K[11],H0=K[15];return W[0]=Z*w+X*L+Y*$0+H*l,W[4]=Z*_+X*r+Y*s+H*n,W[8]=Z*C+X*j+Y*J0+H*d,W[12]=Z*k+X*c+Y*K0+H*H0,W[1]=U*w+E*L+O*$0+q*l,W[5]=U*_+E*r+O*s+q*n,W[9]=U*C+E*j+O*J0+q*d,W[13]=U*k+E*c+O*K0+q*H0,W[2]=R*w+M*L+z*$0+D*l,W[6]=R*_+M*r+z*s+D*n,W[10]=R*C+M*j+z*J0+D*d,W[14]=R*k+M*c+z*K0+D*H0,W[3]=G*w+S*L+I*$0+V*l,W[7]=G*_+S*r+I*s+V*n,W[11]=G*C+S*j+I*J0+V*d,W[15]=G*k+S*c+I*K0+V*H0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],K=J[8],W=J[12],Z=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],E=J[6],O=J[10],q=J[14],R=J[3],M=J[7],z=J[11],D=J[15],G=Y*q-H*O,S=X*q-H*E,I=X*O-Y*E,V=Z*q-H*U,w=Z*O-Y*U,_=Z*E-X*U;return Q*(M*G-z*S+D*I)-$*(R*G-z*V+D*w)+K*(R*S-M*V+D*_)-W*(R*I-M*w+z*_)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],K=J[8],W=J[1],Z=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return Q*(Z*U-X*H)-$*(W*U-X*Y)+K*(W*H-Z*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],E=J[9],O=J[10],q=J[11],R=J[12],M=J[13],z=J[14],D=J[15],G=Q*X-$*Z,S=Q*Y-K*Z,I=Q*H-W*Z,V=$*Y-K*X,w=$*H-W*X,_=K*H-W*Y,C=U*M-E*R,k=U*z-O*R,L=U*D-q*R,r=E*z-O*M,j=E*D-q*M,c=O*D-q*z,$0=G*c-S*j+I*r+V*L-w*k+_*C;if($0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let s=1/$0;return J[0]=(X*c-Y*j+H*r)*s,J[1]=(K*j-$*c-W*r)*s,J[2]=(M*_-z*w+D*V)*s,J[3]=(O*w-E*_-q*V)*s,J[4]=(Y*L-Z*c-H*k)*s,J[5]=(Q*c-K*L+W*k)*s,J[6]=(z*I-R*_-D*S)*s,J[7]=(U*_-O*I+q*S)*s,J[8]=(Z*j-X*L+H*C)*s,J[9]=($*L-Q*j-W*C)*s,J[10]=(R*w-M*I+D*G)*s,J[11]=(E*I-U*w-q*G)*s,J[12]=(X*k-Z*r-Y*C)*s,J[13]=(Q*r-$*k+K*C)*s,J[14]=(M*S-R*V-z*G)*s,J[15]=(U*V-E*S+O*G)*s,this}scale(J){let Q=this.elements,$=J.x,K=J.y,W=J.z;return Q[0]*=$,Q[4]*=K,Q[8]*=W,Q[1]*=$,Q[5]*=K,Q[9]*=W,Q[2]*=$,Q[6]*=K,Q[10]*=W,Q[3]*=$,Q[7]*=K,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,K))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),K=Math.sin(Q),W=1-$,Z=J.x,X=J.y,Y=J.z,H=W*Z,U=W*X;return this.set(H*Z+$,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,U*X+$,U*Y-K*Z,0,H*Y-K*X,U*Y+K*Z,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,K,W,Z){return this.set(1,$,W,0,J,1,Z,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,$){let K=this.elements,W=Q._x,Z=Q._y,X=Q._z,Y=Q._w,H=W+W,U=Z+Z,E=X+X,O=W*H,q=W*U,R=W*E,M=Z*U,z=Z*E,D=X*E,G=Y*H,S=Y*U,I=Y*E,V=$.x,w=$.y,_=$.z;return K[0]=(1-(M+D))*V,K[1]=(q+I)*V,K[2]=(R-S)*V,K[3]=0,K[4]=(q-I)*w,K[5]=(1-(O+D))*w,K[6]=(z+G)*w,K[7]=0,K[8]=(R+S)*_,K[9]=(z-G)*_,K[10]=(1-(O+M))*_,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,$){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let Z=t9.set(K[0],K[1],K[2]).length(),X=t9.set(K[4],K[5],K[6]).length(),Y=t9.set(K[8],K[9],K[10]).length();if(W<0)Z=-Z;A8.copy(this);let H=1/Z,U=1/X,E=1/Y;return A8.elements[0]*=H,A8.elements[1]*=H,A8.elements[2]*=H,A8.elements[4]*=U,A8.elements[5]*=U,A8.elements[6]*=U,A8.elements[8]*=E,A8.elements[9]*=E,A8.elements[10]*=E,Q.setFromRotationMatrix(A8),$.x=Z,$.y=X,$.z=Y,this}makePerspective(J,Q,$,K,W,Z,X=2000,Y=!1){let H=this.elements,U=2*W/(Q-J),E=2*W/($-K),O=(Q+J)/(Q-J),q=($+K)/($-K),R,M;if(Y)R=W/(Z-W),M=Z*W/(Z-W);else if(X===2000)R=-(Z+W)/(Z-W),M=-2*Z*W/(Z-W);else if(X===2001)R=-Z/(Z-W),M=-Z*W/(Z-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=O,H[12]=0,H[1]=0,H[5]=E,H[9]=q,H[13]=0,H[2]=0,H[6]=0,H[10]=R,H[14]=M,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,K,W,Z,X=2000,Y=!1){let H=this.elements,U=2/(Q-J),E=2/($-K),O=-(Q+J)/(Q-J),q=-($+K)/($-K),R,M;if(Y)R=1/(Z-W),M=Z/(Z-W);else if(X===2000)R=-2/(Z-W),M=-(Z+W)/(Z-W);else if(X===2001)R=-1/(Z-W),M=-W/(Z-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=O,H[1]=0,H[5]=E,H[9]=0,H[13]=q,H[2]=0,H[6]=0,H[10]=R,H[14]=M,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let K=0;K<16;K++)if(Q[K]!==$[K])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var t9=new m,A8=new zJ,tX=new m(0,0,0),eX=new m(1,1,1),H9=new m,N6=new m,q8=new m,dK=new zJ,uK=new M8;class r8{constructor(J=0,Q=0,$=0,K=r8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,K=this._order){return this._x=J,this._y=Q,this._z=$,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let K=J.elements,W=K[0],Z=K[4],X=K[8],Y=K[1],H=K[5],U=K[9],E=K[2],O=K[6],q=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(ZJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-Z,W);else this._x=Math.atan2(O,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-ZJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-E,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(ZJ(O,-1,1)),Math.abs(O)<0.9999999)this._y=Math.atan2(-E,q),this._z=Math.atan2(-Z,H);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-ZJ(E,-1,1)),Math.abs(E)<0.9999999)this._x=Math.atan2(O,q),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-Z,H);break;case"YZX":if(this._z=Math.asin(ZJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-E,W);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-ZJ(Z,-1,1)),Math.abs(Z)<0.9999999)this._x=Math.atan2(O,H),this._y=Math.atan2(X,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:s0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return dK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(dK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return uK.setFromEuler(this),this.setFromQuaternion(uK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}r8.DEFAULT_ORDER="XYZ";class s6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var JY=0,lK=new m,e9=new M8,c8=new zJ,F6=new m,y7=new m,QY=new m,$Y=new M8,cK=new m(1,0,0),nK=new m(0,1,0),sK=new m(0,0,1),iK={type:"added"},KY={type:"removed"},J7={type:"childadded",child:null},PQ={type:"childremoved",child:null};class hJ extends x8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:JY++}),this.uuid=R7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hJ.DEFAULT_UP.clone();let J=new m,Q=new r8,$=new M8,K=new m(1,1,1);function W(){$.setFromEuler(Q,!1)}function Z(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(Z),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new zJ},normalMatrix:{value:new r0}}),this.matrix=new zJ,this.matrixWorld=new zJ,this.matrixAutoUpdate=hJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new s6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return e9.setFromAxisAngle(J,Q),this.quaternion.multiply(e9),this}rotateOnWorldAxis(J,Q){return e9.setFromAxisAngle(J,Q),this.quaternion.premultiply(e9),this}rotateX(J){return this.rotateOnAxis(cK,J)}rotateY(J){return this.rotateOnAxis(nK,J)}rotateZ(J){return this.rotateOnAxis(sK,J)}translateOnAxis(J,Q){return lK.copy(J).applyQuaternion(this.quaternion),this.position.add(lK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(cK,J)}translateY(J){return this.translateOnAxis(nK,J)}translateZ(J){return this.translateOnAxis(sK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(c8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)F6.copy(J);else F6.set(J,Q,$);let K=this.parent;if(this.updateWorldMatrix(!0,!1),y7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)c8.lookAt(y7,F6,this.up);else c8.lookAt(F6,y7,this.up);if(this.quaternion.setFromRotationMatrix(c8),K)c8.extractRotation(K.matrixWorld),e9.setFromRotationMatrix(c8),this.quaternion.premultiply(e9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return i0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(iK),J7.child=J,this.dispatchEvent(J7),J7.child=null;else i0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(KY),PQ.child=J,this.dispatchEvent(PQ),PQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),c8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),c8.multiply(J.parent.matrixWorld);return J.applyMatrix4(c8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(iK),J7.child=J,this.dispatchEvent(J7),J7.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,K=this.children.length;$<K;$++){let Z=this.children[$].getObjectByProperty(J,Q);if(Z!==void 0)return Z}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let K=this.children;for(let W=0,Z=K.length;W<Z;W++)K[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(y7,J,QY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(y7,$Y,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:K}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*K,W[13]+=$-W[1]*Q-W[5]*$-W[9]*K,W[14]+=K-W[2]*Q-W[6]*$-W[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let Z=0,X=W.length;Z<X;Z++)W[Z].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,this.name!=="")K.name=this.name;if(this.castShadow===!0)K.castShadow=!0;if(this.receiveShadow===!0)K.receiveShadow=!0;if(this.visible===!1)K.visible=!1;if(this.frustumCulled===!1)K.frustumCulled=!1;if(this.renderOrder!==0)K.renderOrder=this.renderOrder;if(this.static!==!1)K.static=this.static;if(Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)K.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function W(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=W(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let E=Y[H];W(J.shapes,E)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push(W(J.materials,this.material[Y]));K.material=X}else K.material=W(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push(W(J.animations,Y))}}if(Q){let X=Z(J.geometries),Y=Z(J.materials),H=Z(J.textures),U=Z(J.images),E=Z(J.shapes),O=Z(J.skeletons),q=Z(J.animations),R=Z(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(E.length>0)$.shapes=E;if(O.length>0)$.skeletons=O;if(q.length>0)$.animations=q;if(R.length>0)$.nodes=R}return $.object=K,$;function Z(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let K=J.children[$];this.add(K.clone())}return this}}hJ.DEFAULT_UP=new m(0,1,0);hJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;hJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class W8 extends hJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var WY={type:"move"};class s7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new W8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new W8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new m,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new m;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new W8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new m,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new m,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let K=null,W=null,Z=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){Z=!0;for(let M of J.hand.values()){let z=Q.getJointPose(M,$),D=this._getHandJoint(H,M);if(z!==null)D.matrix.fromArray(z.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=z.radius;D.visible=z!==null}let U=H.joints["index-finger-tip"],E=H.joints["thumb-tip"],O=U.position.distanceTo(E.position),q=0.02,R=0.005;if(H.inputState.pinching&&O>q+R)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&O<=q-R)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,$),K===null&&W!==null)K=W;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(WY)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=W!==null;if(H!==null)H.visible=Z!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new W8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var XZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},U9={h:0,s:0,l:0},O6={h:0,s:0,l:0};function wQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class a0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,UJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,K=UJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,UJ.colorSpaceToWorking(this,K),this}setHSL(J,Q,$,K=UJ.workingColorSpace){if(J=u$(J,1),Q=ZJ(Q,0,1),$=ZJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,Z=2*$-W;this.r=wQ(Z,W,J+0.3333333333333333),this.g=wQ(Z,W,J),this.b=wQ(Z,W,J-0.3333333333333333)}return UJ.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)s0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,Z=K[1],X=K[2];switch(Z){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:s0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=K[1],Z=W.length;if(Z===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(Z===6)return this.setHex(parseInt(W,16),Q);else s0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=XZ[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else s0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=a8(J.r),this.g=a8(J.g),this.b=a8(J.b),this}copyLinearToSRGB(J){return this.r=q7(J.r),this.g=q7(J.g),this.b=q7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return UJ.workingToColorSpace(oJ.copy(this),J),Math.round(ZJ(oJ.r*255,0,255))*65536+Math.round(ZJ(oJ.g*255,0,255))*256+Math.round(ZJ(oJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=UJ.workingColorSpace){UJ.workingToColorSpace(oJ.copy(this),Q);let{r:$,g:K,b:W}=oJ,Z=Math.max($,K,W),X=Math.min($,K,W),Y,H,U=(X+Z)/2;if(X===Z)Y=0,H=0;else{let E=Z-X;switch(H=U<=0.5?E/(Z+X):E/(2-Z-X),Z){case $:Y=(K-W)/E+(K<W?6:0);break;case K:Y=(W-$)/E+2;break;case W:Y=($-K)/E+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,Q=UJ.workingColorSpace){return UJ.workingToColorSpace(oJ.copy(this),Q),J.r=oJ.r,J.g=oJ.g,J.b=oJ.b,J}getStyle(J="srgb"){UJ.workingToColorSpace(oJ.copy(this),J);let{r:Q,g:$,b:K}=oJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(K*255)})`}offsetHSL(J,Q,$){return this.getHSL(U9),this.setHSL(U9.h+J,U9.s+Q,U9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(U9),J.getHSL(O6);let $=x7(U9.h,O6.h,Q),K=x7(U9.s,O6.s,Q),W=x7(U9.l,O6.l,Q);return this.setHSL($,K,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,K=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*K,this.g=W[1]*Q+W[4]*$+W[7]*K,this.b=W[2]*Q+W[5]*$+W[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var oJ=new a0;a0.NAMES=XZ;class i7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new a0(J),this.density=Q}clone(){return new i7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class i6 extends hJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new r8,this.environmentIntensity=1,this.environmentRotation=new r8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var P8=new m,n8=new m,_Q=new m,s8=new m,Q7=new m,$7=new m,oK=new m,CQ=new m,TQ=new m,SQ=new m,jQ=new wJ,yQ=new wJ,hQ=new wJ;class k8{constructor(J=new m,Q=new m,$=new m){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,K){K.subVectors($,Q),P8.subVectors(J,Q),K.cross(P8);let W=K.lengthSq();if(W>0)return K.multiplyScalar(1/Math.sqrt(W));return K.set(0,0,0)}static getBarycoord(J,Q,$,K,W){P8.subVectors(K,Q),n8.subVectors($,Q),_Q.subVectors(J,Q);let Z=P8.dot(P8),X=P8.dot(n8),Y=P8.dot(_Q),H=n8.dot(n8),U=n8.dot(_Q),E=Z*H-X*X;if(E===0)return W.set(0,0,0),null;let O=1/E,q=(H*Y-X*U)*O,R=(Z*U-X*Y)*O;return W.set(1-q-R,R,q)}static containsPoint(J,Q,$,K){if(this.getBarycoord(J,Q,$,K,s8)===null)return!1;return s8.x>=0&&s8.y>=0&&s8.x+s8.y<=1}static getInterpolation(J,Q,$,K,W,Z,X,Y){if(this.getBarycoord(J,Q,$,K,s8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,s8.x),Y.addScaledVector(Z,s8.y),Y.addScaledVector(X,s8.z),Y}static getInterpolatedAttribute(J,Q,$,K,W,Z){return jQ.setScalar(0),yQ.setScalar(0),hQ.setScalar(0),jQ.fromBufferAttribute(J,Q),yQ.fromBufferAttribute(J,$),hQ.fromBufferAttribute(J,K),Z.setScalar(0),Z.addScaledVector(jQ,W.x),Z.addScaledVector(yQ,W.y),Z.addScaledVector(hQ,W.z),Z}static isFrontFacing(J,Q,$,K){return P8.subVectors($,Q),n8.subVectors(J,Q),P8.cross(n8).dot(K)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,K){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,$,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return P8.subVectors(this.c,this.b),n8.subVectors(this.a,this.b),P8.cross(n8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return k8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return k8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,K,W){return k8.getInterpolation(J,this.a,this.b,this.c,Q,$,K,W)}containsPoint(J){return k8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return k8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,K=this.b,W=this.c,Z,X;Q7.subVectors(K,$),$7.subVectors(W,$),CQ.subVectors(J,$);let Y=Q7.dot(CQ),H=$7.dot(CQ);if(Y<=0&&H<=0)return Q.copy($);TQ.subVectors(J,K);let U=Q7.dot(TQ),E=$7.dot(TQ);if(U>=0&&E<=U)return Q.copy(K);let O=Y*E-U*H;if(O<=0&&Y>=0&&U<=0)return Z=Y/(Y-U),Q.copy($).addScaledVector(Q7,Z);SQ.subVectors(J,W);let q=Q7.dot(SQ),R=$7.dot(SQ);if(R>=0&&q<=R)return Q.copy(W);let M=q*H-Y*R;if(M<=0&&H>=0&&R<=0)return X=H/(H-R),Q.copy($).addScaledVector($7,X);let z=U*R-q*E;if(z<=0&&E-U>=0&&q-R>=0)return oK.subVectors(W,K),X=(E-U)/(E-U+(q-R)),Q.copy(K).addScaledVector(oK,X);let D=1/(z+M+O);return Z=M*D,X=O*D,Q.copy($).addScaledVector(Q7,Z).addScaledVector($7,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class g9{constructor(J=new m(1/0,1/0,1/0),Q=new m(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(w8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(w8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=w8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let Z=0,X=W.count;Z<X;Z++){if(J.isMesh===!0)J.getVertexPosition(Z,w8);else w8.fromBufferAttribute(W,Z);w8.applyMatrix4(J.matrixWorld),this.expandByPoint(w8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();D6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();D6.copy($.boundingBox)}D6.applyMatrix4(J.matrixWorld),this.union(D6)}}let K=J.children;for(let W=0,Z=K.length;W<Z;W++)this.expandByObject(K[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,w8),w8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(h7),E6.subVectors(this.max,h7),K7.subVectors(J.a,h7),W7.subVectors(J.b,h7),Z7.subVectors(J.c,h7),q9.subVectors(W7,K7),G9.subVectors(Z7,W7),P9.subVectors(K7,Z7);let Q=[0,-q9.z,q9.y,0,-G9.z,G9.y,0,-P9.z,P9.y,q9.z,0,-q9.x,G9.z,0,-G9.x,P9.z,0,-P9.x,-q9.y,q9.x,0,-G9.y,G9.x,0,-P9.y,P9.x,0];if(!vQ(Q,K7,W7,Z7,E6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!vQ(Q,K7,W7,Z7,E6))return!1;return R6.crossVectors(q9,G9),Q=[R6.x,R6.y,R6.z],vQ(Q,K7,W7,Z7,E6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,w8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(w8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return i8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),i8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),i8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),i8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),i8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),i8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),i8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),i8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(i8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var i8=[new m,new m,new m,new m,new m,new m,new m,new m],w8=new m,D6=new g9,K7=new m,W7=new m,Z7=new m,q9=new m,G9=new m,P9=new m,h7=new m,E6=new m,R6=new m,w9=new m;function vQ(J,Q,$,K,W){for(let Z=0,X=J.length-3;Z<=X;Z+=3){w9.fromArray(J,Z);let Y=W.x*Math.abs(w9.x)+W.y*Math.abs(w9.y)+W.z*Math.abs(w9.z),H=Q.dot(w9),U=$.dot(w9),E=K.dot(w9);if(Math.max(-Math.max(H,U,E),Math.min(H,U,E))>Y)return!1}return!0}var yJ=new m,k6=new n0,ZY=0;class nJ extends x8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let K=0,W=this.itemSize;K<W;K++)this.array[J+K]=Q.array[$+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)k6.fromBufferAttribute(this,Q),k6.applyMatrix3(J),this.setXY(Q,k6.x,k6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)yJ.fromBufferAttribute(this,Q),yJ.applyMatrix3(J),this.setXYZ(Q,yJ.x,yJ.y,yJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)yJ.fromBufferAttribute(this,Q),yJ.applyMatrix4(J),this.setXYZ(Q,yJ.x,yJ.y,yJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)yJ.fromBufferAttribute(this,Q),yJ.applyNormalMatrix(J),this.setXYZ(Q,yJ.x,yJ.y,yJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)yJ.fromBufferAttribute(this,Q),yJ.transformDirection(J),this.setXYZ(Q,yJ.x,yJ.y,yJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=U7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=J8($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=U7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=J8(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=U7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=J8(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=U7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=J8(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=U7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=J8(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=J8(Q,this.array),$=J8($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,K){if(J*=this.itemSize,this.normalized)Q=J8(Q,this.array),$=J8($,this.array),K=J8(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=K,this}setXYZW(J,Q,$,K,W){if(J*=this.itemSize,this.normalized)Q=J8(Q,this.array),$=J8($,this.array),K=J8(K,this.array),W=J8(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=K,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class o6 extends nJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class a6 extends nJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class VJ extends nJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var XY=new g9,v7=new m,bQ=new m;class k7{constructor(J=new m,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else XY.setFromPoints(J).getCenter($);let K=0;for(let W=0,Z=J.length;W<Z;W++)K=Math.max(K,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;v7.subVectors(J,this.center);let Q=v7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),K=($-this.radius)*0.5;this.center.addScaledVector(v7,K/$),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else bQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(v7.copy(J.center).add(bQ)),this.expandByPoint(v7.copy(J.center).sub(bQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var YY=0,R8=new zJ,fQ=new hJ,X7=new m,G8=new g9,b7=new g9,uJ=new m;class vJ extends x8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YY++}),this.uuid=R7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((SX(J))?a6:o6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new r0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return R8.makeRotationFromQuaternion(J),this.applyMatrix4(R8),this}rotateX(J){return R8.makeRotationX(J),this.applyMatrix4(R8),this}rotateY(J){return R8.makeRotationY(J),this.applyMatrix4(R8),this}rotateZ(J){return R8.makeRotationZ(J),this.applyMatrix4(R8),this}translate(J,Q,$){return R8.makeTranslation(J,Q,$),this.applyMatrix4(R8),this}scale(J,Q,$){return R8.makeScale(J,Q,$),this.applyMatrix4(R8),this}lookAt(J){return fQ.lookAt(J),fQ.updateMatrix(),this.applyMatrix4(fQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(X7).negate(),this.translate(X7.x,X7.y,X7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let K=0,W=J.length;K<W;K++){let Z=J[K];$.push(Z.x,Z.y,Z.z||0)}this.setAttribute("position",new VJ($,3))}else{let $=Math.min(J.length,Q.count);for(let K=0;K<$;K++){let W=J[K];Q.setXYZ(K,W.x,W.y,W.z||0)}if(J.length>Q.count)s0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new g9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){i0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new m(-1/0,-1/0,-1/0),new m(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,K=Q.length;$<K;$++){let W=Q[$];if(G8.setFromBufferAttribute(W),this.morphTargetsRelative)uJ.addVectors(this.boundingBox.min,G8.min),this.boundingBox.expandByPoint(uJ),uJ.addVectors(this.boundingBox.max,G8.max),this.boundingBox.expandByPoint(uJ);else this.boundingBox.expandByPoint(G8.min),this.boundingBox.expandByPoint(G8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))i0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new k7;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){i0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new m,1/0);return}if(J){let $=this.boundingSphere.center;if(G8.setFromBufferAttribute(J),Q)for(let W=0,Z=Q.length;W<Z;W++){let X=Q[W];if(b7.setFromBufferAttribute(X),this.morphTargetsRelative)uJ.addVectors(G8.min,b7.min),G8.expandByPoint(uJ),uJ.addVectors(G8.max,b7.max),G8.expandByPoint(uJ);else G8.expandByPoint(b7.min),G8.expandByPoint(b7.max)}G8.getCenter($);let K=0;for(let W=0,Z=J.count;W<Z;W++)uJ.fromBufferAttribute(J,W),K=Math.max(K,$.distanceToSquared(uJ));if(Q)for(let W=0,Z=Q.length;W<Z;W++){let X=Q[W],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(uJ.fromBufferAttribute(X,H),Y)X7.fromBufferAttribute(J,H),uJ.add(X7);K=Math.max(K,$.distanceToSquared(uJ))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))i0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){i0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:K,uv:W}=Q,Z=this.getAttribute("tangent");if(Z===void 0||Z.count!==$.count)Z=new nJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",Z);let X=[],Y=[];for(let C=0;C<$.count;C++)X[C]=new m,Y[C]=new m;let H=new m,U=new m,E=new m,O=new n0,q=new n0,R=new n0,M=new m,z=new m;function D(C,k,L){H.fromBufferAttribute($,C),U.fromBufferAttribute($,k),E.fromBufferAttribute($,L),O.fromBufferAttribute(W,C),q.fromBufferAttribute(W,k),R.fromBufferAttribute(W,L),U.sub(H),E.sub(H),q.sub(O),R.sub(O);let r=1/(q.x*R.y-R.x*q.y);if(!isFinite(r))return;M.copy(U).multiplyScalar(R.y).addScaledVector(E,-q.y).multiplyScalar(r),z.copy(E).multiplyScalar(q.x).addScaledVector(U,-R.x).multiplyScalar(r),X[C].add(M),X[k].add(M),X[L].add(M),Y[C].add(z),Y[k].add(z),Y[L].add(z)}let G=this.groups;if(G.length===0)G=[{start:0,count:J.count}];for(let C=0,k=G.length;C<k;++C){let L=G[C],r=L.start,j=L.count;for(let c=r,$0=r+j;c<$0;c+=3)D(J.getX(c+0),J.getX(c+1),J.getX(c+2))}let S=new m,I=new m,V=new m,w=new m;function _(C){V.fromBufferAttribute(K,C),w.copy(V);let k=X[C];S.copy(k),S.sub(V.multiplyScalar(V.dot(k))).normalize(),I.crossVectors(w,k);let r=I.dot(Y[C])<0?-1:1;Z.setXYZW(C,S.x,S.y,S.z,r)}for(let C=0,k=G.length;C<k;++C){let L=G[C],r=L.start,j=L.count;for(let c=r,$0=r+j;c<$0;c+=3)_(J.getX(c+0)),_(J.getX(c+1)),_(J.getX(c+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new nJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let O=0,q=$.count;O<q;O++)$.setXYZ(O,0,0,0);let K=new m,W=new m,Z=new m,X=new m,Y=new m,H=new m,U=new m,E=new m;if(J)for(let O=0,q=J.count;O<q;O+=3){let R=J.getX(O+0),M=J.getX(O+1),z=J.getX(O+2);K.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,M),Z.fromBufferAttribute(Q,z),U.subVectors(Z,W),E.subVectors(K,W),U.cross(E),X.fromBufferAttribute($,R),Y.fromBufferAttribute($,M),H.fromBufferAttribute($,z),X.add(U),Y.add(U),H.add(U),$.setXYZ(R,X.x,X.y,X.z),$.setXYZ(M,Y.x,Y.y,Y.z),$.setXYZ(z,H.x,H.y,H.z)}else for(let O=0,q=Q.count;O<q;O+=3)K.fromBufferAttribute(Q,O+0),W.fromBufferAttribute(Q,O+1),Z.fromBufferAttribute(Q,O+2),U.subVectors(Z,W),E.subVectors(K,W),U.cross(E),$.setXYZ(O+0,U.x,U.y,U.z),$.setXYZ(O+1,U.x,U.y,U.z),$.setXYZ(O+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)uJ.fromBufferAttribute(J,Q),uJ.normalize(),J.setXYZ(Q,uJ.x,uJ.y,uJ.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:E}=X,O=new H.constructor(Y.length*U),q=0,R=0;for(let M=0,z=Y.length;M<z;M++){if(X.isInterleavedBufferAttribute)q=Y[M]*X.data.stride+X.offset;else q=Y[M]*U;for(let D=0;D<U;D++)O[R++]=H[q++]}return new nJ(O,U,E)}if(this.index===null)return s0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new vJ,$=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,$);Q.setAttribute(X,H)}let W=this.morphAttributes;for(let X in W){let Y=[],H=W[X];for(let U=0,E=H.length;U<E;U++){let O=H[U],q=J(O,$);Y.push(q)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;for(let X=0,Y=Z.length;X<Y;X++){let H=Z[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let H=$[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},W=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let E=0,O=H.length;E<O;E++){let q=H[E];U.push(q.toJSON(J.data))}if(U.length>0)K[Y]=U,W=!0}if(W)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;if(Z.length>0)J.data.groups=JSON.parse(JSON.stringify(Z));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let K=J.attributes;for(let H in K){let U=K[H];this.setAttribute(H,U.clone(Q))}let W=J.morphAttributes;for(let H in W){let U=[],E=W[H];for(let O=0,q=E.length;O<q;O++)U.push(E[O].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let Z=J.groups;for(let H=0,U=Z.length;H<U;H++){let E=Z[H];this.addGroup(E.start,E.count,E.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var HY=0;class k9 extends x8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:HY++}),this.uuid=R7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new a0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){s0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){s0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set($);else if(K&&K.isVector2&&($&&$.isVector2)||K&&K.isEuler&&($&&$.isEuler)||K&&K.isVector3&&($&&$.isVector3))K.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function K(W){let Z=[];for(let X in W){let Y=W[X];delete Y.metadata,Z.push(Y)}return Z}if(Q){let W=K(J.textures),Z=K(J.images);if(W.length>0)$.textures=W;if(Z.length>0)$.images=Z}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new a0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new n0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new n0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let K=Q.length;$=Array(K);for(let W=0;W!==K;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var o8=new m,xQ=new m,M6=new m,N9=new m,gQ=new m,V6=new m,pQ=new m;class M7{constructor(J=new m,Q=new m(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,o8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=o8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return o8.copy(this.origin).addScaledVector(this.direction,Q),o8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,K){xQ.copy(J).add(Q).multiplyScalar(0.5),M6.copy(Q).sub(J).normalize(),N9.copy(this.origin).sub(xQ);let W=J.distanceTo(Q)*0.5,Z=-this.direction.dot(M6),X=N9.dot(this.direction),Y=-N9.dot(M6),H=N9.lengthSq(),U=Math.abs(1-Z*Z),E,O,q,R;if(U>0)if(E=Z*Y-X,O=Z*X-Y,R=W*U,E>=0)if(O>=-R)if(O<=R){let M=1/U;E*=M,O*=M,q=E*(E+Z*O+2*X)+O*(Z*E+O+2*Y)+H}else O=W,E=Math.max(0,-(Z*O+X)),q=-E*E+O*(O+2*Y)+H;else O=-W,E=Math.max(0,-(Z*O+X)),q=-E*E+O*(O+2*Y)+H;else if(O<=-R)E=Math.max(0,-(-Z*W+X)),O=E>0?-W:Math.min(Math.max(-W,-Y),W),q=-E*E+O*(O+2*Y)+H;else if(O<=R)E=0,O=Math.min(Math.max(-W,-Y),W),q=O*(O+2*Y)+H;else E=Math.max(0,-(Z*W+X)),O=E>0?W:Math.min(Math.max(-W,-Y),W),q=-E*E+O*(O+2*Y)+H;else O=Z>0?-W:W,E=Math.max(0,-(Z*O+X)),q=-E*E+O*(O+2*Y)+H;if($)$.copy(this.origin).addScaledVector(this.direction,E);if(K)K.copy(xQ).addScaledVector(M6,O);return q}intersectSphere(J,Q){o8.subVectors(J.center,this.origin);let $=o8.dot(this.direction),K=o8.dot(o8)-$*$,W=J.radius*J.radius;if(K>W)return null;let Z=Math.sqrt(W-K),X=$-Z,Y=$+Z;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,K,W,Z,X,Y,H=1/this.direction.x,U=1/this.direction.y,E=1/this.direction.z,O=this.origin;if(H>=0)$=(J.min.x-O.x)*H,K=(J.max.x-O.x)*H;else $=(J.max.x-O.x)*H,K=(J.min.x-O.x)*H;if(U>=0)W=(J.min.y-O.y)*U,Z=(J.max.y-O.y)*U;else W=(J.max.y-O.y)*U,Z=(J.min.y-O.y)*U;if($>Z||W>K)return null;if(W>$||isNaN($))$=W;if(Z<K||isNaN(K))K=Z;if(E>=0)X=(J.min.z-O.z)*E,Y=(J.max.z-O.z)*E;else X=(J.max.z-O.z)*E,Y=(J.min.z-O.z)*E;if($>Y||X>K)return null;if(X>$||$!==$)$=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at($>=0?$:K,Q)}intersectsBox(J){return this.intersectBox(J,o8)!==null}intersectTriangle(J,Q,$,K,W){gQ.subVectors(Q,J),V6.subVectors($,J),pQ.crossVectors(gQ,V6);let Z=this.direction.dot(pQ),X;if(Z>0){if(K)return null;X=1}else if(Z<0)X=-1,Z=-Z;else return null;N9.subVectors(this.origin,J);let Y=X*this.direction.dot(V6.crossVectors(N9,V6));if(Y<0)return null;let H=X*this.direction.dot(gQ.cross(N9));if(H<0)return null;if(Y+H>Z)return null;let U=-X*N9.dot(pQ);if(U<0)return null;return this.at(U/Z,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bJ extends k9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new a0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new r8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var aK=new zJ,_9=new M7,B6=new k7,rK=new m,L6=new m,z6=new m,I6=new m,mQ=new m,A6=new m,tK=new m,P6=new m;class U0 extends hJ{constructor(J=new vJ,Q=new bJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let K=Q[$[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Z=K.length;W<Z;W++){let X=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition(J,Q){let $=this.geometry,K=$.attributes.position,W=$.morphAttributes.position,Z=$.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if(W&&X){A6.set(0,0,0);for(let Y=0,H=W.length;Y<H;Y++){let U=X[Y],E=W[Y];if(U===0)continue;if(mQ.fromBufferAttribute(E,J),Z)A6.addScaledVector(mQ,U);else A6.addScaledVector(mQ.sub(Q),U)}Q.add(A6)}return Q}raycast(J,Q){let $=this.geometry,K=this.material,W=this.matrixWorld;if(K===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(B6.copy($.boundingSphere),B6.applyMatrix4(W),_9.copy(J.ray).recast(J.near),B6.containsPoint(_9.origin)===!1){if(_9.intersectSphere(B6,rK)===null)return;if(_9.origin.distanceToSquared(rK)>(J.far-J.near)**2)return}if(aK.copy(W).invert(),_9.copy(J.ray).applyMatrix4(aK),$.boundingBox!==null){if(_9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,_9)}_computeIntersections(J,Q,$){let K,W=this.geometry,Z=this.material,X=W.index,Y=W.attributes.position,H=W.attributes.uv,U=W.attributes.uv1,E=W.attributes.normal,O=W.groups,q=W.drawRange;if(X!==null)if(Array.isArray(Z))for(let R=0,M=O.length;R<M;R++){let z=O[R],D=Z[z.materialIndex],G=Math.max(z.start,q.start),S=Math.min(X.count,Math.min(z.start+z.count,q.start+q.count));for(let I=G,V=S;I<V;I+=3){let w=X.getX(I),_=X.getX(I+1),C=X.getX(I+2);if(K=w6(this,D,J,$,H,U,E,w,_,C),K)K.faceIndex=Math.floor(I/3),K.face.materialIndex=z.materialIndex,Q.push(K)}}else{let R=Math.max(0,q.start),M=Math.min(X.count,q.start+q.count);for(let z=R,D=M;z<D;z+=3){let G=X.getX(z),S=X.getX(z+1),I=X.getX(z+2);if(K=w6(this,Z,J,$,H,U,E,G,S,I),K)K.faceIndex=Math.floor(z/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(Z))for(let R=0,M=O.length;R<M;R++){let z=O[R],D=Z[z.materialIndex],G=Math.max(z.start,q.start),S=Math.min(Y.count,Math.min(z.start+z.count,q.start+q.count));for(let I=G,V=S;I<V;I+=3){let w=I,_=I+1,C=I+2;if(K=w6(this,D,J,$,H,U,E,w,_,C),K)K.faceIndex=Math.floor(I/3),K.face.materialIndex=z.materialIndex,Q.push(K)}}else{let R=Math.max(0,q.start),M=Math.min(Y.count,q.start+q.count);for(let z=R,D=M;z<D;z+=3){let G=z,S=z+1,I=z+2;if(K=w6(this,Z,J,$,H,U,E,G,S,I),K)K.faceIndex=Math.floor(z/3),Q.push(K)}}}}function UY(J,Q,$,K,W,Z,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,Z,W,!0,Y);else H=K.intersectTriangle(W,Z,X,Q.side===0,Y);if(H===null)return null;P6.copy(Y),P6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(P6);if(U<$.near||U>$.far)return null;return{distance:U,point:P6.clone(),object:J}}function w6(J,Q,$,K,W,Z,X,Y,H,U){J.getVertexPosition(Y,L6),J.getVertexPosition(H,z6),J.getVertexPosition(U,I6);let E=UY(J,Q,$,K,L6,z6,I6,tK);if(E){let O=new m;if(k8.getBarycoord(tK,L6,z6,I6,O),W)E.uv=k8.getInterpolatedAttribute(W,Y,H,U,O,new n0);if(Z)E.uv1=k8.getInterpolatedAttribute(Z,Y,H,U,O,new n0);if(X){if(E.normal=k8.getInterpolatedAttribute(X,Y,H,U,O,new m),E.normal.dot(K.direction)>0)E.normal.multiplyScalar(-1)}let q={a:Y,b:H,c:U,normal:new m,materialIndex:0};k8.getNormal(L6,z6,I6,q.normal),E.face=q,E.barycoord=O}return E}class i$ extends cJ{constructor(J=null,Q=1,$=1,K,W,Z,X,Y,H=1003,U=1003,E,O){super(null,Z,X,Y,H,U,K,W,E,O);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var dQ=new m,qY=new m,GY=new r0;class _8{constructor(J=new m(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,K){return this.normal.set(J,Q,$),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let K=dQ.subVectors($,Q).cross(qY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let K=J.delta(dQ),W=this.normal.dot(K);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let Z=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(Z<0||Z>1))return null;return Q.copy(J.start).addScaledVector(K,Z)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||GY.getNormalMatrix(J),K=this.coplanarPoint(dQ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-K.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var C9=new k7,NY=new n0(0.5,0.5),_6=new m;class o7{constructor(J=new _8,Q=new _8,$=new _8,K=new _8,W=new _8,Z=new _8){this.planes=[J,Q,$,K,W,Z]}set(J,Q,$,K,W,Z){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(K),X[4].copy(W),X[5].copy(Z),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let K=this.planes,W=J.elements,Z=W[0],X=W[1],Y=W[2],H=W[3],U=W[4],E=W[5],O=W[6],q=W[7],R=W[8],M=W[9],z=W[10],D=W[11],G=W[12],S=W[13],I=W[14],V=W[15];if(K[0].setComponents(H-Z,q-U,D-R,V-G).normalize(),K[1].setComponents(H+Z,q+U,D+R,V+G).normalize(),K[2].setComponents(H+X,q+E,D+M,V+S).normalize(),K[3].setComponents(H-X,q-E,D-M,V-S).normalize(),$)K[4].setComponents(Y,O,z,I).normalize(),K[5].setComponents(H-Y,q-O,D-z,V-I).normalize();else if(K[4].setComponents(H-Y,q-O,D-z,V-I).normalize(),Q===2000)K[5].setComponents(H+Y,q+O,D+z,V+I).normalize();else if(Q===2001)K[5].setComponents(Y,O,z,I).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();C9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();C9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(C9)}intersectsSprite(J){C9.center.set(0,0,0);let Q=NY.distanceTo(J.center);return C9.radius=0.7071067811865476+Q,C9.applyMatrix4(J.matrixWorld),this.intersectsSphere(C9)}intersectsSphere(J){let Q=this.planes,$=J.center,K=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let K=Q[$];if(_6.x=K.normal.x>0?J.max.x:J.min.x,_6.y=K.normal.y>0?J.max.y:J.min.y,_6.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(_6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class p9 extends k9{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new a0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var eK=new zJ,lQ=new M7,C6=new k7,T6=new m;class V7 extends hJ{constructor(J=new vJ,Q=new p9){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,K=this.matrixWorld,W=J.params.Points.threshold,Z=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(C6.copy($.boundingSphere),C6.applyMatrix4(K),C6.radius+=W,J.ray.intersectsSphere(C6)===!1)return;eK.copy(K).invert(),lQ.copy(J.ray).applyMatrix4(eK);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=X*X,H=$.index,E=$.attributes.position;if(H!==null){let O=Math.max(0,Z.start),q=Math.min(H.count,Z.start+Z.count);for(let R=O,M=q;R<M;R++){let z=H.getX(R);T6.fromBufferAttribute(E,z),JW(T6,z,Y,K,J,Q,this)}}else{let O=Math.max(0,Z.start),q=Math.min(E.count,Z.start+Z.count);for(let R=O,M=q;R<M;R++)T6.fromBufferAttribute(E,R),JW(T6,R,Y,K,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let K=Q[$[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Z=K.length;W<Z;W++){let X=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function JW(J,Q,$,K,W,Z,X){let Y=lQ.distanceSqToPoint(J);if(Y<$){let H=new m;lQ.closestPointToPoint(J,H),H.applyMatrix4(K);let U=W.ray.origin.distanceTo(H);if(U<W.near||U>W.far)return;Z.push({distance:U,distanceToRay:Math.sqrt(Y),point:H,index:Q,face:null,faceIndex:null,barycoord:null,object:X})}}class r6 extends cJ{constructor(J=[],Q=301,$,K,W,Z,X,Y,H,U){super(J,Q,$,K,W,Z,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class g8 extends cJ{constructor(J,Q,$,K,W,Z,X,Y,H){super(J,Q,$,K,W,Z,X,Y,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class M9 extends cJ{constructor(J,Q,$=1014,K,W,Z,X=1003,Y=1003,H,U=1026,E=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let O={width:J,height:Q,depth:E};super(O,K,W,Z,X,Y,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new n7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class o$ extends M9{constructor(J,Q=1014,$=301,K,W,Z=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},E=[U,U,U,U,U,U];super(J,J,Q,$,K,W,Z,X,Y,H);this.image=E,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class t6 extends cJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class _0 extends vJ{constructor(J=1,Q=1,$=1,K=1,W=1,Z=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:K,heightSegments:W,depthSegments:Z};let X=this;K=Math.floor(K),W=Math.floor(W),Z=Math.floor(Z);let Y=[],H=[],U=[],E=[],O=0,q=0;R("z","y","x",-1,-1,$,Q,J,Z,W,0),R("z","y","x",1,-1,$,Q,-J,Z,W,1),R("x","z","y",1,1,J,$,Q,K,Z,2),R("x","z","y",1,-1,J,$,-Q,K,Z,3),R("x","y","z",1,-1,J,Q,$,K,W,4),R("x","y","z",-1,-1,J,Q,-$,K,W,5),this.setIndex(Y),this.setAttribute("position",new VJ(H,3)),this.setAttribute("normal",new VJ(U,3)),this.setAttribute("uv",new VJ(E,2));function R(M,z,D,G,S,I,V,w,_,C,k){let L=I/_,r=V/C,j=I/2,c=V/2,$0=w/2,s=_+1,J0=C+1,K0=0,l=0,n=new m;for(let d=0;d<J0;d++){let H0=d*r-c;for(let D0=0;D0<s;D0++){let F0=D0*L-j;n[M]=F0*G,n[z]=H0*S,n[D]=$0,H.push(n.x,n.y,n.z),n[M]=0,n[z]=0,n[D]=w>0?1:-1,U.push(n.x,n.y,n.z),E.push(D0/_),E.push(1-d/C),K0+=1}}for(let d=0;d<C;d++)for(let H0=0;H0<_;H0++){let D0=O+H0+s*d,F0=O+H0+s*(d+1),e=O+(H0+1)+s*(d+1),a=O+(H0+1)+s*d;Y.push(D0,F0,a),Y.push(F0,e,a),l+=6}X.addGroup(q,l,k),q+=l,O+=K0}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _0(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class sJ extends vJ{constructor(J=1,Q=1,$=1,K=32,W=1,Z=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:K,heightSegments:W,openEnded:Z,thetaStart:X,thetaLength:Y};let H=this;K=Math.floor(K),W=Math.floor(W);let U=[],E=[],O=[],q=[],R=0,M=[],z=$/2,D=0;if(G(),Z===!1){if(J>0)S(!0);if(Q>0)S(!1)}this.setIndex(U),this.setAttribute("position",new VJ(E,3)),this.setAttribute("normal",new VJ(O,3)),this.setAttribute("uv",new VJ(q,2));function G(){let I=new m,V=new m,w=0,_=(Q-J)/$;for(let C=0;C<=W;C++){let k=[],L=C/W,r=L*(Q-J)+J;for(let j=0;j<=K;j++){let c=j/K,$0=c*Y+X,s=Math.sin($0),J0=Math.cos($0);V.x=r*s,V.y=-L*$+z,V.z=r*J0,E.push(V.x,V.y,V.z),I.set(s,_,J0).normalize(),O.push(I.x,I.y,I.z),q.push(c,1-L),k.push(R++)}M.push(k)}for(let C=0;C<K;C++)for(let k=0;k<W;k++){let L=M[k][C],r=M[k+1][C],j=M[k+1][C+1],c=M[k][C+1];if(J>0||k!==0)U.push(L,r,c),w+=3;if(Q>0||k!==W-1)U.push(r,j,c),w+=3}H.addGroup(D,w,0),D+=w}function S(I){let V=R,w=new n0,_=new m,C=0,k=I===!0?J:Q,L=I===!0?1:-1;for(let j=1;j<=K;j++)E.push(0,z*L,0),O.push(0,L,0),q.push(0.5,0.5),R++;let r=R;for(let j=0;j<=K;j++){let $0=j/K*Y+X,s=Math.cos($0),J0=Math.sin($0);_.x=k*J0,_.y=z*L,_.z=k*s,E.push(_.x,_.y,_.z),O.push(0,L,0),w.x=s*0.5+0.5,w.y=J0*0.5*L+0.5,q.push(w.x,w.y),R++}for(let j=0;j<K;j++){let c=V+j,$0=r+j;if(I===!0)U.push($0,$0+1,c);else U.push($0+1,$0,c);C+=3}H.addGroup(D,C,I===!0?1:2),D+=C}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new sJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class m9 extends sJ{constructor(J=1,Q=1,$=32,K=1,W=!1,Z=0,X=Math.PI*2){super(0,J,Q,$,K,W,Z,X);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:K,openEnded:W,thetaStart:Z,thetaLength:X}}static fromJSON(J){return new m9(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class e6 extends vJ{constructor(J=[],Q=[],$=1,K=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:K};let W=[],Z=[];if(X(K),H($),U(),this.setAttribute("position",new VJ(W,3)),this.setAttribute("normal",new VJ(W.slice(),3)),this.setAttribute("uv",new VJ(Z,2)),K===0)this.computeVertexNormals();else this.normalizeNormals();function X(G){let S=new m,I=new m,V=new m;for(let w=0;w<Q.length;w+=3)q(Q[w+0],S),q(Q[w+1],I),q(Q[w+2],V),Y(S,I,V,G)}function Y(G,S,I,V){let w=V+1,_=[];for(let C=0;C<=w;C++){_[C]=[];let k=G.clone().lerp(I,C/w),L=S.clone().lerp(I,C/w),r=w-C;for(let j=0;j<=r;j++)if(j===0&&C===w)_[C][j]=k;else _[C][j]=k.clone().lerp(L,j/r)}for(let C=0;C<w;C++)for(let k=0;k<2*(w-C)-1;k++){let L=Math.floor(k/2);if(k%2===0)O(_[C][L+1]),O(_[C+1][L]),O(_[C][L]);else O(_[C][L+1]),O(_[C+1][L+1]),O(_[C+1][L])}}function H(G){let S=new m;for(let I=0;I<W.length;I+=3)S.x=W[I+0],S.y=W[I+1],S.z=W[I+2],S.normalize().multiplyScalar(G),W[I+0]=S.x,W[I+1]=S.y,W[I+2]=S.z}function U(){let G=new m;for(let S=0;S<W.length;S+=3){G.x=W[S+0],G.y=W[S+1],G.z=W[S+2];let I=z(G)/2/Math.PI+0.5,V=D(G)/Math.PI+0.5;Z.push(I,1-V)}R(),E()}function E(){for(let G=0;G<Z.length;G+=6){let S=Z[G+0],I=Z[G+2],V=Z[G+4],w=Math.max(S,I,V),_=Math.min(S,I,V);if(w>0.9&&_<0.1){if(S<0.2)Z[G+0]+=1;if(I<0.2)Z[G+2]+=1;if(V<0.2)Z[G+4]+=1}}}function O(G){W.push(G.x,G.y,G.z)}function q(G,S){let I=G*3;S.x=J[I+0],S.y=J[I+1],S.z=J[I+2]}function R(){let G=new m,S=new m,I=new m,V=new m,w=new n0,_=new n0,C=new n0;for(let k=0,L=0;k<W.length;k+=9,L+=6){G.set(W[k+0],W[k+1],W[k+2]),S.set(W[k+3],W[k+4],W[k+5]),I.set(W[k+6],W[k+7],W[k+8]),w.set(Z[L+0],Z[L+1]),_.set(Z[L+2],Z[L+3]),C.set(Z[L+4],Z[L+5]),V.copy(G).add(S).add(I).divideScalar(3);let r=z(V);M(w,L+0,G,r),M(_,L+2,S,r),M(C,L+4,I,r)}}function M(G,S,I,V){if(V<0&&G.x===1)Z[S]=G.x-1;if(I.x===0&&I.z===0)Z[S]=V/2/Math.PI+0.5}function z(G){return Math.atan2(G.z,-G.x)}function D(G){return Math.atan2(-G.y,Math.sqrt(G.x*G.x+G.z*G.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new e6(J.vertices,J.indices,J.radius,J.detail)}}class B7 extends e6{constructor(J=1,Q=0){let $=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],K=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super($,K,J,Q);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new B7(J.radius,J.detail)}}class S8 extends vJ{constructor(J=1,Q=1,$=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:K};let W=J/2,Z=Q/2,X=Math.floor($),Y=Math.floor(K),H=X+1,U=Y+1,E=J/X,O=Q/Y,q=[],R=[],M=[],z=[];for(let D=0;D<U;D++){let G=D*O-Z;for(let S=0;S<H;S++){let I=S*E-W;R.push(I,-G,0),M.push(0,0,1),z.push(S/X),z.push(1-D/Y)}}for(let D=0;D<Y;D++)for(let G=0;G<X;G++){let S=G+H*D,I=G+H*(D+1),V=G+1+H*(D+1),w=G+1+H*D;q.push(S,I,w),q.push(I,V,w)}this.setIndex(q),this.setAttribute("position",new VJ(R,3)),this.setAttribute("normal",new VJ(M,3)),this.setAttribute("uv",new VJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new S8(J.width,J.height,J.widthSegments,J.heightSegments)}}class V9 extends vJ{constructor(J=0.5,Q=1,$=32,K=1,W=0,Z=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:K,thetaStart:W,thetaLength:Z},$=Math.max(3,$),K=Math.max(1,K);let X=[],Y=[],H=[],U=[],E=J,O=(Q-J)/K,q=new m,R=new n0;for(let M=0;M<=K;M++){for(let z=0;z<=$;z++){let D=W+z/$*Z;q.x=E*Math.cos(D),q.y=E*Math.sin(D),Y.push(q.x,q.y,q.z),H.push(0,0,1),R.x=(q.x/Q+1)/2,R.y=(q.y/Q+1)/2,U.push(R.x,R.y)}E+=O}for(let M=0;M<K;M++){let z=M*($+1);for(let D=0;D<$;D++){let G=D+z,S=G,I=G+$+1,V=G+$+2,w=G+1;X.push(S,I,w),X.push(I,V,w)}}this.setIndex(X),this.setAttribute("position",new VJ(Y,3)),this.setAttribute("normal",new VJ(H,3)),this.setAttribute("uv",new VJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new V9(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class p8 extends vJ{constructor(J=1,Q=32,$=16,K=0,W=Math.PI*2,Z=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:K,phiLength:W,thetaStart:Z,thetaLength:X},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(Z+X,Math.PI),H=0,U=[],E=new m,O=new m,q=[],R=[],M=[],z=[];for(let D=0;D<=$;D++){let G=[],S=D/$,I=Z+S*X,V=J*Math.cos(I),w=Math.sqrt(J*J-V*V),_=0;if(D===0&&Z===0)_=0.5/Q;else if(D===$&&Y===Math.PI)_=-0.5/Q;for(let C=0;C<=Q;C++){let k=C/Q,L=K+k*W;E.x=-w*Math.cos(L),E.y=V,E.z=w*Math.sin(L),R.push(E.x,E.y,E.z),O.copy(E).normalize(),M.push(O.x,O.y,O.z),z.push(k+_,1-S),G.push(H++)}U.push(G)}for(let D=0;D<$;D++)for(let G=0;G<Q;G++){let S=U[D][G+1],I=U[D][G],V=U[D+1][G],w=U[D+1][G+1];if(D!==0||Z>0)q.push(S,I,w);if(D!==$-1||Y<Math.PI)q.push(I,V,w)}this.setIndex(q),this.setAttribute("position",new VJ(R,3)),this.setAttribute("normal",new VJ(M,3)),this.setAttribute("uv",new VJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new p8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class L7 extends vJ{constructor(J=1,Q=0.4,$=12,K=48,W=Math.PI*2,Z=0,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:K,arc:W,thetaStart:Z,thetaLength:X},$=Math.floor($),K=Math.floor(K);let Y=[],H=[],U=[],E=[],O=new m,q=new m,R=new m;for(let M=0;M<=$;M++){let z=Z+M/$*X;for(let D=0;D<=K;D++){let G=D/K*W;q.x=(J+Q*Math.cos(z))*Math.cos(G),q.y=(J+Q*Math.cos(z))*Math.sin(G),q.z=Q*Math.sin(z),H.push(q.x,q.y,q.z),O.x=J*Math.cos(G),O.y=J*Math.sin(G),R.subVectors(q,O).normalize(),U.push(R.x,R.y,R.z),E.push(D/K),E.push(M/$)}}for(let M=1;M<=$;M++)for(let z=1;z<=K;z++){let D=(K+1)*M+z-1,G=(K+1)*(M-1)+z-1,S=(K+1)*(M-1)+z,I=(K+1)*M+z;Y.push(D,G,I),Y.push(G,S,I)}this.setIndex(Y),this.setAttribute("position",new VJ(H,3)),this.setAttribute("normal",new VJ(U,3)),this.setAttribute("uv",new VJ(E,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new L7(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}function d9(J){let Q={};for(let $ in J){Q[$]={};for(let K in J[$]){let W=J[$][K];if(QW(W))if(W.isRenderTargetTexture)s0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][K]=null;else Q[$][K]=W.clone();else if(Array.isArray(W))if(QW(W[0])){let Z=[];for(let X=0,Y=W.length;X<Y;X++)Z[X]=W[X].clone();Q[$][K]=Z}else Q[$][K]=W.slice();else Q[$][K]=W}}return Q}function rJ(J){let Q={};for(let $=0;$<J.length;$++){let K=d9(J[$]);for(let W in K)Q[W]=K[W]}return Q}function QW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function FY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function a$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return UJ.workingColorSpace}var YZ={clone:d9,merge:rJ},OY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class X8 extends k9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OY,this.fragmentShader=DY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=d9(J.uniforms),this.uniformsGroups=FY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let Z=this.uniforms[K].value;if(Z&&Z.isTexture)Q.uniforms[K]={type:"t",value:Z.toJSON(J).uuid};else if(Z&&Z.isColor)Q.uniforms[K]={type:"c",value:Z.getHex()};else if(Z&&Z.isVector2)Q.uniforms[K]={type:"v2",value:Z.toArray()};else if(Z&&Z.isVector3)Q.uniforms[K]={type:"v3",value:Z.toArray()};else if(Z&&Z.isVector4)Q.uniforms[K]={type:"v4",value:Z.toArray()};else if(Z&&Z.isMatrix3)Q.uniforms[K]={type:"m3",value:Z.toArray()};else if(Z&&Z.isMatrix4)Q.uniforms[K]={type:"m4",value:Z.toArray()};else Q.uniforms[K]={value:Z}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let K in this.extensions)if(this.extensions[K]===!0)$[K]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let K=J.uniforms[$];switch(this.uniforms[$]={},K.type){case"t":this.uniforms[$].value=Q[K.value]||null;break;case"c":this.uniforms[$].value=new a0().setHex(K.value);break;case"v2":this.uniforms[$].value=new n0().fromArray(K.value);break;case"v3":this.uniforms[$].value=new m().fromArray(K.value);break;case"v4":this.uniforms[$].value=new wJ().fromArray(K.value);break;case"m3":this.uniforms[$].value=new r0().fromArray(K.value);break;case"m4":this.uniforms[$].value=new zJ().fromArray(K.value);break;default:this.uniforms[$].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class r$ extends X8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class f0 extends k9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new a0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new a0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new r8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class a7 extends f0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new n0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ZJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new a0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new a0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new a0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class t$ extends k9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class e$ extends k9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function S6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class u9{constructor(J,Q,$,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,K=Q[$],W=Q[$-1];$:{J:{let Z;Q:{K:if(!(J<K)){for(let X=$+2;;){if(K===void 0){if(J<W)break K;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(W=K,K=Q[++$],J<K)break J}Z=Q.length;break Q}if(!(J>=W)){let X=Q[1];if(J<X)$=2,W=X;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(K=W,W=Q[--$-1],J>=W)break J}Z=$,$=0;break Q}break $}while($<Z){let X=$+Z>>>1;if(J<Q[X])Z=X;else $=X+1}if(K=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,K)}return this.interpolate_($,W,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,K=this.valueSize,W=J*K;for(let Z=0;Z!==K;++Z)Q[Z]=$[W+Z];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class JK extends u9{constructor(J,Q,$,K){super(J,Q,$,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let K=this.parameterPositions,W=J-2,Z=J+1,X=K[W],Y=K[Z];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,X=2*Q-$;break;case 2402:W=K.length-2,X=Q+K[W]-K[W+1];break;default:W=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:Z=J,Y=2*$-Q;break;case 2402:Z=1,Y=$+K[1]-K[0];break;default:Z=J-1,Y=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-$),this._offsetPrev=W*U,this._offsetNext=Z*U}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,E=this._offsetNext,O=this._weightPrev,q=this._weightNext,R=($-Q)/(K-Q),M=R*R,z=M*R,D=-O*z+2*O*M-O*R,G=(1+O)*z+(-1.5-2*O)*M+(-0.5+O)*R+1,S=(-1-q)*z+(1.5+q)*M+0.5*R,I=q*z-q*M;for(let V=0;V!==X;++V)W[V]=D*Z[U+V]+G*Z[H+V]+S*Z[Y+V]+I*Z[E+V];return W}}class QK extends u9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=($-Q)/(K-Q),E=1-U;for(let O=0;O!==X;++O)W[O]=Z[H+O]*E+Z[Y+O]*U;return W}}class $K extends u9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class KK extends u9{interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,E=this.outTangents;if(!U||!E){let R=($-Q)/(K-Q),M=1-R;for(let z=0;z!==X;++z)W[z]=Z[H+z]*M+Z[Y+z]*R;return W}let O=X*2,q=J-1;for(let R=0;R!==X;++R){let M=Z[H+R],z=Z[Y+R],D=q*O+R*2,G=E[D],S=E[D+1],I=J*O+R*2,V=U[I],w=U[I+1],_=($-Q)/(K-Q),C,k,L,r,j;for(let c=0;c<8;c++){C=_*_,k=C*_,L=1-_,r=L*L,j=r*L;let s=j*Q+3*r*_*G+3*L*C*V+k*K-$;if(Math.abs(s)<0.0000000001)break;let J0=3*r*(G-Q)+6*L*_*(V-G)+3*C*(K-V);if(Math.abs(J0)<0.0000000001)break;_=_-s/J0,_=Math.max(0,Math.min(1,_))}W[R]=j*M+3*r*_*S+3*L*C*w+k*z}return W}}class B8{constructor(J,Q,$,K){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=S6(Q,this.TimeBufferType),this.values=S6($,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:S6(J.times,Array),values:S6(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)$.interpolation=K}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new $K(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new QK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new JK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new KK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return s0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,K=Q.length;$!==K;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,K=Q.length;$!==K;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,K=$.length,W=0,Z=K-1;while(W!==K&&$[W]<J)++W;while(Z!==-1&&$[Z]>Q)--Z;if(++Z,W!==0||Z!==K){if(W>=Z)Z=Math.max(Z,1),W=Z-1;let X=this.getValueSize();this.times=$.slice(W,Z),this.values=this.values.slice(W*X,Z*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)i0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,K=this.values,W=$.length;if(W===0)i0("KeyframeTrack: Track is empty.",this),J=!1;let Z=null;for(let X=0;X!==W;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){i0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(Z!==null&&Z>Y){i0("KeyframeTrack: Out of order keys.",this,X,Y,Z),J=!1;break}Z=Y}if(K!==void 0){if(jX(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){i0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),K=this.getInterpolation()===2302,W=J.length-1,Z=1;for(let X=1;X<W;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!K){let E=X*$,O=E-$,q=E+$;for(let R=0;R!==$;++R){let M=Q[E+R];if(M!==Q[O+R]||M!==Q[q+R]){Y=!0;break}}}else Y=!0;if(Y){if(X!==Z){J[Z]=J[X];let E=X*$,O=Z*$;for(let q=0;q!==$;++q)Q[O+q]=Q[E+q]}++Z}}if(W>0){J[Z]=J[W];for(let X=W*$,Y=Z*$,H=0;H!==$;++H)Q[Y+H]=Q[X+H];++Z}if(Z!==J.length)this.times=J.slice(0,Z),this.values=Q.slice(0,Z*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);return K.createInterpolant=this.createInterpolant,K}}B8.prototype.ValueTypeName="";B8.prototype.TimeBufferType=Float32Array;B8.prototype.ValueBufferType=Float32Array;B8.prototype.DefaultInterpolation=2301;class l9 extends B8{constructor(J,Q,$){super(J,Q,$)}}l9.prototype.ValueTypeName="bool";l9.prototype.ValueBufferType=Array;l9.prototype.DefaultInterpolation=2300;l9.prototype.InterpolantFactoryMethodLinear=void 0;l9.prototype.InterpolantFactoryMethodSmooth=void 0;class WK extends B8{constructor(J,Q,$,K){super(J,Q,$,K)}}WK.prototype.ValueTypeName="color";class ZK extends B8{constructor(J,Q,$,K){super(J,Q,$,K)}}ZK.prototype.ValueTypeName="number";class XK extends u9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=($-Q)/(K-Q),H=J*X;for(let U=H+X;H!==U;H+=4)M8.slerpFlat(W,0,Z,H-X,Z,H,Y);return W}}class JQ extends B8{constructor(J,Q,$,K){super(J,Q,$,K)}InterpolantFactoryMethodLinear(J){return new XK(this.times,this.values,this.getValueSize(),J)}}JQ.prototype.ValueTypeName="quaternion";JQ.prototype.InterpolantFactoryMethodSmooth=void 0;class c9 extends B8{constructor(J,Q,$){super(J,Q,$)}}c9.prototype.ValueTypeName="string";c9.prototype.ValueBufferType=Array;c9.prototype.DefaultInterpolation=2300;c9.prototype.InterpolantFactoryMethodLinear=void 0;c9.prototype.InterpolantFactoryMethodSmooth=void 0;class YK extends B8{constructor(J,Q,$,K){super(J,Q,$,K)}}YK.prototype.ValueTypeName="vector";class HK{constructor(J,Q,$){let K=this,W=!1,Z=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(X++,W===!1){if(K.onStart!==void 0)K.onStart(U,Z,X)}W=!0},this.itemEnd=function(U){if(Z++,K.onProgress!==void 0)K.onProgress(U,Z,X);if(Z===X){if(W=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(U){if(K.onError!==void 0)K.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,E){return H.push(U,E),this},this.removeHandler=function(U){let E=H.indexOf(U);if(E!==-1)H.splice(E,2);return this},this.getHandler=function(U){for(let E=0,O=H.length;E<O;E+=2){let q=H[E],R=H[E+1];if(q.global)q.lastIndex=0;if(q.test(U))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var HZ=new HK;class UK{constructor(J){if(this.manager=J!==void 0?J:HZ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(K,W){$.load(J,K,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}UK.DEFAULT_MATERIAL_NAME="__DEFAULT";class z7 extends hJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new a0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var uQ=new zJ,$W=new m,KW=new m;class QQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new n0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new zJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new o7,this._frameExtents=new n0(1,1),this._viewportCount=1,this._viewports=[new wJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if($W.setFromMatrixPosition(J.matrixWorld),Q.position.copy($W),KW.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(KW),Q.updateMatrixWorld(),uQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uQ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(uQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var j6=new m,y6=new M8,h8=new m;class $Q extends hJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zJ,this.projectionMatrix=new zJ,this.projectionMatrixInverse=new zJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(j6,y6,h8),h8.x===1&&h8.y===1&&h8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(j6,y6,h8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(j6,y6,h8),h8.x===1&&h8.y===1&&h8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(j6,y6,h8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var F9=new m,WW=new n0,ZW=new n0;class lJ extends $Q{constructor(J=50,Q=1,$=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=S9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(f7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return S9*2*Math.atan(Math.tan(f7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){F9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(F9.x,F9.y).multiplyScalar(-J/F9.z),F9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(F9.x,F9.y).multiplyScalar(-J/F9.z)}getViewSize(J,Q){return this.getViewBounds(J,WW,ZW),Q.subVectors(ZW,WW)}setViewOffset(J,Q,$,K,W,Z){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=K,this.view.width=W,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(f7*0.5*this.fov)/this.zoom,$=2*Q,K=this.aspect*$,W=-0.5*K,Z=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=Z;W+=Z.offsetX*K/Y,Q-=Z.offsetY*$/H,K*=Z.width/Y,$*=Z.height/H}let X=this.filmOffset;if(X!==0)W+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+K,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class UZ extends QQ{constructor(){super(new lJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=S9*2*J.angle*this.focus,K=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||K!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=K,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class B9 extends z7{constructor(J,Q,$=0,K=Math.PI/3,W=0,Z=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hJ.DEFAULT_UP),this.updateMatrix(),this.target=new hJ,this.distance=$,this.angle=K,this.penumbra=W,this.decay=Z,this.map=null,this.shadow=new UZ}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class qZ extends QQ{constructor(){super(new lJ(90,1,0.5,500));this.isPointLightShadow=!0}}class Q9 extends z7{constructor(J,Q,$=0,K=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=K,this.shadow=new qZ}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class r7 extends $Q{constructor(J=-1,Q=1,$=1,K=-1,W=0.1,Z=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=K,this.near=W,this.far=Z,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,K,W,Z){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=K,this.view.width=W,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,K=(this.top+this.bottom)/2,W=$-J,Z=$+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=H*this.view.offsetX,Z=W+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic(W,Z,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class GZ extends QQ{constructor(){super(new r7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class I7 extends z7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hJ.DEFAULT_UP),this.updateMatrix(),this.target=new hJ,this.shadow=new GZ}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class KQ extends z7{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var Y7=-90,H7=1;class qK extends hJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new lJ(Y7,H7,J,Q);K.layers=this.layers,this.add(K);let W=new lJ(Y7,H7,J,Q);W.layers=this.layers,this.add(W);let Z=new lJ(Y7,H7,J,Q);Z.layers=this.layers,this.add(Z);let X=new lJ(Y7,H7,J,Q);X.layers=this.layers,this.add(X);let Y=new lJ(Y7,H7,J,Q);Y.layers=this.layers,this.add(Y);let H=new lJ(Y7,H7,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,K,W,Z,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),Z.up.set(0,0,1),Z.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),Z.up.set(0,0,-1),Z.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,Z,X,Y,H,U]=this.children,E=J.getRenderTarget(),O=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let M=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let z=!1;if(J.isWebGLRenderer===!0)z=J.state.buffers.depth.getReversed();else z=J.reversedDepthBuffer;if(J.setRenderTarget($,0,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,2,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=M,J.setRenderTarget($,5,K),z&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(E,O,q),J.xr.enabled=R,$.texture.needsPMREMUpdate=!0}}class GK extends lJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var NK="\\[\\]\\.:\\/",EY=new RegExp("["+NK+"]","g"),FK="[^"+NK+"]",RY="[^"+NK.replace("\\.","")+"]",kY=/((?:WC+[\/:])*)/.source.replace("WC",FK),MY=/(WCOD+)?/.source.replace("WCOD",RY),VY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",FK),BY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",FK),LY=new RegExp("^"+kY+MY+VY+BY+"$"),zY=["material","materials","bones","map"];class NZ{constructor(J,Q,$){let K=$||RJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,K=this._bindings[$];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let K=this._targetGroup.nCachedObjects_,W=$.length;K!==W;++K)$[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class RJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||RJ.parseTrackName(Q),this.node=RJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new RJ(J,Q,$);else return new RJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(EY,"")}static parseTrackName(J){let Q=LY.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=$.nodeName&&$.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let W=$.nodeName.substring(K+1);if(zY.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,K),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let Z=0;Z<W.length;Z++){let X=W[Z];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},K=$(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)J[Q++]=$[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,K=Q.propertyName,W=Q.propertyIndex;if(!J)J=RJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){s0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){i0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){i0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){i0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){i0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){i0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){i0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){i0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let Z=J[K];if(Z===void 0){let H=Q.nodeName;i0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){i0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){i0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=Z,this.propertyIndex=W}else if(Z.fromArray!==void 0&&Z.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=Z;else if(Array.isArray(Z))Y=this.BindingType.EntireArray,this.resolvedProperty=Z;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}RJ.Composite=NZ;RJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};RJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};RJ.prototype.GetterByBindingType=[RJ.prototype._getValue_direct,RJ.prototype._getValue_array,RJ.prototype._getValue_arrayElement,RJ.prototype._getValue_toArray];RJ.prototype.SetterByBindingTypeAndVersioning=[[RJ.prototype._setValue_direct,RJ.prototype._setValue_direct_setNeedsUpdate,RJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_array,RJ.prototype._setValue_array_setNeedsUpdate,RJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_arrayElement,RJ.prototype._setValue_arrayElement_setNeedsUpdate,RJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_fromArray,RJ.prototype._setValue_fromArray_setNeedsUpdate,RJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QN=new Float32Array(1);class t7{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=ZJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(ZJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class OK{static{OK.prototype.isMatrix2=!0}constructor(J,Q,$,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,K){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=K,this}}class WQ extends x8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(J===void 0){s0("Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function DK(J,Q,$,K){let W=IY(K);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function IY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)s0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function vZ(){let J=null,Q=!1,$=null,K=null;function W(Z,X){$(Z,X),K=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;K=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(Z){$=Z},setContext:function(Z){J=Z}}}function AY(J){let Q=new WeakMap;function $(Y,H){let{array:U,usage:E}=Y,O=U.byteLength,q=J.createBuffer();J.bindBuffer(H,q),J.bufferData(H,U,E),Y.onUploadCallback();let R;if(U instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)R=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)R=J.SHORT;else if(U instanceof Uint32Array)R=J.UNSIGNED_INT;else if(U instanceof Int32Array)R=J.INT;else if(U instanceof Int8Array)R=J.BYTE;else if(U instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:R,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:O}}function K(Y,H,U){let{array:E,updateRanges:O}=H;if(J.bindBuffer(U,Y),O.length===0)J.bufferSubData(U,0,E);else{O.sort((R,M)=>R.start-M.start);let q=0;for(let R=1;R<O.length;R++){let M=O[q],z=O[R];if(z.start<=M.start+M.count+1)M.count=Math.max(M.count,z.start+z.count-M.start);else++q,O[q]=z}O.length=q+1;for(let R=0,M=O.length;R<M;R++){let z=O[R];J.bufferSubData(U,z.start*E.BYTES_PER_ELEMENT,E,z.start,z.count)}H.clearUpdateRanges()}H.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let E=Q.get(Y);if(!E||E.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(U.buffer,Y,H),U.version=Y.version}}return{get:W,remove:Z,update:X}}var PY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wY=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_Y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jY=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hY=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xY=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gY=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pY=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mY=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lY=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,oY=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aY=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rY=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tY=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eY=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$H="gl_FragColor = linearToOutputTexel( gl_FragColor );",KH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ZH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XH=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FH=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EH=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RH=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kH=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,MH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VH=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LH=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zH=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IH=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AH=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PH=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_H=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,CH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bH=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pH=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dH=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uH=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cH=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iH=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oH=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eH=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q5=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H5=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,U5=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G5=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F5=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,O5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D5=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M5=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,V5=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B5=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w5=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C5=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y5=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h5=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,v5=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,b5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x5=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g5=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m5=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d5=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u5=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l5=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c5=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n5=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s5=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i5=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o5=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t5=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e5=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$U=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KJ={alphahash_fragment:PY,alphahash_pars_fragment:wY,alphamap_fragment:_Y,alphamap_pars_fragment:CY,alphatest_fragment:TY,alphatest_pars_fragment:SY,aomap_fragment:jY,aomap_pars_fragment:yY,batching_pars_vertex:hY,batching_vertex:vY,begin_vertex:bY,beginnormal_vertex:fY,bsdfs:xY,iridescence_fragment:gY,bumpmap_pars_fragment:pY,clipping_planes_fragment:mY,clipping_planes_pars_fragment:dY,clipping_planes_pars_vertex:uY,clipping_planes_vertex:lY,color_fragment:cY,color_pars_fragment:nY,color_pars_vertex:sY,color_vertex:iY,common:oY,cube_uv_reflection_fragment:aY,defaultnormal_vertex:rY,displacementmap_pars_vertex:tY,displacementmap_vertex:eY,emissivemap_fragment:JH,emissivemap_pars_fragment:QH,colorspace_fragment:$H,colorspace_pars_fragment:KH,envmap_fragment:WH,envmap_common_pars_fragment:ZH,envmap_pars_fragment:XH,envmap_pars_vertex:YH,envmap_physical_pars_fragment:kH,envmap_vertex:HH,fog_vertex:UH,fog_pars_vertex:qH,fog_fragment:GH,fog_pars_fragment:NH,gradientmap_pars_fragment:FH,lightmap_pars_fragment:OH,lights_lambert_fragment:DH,lights_lambert_pars_fragment:EH,lights_pars_begin:RH,lights_toon_fragment:MH,lights_toon_pars_fragment:VH,lights_phong_fragment:BH,lights_phong_pars_fragment:LH,lights_physical_fragment:zH,lights_physical_pars_fragment:IH,lights_fragment_begin:AH,lights_fragment_maps:PH,lights_fragment_end:wH,lightprobes_pars_fragment:_H,logdepthbuf_fragment:CH,logdepthbuf_pars_fragment:TH,logdepthbuf_pars_vertex:SH,logdepthbuf_vertex:jH,map_fragment:yH,map_pars_fragment:hH,map_particle_fragment:vH,map_particle_pars_fragment:bH,metalnessmap_fragment:fH,metalnessmap_pars_fragment:xH,morphinstance_vertex:gH,morphcolor_vertex:pH,morphnormal_vertex:mH,morphtarget_pars_vertex:dH,morphtarget_vertex:uH,normal_fragment_begin:lH,normal_fragment_maps:cH,normal_pars_fragment:nH,normal_pars_vertex:sH,normal_vertex:iH,normalmap_pars_fragment:oH,clearcoat_normal_fragment_begin:aH,clearcoat_normal_fragment_maps:rH,clearcoat_pars_fragment:tH,iridescence_pars_fragment:eH,opaque_fragment:J5,packing:Q5,premultiplied_alpha_fragment:$5,project_vertex:K5,dithering_fragment:W5,dithering_pars_fragment:Z5,roughnessmap_fragment:X5,roughnessmap_pars_fragment:Y5,shadowmap_pars_fragment:H5,shadowmap_pars_vertex:U5,shadowmap_vertex:q5,shadowmask_pars_fragment:G5,skinbase_vertex:N5,skinning_pars_vertex:F5,skinning_vertex:O5,skinnormal_vertex:D5,specularmap_fragment:E5,specularmap_pars_fragment:R5,tonemapping_fragment:k5,tonemapping_pars_fragment:M5,transmission_fragment:V5,transmission_pars_fragment:B5,uv_pars_fragment:L5,uv_pars_vertex:z5,uv_vertex:I5,worldpos_vertex:A5,background_vert:P5,background_frag:w5,backgroundCube_vert:_5,backgroundCube_frag:C5,cube_vert:T5,cube_frag:S5,depth_vert:j5,depth_frag:y5,distance_vert:h5,distance_frag:v5,equirect_vert:b5,equirect_frag:f5,linedashed_vert:x5,linedashed_frag:g5,meshbasic_vert:p5,meshbasic_frag:m5,meshlambert_vert:d5,meshlambert_frag:u5,meshmatcap_vert:l5,meshmatcap_frag:c5,meshnormal_vert:n5,meshnormal_frag:s5,meshphong_vert:i5,meshphong_frag:o5,meshphysical_vert:a5,meshphysical_frag:r5,meshtoon_vert:t5,meshtoon_frag:e5,points_vert:JU,points_frag:QU,shadow_vert:$U,shadow_frag:KU,sprite_vert:WU,sprite_frag:ZU},w0={common:{diffuse:{value:new a0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new r0},alphaMap:{value:null},alphaMapTransform:{value:new r0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new r0}},envmap:{envMap:{value:null},envMapRotation:{value:new r0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new r0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new r0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new r0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new r0},normalScale:{value:new n0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new r0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new r0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new r0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new r0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new a0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new m},probesMax:{value:new m},probesResolution:{value:new m}},points:{diffuse:{value:new a0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new r0},alphaTest:{value:0},uvTransform:{value:new r0}},sprite:{diffuse:{value:new a0(16777215)},opacity:{value:1},center:{value:new n0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new r0},alphaMap:{value:null},alphaMapTransform:{value:new r0},alphaTest:{value:0}}},d8={basic:{uniforms:rJ([w0.common,w0.specularmap,w0.envmap,w0.aomap,w0.lightmap,w0.fog]),vertexShader:KJ.meshbasic_vert,fragmentShader:KJ.meshbasic_frag},lambert:{uniforms:rJ([w0.common,w0.specularmap,w0.envmap,w0.aomap,w0.lightmap,w0.emissivemap,w0.bumpmap,w0.normalmap,w0.displacementmap,w0.fog,w0.lights,{emissive:{value:new a0(0)},envMapIntensity:{value:1}}]),vertexShader:KJ.meshlambert_vert,fragmentShader:KJ.meshlambert_frag},phong:{uniforms:rJ([w0.common,w0.specularmap,w0.envmap,w0.aomap,w0.lightmap,w0.emissivemap,w0.bumpmap,w0.normalmap,w0.displacementmap,w0.fog,w0.lights,{emissive:{value:new a0(0)},specular:{value:new a0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:KJ.meshphong_vert,fragmentShader:KJ.meshphong_frag},standard:{uniforms:rJ([w0.common,w0.envmap,w0.aomap,w0.lightmap,w0.emissivemap,w0.bumpmap,w0.normalmap,w0.displacementmap,w0.roughnessmap,w0.metalnessmap,w0.fog,w0.lights,{emissive:{value:new a0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:KJ.meshphysical_vert,fragmentShader:KJ.meshphysical_frag},toon:{uniforms:rJ([w0.common,w0.aomap,w0.lightmap,w0.emissivemap,w0.bumpmap,w0.normalmap,w0.displacementmap,w0.gradientmap,w0.fog,w0.lights,{emissive:{value:new a0(0)}}]),vertexShader:KJ.meshtoon_vert,fragmentShader:KJ.meshtoon_frag},matcap:{uniforms:rJ([w0.common,w0.bumpmap,w0.normalmap,w0.displacementmap,w0.fog,{matcap:{value:null}}]),vertexShader:KJ.meshmatcap_vert,fragmentShader:KJ.meshmatcap_frag},points:{uniforms:rJ([w0.points,w0.fog]),vertexShader:KJ.points_vert,fragmentShader:KJ.points_frag},dashed:{uniforms:rJ([w0.common,w0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:KJ.linedashed_vert,fragmentShader:KJ.linedashed_frag},depth:{uniforms:rJ([w0.common,w0.displacementmap]),vertexShader:KJ.depth_vert,fragmentShader:KJ.depth_frag},normal:{uniforms:rJ([w0.common,w0.bumpmap,w0.normalmap,w0.displacementmap,{opacity:{value:1}}]),vertexShader:KJ.meshnormal_vert,fragmentShader:KJ.meshnormal_frag},sprite:{uniforms:rJ([w0.sprite,w0.fog]),vertexShader:KJ.sprite_vert,fragmentShader:KJ.sprite_frag},background:{uniforms:{uvTransform:{value:new r0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:KJ.background_vert,fragmentShader:KJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new r0}},vertexShader:KJ.backgroundCube_vert,fragmentShader:KJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:KJ.cube_vert,fragmentShader:KJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:KJ.equirect_vert,fragmentShader:KJ.equirect_frag},distance:{uniforms:rJ([w0.common,w0.displacementmap,{referencePosition:{value:new m},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:KJ.distance_vert,fragmentShader:KJ.distance_frag},shadow:{uniforms:rJ([w0.lights,w0.fog,{color:{value:new a0(0)},opacity:{value:1}}]),vertexShader:KJ.shadow_vert,fragmentShader:KJ.shadow_frag}};d8.physical={uniforms:rJ([d8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new r0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new r0},clearcoatNormalScale:{value:new n0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new r0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new r0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new r0},sheen:{value:0},sheenColor:{value:new a0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new r0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new r0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new r0},transmissionSamplerSize:{value:new n0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new r0},attenuationDistance:{value:0},attenuationColor:{value:new a0(0)},specularColor:{value:new a0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new r0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new r0},anisotropyVector:{value:new n0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new r0}}]),vertexShader:KJ.meshphysical_vert,fragmentShader:KJ.meshphysical_frag};var ZQ={r:0,b:0,g:0},XU=new zJ,bZ=new r0;bZ.set(-1,0,0,0,1,0,0,0,1);function YU(J,Q,$,K,W,Z){let X=new a0(0),Y=W===!0?0:1,H,U,E=null,O=0,q=null;function R(S){let I=S.isScene===!0?S.background:null;if(I&&I.isTexture){let V=S.backgroundBlurriness>0;I=Q.get(I,V)}return I}function M(S){let I=!1,V=R(S);if(V===null)D(X,Y);else if(V&&V.isColor)D(V,1),I=!0;let w=J.xr.getEnvironmentBlendMode();if(w==="additive")$.buffers.color.setClear(0,0,0,1,Z);else if(w==="alpha-blend")$.buffers.color.setClear(0,0,0,0,Z);if(J.autoClear||I)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function z(S,I){let V=R(I);if(V&&(V.isCubeTexture||V.mapping===d7)){if(U===void 0)U=new U0(new _0(1,1,1),new X8({name:"BackgroundCubeMaterial",uniforms:d9(d8.backgroundCube.uniforms),vertexShader:d8.backgroundCube.vertexShader,fragmentShader:d8.backgroundCube.fragmentShader,side:aJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(w,_,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(XU.makeRotationFromEuler(I.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(bZ);if(U.material.toneMapped=UJ.getTransfer(V.colorSpace)!==MJ,E!==V||O!==V.version||q!==J.toneMapping)U.material.needsUpdate=!0,E=V,O=V.version,q=J.toneMapping;U.layers.enableAll(),S.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new U0(new S8(2,2),new X8({name:"BackgroundMaterial",uniforms:d9(d8.background.uniforms),vertexShader:d8.background.vertexShader,fragmentShader:d8.background.fragmentShader,side:F7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,H.material.toneMapped=UJ.getTransfer(V.colorSpace)!==MJ,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),E!==V||O!==V.version||q!==J.toneMapping)H.material.needsUpdate=!0,E=V,O=V.version,q=J.toneMapping;H.layers.enableAll(),S.unshift(H,H.geometry,H.material,0,0,null)}}function D(S,I){S.getRGB(ZQ,a$(J)),$.buffers.color.setClear(ZQ.r,ZQ.g,ZQ.b,I,Z)}function G(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(S,I=1){X.set(S),Y=I,D(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(S){Y=S,D(X,Y)},render:M,addToRenderList:z,dispose:G}}function HU(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},W=q(null),Z=W,X=!1;function Y(j,c,$0,s,J0){let K0=!1,l=O(j,s,$0,c);if(Z!==l)Z=l,U(Z.object);if(K0=R(j,s,$0,J0),K0)M(j,s,$0,J0);if(J0!==null)Q.update(J0,J.ELEMENT_ARRAY_BUFFER);if(K0||X){if(X=!1,V(j,c,$0,s),J0!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(J0).buffer)}}function H(){return J.createVertexArray()}function U(j){return J.bindVertexArray(j)}function E(j){return J.deleteVertexArray(j)}function O(j,c,$0,s){let J0=s.wireframe===!0,K0=K[c.id];if(K0===void 0)K0={},K[c.id]=K0;let l=j.isInstancedMesh===!0?j.id:0,n=K0[l];if(n===void 0)n={},K0[l]=n;let d=n[$0.id];if(d===void 0)d={},n[$0.id]=d;let H0=d[J0];if(H0===void 0)H0=q(H()),d[J0]=H0;return H0}function q(j){let c=[],$0=[],s=[];for(let J0=0;J0<$;J0++)c[J0]=0,$0[J0]=0,s[J0]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:c,enabledAttributes:$0,attributeDivisors:s,object:j,attributes:{},index:null}}function R(j,c,$0,s){let J0=Z.attributes,K0=c.attributes,l=0,n=$0.getAttributes();for(let d in n)if(n[d].location>=0){let D0=J0[d],F0=K0[d];if(F0===void 0){if(d==="instanceMatrix"&&j.instanceMatrix)F0=j.instanceMatrix;if(d==="instanceColor"&&j.instanceColor)F0=j.instanceColor}if(D0===void 0)return!0;if(D0.attribute!==F0)return!0;if(F0&&D0.data!==F0.data)return!0;l++}if(Z.attributesNum!==l)return!0;if(Z.index!==s)return!0;return!1}function M(j,c,$0,s){let J0={},K0=c.attributes,l=0,n=$0.getAttributes();for(let d in n)if(n[d].location>=0){let D0=K0[d];if(D0===void 0){if(d==="instanceMatrix"&&j.instanceMatrix)D0=j.instanceMatrix;if(d==="instanceColor"&&j.instanceColor)D0=j.instanceColor}let F0={};if(F0.attribute=D0,D0&&D0.data)F0.data=D0.data;J0[d]=F0,l++}Z.attributes=J0,Z.attributesNum=l,Z.index=s}function z(){let j=Z.newAttributes;for(let c=0,$0=j.length;c<$0;c++)j[c]=0}function D(j){G(j,0)}function G(j,c){let{newAttributes:$0,enabledAttributes:s,attributeDivisors:J0}=Z;if($0[j]=1,s[j]===0)J.enableVertexAttribArray(j),s[j]=1;if(J0[j]!==c)J.vertexAttribDivisor(j,c),J0[j]=c}function S(){let{newAttributes:j,enabledAttributes:c}=Z;for(let $0=0,s=c.length;$0<s;$0++)if(c[$0]!==j[$0])J.disableVertexAttribArray($0),c[$0]=0}function I(j,c,$0,s,J0,K0,l){if(l===!0)J.vertexAttribIPointer(j,c,$0,J0,K0);else J.vertexAttribPointer(j,c,$0,s,J0,K0)}function V(j,c,$0,s){z();let J0=s.attributes,K0=$0.getAttributes(),l=c.defaultAttributeValues;for(let n in K0){let d=K0[n];if(d.location>=0){let H0=J0[n];if(H0===void 0){if(n==="instanceMatrix"&&j.instanceMatrix)H0=j.instanceMatrix;if(n==="instanceColor"&&j.instanceColor)H0=j.instanceColor}if(H0!==void 0){let{normalized:D0,itemSize:F0}=H0,e=Q.get(H0);if(e===void 0)continue;let{buffer:a,type:y,bytesPerElement:A}=e,x=y===J.INT||y===J.UNSIGNED_INT||H0.gpuType===Q$;if(H0.isInterleavedBufferAttribute){let p=H0.data,u=p.stride,T=H0.offset;if(p.isInstancedInterleavedBuffer){for(let N0=0;N0<d.locationSize;N0++)G(d.location+N0,p.meshPerAttribute);if(j.isInstancedMesh!==!0&&s._maxInstanceCount===void 0)s._maxInstanceCount=p.meshPerAttribute*p.count}else for(let N0=0;N0<d.locationSize;N0++)D(d.location+N0);J.bindBuffer(J.ARRAY_BUFFER,a);for(let N0=0;N0<d.locationSize;N0++)I(d.location+N0,F0/d.locationSize,y,D0,u*A,(T+F0/d.locationSize*N0)*A,x)}else{if(H0.isInstancedBufferAttribute){for(let p=0;p<d.locationSize;p++)G(d.location+p,H0.meshPerAttribute);if(j.isInstancedMesh!==!0&&s._maxInstanceCount===void 0)s._maxInstanceCount=H0.meshPerAttribute*H0.count}else for(let p=0;p<d.locationSize;p++)D(d.location+p);J.bindBuffer(J.ARRAY_BUFFER,a);for(let p=0;p<d.locationSize;p++)I(d.location+p,F0/d.locationSize,y,D0,F0*A,F0/d.locationSize*p*A,x)}}else if(l!==void 0){let D0=l[n];if(D0!==void 0)switch(D0.length){case 2:J.vertexAttrib2fv(d.location,D0);break;case 3:J.vertexAttrib3fv(d.location,D0);break;case 4:J.vertexAttrib4fv(d.location,D0);break;default:J.vertexAttrib1fv(d.location,D0)}}}}S()}function w(){L();for(let j in K){let c=K[j];for(let $0 in c){let s=c[$0];for(let J0 in s){let K0=s[J0];for(let l in K0)E(K0[l].object),delete K0[l];delete s[J0]}}delete K[j]}}function _(j){if(K[j.id]===void 0)return;let c=K[j.id];for(let $0 in c){let s=c[$0];for(let J0 in s){let K0=s[J0];for(let l in K0)E(K0[l].object),delete K0[l];delete s[J0]}}delete K[j.id]}function C(j){for(let c in K){let $0=K[c];for(let s in $0){let J0=$0[s];if(J0[j.id]===void 0)continue;let K0=J0[j.id];for(let l in K0)E(K0[l].object),delete K0[l];delete J0[j.id]}}}function k(j){for(let c in K){let $0=K[c],s=j.isInstancedMesh===!0?j.id:0,J0=$0[s];if(J0===void 0)continue;for(let K0 in J0){let l=J0[K0];for(let n in l)E(l[n].object),delete l[n];delete J0[K0]}if(delete $0[s],Object.keys($0).length===0)delete K[c]}}function L(){if(r(),X=!0,Z===W)return;Z=W,U(Z.object)}function r(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:L,resetDefaultState:r,dispose:w,releaseStatesOfGeometry:_,releaseStatesOfObject:k,releaseStatesOfProgram:C,initAttributes:z,enableAttribute:D,disableUnusedAttributes:S}}function UU(J,Q,$){let K;function W(H){K=H}function Z(H,U){J.drawArrays(K,H,U),$.update(U,K,1)}function X(H,U,E){if(E===0)return;J.drawArraysInstanced(K,H,U,E),$.update(U,K,E)}function Y(H,U,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,U,0,E);let q=0;for(let R=0;R<E;R++)q+=U[R];$.update(q,K,1)}this.setMode=W,this.render=Z,this.renderInstances=X,this.renderMultiDraw=Y}function qU(J,Q,$,K){let W;function Z(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let C=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(C){if(C!==b8&&K.convert(C)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(C){let k=C===J9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(C!==T8&&K.convert(C)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==e8&&!k)return!1;return!0}function H(C){if(C==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";C="mediump"}if(C==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",E=H(U);if(E!==U)s0("WebGLRenderer:",U,"not supported, using",E,"instead."),U=E;let O=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)s0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),z=J.getParameter(J.MAX_TEXTURE_SIZE),D=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),G=J.getParameter(J.MAX_VERTEX_ATTRIBS),S=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),I=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),w=J.getParameter(J.MAX_SAMPLES),_=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Z,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:O,reversedDepthBuffer:q,maxTextures:R,maxVertexTextures:M,maxTextureSize:z,maxCubemapSize:D,maxAttributes:G,maxVertexUniforms:S,maxVaryings:I,maxFragmentUniforms:V,maxSamples:w,samples:_}}function GU(J){let Q=this,$=null,K=0,W=!1,Z=!1,X=new _8,Y=new r0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(O,q){let R=O.length!==0||q||K!==0||W;return W=q,K=O.length,R},this.beginShadows=function(){Z=!0,E(null)},this.endShadows=function(){Z=!1},this.setGlobalState=function(O,q){$=E(O,q,0)},this.setState=function(O,q,R){let{clippingPlanes:M,clipIntersection:z,clipShadows:D}=O,G=J.get(O);if(!W||M===null||M.length===0||Z&&!D)if(Z)E(null);else U();else{let S=Z?0:K,I=S*4,V=G.clippingState||null;H.value=V,V=E(M,q,I,R);for(let w=0;w!==I;++w)V[w]=$[w];G.clippingState=V,this.numIntersection=z?this.numPlanes:0,this.numPlanes+=S}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function E(O,q,R,M){let z=O!==null?O.length:0,D=null;if(z!==0){if(D=H.value,M!==!0||D===null){let G=R+z*4,S=q.matrixWorldInverse;if(Y.getNormalMatrix(S),D===null||D.length<G)D=new Float32Array(G);for(let I=0,V=R;I!==z;++I,V+=4)X.copy(O[I]).applyMatrix4(S,Y),X.normal.toArray(D,V),D[V+3]=X.constant}H.value=D,H.needsUpdate=!0}return Q.numPlanes=z,Q.numIntersection=0,D}}var L9=4,FZ=[0.125,0.215,0.35,0.446,0.526,0.582],n9=20,NU=256,e7=new r7,OZ=new a0,EK=null,RK=0,kK=0,MK=!1,FU=new m;class LK{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,K=100,W={}){let{size:Z=256,position:X=FU}=W;EK=this._renderer.getRenderTarget(),RK=this._renderer.getActiveCubeFace(),kK=this._renderer.getActiveMipmapLevel(),MK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(Z);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,K,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=RZ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=EZ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(EK,RK,kK),this._renderer.xr.enabled=MK,J.scissorTest=!1,A7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===D7||J.mapping===y9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);EK=this._renderer.getRenderTarget(),RK=this._renderer.getActiveCubeFace(),kK=this._renderer.getActiveMipmapLevel(),MK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:Z8,minFilter:Z8,generateMipmaps:!1,type:J9,format:b8,colorSpace:x$,depthBuffer:!1},K=DZ(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=DZ(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=OU(W)),this._blurMaterial=EU(W,J,Q),this._ggxMaterial=DU(W,J,Q)}return K}_compileMaterial(J){let Q=new U0(new vJ,J);this._renderer.compile(Q,e7)}_sceneToCubeUV(J,Q,$,K,W){let Y=new lJ(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],E=this._renderer,O=E.autoClear,q=E.toneMapping;if(E.getClearColor(OZ),E.toneMapping=C8,E.autoClear=!1,E.state.buffers.depth.getReversed())E.setRenderTarget(K),E.clearDepth(),E.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new U0(new _0,new bJ({name:"PMREM.Background",side:aJ,depthWrite:!1,depthTest:!1}));let M=this._backgroundBox,z=M.material,D=!1,G=J.background;if(G){if(G.isColor)z.color.copy(G),J.background=null,D=!0}else z.color.copy(OZ),D=!0;for(let S=0;S<6;S++){let I=S%3;if(I===0)Y.up.set(0,H[S],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x+U[S],W.y,W.z);else if(I===1)Y.up.set(0,0,H[S]),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y+U[S],W.z);else Y.up.set(0,H[S],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y,W.z+U[S]);let V=this._cubeSize;if(A7(K,I*V,S>2?V:0,V,V),E.setRenderTarget(K),D)E.render(M,Y);E.render(J,Y)}E.toneMapping=q,E.autoClear=O,J.background=G}_textureToCubeUV(J,Q){let $=this._renderer,K=J.mapping===D7||J.mapping===y9;if(K){if(this._cubemapMaterial===null)this._cubemapMaterial=RZ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=EZ();let W=K?this._cubemapMaterial:this._equirectMaterial,Z=this._lodMeshes[0];Z.material=W;let X=W.uniforms;X.envMap.value=J;let Y=this._cubeSize;A7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(Z,e7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let K=this._lodMeshes.length;for(let W=1;W<K;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let K=this._renderer,W=this._pingPongRenderTarget,Z=this._ggxMaterial,X=this._lodMeshes[$];X.material=Z;let Y=Z.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),E=Math.sqrt(H*H-U*U),O=0+H*1.25,q=E*O,{_lodMax:R}=this,M=this._sizeLods[$],z=3*M*($>R-L9?$-R+L9:0),D=4*(this._cubeSize-M);Y.envMap.value=J.texture,Y.roughness.value=q,Y.mipInt.value=R-Q,A7(W,z,D,3*M,2*M),K.setRenderTarget(W),K.render(X,e7),Y.envMap.value=W.texture,Y.roughness.value=0,Y.mipInt.value=R-$,A7(J,z,D,3*M,2*M),K.setRenderTarget(J),K.render(X,e7)}_blur(J,Q,$,K,W){let Z=this._pingPongRenderTarget;this._halfBlur(J,Z,Q,$,K,"latitudinal",W),this._halfBlur(Z,J,$,$,K,"longitudinal",W)}_halfBlur(J,Q,$,K,W,Z,X){let Y=this._renderer,H=this._blurMaterial;if(Z!=="latitudinal"&&Z!=="longitudinal")i0("blur direction must be either latitudinal or longitudinal!");let U=3,E=this._lodMeshes[K];E.material=H;let O=H.uniforms,q=this._sizeLods[$]-1,R=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*n9-1),M=W/R,z=isFinite(W)?1+Math.floor(U*M):n9;if(z>n9)s0(`sigmaRadians, ${W}, is too large and will clip, as it requested ${z} samples when the maximum is set to ${n9}`);let D=[],G=0;for(let _=0;_<n9;++_){let C=_/M,k=Math.exp(-C*C/2);if(D.push(k),_===0)G+=k;else if(_<z)G+=2*k}for(let _=0;_<D.length;_++)D[_]=D[_]/G;if(O.envMap.value=J.texture,O.samples.value=z,O.weights.value=D,O.latitudinal.value=Z==="latitudinal",X)O.poleAxis.value=X;let{_lodMax:S}=this;O.dTheta.value=R,O.mipInt.value=S-$;let I=this._sizeLods[K],V=3*I*(K>S-L9?K-S+L9:0),w=4*(this._cubeSize-I);A7(Q,V,w,3*I,2*I),Y.setRenderTarget(Q),Y.render(E,e7)}}function OU(J){let Q=[],$=[],K=[],W=J,Z=J-L9+1+FZ.length;for(let X=0;X<Z;X++){let Y=Math.pow(2,W);Q.push(Y);let H=1/Y;if(X>J-L9)H=FZ[X-J+L9-1];else if(X===0)H=0;$.push(H);let U=1/(Y-2),E=-U,O=1+U,q=[E,E,O,E,O,O,E,E,O,O,E,O],R=6,M=6,z=3,D=2,G=1,S=new Float32Array(z*M*R),I=new Float32Array(D*M*R),V=new Float32Array(G*M*R);for(let _=0;_<R;_++){let C=_%3*2/3-1,k=_>2?0:-1,L=[C,k,0,C+0.6666666666666666,k,0,C+0.6666666666666666,k+1,0,C,k,0,C+0.6666666666666666,k+1,0,C,k+1,0];S.set(L,z*M*_),I.set(q,D*M*_);let r=[_,_,_,_,_,_];V.set(r,G*M*_)}let w=new vJ;if(w.setAttribute("position",new nJ(S,z)),w.setAttribute("uv",new nJ(I,D)),w.setAttribute("faceIndex",new nJ(V,G)),K.push(new U0(w,null)),W>L9)W--}return{lodMeshes:K,sizeLods:Q,sigmas:$}}function DZ(J,Q,$){let K=new V8(J,Q,$);return K.texture.mapping=d7,K.texture.name="PMREM.cubeUv",K.scissorTest=!0,K}function A7(J,Q,$,K,W){J.viewport.set(Q,$,K,W),J.scissor.set(Q,$,K,W)}function DU(J,Q,$){return new X8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NU,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:YQ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:v8,depthTest:!1,depthWrite:!1})}function EU(J,Q,$){let K=new Float32Array(n9),W=new m(0,1,0);return new X8({name:"SphericalGaussianBlur",defines:{n:n9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:K},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:YQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:v8,depthTest:!1,depthWrite:!1})}function EZ(){return new X8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:YQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:v8,depthTest:!1,depthWrite:!1})}function RZ(){return new X8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:YQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:v8,depthTest:!1,depthWrite:!1})}function YQ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class AK extends V8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},K=[$,$,$,$,$,$];this.texture=new r6(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},K=new _0(5,5,5),W=new X8({name:"CubemapFromEquirect",uniforms:d9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:aJ,blending:v8});W.uniforms.tEquirect.value=Q;let Z=new U0(K,W),X=Q.minFilter;if(Q.minFilter===h9)Q.minFilter=Z8;return new qK(1,10,this).update(J,Z),Q.minFilter=X,Z.geometry.dispose(),Z.material.dispose(),this}clear(J,Q=!0,$=!0,K=!0){let W=J.getRenderTarget();for(let Z=0;Z<6;Z++)J.setRenderTarget(this,Z),J.clear(Q,$,K);J.setRenderTarget(W)}}function RU(J){let Q=new WeakMap,$=new WeakMap,K=null;function W(q,R=!1){if(q===null||q===void 0)return null;if(R)return X(q);return Z(q)}function Z(q){if(q&&q.isTexture){let R=q.mapping;if(R===h6||R===v6)if(Q.has(q)){let M=Q.get(q).texture;return Y(M,q.mapping)}else{let M=q.image;if(M&&M.height>0){let z=new AK(M.height);return z.fromEquirectangularTexture(J,q),Q.set(q,z),q.addEventListener("dispose",U),Y(z.texture,q.mapping)}else return null}}return q}function X(q){if(q&&q.isTexture){let R=q.mapping,M=R===h6||R===v6,z=R===D7||R===y9;if(M||z){let D=$.get(q),G=D!==void 0?D.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==G){if(K===null)K=new LK(J);return D=M?K.fromEquirectangular(q,D):K.fromCubemap(q,D),D.texture.pmremVersion=q.pmremVersion,$.set(q,D),D.texture}else if(D!==void 0)return D.texture;else{let S=q.image;if(M&&S&&S.height>0||z&&S&&H(S)){if(K===null)K=new LK(J);return D=M?K.fromEquirectangular(q):K.fromCubemap(q),D.texture.pmremVersion=q.pmremVersion,$.set(q,D),q.addEventListener("dispose",E),D.texture}else return null}}}return q}function Y(q,R){if(R===h6)q.mapping=D7;else if(R===v6)q.mapping=y9;return q}function H(q){let R=0,M=6;for(let z=0;z<M;z++)if(q[z]!==void 0)R++;return R===M}function U(q){let R=q.target;R.removeEventListener("dispose",U);let M=Q.get(R);if(M!==void 0)Q.delete(R),M.dispose()}function E(q){let R=q.target;R.removeEventListener("dispose",E);let M=$.get(R);if(M!==void 0)$.delete(R),M.dispose()}function O(){if(Q=new WeakMap,$=new WeakMap,K!==null)K.dispose(),K=null}return{get:W,dispose:O}}function kU(J){let Q={};function $(K){if(Q[K]!==void 0)return Q[K];let W=J.getExtension(K);return Q[K]=W,W}return{has:function(K){return $(K)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(K){let W=$(K);if(W===null)T9("WebGLRenderer: "+K+" extension not supported.");return W}}}function MU(J,Q,$,K){let W={},Z=new WeakMap;function X(O){let q=O.target;if(q.index!==null)Q.remove(q.index);for(let M in q.attributes)Q.remove(q.attributes[M]);q.removeEventListener("dispose",X),delete W[q.id];let R=Z.get(q);if(R)Q.remove(R),Z.delete(q);if(K.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function Y(O,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",X),W[q.id]=!0,$.memory.geometries++,q}function H(O){let q=O.attributes;for(let R in q)Q.update(q[R],J.ARRAY_BUFFER)}function U(O){let q=[],R=O.index,M=O.attributes.position,z=0;if(M===void 0)return;if(R!==null){let S=R.array;z=R.version;for(let I=0,V=S.length;I<V;I+=3){let w=S[I+0],_=S[I+1],C=S[I+2];q.push(w,_,_,C,C,w)}}else{let S=M.array;z=M.version;for(let I=0,V=S.length/3-1;I<V;I+=3){let w=I+0,_=I+1,C=I+2;q.push(w,_,_,C,C,w)}}let D=new(M.count>=65535?a6:o6)(q,1);D.version=z;let G=Z.get(O);if(G)Q.remove(G);Z.set(O,D)}function E(O){let q=Z.get(O);if(q){let R=O.index;if(R!==null){if(q.version<R.version)U(O)}}else U(O);return Z.get(O)}return{get:Y,update:H,getWireframeAttribute:E}}function VU(J,Q,$){let K;function W(O){K=O}let Z,X;function Y(O){Z=O.type,X=O.bytesPerElement}function H(O,q){J.drawElements(K,q,Z,O*X),$.update(q,K,1)}function U(O,q,R){if(R===0)return;J.drawElementsInstanced(K,q,Z,O*X,R),$.update(q,K,R)}function E(O,q,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,q,0,Z,O,0,R);let z=0;for(let D=0;D<R;D++)z+=q[D];$.update(z,K,1)}this.setMode=W,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=E}function BU(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function K(Z,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(Z/3);break;case J.LINES:$.lines+=Y*(Z/2);break;case J.LINE_STRIP:$.lines+=Y*(Z-1);break;case J.LINE_LOOP:$.lines+=Y*Z;break;case J.POINTS:$.points+=Y*Z;break;default:i0("WebGLInfo: Unknown draw mode:",X);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:K}}function LU(J,Q,$){let K=new WeakMap,W=new wJ;function Z(X,Y,H){let U=X.morphTargetInfluences,E=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,O=E!==void 0?E.length:0,q=K.get(Y);if(q===void 0||q.count!==O){let L=function(){C.dispose(),K.delete(Y),Y.removeEventListener("dispose",L)};if(q!==void 0)q.texture.dispose();let R=Y.morphAttributes.position!==void 0,M=Y.morphAttributes.normal!==void 0,z=Y.morphAttributes.color!==void 0,D=Y.morphAttributes.position||[],G=Y.morphAttributes.normal||[],S=Y.morphAttributes.color||[],I=0;if(R===!0)I=1;if(M===!0)I=2;if(z===!0)I=3;let V=Y.attributes.position.count*I,w=1;if(V>Q.maxTextureSize)w=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let _=new Float32Array(V*w*4*O),C=new n6(_,V,w,O);C.type=e8,C.needsUpdate=!0;let k=I*4;for(let r=0;r<O;r++){let j=D[r],c=G[r],$0=S[r],s=V*w*4*r;for(let J0=0;J0<j.count;J0++){let K0=J0*k;if(R===!0)W.fromBufferAttribute(j,J0),_[s+K0+0]=W.x,_[s+K0+1]=W.y,_[s+K0+2]=W.z,_[s+K0+3]=0;if(M===!0)W.fromBufferAttribute(c,J0),_[s+K0+4]=W.x,_[s+K0+5]=W.y,_[s+K0+6]=W.z,_[s+K0+7]=0;if(z===!0)W.fromBufferAttribute($0,J0),_[s+K0+8]=W.x,_[s+K0+9]=W.y,_[s+K0+10]=W.z,_[s+K0+11]=$0.itemSize===4?W.w:1}}q={count:O,texture:C,size:new n0(V,w)},K.set(Y,q),Y.addEventListener("dispose",L)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let R=0;for(let z=0;z<U.length;z++)R+=U[z];let M=Y.morphTargetsRelative?1:1-R;H.getUniforms().setValue(J,"morphTargetBaseInfluence",M),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:Z}}function zU(J,Q,$,K,W){let Z=new WeakMap;function X(U){let E=W.render.frame,O=U.geometry,q=Q.get(U,O);if(Z.get(q)!==E)Q.update(q),Z.set(q,E);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(Z.get(U)!==E){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);Z.set(U,E)}}if(U.isSkinnedMesh){let R=U.skeleton;if(Z.get(R)!==E)R.update(),Z.set(R,E)}return q}function Y(){Z=new WeakMap}function H(U){let E=U.target;if(E.removeEventListener("dispose",H),K.releaseStatesOfObject(E),$.remove(E.instanceMatrix),E.instanceColor!==null)$.remove(E.instanceColor)}return{update:X,dispose:Y}}var IU={[oQ]:"LINEAR_TONE_MAPPING",[aQ]:"REINHARD_TONE_MAPPING",[rQ]:"CINEON_TONE_MAPPING",[m7]:"ACES_FILMIC_TONE_MAPPING",[eQ]:"AGX_TONE_MAPPING",[J$]:"NEUTRAL_TONE_MAPPING",[tQ]:"CUSTOM_TONE_MAPPING"};function AU(J,Q,$,K,W,Z){let X=new V8(Q,$,{type:J,depthBuffer:W,stencilBuffer:Z,samples:K?4:0,depthTexture:W?new M9(Q,$):void 0}),Y=new V8(Q,$,{type:J9,depthBuffer:!1,stencilBuffer:!1}),H=new vJ;H.setAttribute("position",new VJ([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new VJ([0,2,0,0,2,0],2));let U=new r$({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),E=new U0(H,U),O=new r7(-1,1,1,-1,0,1),q=null,R=null,M=!1,z,D=null,G=[],S=!1;this.setSize=function(I,V){X.setSize(I,V),Y.setSize(I,V);for(let w=0;w<G.length;w++){let _=G[w];if(_.setSize)_.setSize(I,V)}},this.setEffects=function(I){G=I,S=G.length>0&&G[0].isRenderPass===!0;let{width:V,height:w}=X;for(let _=0;_<G.length;_++){let C=G[_];if(C.setSize)C.setSize(V,w)}},this.begin=function(I,V){if(M)return!1;if(I.toneMapping===C8&&G.length===0)return!1;if(D=V,V!==null){let{width:w,height:_}=V;if(X.width!==w||X.height!==_)this.setSize(w,_)}if(S===!1)I.setRenderTarget(X);return z=I.toneMapping,I.toneMapping=C8,!0},this.hasRenderPass=function(){return S},this.end=function(I,V){I.toneMapping=z,M=!0;let w=X,_=Y;for(let C=0;C<G.length;C++){let k=G[C];if(k.enabled===!1)continue;if(k.render(I,_,w,V),k.needsSwap!==!1){let L=w;w=_,_=L}}if(q!==I.outputColorSpace||R!==I.toneMapping){if(q=I.outputColorSpace,R=I.toneMapping,U.defines={},UJ.getTransfer(q)===MJ)U.defines.SRGB_TRANSFER="";let C=IU[R];if(C)U.defines[C]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=w.texture,I.setRenderTarget(D),I.render(E,O),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),H.dispose(),U.dispose()}}var fZ=new cJ,zK=new M9(1,1),xZ=new n6,gZ=new s$,pZ=new r6,kZ=[],MZ=[],VZ=new Float32Array(16),BZ=new Float32Array(9),LZ=new Float32Array(4);function P7(J,Q,$){let K=J[0];if(K<=0||K>0)return J;let W=Q*$,Z=kZ[W];if(Z===void 0)Z=new Float32Array(W),kZ[W]=Z;if(Q!==0){K.toArray(Z,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(Z,Y)}return Z}function gJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,K=J.length;$<K;$++)if(J[$]!==Q[$])return!1;return!0}function pJ(J,Q){for(let $=0,K=Q.length;$<K;$++)J[$]=Q[$]}function HQ(J,Q){let $=MZ[Q];if($===void 0)$=new Int32Array(Q),MZ[Q]=$;for(let K=0;K!==Q;++K)$[K]=J.allocateTextureUnit();return $}function PU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function wU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(gJ($,Q))return;J.uniform2fv(this.addr,Q),pJ($,Q)}}function _U(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(gJ($,Q))return;J.uniform3fv(this.addr,Q),pJ($,Q)}}function CU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(gJ($,Q))return;J.uniform4fv(this.addr,Q),pJ($,Q)}}function TU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(gJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),pJ($,Q)}else{if(gJ($,K))return;LZ.set(K),J.uniformMatrix2fv(this.addr,!1,LZ),pJ($,K)}}function SU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(gJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),pJ($,Q)}else{if(gJ($,K))return;BZ.set(K),J.uniformMatrix3fv(this.addr,!1,BZ),pJ($,K)}}function jU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(gJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),pJ($,Q)}else{if(gJ($,K))return;VZ.set(K),J.uniformMatrix4fv(this.addr,!1,VZ),pJ($,K)}}function yU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function hU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(gJ($,Q))return;J.uniform2iv(this.addr,Q),pJ($,Q)}}function vU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(gJ($,Q))return;J.uniform3iv(this.addr,Q),pJ($,Q)}}function bU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(gJ($,Q))return;J.uniform4iv(this.addr,Q),pJ($,Q)}}function fU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function xU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(gJ($,Q))return;J.uniform2uiv(this.addr,Q),pJ($,Q)}}function gU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(gJ($,Q))return;J.uniform3uiv(this.addr,Q),pJ($,Q)}}function pU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(gJ($,Q))return;J.uniform4uiv(this.addr,Q),pJ($,Q)}}function mU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;let Z;if(this.type===J.SAMPLER_2D_SHADOW)zK.compareFunction=$.isReversedDepthBuffer()?c6:l6,Z=zK;else Z=fZ;$.setTexture2D(Q||Z,W)}function dU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTexture3D(Q||gZ,W)}function uU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTextureCube(Q||pZ,W)}function lU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTexture2DArray(Q||xZ,W)}function cU(J){switch(J){case 5126:return PU;case 35664:return wU;case 35665:return _U;case 35666:return CU;case 35674:return TU;case 35675:return SU;case 35676:return jU;case 5124:case 35670:return yU;case 35667:case 35671:return hU;case 35668:case 35672:return vU;case 35669:case 35673:return bU;case 5125:return fU;case 36294:return xU;case 36295:return gU;case 36296:return pU;case 35678:case 36198:case 36298:case 36306:case 35682:return mU;case 35679:case 36299:case 36307:return dU;case 35680:case 36300:case 36308:case 36293:return uU;case 36289:case 36303:case 36311:case 36292:return lU}}function nU(J,Q){J.uniform1fv(this.addr,Q)}function sU(J,Q){let $=P7(Q,this.size,2);J.uniform2fv(this.addr,$)}function iU(J,Q){let $=P7(Q,this.size,3);J.uniform3fv(this.addr,$)}function oU(J,Q){let $=P7(Q,this.size,4);J.uniform4fv(this.addr,$)}function aU(J,Q){let $=P7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function rU(J,Q){let $=P7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function tU(J,Q){let $=P7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function eU(J,Q){J.uniform1iv(this.addr,Q)}function Jq(J,Q){J.uniform2iv(this.addr,Q)}function Qq(J,Q){J.uniform3iv(this.addr,Q)}function $q(J,Q){J.uniform4iv(this.addr,Q)}function Kq(J,Q){J.uniform1uiv(this.addr,Q)}function Wq(J,Q){J.uniform2uiv(this.addr,Q)}function Zq(J,Q){J.uniform3uiv(this.addr,Q)}function Xq(J,Q){J.uniform4uiv(this.addr,Q)}function Yq(J,Q,$){let K=this.cache,W=Q.length,Z=HQ($,W);if(!gJ(K,Z))J.uniform1iv(this.addr,Z),pJ(K,Z);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=zK;else X=fZ;for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||X,Z[Y])}function Hq(J,Q,$){let K=this.cache,W=Q.length,Z=HQ($,W);if(!gJ(K,Z))J.uniform1iv(this.addr,Z),pJ(K,Z);for(let X=0;X!==W;++X)$.setTexture3D(Q[X]||gZ,Z[X])}function Uq(J,Q,$){let K=this.cache,W=Q.length,Z=HQ($,W);if(!gJ(K,Z))J.uniform1iv(this.addr,Z),pJ(K,Z);for(let X=0;X!==W;++X)$.setTextureCube(Q[X]||pZ,Z[X])}function qq(J,Q,$){let K=this.cache,W=Q.length,Z=HQ($,W);if(!gJ(K,Z))J.uniform1iv(this.addr,Z),pJ(K,Z);for(let X=0;X!==W;++X)$.setTexture2DArray(Q[X]||xZ,Z[X])}function Gq(J){switch(J){case 5126:return nU;case 35664:return sU;case 35665:return iU;case 35666:return oU;case 35674:return aU;case 35675:return rU;case 35676:return tU;case 5124:case 35670:return eU;case 35667:case 35671:return Jq;case 35668:case 35672:return Qq;case 35669:case 35673:return $q;case 5125:return Kq;case 36294:return Wq;case 36295:return Zq;case 36296:return Xq;case 35678:case 36198:case 36298:case 36306:case 35682:return Yq;case 35679:case 36299:case 36307:return Hq;case 35680:case 36300:case 36308:case 36293:return Uq;case 36289:case 36303:case 36311:case 36292:return qq}}class mZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=cU(Q.type)}}class dZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=Gq(Q.type)}}class uZ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let K=this.seq;for(let W=0,Z=K.length;W!==Z;++W){let X=K[W];X.setValue(J,Q[X.id],$)}}}var VK=/(\w+)(\])?(\[|\.)?/g;function zZ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Nq(J,Q,$){let K=J.name,W=K.length;VK.lastIndex=0;while(!0){let Z=VK.exec(K),X=VK.lastIndex,Y=Z[1],H=Z[2]==="]",U=Z[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===W){zZ($,U===void 0?new mZ(Y,J,Q):new dZ(Y,J,Q));break}else{let O=$.map[Y];if(O===void 0)O=new uZ(Y),zZ($,O);$=O}}}class $6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let X=J.getActiveUniform(Q,Z),Y=J.getUniformLocation(Q,X.name);Nq(X,Y,this)}let K=[],W=[];for(let Z of this.seq)if(Z.type===J.SAMPLER_2D_SHADOW||Z.type===J.SAMPLER_CUBE_SHADOW||Z.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(Z);else W.push(Z);if(K.length>0)this.seq=K.concat(W)}setValue(J,Q,$,K){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,K)}setOptional(J,Q,$){let K=Q[$];if(K!==void 0)this.setValue(J,$,K)}static upload(J,Q,$,K){for(let W=0,Z=Q.length;W!==Z;++W){let X=Q[W],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let $=[];for(let K=0,W=J.length;K!==W;++K){let Z=J[K];if(Z.id in Q)$.push(Z)}return $}}function IZ(J,Q,$){let K=J.createShader(Q);return J.shaderSource(K,$),J.compileShader(K),K}var Fq=37297,Oq=0;function Dq(J,Q){let $=J.split(`
`),K=[],W=Math.max(Q-6,0),Z=Math.min(Q+6,$.length);for(let X=W;X<Z;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return K.join(`
`)}var AZ=new r0;function Eq(J){UJ._getMatrix(AZ,UJ.workingColorSpace,J);let Q=`mat3( ${AZ.elements.map(($)=>$.toFixed(4))} )`;switch(UJ.getTransfer(J)){case g$:return[Q,"LinearTransferOETF"];case MJ:return[Q,"sRGBTransferOETF"];default:return s0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function PZ(J,Q,$){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),Z=(J.getShaderInfoLog(Q)||"").trim();if(K&&Z==="")return"";let X=/ERROR: 0:(\d+)/.exec(Z);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+Z+`

`+Dq(J.getShaderSource(Q),Y)}else return Z}function Rq(J,Q){let $=Eq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var kq={[oQ]:"Linear",[aQ]:"Reinhard",[rQ]:"Cineon",[m7]:"ACESFilmic",[eQ]:"AgX",[J$]:"Neutral",[tQ]:"Custom"};function Mq(J,Q){let $=kq[Q];if($===void 0)return s0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var XQ=new m;function Vq(){UJ.getLuminanceCoefficients(XQ);let J=XQ.x.toFixed(4),Q=XQ.y.toFixed(4),$=XQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Bq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Q6).join(`
`)}function Lq(J){let Q=[];for(let $ in J){let K=J[$];if(K===!1)continue;Q.push("#define "+$+" "+K)}return Q.join(`
`)}function zq(J,Q){let $={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<K;W++){let Z=J.getActiveAttrib(Q,W),X=Z.name,Y=1;if(Z.type===J.FLOAT_MAT2)Y=2;if(Z.type===J.FLOAT_MAT3)Y=3;if(Z.type===J.FLOAT_MAT4)Y=4;$[X]={type:Z.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function Q6(J){return J!==""}function wZ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function _Z(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Iq=/^[ \t]*#include +<([\w\d./]+)>/gm;function IK(J){return J.replace(Iq,Pq)}var Aq=new Map;function Pq(J,Q){let $=KJ[Q];if($===void 0){let K=Aq.get(Q);if(K!==void 0)$=KJ[K],s0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,K);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return IK($)}var wq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function CZ(J){return J.replace(wq,_q)}function _q(J,Q,$,K){let W="";for(let Z=parseInt(Q);Z<parseInt($);Z++)W+=K.replace(/\[\s*i\s*\]/g,"[ "+Z+" ]").replace(/UNROLLED_LOOP_INDEX/g,Z);return W}function TZ(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var Cq={[j9]:"SHADOWMAP_TYPE_PCF",[N7]:"SHADOWMAP_TYPE_VSM"};function Tq(J){return Cq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sq={[D7]:"ENVMAP_TYPE_CUBE",[y9]:"ENVMAP_TYPE_CUBE",[d7]:"ENVMAP_TYPE_CUBE_UV"};function jq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Sq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var yq={[y9]:"ENVMAP_MODE_REFRACTION"};function hq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return yq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vq={[fW]:"ENVMAP_BLENDING_MULTIPLY",[xW]:"ENVMAP_BLENDING_MIX",[gW]:"ENVMAP_BLENDING_ADD"};function bq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return vq[J.combine]||"ENVMAP_BLENDING_NONE"}function fq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,K=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:K,maxMip:$}}function xq(J,Q,$,K){let W=J.getContext(),Z=$.defines,X=$.vertexShader,Y=$.fragmentShader,H=Tq($),U=jq($),E=hq($),O=bq($),q=fq($),R=Bq($),M=Lq(Z),z=W.createProgram(),D,G,S=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(Q6).join(`
`),D.length>0)D+=`
`;if(G=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(Q6).join(`
`),G.length>0)G+=`
`}else D=[TZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+E:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Q6).join(`
`),G=[TZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+E:"",$.envMap?"#define "+O:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==C8?"#define TONE_MAPPING":"",$.toneMapping!==C8?KJ.tonemapping_pars_fragment:"",$.toneMapping!==C8?Mq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",KJ.colorspace_pars_fragment,Rq("linearToOutputTexel",$.outputColorSpace),Vq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(Q6).join(`
`);if(X=IK(X),X=wZ(X,$),X=_Z(X,$),Y=IK(Y),Y=wZ(Y,$),Y=_Z(Y,$),X=CZ(X),Y=CZ(Y),$.isRawShaderMaterial!==!0)S=`#version 300 es
`,D=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D,G=["#define varying in",$.glslVersion===p$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===p$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+G;let I=S+D+X,V=S+G+Y,w=IZ(W,W.VERTEX_SHADER,I),_=IZ(W,W.FRAGMENT_SHADER,V);if(W.attachShader(z,w),W.attachShader(z,_),$.index0AttributeName!==void 0)W.bindAttribLocation(z,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(z,0,"position");W.linkProgram(z);function C(j){if(J.debug.checkShaderErrors){let c=W.getProgramInfoLog(z)||"",$0=W.getShaderInfoLog(w)||"",s=W.getShaderInfoLog(_)||"",J0=c.trim(),K0=$0.trim(),l=s.trim(),n=!0,d=!0;if(W.getProgramParameter(z,W.LINK_STATUS)===!1)if(n=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,z,w,_);else{let H0=PZ(W,w,"vertex"),D0=PZ(W,_,"fragment");i0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(z,W.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+J0+`
`+H0+`
`+D0)}else if(J0!=="")s0("WebGLProgram: Program Info Log:",J0);else if(K0===""||l==="")d=!1;if(d)j.diagnostics={runnable:n,programLog:J0,vertexShader:{log:K0,prefix:D},fragmentShader:{log:l,prefix:G}}}W.deleteShader(w),W.deleteShader(_),k=new $6(W,z),L=zq(W,z)}let k;this.getUniforms=function(){if(k===void 0)C(this);return k};let L;this.getAttributes=function(){if(L===void 0)C(this);return L};let r=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(r===!1)r=W.getProgramParameter(z,Fq);return r},this.destroy=function(){K.releaseStatesOfProgram(this),W.deleteProgram(z),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=Oq++,this.cacheKey=Q,this.usedTimes=1,this.program=z,this.vertexShader=w,this.fragmentShader=_,this}var gq=0;class lZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has($)===!1)K.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new cZ(J),Q.set(J,$);return $}}class cZ{constructor(J){this.id=gq++,this.code=J,this.usedTimes=0}}function pq(J){return J===f9||J===d6||J===u6}function mq(J,Q,$,K,W,Z){let X=new s6,Y=new lZ,H=new Set,U=[],E=new Map,O=K.logarithmicDepthBuffer,q=K.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(k){if(H.add(k),k===0)return"uv";return`uv${k}`}function z(k,L,r,j,c,$0){let s=j.fog,J0=c.geometry,K0=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?j.environment:null,l=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,n=Q.get(k.envMap||K0,l),d=!!n&&n.mapping===d7?n.image.height:null,H0=R[k.type];if(k.precision!==null){if(q=K.getMaxPrecision(k.precision),q!==k.precision)s0("WebGLProgram.getParameters:",k.precision,"not supported, using",q,"instead.")}let D0=J0.morphAttributes.position||J0.morphAttributes.normal||J0.morphAttributes.color,F0=D0!==void 0?D0.length:0,e=0;if(J0.morphAttributes.position!==void 0)e=1;if(J0.morphAttributes.normal!==void 0)e=2;if(J0.morphAttributes.color!==void 0)e=3;let a,y,A,x;if(H0){let d0=d8[H0];a=d0.vertexShader,y=d0.fragmentShader}else{a=k.vertexShader,y=k.fragmentShader;let d0=Y.getVertexShaderStage(k),AJ=Y.getFragmentShaderStage(k);Y.update(k,d0,AJ),A=d0.id,x=AJ.id}let p=J.getRenderTarget(),u=J.state.buffers.depth.getReversed(),T=c.isInstancedMesh===!0,N0=c.isBatchedMesh===!0,C0=!!k.map,b0=!!k.matcap,T0=!!n,x0=!!k.aoMap,XJ=!!k.lightMap,l0=!!k.bumpMap&&k.wireframe===!1,QJ=!!k.normalMap,e0=!!k.displacementMap,NJ=!!k.emissiveMap,GJ=!!k.metalnessMap,v=!!k.roughnessMap,SJ=k.anisotropy>0,JJ=k.clearcoat>0,h=k.dispersion>0,F=k.iridescence>0,N=k.sheen>0,P=k.transmission>0,f=SJ&&!!k.anisotropyMap,X0=JJ&&!!k.clearcoatMap,G0=JJ&&!!k.clearcoatNormalMap,R0=JJ&&!!k.clearcoatRoughnessMap,Q0=F&&!!k.iridescenceMap,W0=F&&!!k.iridescenceThicknessMap,E0=N&&!!k.sheenColorMap,y0=N&&!!k.sheenRoughnessMap,M0=!!k.specularMap,O0=!!k.specularColorMap,m0=!!k.specularIntensityMap,h0=P&&!!k.transmissionMap,YJ=P&&!!k.thicknessMap,b=!!k.gradientMap,k0=!!k.alphaMap,Z0=k.alphaTest>0,V0=!!k.alphaHash,A0=!!k.extensions,Y0=C8;if(k.toneMapped){if(p===null||p.isXRRenderTarget===!0)Y0=J.toneMapping}let L0={shaderID:H0,shaderType:k.type,shaderName:k.name,vertexShader:a,fragmentShader:y,defines:k.defines,customVertexShaderID:A,customFragmentShaderID:x,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:q,batching:N0,batchingColor:N0&&c._colorsTexture!==null,instancing:T,instancingColor:T&&c.instanceColor!==null,instancingMorph:T&&c.morphTexture!==null,outputColorSpace:p===null?J.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:UJ.workingColorSpace,alphaToCoverage:!!k.alphaToCoverage,map:C0,matcap:b0,envMap:T0,envMapMode:T0&&n.mapping,envMapCubeUVHeight:d,aoMap:x0,lightMap:XJ,bumpMap:l0,normalMap:QJ,displacementMap:e0,emissiveMap:NJ,normalMapObjectSpace:QJ&&k.normalMapType===oW,normalMapTangentSpace:QJ&&k.normalMapType===f$,packedNormalMap:QJ&&k.normalMapType===f$&&pq(k.normalMap.format),metalnessMap:GJ,roughnessMap:v,anisotropy:SJ,anisotropyMap:f,clearcoat:JJ,clearcoatMap:X0,clearcoatNormalMap:G0,clearcoatRoughnessMap:R0,dispersion:h,iridescence:F,iridescenceMap:Q0,iridescenceThicknessMap:W0,sheen:N,sheenColorMap:E0,sheenRoughnessMap:y0,specularMap:M0,specularColorMap:O0,specularIntensityMap:m0,transmission:P,transmissionMap:h0,thicknessMap:YJ,gradientMap:b,opaque:k.transparent===!1&&k.blending===p7&&k.alphaToCoverage===!1,alphaMap:k0,alphaTest:Z0,alphaHash:V0,combine:k.combine,mapUv:C0&&M(k.map.channel),aoMapUv:x0&&M(k.aoMap.channel),lightMapUv:XJ&&M(k.lightMap.channel),bumpMapUv:l0&&M(k.bumpMap.channel),normalMapUv:QJ&&M(k.normalMap.channel),displacementMapUv:e0&&M(k.displacementMap.channel),emissiveMapUv:NJ&&M(k.emissiveMap.channel),metalnessMapUv:GJ&&M(k.metalnessMap.channel),roughnessMapUv:v&&M(k.roughnessMap.channel),anisotropyMapUv:f&&M(k.anisotropyMap.channel),clearcoatMapUv:X0&&M(k.clearcoatMap.channel),clearcoatNormalMapUv:G0&&M(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R0&&M(k.clearcoatRoughnessMap.channel),iridescenceMapUv:Q0&&M(k.iridescenceMap.channel),iridescenceThicknessMapUv:W0&&M(k.iridescenceThicknessMap.channel),sheenColorMapUv:E0&&M(k.sheenColorMap.channel),sheenRoughnessMapUv:y0&&M(k.sheenRoughnessMap.channel),specularMapUv:M0&&M(k.specularMap.channel),specularColorMapUv:O0&&M(k.specularColorMap.channel),specularIntensityMapUv:m0&&M(k.specularIntensityMap.channel),transmissionMapUv:h0&&M(k.transmissionMap.channel),thicknessMapUv:YJ&&M(k.thicknessMap.channel),alphaMapUv:k0&&M(k.alphaMap.channel),vertexTangents:!!J0.attributes.tangent&&(QJ||SJ),vertexNormals:!!J0.attributes.normal,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!J0.attributes.color&&J0.attributes.color.itemSize===4,pointsUvs:c.isPoints===!0&&!!J0.attributes.uv&&(C0||k0),fog:!!s,useFog:k.fog===!0,fogExp2:!!s&&s.isFogExp2,flatShading:k.wireframe===!1&&(k.flatShading===!0||J0.attributes.normal===void 0&&QJ===!1&&(k.isMeshLambertMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isMeshPhysicalMaterial)),sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:O,reversedDepthBuffer:u,skinning:c.isSkinnedMesh===!0,hasPositionAttribute:J0.attributes.position!==void 0,morphTargets:J0.morphAttributes.position!==void 0,morphNormals:J0.morphAttributes.normal!==void 0,morphColors:J0.morphAttributes.color!==void 0,morphTargetsCount:F0,morphTextureStride:e,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:$0.length,numClippingPlanes:Z.numPlanes,numClipIntersection:Z.numIntersection,dithering:k.dithering,shadowMapEnabled:J.shadowMap.enabled&&r.length>0,shadowMapType:J.shadowMap.type,toneMapping:Y0,decodeVideoTexture:C0&&k.map.isVideoTexture===!0&&UJ.getTransfer(k.map.colorSpace)===MJ,decodeVideoTextureEmissive:NJ&&k.emissiveMap.isVideoTexture===!0&&UJ.getTransfer(k.emissiveMap.colorSpace)===MJ,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===BJ,flipSided:k.side===aJ,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:A0&&k.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(A0&&k.extensions.multiDraw===!0||N0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return L0.vertexUv1s=H.has(1),L0.vertexUv2s=H.has(2),L0.vertexUv3s=H.has(3),H.clear(),L0}function D(k){let L=[];if(k.shaderID)L.push(k.shaderID);else L.push(k.customVertexShaderID),L.push(k.customFragmentShaderID);if(k.defines!==void 0)for(let r in k.defines)L.push(r),L.push(k.defines[r]);if(k.isRawShaderMaterial===!1)G(L,k),S(L,k),L.push(J.outputColorSpace);return L.push(k.customProgramCacheKey),L.join()}function G(k,L){k.push(L.precision),k.push(L.outputColorSpace),k.push(L.envMapMode),k.push(L.envMapCubeUVHeight),k.push(L.mapUv),k.push(L.alphaMapUv),k.push(L.lightMapUv),k.push(L.aoMapUv),k.push(L.bumpMapUv),k.push(L.normalMapUv),k.push(L.displacementMapUv),k.push(L.emissiveMapUv),k.push(L.metalnessMapUv),k.push(L.roughnessMapUv),k.push(L.anisotropyMapUv),k.push(L.clearcoatMapUv),k.push(L.clearcoatNormalMapUv),k.push(L.clearcoatRoughnessMapUv),k.push(L.iridescenceMapUv),k.push(L.iridescenceThicknessMapUv),k.push(L.sheenColorMapUv),k.push(L.sheenRoughnessMapUv),k.push(L.specularMapUv),k.push(L.specularColorMapUv),k.push(L.specularIntensityMapUv),k.push(L.transmissionMapUv),k.push(L.thicknessMapUv),k.push(L.combine),k.push(L.fogExp2),k.push(L.sizeAttenuation),k.push(L.morphTargetsCount),k.push(L.morphAttributeCount),k.push(L.numDirLights),k.push(L.numPointLights),k.push(L.numSpotLights),k.push(L.numSpotLightMaps),k.push(L.numHemiLights),k.push(L.numRectAreaLights),k.push(L.numDirLightShadows),k.push(L.numPointLightShadows),k.push(L.numSpotLightShadows),k.push(L.numSpotLightShadowsWithMaps),k.push(L.numLightProbes),k.push(L.shadowMapType),k.push(L.toneMapping),k.push(L.numClippingPlanes),k.push(L.numClipIntersection),k.push(L.depthPacking)}function S(k,L){if(X.disableAll(),L.instancing)X.enable(0);if(L.instancingColor)X.enable(1);if(L.instancingMorph)X.enable(2);if(L.matcap)X.enable(3);if(L.envMap)X.enable(4);if(L.normalMapObjectSpace)X.enable(5);if(L.normalMapTangentSpace)X.enable(6);if(L.clearcoat)X.enable(7);if(L.iridescence)X.enable(8);if(L.alphaTest)X.enable(9);if(L.vertexColors)X.enable(10);if(L.vertexAlphas)X.enable(11);if(L.vertexUv1s)X.enable(12);if(L.vertexUv2s)X.enable(13);if(L.vertexUv3s)X.enable(14);if(L.vertexTangents)X.enable(15);if(L.anisotropy)X.enable(16);if(L.alphaHash)X.enable(17);if(L.batching)X.enable(18);if(L.dispersion)X.enable(19);if(L.batchingColor)X.enable(20);if(L.gradientMap)X.enable(21);if(L.packedNormalMap)X.enable(22);if(L.vertexNormals)X.enable(23);if(k.push(X.mask),X.disableAll(),L.fog)X.enable(0);if(L.useFog)X.enable(1);if(L.flatShading)X.enable(2);if(L.logarithmicDepthBuffer)X.enable(3);if(L.reversedDepthBuffer)X.enable(4);if(L.skinning)X.enable(5);if(L.morphTargets)X.enable(6);if(L.morphNormals)X.enable(7);if(L.morphColors)X.enable(8);if(L.premultipliedAlpha)X.enable(9);if(L.shadowMapEnabled)X.enable(10);if(L.doubleSided)X.enable(11);if(L.flipSided)X.enable(12);if(L.useDepthPacking)X.enable(13);if(L.dithering)X.enable(14);if(L.transmission)X.enable(15);if(L.sheen)X.enable(16);if(L.opaque)X.enable(17);if(L.pointsUvs)X.enable(18);if(L.decodeVideoTexture)X.enable(19);if(L.decodeVideoTextureEmissive)X.enable(20);if(L.alphaToCoverage)X.enable(21);if(L.numLightProbeGrids>0)X.enable(22);if(L.hasPositionAttribute)X.enable(23);k.push(X.mask)}function I(k){let L=R[k.type],r;if(L){let j=d8[L];r=YZ.clone(j.uniforms)}else r=k.uniforms;return r}function V(k,L){let r=E.get(L);if(r!==void 0)++r.usedTimes;else r=new xq(J,L,k,W),U.push(r),E.set(L,r);return r}function w(k){if(--k.usedTimes===0){let L=U.indexOf(k);U[L]=U[U.length-1],U.pop(),E.delete(k.cacheKey),k.destroy()}}function _(k){Y.remove(k)}function C(){Y.dispose()}return{getParameters:z,getProgramCacheKey:D,getUniforms:I,acquireProgram:V,releaseProgram:w,releaseShaderCache:_,programs:U,dispose:C}}function dq(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function W(X,Y,H){J.get(X)[Y]=H}function Z(){J=new WeakMap}return{has:Q,get:$,remove:K,update:W,dispose:Z}}function uq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function SZ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function jZ(){let J=[],Q=0,$=[],K=[],W=[];function Z(){Q=0,$.length=0,K.length=0,W.length=0}function X(q){let R=0;if(q.isInstancedMesh)R+=2;if(q.isSkinnedMesh)R+=1;return R}function Y(q,R,M,z,D,G){let S=J[Q];if(S===void 0)S={id:q.id,object:q,geometry:R,material:M,materialVariant:X(q),groupOrder:z,renderOrder:q.renderOrder,z:D,group:G},J[Q]=S;else S.id=q.id,S.object=q,S.geometry=R,S.material=M,S.materialVariant=X(q),S.groupOrder=z,S.renderOrder=q.renderOrder,S.z=D,S.group=G;return Q++,S}function H(q,R,M,z,D,G){let S=Y(q,R,M,z,D,G);if(M.transmission>0)K.push(S);else if(M.transparent===!0)W.push(S);else $.push(S)}function U(q,R,M,z,D,G){let S=Y(q,R,M,z,D,G);if(M.transmission>0)K.unshift(S);else if(M.transparent===!0)W.unshift(S);else $.unshift(S)}function E(q,R,M){if($.length>1)$.sort(q||uq);if(K.length>1)K.sort(R||SZ);if(W.length>1)W.sort(R||SZ);if(M)$.reverse(),K.reverse(),W.reverse()}function O(){for(let q=Q,R=J.length;q<R;q++){let M=J[q];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:$,transmissive:K,transparent:W,init:Z,push:H,unshift:U,finish:O,sort:E}}function lq(){let J=new WeakMap;function Q(K,W){let Z=J.get(K),X;if(Z===void 0)X=new jZ,J.set(K,[X]);else if(W>=Z.length)X=new jZ,Z.push(X);else X=Z[W];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function cq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new m,color:new a0};break;case"SpotLight":$={position:new m,direction:new m,color:new a0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new m,color:new a0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new m,skyColor:new a0,groundColor:new a0};break;case"RectAreaLight":$={color:new a0,position:new m,halfWidth:new m,halfHeight:new m};break}return J[Q.id]=$,$}}}function nq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var sq=0;function iq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function oq(J){let Q=new cq,$=nq(),K={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)K.probe.push(new m);let W=new m,Z=new zJ,X=new zJ;function Y(U){let E=0,O=0,q=0;for(let L=0;L<9;L++)K.probe[L].set(0,0,0);let R=0,M=0,z=0,D=0,G=0,S=0,I=0,V=0,w=0,_=0,C=0;U.sort(iq);for(let L=0,r=U.length;L<r;L++){let j=U[L],c=j.color,$0=j.intensity,s=j.distance,J0=null;if(j.shadow&&j.shadow.map)if(j.shadow.map.texture.format===f9)J0=j.shadow.map.texture;else J0=j.shadow.map.depthTexture||j.shadow.map.texture;if(j.isAmbientLight)E+=c.r*$0,O+=c.g*$0,q+=c.b*$0;else if(j.isLightProbe){for(let K0=0;K0<9;K0++)K.probe[K0].addScaledVector(j.sh.coefficients[K0],$0);C++}else if(j.isDirectionalLight){let K0=Q.get(j);if(K0.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let l=j.shadow,n=$.get(j);n.shadowIntensity=l.intensity,n.shadowBias=l.bias,n.shadowNormalBias=l.normalBias,n.shadowRadius=l.radius,n.shadowMapSize=l.mapSize,K.directionalShadow[R]=n,K.directionalShadowMap[R]=J0,K.directionalShadowMatrix[R]=j.shadow.matrix,S++}K.directional[R]=K0,R++}else if(j.isSpotLight){let K0=Q.get(j);K0.position.setFromMatrixPosition(j.matrixWorld),K0.color.copy(c).multiplyScalar($0),K0.distance=s,K0.coneCos=Math.cos(j.angle),K0.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),K0.decay=j.decay,K.spot[z]=K0;let l=j.shadow;if(j.map){if(K.spotLightMap[w]=j.map,w++,l.updateMatrices(j),j.castShadow)_++}if(K.spotLightMatrix[z]=l.matrix,j.castShadow){let n=$.get(j);n.shadowIntensity=l.intensity,n.shadowBias=l.bias,n.shadowNormalBias=l.normalBias,n.shadowRadius=l.radius,n.shadowMapSize=l.mapSize,K.spotShadow[z]=n,K.spotShadowMap[z]=J0,V++}z++}else if(j.isRectAreaLight){let K0=Q.get(j);K0.color.copy(c).multiplyScalar($0),K0.halfWidth.set(j.width*0.5,0,0),K0.halfHeight.set(0,j.height*0.5,0),K.rectArea[D]=K0,D++}else if(j.isPointLight){let K0=Q.get(j);if(K0.color.copy(j.color).multiplyScalar(j.intensity),K0.distance=j.distance,K0.decay=j.decay,j.castShadow){let l=j.shadow,n=$.get(j);n.shadowIntensity=l.intensity,n.shadowBias=l.bias,n.shadowNormalBias=l.normalBias,n.shadowRadius=l.radius,n.shadowMapSize=l.mapSize,n.shadowCameraNear=l.camera.near,n.shadowCameraFar=l.camera.far,K.pointShadow[M]=n,K.pointShadowMap[M]=J0,K.pointShadowMatrix[M]=j.shadow.matrix,I++}K.point[M]=K0,M++}else if(j.isHemisphereLight){let K0=Q.get(j);K0.skyColor.copy(j.color).multiplyScalar($0),K0.groundColor.copy(j.groundColor).multiplyScalar($0),K.hemi[G]=K0,G++}}if(D>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=w0.LTC_FLOAT_1,K.rectAreaLTC2=w0.LTC_FLOAT_2;else K.rectAreaLTC1=w0.LTC_HALF_1,K.rectAreaLTC2=w0.LTC_HALF_2;K.ambient[0]=E,K.ambient[1]=O,K.ambient[2]=q;let k=K.hash;if(k.directionalLength!==R||k.pointLength!==M||k.spotLength!==z||k.rectAreaLength!==D||k.hemiLength!==G||k.numDirectionalShadows!==S||k.numPointShadows!==I||k.numSpotShadows!==V||k.numSpotMaps!==w||k.numLightProbes!==C)K.directional.length=R,K.spot.length=z,K.rectArea.length=D,K.point.length=M,K.hemi.length=G,K.directionalShadow.length=S,K.directionalShadowMap.length=S,K.pointShadow.length=I,K.pointShadowMap.length=I,K.spotShadow.length=V,K.spotShadowMap.length=V,K.directionalShadowMatrix.length=S,K.pointShadowMatrix.length=I,K.spotLightMatrix.length=V+w-_,K.spotLightMap.length=w,K.numSpotLightShadowsWithMaps=_,K.numLightProbes=C,k.directionalLength=R,k.pointLength=M,k.spotLength=z,k.rectAreaLength=D,k.hemiLength=G,k.numDirectionalShadows=S,k.numPointShadows=I,k.numSpotShadows=V,k.numSpotMaps=w,k.numLightProbes=C,K.version=sq++}function H(U,E){let O=0,q=0,R=0,M=0,z=0,D=E.matrixWorldInverse;for(let G=0,S=U.length;G<S;G++){let I=U[G];if(I.isDirectionalLight){let V=K.directional[O];V.direction.setFromMatrixPosition(I.matrixWorld),W.setFromMatrixPosition(I.target.matrixWorld),V.direction.sub(W),V.direction.transformDirection(D),O++}else if(I.isSpotLight){let V=K.spot[R];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(D),V.direction.setFromMatrixPosition(I.matrixWorld),W.setFromMatrixPosition(I.target.matrixWorld),V.direction.sub(W),V.direction.transformDirection(D),R++}else if(I.isRectAreaLight){let V=K.rectArea[M];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(D),X.identity(),Z.copy(I.matrixWorld),Z.premultiply(D),X.extractRotation(Z),V.halfWidth.set(I.width*0.5,0,0),V.halfHeight.set(0,I.height*0.5,0),V.halfWidth.applyMatrix4(X),V.halfHeight.applyMatrix4(X),M++}else if(I.isPointLight){let V=K.point[q];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(D),q++}else if(I.isHemisphereLight){let V=K.hemi[z];V.direction.setFromMatrixPosition(I.matrixWorld),V.direction.transformDirection(D),z++}}}return{setup:Y,setupView:H,state:K}}function yZ(J){let Q=new oq(J),$=[],K=[],W=[];function Z(q){O.camera=q,$.length=0,K.length=0,W.length=0}function X(q){$.push(q)}function Y(q){K.push(q)}function H(q){W.push(q)}function U(){Q.setup($)}function E(q){Q.setupView($,q)}let O={lightsArray:$,shadowsArray:K,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:Z,state:O,setupLights:U,setupLightsView:E,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function aq(J){let Q=new WeakMap;function $(W,Z=0){let X=Q.get(W),Y;if(X===void 0)Y=new yZ(J),Q.set(W,[Y]);else if(Z>=X.length)Y=new yZ(J),X.push(Y);else Y=X[Z];return Y}function K(){Q=new WeakMap}return{get:$,dispose:K}}var rq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tq=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,eq=[new m(1,0,0),new m(-1,0,0),new m(0,1,0),new m(0,-1,0),new m(0,0,1),new m(0,0,-1)],JG=[new m(0,-1,0),new m(0,-1,0),new m(0,0,1),new m(0,0,-1),new m(0,-1,0),new m(0,-1,0)],hZ=new zJ,J6=new m,BK=new m;function QG(J,Q,$){let K=new o7,W=new n0,Z=new n0,X=new wJ,Y=new t$,H=new e$,U={},E=$.maxTextureSize,O={[F7]:aJ,[aJ]:F7,[BJ]:BJ},q=new X8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new n0},radius:{value:4}},vertexShader:rq,fragmentShader:tq}),R=q.clone();R.defines.HORIZONTAL_PASS=1;let M=new vJ;M.setAttribute("position",new nJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let z=new U0(M,q),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j9;let G=this.type;this.render=function(_,C,k){if(D.enabled===!1)return;if(D.autoUpdate===!1&&D.needsUpdate===!1)return;if(_.length===0)return;if(this.type===UW)s0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=j9;let L=J.getRenderTarget(),r=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),c=J.state;if(c.setBlending(v8),c.buffers.depth.getReversed()===!0)c.buffers.color.setClear(0,0,0,0);else c.buffers.color.setClear(1,1,1,1);c.buffers.depth.setTest(!0),c.setScissorTest(!1);let $0=G!==this.type;if($0)C.traverse(function(s){if(s.material)if(Array.isArray(s.material))s.material.forEach((J0)=>J0.needsUpdate=!0);else s.material.needsUpdate=!0});for(let s=0,J0=_.length;s<J0;s++){let K0=_[s],l=K0.shadow;if(l===void 0){s0("WebGLShadowMap:",K0,"has no shadow.");continue}if(l.autoUpdate===!1&&l.needsUpdate===!1)continue;W.copy(l.mapSize);let n=l.getFrameExtents();if(W.multiply(n),Z.copy(l.mapSize),W.x>E||W.y>E){if(W.x>E)Z.x=Math.floor(E/n.x),W.x=Z.x*n.x,l.mapSize.x=Z.x;if(W.y>E)Z.y=Math.floor(E/n.y),W.y=Z.y*n.y,l.mapSize.y=Z.y}let d=J.state.buffers.depth.getReversed();if(l.camera._reversedDepth=d,l.map===null||$0===!0){if(l.map!==null){if(l.map.depthTexture!==null)l.map.depthTexture.dispose(),l.map.depthTexture=null;l.map.dispose()}if(this.type===N7){if(K0.isPointLight){s0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}l.map=new V8(W.x,W.y,{format:f9,type:J9,minFilter:Z8,magFilter:Z8,generateMipmaps:!1}),l.map.texture.name=K0.name+".shadowMap",l.map.depthTexture=new M9(W.x,W.y,e8),l.map.depthTexture.name=K0.name+".shadowMapDepth",l.map.depthTexture.format=v9,l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=E9,l.map.depthTexture.magFilter=E9}else{if(K0.isPointLight)l.map=new AK(W.x),l.map.depthTexture=new o$(W.x,R9);else l.map=new V8(W.x,W.y),l.map.depthTexture=new M9(W.x,W.y,R9);if(l.map.depthTexture.name=K0.name+".shadowMap",l.map.depthTexture.format=v9,this.type===j9)l.map.depthTexture.compareFunction=d?c6:l6,l.map.depthTexture.minFilter=Z8,l.map.depthTexture.magFilter=Z8;else l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=E9,l.map.depthTexture.magFilter=E9}l.camera.updateProjectionMatrix()}let H0=l.map.isWebGLCubeRenderTarget?6:1;for(let D0=0;D0<H0;D0++){if(l.map.isWebGLCubeRenderTarget)J.setRenderTarget(l.map,D0),J.clear();else{if(D0===0)J.setRenderTarget(l.map),J.clear();let F0=l.getViewport(D0);X.set(Z.x*F0.x,Z.y*F0.y,Z.x*F0.z,Z.y*F0.w),c.viewport(X)}if(K0.isPointLight){let{camera:F0,matrix:e}=l,a=K0.distance||F0.far;if(a!==F0.far)F0.far=a,F0.updateProjectionMatrix();J6.setFromMatrixPosition(K0.matrixWorld),F0.position.copy(J6),BK.copy(F0.position),BK.add(eq[D0]),F0.up.copy(JG[D0]),F0.lookAt(BK),F0.updateMatrixWorld(),e.makeTranslation(-J6.x,-J6.y,-J6.z),hZ.multiplyMatrices(F0.projectionMatrix,F0.matrixWorldInverse),l._frustum.setFromProjectionMatrix(hZ,F0.coordinateSystem,F0.reversedDepth)}else l.updateMatrices(K0);K=l.getFrustum(),V(C,k,l.camera,K0,this.type)}if(l.isPointLightShadow!==!0&&this.type===N7)S(l,k);l.needsUpdate=!1}G=this.type,D.needsUpdate=!1,J.setRenderTarget(L,r,j)};function S(_,C){let k=Q.update(z);if(q.defines.VSM_SAMPLES!==_.blurSamples)q.defines.VSM_SAMPLES=_.blurSamples,R.defines.VSM_SAMPLES=_.blurSamples,q.needsUpdate=!0,R.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new V8(W.x,W.y,{format:f9,type:J9});q.uniforms.shadow_pass.value=_.map.depthTexture,q.uniforms.resolution.value=_.mapSize,q.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(C,null,k,q,z,null),R.uniforms.shadow_pass.value=_.mapPass.texture,R.uniforms.resolution.value=_.mapSize,R.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(C,null,k,R,z,null)}function I(_,C,k,L){let r=null,j=k.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(j!==void 0)r=j;else if(r=k.isPointLight===!0?H:Y,J.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let c=r.uuid,$0=C.uuid,s=U[c];if(s===void 0)s={},U[c]=s;let J0=s[$0];if(J0===void 0)J0=r.clone(),s[$0]=J0,C.addEventListener("dispose",w);r=J0}if(r.visible=C.visible,r.wireframe=C.wireframe,L===N7)r.side=C.shadowSide!==null?C.shadowSide:C.side;else r.side=C.shadowSide!==null?C.shadowSide:O[C.side];if(r.alphaMap=C.alphaMap,r.alphaTest=C.alphaToCoverage===!0?0.5:C.alphaTest,r.map=C.map,r.clipShadows=C.clipShadows,r.clippingPlanes=C.clippingPlanes,r.clipIntersection=C.clipIntersection,r.displacementMap=C.displacementMap,r.displacementScale=C.displacementScale,r.displacementBias=C.displacementBias,r.wireframeLinewidth=C.wireframeLinewidth,r.linewidth=C.linewidth,k.isPointLight===!0&&r.isMeshDistanceMaterial===!0){let c=J.properties.get(r);c.light=k}return r}function V(_,C,k,L,r){if(_.visible===!1)return;if(_.layers.test(C.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&r===N7)&&(!_.frustumCulled||K.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld);let $0=Q.update(_),s=_.material;if(Array.isArray(s)){let J0=$0.groups;for(let K0=0,l=J0.length;K0<l;K0++){let n=J0[K0],d=s[n.materialIndex];if(d&&d.visible){let H0=I(_,d,L,r);_.onBeforeShadow(J,_,C,k,$0,H0,n),J.renderBufferDirect(k,null,$0,H0,_,n),_.onAfterShadow(J,_,C,k,$0,H0,n)}}}else if(s.visible){let J0=I(_,s,L,r);_.onBeforeShadow(J,_,C,k,$0,J0,null),J.renderBufferDirect(k,null,$0,J0,_,null),_.onAfterShadow(J,_,C,k,$0,J0,null)}}}let c=_.children;for(let $0=0,s=c.length;$0<s;$0++)V(c[$0],C,k,L,r)}function w(_){_.target.removeEventListener("dispose",w);for(let k in U){let L=U[k],r=_.target.uuid;if(r in L)L[r].dispose(),delete L[r]}}}function $G(J,Q){function $(){let b=!1,k0=new wJ,Z0=null,V0=new wJ(0,0,0,0);return{setMask:function(A0){if(Z0!==A0&&!b)J.colorMask(A0,A0,A0,A0),Z0=A0},setLocked:function(A0){b=A0},setClear:function(A0,Y0,L0,d0,AJ){if(AJ===!0)A0*=d0,Y0*=d0,L0*=d0;if(k0.set(A0,Y0,L0,d0),V0.equals(k0)===!1)J.clearColor(A0,Y0,L0,d0),V0.copy(k0)},reset:function(){b=!1,Z0=null,V0.set(-1,0,0,0)}}}function K(){let b=!1,k0=!1,Z0=null,V0=null,A0=null;return{setReversed:function(Y0){if(k0!==Y0){let L0=Q.get("EXT_clip_control");if(Y0)L0.clipControlEXT(L0.LOWER_LEFT_EXT,L0.ZERO_TO_ONE_EXT);else L0.clipControlEXT(L0.LOWER_LEFT_EXT,L0.NEGATIVE_ONE_TO_ONE_EXT);k0=Y0;let d0=A0;A0=null,this.setClear(d0)}},getReversed:function(){return k0},setTest:function(Y0){if(Y0)p(J.DEPTH_TEST);else u(J.DEPTH_TEST)},setMask:function(Y0){if(Z0!==Y0&&!b)J.depthMask(Y0),Z0=Y0},setFunc:function(Y0){if(k0)Y0=ZZ[Y0];if(V0!==Y0){switch(Y0){case TW:J.depthFunc(J.NEVER);break;case SW:J.depthFunc(J.ALWAYS);break;case jW:J.depthFunc(J.LESS);break;case iQ:J.depthFunc(J.LEQUAL);break;case yW:J.depthFunc(J.EQUAL);break;case hW:J.depthFunc(J.GEQUAL);break;case vW:J.depthFunc(J.GREATER);break;case bW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}V0=Y0}},setLocked:function(Y0){b=Y0},setClear:function(Y0){if(A0!==Y0){if(A0=Y0,k0)Y0=1-Y0;J.clearDepth(Y0)}},reset:function(){b=!1,Z0=null,V0=null,A0=null,k0=!1}}}function W(){let b=!1,k0=null,Z0=null,V0=null,A0=null,Y0=null,L0=null,d0=null,AJ=null;return{setTest:function(EJ){if(!b)if(EJ)p(J.STENCIL_TEST);else u(J.STENCIL_TEST)},setMask:function(EJ){if(k0!==EJ&&!b)J.stencilMask(EJ),k0=EJ},setFunc:function(EJ,H8,U8){if(Z0!==EJ||V0!==H8||A0!==U8)J.stencilFunc(EJ,H8,U8),Z0=EJ,V0=H8,A0=U8},setOp:function(EJ,H8,U8){if(Y0!==EJ||L0!==H8||d0!==U8)J.stencilOp(EJ,H8,U8),Y0=EJ,L0=H8,d0=U8},setLocked:function(EJ){b=EJ},setClear:function(EJ){if(AJ!==EJ)J.clearStencil(EJ),AJ=EJ},reset:function(){b=!1,k0=null,Z0=null,V0=null,A0=null,Y0=null,L0=null,d0=null,AJ=null}}}let Z=new $,X=new K,Y=new W,H=new WeakMap,U=new WeakMap,E={},O={},q={},R=new WeakMap,M=[],z=null,D=!1,G=null,S=null,I=null,V=null,w=null,_=null,C=null,k=new a0(0,0,0),L=0,r=!1,j=null,c=null,$0=null,s=null,J0=null,K0=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),l=!1,n=0,d=J.getParameter(J.VERSION);if(d.indexOf("WebGL")!==-1)n=parseFloat(/^WebGL (\d)/.exec(d)[1]),l=n>=1;else if(d.indexOf("OpenGL ES")!==-1)n=parseFloat(/^OpenGL ES (\d)/.exec(d)[1]),l=n>=2;let H0=null,D0={},F0=J.getParameter(J.SCISSOR_BOX),e=J.getParameter(J.VIEWPORT),a=new wJ().fromArray(F0),y=new wJ().fromArray(e);function A(b,k0,Z0,V0){let A0=new Uint8Array(4),Y0=J.createTexture();J.bindTexture(b,Y0),J.texParameteri(b,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(b,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let L0=0;L0<Z0;L0++)if(b===J.TEXTURE_3D||b===J.TEXTURE_2D_ARRAY)J.texImage3D(k0,0,J.RGBA,1,1,V0,0,J.RGBA,J.UNSIGNED_BYTE,A0);else J.texImage2D(k0+L0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,A0);return Y0}let x={};x[J.TEXTURE_2D]=A(J.TEXTURE_2D,J.TEXTURE_2D,1),x[J.TEXTURE_CUBE_MAP]=A(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),x[J.TEXTURE_2D_ARRAY]=A(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),x[J.TEXTURE_3D]=A(J.TEXTURE_3D,J.TEXTURE_3D,1,1),Z.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),p(J.DEPTH_TEST),X.setFunc(iQ),l0(!1),QJ(cQ),p(J.CULL_FACE),x0(v8);function p(b){if(E[b]!==!0)J.enable(b),E[b]=!0}function u(b){if(E[b]!==!1)J.disable(b),E[b]=!1}function T(b,k0){if(q[b]!==k0){if(J.bindFramebuffer(b,k0),q[b]=k0,b===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=k0;if(b===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=k0;return!0}return!1}function N0(b,k0){let Z0=M,V0=!1;if(b){if(Z0=R.get(k0),Z0===void 0)Z0=[],R.set(k0,Z0);let A0=b.textures;if(Z0.length!==A0.length||Z0[0]!==J.COLOR_ATTACHMENT0){for(let Y0=0,L0=A0.length;Y0<L0;Y0++)Z0[Y0]=J.COLOR_ATTACHMENT0+Y0;Z0.length=A0.length,V0=!0}}else if(Z0[0]!==J.BACK)Z0[0]=J.BACK,V0=!0;if(V0)J.drawBuffers(Z0)}function C0(b){if(z!==b)return J.useProgram(b),z=b,!0;return!1}let b0={[O7]:J.FUNC_ADD,[GW]:J.FUNC_SUBTRACT,[NW]:J.FUNC_REVERSE_SUBTRACT};b0[FW]=J.MIN,b0[OW]=J.MAX;let T0={[DW]:J.ZERO,[EW]:J.ONE,[RW]:J.SRC_COLOR,[MW]:J.SRC_ALPHA,[AW]:J.SRC_ALPHA_SATURATE,[zW]:J.DST_COLOR,[BW]:J.DST_ALPHA,[kW]:J.ONE_MINUS_SRC_COLOR,[VW]:J.ONE_MINUS_SRC_ALPHA,[IW]:J.ONE_MINUS_DST_COLOR,[LW]:J.ONE_MINUS_DST_ALPHA,[PW]:J.CONSTANT_COLOR,[wW]:J.ONE_MINUS_CONSTANT_COLOR,[_W]:J.CONSTANT_ALPHA,[CW]:J.ONE_MINUS_CONSTANT_ALPHA};function x0(b,k0,Z0,V0,A0,Y0,L0,d0,AJ,EJ){if(b===v8){if(D===!0)u(J.BLEND),D=!1;return}if(D===!1)p(J.BLEND),D=!0;if(b!==qW){if(b!==G||EJ!==r){if(S!==O7||w!==O7)J.blendEquation(J.FUNC_ADD),S=O7,w=O7;if(EJ)switch(b){case p7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case t8:J.blendFunc(J.ONE,J.ONE);break;case nQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case sQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:i0("WebGLState: Invalid blending: ",b);break}else switch(b){case p7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case t8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case nQ:i0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sQ:i0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:i0("WebGLState: Invalid blending: ",b);break}I=null,V=null,_=null,C=null,k.set(0,0,0),L=0,G=b,r=EJ}return}if(A0=A0||k0,Y0=Y0||Z0,L0=L0||V0,k0!==S||A0!==w)J.blendEquationSeparate(b0[k0],b0[A0]),S=k0,w=A0;if(Z0!==I||V0!==V||Y0!==_||L0!==C)J.blendFuncSeparate(T0[Z0],T0[V0],T0[Y0],T0[L0]),I=Z0,V=V0,_=Y0,C=L0;if(d0.equals(k)===!1||AJ!==L)J.blendColor(d0.r,d0.g,d0.b,AJ),k.copy(d0),L=AJ;G=b,r=!1}function XJ(b,k0){b.side===BJ?u(J.CULL_FACE):p(J.CULL_FACE);let Z0=b.side===aJ;if(k0)Z0=!Z0;l0(Z0),b.blending===p7&&b.transparent===!1?x0(v8):x0(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),X.setFunc(b.depthFunc),X.setTest(b.depthTest),X.setMask(b.depthWrite),Z.setMask(b.colorWrite);let V0=b.stencilWrite;if(Y.setTest(V0),V0)Y.setMask(b.stencilWriteMask),Y.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),Y.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass);NJ(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?p(J.SAMPLE_ALPHA_TO_COVERAGE):u(J.SAMPLE_ALPHA_TO_COVERAGE)}function l0(b){if(j!==b){if(b)J.frontFace(J.CW);else J.frontFace(J.CCW);j=b}}function QJ(b){if(b!==YW){if(p(J.CULL_FACE),b!==c)if(b===cQ)J.cullFace(J.BACK);else if(b===HW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else u(J.CULL_FACE);c=b}function e0(b){if(b!==$0){if(l)J.lineWidth(b);$0=b}}function NJ(b,k0,Z0){if(b){if(p(J.POLYGON_OFFSET_FILL),s!==k0||J0!==Z0){if(s=k0,J0=Z0,X.getReversed())k0=-k0;J.polygonOffset(k0,Z0)}}else u(J.POLYGON_OFFSET_FILL)}function GJ(b){if(b)p(J.SCISSOR_TEST);else u(J.SCISSOR_TEST)}function v(b){if(b===void 0)b=J.TEXTURE0+K0-1;if(H0!==b)J.activeTexture(b),H0=b}function SJ(b,k0,Z0){if(Z0===void 0)if(H0===null)Z0=J.TEXTURE0+K0-1;else Z0=H0;let V0=D0[Z0];if(V0===void 0)V0={type:void 0,texture:void 0},D0[Z0]=V0;if(V0.type!==b||V0.texture!==k0){if(H0!==Z0)J.activeTexture(Z0),H0=Z0;J.bindTexture(b,k0||x[b]),V0.type=b,V0.texture=k0}}function JJ(){let b=D0[H0];if(b!==void 0&&b.type!==void 0)J.bindTexture(b.type,null),b.type=void 0,b.texture=void 0}function h(){try{J.compressedTexImage2D(...arguments)}catch(b){i0("WebGLState:",b)}}function F(){try{J.compressedTexImage3D(...arguments)}catch(b){i0("WebGLState:",b)}}function N(){try{J.texSubImage2D(...arguments)}catch(b){i0("WebGLState:",b)}}function P(){try{J.texSubImage3D(...arguments)}catch(b){i0("WebGLState:",b)}}function f(){try{J.compressedTexSubImage2D(...arguments)}catch(b){i0("WebGLState:",b)}}function X0(){try{J.compressedTexSubImage3D(...arguments)}catch(b){i0("WebGLState:",b)}}function G0(){try{J.texStorage2D(...arguments)}catch(b){i0("WebGLState:",b)}}function R0(){try{J.texStorage3D(...arguments)}catch(b){i0("WebGLState:",b)}}function Q0(){try{J.texImage2D(...arguments)}catch(b){i0("WebGLState:",b)}}function W0(){try{J.texImage3D(...arguments)}catch(b){i0("WebGLState:",b)}}function E0(b){if(O[b]!==void 0)return O[b];else return J.getParameter(b)}function y0(b,k0){if(O[b]!==k0)J.pixelStorei(b,k0),O[b]=k0}function M0(b){if(a.equals(b)===!1)J.scissor(b.x,b.y,b.z,b.w),a.copy(b)}function O0(b){if(y.equals(b)===!1)J.viewport(b.x,b.y,b.z,b.w),y.copy(b)}function m0(b,k0){let Z0=U.get(k0);if(Z0===void 0)Z0=new WeakMap,U.set(k0,Z0);let V0=Z0.get(b);if(V0===void 0)V0=J.getUniformBlockIndex(k0,b.name),Z0.set(b,V0)}function h0(b,k0){let V0=U.get(k0).get(b);if(H.get(k0)!==V0)J.uniformBlockBinding(k0,V0,b.__bindingPointIndex),H.set(k0,V0)}function YJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),E={},O={},H0=null,D0={},q={},R=new WeakMap,M=[],z=null,D=!1,G=null,S=null,I=null,V=null,w=null,_=null,C=null,k=new a0(0,0,0),L=0,r=!1,j=null,c=null,$0=null,s=null,J0=null,a.set(0,0,J.canvas.width,J.canvas.height),y.set(0,0,J.canvas.width,J.canvas.height),Z.reset(),X.reset(),Y.reset()}return{buffers:{color:Z,depth:X,stencil:Y},enable:p,disable:u,bindFramebuffer:T,drawBuffers:N0,useProgram:C0,setBlending:x0,setMaterial:XJ,setFlipSided:l0,setCullFace:QJ,setLineWidth:e0,setPolygonOffset:NJ,setScissorTest:GJ,activeTexture:v,bindTexture:SJ,unbindTexture:JJ,compressedTexImage2D:h,compressedTexImage3D:F,texImage2D:Q0,texImage3D:W0,pixelStorei:y0,getParameter:E0,updateUBOMapping:m0,uniformBlockBinding:h0,texStorage2D:G0,texStorage3D:R0,texSubImage2D:N,texSubImage3D:P,compressedTexSubImage2D:f,compressedTexSubImage3D:X0,scissor:M0,viewport:O0,reset:YJ}}function KG(J,Q,$,K,W,Z,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new n0,E=new WeakMap,O=new Set,q,R=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(F){}function z(F,N){return M?new OffscreenCanvas(F,N):g7("canvas")}function D(F,N,P){let f=1,X0=h(F);if(X0.width>P||X0.height>P)f=P/Math.max(X0.width,X0.height);if(f<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let G0=Math.floor(f*X0.width),R0=Math.floor(f*X0.height);if(q===void 0)q=z(G0,R0);let Q0=N?z(G0,R0):q;return Q0.width=G0,Q0.height=R0,Q0.getContext("2d").drawImage(F,0,0,G0,R0),s0("WebGLRenderer: Texture has been resized from ("+X0.width+"x"+X0.height+") to ("+G0+"x"+R0+")."),Q0}else{if("data"in F)s0("WebGLRenderer: Image in DataTexture is too big ("+X0.width+"x"+X0.height+").");return F}return F}function G(F){return F.generateMipmaps}function S(F){J.generateMipmap(F)}function I(F){if(F.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(F.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(F,N,P,f,X0,G0=!1){if(F!==null){if(J[F]!==void 0)return J[F];s0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let R0;if(f){if(R0=Q.get("EXT_texture_norm16"),!R0)s0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Q0=N;if(N===J.RED){if(P===J.FLOAT)Q0=J.R32F;if(P===J.HALF_FLOAT)Q0=J.R16F;if(P===J.UNSIGNED_BYTE)Q0=J.R8;if(P===J.UNSIGNED_SHORT&&R0)Q0=R0.R16_EXT;if(P===J.SHORT&&R0)Q0=R0.R16_SNORM_EXT}if(N===J.RED_INTEGER){if(P===J.UNSIGNED_BYTE)Q0=J.R8UI;if(P===J.UNSIGNED_SHORT)Q0=J.R16UI;if(P===J.UNSIGNED_INT)Q0=J.R32UI;if(P===J.BYTE)Q0=J.R8I;if(P===J.SHORT)Q0=J.R16I;if(P===J.INT)Q0=J.R32I}if(N===J.RG){if(P===J.FLOAT)Q0=J.RG32F;if(P===J.HALF_FLOAT)Q0=J.RG16F;if(P===J.UNSIGNED_BYTE)Q0=J.RG8;if(P===J.UNSIGNED_SHORT&&R0)Q0=R0.RG16_EXT;if(P===J.SHORT&&R0)Q0=R0.RG16_SNORM_EXT}if(N===J.RG_INTEGER){if(P===J.UNSIGNED_BYTE)Q0=J.RG8UI;if(P===J.UNSIGNED_SHORT)Q0=J.RG16UI;if(P===J.UNSIGNED_INT)Q0=J.RG32UI;if(P===J.BYTE)Q0=J.RG8I;if(P===J.SHORT)Q0=J.RG16I;if(P===J.INT)Q0=J.RG32I}if(N===J.RGB_INTEGER){if(P===J.UNSIGNED_BYTE)Q0=J.RGB8UI;if(P===J.UNSIGNED_SHORT)Q0=J.RGB16UI;if(P===J.UNSIGNED_INT)Q0=J.RGB32UI;if(P===J.BYTE)Q0=J.RGB8I;if(P===J.SHORT)Q0=J.RGB16I;if(P===J.INT)Q0=J.RGB32I}if(N===J.RGBA_INTEGER){if(P===J.UNSIGNED_BYTE)Q0=J.RGBA8UI;if(P===J.UNSIGNED_SHORT)Q0=J.RGBA16UI;if(P===J.UNSIGNED_INT)Q0=J.RGBA32UI;if(P===J.BYTE)Q0=J.RGBA8I;if(P===J.SHORT)Q0=J.RGBA16I;if(P===J.INT)Q0=J.RGBA32I}if(N===J.RGB){if(P===J.UNSIGNED_SHORT&&R0)Q0=R0.RGB16_EXT;if(P===J.SHORT&&R0)Q0=R0.RGB16_SNORM_EXT;if(P===J.UNSIGNED_INT_5_9_9_9_REV)Q0=J.RGB9_E5;if(P===J.UNSIGNED_INT_10F_11F_11F_REV)Q0=J.R11F_G11F_B10F}if(N===J.RGBA){let W0=G0?g$:UJ.getTransfer(X0);if(P===J.FLOAT)Q0=J.RGBA32F;if(P===J.HALF_FLOAT)Q0=J.RGBA16F;if(P===J.UNSIGNED_BYTE)Q0=W0===MJ?J.SRGB8_ALPHA8:J.RGBA8;if(P===J.UNSIGNED_SHORT&&R0)Q0=R0.RGBA16_EXT;if(P===J.SHORT&&R0)Q0=R0.RGBA16_SNORM_EXT;if(P===J.UNSIGNED_SHORT_4_4_4_4)Q0=J.RGBA4;if(P===J.UNSIGNED_SHORT_5_5_5_1)Q0=J.RGB5_A1}if(Q0===J.R16F||Q0===J.R32F||Q0===J.RG16F||Q0===J.RG32F||Q0===J.RGBA16F||Q0===J.RGBA32F)Q.get("EXT_color_buffer_float");return Q0}function w(F,N){let P;if(F){if(N===null||N===R9||N===E7)P=J.DEPTH24_STENCIL8;else if(N===e8)P=J.DEPTH32F_STENCIL8;else if(N===c7)P=J.DEPTH24_STENCIL8,s0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(N===null||N===R9||N===E7)P=J.DEPTH_COMPONENT24;else if(N===e8)P=J.DEPTH_COMPONENT32F;else if(N===c7)P=J.DEPTH_COMPONENT16;return P}function _(F,N){if(G(F)===!0||F.isFramebufferTexture&&F.minFilter!==E9&&F.minFilter!==Z8)return Math.log2(Math.max(N.width,N.height))+1;else if(F.mipmaps!==void 0&&F.mipmaps.length>0)return F.mipmaps.length;else if(F.isCompressedTexture&&Array.isArray(F.image))return N.mipmaps.length;else return 1}function C(F){let N=F.target;if(N.removeEventListener("dispose",C),L(N),N.isVideoTexture)E.delete(N);if(N.isHTMLTexture)O.delete(N)}function k(F){let N=F.target;N.removeEventListener("dispose",k),j(N)}function L(F){let N=K.get(F);if(N.__webglInit===void 0)return;let P=F.source,f=R.get(P);if(f){let X0=f[N.__cacheKey];if(X0.usedTimes--,X0.usedTimes===0)r(F);if(Object.keys(f).length===0)R.delete(P)}K.remove(F)}function r(F){let N=K.get(F);J.deleteTexture(N.__webglTexture);let P=F.source,f=R.get(P);delete f[N.__cacheKey],X.memory.textures--}function j(F){let N=K.get(F);if(F.depthTexture)F.depthTexture.dispose(),K.remove(F.depthTexture);if(F.isWebGLCubeRenderTarget)for(let f=0;f<6;f++){if(Array.isArray(N.__webglFramebuffer[f]))for(let X0=0;X0<N.__webglFramebuffer[f].length;X0++)J.deleteFramebuffer(N.__webglFramebuffer[f][X0]);else J.deleteFramebuffer(N.__webglFramebuffer[f]);if(N.__webglDepthbuffer)J.deleteRenderbuffer(N.__webglDepthbuffer[f])}else{if(Array.isArray(N.__webglFramebuffer))for(let f=0;f<N.__webglFramebuffer.length;f++)J.deleteFramebuffer(N.__webglFramebuffer[f]);else J.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer)J.deleteRenderbuffer(N.__webglDepthbuffer);if(N.__webglMultisampledFramebuffer)J.deleteFramebuffer(N.__webglMultisampledFramebuffer);if(N.__webglColorRenderbuffer){for(let f=0;f<N.__webglColorRenderbuffer.length;f++)if(N.__webglColorRenderbuffer[f])J.deleteRenderbuffer(N.__webglColorRenderbuffer[f])}if(N.__webglDepthRenderbuffer)J.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let P=F.textures;for(let f=0,X0=P.length;f<X0;f++){let G0=K.get(P[f]);if(G0.__webglTexture)J.deleteTexture(G0.__webglTexture),X.memory.textures--;K.remove(P[f])}K.remove(F)}let c=0;function $0(){c=0}function s(){return c}function J0(F){c=F}function K0(){let F=c;if(F>=W.maxTextures)s0("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+W.maxTextures);return c+=1,F}function l(F){let N=[];return N.push(F.wrapS),N.push(F.wrapT),N.push(F.wrapR||0),N.push(F.magFilter),N.push(F.minFilter),N.push(F.anisotropy),N.push(F.internalFormat),N.push(F.format),N.push(F.type),N.push(F.generateMipmaps),N.push(F.premultiplyAlpha),N.push(F.flipY),N.push(F.unpackAlignment),N.push(F.colorSpace),N.join()}function n(F,N){let P=K.get(F);if(F.isVideoTexture)SJ(F);if(F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&P.__version!==F.version){let f=F.image;if(f===null)s0("WebGLRenderer: Texture marked for update but no image data found.");else if(f.complete===!1)s0("WebGLRenderer: Texture marked for update but image is incomplete");else{u(P,F,N);return}}else if(F.isExternalTexture)P.__webglTexture=F.sourceTexture?F.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,P.__webglTexture,J.TEXTURE0+N)}function d(F,N){let P=K.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&P.__version!==F.version){u(P,F,N);return}else if(F.isExternalTexture)P.__webglTexture=F.sourceTexture?F.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,P.__webglTexture,J.TEXTURE0+N)}function H0(F,N){let P=K.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&P.__version!==F.version){u(P,F,N);return}$.bindTexture(J.TEXTURE_3D,P.__webglTexture,J.TEXTURE0+N)}function D0(F,N){let P=K.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&P.__version!==F.version){T(P,F,N);return}$.bindTexture(J.TEXTURE_CUBE_MAP,P.__webglTexture,J.TEXTURE0+N)}let F0={[u7]:J.REPEAT,[b6]:J.CLAMP_TO_EDGE,[pW]:J.MIRRORED_REPEAT},e={[E9]:J.NEAREST,[mW]:J.NEAREST_MIPMAP_NEAREST,[l7]:J.NEAREST_MIPMAP_LINEAR,[Z8]:J.LINEAR,[f6]:J.LINEAR_MIPMAP_NEAREST,[h9]:J.LINEAR_MIPMAP_LINEAR},a={[aW]:J.NEVER,[QZ]:J.ALWAYS,[rW]:J.LESS,[l6]:J.LEQUAL,[tW]:J.EQUAL,[c6]:J.GEQUAL,[eW]:J.GREATER,[JZ]:J.NOTEQUAL};function y(F,N){if(N.type===e8&&Q.has("OES_texture_float_linear")===!1&&(N.magFilter===Z8||N.magFilter===f6||N.magFilter===l7||N.magFilter===h9||N.minFilter===Z8||N.minFilter===f6||N.minFilter===l7||N.minFilter===h9))s0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(F,J.TEXTURE_WRAP_S,F0[N.wrapS]),J.texParameteri(F,J.TEXTURE_WRAP_T,F0[N.wrapT]),F===J.TEXTURE_3D||F===J.TEXTURE_2D_ARRAY)J.texParameteri(F,J.TEXTURE_WRAP_R,F0[N.wrapR]);if(J.texParameteri(F,J.TEXTURE_MAG_FILTER,e[N.magFilter]),J.texParameteri(F,J.TEXTURE_MIN_FILTER,e[N.minFilter]),N.compareFunction)J.texParameteri(F,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(F,J.TEXTURE_COMPARE_FUNC,a[N.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(N.magFilter===E9)return;if(N.minFilter!==l7&&N.minFilter!==h9)return;if(N.type===e8&&Q.has("OES_texture_float_linear")===!1)return;if(N.anisotropy>1||K.get(N).__currentAnisotropy){let P=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(F,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,W.getMaxAnisotropy())),K.get(N).__currentAnisotropy=N.anisotropy}}}function A(F,N){let P=!1;if(F.__webglInit===void 0)F.__webglInit=!0,N.addEventListener("dispose",C);let f=N.source,X0=R.get(f);if(X0===void 0)X0={},R.set(f,X0);let G0=l(N);if(G0!==F.__cacheKey){if(X0[G0]===void 0)X0[G0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,P=!0;X0[G0].usedTimes++;let R0=X0[F.__cacheKey];if(R0!==void 0){if(X0[F.__cacheKey].usedTimes--,R0.usedTimes===0)r(N)}F.__cacheKey=G0,F.__webglTexture=X0[G0].texture}return P}function x(F,N,P){return Math.floor(Math.floor(F/P)/N)}function p(F,N,P,f){let G0=F.updateRanges;if(G0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,N.width,N.height,P,f,N.data);else{G0.sort((y0,M0)=>y0.start-M0.start);let R0=0;for(let y0=1;y0<G0.length;y0++){let M0=G0[R0],O0=G0[y0],m0=M0.start+M0.count,h0=x(O0.start,N.width,4),YJ=x(M0.start,N.width,4);if(O0.start<=m0+1&&h0===YJ&&x(O0.start+O0.count-1,N.width,4)===h0)M0.count=Math.max(M0.count,O0.start+O0.count-M0.start);else++R0,G0[R0]=O0}G0.length=R0+1;let Q0=$.getParameter(J.UNPACK_ROW_LENGTH),W0=$.getParameter(J.UNPACK_SKIP_PIXELS),E0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,N.width);for(let y0=0,M0=G0.length;y0<M0;y0++){let O0=G0[y0],m0=Math.floor(O0.start/4),h0=Math.ceil(O0.count/4),YJ=m0%N.width,b=Math.floor(m0/N.width),k0=h0,Z0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,YJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,b),$.texSubImage2D(J.TEXTURE_2D,0,YJ,b,k0,1,P,f,N.data)}F.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,Q0),$.pixelStorei(J.UNPACK_SKIP_PIXELS,W0),$.pixelStorei(J.UNPACK_SKIP_ROWS,E0)}}function u(F,N,P){let f=J.TEXTURE_2D;if(N.isDataArrayTexture||N.isCompressedArrayTexture)f=J.TEXTURE_2D_ARRAY;if(N.isData3DTexture)f=J.TEXTURE_3D;let X0=A(F,N),G0=N.source;$.bindTexture(f,F.__webglTexture,J.TEXTURE0+P);let R0=K.get(G0);if(G0.version!==R0.__version||X0===!0){if($.activeTexture(J.TEXTURE0+P),(typeof ImageBitmap<"u"&&N.image instanceof ImageBitmap)===!1){let Z0=UJ.getPrimaries(UJ.workingColorSpace),V0=N.colorSpace===x9?null:UJ.getPrimaries(N.colorSpace),A0=N.colorSpace===x9||Z0===V0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,N.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,A0)}$.pixelStorei(J.UNPACK_ALIGNMENT,N.unpackAlignment);let W0=D(N.image,!1,W.maxTextureSize);W0=JJ(N,W0);let E0=Z.convert(N.format,N.colorSpace),y0=Z.convert(N.type),M0=V(N.internalFormat,E0,y0,N.normalized,N.colorSpace,N.isVideoTexture);y(f,N);let O0,m0=N.mipmaps,h0=N.isVideoTexture!==!0,YJ=R0.__version===void 0||X0===!0,b=G0.dataReady,k0=_(N,W0);if(N.isDepthTexture){if(M0=w(N.format===b9,N.type),YJ)if(h0)$.texStorage2D(J.TEXTURE_2D,1,M0,W0.width,W0.height);else $.texImage2D(J.TEXTURE_2D,0,M0,W0.width,W0.height,0,E0,y0,null)}else if(N.isDataTexture)if(m0.length>0){if(h0&&YJ)$.texStorage2D(J.TEXTURE_2D,k0,M0,m0[0].width,m0[0].height);for(let Z0=0,V0=m0.length;Z0<V0;Z0++)if(O0=m0[Z0],h0){if(b)$.texSubImage2D(J.TEXTURE_2D,Z0,0,0,O0.width,O0.height,E0,y0,O0.data)}else $.texImage2D(J.TEXTURE_2D,Z0,M0,O0.width,O0.height,0,E0,y0,O0.data);N.generateMipmaps=!1}else if(h0){if(YJ)$.texStorage2D(J.TEXTURE_2D,k0,M0,W0.width,W0.height);if(b)p(N,W0,E0,y0)}else $.texImage2D(J.TEXTURE_2D,0,M0,W0.width,W0.height,0,E0,y0,W0.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){if(h0&&YJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,k0,M0,m0[0].width,m0[0].height,W0.depth);for(let Z0=0,V0=m0.length;Z0<V0;Z0++)if(O0=m0[Z0],N.format!==b8)if(E0!==null)if(h0){if(b)if(N.layerUpdates.size>0){let A0=DK(O0.width,O0.height,N.format,N.type);for(let Y0 of N.layerUpdates){let L0=O0.data.subarray(Y0*A0/O0.data.BYTES_PER_ELEMENT,(Y0+1)*A0/O0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,Z0,0,0,Y0,O0.width,O0.height,1,E0,L0)}N.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,Z0,0,0,0,O0.width,O0.height,W0.depth,E0,O0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,Z0,M0,O0.width,O0.height,W0.depth,0,O0.data,0,0);else s0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(h0){if(b)$.texSubImage3D(J.TEXTURE_2D_ARRAY,Z0,0,0,0,O0.width,O0.height,W0.depth,E0,y0,O0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,Z0,M0,O0.width,O0.height,W0.depth,0,E0,y0,O0.data)}else{if(h0&&YJ)$.texStorage2D(J.TEXTURE_2D,k0,M0,m0[0].width,m0[0].height);for(let Z0=0,V0=m0.length;Z0<V0;Z0++)if(O0=m0[Z0],N.format!==b8)if(E0!==null)if(h0){if(b)$.compressedTexSubImage2D(J.TEXTURE_2D,Z0,0,0,O0.width,O0.height,E0,O0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,Z0,M0,O0.width,O0.height,0,O0.data);else s0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(h0){if(b)$.texSubImage2D(J.TEXTURE_2D,Z0,0,0,O0.width,O0.height,E0,y0,O0.data)}else $.texImage2D(J.TEXTURE_2D,Z0,M0,O0.width,O0.height,0,E0,y0,O0.data)}else if(N.isDataArrayTexture)if(h0){if(YJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,k0,M0,W0.width,W0.height,W0.depth);if(b)if(N.layerUpdates.size>0){let Z0=DK(W0.width,W0.height,N.format,N.type);for(let V0 of N.layerUpdates){let A0=W0.data.subarray(V0*Z0/W0.data.BYTES_PER_ELEMENT,(V0+1)*Z0/W0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,V0,W0.width,W0.height,1,E0,y0,A0)}N.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,W0.width,W0.height,W0.depth,E0,y0,W0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,M0,W0.width,W0.height,W0.depth,0,E0,y0,W0.data);else if(N.isData3DTexture)if(h0){if(YJ)$.texStorage3D(J.TEXTURE_3D,k0,M0,W0.width,W0.height,W0.depth);if(b)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,W0.width,W0.height,W0.depth,E0,y0,W0.data)}else $.texImage3D(J.TEXTURE_3D,0,M0,W0.width,W0.height,W0.depth,0,E0,y0,W0.data);else if(N.isFramebufferTexture){if(YJ)if(h0)$.texStorage2D(J.TEXTURE_2D,k0,M0,W0.width,W0.height);else{let{width:Z0,height:V0}=W0;for(let A0=0;A0<k0;A0++)$.texImage2D(J.TEXTURE_2D,A0,M0,Z0,V0,0,E0,y0,null),Z0>>=1,V0>>=1}}else if(N.isHTMLTexture){if("texElementImage2D"in J){let Z0=J.canvas;if(!Z0.hasAttribute("layoutsubtree"))Z0.setAttribute("layoutsubtree","true");if(W0.parentNode!==Z0){Z0.appendChild(W0),O.add(N),Z0.onpaint=(V0)=>{let A0=V0.changedElements;for(let Y0 of O)if(A0.includes(Y0.image))Y0.needsUpdate=!0},Z0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,W0);else{let{RGBA:A0,RGBA:Y0,UNSIGNED_BYTE:L0}=J;J.texElementImage2D(J.TEXTURE_2D,0,A0,Y0,L0,W0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(m0.length>0){if(h0&&YJ){let Z0=h(m0[0]);$.texStorage2D(J.TEXTURE_2D,k0,M0,Z0.width,Z0.height)}for(let Z0=0,V0=m0.length;Z0<V0;Z0++)if(O0=m0[Z0],h0){if(b)$.texSubImage2D(J.TEXTURE_2D,Z0,0,0,E0,y0,O0)}else $.texImage2D(J.TEXTURE_2D,Z0,M0,E0,y0,O0);N.generateMipmaps=!1}else if(h0){if(YJ){let Z0=h(W0);$.texStorage2D(J.TEXTURE_2D,k0,M0,Z0.width,Z0.height)}if(b)$.texSubImage2D(J.TEXTURE_2D,0,0,0,E0,y0,W0)}else $.texImage2D(J.TEXTURE_2D,0,M0,E0,y0,W0);if(G(N))S(f);if(R0.__version=G0.version,N.onUpdate)N.onUpdate(N)}F.__version=N.version}function T(F,N,P){if(N.image.length!==6)return;let f=A(F,N),X0=N.source;$.bindTexture(J.TEXTURE_CUBE_MAP,F.__webglTexture,J.TEXTURE0+P);let G0=K.get(X0);if(X0.version!==G0.__version||f===!0){$.activeTexture(J.TEXTURE0+P);let R0=UJ.getPrimaries(UJ.workingColorSpace),Q0=N.colorSpace===x9?null:UJ.getPrimaries(N.colorSpace),W0=N.colorSpace===x9||R0===Q0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,N.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,N.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,W0);let E0=N.isCompressedTexture||N.image[0].isCompressedTexture,y0=N.image[0]&&N.image[0].isDataTexture,M0=[];for(let Y0=0;Y0<6;Y0++){if(!E0&&!y0)M0[Y0]=D(N.image[Y0],!0,W.maxCubemapSize);else M0[Y0]=y0?N.image[Y0].image:N.image[Y0];M0[Y0]=JJ(N,M0[Y0])}let O0=M0[0],m0=Z.convert(N.format,N.colorSpace),h0=Z.convert(N.type),YJ=V(N.internalFormat,m0,h0,N.normalized,N.colorSpace),b=N.isVideoTexture!==!0,k0=G0.__version===void 0||f===!0,Z0=X0.dataReady,V0=_(N,O0);y(J.TEXTURE_CUBE_MAP,N);let A0;if(E0){if(b&&k0)$.texStorage2D(J.TEXTURE_CUBE_MAP,V0,YJ,O0.width,O0.height);for(let Y0=0;Y0<6;Y0++){A0=M0[Y0].mipmaps;for(let L0=0;L0<A0.length;L0++){let d0=A0[L0];if(N.format!==b8)if(m0!==null)if(b){if(Z0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,L0,0,0,d0.width,d0.height,m0,d0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,L0,YJ,d0.width,d0.height,0,d0.data);else s0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(b){if(Z0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,L0,0,0,d0.width,d0.height,m0,h0,d0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,L0,YJ,d0.width,d0.height,0,m0,h0,d0.data)}}}else{if(A0=N.mipmaps,b&&k0){if(A0.length>0)V0++;let Y0=h(M0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,V0,YJ,Y0.width,Y0.height)}for(let Y0=0;Y0<6;Y0++)if(y0){if(b){if(Z0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,M0[Y0].width,M0[Y0].height,m0,h0,M0[Y0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,YJ,M0[Y0].width,M0[Y0].height,0,m0,h0,M0[Y0].data);for(let L0=0;L0<A0.length;L0++){let AJ=A0[L0].image[Y0].image;if(b){if(Z0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,L0+1,0,0,AJ.width,AJ.height,m0,h0,AJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,L0+1,YJ,AJ.width,AJ.height,0,m0,h0,AJ.data)}}else{if(b){if(Z0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,m0,h0,M0[Y0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,YJ,m0,h0,M0[Y0]);for(let L0=0;L0<A0.length;L0++){let d0=A0[L0];if(b){if(Z0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,L0+1,0,0,m0,h0,d0.image[Y0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,L0+1,YJ,m0,h0,d0.image[Y0])}}}if(G(N))S(J.TEXTURE_CUBE_MAP);if(G0.__version=X0.version,N.onUpdate)N.onUpdate(N)}F.__version=N.version}function N0(F,N,P,f,X0,G0){let R0=Z.convert(P.format,P.colorSpace),Q0=Z.convert(P.type),W0=V(P.internalFormat,R0,Q0,P.normalized,P.colorSpace),E0=K.get(N),y0=K.get(P);if(y0.__renderTarget=N,!E0.__hasExternalTextures){let M0=Math.max(1,N.width>>G0),O0=Math.max(1,N.height>>G0);if(X0===J.TEXTURE_3D||X0===J.TEXTURE_2D_ARRAY)$.texImage3D(X0,G0,W0,M0,O0,N.depth,0,R0,Q0,null);else $.texImage2D(X0,G0,W0,M0,O0,0,R0,Q0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,F),v(N))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,f,X0,y0.__webglTexture,0,GJ(N));else if(X0===J.TEXTURE_2D||X0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&X0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,f,X0,y0.__webglTexture,G0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function C0(F,N,P){if(J.bindRenderbuffer(J.RENDERBUFFER,F),N.depthBuffer){let f=N.depthTexture,X0=f&&f.isDepthTexture?f.type:null,G0=w(N.stencilBuffer,X0),R0=N.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(N))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,GJ(N),G0,N.width,N.height);else if(P)J.renderbufferStorageMultisample(J.RENDERBUFFER,GJ(N),G0,N.width,N.height);else J.renderbufferStorage(J.RENDERBUFFER,G0,N.width,N.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,R0,J.RENDERBUFFER,F)}else{let f=N.textures;for(let X0=0;X0<f.length;X0++){let G0=f[X0],R0=Z.convert(G0.format,G0.colorSpace),Q0=Z.convert(G0.type),W0=V(G0.internalFormat,R0,Q0,G0.normalized,G0.colorSpace);if(v(N))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,GJ(N),W0,N.width,N.height);else if(P)J.renderbufferStorageMultisample(J.RENDERBUFFER,GJ(N),W0,N.width,N.height);else J.renderbufferStorage(J.RENDERBUFFER,W0,N.width,N.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function b0(F,N,P){let f=N.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,F),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X0=K.get(N.depthTexture);if(X0.__renderTarget=N,!X0.__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0;if(f){if(X0.__webglInit===void 0)X0.__webglInit=!0,N.depthTexture.addEventListener("dispose",C);if(X0.__webglTexture===void 0){X0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,X0.__webglTexture),y(J.TEXTURE_CUBE_MAP,N.depthTexture);let E0=Z.convert(N.depthTexture.format),y0=Z.convert(N.depthTexture.type),M0;if(N.depthTexture.format===v9)M0=J.DEPTH_COMPONENT24;else if(N.depthTexture.format===b9)M0=J.DEPTH24_STENCIL8;for(let O0=0;O0<6;O0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,0,M0,N.width,N.height,0,E0,y0,null)}}else n(N.depthTexture,0);let G0=X0.__webglTexture,R0=GJ(N),Q0=f?J.TEXTURE_CUBE_MAP_POSITIVE_X+P:J.TEXTURE_2D,W0=N.depthTexture.format===b9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(N.depthTexture.format===v9)if(v(N))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,W0,Q0,G0,0,R0);else J.framebufferTexture2D(J.FRAMEBUFFER,W0,Q0,G0,0);else if(N.depthTexture.format===b9)if(v(N))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,W0,Q0,G0,0,R0);else J.framebufferTexture2D(J.FRAMEBUFFER,W0,Q0,G0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function T0(F){let N=K.get(F),P=F.isWebGLCubeRenderTarget===!0;if(N.__boundDepthTexture!==F.depthTexture){let f=F.depthTexture;if(N.__depthDisposeCallback)N.__depthDisposeCallback();if(f){let X0=()=>{delete N.__boundDepthTexture,delete N.__depthDisposeCallback,f.removeEventListener("dispose",X0)};f.addEventListener("dispose",X0),N.__depthDisposeCallback=X0}N.__boundDepthTexture=f}if(F.depthTexture&&!N.__autoAllocateDepthBuffer)if(P)for(let f=0;f<6;f++)b0(N.__webglFramebuffer[f],F,f);else{let f=F.texture.mipmaps;if(f&&f.length>0)b0(N.__webglFramebuffer[0],F,0);else b0(N.__webglFramebuffer,F,0)}else if(P){N.__webglDepthbuffer=[];for(let f=0;f<6;f++)if($.bindFramebuffer(J.FRAMEBUFFER,N.__webglFramebuffer[f]),N.__webglDepthbuffer[f]===void 0)N.__webglDepthbuffer[f]=J.createRenderbuffer(),C0(N.__webglDepthbuffer[f],F,!1);else{let X0=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=N.__webglDepthbuffer[f];J.bindRenderbuffer(J.RENDERBUFFER,G0),J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,G0)}}else{let f=F.texture.mipmaps;if(f&&f.length>0)$.bindFramebuffer(J.FRAMEBUFFER,N.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,N.__webglFramebuffer);if(N.__webglDepthbuffer===void 0)N.__webglDepthbuffer=J.createRenderbuffer(),C0(N.__webglDepthbuffer,F,!1);else{let X0=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=N.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,G0),J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,G0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function x0(F,N,P){let f=K.get(F);if(N!==void 0)N0(f.__webglFramebuffer,F,F.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(P!==void 0)T0(F)}function XJ(F){let N=F.texture,P=K.get(F),f=K.get(N);F.addEventListener("dispose",k);let X0=F.textures,G0=F.isWebGLCubeRenderTarget===!0,R0=X0.length>1;if(!R0){if(f.__webglTexture===void 0)f.__webglTexture=J.createTexture();f.__version=N.version,X.memory.textures++}if(G0){P.__webglFramebuffer=[];for(let Q0=0;Q0<6;Q0++)if(N.mipmaps&&N.mipmaps.length>0){P.__webglFramebuffer[Q0]=[];for(let W0=0;W0<N.mipmaps.length;W0++)P.__webglFramebuffer[Q0][W0]=J.createFramebuffer()}else P.__webglFramebuffer[Q0]=J.createFramebuffer()}else{if(N.mipmaps&&N.mipmaps.length>0){P.__webglFramebuffer=[];for(let Q0=0;Q0<N.mipmaps.length;Q0++)P.__webglFramebuffer[Q0]=J.createFramebuffer()}else P.__webglFramebuffer=J.createFramebuffer();if(R0)for(let Q0=0,W0=X0.length;Q0<W0;Q0++){let E0=K.get(X0[Q0]);if(E0.__webglTexture===void 0)E0.__webglTexture=J.createTexture(),X.memory.textures++}if(F.samples>0&&v(F)===!1){P.__webglMultisampledFramebuffer=J.createFramebuffer(),P.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Q0=0;Q0<X0.length;Q0++){let W0=X0[Q0];P.__webglColorRenderbuffer[Q0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,P.__webglColorRenderbuffer[Q0]);let E0=Z.convert(W0.format,W0.colorSpace),y0=Z.convert(W0.type),M0=V(W0.internalFormat,E0,y0,W0.normalized,W0.colorSpace,F.isXRRenderTarget===!0),O0=GJ(F);J.renderbufferStorageMultisample(J.RENDERBUFFER,O0,M0,F.width,F.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Q0,J.RENDERBUFFER,P.__webglColorRenderbuffer[Q0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),F.depthBuffer)P.__webglDepthRenderbuffer=J.createRenderbuffer(),C0(P.__webglDepthRenderbuffer,F,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(G0){$.bindTexture(J.TEXTURE_CUBE_MAP,f.__webglTexture),y(J.TEXTURE_CUBE_MAP,N);for(let Q0=0;Q0<6;Q0++)if(N.mipmaps&&N.mipmaps.length>0)for(let W0=0;W0<N.mipmaps.length;W0++)N0(P.__webglFramebuffer[Q0][W0],F,N,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,W0);else N0(P.__webglFramebuffer[Q0],F,N,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0);if(G(N))S(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(R0){for(let Q0=0,W0=X0.length;Q0<W0;Q0++){let E0=X0[Q0],y0=K.get(E0),M0=J.TEXTURE_2D;if(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)M0=F.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(M0,y0.__webglTexture),y(M0,E0),N0(P.__webglFramebuffer,F,E0,J.COLOR_ATTACHMENT0+Q0,M0,0),G(E0))S(M0)}$.unbindTexture()}else{let Q0=J.TEXTURE_2D;if(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)Q0=F.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(Q0,f.__webglTexture),y(Q0,N),N.mipmaps&&N.mipmaps.length>0)for(let W0=0;W0<N.mipmaps.length;W0++)N0(P.__webglFramebuffer[W0],F,N,J.COLOR_ATTACHMENT0,Q0,W0);else N0(P.__webglFramebuffer,F,N,J.COLOR_ATTACHMENT0,Q0,0);if(G(N))S(Q0);$.unbindTexture()}if(F.depthBuffer)T0(F)}function l0(F){let N=F.textures;for(let P=0,f=N.length;P<f;P++){let X0=N[P];if(G(X0)){let G0=I(F),R0=K.get(X0).__webglTexture;$.bindTexture(G0,R0),S(G0),$.unbindTexture()}}}let QJ=[],e0=[];function NJ(F){if(F.samples>0){if(v(F)===!1){let{textures:N,width:P,height:f}=F,X0=J.COLOR_BUFFER_BIT,G0=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,R0=K.get(F),Q0=N.length>1;if(Q0)for(let E0=0;E0<N.length;E0++)$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,R0.__webglMultisampledFramebuffer);let W0=F.texture.mipmaps;if(W0&&W0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglFramebuffer);for(let E0=0;E0<N.length;E0++){if(F.resolveDepthBuffer){if(F.depthBuffer)X0|=J.DEPTH_BUFFER_BIT;if(F.stencilBuffer&&F.resolveStencilBuffer)X0|=J.STENCIL_BUFFER_BIT}if(Q0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,R0.__webglColorRenderbuffer[E0]);let y0=K.get(N[E0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,y0,0)}if(J.blitFramebuffer(0,0,P,f,0,0,P,f,X0,J.NEAREST),H===!0){if(QJ.length=0,e0.length=0,QJ.push(J.COLOR_ATTACHMENT0+E0),F.depthBuffer&&F.resolveDepthBuffer===!1)QJ.push(G0),e0.push(G0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,e0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,QJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),Q0)for(let E0=0;E0<N.length;E0++){$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.RENDERBUFFER,R0.__webglColorRenderbuffer[E0]);let y0=K.get(N[E0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.TEXTURE_2D,y0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&H){let N=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[N])}}}function GJ(F){return Math.min(W.maxSamples,F.samples)}function v(F){let N=K.get(F);return F.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function SJ(F){let N=X.render.frame;if(E.get(F)!==N)E.set(F,N),F.update()}function JJ(F,N){let{colorSpace:P,format:f,type:X0}=F;if(F.isCompressedTexture===!0||F.isVideoTexture===!0)return N;if(P!==x$&&P!==x9)if(UJ.getTransfer(P)===MJ){if(f!==b8||X0!==T8)s0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else i0("WebGLTextures: Unsupported texture color space:",P);return N}function h(F){if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement)U.width=F.naturalWidth||F.width,U.height=F.naturalHeight||F.height;else if(typeof VideoFrame<"u"&&F instanceof VideoFrame)U.width=F.displayWidth,U.height=F.displayHeight;else U.width=F.width,U.height=F.height;return U}this.allocateTextureUnit=K0,this.resetTextureUnits=$0,this.getTextureUnits=s,this.setTextureUnits=J0,this.setTexture2D=n,this.setTexture2DArray=d,this.setTexture3D=H0,this.setTextureCube=D0,this.rebindTextures=x0,this.setupRenderTarget=XJ,this.updateRenderTargetMipmap=l0,this.updateMultisampleRenderTarget=NJ,this.setupDepthRenderbuffer=T0,this.setupFrameBufferTexture=N0,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function WG(J,Q){function $(K,W=x9){let Z,X=UJ.getTransfer(W);if(K===T8)return J.UNSIGNED_BYTE;if(K===$$)return J.UNSIGNED_SHORT_4_4_4_4;if(K===K$)return J.UNSIGNED_SHORT_5_5_5_1;if(K===lW)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===cW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===dW)return J.BYTE;if(K===uW)return J.SHORT;if(K===c7)return J.UNSIGNED_SHORT;if(K===Q$)return J.INT;if(K===R9)return J.UNSIGNED_INT;if(K===e8)return J.FLOAT;if(K===J9)return J.HALF_FLOAT;if(K===nW)return J.ALPHA;if(K===sW)return J.RGB;if(K===b8)return J.RGBA;if(K===v9)return J.DEPTH_COMPONENT;if(K===b9)return J.DEPTH_STENCIL;if(K===iW)return J.RED;if(K===W$)return J.RED_INTEGER;if(K===f9)return J.RG;if(K===Z$)return J.RG_INTEGER;if(K===X$)return J.RGBA_INTEGER;if(K===x6||K===g6||K===p6||K===m6)if(X===MJ)if(Z=Q.get("WEBGL_compressed_texture_s3tc_srgb"),Z!==null){if(K===x6)return Z.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===g6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===p6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===m6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Z=Q.get("WEBGL_compressed_texture_s3tc"),Z!==null){if(K===x6)return Z.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===g6)return Z.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===p6)return Z.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===m6)return Z.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===Y$||K===H$||K===U$||K===q$)if(Z=Q.get("WEBGL_compressed_texture_pvrtc"),Z!==null){if(K===Y$)return Z.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===H$)return Z.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===U$)return Z.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===q$)return Z.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===G$||K===N$||K===F$||K===O$||K===D$||K===d6||K===E$)if(Z=Q.get("WEBGL_compressed_texture_etc"),Z!==null){if(K===G$||K===N$)return X===MJ?Z.COMPRESSED_SRGB8_ETC2:Z.COMPRESSED_RGB8_ETC2;if(K===F$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Z.COMPRESSED_RGBA8_ETC2_EAC;if(K===O$)return Z.COMPRESSED_R11_EAC;if(K===D$)return Z.COMPRESSED_SIGNED_R11_EAC;if(K===d6)return Z.COMPRESSED_RG11_EAC;if(K===E$)return Z.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===R$||K===k$||K===M$||K===V$||K===B$||K===L$||K===z$||K===I$||K===A$||K===P$||K===w$||K===_$||K===C$||K===T$)if(Z=Q.get("WEBGL_compressed_texture_astc"),Z!==null){if(K===R$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Z.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===k$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Z.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===M$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Z.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===V$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Z.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===B$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Z.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===L$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Z.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===z$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Z.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===I$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Z.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===A$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Z.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===P$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Z.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===w$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Z.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===_$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Z.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===C$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Z.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===T$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Z.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===S$||K===j$||K===y$)if(Z=Q.get("EXT_texture_compression_bptc"),Z!==null){if(K===S$)return X===MJ?Z.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Z.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===j$)return Z.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===y$)return Z.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===h$||K===v$||K===u6||K===b$)if(Z=Q.get("EXT_texture_compression_rgtc"),Z!==null){if(K===h$)return Z.COMPRESSED_RED_RGTC1_EXT;if(K===v$)return Z.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===u6)return Z.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===b$)return Z.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===E7)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:$}}var ZG=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XG=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nZ{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new t6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new X8({vertexShader:ZG,fragmentShader:XG,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new U0(new S8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sZ extends x8{constructor(J,Q){super();let $=this,K=null,W=1,Z=null,X="local-floor",Y=1,H=null,U=null,E=null,O=null,q=null,R=null,M=typeof XRWebGLBinding<"u",z=new nZ,D={},G=Q.getContextAttributes(),S=null,I=null,V=[],w=[],_=new n0,C=null,k=new lJ;k.viewport=new wJ;let L=new lJ;L.viewport=new wJ;let r=[k,L],j=new GK,c=null,$0=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(y){let A=V[y];if(A===void 0)A=new s7,V[y]=A;return A.getTargetRaySpace()},this.getControllerGrip=function(y){let A=V[y];if(A===void 0)A=new s7,V[y]=A;return A.getGripSpace()},this.getHand=function(y){let A=V[y];if(A===void 0)A=new s7,V[y]=A;return A.getHandSpace()};function s(y){let A=w.indexOf(y.inputSource);if(A===-1)return;let x=V[A];if(x!==void 0)x.update(y.inputSource,y.frame,H||Z),x.dispatchEvent({type:y.type,data:y.inputSource})}function J0(){K.removeEventListener("select",s),K.removeEventListener("selectstart",s),K.removeEventListener("selectend",s),K.removeEventListener("squeeze",s),K.removeEventListener("squeezestart",s),K.removeEventListener("squeezeend",s),K.removeEventListener("end",J0),K.removeEventListener("inputsourceschange",K0);for(let y=0;y<V.length;y++){let A=w[y];if(A===null)continue;w[y]=null,V[y].disconnect(A)}c=null,$0=null,z.reset();for(let y in D)delete D[y];J.setRenderTarget(S),q=null,O=null,E=null,K=null,I=null,a.stop(),$.isPresenting=!1,J.setPixelRatio(C),J.setSize(_.width,_.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(y){if(W=y,$.isPresenting===!0)s0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(y){if(X=y,$.isPresenting===!0)s0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||Z},this.setReferenceSpace=function(y){H=y},this.getBaseLayer=function(){return O!==null?O:q},this.getBinding=function(){if(E===null&&M)E=new XRWebGLBinding(K,Q);return E},this.getFrame=function(){return R},this.getSession=function(){return K},this.setSession=async function(y){if(K=y,K!==null){if(S=J.getRenderTarget(),K.addEventListener("select",s),K.addEventListener("selectstart",s),K.addEventListener("selectend",s),K.addEventListener("squeeze",s),K.addEventListener("squeezestart",s),K.addEventListener("squeezeend",s),K.addEventListener("end",J0),K.addEventListener("inputsourceschange",K0),G.xrCompatible!==!0)await Q.makeXRCompatible();if(C=J.getPixelRatio(),J.getSize(_),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let x={antialias:G.antialias,alpha:!0,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer(K,Q,x),K.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),I=new V8(q.framebufferWidth,q.framebufferHeight,{format:b8,type:T8,colorSpace:J.outputColorSpace,stencilBuffer:G.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let x=null,p=null,u=null;if(G.depth)u=G.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,x=G.stencil?b9:v9,p=G.stencil?E7:R9;let T={colorFormat:Q.RGBA8,depthFormat:u,scaleFactor:W};E=this.getBinding(),O=E.createProjectionLayer(T),K.updateRenderState({layers:[O]}),J.setPixelRatio(1),J.setSize(O.textureWidth,O.textureHeight,!1),I=new V8(O.textureWidth,O.textureHeight,{format:b8,type:T8,depthTexture:new M9(O.textureWidth,O.textureHeight,p,void 0,void 0,void 0,void 0,void 0,void 0,x),stencilBuffer:G.stencil,colorSpace:J.outputColorSpace,samples:G.antialias?4:0,resolveDepthBuffer:O.ignoreDepthValues===!1,resolveStencilBuffer:O.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(Y),H=null,Z=await K.requestReferenceSpace(X),a.setContext(K),a.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return z.getDepthTexture()};function K0(y){for(let A=0;A<y.removed.length;A++){let x=y.removed[A],p=w.indexOf(x);if(p>=0)w[p]=null,V[p].disconnect(x)}for(let A=0;A<y.added.length;A++){let x=y.added[A],p=w.indexOf(x);if(p===-1){for(let T=0;T<V.length;T++)if(T>=w.length){w.push(x),p=T;break}else if(w[T]===null){w[T]=x,p=T;break}if(p===-1)break}let u=V[p];if(u)u.connect(x)}}let l=new m,n=new m;function d(y,A,x){l.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(x.matrixWorld);let p=l.distanceTo(n),u=A.projectionMatrix.elements,T=x.projectionMatrix.elements,N0=u[14]/(u[10]-1),C0=u[14]/(u[10]+1),b0=(u[9]+1)/u[5],T0=(u[9]-1)/u[5],x0=(u[8]-1)/u[0],XJ=(T[8]+1)/T[0],l0=N0*x0,QJ=N0*XJ,e0=p/(-x0+XJ),NJ=e0*-x0;if(A.matrixWorld.decompose(y.position,y.quaternion,y.scale),y.translateX(NJ),y.translateZ(e0),y.matrixWorld.compose(y.position,y.quaternion,y.scale),y.matrixWorldInverse.copy(y.matrixWorld).invert(),u[10]===-1)y.projectionMatrix.copy(A.projectionMatrix),y.projectionMatrixInverse.copy(A.projectionMatrixInverse);else{let GJ=N0+e0,v=C0+e0,SJ=l0-NJ,JJ=QJ+(p-NJ),h=b0*C0/v*GJ,F=T0*C0/v*GJ;y.projectionMatrix.makePerspective(SJ,JJ,h,F,GJ,v),y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}}function H0(y,A){if(A===null)y.matrixWorld.copy(y.matrix);else y.matrixWorld.multiplyMatrices(A.matrixWorld,y.matrix);y.matrixWorldInverse.copy(y.matrixWorld).invert()}this.updateCamera=function(y){if(K===null)return;let{near:A,far:x}=y;if(z.texture!==null){if(z.depthNear>0)A=z.depthNear;if(z.depthFar>0)x=z.depthFar}if(j.near=L.near=k.near=A,j.far=L.far=k.far=x,c!==j.near||$0!==j.far)K.updateRenderState({depthNear:j.near,depthFar:j.far}),c=j.near,$0=j.far;j.layers.mask=y.layers.mask|6,k.layers.mask=j.layers.mask&-5,L.layers.mask=j.layers.mask&-3;let p=y.parent,u=j.cameras;H0(j,p);for(let T=0;T<u.length;T++)H0(u[T],p);if(u.length===2)d(j,k,L);else j.projectionMatrix.copy(k.projectionMatrix);D0(y,j,p)};function D0(y,A,x){if(x===null)y.matrix.copy(A.matrixWorld);else y.matrix.copy(x.matrixWorld),y.matrix.invert(),y.matrix.multiply(A.matrixWorld);if(y.matrix.decompose(y.position,y.quaternion,y.scale),y.updateMatrixWorld(!0),y.projectionMatrix.copy(A.projectionMatrix),y.projectionMatrixInverse.copy(A.projectionMatrixInverse),y.isPerspectiveCamera)y.fov=S9*2*Math.atan(1/y.projectionMatrix.elements[5]),y.zoom=1}this.getCamera=function(){return j},this.getFoveation=function(){if(O===null&&q===null)return;return Y},this.setFoveation=function(y){if(Y=y,O!==null)O.fixedFoveation=y;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=y},this.hasDepthSensing=function(){return z.texture!==null},this.getDepthSensingMesh=function(){return z.getMesh(j)},this.getCameraTexture=function(y){return D[y]};let F0=null;function e(y,A){if(U=A.getViewerPose(H||Z),R=A,U!==null){let x=U.views;if(q!==null)J.setRenderTargetFramebuffer(I,q.framebuffer),J.setRenderTarget(I);let p=!1;if(x.length!==j.cameras.length)j.cameras.length=0,p=!0;for(let C0=0;C0<x.length;C0++){let b0=x[C0],T0=null;if(q!==null)T0=q.getViewport(b0);else{let XJ=E.getViewSubImage(O,b0);if(T0=XJ.viewport,C0===0)J.setRenderTargetTextures(I,XJ.colorTexture,XJ.depthStencilTexture),J.setRenderTarget(I)}let x0=r[C0];if(x0===void 0)x0=new lJ,x0.layers.enable(C0),x0.viewport=new wJ,r[C0]=x0;if(x0.matrix.fromArray(b0.transform.matrix),x0.matrix.decompose(x0.position,x0.quaternion,x0.scale),x0.projectionMatrix.fromArray(b0.projectionMatrix),x0.projectionMatrixInverse.copy(x0.projectionMatrix).invert(),x0.viewport.set(T0.x,T0.y,T0.width,T0.height),C0===0)j.matrix.copy(x0.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale);if(p===!0)j.cameras.push(x0)}let u=K.enabledFeatures;if(u&&u.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&M){E=$.getBinding();let C0=E.getDepthInformation(x[0]);if(C0&&C0.isValid&&C0.texture)z.init(C0,K.renderState)}if(u&&u.includes("camera-access")&&M){J.state.unbindTexture(),E=$.getBinding();for(let C0=0;C0<x.length;C0++){let b0=x[C0].camera;if(b0){let T0=D[b0];if(!T0)T0=new t6,D[b0]=T0;let x0=E.getCameraImage(b0);T0.sourceTexture=x0}}}}for(let x=0;x<V.length;x++){let p=w[x],u=V[x];if(p!==null&&u!==void 0)u.update(p,A,H||Z)}if(F0)F0(y,A);if(A.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:A});R=null}let a=new vZ;a.setAnimationLoop(e),this.setAnimationLoop=function(y){F0=y},this.dispose=function(){}}}var YG=new zJ,iZ=new r0;iZ.set(-1,0,0,0,1,0,0,0,1);function HG(J,Q){function $(D,G){if(D.matrixAutoUpdate===!0)D.updateMatrix();G.value.copy(D.matrix)}function K(D,G){if(G.color.getRGB(D.fogColor.value,a$(J)),G.isFog)D.fogNear.value=G.near,D.fogFar.value=G.far;else if(G.isFogExp2)D.fogDensity.value=G.density}function W(D,G,S,I,V){if(G.isNodeMaterial)G.uniformsNeedUpdate=!1;else if(G.isMeshBasicMaterial)Z(D,G);else if(G.isMeshLambertMaterial){if(Z(D,G),G.envMap)D.envMapIntensity.value=G.envMapIntensity}else if(G.isMeshToonMaterial)Z(D,G),O(D,G);else if(G.isMeshPhongMaterial){if(Z(D,G),E(D,G),G.envMap)D.envMapIntensity.value=G.envMapIntensity}else if(G.isMeshStandardMaterial){if(Z(D,G),q(D,G),G.isMeshPhysicalMaterial)R(D,G,V)}else if(G.isMeshMatcapMaterial)Z(D,G),M(D,G);else if(G.isMeshDepthMaterial)Z(D,G);else if(G.isMeshDistanceMaterial)Z(D,G),z(D,G);else if(G.isMeshNormalMaterial)Z(D,G);else if(G.isLineBasicMaterial){if(X(D,G),G.isLineDashedMaterial)Y(D,G)}else if(G.isPointsMaterial)H(D,G,S,I);else if(G.isSpriteMaterial)U(D,G);else if(G.isShadowMaterial)D.color.value.copy(G.color),D.opacity.value=G.opacity;else if(G.isShaderMaterial)G.uniformsNeedUpdate=!1}function Z(D,G){if(D.opacity.value=G.opacity,G.color)D.diffuse.value.copy(G.color);if(G.emissive)D.emissive.value.copy(G.emissive).multiplyScalar(G.emissiveIntensity);if(G.map)D.map.value=G.map,$(G.map,D.mapTransform);if(G.alphaMap)D.alphaMap.value=G.alphaMap,$(G.alphaMap,D.alphaMapTransform);if(G.bumpMap){if(D.bumpMap.value=G.bumpMap,$(G.bumpMap,D.bumpMapTransform),D.bumpScale.value=G.bumpScale,G.side===aJ)D.bumpScale.value*=-1}if(G.normalMap){if(D.normalMap.value=G.normalMap,$(G.normalMap,D.normalMapTransform),D.normalScale.value.copy(G.normalScale),G.side===aJ)D.normalScale.value.negate()}if(G.displacementMap)D.displacementMap.value=G.displacementMap,$(G.displacementMap,D.displacementMapTransform),D.displacementScale.value=G.displacementScale,D.displacementBias.value=G.displacementBias;if(G.emissiveMap)D.emissiveMap.value=G.emissiveMap,$(G.emissiveMap,D.emissiveMapTransform);if(G.specularMap)D.specularMap.value=G.specularMap,$(G.specularMap,D.specularMapTransform);if(G.alphaTest>0)D.alphaTest.value=G.alphaTest;let S=Q.get(G),I=S.envMap,V=S.envMapRotation;if(I){if(D.envMap.value=I,D.envMapRotation.value.setFromMatrix4(YG.makeRotationFromEuler(V)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1)D.envMapRotation.value.premultiply(iZ);D.reflectivity.value=G.reflectivity,D.ior.value=G.ior,D.refractionRatio.value=G.refractionRatio}if(G.lightMap)D.lightMap.value=G.lightMap,D.lightMapIntensity.value=G.lightMapIntensity,$(G.lightMap,D.lightMapTransform);if(G.aoMap)D.aoMap.value=G.aoMap,D.aoMapIntensity.value=G.aoMapIntensity,$(G.aoMap,D.aoMapTransform)}function X(D,G){if(D.diffuse.value.copy(G.color),D.opacity.value=G.opacity,G.map)D.map.value=G.map,$(G.map,D.mapTransform)}function Y(D,G){D.dashSize.value=G.dashSize,D.totalSize.value=G.dashSize+G.gapSize,D.scale.value=G.scale}function H(D,G,S,I){if(D.diffuse.value.copy(G.color),D.opacity.value=G.opacity,D.size.value=G.size*S,D.scale.value=I*0.5,G.map)D.map.value=G.map,$(G.map,D.uvTransform);if(G.alphaMap)D.alphaMap.value=G.alphaMap,$(G.alphaMap,D.alphaMapTransform);if(G.alphaTest>0)D.alphaTest.value=G.alphaTest}function U(D,G){if(D.diffuse.value.copy(G.color),D.opacity.value=G.opacity,D.rotation.value=G.rotation,G.map)D.map.value=G.map,$(G.map,D.mapTransform);if(G.alphaMap)D.alphaMap.value=G.alphaMap,$(G.alphaMap,D.alphaMapTransform);if(G.alphaTest>0)D.alphaTest.value=G.alphaTest}function E(D,G){D.specular.value.copy(G.specular),D.shininess.value=Math.max(G.shininess,0.0001)}function O(D,G){if(G.gradientMap)D.gradientMap.value=G.gradientMap}function q(D,G){if(D.metalness.value=G.metalness,G.metalnessMap)D.metalnessMap.value=G.metalnessMap,$(G.metalnessMap,D.metalnessMapTransform);if(D.roughness.value=G.roughness,G.roughnessMap)D.roughnessMap.value=G.roughnessMap,$(G.roughnessMap,D.roughnessMapTransform);if(G.envMap)D.envMapIntensity.value=G.envMapIntensity}function R(D,G,S){if(D.ior.value=G.ior,G.sheen>0){if(D.sheenColor.value.copy(G.sheenColor).multiplyScalar(G.sheen),D.sheenRoughness.value=G.sheenRoughness,G.sheenColorMap)D.sheenColorMap.value=G.sheenColorMap,$(G.sheenColorMap,D.sheenColorMapTransform);if(G.sheenRoughnessMap)D.sheenRoughnessMap.value=G.sheenRoughnessMap,$(G.sheenRoughnessMap,D.sheenRoughnessMapTransform)}if(G.clearcoat>0){if(D.clearcoat.value=G.clearcoat,D.clearcoatRoughness.value=G.clearcoatRoughness,G.clearcoatMap)D.clearcoatMap.value=G.clearcoatMap,$(G.clearcoatMap,D.clearcoatMapTransform);if(G.clearcoatRoughnessMap)D.clearcoatRoughnessMap.value=G.clearcoatRoughnessMap,$(G.clearcoatRoughnessMap,D.clearcoatRoughnessMapTransform);if(G.clearcoatNormalMap){if(D.clearcoatNormalMap.value=G.clearcoatNormalMap,$(G.clearcoatNormalMap,D.clearcoatNormalMapTransform),D.clearcoatNormalScale.value.copy(G.clearcoatNormalScale),G.side===aJ)D.clearcoatNormalScale.value.negate()}}if(G.dispersion>0)D.dispersion.value=G.dispersion;if(G.iridescence>0){if(D.iridescence.value=G.iridescence,D.iridescenceIOR.value=G.iridescenceIOR,D.iridescenceThicknessMinimum.value=G.iridescenceThicknessRange[0],D.iridescenceThicknessMaximum.value=G.iridescenceThicknessRange[1],G.iridescenceMap)D.iridescenceMap.value=G.iridescenceMap,$(G.iridescenceMap,D.iridescenceMapTransform);if(G.iridescenceThicknessMap)D.iridescenceThicknessMap.value=G.iridescenceThicknessMap,$(G.iridescenceThicknessMap,D.iridescenceThicknessMapTransform)}if(G.transmission>0){if(D.transmission.value=G.transmission,D.transmissionSamplerMap.value=S.texture,D.transmissionSamplerSize.value.set(S.width,S.height),G.transmissionMap)D.transmissionMap.value=G.transmissionMap,$(G.transmissionMap,D.transmissionMapTransform);if(D.thickness.value=G.thickness,G.thicknessMap)D.thicknessMap.value=G.thicknessMap,$(G.thicknessMap,D.thicknessMapTransform);D.attenuationDistance.value=G.attenuationDistance,D.attenuationColor.value.copy(G.attenuationColor)}if(G.anisotropy>0){if(D.anisotropyVector.value.set(G.anisotropy*Math.cos(G.anisotropyRotation),G.anisotropy*Math.sin(G.anisotropyRotation)),G.anisotropyMap)D.anisotropyMap.value=G.anisotropyMap,$(G.anisotropyMap,D.anisotropyMapTransform)}if(D.specularIntensity.value=G.specularIntensity,D.specularColor.value.copy(G.specularColor),G.specularColorMap)D.specularColorMap.value=G.specularColorMap,$(G.specularColorMap,D.specularColorMapTransform);if(G.specularIntensityMap)D.specularIntensityMap.value=G.specularIntensityMap,$(G.specularIntensityMap,D.specularIntensityMapTransform)}function M(D,G){if(G.matcap)D.matcap.value=G.matcap}function z(D,G){let S=Q.get(G).light;D.referencePosition.value.setFromMatrixPosition(S.matrixWorld),D.nearDistance.value=S.shadow.camera.near,D.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:W}}function UG(J,Q,$,K){let W={},Z={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,w){let _=w.program;K.uniformBlockBinding(V,_)}function U(V,w){let _=W[V.id];if(_===void 0)D(V),_=E(V),W[V.id]=_,V.addEventListener("dispose",S);let C=w.program;K.updateUBOMapping(V,C);let k=Q.render.frame;if(Z[V.id]!==k)q(V),Z[V.id]=k}function E(V){let w=O();V.__bindingPointIndex=w;let _=J.createBuffer(),C=V.__size,k=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,_),J.bufferData(J.UNIFORM_BUFFER,C,k),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,w,_),_}function O(){for(let V=0;V<Y;V++)if(X.indexOf(V)===-1)return X.push(V),V;return i0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(V){let w=W[V.id],_=V.uniforms,C=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,w);for(let k=0,L=_.length;k<L;k++){let r=_[k];if(Array.isArray(r))for(let j=0,c=r.length;j<c;j++)R(r[j],k,j,C);else R(r,k,0,C)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function R(V,w,_,C){if(z(V,w,_,C)===!0){let{__offset:k,value:L}=V;if(Array.isArray(L)){let r=0;for(let j=0;j<L.length;j++){let c=L[j],$0=G(c);if(M(c,V.__data,r),typeof c!=="number"&&typeof c!=="boolean"&&!c.isMatrix3&&!ArrayBuffer.isView(c))r+=$0.storage/Float32Array.BYTES_PER_ELEMENT}}else M(L,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,k,V.__data)}}function M(V,w,_){if(typeof V==="number"||typeof V==="boolean")w[0]=V;else if(V.isMatrix3)w[0]=V.elements[0],w[1]=V.elements[1],w[2]=V.elements[2],w[3]=0,w[4]=V.elements[3],w[5]=V.elements[4],w[6]=V.elements[5],w[7]=0,w[8]=V.elements[6],w[9]=V.elements[7],w[10]=V.elements[8],w[11]=0;else if(ArrayBuffer.isView(V))w.set(new V.constructor(V.buffer,V.byteOffset,w.length));else V.toArray(w,_)}function z(V,w,_,C){let k=V.value,L=w+"_"+_;if(C[L]===void 0){if(typeof k==="number"||typeof k==="boolean")C[L]=k;else if(ArrayBuffer.isView(k))C[L]=k.slice();else C[L]=k.clone();return!0}else{let r=C[L];if(typeof k==="number"||typeof k==="boolean"){if(r!==k)return C[L]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(r.equals(k)===!1)return r.copy(k),!0}return!1}function D(V){let w=V.uniforms,_=0,C=16;for(let L=0,r=w.length;L<r;L++){let j=Array.isArray(w[L])?w[L]:[w[L]];for(let c=0,$0=j.length;c<$0;c++){let s=j[c],J0=Array.isArray(s.value)?s.value:[s.value];for(let K0=0,l=J0.length;K0<l;K0++){let n=J0[K0],d=G(n),H0=_%C,D0=H0%d.boundary,F0=H0+D0;if(_+=D0,F0!==0&&C-F0<d.storage)_+=C-F0;s.__data=new Float32Array(d.storage/Float32Array.BYTES_PER_ELEMENT),s.__offset=_,_+=d.storage}}}let k=_%C;if(k>0)_+=C-k;return V.__size=_,V.__cache={},this}function G(V){let w={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")w.boundary=4,w.storage=4;else if(V.isVector2)w.boundary=8,w.storage=8;else if(V.isVector3||V.isColor)w.boundary=16,w.storage=12;else if(V.isVector4)w.boundary=16,w.storage=16;else if(V.isMatrix3)w.boundary=48,w.storage=48;else if(V.isMatrix4)w.boundary=64,w.storage=64;else if(V.isTexture)s0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))w.boundary=16,w.storage=V.byteLength;else s0("WebGLRenderer: Unsupported uniform value type.",V);return w}function S(V){let w=V.target;w.removeEventListener("dispose",S);let _=X.indexOf(w.__bindingPointIndex);X.splice(_,1),J.deleteBuffer(W[w.id]),delete W[w.id],delete Z[w.id]}function I(){for(let V in W)J.deleteBuffer(W[V]);X=[],W={},Z={}}return{bind:H,update:U,dispose:I}}var qG=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),m8=null;function GG(){if(m8===null)m8=new i$(qG,16,16,f9,J9),m8.name="DFG_LUT",m8.minFilter=Z8,m8.magFilter=Z8,m8.wrapS=b6,m8.wrapT=b6,m8.generateMipmaps=!1,m8.needsUpdate=!0;return m8}class PK{constructor(J={}){let{canvas:Q=$Z(),context:$=null,depth:K=!0,stencil:W=!1,alpha:Z=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:O=!1,outputBufferType:q=T8}=J;this.isWebGLRenderer=!0;let R;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=$.getContextAttributes().alpha}else R=Z;let M=q,z=new Set([X$,Z$,W$]),D=new Set([T8,R9,c7,E7,$$,K$]),G=new Uint32Array(4),S=new Int32Array(4),I=new m,V=null,w=null,_=[],C=[],k=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=C8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,r=!1,j=null,c=null,$0=null,s=null;this._outputColorSpace=f8;let J0=0,K0=0,l=null,n=-1,d=null,H0=new wJ,D0=new wJ,F0=null,e=new a0(0),a=0,y=Q.width,A=Q.height,x=1,p=null,u=null,T=new wJ(0,0,y,A),N0=new wJ(0,0,y,A),C0=!1,b0=new o7,T0=!1,x0=!1,XJ=new zJ,l0=new m,QJ=new wJ,e0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},NJ=!1;function GJ(){return l===null?x:1}let v=$;function SJ(B,g){return Q.getContext(B,g)}try{let B={alpha:!0,depth:K,stencil:W,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:E};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${XW}`);if(Q.addEventListener("webglcontextlost",d0,!1),Q.addEventListener("webglcontextrestored",AJ,!1),Q.addEventListener("webglcontextcreationerror",EJ,!1),v===null){if(v=SJ("webgl2",B),v===null)if(SJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(B){throw i0("WebGLRenderer: "+B.message),B}let JJ,h,F,N,P,f,X0,G0,R0,Q0,W0,E0,y0,M0,O0,m0,h0,YJ,b,k0,Z0,V0,A0;function Y0(){if(JJ=new kU(v),JJ.init(),Z0=new WG(v,JJ),h=new qU(v,JJ,J,Z0),F=new $G(v,JJ),h.reversedDepthBuffer&&O)F.buffers.depth.setReversed(!0);c=v.createFramebuffer(),$0=v.createFramebuffer(),s=v.createFramebuffer(),N=new BU(v),P=new dq,f=new KG(v,JJ,F,P,h,Z0,N),X0=new RU(L),G0=new AY(v),V0=new HU(v,G0),R0=new MU(v,G0,N,V0),Q0=new zU(v,R0,G0,V0,N),YJ=new LU(v,h,f),O0=new GU(P),W0=new mq(L,X0,JJ,h,V0,O0),E0=new HG(L,P),y0=new lq,M0=new aq(JJ),h0=new YU(L,X0,F,Q0,R,Y),m0=new QG(L,Q0,h),A0=new UG(v,N,h,F),b=new UU(v,JJ,N),k0=new VU(v,JJ,N),N.programs=W0.programs,L.capabilities=h,L.extensions=JJ,L.properties=P,L.renderLists=y0,L.shadowMap=m0,L.state=F,L.info=N}if(Y0(),M!==T8)k=new AU(M,Q.width,Q.height,X,K,W);let L0=new sZ(L,v);this.xr=L0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let B=JJ.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=JJ.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return x},this.setPixelRatio=function(B){if(B===void 0)return;x=B,this.setSize(y,A,!1)},this.getSize=function(B){return B.set(y,A)},this.setSize=function(B,g,t=!0){if(L0.isPresenting){s0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(y=B,A=g,Q.width=Math.floor(B*x),Q.height=Math.floor(g*x),t===!0)Q.style.width=B+"px",Q.style.height=g+"px";if(k!==null)k.setSize(Q.width,Q.height);this.setViewport(0,0,B,g)},this.getDrawingBufferSize=function(B){return B.set(y*x,A*x).floor()},this.setDrawingBufferSize=function(B,g,t){y=B,A=g,x=t,Q.width=Math.floor(B*t),Q.height=Math.floor(g*t),this.setViewport(0,0,B,g)},this.setEffects=function(B){if(M===T8){i0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let g=0;g<B.length;g++)if(B[g].isOutputPass===!0){s0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(H0)},this.getViewport=function(B){return B.copy(T)},this.setViewport=function(B,g,t,i){if(B.isVector4)T.set(B.x,B.y,B.z,B.w);else T.set(B,g,t,i);F.viewport(H0.copy(T).multiplyScalar(x).round())},this.getScissor=function(B){return B.copy(N0)},this.setScissor=function(B,g,t,i){if(B.isVector4)N0.set(B.x,B.y,B.z,B.w);else N0.set(B,g,t,i);F.scissor(D0.copy(N0).multiplyScalar(x).round())},this.getScissorTest=function(){return C0},this.setScissorTest=function(B){F.setScissorTest(C0=B)},this.setOpaqueSort=function(B){p=B},this.setTransparentSort=function(B){u=B},this.getClearColor=function(B){return B.copy(h0.getClearColor())},this.setClearColor=function(){h0.setClearColor(...arguments)},this.getClearAlpha=function(){return h0.getClearAlpha()},this.setClearAlpha=function(){h0.setClearAlpha(...arguments)},this.clear=function(B=!0,g=!0,t=!0){let i=0;if(B){let o=!1;if(l!==null){let P0=l.texture.format;o=z.has(P0)}if(o){let P0=l.texture.type,j0=D.has(P0),z0=h0.getClearColor(),v0=h0.getClearAlpha(),g0=z0.r,t0=z0.g,$J=z0.b;if(j0)G[0]=g0,G[1]=t0,G[2]=$J,G[3]=v0,v.clearBufferuiv(v.COLOR,0,G);else S[0]=g0,S[1]=t0,S[2]=$J,S[3]=v0,v.clearBufferiv(v.COLOR,0,S)}else i|=v.COLOR_BUFFER_BIT}if(g)i|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(t)i|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(i!==0)v.clear(i)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),j=B},this.dispose=function(){Q.removeEventListener("webglcontextlost",d0,!1),Q.removeEventListener("webglcontextrestored",AJ,!1),Q.removeEventListener("webglcontextcreationerror",EJ,!1),h0.dispose(),y0.dispose(),M0.dispose(),P.dispose(),X0.dispose(),Q0.dispose(),V0.dispose(),A0.dispose(),W0.dispose(),L0.dispose(),L0.removeEventListener("sessionstart",C7),L0.removeEventListener("sessionend",I9),O8.stop()};function d0(B){B.preventDefault(),d$("WebGLRenderer: Context Lost."),r=!0}function AJ(){d$("WebGLRenderer: Context Restored."),r=!1;let B=N.autoReset,g=m0.enabled,t=m0.autoUpdate,i=m0.needsUpdate,o=m0.type;Y0(),N.autoReset=B,m0.enabled=g,m0.autoUpdate=t,m0.needsUpdate=i,m0.type=o}function EJ(B){i0("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function H8(B){let g=B.target;g.removeEventListener("dispose",H8),U8(g)}function U8(B){_7(B),P.remove(B)}function _7(B){let g=P.get(B).programs;if(g!==void 0){if(g.forEach(function(t){W0.releaseProgram(t)}),B.isShaderMaterial)W0.releaseShaderCache(B)}}this.renderBufferDirect=function(B,g,t,i,o,P0){if(g===null)g=e0;let j0=o.isMesh&&o.matrixWorld.determinantAffine()<0,z0=j7(B,g,t,i,o);F.setMaterial(i,j0);let v0=t.index,g0=1;if(i.wireframe===!0){if(v0=R0.getWireframeAttribute(t),v0===void 0)return;g0=2}let t0=t.drawRange,$J=t.attributes.position,p0=t0.start*g0,OJ=(t0.start+t0.count)*g0;if(P0!==null)p0=Math.max(p0,P0.start*g0),OJ=Math.min(OJ,(P0.start+P0.count)*g0);if(v0!==null)p0=Math.max(p0,0),OJ=Math.min(OJ,v0.count);else if($J!==void 0&&$J!==null)p0=Math.max(p0,0),OJ=Math.min(OJ,$J.count);let LJ=OJ-p0;if(LJ<0||LJ===1/0)return;V0.setup(o,i,z0,t,v0);let PJ,DJ=b;if(v0!==null)PJ=G0.get(v0),DJ=k0,DJ.setIndex(PJ);if(o.isMesh)if(i.wireframe===!0)F.setLineWidth(i.wireframeLinewidth*GJ()),DJ.setMode(v.LINES);else DJ.setMode(v.TRIANGLES);else if(o.isLine){let dJ=i.linewidth;if(dJ===void 0)dJ=1;if(F.setLineWidth(dJ*GJ()),o.isLineSegments)DJ.setMode(v.LINES);else if(o.isLineLoop)DJ.setMode(v.LINE_LOOP);else DJ.setMode(v.LINE_STRIP)}else if(o.isPoints)DJ.setMode(v.POINTS);else if(o.isSprite)DJ.setMode(v.TRIANGLES);if(o.isBatchedMesh)if(!JJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:dJ,_multiDrawCounts:S0,_multiDrawCount:eJ}=o,HJ=v0?G0.get(v0).bytesPerElement:1,K8=P.get(i).currentProgram.getUniforms();for(let D8=0;D8<eJ;D8++)K8.setValue(v,"_gl_DrawID",D8),DJ.render(dJ[D8]/HJ,S0[D8])}else DJ.renderMultiDraw(o._multiDrawStarts,o._multiDrawCounts,o._multiDrawCount);else if(o.isInstancedMesh)DJ.renderInstances(p0,LJ,o.count);else if(t.isInstancedBufferGeometry){let dJ=t._maxInstanceCount!==void 0?t._maxInstanceCount:1/0,S0=Math.min(t.instanceCount,dJ);DJ.renderInstances(p0,LJ,S0)}else DJ.render(p0,LJ)};function j8(B,g,t){if(B.transparent===!0&&B.side===BJ&&B.forceSinglePass===!1)B.side=aJ,B.needsUpdate=!0,o9(B,g,t),B.side=F7,B.needsUpdate=!0,o9(B,g,t),B.side=BJ;else o9(B,g,t)}this.compile=function(B,g,t=null){if(t===null)t=B;if(w=M0.get(t),w.init(g),C.push(w),t.traverseVisible(function(o){if(o.isLight&&o.layers.test(g.layers)){if(w.pushLight(o),o.castShadow)w.pushShadow(o)}}),B!==t)B.traverseVisible(function(o){if(o.isLight&&o.layers.test(g.layers)){if(w.pushLight(o),o.castShadow)w.pushShadow(o)}});w.setupLights();let i=new Set;return B.traverse(function(o){if(!(o.isMesh||o.isPoints||o.isLine||o.isSprite))return;let P0=o.material;if(P0)if(Array.isArray(P0))for(let j0=0;j0<P0.length;j0++){let z0=P0[j0];j8(z0,t,o),i.add(z0)}else j8(P0,t,o),i.add(P0)}),w=C.pop(),i},this.compileAsync=function(B,g,t=null){let i=this.compile(B,g,t);return new Promise((o)=>{function P0(){if(i.forEach(function(j0){if(P.get(j0).currentProgram.isReady())i.delete(j0)}),i.size===0){o(B);return}setTimeout(P0,10)}if(JJ.get("KHR_parallel_shader_compile")!==null)P0();else setTimeout(P0,10)})};let s9=null;function Y6(B){if(s9)s9(B)}function C7(){O8.stop()}function I9(){O8.start()}let O8=new vZ;if(O8.setAnimationLoop(Y6),typeof self<"u")O8.setContext(self);this.setAnimationLoop=function(B){s9=B,L0.setAnimationLoop(B),B===null?O8.stop():O8.start()},L0.addEventListener("sessionstart",C7),L0.addEventListener("sessionend",I9),this.render=function(B,g){if(g!==void 0&&g.isCamera!==!0){i0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(r===!0)return;if(j!==null)j.renderStart(B,g);let t=L0.enabled===!0&&L0.isPresenting===!0,i=k!==null&&(l===null||t)&&k.begin(L,l);if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(g.parent===null&&g.matrixWorldAutoUpdate===!0)g.updateMatrixWorld();if(L0.enabled===!0&&L0.isPresenting===!0&&(k===null||k.isCompositing()===!1)){if(L0.cameraAutoUpdate===!0)L0.updateCamera(g);g=L0.getCamera()}if(B.isScene===!0)B.onBeforeRender(L,B,g,l);if(w=M0.get(B,C.length),w.init(g),w.state.textureUnits=f.getTextureUnits(),C.push(w),XJ.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),b0.setFromProjectionMatrix(XJ,m$,g.reversedDepth),x0=this.localClippingEnabled,T0=O0.init(this.clippingPlanes,x0),V=y0.get(B,_.length),V.init(),_.push(V),L0.enabled===!0&&L0.isPresenting===!0){let j0=L.xr.getDepthSensingMesh();if(j0!==null)T7(j0,g,-1/0,L.sortObjects)}if(T7(B,g,0,L.sortObjects),V.finish(),L.sortObjects===!0)V.sort(p,u,g.reversedDepth);if(NJ=L0.enabled===!1||L0.isPresenting===!1||L0.hasDepthSensing()===!1,NJ)h0.addToRenderList(V,B);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(T0===!0)O0.beginShadows();let o=w.state.shadowsArray;if(m0.render(o,B,g),T0===!0)O0.endShadows();if((i&&k.hasRenderPass())===!1){let{opaque:j0,transmissive:z0}=V;if(w.setupLights(),g.isArrayCamera){let v0=g.cameras;if(z0.length>0)for(let g0=0,t0=v0.length;g0<t0;g0++){let $J=v0[g0];i9(j0,z0,B,$J)}if(NJ)h0.render(B);for(let g0=0,t0=v0.length;g0<t0;g0++){let $J=v0[g0];H6(V,B,$J,$J.viewport)}}else{if(z0.length>0)i9(j0,z0,B,g);if(NJ)h0.render(B);H6(V,B,g)}}if(l!==null&&K0===0)f.updateMultisampleRenderTarget(l),f.updateRenderTargetMipmap(l);if(i)k.end(L);if(B.isScene===!0)B.onAfterRender(L,B,g);if(V0.resetDefaultState(),n=-1,d=null,C.pop(),C.length>0){if(w=C[C.length-1],f.setTextureUnits(w.state.textureUnits),T0===!0)O0.setGlobalState(L.clippingPlanes,w.state.camera)}else w=null;if(_.pop(),_.length>0)V=_[_.length-1];else V=null;if(j!==null)j.renderEnd()};function T7(B,g,t,i){if(B.visible===!1)return;if(B.layers.test(g.layers)){if(B.isGroup)t=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(g)}else if(B.isLightProbeGrid)w.pushLightProbeGrid(B);else if(B.isLight){if(w.pushLight(B),B.castShadow)w.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||b0.intersectsSprite(B)){if(i)QJ.setFromMatrixPosition(B.matrixWorld).applyMatrix4(XJ);let j0=Q0.update(B),z0=B.material;if(z0.visible)V.push(B,j0,z0,t,QJ.z,null)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||b0.intersectsObject(B)){let j0=Q0.update(B),z0=B.material;if(i){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();QJ.copy(B.boundingSphere.center)}else{if(j0.boundingSphere===null)j0.computeBoundingSphere();QJ.copy(j0.boundingSphere.center)}QJ.applyMatrix4(B.matrixWorld).applyMatrix4(XJ)}if(Array.isArray(z0)){let v0=j0.groups;for(let g0=0,t0=v0.length;g0<t0;g0++){let $J=v0[g0],p0=z0[$J.materialIndex];if(p0&&p0.visible)V.push(B,j0,p0,t,QJ.z,$J)}}else if(z0.visible)V.push(B,j0,z0,t,QJ.z,null)}}}let P0=B.children;for(let j0=0,z0=P0.length;j0<z0;j0++)T7(P0[j0],g,t,i)}function H6(B,g,t,i){let{opaque:o,transmissive:P0,transparent:j0}=B;if(w.setupLightsView(t),T0===!0)O0.setGlobalState(L.clippingPlanes,t);if(i)F.viewport(H0.copy(i));if(o.length>0)A9(o,g,t);if(P0.length>0)A9(P0,g,t);if(j0.length>0)A9(j0,g,t);F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function i9(B,g,t,i){if((t.isScene===!0?t.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[i.id]===void 0){let p0=JJ.has("EXT_color_buffer_half_float")||JJ.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[i.id]=new V8(1,1,{generateMipmaps:!0,type:p0?J9:T8,minFilter:h9,samples:Math.max(4,h.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:UJ.workingColorSpace})}let P0=w.state.transmissionRenderTarget[i.id],j0=i.viewport||H0;P0.setSize(j0.z*L.transmissionResolutionScale,j0.w*L.transmissionResolutionScale);let z0=L.getRenderTarget(),v0=L.getActiveCubeFace(),g0=L.getActiveMipmapLevel();if(L.setRenderTarget(P0),L.getClearColor(e),a=L.getClearAlpha(),a<1)L.setClearColor(16777215,0.5);if(L.clear(),NJ)h0.render(t);let t0=L.toneMapping;L.toneMapping=C8;let $J=i.viewport;if(i.viewport!==void 0)i.viewport=void 0;if(w.setupLightsView(i),T0===!0)O0.setGlobalState(L.clippingPlanes,i);if(A9(B,t,i),f.updateMultisampleRenderTarget(P0),f.updateRenderTargetMipmap(P0),JJ.has("WEBGL_multisampled_render_to_texture")===!1){let p0=!1;for(let OJ=0,LJ=g.length;OJ<LJ;OJ++){let PJ=g[OJ],{object:DJ,geometry:dJ,material:S0,group:eJ}=PJ;if(S0.side===BJ&&DJ.layers.test(i.layers)){let HJ=S0.side;S0.side=aJ,S0.needsUpdate=!0,U6(DJ,t,i,dJ,S0,eJ),S0.side=HJ,S0.needsUpdate=!0,p0=!0}}if(p0===!0)f.updateMultisampleRenderTarget(P0),f.updateRenderTargetMipmap(P0)}if(L.setRenderTarget(z0,v0,g0),L.setClearColor(e,a),$J!==void 0)i.viewport=$J;L.toneMapping=t0}function A9(B,g,t){let i=g.isScene===!0?g.overrideMaterial:null;for(let o=0,P0=B.length;o<P0;o++){let j0=B[o],{object:z0,geometry:v0,group:g0}=j0,t0=j0.material;if(t0.allowOverride===!0&&i!==null)t0=i;if(z0.layers.test(t.layers))U6(z0,g,t,v0,t0,g0)}}function U6(B,g,t,i,o,P0){if(B.onBeforeRender(L,g,t,i,o,P0),B.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),o.onBeforeRender(L,g,t,i,B,P0),o.transparent===!0&&o.side===BJ&&o.forceSinglePass===!1)o.side=aJ,o.needsUpdate=!0,L.renderBufferDirect(t,g,i,o,B,P0),o.side=F7,o.needsUpdate=!0,L.renderBufferDirect(t,g,i,o,B,P0),o.side=BJ;else L.renderBufferDirect(t,g,i,o,B,P0);B.onAfterRender(L,g,t,i,o,P0)}function o9(B,g,t){if(g.isScene!==!0)g=e0;let i=P.get(B),o=w.state.lights,P0=w.state.shadowsArray,j0=o.state.version,z0=W0.getParameters(B,o.state,P0,g,t,w.state.lightProbeGridArray),v0=W0.getProgramCacheKey(z0),g0=i.programs;i.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?g.environment:null,i.fog=g.fog;let t0=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;if(i.envMap=X0.get(B.envMap||i.environment,t0),i.envMapRotation=i.environment!==null&&B.envMap===null?g.environmentRotation:B.envMapRotation,g0===void 0)B.addEventListener("dispose",H8),g0=new Map,i.programs=g0;let $J=g0.get(v0);if($J!==void 0){if(i.currentProgram===$J&&i.lightsStateVersion===j0)return q6(B,z0),$J}else{if(z0.uniforms=W0.getUniforms(B),j!==null&&B.isNodeMaterial)j.build(B,t,z0);B.onBeforeCompile(z0,L),$J=W0.acquireProgram(z0,v0),g0.set(v0,$J),i.uniforms=z0.uniforms}let p0=i.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)p0.clippingPlanes=O0.uniform;if(q6(B,z0),i.needsLights=VQ(B),i.lightsStateVersion=j0,i.needsLights)p0.ambientLightColor.value=o.state.ambient,p0.lightProbe.value=o.state.probe,p0.directionalLights.value=o.state.directional,p0.directionalLightShadows.value=o.state.directionalShadow,p0.spotLights.value=o.state.spot,p0.spotLightShadows.value=o.state.spotShadow,p0.rectAreaLights.value=o.state.rectArea,p0.ltc_1.value=o.state.rectAreaLTC1,p0.ltc_2.value=o.state.rectAreaLTC2,p0.pointLights.value=o.state.point,p0.pointLightShadows.value=o.state.pointShadow,p0.hemisphereLights.value=o.state.hemi,p0.directionalShadowMatrix.value=o.state.directionalShadowMatrix,p0.spotLightMatrix.value=o.state.spotLightMatrix,p0.spotLightMap.value=o.state.spotLightMap,p0.pointShadowMatrix.value=o.state.pointShadowMatrix;return i.lightProbeGrid=w.state.lightProbeGridArray.length>0,i.currentProgram=$J,i.uniformsList=null,$J}function l8(B){if(B.uniformsList===null){let g=B.currentProgram.getUniforms();B.uniformsList=$6.seqWithValue(g.seq,B.uniforms)}return B.uniformsList}function q6(B,g){let t=P.get(B);t.outputColorSpace=g.outputColorSpace,t.batching=g.batching,t.batchingColor=g.batchingColor,t.instancing=g.instancing,t.instancingColor=g.instancingColor,t.instancingMorph=g.instancingMorph,t.skinning=g.skinning,t.morphTargets=g.morphTargets,t.morphNormals=g.morphNormals,t.morphColors=g.morphColors,t.morphTargetsCount=g.morphTargetsCount,t.numClippingPlanes=g.numClippingPlanes,t.numIntersection=g.numClipIntersection,t.vertexAlphas=g.vertexAlphas,t.vertexTangents=g.vertexTangents,t.toneMapping=g.toneMapping}function S7(B,g){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;I.setFromMatrixPosition(g.matrixWorld);for(let t=0,i=B.length;t<i;t++){let o=B[t];if(o.texture!==null&&o.boundingBox.containsPoint(I))return o}return null}function j7(B,g,t,i,o){if(g.isScene!==!0)g=e0;f.resetTextureUnits();let P0=g.fog,j0=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?g.environment:null,z0=l===null?L.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:UJ.workingColorSpace,v0=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,g0=X0.get(i.envMap||j0,v0),t0=i.vertexColors===!0&&!!t.attributes.color&&t.attributes.color.itemSize===4,$J=!!t.attributes.tangent&&(!!i.normalMap||i.anisotropy>0),p0=!!t.morphAttributes.position,OJ=!!t.morphAttributes.normal,LJ=!!t.morphAttributes.color,PJ=C8;if(i.toneMapped){if(l===null||l.isXRRenderTarget===!0)PJ=L.toneMapping}let DJ=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,dJ=DJ!==void 0?DJ.length:0,S0=P.get(i),eJ=w.state.lights;if(T0===!0){if(x0===!0||B!==d){let FJ=B===d&&i.id===n;O0.setState(i,B,FJ)}}let HJ=!1;if(i.version===S0.__version){if(S0.needsLights&&S0.lightsStateVersion!==eJ.state.version)HJ=!0;else if(S0.outputColorSpace!==z0)HJ=!0;else if(o.isBatchedMesh&&S0.batching===!1)HJ=!0;else if(!o.isBatchedMesh&&S0.batching===!0)HJ=!0;else if(o.isBatchedMesh&&S0.batchingColor===!0&&o.colorTexture===null)HJ=!0;else if(o.isBatchedMesh&&S0.batchingColor===!1&&o.colorTexture!==null)HJ=!0;else if(o.isInstancedMesh&&S0.instancing===!1)HJ=!0;else if(!o.isInstancedMesh&&S0.instancing===!0)HJ=!0;else if(o.isSkinnedMesh&&S0.skinning===!1)HJ=!0;else if(!o.isSkinnedMesh&&S0.skinning===!0)HJ=!0;else if(o.isInstancedMesh&&S0.instancingColor===!0&&o.instanceColor===null)HJ=!0;else if(o.isInstancedMesh&&S0.instancingColor===!1&&o.instanceColor!==null)HJ=!0;else if(o.isInstancedMesh&&S0.instancingMorph===!0&&o.morphTexture===null)HJ=!0;else if(o.isInstancedMesh&&S0.instancingMorph===!1&&o.morphTexture!==null)HJ=!0;else if(S0.envMap!==g0)HJ=!0;else if(i.fog===!0&&S0.fog!==P0)HJ=!0;else if(S0.numClippingPlanes!==void 0&&(S0.numClippingPlanes!==O0.numPlanes||S0.numIntersection!==O0.numIntersection))HJ=!0;else if(S0.vertexAlphas!==t0)HJ=!0;else if(S0.vertexTangents!==$J)HJ=!0;else if(S0.morphTargets!==p0)HJ=!0;else if(S0.morphNormals!==OJ)HJ=!0;else if(S0.morphColors!==LJ)HJ=!0;else if(S0.toneMapping!==PJ)HJ=!0;else if(S0.morphTargetsCount!==dJ)HJ=!0;else if(!!S0.lightProbeGrid!==w.state.lightProbeGridArray.length>0)HJ=!0}else HJ=!0,S0.__version=i.version;let K8=S0.currentProgram;if(HJ===!0){if(K8=o9(i,g,o),j&&i.isNodeMaterial)j.onUpdateProgram(i,K8,S0)}let D8=!1,y8=!1,X9=!1,qJ=K8.getUniforms(),_J=S0.uniforms;if(F.useProgram(K8.program))D8=!0,y8=!0,X9=!0;if(i.id!==n)n=i.id,y8=!0;if(S0.needsLights){let FJ=S7(w.state.lightProbeGridArray,o);if(S0.lightProbeGrid!==FJ)S0.lightProbeGrid=FJ,y8=!0}if(D8||d!==B){if(F.buffers.depth.getReversed()&&B.reversedDepth!==!0)B._reversedDepth=!0,B.updateProjectionMatrix();qJ.setValue(v,"projectionMatrix",B.projectionMatrix),qJ.setValue(v,"viewMatrix",B.matrixWorldInverse);let E8=qJ.map.cameraPosition;if(E8!==void 0)E8.setValue(v,l0.setFromMatrixPosition(B.matrixWorld));if(h.logarithmicDepthBuffer)qJ.setValue(v,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial)qJ.setValue(v,"isOrthographic",B.isOrthographicCamera===!0);if(d!==B)d=B,y8=!0,X9=!0}if(S0.needsLights){if(eJ.state.directionalShadowMap.length>0)qJ.setValue(v,"directionalShadowMap",eJ.state.directionalShadowMap,f);if(eJ.state.spotShadowMap.length>0)qJ.setValue(v,"spotShadowMap",eJ.state.spotShadowMap,f);if(eJ.state.pointShadowMap.length>0)qJ.setValue(v,"pointShadowMap",eJ.state.pointShadowMap,f)}if(o.isSkinnedMesh){qJ.setOptional(v,o,"bindMatrix"),qJ.setOptional(v,o,"bindMatrixInverse");let FJ=o.skeleton;if(FJ){if(FJ.boneTexture===null)FJ.computeBoneTexture();qJ.setValue(v,"boneTexture",FJ.boneTexture,f)}}if(o.isBatchedMesh){if(qJ.setOptional(v,o,"batchingTexture"),qJ.setValue(v,"batchingTexture",o._matricesTexture,f),qJ.setOptional(v,o,"batchingIdTexture"),qJ.setValue(v,"batchingIdTexture",o._indirectTexture,f),qJ.setOptional(v,o,"batchingColorTexture"),o._colorsTexture!==null)qJ.setValue(v,"batchingColorTexture",o._colorsTexture,f)}let L8=t.morphAttributes;if(L8.position!==void 0||L8.normal!==void 0||L8.color!==void 0)YJ.update(o,t,K8);if(y8||S0.receiveShadow!==o.receiveShadow)S0.receiveShadow=o.receiveShadow,qJ.setValue(v,"receiveShadow",o.receiveShadow);if((i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial)&&i.envMap===null&&g.environment!==null)_J.envMapIntensity.value=g.environmentIntensity;if(_J.dfgLUT!==void 0)_J.dfgLUT.value=GG();if(y8){if(qJ.setValue(v,"toneMappingExposure",L.toneMappingExposure),S0.needsLights)MQ(_J,X9);if(P0&&i.fog===!0)E0.refreshFogUniforms(_J,P0);if(E0.refreshMaterialUniforms(_J,i,x,A,w.state.transmissionRenderTarget[B.id]),S0.needsLights&&S0.lightProbeGrid){let FJ=S0.lightProbeGrid;_J.probesSH.value=FJ.texture,_J.probesMin.value.copy(FJ.boundingBox.min),_J.probesMax.value.copy(FJ.boundingBox.max),_J.probesResolution.value.copy(FJ.resolution)}$6.upload(v,l8(S0),_J,f)}if(i.isShaderMaterial&&i.uniformsNeedUpdate===!0)$6.upload(v,l8(S0),_J,f),i.uniformsNeedUpdate=!1;if(i.isSpriteMaterial)qJ.setValue(v,"center",o.center);if(qJ.setValue(v,"modelViewMatrix",o.modelViewMatrix),qJ.setValue(v,"normalMatrix",o.normalMatrix),qJ.setValue(v,"modelMatrix",o.matrixWorld),i.uniformsGroups!==void 0){let FJ=i.uniformsGroups;for(let E8=0,z8=FJ.length;E8<z8;E8++){let a9=FJ[E8];A0.update(a9,K8),A0.bind(a9,K8)}}return K8}function MQ(B,g){B.ambientLightColor.needsUpdate=g,B.lightProbe.needsUpdate=g,B.directionalLights.needsUpdate=g,B.directionalLightShadows.needsUpdate=g,B.pointLights.needsUpdate=g,B.pointLightShadows.needsUpdate=g,B.spotLights.needsUpdate=g,B.spotLightShadows.needsUpdate=g,B.rectAreaLights.needsUpdate=g,B.hemisphereLights.needsUpdate=g}function VQ(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}if(this.getActiveCubeFace=function(){return J0},this.getActiveMipmapLevel=function(){return K0},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(B,g,t){let i=P.get(B);if(i.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,i.__autoAllocateDepthBuffer===!1)i.__useRenderToTexture=!1;P.get(B.texture).__webglTexture=g,P.get(B.depthTexture).__webglTexture=i.__autoAllocateDepthBuffer?void 0:t,i.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,g){let t=P.get(B);t.__webglFramebuffer=g,t.__useDefaultFramebuffer=g===void 0},this.setRenderTarget=function(B,g=0,t=0){l=B,J0=g,K0=t;let i=null,o=!1,P0=!1;if(B){let z0=P.get(B);if(z0.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(v.FRAMEBUFFER,z0.__webglFramebuffer),H0.copy(B.viewport),D0.copy(B.scissor),F0=B.scissorTest,F.viewport(H0),F.scissor(D0),F.setScissorTest(F0),n=-1;return}else if(z0.__webglFramebuffer===void 0)f.setupRenderTarget(B);else if(z0.__hasExternalTextures)f.rebindTextures(B,P.get(B.texture).__webglTexture,P.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let t0=B.depthTexture;if(z0.__boundDepthTexture!==t0){if(t0!==null&&P.has(t0)&&(B.width!==t0.image.width||B.height!==t0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");f.setupDepthRenderbuffer(B)}}let v0=B.texture;if(v0.isData3DTexture||v0.isDataArrayTexture||v0.isCompressedArrayTexture)P0=!0;let g0=P.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(g0[g]))i=g0[g][t];else i=g0[g];o=!0}else if(B.samples>0&&f.useMultisampledRTT(B)===!1)i=P.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(g0))i=g0[t];else i=g0;H0.copy(B.viewport),D0.copy(B.scissor),F0=B.scissorTest}else H0.copy(T).multiplyScalar(x).floor(),D0.copy(N0).multiplyScalar(x).floor(),F0=C0;if(t!==0)i=c;if(F.bindFramebuffer(v.FRAMEBUFFER,i))F.drawBuffers(B,i);if(F.viewport(H0),F.scissor(D0),F.setScissorTest(F0),o){let z0=P.get(B.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+g,z0.__webglTexture,t)}else if(P0){let z0=g;for(let v0=0;v0<B.textures.length;v0++){let g0=P.get(B.textures[v0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+v0,g0.__webglTexture,t,z0)}}else if(B!==null&&t!==0){let z0=P.get(B.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,z0.__webglTexture,t)}n=-1},this.readRenderTargetPixels=function(B,g,t,i,o,P0,j0,z0=0){if(!(B&&B.isWebGLRenderTarget)){i0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let v0=P.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&j0!==void 0)v0=v0[j0];if(v0){F.bindFramebuffer(v.FRAMEBUFFER,v0);try{let g0=B.textures[z0],t0=g0.format,$J=g0.type;if(B.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+z0);if(!h.textureFormatReadable(t0)){i0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!h.textureTypeReadable($J)){i0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(g>=0&&g<=B.width-i&&(t>=0&&t<=B.height-o))v.readPixels(g,t,i,o,Z0.convert(t0),Z0.convert($J),P0)}finally{let g0=l!==null?P.get(l).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,g0)}}},this.readRenderTargetPixelsAsync=async function(B,g,t,i,o,P0,j0,z0=0){if(!(B&&B.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let v0=P.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&j0!==void 0)v0=v0[j0];if(v0)if(g>=0&&g<=B.width-i&&(t>=0&&t<=B.height-o)){F.bindFramebuffer(v.FRAMEBUFFER,v0);let g0=B.textures[z0],t0=g0.format,$J=g0.type;if(B.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+z0);if(!h.textureFormatReadable(t0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!h.textureTypeReadable($J))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let p0=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,p0),v.bufferData(v.PIXEL_PACK_BUFFER,P0.byteLength,v.STREAM_READ),v.readPixels(g,t,i,o,Z0.convert(t0),Z0.convert($J),0);let OJ=l!==null?P.get(l).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,OJ);let LJ=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await WZ(v,LJ,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,p0),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,P0),v.deleteBuffer(p0),v.deleteSync(LJ),P0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,g=null,t=0){let i=Math.pow(2,-t),o=Math.floor(B.image.width*i),P0=Math.floor(B.image.height*i),j0=g!==null?g.x:0,z0=g!==null?g.y:0;f.setTexture2D(B,0),v.copyTexSubImage2D(v.TEXTURE_2D,t,0,0,j0,z0,o,P0),F.unbindTexture()},this.copyTextureToTexture=function(B,g,t=null,i=null,o=0,P0=0){let j0,z0,v0,g0,t0,$J,p0,OJ,LJ,PJ=B.isCompressedTexture?B.mipmaps[P0]:B.image;if(t!==null)j0=t.max.x-t.min.x,z0=t.max.y-t.min.y,v0=t.isBox3?t.max.z-t.min.z:1,g0=t.min.x,t0=t.min.y,$J=t.isBox3?t.min.z:0;else{let _J=Math.pow(2,-o);if(j0=Math.floor(PJ.width*_J),z0=Math.floor(PJ.height*_J),B.isDataArrayTexture)v0=PJ.depth;else if(B.isData3DTexture)v0=Math.floor(PJ.depth*_J);else v0=1;g0=0,t0=0,$J=0}if(i!==null)p0=i.x,OJ=i.y,LJ=i.z;else p0=0,OJ=0,LJ=0;let DJ=Z0.convert(g.format),dJ=Z0.convert(g.type),S0;if(g.isData3DTexture)f.setTexture3D(g,0),S0=v.TEXTURE_3D;else if(g.isDataArrayTexture||g.isCompressedArrayTexture)f.setTexture2DArray(g,0),S0=v.TEXTURE_2D_ARRAY;else f.setTexture2D(g,0),S0=v.TEXTURE_2D;F.activeTexture(v.TEXTURE0),F.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,g.flipY),F.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),F.pixelStorei(v.UNPACK_ALIGNMENT,g.unpackAlignment);let eJ=F.getParameter(v.UNPACK_ROW_LENGTH),HJ=F.getParameter(v.UNPACK_IMAGE_HEIGHT),K8=F.getParameter(v.UNPACK_SKIP_PIXELS),D8=F.getParameter(v.UNPACK_SKIP_ROWS),y8=F.getParameter(v.UNPACK_SKIP_IMAGES);F.pixelStorei(v.UNPACK_ROW_LENGTH,PJ.width),F.pixelStorei(v.UNPACK_IMAGE_HEIGHT,PJ.height),F.pixelStorei(v.UNPACK_SKIP_PIXELS,g0),F.pixelStorei(v.UNPACK_SKIP_ROWS,t0),F.pixelStorei(v.UNPACK_SKIP_IMAGES,$J);let X9=B.isDataArrayTexture||B.isData3DTexture,qJ=g.isDataArrayTexture||g.isData3DTexture;if(B.isDepthTexture){let _J=P.get(B),L8=P.get(g),FJ=P.get(_J.__renderTarget),E8=P.get(L8.__renderTarget);F.bindFramebuffer(v.READ_FRAMEBUFFER,FJ.__webglFramebuffer),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,E8.__webglFramebuffer);for(let z8=0;z8<v0;z8++){if(X9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,P.get(B).__webglTexture,o,$J+z8),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,P.get(g).__webglTexture,P0,LJ+z8);v.blitFramebuffer(g0,t0,j0,z0,p0,OJ,j0,z0,v.DEPTH_BUFFER_BIT,v.NEAREST)}F.bindFramebuffer(v.READ_FRAMEBUFFER,null),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(o!==0||B.isRenderTargetTexture||P.has(B)){let _J=P.get(B),L8=P.get(g);F.bindFramebuffer(v.READ_FRAMEBUFFER,$0),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,s);for(let FJ=0;FJ<v0;FJ++){if(X9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,_J.__webglTexture,o,$J+FJ);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,_J.__webglTexture,o);if(qJ)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,L8.__webglTexture,P0,LJ+FJ);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,L8.__webglTexture,P0);if(o!==0)v.blitFramebuffer(g0,t0,j0,z0,p0,OJ,j0,z0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(qJ)v.copyTexSubImage3D(S0,P0,p0,OJ,LJ+FJ,g0,t0,j0,z0);else v.copyTexSubImage2D(S0,P0,p0,OJ,g0,t0,j0,z0)}F.bindFramebuffer(v.READ_FRAMEBUFFER,null),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(qJ)if(B.isDataTexture||B.isData3DTexture)v.texSubImage3D(S0,P0,p0,OJ,LJ,j0,z0,v0,DJ,dJ,PJ.data);else if(g.isCompressedArrayTexture)v.compressedTexSubImage3D(S0,P0,p0,OJ,LJ,j0,z0,v0,DJ,PJ.data);else v.texSubImage3D(S0,P0,p0,OJ,LJ,j0,z0,v0,DJ,dJ,PJ);else if(B.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,P0,p0,OJ,j0,z0,DJ,dJ,PJ.data);else if(B.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,P0,p0,OJ,PJ.width,PJ.height,DJ,PJ.data);else v.texSubImage2D(v.TEXTURE_2D,P0,p0,OJ,j0,z0,DJ,dJ,PJ);if(F.pixelStorei(v.UNPACK_ROW_LENGTH,eJ),F.pixelStorei(v.UNPACK_IMAGE_HEIGHT,HJ),F.pixelStorei(v.UNPACK_SKIP_PIXELS,K8),F.pixelStorei(v.UNPACK_SKIP_ROWS,D8),F.pixelStorei(v.UNPACK_SKIP_IMAGES,y8),P0===0&&g.generateMipmaps)v.generateMipmap(S0);F.unbindTexture()},this.initRenderTarget=function(B){if(P.get(B).__webglFramebuffer===void 0)f.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)f.setTextureCube(B,0);else if(B.isData3DTexture)f.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)f.setTexture2DArray(B,0);else f.setTexture2D(B,0);F.unbindTexture()},this.resetState=function(){J0=0,K0=0,l=null,F.reset(),V0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return m$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=UJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=UJ._getUnpackColorSpace()}}var oZ={type:"change"},_K={type:"start"},rZ={type:"end"},qQ=new M7,aZ=new _8,NG=Math.cos(70*l$.DEG2RAD),mJ=new m,Y8=2*Math.PI,kJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wK=0.000001;class CK extends WQ{constructor(J,Q=null){super(J,Q);if(this.state=kJ.NONE,this.target=new m,this.cursor=new m,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:O9.ROTATE,MIDDLE:O9.DOLLY,RIGHT:O9.PAN},this.touches={ONE:D9.ROTATE,TWO:D9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new m,this._lastQuaternion=new M8,this._lastTargetPosition=new m,this._quat=new M8().setFromUnitVectors(J.up,new m(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new t7,this._sphericalDelta=new t7,this._scale=1,this._panOffset=new m,this._rotateStart=new n0,this._rotateEnd=new n0,this._rotateDelta=new n0,this._panStart=new n0,this._panEnd=new n0,this._panDelta=new n0,this._dollyStart=new n0,this._dollyEnd=new n0,this._dollyDelta=new n0,this._dollyDirection=new m,this._mouse=new n0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=OG.bind(this),this._onPointerDown=FG.bind(this),this._onPointerUp=DG.bind(this),this._onContextMenu=LG.bind(this),this._onMouseWheel=kG.bind(this),this._onKeyDown=MG.bind(this),this._onTouchStart=VG.bind(this),this._onTouchMove=BG.bind(this),this._onMouseDown=EG.bind(this),this._onMouseMove=RG.bind(this),this._interceptControlDown=zG.bind(this),this._interceptControlUp=IG.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(oZ),this.update(),this.state=kJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(mJ.copy(Q).sub(this.target),mJ.applyQuaternion(this._quat),this._spherical.setFromVector3(mJ),this.autoRotate&&this.state===kJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,K=this.maxAzimuthAngle;if(isFinite($)&&isFinite(K)){if($<-Math.PI)$+=Y8;else if($>Math.PI)$-=Y8;if(K<-Math.PI)K+=Y8;else if(K>Math.PI)K-=Y8;if($<=K)this._spherical.theta=Math.max($,Math.min(K,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+K)/2?Math.max($,this._spherical.theta):Math.min(K,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let Z=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=Z!=this._spherical.radius}if(mJ.setFromSpherical(this._spherical),mJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(mJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let Z=null;if(this.object.isPerspectiveCamera){let X=mJ.length();Z=this._clampDistance(X*this._scale);let Y=X-Z;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),W=!!Y}else if(this.object.isOrthographicCamera){let X=new m(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=Y!==this.object.zoom;let H=new m(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),Z=mJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(Z!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(Z).add(this.object.position);else if(qQ.origin.copy(this.object.position),qQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qQ.direction))<NG)this.object.lookAt(this.target);else aZ.setFromNormalAndCoplanarPoint(this.object.up,this.target),qQ.intersectPlane(aZ,this.target)}else if(this.object.isOrthographicCamera){let Z=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),Z!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>wK||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wK||this._lastTargetPosition.distanceToSquared(this.target)>wK)return this.dispatchEvent(oZ),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return Y8/60*this.autoRotateSpeed*J;else return Y8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){mJ.setFromMatrixColumn(Q,0),mJ.multiplyScalar(-J),this._panOffset.add(mJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)mJ.setFromMatrixColumn(Q,1);else mJ.setFromMatrixColumn(Q,0),mJ.crossVectors(this.object.up,mJ);mJ.multiplyScalar(J),this._panOffset.add(mJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let K=this.object.position;mJ.copy(K).sub(this.target);let W=mJ.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*W/$.clientHeight,this.object.matrix),this._panUp(2*Q*W/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),K=J-$.left,W=Q-$.top,Z=$.width,X=$.height;this._mouse.x=K/Z*2-1,this._mouse.y=-(W/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(Y8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(Y8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(Y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-Y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(Y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-Y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateStart.set($,K)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panStart.set($,K)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,K=J.pageY-Q.y,W=Math.sqrt($*$+K*K);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),K=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._rotateEnd.set(K,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(Y8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(Y8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panEnd.set($,K)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,K=J.pageY-Q.y,W=Math.sqrt($*$+K*K);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let Z=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(Z,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new n0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function FG(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function OG(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function DG(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rZ),this.state=kJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function EG(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case O9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=kJ.DOLLY;break;case O9.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=kJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=kJ.ROTATE}break;case O9.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=kJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=kJ.PAN}break;default:this.state=kJ.NONE}if(this.state!==kJ.NONE)this.dispatchEvent(_K)}function RG(J){switch(this.state){case kJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case kJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case kJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function kG(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==kJ.NONE)return;J.preventDefault(),this.dispatchEvent(_K),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(rZ)}function MG(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function VG(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case D9.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=kJ.TOUCH_ROTATE;break;case D9.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=kJ.TOUCH_PAN;break;default:this.state=kJ.NONE}break;case 2:switch(this.touches.TWO){case D9.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=kJ.TOUCH_DOLLY_PAN;break;case D9.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=kJ.TOUCH_DOLLY_ROTATE;break;default:this.state=kJ.NONE}break;default:this.state=kJ.NONE}if(this.state!==kJ.NONE)this.dispatchEvent(_K)}function BG(J){switch(this._trackPointer(J),this.state){case kJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case kJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case kJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case kJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=kJ.NONE}}function LG(J){if(this.enabled===!1)return;J.preventDefault()}function zG(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function IG(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function tZ(J){let Q;try{Q=new PK({antialias:!0,alpha:!1})}catch(n){if(console.error("WebGL renderer unavailable:",n),J)J.innerHTML='<div class="webgl-fallback" style="color:#ffd700;font-family:Orbitron,sans-serif;text-align:center;padding:32px;margin:24px;border:2px solid #7b2d8e;border-radius:18px;background:rgba(26,0,37,0.88);"><h2>WebGL unavailable</h2><p style="color:#9980aa;margin-top:8px;">This game requires a browser with WebGL support. Try a recent Chrome, Firefox, or Edge.</p></div>';return null}Q.setSize(window.innerWidth,window.innerHeight),Q.setPixelRatio(Math.min(window.devicePixelRatio,2)),Q.shadowMap.enabled=!0,Q.shadowMap.type=j9,Q.toneMapping=m7,Q.toneMappingExposure=1.6,Q.outputColorSpace=f8,J.appendChild(Q.domElement);let $=new i6;$.background=new a0(853016),$.fog=new i7(853016,0.028);let K=new p8(40,48,48),W=new X8({side:aJ,fog:!1,uniforms:{topColor:{value:new a0(1968957)},bottomColor:{value:new a0(853016)},moonColor:{value:new a0(16773833)},time:{value:0}},vertexShader:`
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform vec3 moonColor;
      uniform float time;
      varying vec3 vWorldPosition;

      float hash21(vec2 p) {
        p = fract(p * vec2(234.34, 435.345));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
      }

      void main() {
        vec3 dir = normalize(vWorldPosition);
        float h = dir.y;

        // Vertical gradient (deep purple up top, near-black at the bottom).
        float t = pow(max(h, 0.0), 0.6);
        vec3 col = mix(bottomColor, topColor, t);

        // Neon horizon band — magenta glow hugging the floor line.
        float band = exp(-abs(h) * 12.0) * 0.35 + exp(-abs(h - 0.03) * 40.0) * 0.18;
        col += vec3(0.55, 0.22, 0.75) * band;

        // Star field (upper hemisphere only, hash-based so it's stable and
        // cheap — no texture needed). Each star twinkles on its own phase.
        if (h > 0.03) {
          vec2 uv = vec2(atan(dir.z, dir.x), asin(dir.y)) * 26.0;
          vec2 id = floor(uv);
          float rnd = hash21(id);
          float rnd2 = hash21(id + vec2(17.0, 7.0));
          if (rnd > 0.82) {
            vec2 f = fract(uv) - 0.5;
            float d = length(f);
            float tw = 0.55 + 0.45 * sin(time * (1.0 + rnd2 * 3.0) + rnd2 * 40.0);
            float star = smoothstep(0.20, 0.02, d) * tw * (0.35 + 0.75 * rnd2);
            col += vec3(1.0, 0.95, 0.88) * star;
          }
        }

        // Moon with a soft halo, upper-left of the back wall.
        vec3 moonDir = normalize(vec3(0.45, 0.52, -0.73));
        float md = dot(dir, moonDir);
        float disc = smoothstep(0.9955, 0.9980, md);
        float glow = exp((md - 1.0) * 70.0);
        col += moonColor * disc * 1.5;
        col += vec3(0.85, 0.78, 0.95) * glow * 0.30;

        gl_FragColor = vec4(col, 1.0);
      }
    `}),Z=new U0(K,W);$.add(Z);let X=new lJ(40,window.innerWidth/window.innerHeight,0.1,50);X.position.set(8,6,9);let Y=new CK(X,Q.domElement);Y.target.set(0,0.6,-0.5),Y.enableDamping=!0,Y.dampingFactor=0.08,Y.minDistance=4,Y.maxDistance=20,Y.maxPolarAngle=Math.PI/2,Y.minPolarAngle=Math.PI/7,Y.update(),$.add(new KQ(8934860,1.4));let H=new I7(16772829,2.2);H.position.set(5,10,4),H.castShadow=!0,H.shadow.mapSize.width=1024,H.shadow.mapSize.height=1024,$.add(H);let U=new I7(14527231,1.2);U.position.set(-4,5,-3),$.add(U);let E=new I7(4517631,0.8);E.position.set(5,3,-4),$.add(E);let O=new B9(16768392,1.2,15,Math.PI/5,0.5,1);O.position.set(0,7,2),O.target.position.set(0,0,-0.5),$.add(O),$.add(O.target);let q=new B9(14527231,0.8,12,Math.PI/4,0.5,1);q.position.set(-2,6,-1),q.target.position.set(0,0.3,0),$.add(q),$.add(q.target);let R=new B9(16766720,1.5,10,Math.PI/6,0.6,1);R.position.set(-2,5,-4),R.target.position.set(-2,1.5,-3),$.add(R),$.add(R.target);let M=new B9(16766720,1.5,10,Math.PI/6,0.6,1);M.position.set(2,5,-4),M.target.position.set(2,1.5,-3),$.add(M),$.add(M.target);let z=new B9(16777215,1,10,Math.PI/8,0.4,1);z.position.set(0,6,-3),z.target.position.set(0,1.5,-3),$.add(z),$.add(z.target);let D=new Q9(16766720,0.6,4);D.position.set(-2.5,2,-2.5),$.add(D);let G=new Q9(16766720,0.6,4);G.position.set(2.5,2,-2.5),$.add(G);let S=new Q9(16755268,0.5,5);S.position.set(0,2.5,-2.5),$.add(S);let I=[];[[-6,4],[6,4],[-6,-2],[6,-2],[-6,-5],[6,-5]].forEach(([n,d])=>{let H0=new f0({color:8939059,roughness:0.25,metalness:0.85,emissive:5583616,emissiveIntensity:0.1}),D0=new U0(new sJ(0.25,0.35,3.5,8),H0);D0.position.set(n,1.75,d),D0.castShadow=!0,$.add(D0);let F0=new f0({color:14527027,roughness:0.15,metalness:0.9,emissive:11171584,emissiveIntensity:0.3}),e=new U0(new sJ(0.45,0.35,0.25,8),F0);e.position.set(n,3.6,d),$.add(e);let a=new U0(new sJ(0.38,0.42,0.15,8),F0);a.position.set(n,0.05,d),$.add(a);let y=new f0({color:6702114,roughness:0.7,metalness:0.6}),A=new U0(new sJ(0.04,0.06,0.3,6),y);A.position.set(n,3.85,d),$.add(A);let x=new f0({color:16737792,emissive:16729088,emissiveIntensity:2.5,transparent:!0,opacity:0.7}),p=new U0(new m9(0.15,0.5,6),x.clone());p.position.set(n,4.15,d),$.add(p);let u=new f0({color:16772676,emissive:16777096,emissiveIntensity:4,transparent:!0,opacity:0.85}),T=new U0(new m9(0.07,0.3,6),u.clone());T.position.set(n,4.1,d),$.add(T);let N0=new bJ({color:16777215,transparent:!0,opacity:0.6}),C0=new U0(new m9(0.03,0.12,4),N0.clone());C0.position.set(n,4.05,d),$.add(C0);let b0=new Q9(16737792,1,5);b0.position.set(n,4.2,d),$.add(b0),I.push({outer:p,inner:T,core:C0,light:b0,baseY:4.15,phase:Math.random()*Math.PI*2,pos:{x:n,z:d}})});let w=new bJ({color:16763972,transparent:!0,opacity:0.2}),_=[];for(let n=0;n<8;n++){let d=n/8*Math.PI*2,H0=5.5+Math.random()*2.5,D0=3+Math.random()*2,F0=Math.cos(d)*H0,e=Math.sin(d)*H0-1,a=new U0(new p8(0.12,8,8),w);a.position.set(F0,D0,e),$.add(a);let y=new Q9(16763972,0.15,2);y.position.copy(a.position),$.add(y),_.push({mesh:a,light:y,angle:d,radius:H0,baseHeight:D0,phase:Math.random()*Math.PI*2})}let C=new p9({color:14531583,size:0.04,transparent:!0,opacity:0.6,blending:t8}),k=new vJ,L=new Float32Array(1800);for(let n=0;n<600;n++)L[n*3]=(Math.random()-0.5)*40,L[n*3+1]=Math.random()*15,L[n*3+2]=(Math.random()-0.5)*40-5;k.setAttribute("position",new nJ(L,3));let r=new V7(k,C);$.add(r);function j(){let n=document.createElement("canvas");n.width=1024,n.height=1024;let d=n.getContext("2d"),H0=d.createRadialGradient(512,512,0,512,512,720);H0.addColorStop(0,"#120820"),H0.addColorStop(1,"#0a0515"),d.fillStyle=H0,d.fillRect(0,0,1024,1024);let D0=8,F0=1024/D0;for(let a=0;a<D0;a++)for(let y=0;y<D0;y++)if((a+y)%2===0)d.fillStyle="rgba(30, 15, 50, 0.35)",d.fillRect(a*F0,y*F0,F0,F0);d.strokeStyle="rgba(255, 215, 0, 0.12)",d.lineWidth=2;for(let a=0;a<=D0;a++)d.beginPath(),d.moveTo(a*F0,0),d.lineTo(a*F0,1024),d.stroke(),d.beginPath(),d.moveTo(0,a*F0),d.lineTo(1024,a*F0),d.stroke();for(let a=0;a<5000;a++)d.fillStyle=`rgba(255, 255, 255, ${Math.random()*0.03})`,d.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=new g8(n);return e.wrapS=u7,e.wrapT=u7,e.repeat.set(4,4),e}let c=j(),$0=new U0(new S8(40,40),new f0({map:c,color:16777215,roughness:0.35,metalness:0.45,emissive:1116194,emissiveIntensity:0.15}));$0.rotation.x=-Math.PI/2,$0.position.y=-0.1,$0.receiveShadow=!0,$.add($0);let s=new bJ({color:13404415,transparent:!0,opacity:0.08});for(let n=-10;n<=10;n++){let d=new U0(new _0(40,0.003,0.015),s);d.position.set(0,-0.09,n*2),$.add(d);let H0=new U0(new _0(0.015,0.003,40),s);H0.position.set(n*2,-0.09,0),$.add(H0)}let J0=new U0(new V9(4,4.2,32),new bJ({color:16766720,transparent:!0,opacity:0.08,side:BJ}));J0.rotation.x=-Math.PI/2,J0.position.set(0,-0.08,0),$.add(J0),[[-4.5,1.2,-3,16766720],[4.5,1.2,-3,16766720],[-4.5,1.2,2,16729190],[4.5,1.2,2,65416],[-3,0.5,-3,4517631],[3,0.5,-3,16746564]].forEach(([n,d,H0,D0])=>{let F0=new Q9(D0,0.7,4);F0.position.set(n,d,H0),$.add(F0);let e=new U0(new p8(0.06,8,8),new bJ({color:D0}));e.position.copy(F0.position),$.add(e)});let K0=new bJ({color:4456550,transparent:!0,opacity:0.04,side:BJ}),l=[];for(let n=0;n<6;n++){let d=new U0(new S8(3+Math.random()*2,0.3),K0),H0=0.05+Math.random()*0.1;d.position.set((Math.random()-0.5)*8,H0,(Math.random()-0.5)*8-1),d.rotation.y=Math.random()*Math.PI*2,$.add(d),l.push({mesh:d,baseY:H0,baseX:d.position.x,phase:Math.random()*Math.PI*2})}return window.addEventListener("resize",()=>{X.aspect=window.innerWidth/window.innerHeight,X.updateProjectionMatrix(),Q.setSize(window.innerWidth,window.innerHeight)}),{scene:$,camera:X,renderer:Q,controls:Y,flameData:I,lanterns:_,smokeData:l,updateAmbient(n){W.uniforms.time.value=n;let d=0.42+0.32*Math.sin(n*0.6);C.opacity=d;let H0=0.5+0.5*Math.sin(n*0.35+1);C.color.setRGB(0.78+H0*0.1,0.66+(1-H0)*0.1,0.95);for(let D0 of l)D0.mesh.position.y=D0.baseY+Math.sin(n*0.4+D0.phase)*0.18,D0.mesh.position.x=D0.baseX+Math.sin(n*0.25+D0.phase*1.7)*0.35},updateFlames(n){for(let d of I){let H0=0.5+0.5*Math.sin(n*8+d.phase),D0=0.4+0.6*Math.sin(n*11+d.phase*1.3),F0=H0*D0;if(d.outer.material.emissiveIntensity=1.5+2.5*F0,d.outer.material.opacity=0.4+0.4*F0,d.inner.material.emissiveIntensity=2.5+4*F0,d.light.intensity=0.6+0.8*F0,d.outer.position.x=d.pos.x+Math.sin(n*6+d.phase)*0.04,d.outer.position.z=d.pos.z+Math.cos(n*8+d.phase)*0.04,d.outer.scale.x=0.9+0.2*Math.sin(n*5+d.phase*0.7),d.outer.scale.z=0.9+0.2*Math.cos(n*7+d.phase),d.outer.scale.y=0.8+0.4*Math.sin(n*9+d.phase),d.inner.position.copy(d.outer.position),d.inner.position.y=d.baseY+Math.sin(n*6+d.phase)*0.04,d.core)d.core.position.copy(d.inner.position),d.core.position.y=d.baseY-0.1+Math.sin(n*10+d.phase)*0.02,d.core.material.opacity=0.3+0.5*F0;d.light.position.copy(d.outer.position),d.light.position.y=4.2}for(let d of _)d.mesh.position.y=d.baseHeight+Math.sin(n*0.5+d.phase)*0.08,d.light.position.y=d.mesh.position.y}}}function eZ(J){let Q=new W8,$=7,K=6,W=0.5,Z=0.54,X=-2.75,Y=1.6,H=-4.05,U=-3.2,E=3.2,O=0,q=new f0({color:1706037,roughness:0.5,metalness:0.6,emissive:656416,emissiveIntensity:0.12}),R=new f0({color:918560,roughness:0.6,metalness:0.5,emissive:328208,emissiveIntensity:0.08}),M=new U0(new _0(7.8,0.2,6.6),R);M.position.set(0,0.1,0.1),M.castShadow=!0,M.receiveShadow=!0,Q.add(M);let z=new U0(new _0(7.5,0.175,6.3),q);z.position.set(0,0.275,0.05),z.castShadow=!0,z.receiveShadow=!0,Q.add(z);let D=new U0(new _0(7,0.125,6),q);D.position.set(0,0.425,0),D.castShadow=!0,D.receiveShadow=!0,Q.add(D);let G=new f0({color:16766720,roughness:0.15,metalness:0.92,emissive:8939008,emissiveIntensity:0.2}),I=new U0(new _0(7.65,0.05,6.45),G);I.position.set(0,0.2,0.08),Q.add(I);let V=new U0(new _0(7.25,0.05,6.15),G);V.position.set(0,0.35,0.03),Q.add(V);let w=new f0({color:3807829,roughness:0.95,metalness:0.02,emissive:1706544,emissiveIntensity:0.25}),_=new U0(new _0(6.5,0.04,6),w);_.position.set(0,0.52,0),_.receiveShadow=!0,Q.add(_);let C=3.2,k=-1.2,L=0.9,r=1.2,j=0.08,c=0.54+j,$0=-1.5,s=0.45,J0=0.5,K0=$0-s/2,l=$0+s/2,n=k+C/2,d=k-C/2,H0=$0,D0=new f0({color:13404415,emissive:11158783,emissiveIntensity:1.5,transparent:!0,opacity:0.6,side:BJ}),F0=new U0(new V9(0.2,0.4,20,1),D0);F0.position.set(0,0.53,H0),F0.rotation.x=-Math.PI/2,Q.add(F0);let e=new W8,a=3.3,y=2.9000000000000004,A=H0,x=new f0({color:6706602,roughness:0.3,metalness:0.8,emissive:4465322,emissiveIntensity:0.2}),p=new U0(new _0(y*2+0.5,0.04,0.04),x);p.position.set(0,a,A),e.add(p);let u=new f0({color:8943564,roughness:0.2,metalness:0.9,emissive:6702250,emissiveIntensity:0.3});for(let B0 of[-1,1]){let c0=new U0(new p8(0.06,6,6),u);c0.position.set(B0*(y+0.25),a,A),e.add(c0)}let T=new f0({color:13404415,emissive:11158783,emissiveIntensity:2}),N0=new U0(new B7(0.1,0),T);N0.position.set(0,a,A),e.add(N0);let C0=new bJ({color:16777215,transparent:!0,opacity:0.6}),b0=new U0(new B7(0.05,0),C0);b0.position.set(0,a,A),e.add(b0);let T0=new bJ({color:13404415,transparent:!0,opacity:0.08,side:BJ}),x0=new U0(new _0(0.02,a-0.5,0.02),T0);x0.position.set(0,0.5+(a-0.5)/2,A),e.add(x0);let XJ=new bJ({color:13404415,transparent:!0,opacity:0.15,side:BJ}),l0=new U0(new V9(0.1,0.25,16,1),XJ);l0.rotation.x=-Math.PI/2,l0.position.set(0,0.52,A),e.add(l0);let QJ={slider:N0,innerSlider:b0,beam:x0,target:l0,railY:a,railSpan:y};Q.add(e);let e0=new W8,NJ=new f0({color:3809376,roughness:0.4,metalness:0.6,emissive:1706544,emissiveIntensity:0.3}),GJ=new f0({color:13404415,roughness:0.2,metalness:0.8,emissive:11158783,emissiveIntensity:0.6}),v=new f0({color:4469640,roughness:0.3,metalness:0.7,emissive:2232678,emissiveIntensity:0.4}),SJ=3.2-J0/2,JJ=new U0(new _0(SJ,j,C),NJ);JJ.position.set(-(J0/2+SJ/2),0.54+j/2,k),JJ.castShadow=!0,JJ.receiveShadow=!0,e0.add(JJ);let h=new U0(new _0(SJ,j,C),NJ);h.position.set(J0/2+SJ/2,0.54+j/2,k),h.castShadow=!0,h.receiveShadow=!0,e0.add(h);let F=6.4,N=j+0.06,P=new U0(new _0(F,N,0.06),GJ);P.position.set(0,0.54+N/2,k+C/2),e0.add(P);let f=j+0.22,X0=0.54+f/2,G0=new U0(new _0(F,f,0.06),v);G0.position.set(0,X0,k-C/2),G0.castShadow=!0,e0.add(G0);for(let B0 of[-1,1]){let c0=j+0.12,WJ=new U0(new _0(0.06,c0,C),v);WJ.position.set(B0*(F/2),0.54+c0/2,k),e0.add(WJ)}let R0=new f0({color:13404415,emissive:11158783,emissiveIntensity:1.5}),Q0=new U0(new _0(F,0.02,0.02),R0);Q0.position.set(0,0.54+j+0.01,k+C/2+0.02),e0.add(Q0),Q.add(e0);let W0=k,E0=k,y0=0,M0=-1,O0=2.8,m0=new f0({color:2757734,roughness:0.4,metalness:0,transparent:!0,opacity:0.2,side:BJ,emissive:656416,emissiveIntensity:0.18,depthWrite:!1}),h0=new U0(new _0(7.3,O0,0.2),m0);h0.position.set(0,0.5+O0/2,-4.05),h0.castShadow=!1,h0.receiveShadow=!1,h0.renderOrder=1,Q.add(h0);let YJ=new bJ({color:10181046,transparent:!0,opacity:0.08,blending:t8,side:BJ,depthWrite:!1}),b=new U0(new S8(7.25,O0-0.1),YJ);b.position.set(0,0.5+O0/2,-3.9299999999999997);let k0=new f0({color:13404415,emissive:11158783,emissiveIntensity:2}),Z0=new U0(new _0(7.15,0.03,0.03),k0);Z0.position.set(0,0.62,-3.9099999999999997),Q.add(Z0),b.renderOrder=2,Q.add(b);let V0=new f0({color:16766720,emissive:16755200,emissiveIntensity:2.2}),A0=0.06,Y0=7.25,L0=O0+0.1;[{x:0,y:0.5+O0+0.07,w:Y0},{x:0,y:0.44,w:Y0}].forEach(({x:B0,y:c0,w:WJ})=>{let o0=new U0(new _0(WJ,A0,A0),V0);o0.position.set(B0,c0,-3.94),Q.add(o0)}),[{x:-Y0/2+A0/2},{x:Y0/2-A0/2}].forEach(({x:B0})=>{let c0=new U0(new _0(A0,L0,A0),V0);c0.position.set(B0,0.5+O0/2,-3.94),Q.add(c0)});let d0=new W8;d0.position.set(0,1.8,-3.92),Q.add(d0);let AJ=new f0({color:16766720,emissive:13142528,emissiveIntensity:1.4,roughness:0.12,metalness:0.95}),EJ=new U0(new sJ(0.78,0.78,0.16,32),AJ);EJ.rotation.z=Math.PI/2,d0.add(EJ);let H8=new f0({color:16774307,emissive:16766720,emissiveIntensity:1.8}),U8=new U0(new L7(0.62,0.025,8,32),H8);U8.rotation.y=Math.PI/2,U8.position.z=0.085,d0.add(U8);let _7=new U0(new L7(0.5,0.02,8,24),H8);_7.rotation.y=Math.PI/2,_7.position.z=0.09,d0.add(_7);let j8=new f0({color:16774307,emissive:16766720,emissiveIntensity:2.6}),s9=new U0(new _0(0.06,0.6,0.04),j8);s9.position.set(0,0,0.09),d0.add(s9);let Y6=new U0(new _0(0.24,0.06,0.04),j8);Y6.position.set(0,0.22,0.09),d0.add(Y6);let C7=new U0(new _0(0.24,0.06,0.04),j8);C7.position.set(0,-0.22,0.09),d0.add(C7);let I9=new U0(new _0(0.13,0.05,0.04),j8);I9.position.set(-0.04,0.07,0.09),d0.add(I9);let O8=new U0(new _0(0.13,0.05,0.04),j8);O8.position.set(0.04,-0.07,0.09),d0.add(O8),[-0.09].forEach((B0)=>{let c0=new U0(new _0(0.13,0.05,0.04),j8);c0.position.set(-I9.position.x,-I9.position.y,B0),d0.add(c0);let WJ=new U0(new _0(0.13,0.05,0.04),j8);WJ.position.set(-O8.position.x,-O8.position.y,B0),d0.add(WJ)});function T7(){let WJ=document.createElement("canvas");WJ.width=1024,WJ.height=224;let o0=WJ.getContext("2d"),fJ=o0.createLinearGradient(0,0,0,224);fJ.addColorStop(0,"#ffe9a3"),fJ.addColorStop(0.5,"#ffd700"),fJ.addColorStop(1,"#b8860b"),o0.fillStyle=fJ,o0.fillRect(0,0,1024,224),o0.fillStyle="#150527",o0.fillRect(14,14,996,196),o0.strokeStyle="rgba(255, 215, 0, 0.55)",o0.lineWidth=3,o0.strokeRect(26,26,972,172),o0.textAlign="center",o0.textBaseline="middle",o0.font="900 104px Orbitron, Arial, sans-serif";let jJ=o0.createLinearGradient(0,56,0,190.4);jJ.addColorStop(0,"#fff8d0"),jJ.addColorStop(0.45,"#ffd700"),jJ.addColorStop(1,"#e8930c"),o0.shadowColor="rgba(255, 200, 40, 0.95)",o0.shadowBlur=34,o0.fillStyle=jJ,o0.fillText("COIN PUSHER",512,116),o0.shadowBlur=0,o0.fillStyle="rgba(255, 215, 0, 0.9)",o0.font="900 58px Orbitron, Arial, sans-serif",o0.fillText("✦",82,114),o0.fillText("✦",942,114);let CJ=new g8(WJ);return CJ.colorSpace=f8,CJ.anisotropy=4,CJ}let H6=new bJ({map:T7(),transparent:!0,side:BJ,toneMapped:!1}),i9=new U0(new S8(4.2,0.72),H6);i9.position.set(0,3.45,-3.92),Q.add(i9);let A9=[];[-2.55,2.55].forEach((B0,c0)=>{let WJ=new f0({color:16766720,roughness:0.18,metalness:0.92,emissive:13404160,emissiveIntensity:0.7}),o0=new U0(new sJ(0.15,0.18,2.2,12),WJ);o0.position.set(B0,1.8,-3.92),Q.add(o0);let fJ=new U0(new sJ(0.22,0.18,0.18,12),WJ);fJ.position.set(B0,3,-3.92),Q.add(fJ);let jJ=new U0(new sJ(0.22,0.24,0.12,12),WJ);jJ.position.set(B0,0.75,-3.92),Q.add(jJ);let CJ=new U0(new p8(0.1,16,16),new bJ({color:16770688,transparent:!0,opacity:0.85}));CJ.position.set(B0,3.2,-3.92),Q.add(CJ);let TJ=[16720452,4521864,4491519,16755234,13395711];for(let xJ=0;xJ<5;xJ++){let I8=new f0({color:TJ[xJ%TJ.length],emissive:TJ[xJ%TJ.length],emissiveIntensity:0.45,roughness:0.3,metalness:0.5}),Y9=new U0(new sJ(0.2,0.2,0.045,12),I8);Y9.position.set(B0+(c0===0?-0.4:0.4),0.9+xJ*0.05,-3.8899999999999997),Q.add(Y9)}A9.push({orb:CJ,phase:c0*0.5})}),[-3.25,3.25].forEach((B0)=>{let c0=new W8;c0.position.set(B0,2.55,-3.92);let WJ=new f0({color:16766720,emissive:16755200,emissiveIntensity:2.2}),o0=new U0(new _0(0.08,0.78,0.05),WJ);c0.add(o0);let fJ=new U0(new _0(0.32,0.08,0.05),WJ);fJ.position.y=0.28,c0.add(fJ);let jJ=new U0(new _0(0.32,0.08,0.05),WJ);jJ.position.y=-0.28,c0.add(jJ);let CJ=new U0(new _0(0.18,0.06,0.05),WJ);CJ.position.set(-0.05,0.1,0),c0.add(CJ);let TJ=new U0(new _0(0.18,0.06,0.05),WJ);TJ.position.set(0.05,-0.1,0),c0.add(TJ),Q.add(c0)}),Q.userData=Q.userData||{},Q.userData.wallAnims={heroCoinGroup:d0,sideColumns:A9,frameGoldMat:V0,marquee:i9};let U6=new f0({color:1706037,roughness:0.4,metalness:0.7,emissive:656416,emissiveIntensity:0.1}),o9=new f0({color:3351142,roughness:0.25,metalness:0.9,emissive:2232661,emissiveIntensity:0.2}),l8=3.2;[-3.75,3.75].forEach((B0,c0)=>{let WJ=new U0(new _0(0.4,l8,6.4),U6);WJ.position.set(B0,0.5+l8/2,0),WJ.castShadow=!0,Q.add(WJ);let o0=new U0(new _0(0.42,l8,0.05),o9);o0.position.set(B0,0.5+l8/2,3.15),Q.add(o0);let fJ=new U0(new _0(0.44,l8*0.8,0.03),new f0({color:16766720,emissive:11171584,emissiveIntensity:0.3,metalness:0.92,roughness:0.15}));fJ.position.set(B0,0.5+l8*0.6,3.16),Q.add(fJ);let jJ=new bJ({color:524818,transparent:!0,opacity:0.4});for(let CJ=0;CJ<4;CJ++){let TJ=new U0(new _0(0.04,0.55,0.01),jJ);TJ.position.set(B0+(c0===0?0.1:-0.1),2.3+CJ*0.7,-1.5),Q.add(TJ)}});let q6=new a7({color:12312063,transparent:!0,opacity:0.06,roughness:0.02,metalness:0,side:BJ,depthWrite:!1}),S7=new U0(new _0(6.8,2.2,0.04),q6);S7.position.set(0,2.3,2.4),S7.renderOrder=4,Q.add(S7);let j7=new U0(new _0(7.3,2.5,0.06),new a7({color:14531583,transparent:!0,opacity:0.04,roughness:0.05,metalness:0,side:BJ,depthWrite:!1}));j7.position.set(0,2.5,-3.5),j7.renderOrder=3,Q.add(j7);let MQ=new f0({color:8943564,roughness:0.2,metalness:0.8,emissive:4469674,emissiveIntensity:0.1});[[-3.65,2.4],[3.65,2.4]].forEach(([B0,c0])=>{let WJ=new U0(new _0(0.06,2.3,0.06),MQ);WJ.position.set(B0,2.3,c0),Q.add(WJ)});let VQ=3,B=[{type:"hole",width:1},{type:"win",width:4.4},{type:"hole",width:1}],g=[],t=-3.2;for(let B0=0;B0<VQ;B0++){let c0=B[B0].width;g.push({startX:t,endX:t+c0,centerX:t+c0/2,type:B[B0].type,width:c0}),t+=c0}let i=new f0({color:13080,roughness:0.7,metalness:0.1,emissive:65348,emissiveIntensity:0.15}),o=new f0({color:65382,emissive:65348,emissiveIntensity:0.8,transparent:!0,opacity:0.35,side:BJ}),P0=new f0({color:65416,emissive:65348,emissiveIntensity:1.5,transparent:!0,opacity:0.5}),j0=new f0({color:65416,emissive:65348,emissiveIntensity:3}),z0=new f0({color:52292,emissive:65348,emissiveIntensity:2,transparent:!0,opacity:0.7});g.forEach((B0)=>{if(B0.type!=="win")return;let c0=new U0(new _0(B0.width-0.04,0.5,1.2),i);c0.position.set(B0.centerX,0.25,2.6),Q.add(c0);let WJ=new U0(new _0(B0.width-0.06,0.02,1.18),o);WJ.position.set(B0.centerX,0.42,2.6),Q.add(WJ);let o0=new U0(new _0(B0.width-0.04,0.008,1.2),P0);o0.position.set(B0.centerX,0.435,2.6),Q.add(o0);for(let CJ of[-1,1]){let TJ=new U0(new _0(B0.width-0.02,0.04,0.05),z0);TJ.position.set(B0.centerX,0.53,2.6+CJ*0.58),Q.add(TJ)}for(let CJ of[-1,1]){let TJ=new U0(new _0(0.04,0.04,1.2),z0);TJ.position.set(B0.centerX+CJ*(B0.width/2-0.02),0.53,2.6),Q.add(TJ)}let fJ=new f0({color:65348,emissive:65314,emissiveIntensity:0.4,transparent:!0,opacity:0.2}),jJ=new U0(new _0(B0.width-0.25,0.35,0.9),fJ);jJ.position.set(B0.centerX,0.35,2.6),Q.add(jJ)});let v0=new f0({color:655368,roughness:1,metalness:0,emissive:3342353,emissiveIntensity:0.2}),g0=new f0({color:16711731,emissive:16711714,emissiveIntensity:0.6,transparent:!0,opacity:0.3,side:BJ}),t0=new f0({color:16720452,emissive:16711731,emissiveIntensity:1,transparent:!0,opacity:0.4}),$J=new f0({color:16720452,emissive:16711748,emissiveIntensity:3}),p0=new f0({color:16711731,emissive:16711714,emissiveIntensity:2,transparent:!0,opacity:0.7});g.forEach((B0)=>{if(B0.type!=="hole")return;let c0=new U0(new _0(B0.width-0.04,0.65,1.2),v0);c0.position.set(B0.centerX,0.175,2.6),Q.add(c0);let WJ=new U0(new _0(B0.width-0.06,0.02,1.18),g0);WJ.position.set(B0.centerX,0.42,2.6),Q.add(WJ);let o0=new U0(new _0(B0.width-0.04,0.008,1.2),t0);o0.position.set(B0.centerX,0.435,2.6),Q.add(o0);for(let I8 of[-1,1]){let Y9=new U0(new _0(B0.width-0.02,0.04,0.05),p0);Y9.position.set(B0.centerX,0.53,2.6+I8*0.58),Q.add(Y9)}for(let I8 of[-1,1]){let Y9=new U0(new _0(0.04,0.04,1.2),p0);Y9.position.set(B0.centerX+I8*(B0.width/2-0.02),0.53,2.6),Q.add(Y9)}let fJ=new f0({color:4456465,emissive:16711714,emissiveIntensity:0.15,transparent:!0,opacity:0.15}),jJ=new U0(new _0(B0.width-0.25,0.45,0.9),fJ);jJ.position.set(B0.centerX,0.275,2.6),Q.add(jJ);let CJ=new bJ({color:16711714,transparent:!0,opacity:0.2,side:BJ}),TJ=new U0(new _0(0.2,0.003,0.2),CJ);TJ.position.set(B0.centerX,0.53,2.6),TJ.rotation.y=Math.PI/4,Q.add(TJ);let xJ=new U0(new _0(0.2,0.003,0.2),CJ);xJ.position.set(B0.centerX,0.53,2.6),xJ.rotation.y=-Math.PI/4,Q.add(xJ)});let OJ=new f0({color:1706037,roughness:0.3,metalness:0.7,emissive:656416,emissiveIntensity:0.12}),LJ=new U0(new _0(7.8,0.4,1),OJ);LJ.position.set(0,0.3,3.3),LJ.castShadow=!0,Q.add(LJ);let PJ=new f0({color:2756672,roughness:0.95,metalness:0.02,emissive:1706544,emissiveIntensity:0.15}),DJ=new U0(new _0(7.5,0.02,0.8),PJ);DJ.position.set(0,0.49,3.25),Q.add(DJ);let dJ=new f0({color:16766720,roughness:0.1,metalness:0.9,emissive:8939008,emissiveIntensity:0.3}),S0=new U0(new _0(7.6,0.04,0.08),dJ);S0.position.set(0,0.53,3.03),Q.add(S0);let eJ=new f0({color:2232644,roughness:0.2,metalness:0.8,emissive:1116211,emissiveIntensity:0.3,side:BJ}),HJ=6.7,K8=0.55,D8=0.5,y8=0.35,X9=new _0(HJ,K8,D8),qJ=new U0(X9,eJ);qJ.position.set(0,0.6799999999999999,2.5),qJ.rotation.x=y8,qJ.castShadow=!0,qJ.receiveShadow=!0,Q.add(qJ);let _J=new f0({color:13404415,emissive:11158783,emissiveIntensity:2}),L8=new U0(new _0(HJ-0.1,0.015,0.015),_J);L8.position.set(0,0.9199999999999999,2.42),Q.add(L8);let FJ=k+C/2+0.2,E8=1.55,z8=0.18,a9=E8-FJ,_X=new f0({color:3807829,roughness:0.6,metalness:0.3,emissive:1706544,emissiveIntensity:0.2}),G6=new U0(new _0(6.5,0.02,a9),_X);G6.position.set(0,0.54-z8/2,FJ+a9/2),G6.rotation.x=Math.atan2(z8,a9),G6.receiveShadow=!0,Q.add(G6);let hK=new f0({color:13404415,emissive:11158783,emissiveIntensity:1}),vK=new U0(new _0(6.5,0.03,0.03),hK);vK.position.set(0,0.55,FJ),Q.add(vK);let bK=new U0(new _0(6.5,0.03,0.03),hK);bK.position.set(0,0.54-z8+0.01,E8),Q.add(bK);let CX=new f0({color:4517631,emissive:2280703,emissiveIntensity:1.2});[[-3.2,-2.6,4.5],[3.2,-2.6,4.5]].forEach(([B0,c0,WJ])=>{let o0=new U0(new _0(0.02,0.02,WJ),CX);o0.position.set(B0,0.8,c0),Q.add(o0)}),J.add(Q);let BQ=0;function TX(B0){let c0=Math.sin(B0*0.6)*(y-0.2);BQ=c0;let WJ=B0*r,o0=Math.sin(WJ),fJ=o0>0?Math.pow(o0,1.3):-Math.pow(-o0,0.7),jJ=k+fJ*L;N0.position.x=c0,b0.position.x=c0,x0.position.x=c0,x0.position.z=A,x0.position.y=0.5+(a-0.5)/2,x0.scale.y=1+Math.sin(B0*0.6)*0.1,l0.position.x=c0,l0.position.z=A;let CJ=0.8+0.2*Math.sin(B0*1.2);l0.material.opacity=0.1+0.15*CJ,N0.position.y=a+Math.sin(B0*2+c0)*0.02,b0.position.y=N0.position.y,N0.rotation.x=B0*0.5,N0.rotation.y=B0*0.3,b0.rotation.x=N0.rotation.x,b0.rotation.y=N0.rotation.y,E0=W0,W0=jJ;let TJ=Math.max(B0-M0,0.001);if(M0<0)y0=0;else y0=(W0-E0)/TJ;M0=B0,e0.position.z=W0-k,F0.position.x=BQ;let xJ=Q.userData&&Q.userData.wallAnims;if(xJ){if(xJ.heroCoinGroup)xJ.heroCoinGroup.rotation.y=B0*0.28;if(xJ.marquee){let I8=0.5+0.5*Math.sin(B0*1.2);xJ.marquee.scale.set(1+0.02*I8,1+0.02*I8,1)}if(xJ.sideColumns)for(let I8 of xJ.sideColumns)I8.orb.material.opacity=0.6+0.4*Math.sin(B0*2+I8.phase);if(xJ.frameGoldMat)xJ.frameGoldMat.emissiveIntensity=1.6+1*Math.sin(B0*0.9)}}return{group:Q,width:7,depth:6,height:0.5,surfaceY:0.54,backZ:-2.75,frontDropZ:1.6,leftX:-3.2,rightX:3.2,winZ:2.6,zones:g,getZoneType(B0){for(let c0 of g)if(B0>=c0.startX&&B0<c0.endX)return c0.type;return"hole"},mechX:0,get dropX(){return BQ},dropZ:H0,dropHeight:3.5,updateMechanism:TX,get shelfZ(){return W0},get shelfVelocity(){return y0},get shelfFrontZ(){return W0+C/2},get shelfBackZ(){return W0-C/2},shelfSurfaceY:c,shelfThickness:j,slotCenterZ:$0,slotBackZ:K0,slotFrontZ:l,slotWidth:J0,slotHalfWidth:J0/2,shelfAmplitude:L,shelfSpeed:r,shelfNeutralZ:k,shelfDepth:C,slopeStartZ:FJ,slopeEndZ:E8,slopeDrop:z8}}var $9=0.06,AG=0.5,PG=0.22,GQ=0.01,wG=0.2,_G=0.28,NQ=0.008,K6=6000,JX=0.987,N8=0.3,QX=14,$X=0.1,KX=0.35,FQ=2.5,Q8=0.28,CG=0.25,TG=0.15,WX=0,SG=6,z9=0.6;function ZX(J,Q,$=0){WX=$;let K=[],W=new W8;J.add(W);function Z(e,a,y,A,x,p){e.beginPath();for(let u=0;u<A*2;u++){let T=u%2===0?x:p,N0=u*Math.PI/A-Math.PI/2,C0=a+Math.cos(N0)*T,b0=y+Math.sin(N0)*T;if(u===0)e.moveTo(C0,b0);else e.lineTo(C0,b0)}e.closePath(),e.fill()}function X(e){let y=document.createElement("canvas");y.width=128,y.height=128;let A=y.getContext("2d"),x=64,p=64,u=62,T=[["#fff3c0","#f2c94c","#b8860b"],["#fffbe6","#ffe27a","#c9951e"],["#ffe9a3","#f0b63a","#a06a12"]],[N0,C0,b0]=T[e%T.length],T0=A.createRadialGradient(x-12,p-12,u*0.15,x,p,u);T0.addColorStop(0,N0),T0.addColorStop(0.65,C0),T0.addColorStop(1,b0),A.fillStyle=T0,A.beginPath(),A.arc(x,p,u,0,Math.PI*2),A.fill(),A.strokeStyle="rgba(90,60,10,0.9)",A.lineWidth=7,A.beginPath(),A.arc(x,p,u-2,0,Math.PI*2),A.stroke(),A.strokeStyle="rgba(255,246,200,0.55)",A.lineWidth=2,A.beginPath(),A.arc(x,p,u-9,0,Math.PI*2),A.stroke(),A.strokeStyle="rgba(255,255,255,0.35)",A.lineWidth=3,A.beginPath(),A.arc(x,p,u*0.6,0,Math.PI*2),A.stroke(),A.strokeStyle="rgba(90,60,10,0.45)",A.lineWidth=2;for(let XJ=0;XJ<48;XJ++){let l0=XJ/48*Math.PI*2;A.beginPath(),A.moveTo(x+Math.cos(l0)*(u-2),p+Math.sin(l0)*(u-2)),A.lineTo(x+Math.cos(l0)*(u-8),p+Math.sin(l0)*(u-8)),A.stroke()}if(A.fillStyle="rgba(110,68,0,0.95)",A.textAlign="center",A.textBaseline="middle",e%3===0)A.font="900 62px Arial",A.fillText("1",x,p+5);else if(e%3===1)Z(A,x,p-2,5,u*0.42,u*0.19);else A.font="900 58px Arial",A.fillText("C",x,p+5);A.strokeStyle="rgba(255,255,255,0.22)",A.lineWidth=3,A.beginPath(),A.arc(x-7,p-7,u*0.78,Math.PI,Math.PI*1.7),A.stroke();let x0=new g8(y);return x0.colorSpace=f8,x0}function Y(e){let A=document.createElement("canvas");A.width=256,A.height=128;let x=A.getContext("2d"),p=x.createLinearGradient(0,0,0,128);p.addColorStop(0,e%2?"#3ddc84":"#2ecf7e"),p.addColorStop(1,e%2?"#1aa864":"#0f8f52"),x.fillStyle=p,x.fillRect(0,0,256,128),x.strokeStyle="rgba(255,255,255,0.85)",x.lineWidth=5,x.strokeRect(7,7,242,114),x.strokeStyle="rgba(0,80,40,0.8)",x.lineWidth=2,x.strokeRect(13,13,230,102),x.fillStyle="rgba(255,255,255,0.95)",x.textAlign="center",x.textBaseline="middle",x.font="900 92px Arial",x.fillText("$",128,68),x.font="900 26px Arial",x.fillText("10",30,26),x.fillText("10",226,102);let u=new g8(A);return u.colorSpace=f8,u}function H(e){let A=document.createElement("canvas");A.width=128,A.height=176;let x=A.getContext("2d");x.fillStyle="#fdf6ec",x.fillRect(0,0,128,176),x.strokeStyle="rgba(60,20,80,0.8)",x.lineWidth=6,x.strokeRect(4,4,120,168),x.strokeStyle="rgba(60,20,80,0.35)",x.lineWidth=2,x.strokeRect(12,12,104,152);let p=e===0||e===1;x.fillStyle=p?"#e02a4d":"#2b2b33";let u=["♥","♦","♠","♣"];x.font="70px serif",x.fillText(u[e%4],64,92),x.font="900 30px serif",x.fillText("A",26,28),x.fillText("A",102,148);let T=new g8(A);return T.colorSpace=f8,T}let U=new sJ(Q8*0.97,Q8,$9,32),E=new _0(AG,GQ,PG),O=new _0(wG,NQ,_G),q=[0,1,2].map((e)=>new f0({map:X(e),roughness:0.3,metalness:0.9,emissive:5583616,emissiveIntensity:0.07})),R=new f0({color:13212218,roughness:0.35,metalness:0.92,emissive:5583616,emissiveIntensity:0.07}),M={coin:[0,1,2].map((e)=>[R,q[e],q[e]]),bill:[0,1].map((e)=>new f0({map:Y(e),roughness:0.4,metalness:0.05,emissive:13073,emissiveIntensity:0.1})),card:[0,1,2,3].map((e)=>new f0({map:H(e),roughness:0.65,metalness:0,emissive:2228292,emissiveIntensity:0.04}))};function z(e){if(e==="coin")return Q8;if(e==="dollar")return CG;return TG}function D(e){if(e==="coin")return $9/2;if(e==="dollar")return GQ/2;return NQ/2}let G=new Map;function S(){G.clear()}function I(e,a){return e*73856093^a*19349663}function V(e){let a=Math.floor(e.x/z9),y=Math.floor(e.z/z9),A=I(a,y),x=G.get(A);if(!x)x=[],G.set(A,x);x.push(e)}function w(e){let a=Math.floor(e.x/z9),y=Math.floor(e.z/z9),A=[];for(let x=-1;x<=1;x++)for(let p=-1;p<=1;p++){let u=G.get(I(a+x,y+p));if(u)for(let T=0;T<u.length;T++)A.push(u[T])}return A}function _(e,a,y){let A=new U0(U,M.coin[Math.floor(Math.random()*3)]);return A.position.set(e,y,a),A.rotation.y=Math.random()*Math.PI*2,A.castShadow=!0,A.receiveShadow=!0,W.add(A),A}function C(e,a,y){let A=new U0(E,M.bill[Math.floor(Math.random()*2)]);return A.position.set(e,y,a),A.rotation.y=Math.random()*Math.PI*2,A.castShadow=!0,A.receiveShadow=!0,W.add(A),A}function k(e,a){let y=Q.surfaceY+NQ/2+0.01,A=M.card[Math.floor(Math.random()*4)],x=new U0(O,A);x.position.set(e,y,a),x.rotation.y=Math.random()*Math.PI*2,x.castShadow=!0,x.receiveShadow=!0,W.add(x);let p=`card_${++WX}`;return x.userData={isCard:!0,cardId:p,collected:!1},x}function L(e,a,y,A,x="sliding"){let p;if(e==="card")p=k(a,y),A=p.position.y,x="floating";else if(e==="dollar")p=C(a,y,A);else p=_(a,y,A);let u={mesh:p,type:e,x:a,y:A,z:y,vx:0,vy:0,vz:0,state:x,spin:0,_dropTime:0,_slotTimer:0};return K.push(u),u}function r(e=55,a=6){c();let y=Math.floor(e*0.6);for(let A=0;A<Math.min(y,K6);A++){let x=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),p=Q.shelfBackZ+0.2+Math.random()*(Q.shelfAmplitude*1.2),u=Q.shelfSurfaceY+$9/2,T=L("coin",x,p,u,"sliding");T.onShelf=!0,T.vz=(Math.random()-0.5)*0.05}for(let A=0;A<Math.min(e-y,K6);A++){let x=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),p=Q.frontDropZ-0.5+Math.random()*0.8;L("coin",x,p,Q.surfaceY+$9/2,"sliding")}for(let A=0;A<Math.min(a,K6-e);A++){let x=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),p=Q.shelfBackZ+0.3+Math.random()*(Q.shelfDepth*0.5),u=L("dollar",x,p,Q.shelfSurfaceY+GQ/2,"sliding");u.onShelf=!0}for(let A=0;A<3;A++){let x=Q.leftX+0.5+Math.random()*(Q.rightX-Q.leftX-1),p=Q.shelfBackZ+0.5+Math.random()*(Q.shelfDepth*0.5),u=L("card",x,p);u.vz=0.06+Math.random()*0.07}for(let A=0;A<8;A++)J0(),K0(),l();for(let A of K)if(A.state==="sliding"&&A.type!=="card")A.y=Math.max(A.y,$0(A));j(2);for(let A=0;A<10;A++)J0(),K0(),l();for(let A of K)if(A.state==="sliding"&&A.type!=="card")A.y=Math.max(A.y,$0(A))}function j(e){for(let a=0;a<e;a++){let y=Q.leftX+0.8+Math.random()*(Q.rightX-Q.leftX-1.6),A=Q.backZ+0.5+Math.random()*(Q.frontDropZ-Q.backZ-2),x=6+Math.floor(Math.random()*6);for(let p=0;p<x;p++){let u=Math.sin(p*0.3)*0.006,T=Math.cos(p*0.4)*0.006,N0=Q.surfaceY+$9/2+p*($9+0.001),C0=L("coin",y+u,A+T,N0,"sliding");C0.vy=0}}}function c(){K.forEach((e)=>W.remove(e.mesh)),K.length=0}function $0(e){let a=D(e.type);if(e.onShelf)return Q.shelfSurfaceY+a;if(e.z>Q.slopeStartZ&&e.z<Q.frontDropZ){let y=Math.max(0,Math.min(1,(e.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ)));return Q.surfaceY+a-y*Q.slopeDrop}return Q.surfaceY+a}function s(e){let a=Q8*4;for(let y=0;y<K.length;y++){let A=K[y];if(A===e||A.onShelf||A.state!=="sliding")continue;let x=A.x-e.x,p=A.z-e.z,u=Math.sqrt(x*x+p*p);if(u<a&&u>0.01){let T=(1-u/a)*0.3;A.vx+=x/u*T,A.vz+=p/u*T*0.5}}}function J0(){S();for(let a=0;a<K.length;a++){let y=K[a];if(y.state==="dropping"||y.state==="falling")continue;V(y)}let e=new Set;for(let a=0;a<K.length;a++){let y=K[a];if(y.state==="dropping"||y.state==="falling")continue;if(y.state==="floating")continue;let A=w(y);for(let x=0;x<A.length;x++){let p=A[x];if(p===y)continue;let u=y<p?a:K.indexOf(p),T=a<u?`${a}:${u}`:`${u}:${a}`;if(e.has(T))continue;e.add(T);let N0=z(y.type),C0=z(p.type),b0=N0+C0+0.02,T0=p.x-y.x,x0=p.z-y.z,XJ=Math.sqrt(T0*T0+x0*x0);if(XJ<b0&&XJ>0.001){let l0=b0-XJ,QJ=T0/XJ,e0=x0/XJ;if(y.state==="falling"&&p.state==="sliding")p.vz+=l0*0.3,p.vx+=(Math.random()-0.5)*l0*0.15,y.vx-=QJ*l0*0.15,y.vz-=e0*l0*0.15;else if(p.state==="falling"&&y.state==="sliding")y.vz+=l0*0.3,y.vx+=(Math.random()-0.5)*l0*0.15,p.vx-=QJ*l0*0.15,p.vz-=e0*l0*0.15;else{let NJ=l0*0.3;y.x-=QJ*NJ,y.z-=e0*NJ,p.x+=QJ*NJ,p.z+=e0*NJ;let GJ=(p.vx-y.vx)*QJ+(p.vz-y.vz)*e0;if(GJ<0){let v=GJ*N8*0.5;y.vx+=v*QJ,y.vz+=v*e0,p.vx-=v*QJ,p.vz-=v*e0}}}}}for(let a=0;a<K.length;a++){let y=K[a];if(y.type==="card")continue;if(Math.abs(y.vx)>FQ)y.vx=Math.sign(y.vx)*FQ;if(Math.abs(y.vz)>FQ)y.vz=Math.sign(y.vz)*FQ}}function K0(){let e=new Map;for(let y=0;y<K.length;y++){let A=K[y];if(A.type==="card"||A.state==="falling"||A.state==="dropping")continue;let x=Math.floor(A.x/z9),p=Math.floor(A.z/z9),u=I(x,p),T=e.get(u);if(!T)T=[],e.set(u,T);T.push(A)}let a=new Set;for(let y=0;y<K.length;y++){let A=K[y];if(A.type==="card"||A.state==="falling"||A.state==="dropping")continue;let x=D(A.type),p=Math.floor(A.x/z9),u=Math.floor(A.z/z9);for(let T=-1;T<=1;T++)for(let N0=-1;N0<=1;N0++){let C0=e.get(I(p+T,u+N0));if(!C0)continue;for(let b0=0;b0<C0.length;b0++){let T0=C0[b0];if(T0===A)continue;let x0=y<K.indexOf(T0)?`${y}:${K.indexOf(T0)}`:`${K.indexOf(T0)}:${y}`;if(a.has(x0))continue;a.add(x0);let XJ=z(T0.type),l0=z(A.type),QJ=T0.x-A.x,e0=T0.z-A.z,NJ=Math.sqrt(QJ*QJ+e0*e0);if(NJ>l0+XJ+0.01)continue;let GJ=D(T0.type),v=T0.y-GJ,SJ=A.y+x,JJ=T0.y+GJ,h=A.y-x;if(SJ>v+0.002&&h<v&&h>v-$9*2){let F=v-x;if(A.y>F+0.001){if(A.y=F,A.vy>0)A.vy=0}}if(JJ>h+0.002&&v<h&&v>h-$9*2){let F=h-GJ;if(T0.y>F+0.001){if(T0.y=F,T0.vy>0)T0.vy=0}}if(NJ<l0+XJ){let F=x+GJ-Math.abs(A.y-T0.y);if(F>0.001&&Math.abs(A.y-T0.y)<x+GJ){let N=F*0.5;if(A.y<T0.y)A.y-=N*0.5,T0.y+=N*0.5;else A.y+=N*0.5,T0.y-=N*0.5}}}}}}function l(){for(let e=0;e<K.length;e++){let a=K[e];if(a.state==="dropping"||a.state==="falling")continue;let y=z(a.type),A=Math.max(0,(a.z-Q.backZ)/(Q.frontDropZ-Q.backZ)),x=Q.leftX+y+A*0.05,p=Q.rightX-y-A*0.05;if(a.x<x)a.x=x,a.vx=Math.abs(a.vx)*N8*0.5;if(a.x>p)a.x=p,a.vx=-Math.abs(a.vx)*N8*0.5;if(a.z<Q.backZ+y)a.z=Q.backZ+y,a.vz=Math.abs(a.vz)*N8;if(a.onShelf&&a.z<Q.shelfBackZ+y+0.03)a.z=Q.shelfBackZ+y+0.03,a.vz=Math.abs(a.vz)*N8;if(!a.onShelf&&a.z<Q.backZ+y)a.z=Q.backZ+y,a.vz=Math.abs(a.vz)*N8}}function n(e){let a=Q.shelfFrontZ,y=Q.shelfBackZ-0.5,A=Math.max(0,Q.shelfVelocity)*0.8;for(let x=0;x<K.length;x++){let p=K[x];if(p.onShelf||p.state!=="sliding"||p.type==="card")continue;if(p.z>y&&p.z<a+1.5){let u=a-p.z,T=Math.max(0,1-u/2);p.vz+=A*T*e}}}function d(e=1,a="coin"){if(K.length>=K6){let u=[];for(let T=0;T<K.length&&u.length<3;T++)if(K[T].type!=="card"&&K[T].state==="sliding")u.push(T);u.reverse().forEach((T)=>{W.remove(K[T].mesh),K.splice(T,1)})}let y=Q.dropX+(Math.random()-0.5)*0.08,A=Q.dropZ,x=Q.dropHeight,p=L(a,y,A,x,"falling");return p.y=x,p.vy=-0.2,p.vz=(Math.random()-0.5)*0.05+e*0.02,p.vx=(Math.random()-0.5)*0.05,p.spin=6+Math.random()*3,p._dropTime=performance.now(),p}function H0(){let e={win:{coins:0,dollars:0,cards:[]},hole:{coins:0,dollars:0,cards:[]}},a=[];for(let y=0;y<K.length;y++){let A=K[y],x=A.z>Q.frontDropZ&&A.y<Q.surfaceY-0.05;if(A.z>Q.winZ||x){let p=Q.getZoneType(A.x);if(A.type==="card")e[p].cards.push(A.mesh.userData.cardId);else if(A.type==="dollar")e[p].dollars++;else e[p].coins++;a.push(y)}}return a.reverse().forEach((y)=>{W.remove(K[y].mesh),K.splice(y,1)}),e}function D0(e,a){let A=e/4;for(let p=0;p<4;p++){for(let u=0;u<K.length;u++){let T=K[u];if(T.type==="card"||T.state==="floating")continue;if(T.state==="falling"){T.vy-=QX*A,T.y+=T.vy*A,T.x+=T.vx*A,T.z+=T.vz*A;let N0=Math.abs(T.x)<Q.slotHalfWidth,C0=T.z>Q.slotBackZ&&T.z<Q.slotFrontZ,b0=!(N0&&C0),T0=D(T.type),x0=Q.shelfSurfaceY+T0,XJ=Q.surfaceY+T0;if(b0&&T.y<=x0){if(T.y=x0,T.vy*=-KX,Math.abs(T.vy)<=$X)T.vy=0,T.vx*=0.5,T.vz*=0.5,T.state="sliding",T.onShelf=!0,T.mesh.rotation.x=0,T.mesh.rotation.z=0}else if(T.y<=XJ){if(T.y=XJ,T.vy*=-KX,Math.abs(T.vy)<=$X)T.vy=0,T.vx*=0.5,T.vz*=0.5,T.state="sliding",T.onShelf=!1,T.mesh.rotation.x=0,T.mesh.rotation.z=0}}if(T.state==="dropping"){if(T.vy-=QX*A,T.x<Q.leftX+Q8)T.x=Q.leftX+Q8,T.vx=Math.abs(T.vx)*N8;if(T.x>Q.rightX-Q8)T.x=Q.rightX-Q8,T.vx=-Math.abs(T.vx)*N8;if(T.z>=Q.frontDropZ)T.vz+=4*A,T.vx*=0.98;else T.vx*=0.95,T.vz*=0.93;if(T.y+=T.vy*A,T.z+=T.vz*A,T.x+=T.vx*A,T.y<=Q.surfaceY+D(T.type)&&T.z<Q.frontDropZ){let N0=Q.surfaceY+D(T.type);if(T.z>Q.slopeStartZ&&T.z<Q.slopeEndZ){let C0=Math.max(0,Math.min(1,(T.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ)));N0=Q.surfaceY+D(T.type)-C0*Q.slopeDrop}T.y=N0,T.vy=0,T.vx*=0.3,T.vz*=0.3,T.state="sliding",T.onShelf=!1,T.mesh.rotation.x=0,T.mesh.rotation.z=0}}if(T.state==="sliding"){if(!T.onShelf&&T.type!=="card"){let N0=z(T.type),C0=T.x>Q.leftX+N0&&T.x<Q.rightX-N0,b0=T.z>Q.shelfBackZ+N0&&T.z<Q.shelfFrontZ-N0;if(C0&&b0)T.onShelf=!0,T.y=Q.shelfSurfaceY+D(T.type)}if(T.onShelf){let N0=Math.abs(T.x)<Q.slotHalfWidth,C0=T.z>Q.slotBackZ&&T.z<Q.slotFrontZ;if(performance.now()-(T._dropTime||0)<500||N0&&C0)T._slotTimer=(T._slotTimer||0)+A;else T.vz+=Q.shelfVelocity*A*1.5}if(T.x+=T.vx*A,T.z+=T.vz*A,T.vx*=JX,T.vz*=JX,Math.abs(T.vx)<0.001)T.vx=0;if(Math.abs(T.vz)<0.001)T.vz=0;if(T.onShelf){let N0=Q.shelfBackZ+Q8+0.03;if(T.z<N0)if(T.z=N0,Q.shelfVelocity>0)T.vz+=Q.shelfVelocity*0.6;else T.vz=0}if(T.onShelf){let N0=Q.shelfFrontZ-z(T.type);if(T.z>N0){if(T.state="dropping",T.onShelf=!1,T.vy=-0.1,T.vz<0.15)T.vz=0.15;s(T)}}if(T.onShelf){let N0=Math.abs(T.x)<Q.slotHalfWidth,C0=T.z>Q.slotBackZ&&T.z<Q.slotFrontZ;if(N0&&C0&&Q.shelfVelocity<-0.3&&(T._slotTimer||0)>0.3)T.onShelf=!1,T.state="falling",T.vy=-0.5,T._slotTimer=0}if(!T.onShelf&&T.z>Q.frontDropZ){if(T.state="dropping",T.vy=-0.3,T.vz<0.5)T.vz=0.5}if(!T.onShelf&&T.z>Q.shelfFrontZ+z(T.type)&&T.z<Q.frontDropZ){if(Math.abs(T.y-(Q.surfaceY+D(T.type)))<0.15){let C0=Math.max(0,Math.min(1,(T.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ))),b0=2+C0*3;T.vz+=b0*A;let T0=Q.surfaceY+D(T.type)-C0*Q.slopeDrop;if(T.y<T0+0.01)T.y=T0}}}}J0(),K0(),l();for(let u=0;u<K.length;u++){let T=K[u];if(T.state==="sliding"&&T.type!=="card"){let N0=$0(T);if(T.y<N0)T.y=N0}}n(A);for(let u=0;u<K.length;u++){let T=K[u];if(T.type==="card"||T.state==="dropping")continue;if(T.state==="falling"){if(T.x<Q.leftX+Q8)T.x=Q.leftX+Q8,T.vx=Math.abs(T.vx)*N8;if(T.x>Q.rightX-Q8)T.x=Q.rightX-Q8,T.vx=-Math.abs(T.vx)*N8;if(T.z<Q.backZ+Q8)T.z=Q.backZ+Q8,T.vz=Math.abs(T.vz)*N8}if(T.state==="sliding"&&T.onShelf){let N0=z(T.type);if(T.x<Q.leftX+N0+0.06)T.x=Q.leftX+N0+0.06,T.vx=Math.abs(T.vx)*N8;if(T.x>Q.rightX-N0-0.06)T.x=Q.rightX-N0-0.06,T.vx=-Math.abs(T.vx)*N8}}}let x=performance.now();for(let p=0;p<K.length;p++){let u=K[p];if(u.type==="card"||u.state==="floating"){u.z+=u.vz*e,u.y=Q.shelfSurfaceY+NQ/2+0.02+Math.sin(x*0.001+u.x)*0.01,u.mesh.rotation.y+=e*0.5,u.mesh.position.set(u.x,u.y,u.z);continue}if(u.state==="falling")u.mesh.rotation.y+=e*u.spin,u.mesh.rotation.x=Math.sin(x*0.01+u.x)*0.1,u.mesh.rotation.z=Math.cos(x*0.01+u.z)*0.1;else if(u.state==="dropping")u.mesh.rotation.x+=e*1.8,u.mesh.rotation.z+=e*1.1;else if(u.state==="sliding"){let T=z(u.type);if(u.mesh.rotation.x+=u.vz*e/T,u.mesh.rotation.z-=u.vx*e/T,Math.sqrt(u.vx*u.vx+u.vz*u.vz)>0.05)u.mesh.rotation.y+=u.vz*0.06*e;u.mesh.rotation.y*=0.94}u.mesh.position.set(u.x,u.y,u.z)}F0(a)}function F0(e){let a=K.filter((A)=>A.type!=="card").length,y=K.filter((A)=>A.type==="card").length;if(a<15&&K.length<K6-15){let A=15-a;for(let x=0;x<A;x++){let p=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),u="coin";if(Math.random()<0.12)u="dollar";else if(Math.random()<0.04&&y<SG){u="card";let C0=Q.shelfBackZ+0.5+Math.random()*(Q.shelfDepth*0.5),b0=L("card",p,C0);b0.vz=0.06+Math.random()*0.07;continue}let T=Q.shelfBackZ+0.2+Math.random()*(Q.shelfDepth*0.5),N0=L(u,p,T,Q.shelfSurfaceY+(u==="coin"?$9/2:GQ/2),"sliding");N0.onShelf=!0}}}return{initObjects:r,dropObject:d,collectFallen:H0,update:D0,clearObjects:c,group:W}}var TK={en:{coins:"coins",dollars:"dollars",total:"total",prestige:"prestige",coinsBtn:"Coins",dollarsBtn:"Dollars",dropCoin:"DROP COIN",dropDollar:"DROP BILL",dropSub:"SPACE to drop",costCoin:"-1 coin",costDollar:"-1 $",shop:"Shop",prestigeTab:"Prestige",shopTitle:"Upgrades",prestigePoints:"Prestige Points",prestigeSacrifice:"SACRIFICE PROGRESS",prestigeDesc:"Lose everything but gain permanent prestige points",pushPower:"Demon Push",pushPowerDesc:"Coins push with the force of the underworld",multiDrop:"Multi-Drop",multiDropDesc:"Drop multiple coins at once",autoDrop:"Auto Dealer",autoDropDesc:"A phantom dealer drops for you!",multiplier:"Devil Multiplier",multiplierDesc:"Multiplies all rewards by sacred fire",maxCoins:"Infinite Wallet",maxCoinsDesc:"Max coin capacity increased by spirits",regenSpeed:"Occult Regen",regenDesc:"Free coins arrive from beyond the grave",dollarMagnet:"Dollar Magnet",dollarMagnetDesc:"Multiplies your dollar earnings",luck:"Fortune's Favor",luckDesc:"WIN zones have a chance to roll bonus coins (2×–4×)",comboShield:"Combo Shield",comboShieldDesc:"Combo decays more slowly between drops",prestigeBoost:"Prestige Boost",prestigeBoostDesc:"Gain more prestige points per reset",level:"Lv.",max:"MAX",soulBonus:"Soul Pact",soulBonusDesc:"Start each life with +50% max coins",darkMultiplier:"Dark Multiplier",darkMultiplierDesc:"Permanent +1 reward multiplier per level",voidDollars:"Void Blessing",voidDollarsDesc:"Start with starting-game dollars",occultAuto:"Occult Auto-Drop",occultAutoDesc:"Auto-drop 2x faster (permanent)",saintGold:"Saint Blessing",saintGoldDesc:"Coin gains +4 per level (compounds with Dark Multiplier)",upgraded:"Upgraded! Lv.",notEnoughCoins:"Not enough coins!",notEnoughDollars:"Not enough dollars!",maxLevel:"Already max level!",prestigeUp:"Prestige up! Lv.",notEnoughPrestige:"Not enough prestige points",coinsEarned:"coins earned!",coinsLost:"coins lost to the void...",cardsLost:"card(s) lost!",comboText:"COMBO x",freeCoins:"free coins claimed!",prestigeGain:"PRESTIGE! +",prestigeTotal:" (Total: ",prestigeWait:"Earn more before prestiging (",prestigeCurrent:" pts current)",resetConfirm:"Reset all progress (except prestige)?",categoryEconomy:"⚙ ECONOMY",categoryPush:"⚒ PUSH",categoryCapacity:"\uD83E\uDEA3 CAPACITY",categoryLuck:"\uD83C\uDF40 LUCK",categoryCurrency:"\uD83D\uDCB1 CURRENCY",categoryMeta:"✨ META",buy:"BUY",buyMax:"BUY MAX",noFunds:"Out of Funds!",freeCoinsDesc:"The spirits of the casino offer you a second chance...",claimBonus:"CLAIM BONUS",nextDonation:"Next donation in ",help:"Help",wastedCoins:"coins wasted (max reached)",cardCollected:"Bonus card collected! #",cardBonus:"bonus reward!",milestone:"MILESTONE",milestoneReached:"Milestone reached! +",milestoneBonusSuffix:" free coins",milestone100:"First hundred",milestone500:"Half a grand",milestone1k:"Four digits",milestone5k:"Heavy wallet",milestone10k:"Ten thousand!",milestone50k:"Halfway to a fortune",milestone100k:"Six figures",milestone500k:"Half a million",milestone1m:"MILLIONAIRE",jackpot:"JACKPOT!",jackpotBonus:"Jackpot bonus: +",winStreak:"WIN STREAK",streakBroken:"Streak broken",statsTitle:"\uD83D\uDCCA LIFETIME RECORDS",statsPeakCoins:"Peak coins",statsPeakDollars:"Peak dollars",statsPeakCombo:"Peak combo",statsTotalDrops:"Total drops",statsJackpots:"JACKPOTS hit",statsMilestones:"Milestones cleared",statsBestStreak:"Best win streak",jackpotChance:"Jackpot's Favor",jackpotChanceDesc:"Increases the chance of hitting the JACKPOT!",goldenTouch:"Golden Touch",goldenTouchDesc:"Chance to double earned coin batches",gambleTitle:"⚡ RISK IT",gambleDesc:"Double or Nothing! 50/50 chance",gambleWin:"YOU WON!",gambleLose:"YOU LOST!",gambleGain:"Profit: +",gambleLoss:"Loss: -",gambleWager:"Wager:",gambleMax:"MAX",gambleHalf:"HALF",comboBig:"COMBO"},fr:{coins:"pieces",dollars:"dollars",total:"total",prestige:"prestige",coinsBtn:"Pieces",dollarsBtn:"Dollars",dropCoin:"LACHER PIECE",dropDollar:"LACHER BILLET",dropSub:"ESPACE pour drop",costCoin:"-1 piece",costDollar:"-1 $",shop:"Boutique",prestigeTab:"Prestige",shopTitle:"Ameliorations",prestigePoints:"Points de Prestige",prestigeSacrifice:"SACRIFIER LA PROGRESSION",prestigeDesc:"Perds tout mais gagne des points de prestige permanents",pushPower:"Poussee Demoniaque",pushPowerDesc:"Les pieces poussent avec la force des enfers",multiDrop:"Multi-Drop",multiDropDesc:"Lache plusieurs pieces physiques d'un coup",autoDrop:"Croupier Automatique",autoDropDesc:"Un croupier fantome drop pour toi !",multiplier:"Multiplicateur du Diable",multiplierDesc:"Multiplie toutes les recompenses par le feu sacre",maxCoins:"Portefeuille de l'Infini",maxCoinsDesc:"Capacite max augmente par les esprits",regenSpeed:"Regeneration Occulte",regenDesc:"Les pieces gratuites arrivent d'outre-tombe",dollarMagnet:"Aimant a Dollars",dollarMagnetDesc:"Multiplie tes gains en dollars",luck:"Faveur de la Fortune",luckDesc:"Les zones WIN ont une chance de donner un bonus (x2-x4)",comboShield:"Bouclier de Combo",comboShieldDesc:"Le combo s'estompe plus lentement entre les drops",prestigeBoost:"Gain de Prestige Accru",prestigeBoostDesc:"Gagne plus de points de prestige a chaque reset",level:"Niv.",max:"MAX",soulBonus:"Pacte des Ames",soulBonusDesc:"Commence chaque vie avec +50% de pieces max",darkMultiplier:"Multiplicateur Obscur",darkMultiplierDesc:"+1 multiplicateur de recompense permanent par niveau",voidDollars:"Benediction du Vide",voidDollarsDesc:"Commence avec des dollars d'entree de jeu",occultAuto:"Auto-Drop Occulte",occultAutoDesc:"Auto-drop 2x plus rapide (permanent)",saintGold:"Benediction des Saints",saintGoldDesc:"Gains de pieces +4 par niveau (se combine avec Multiplicateur Obscur)",upgraded:"Ameliore ! Niv.",notEnoughCoins:"Pas assez de pieces !",notEnoughDollars:"Pas assez de dollars !",maxLevel:"Deja max level !",prestigeUp:"Prestige up ! Niv.",notEnoughPrestige:"Pas assez de points de prestige",coinsEarned:"pieces gagnees !",coinsLost:"pieces perdues dans le vide...",cardsLost:"carte(s) perdue(s) !",comboText:"Combo x",freeCoins:"pieces gratuites !",prestigeGain:"PRESTIGE ! +",prestigeTotal:" (Total: ",prestigeWait:"Gagne plus avant de prestiger (",prestigeCurrent:" pts actuels)",resetConfirm:"Reinitialiser toute la progression (hors prestige) ?",categoryEconomy:"⚙ ECONOMIE",categoryPush:"⚒ POUSSEE",categoryCapacity:"\uD83E\uDEA3 CAPACITE",categoryLuck:"\uD83C\uDF40 CHANCE",categoryCurrency:"\uD83D\uDCB1 MONNAIE",categoryMeta:"✨ META",buy:"ACHETER",buyMax:"ACHETER MAX",noFunds:"Plus de fonds !",freeCoinsDesc:"Les esprits du casino t'offrent une seconde chance...",claimBonus:"RECLAMER LE BUTIN",nextDonation:"Prochain don dans ",help:"Aide",wastedCoins:"pieces gaspilees (max atteint)",cardCollected:"Carte bonus collectionnee ! #",cardBonus:"recompense bonus !",milestone:"JALON",milestoneReached:"Jalon atteint ! +",milestoneBonusSuffix:" pieces gratuites",milestone100:"Premiere centaine",milestone500:"Un demi-millier",milestone1k:"Quatre chiffres",milestone5k:"Portefeuille lourd",milestone10k:"Dix mille !",milestone50k:"A mi-chemin de la fortune",milestone100k:"Six chiffres",milestone500k:"Un demi-million",milestone1m:"MILLIONNAIRE",jackpot:"JACKPOT !",jackpotBonus:"Bonus jackpot : +",winStreak:"SERIE DE VICTOIRES",streakBroken:"Serie cassee",statsTitle:"\uD83D\uDCCA RECORDS A VIE",statsPeakCoins:"Pieces max",statsPeakDollars:"Dollars max",statsPeakCombo:"Combo max",statsTotalDrops:"Total de drops",statsJackpots:"JACKPOTS reussis",statsMilestones:"Jalons franchis",statsBestStreak:"Meilleure serie",jackpotChance:"Faveur du Jackpot",jackpotChanceDesc:"Augmente les chances de gagner le JACKPOT !",goldenTouch:"Touche Doree",goldenTouchDesc:"Chance de doubler les gains de pieces",gambleTitle:"⚡ RISQUE TOUT",gambleDesc:"Double ou Rien ! 50/50 de chance",gambleWin:"GAGNE !",gambleLose:"PERDU !",gambleGain:"Gain: +",gambleLoss:"Perte: -",gambleWager:"Mise:",gambleMax:"MAX",gambleHalf:"MOITIE",comboBig:"COMBO"}},OQ=localStorage.getItem("coinpusher_lang")||"en";function I0(J){return TK[OQ]&&TK[OQ][J]||TK.en[J]||J}function SK(){return OQ}function XX(J){OQ=J,localStorage.setItem("coinpusher_lang",J)}var IJ=Object.freeze({ECONOMY:"economy",PUSH:"push",CAPACITY:"capacity",LUCK:"luck",CURRENCY:"currency",META:"meta"}),jG=[{id:"pushPower",nameKey:"pushPower",descKey:"pushPowerDesc",icon:"\uD83D\uDC80",baseCost:10,costMultiplier:1.45,maxLevel:20,effect:(J)=>1+J*0.3,category:IJ.PUSH},{id:"multiDrop",nameKey:"multiDrop",descKey:"multiDropDesc",icon:"\uD83C\uDFB0",baseCost:25,costMultiplier:1.55,maxLevel:10,effect:(J)=>1+J,category:IJ.ECONOMY},{id:"autoDrop",nameKey:"autoDrop",descKey:"autoDropDesc",icon:"\uD83C\uDCCF",baseCost:60,costMultiplier:1.7,maxLevel:12,effect:(J)=>J*0.5,category:IJ.ECONOMY},{id:"multiplier",nameKey:"multiplier",descKey:"multiplierDesc",icon:"♦️",baseCost:40,costMultiplier:1.85,maxLevel:25,effect:(J)=>1+J*0.4,category:IJ.ECONOMY},{id:"maxCoins",nameKey:"maxCoins",descKey:"maxCoinsDesc",icon:"\uD83E\uDE99",baseCost:15,costMultiplier:1.35,maxLevel:40,effect:(J)=>100+J*30,category:IJ.CAPACITY},{id:"regenSpeed",nameKey:"regenSpeed",descKey:"regenDesc",icon:"⏳",baseCost:20,costMultiplier:1.5,maxLevel:20,effect:(J)=>Math.max(1,30-J*1.4),category:IJ.CAPACITY},{id:"dollarMagnet",nameKey:"dollarMagnet",descKey:"dollarMagnetDesc",icon:"\uD83D\uDCB5",baseCost:80,costMultiplier:1.6,maxLevel:15,effect:(J)=>1+J*0.3,category:IJ.CURRENCY},{id:"luck",nameKey:"luck",descKey:"luckDesc",icon:"\uD83C\uDF40",baseCost:200,costMultiplier:1.9,maxLevel:10,effect:(J)=>J*0.05,category:IJ.LUCK},{id:"comboShield",nameKey:"comboShield",descKey:"comboShieldDesc",icon:"\uD83D\uDEE1️",baseCost:120,costMultiplier:1.7,maxLevel:8,effect:(J)=>Math.min(8,2.5+J*0.6),category:IJ.CAPACITY},{id:"prestigeBoost",nameKey:"prestigeBoost",descKey:"prestigeBoostDesc",icon:"\uD83C\uDF1F",baseCost:500,costMultiplier:2,maxLevel:10,effect:(J)=>1+J*0.3,category:IJ.META},{id:"jackpotChance",nameKey:"jackpotChance",descKey:"jackpotChanceDesc",icon:"\uD83C\uDFB0",baseCost:350,costMultiplier:2,maxLevel:10,effect:(J)=>0.02+J*0.005,category:IJ.LUCK},{id:"goldenTouch",nameKey:"goldenTouch",descKey:"goldenTouchDesc",icon:"\uD83E\uDD32",baseCost:500,costMultiplier:2.1,maxLevel:10,effect:(J)=>J*0.04,category:IJ.LUCK}],K9=jG.map((J)=>({...J,get name(){return I0(J.nameKey)},get desc(){return I0(J.descKey)}}));function W6(J,Q){return Math.floor(J.baseCost*Math.pow(J.costMultiplier,Q))}function tJ(J,Q){return J.effect(Q)}function YX(J,Q,$,K=99){let W=[];for(let Z=0;Z<K;Z++){let X=Q+Z;if(X>=J.maxLevel)break;let Y=W6(J,X);if(Y>$)break;W.push(Y),$-=Y}return W}var HX=[{id:"soulBonus",nameKey:"soulBonus",descKey:"soulBonusDesc",icon:"\uD83D\uDC9C",baseCost:1,costMultiplier:2,maxLevel:10,effect:(J)=>1+J*0.5},{id:"darkMultiplier",nameKey:"darkMultiplier",descKey:"darkMultiplierDesc",icon:"\uD83C\uDF19",baseCost:3,costMultiplier:2.5,maxLevel:8,effect:(J)=>1+J},{id:"voidDollars",nameKey:"voidDollars",descKey:"voidDollarsDesc",icon:"\uD83D\uDCB5",baseCost:2,costMultiplier:2,maxLevel:10,effect:(J)=>J*50},{id:"occultAuto",nameKey:"occultAuto",descKey:"occultAutoDesc",icon:"\uD83D\uDD2E",baseCost:5,costMultiplier:3,maxLevel:5,effect:(J)=>1+J*0.4},{id:"saintGold",nameKey:"saintGold",descKey:"saintGoldDesc",icon:"⭐",baseCost:8,costMultiplier:3,maxLevel:5,effect:(J)=>1+J*4}],DQ=HX.map((J)=>({...J,get name(){return I0(J.nameKey)},get desc(){return I0(J.descKey)}}));function EQ(J,Q){return Math.floor(J.baseCost*Math.pow(J.costMultiplier,Q))}function UX(J,Q){return J.effect(Q)}function qX(J,Q){let $=J+Q*10;return Math.max(1,Math.floor(Math.sqrt($/50)))}function RQ(J){let Q={soulMultiplier:1,darkMultiplier:1,voidStartingDollars:0,occultSpeedBonus:1,saintMultiplier:1};if(!J.prestigeUpgrades)return Q;return HX.forEach(($)=>{let K=J.prestigeUpgrades[$.id]||0;if(K>0){let W=UX($,K);switch($.id){case"soulBonus":Q.soulMultiplier=W;break;case"darkMultiplier":Q.darkMultiplier=W;break;case"voidDollars":Q.voidStartingDollars=W;break;case"occultAuto":Q.occultSpeedBonus=W;break;case"saintGold":Q.saintMultiplier=W;break}}}),Q}function F8(J){try{let Q={schemaVersion:2,coins:J.coins,dollars:J.dollars,maxDollars:J.maxDollars,totalEarned:J.totalEarned,totalEarnedLifetime:J.totalEarnedLifetime||J.totalEarned,totalDropped:J.totalDropped,totalDollarsEarned:J.totalDollarsEarned||0,activeCurrency:J.activeCurrency||"coins",autoDropEnabled:J.autoDropEnabled??!1,upgrades:{...J.upgrades},prestigePoints:J.prestigePoints,prestigeUpgrades:{...J.prestigeUpgrades},collectedCards:J.collectedCards||[],dropCount:J.dropCount||0,lastDropTime:J.lastDropTime||0,regenCooldown:typeof J.regenCooldown==="number"?J.regenCooldown:30,isGameOver:!!J.isGameOver,peakCoins:J.peakCoins||0,peakDollars:J.peakDollars||0,peakCombo:J.peakCombo||0,bestWinStreak:J.bestWinStreak||0,winStreak:J.winStreak||0,milestonesHit:Array.isArray(J.milestonesHit)?J.milestonesHit:[],jackpotsHit:J.jackpotsHit||0,gameTime:J.gameTime||0,lastSave:Date.now()};localStorage.setItem("coinpusher3d_save",JSON.stringify(Q))}catch(Q){console.warn("Save failed:",Q)}}function GX(){try{let J=localStorage.getItem("coinpusher3d_save");if(!J)return null;let Q=JSON.parse(J);if(typeof Q.coins!=="number"||typeof Q.totalEarned!=="number")return null;return Q}catch(J){return console.warn("Load failed:",J),null}}function NX(J){setInterval(()=>{if(J)F8(J)},1e4)}function FX(){localStorage.removeItem("coinpusher3d_save")}function OX(){let J=GX(),Q=J?.prestigePoints||0,$=J?.prestigeUpgrades||{},K=RQ({prestigePoints:Q,prestigeUpgrades:$}),W=J?.upgrades||{},Z=W.maxCoins||0,X=tJ(K9[4],Z),H={coins:0,maxCoins:Math.floor(X*K.soulMultiplier),dollars:0,maxDollars:Math.max(10,K.voidStartingDollars||0),totalEarned:0,totalEarnedLifetime:0,totalDropped:0,totalDollarsEarned:0,upgrades:{},dropCount:0,lastDropTime:0,autoDropAccumulator:0,regenCooldown:30,_regenInitialized:!1,isGameOver:!1,gameTime:0,activeCurrency:J?.activeCurrency||"coins",autoDropEnabled:J?.autoDropEnabled??!1,prestigePoints:Q,prestigeUpgrades:{...$},collectedCards:J?.collectedCards||[],peakCoins:0,peakDollars:0,peakCombo:0,bestWinStreak:0,winStreak:0,milestonesHit:[],jackpotsHit:0};if(J){H.totalEarned=typeof J.totalEarned==="number"?J.totalEarned:0,H.totalEarnedLifetime=typeof J.totalEarnedLifetime==="number"?J.totalEarnedLifetime:H.totalEarned,H.totalDropped=typeof J.totalDropped==="number"?J.totalDropped:0,H.totalDollarsEarned=typeof J.totalDollarsEarned==="number"?J.totalDollarsEarned:0,H.upgrades=W,H.maxDollars=Math.max(10,J.maxDollars||0);let U=typeof J.coins==="number"?J.coins:80;H.coins=Math.min(Math.max(U,80),H.maxCoins);let E=typeof J.dollars==="number"?J.dollars:0;if(H.dollars=Math.min(Math.max(E,10),H.maxDollars),typeof J.dropCount==="number")H.dropCount=J.dropCount;if(typeof J.lastDropTime==="number")H.lastDropTime=J.lastDropTime;if(typeof J.regenCooldown==="number")H.regenCooldown=J.regenCooldown;if(typeof J.isGameOver==="boolean")H.isGameOver=J.isGameOver;if(typeof J.peakCoins==="number")H.peakCoins=J.peakCoins;if(typeof J.peakDollars==="number")H.peakDollars=J.peakDollars;if(typeof J.peakCombo==="number")H.peakCombo=J.peakCombo;if(typeof J.bestWinStreak==="number")H.bestWinStreak=J.bestWinStreak;if(typeof J.winStreak==="number")H.winStreak=J.winStreak;if(Array.isArray(J.milestonesHit))H.milestonesHit=J.milestonesHit;if(typeof J.jackpotsHit==="number")H.jackpotsHit=J.jackpotsHit;if(typeof J.gameTime==="number")H.gameTime=J.gameTime}else H.coins=80,H.dollars=10,H.maxDollars=10;return H}function DX(J,Q){if(J.coins<Q||Q<=0)return{success:!1,reason:"not_enough_coins"};let $=Math.random()<0.5;if($)J.coins+=Q;else J.coins-=Q;return J.totalDropped+=Q,{success:!0,win:$,wager:Q,newBalance:Math.floor(J.coins)}}function $8(J,Q){return J.upgrades[Q]||0}function W9(J){if(J._cachedStats&&J._cachedStatsKey!==void 0){let c=J._cachedStatsKey;if(c.upgradesRef===J.upgrades&&c.prestigeUpgradesRef===J.prestigeUpgrades&&c.activeCurrency===J.activeCurrency&&c.autoDropEnabled===J.autoDropEnabled)return J._cachedStats}let Q=(c)=>K9.find(($0)=>$0.id===c),$=$8(J,"pushPower"),K=$8(J,"multiDrop"),W=$8(J,"autoDrop"),Z=$8(J,"multiplier"),X=$8(J,"maxCoins"),Y=$8(J,"regenSpeed"),H=$8(J,"dollarMagnet"),U=$8(J,"prestigeBoost"),E=$8(J,"luck"),O=$8(J,"comboShield"),q=$8(J,"jackpotChance"),R=$8(J,"goldenTouch"),M=RQ(J),z=tJ(Q("pushPower"),$),D=tJ(Q("multiDrop"),K),G=tJ(Q("autoDrop"),W)*M.occultSpeedBonus,S=tJ(Q("multiplier"),Z)*M.darkMultiplier*M.saintMultiplier,I=Math.floor(tJ(Q("maxCoins"),X)*M.soulMultiplier),V=tJ(Q("regenSpeed"),Y),w=tJ(Q("dollarMagnet"),H),_=tJ(Q("prestigeBoost"),U),C=tJ(Q("luck"),E),k=tJ(Q("comboShield"),O),L=tJ(Q("jackpotChance"),q),r=tJ(Q("goldenTouch"),R),j={pushPower:z,coinsPerDrop:D,autoDropRate:G,rewardMultiplier:S,maxCoins:I,regenCooldown:V,dollarMultiplier:w,prestigeBoost:_,luckChance:C,comboWindow:k,jackpotChance:L,goldenTouch:r};return J._cachedStats=j,J._cachedStatsKey={upgradesRef:J.upgrades,prestigeUpgradesRef:J.prestigeUpgrades,activeCurrency:J.activeCurrency,autoDropEnabled:J.autoDropEnabled},j}function yG(J){return W9(J).comboWindow||2.5}function EX(J,Q){let $=W9(J);if(J.activeCurrency==="dollars")return hG(J,$,Q);let K=1;if(J.coins<K)return{success:!1,reason:"no_coins"};J.coins-=K,J.totalDropped+=K,J.dropCount++,J.lastDropTime=Date.now();let W=0;if(J.dropCount%10===0)W=1,J.coins=Math.min(J.coins+W,J.maxCoins);if(Q)Q({spent:K,earned:0,total:J.coins,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:$.pushPower,currency:"coins",coinsPerDrop:$.coinsPerDrop,comboBonus:W});return{success:!0,spent:K,earned:0,total:J.coins,stats:$}}function hG(J,Q,$){if(J.dollars<1)return{success:!1,reason:"no_dollars"};if(J.dollars-=1,J.totalDropped+=1,J.dropCount++,J.lastDropTime=Date.now(),$)$({spent:1,earned:0,total:J.dollars,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:Q.pushPower*0.8,currency:"dollars",coinsPerDrop:1,comboBonus:0});return{success:!0,spent:1,earned:0,total:J.dollars,stats:Q}}function RX(J,Q,$=1){let K=K9.find((Y)=>Y.id===Q);if(!K)return{success:!1,reason:"not_found"};let W=0,Z=null;for(let Y=0;Y<$;Y++){let H=$8(J,Q);if(H>=K.maxLevel){Z="max_level";break}let U=W6(K,H);if(J.coins<U){Z="not_enough_coins";break}J.coins-=U,J.upgrades[Q]=H+1,W++}if(W===0)return{success:!1,reason:Z||"not_enough_coins"};let X=W9(J);return J.maxCoins=X.maxCoins,F8(J),{success:!0,newLevel:J.upgrades[Q],levelsPurchased:W,stats:X}}function kX(J,Q){let $=DQ.find((Z)=>Z.id===Q);if(!$)return{success:!1,reason:"not_found"};let K=J.prestigeUpgrades[Q]||0;if(K>=$.maxLevel)return{success:!1,reason:"max_level"};let W=EQ($,K);if(J.prestigePoints<W)return{success:!1,reason:"not_enough_prestige"};return J.prestigePoints-=W,J.prestigeUpgrades[Q]=(J.prestigeUpgrades[Q]||0)+1,F8(J),{success:!0,newLevel:J.prestigeUpgrades[Q]}}function MX(J){let Q=W9(J),$=Math.max(5,Math.floor(J.totalEarnedLifetime/100));return J.coins=Math.min(J.coins+$,J.maxCoins),J.regenCooldown=Q.regenCooldown,J._regenInitialized=!1,$}function VX(J){let Q=J.totalEarnedLifetime||J.totalEarned,$=J.totalDollarsEarned||0,K=J.upgrades.prestigeBoost||0,W=K>0?tJ(K9[7],K):1,Z=qX(Q,$),X=Math.floor(Z*W);if(X<=J.prestigePoints)return{success:!1,reason:"no_gain",current:J.prestigePoints};if(Q<100&&$<10)return{success:!1,reason:"no_gain",current:J.prestigePoints};let Y=[...J.collectedCards||[]],H={...J.prestigeUpgrades};J.upgrades={},J.dropCount=0,J.lastDropTime=0,J.autoDropAccumulator=0,J.regenCooldown=30,J._regenInitialized=!1,J.isGameOver=!1,J.gameTime=0,J.totalEarned=0,J.totalDropped=0,J.totalDollarsEarned=0,J.prestigePoints=X,J.prestigeUpgrades=H,J.collectedCards=Y;let U=J.prestigeUpgrades.soulBonus||0,E=J.prestigeUpgrades.voidDollars||0;return J.maxCoins=Math.floor(tJ(K9[4],0)*RQ(J).soulMultiplier),J.coins=Math.min(Math.max(25,Math.floor(25*(1+U*0.5))),J.maxCoins),J.maxDollars=Math.max(10,E*50),J.dollars=J.maxDollars,F8(J),{success:!0,prestigePoints:X,gained:X}}function BX(J,Q,$){J.gameTime+=Q;let K=W9(J);if(J.autoDropEnabled&&K.autoDropRate>0){J.autoDropAccumulator+=K.autoDropRate*Q;while(J.autoDropAccumulator>=1&&J.coins>=1){J.autoDropAccumulator-=1;let Z=1;if(J.coins>=Z){if(J.coins-=Z,J.totalDropped+=Z,J.dropCount++,J.lastDropTime=Date.now(),$)$({spent:Z,earned:0,total:J.coins,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:K.pushPower*0.7,isAuto:!0,currency:"coins",coinsPerDrop:K.coinsPerDrop,comboBonus:0})}}}if(J.coins<=0&&J.dollars<=0){if(!J._regenInitialized)J.regenCooldown=K.regenCooldown,J._regenInitialized=!0;if(J.regenCooldown-=Q,J.regenCooldown<=0)J.regenCooldown=0,J.isGameOver=!0}else J.isGameOver=!1,J._regenInitialized=!1,J.regenCooldown=K.regenCooldown;let W=yG(J)*1000;if(Date.now()-J.lastDropTime>W&&J.dropCount>0){if(J._comboDecayAccum=(J._comboDecayAccum||0)+Q,J._comboDecayAccum>=1)J.dropCount=Math.max(0,J.dropCount-Math.floor(J._comboDecayAccum)),J._comboDecayAccum=J._comboDecayAccum%1}else J._comboDecayAccum=0;return J}var vG={drop:{freq:800,type:"sine",duration:0.08,slide:-200},win:{freq:1200,type:"sine",duration:0.15,slide:400},lose:{freq:300,type:"sawtooth",duration:0.2,slide:-100},upgrade:{freq:600,type:"square",duration:0.12,slide:300},prestige:{freq:900,type:"sine",duration:0.4,slide:600},jackpot:{freq:1320,type:"sine",duration:0.6,slide:880,gain:0.22},bigwin:{freq:880,type:"triangle",duration:0.35,slide:660,gain:0.2}};var Z6=null,jK=(()=>{try{let J=localStorage.getItem("coinpusher_sound");return J===null?!0:J==="1"}catch(J){return!0}})();function LX(J){jK=!!J;try{localStorage.setItem("coinpusher_sound",J?"1":"0")}catch(Q){}}function zX(){return jK}function bG(){if(!jK)return null;if(!Z6){let J=window.AudioContext||window.webkitAudioContext;if(!J)return null;Z6=new J}if(Z6.state==="suspended")Z6.resume();return Z6}function Z9(J){let Q=vG[J];if(!Q)return;let $=bG();if(!$)return;let K=$.createOscillator(),W=$.createGain();K.type=Q.type,K.frequency.setValueAtTime(Q.freq,$.currentTime),K.frequency.exponentialRampToValueAtTime(Math.max(50,Q.freq+Q.slide),$.currentTime+Q.duration),W.gain.setValueAtTime(Q.gain||0.15,$.currentTime),W.gain.exponentialRampToValueAtTime(0.001,$.currentTime+Q.duration),K.connect(W),W.connect($.destination),K.start(),K.stop($.currentTime+Q.duration)}function IX(J,Q){let $={coinsDisplay:document.getElementById("coins-display"),dollarsDisplay:document.getElementById("dollars-display"),totalEarned:document.getElementById("total-earned"),dropBtn:document.getElementById("drop-btn"),dropIcon:document.querySelector("#drop-btn .btn-icon"),dropText:document.querySelector("#drop-btn .btn-text"),dropSub:document.querySelector("#drop-btn .btn-sub"),upgradesList:document.getElementById("upgrades-list"),prestigeList:document.getElementById("prestige-upgrades-list"),shopView:document.getElementById("shop-view"),prestigeView:document.getElementById("prestige-view"),panelContent:document.getElementById("panel-content"),panelToggle:document.getElementById("panel-toggle"),panelTitle:document.getElementById("panel-title"),tabs:document.querySelectorAll(".tab-btn"),currencyBtns:document.querySelectorAll(".currency-btn"),freeModal:document.getElementById("free-coins-modal"),freeCoinsBtn:document.getElementById("free-coins-btn"),freeCooldown:document.getElementById("free-cooldown"),regenTimer:document.getElementById("regen-timer"),regenCountdown:document.getElementById("regen-countdown"),notifications:document.getElementById("notifications"),dropEffectLabel:document.getElementById("drop-effect-label"),resetBtn:document.getElementById("reset-btn"),prestigeBtn:document.getElementById("prestige-btn"),prestigeBadge:document.getElementById("prestige-badge"),prestigePointsDisplay:document.getElementById("prestige-points-display"),prestigePointsBig:document.getElementById("prestige-points-big"),prestigeProgressBar:document.getElementById("prestige-progress-bar"),prestigeProgressText:document.getElementById("prestige-progress-text"),prestigeProgressWrap:document.getElementById("prestige-progress-wrap"),collectedCards:document.getElementById("collected-cards"),cardsGrid:document.getElementById("cards-grid"),autoDropToggle:document.getElementById("auto-drop-toggle"),soundToggle:document.getElementById("sound-toggle"),langBtn:document.getElementById("lang-btn")},K=J.coins,W=J.dollars,Z=null,X="shop",Y=!1,H=zX();function U(h){if(h==="shop")return"\uD83D\uDED2 "+I0("shop");if(h==="prestige")return"\uD83D\uDC51 "+I0("prestigeTab");if(h==="settings")return"⚙ "+I0("help");return""}function E(h){if(h==="shop")return"\uD83D\uDED2 "+I0("shopTitle");if(h==="prestige")return"\uD83D\uDC51 "+I0("prestigeTab");return"⚙ "+I0("help")}function O(){if(!$.langBtn)return;$.langBtn.textContent=SK()==="en"?"FR":"EN"}function q(){XX(SK()==="en"?"fr":"en"),O(),R(),JJ.refresh(J)}function R(){document.querySelectorAll(".label").forEach((F)=>{if(F.dataset.key)F.textContent=I0(F.dataset.key)}),document.querySelectorAll(".currency-btn").forEach((F)=>{F.textContent=F.dataset.currency==="coins"?"\uD83E\uDE99 "+I0("coinsBtn"):"\uD83D\uDCB5 "+I0("dollarsBtn")}),D(),M(),w(),C()}function M(){if($.tabs.forEach((N)=>{N.textContent=U(N.dataset.tab)}),$.panelTitle)$.panelTitle.textContent=E(X);let h=document.querySelector(".prestige-sub");if(h)h.textContent="⭐ "+I0("prestigePoints");if($.prestigeBtn)$.prestigeBtn.textContent="\uD83D\uDD25 "+I0("prestigeSacrifice");let F=document.querySelector(".prestige-sub-desc");if(F)F.textContent=I0("prestigeDesc");if($.freeModal){let N=$.freeModal.querySelector("h2"),P=$.freeModal.querySelector("p");if(N)N.textContent="\uD83D\uDC80 "+I0("noFunds");if(P)P.textContent=I0("freeCoinsDesc");let f=$.freeCoinsBtn?.querySelector("span");if(f)f.textContent="\uD83C\uDF81 "+I0("claimBonus")}}function z(){let h=Math.floor(J.coins),F=Math.floor(J.dollars);if(h!==K){if($.coinsDisplay.textContent=h,h>K)$.coinsDisplay.classList.remove("pop"),$.coinsDisplay.offsetWidth,$.coinsDisplay.classList.add("pop");K=h}if(F!==W){if($.dollarsDisplay.textContent=F,F>W)$.dollarsDisplay.classList.remove("pop"),$.dollarsDisplay.offsetWidth,$.dollarsDisplay.classList.add("pop");W=F}if($.totalEarned.textContent=Math.floor(J.totalEarnedLifetime||J.totalEarned),J.prestigePoints>0){if($.prestigeBadge.classList.remove("hidden"),$.prestigePointsDisplay.textContent=J.prestigePoints,$.prestigePointsBig.textContent=J.prestigePoints,J.prestigePoints>=10)$.prestigeBadge.classList.add("prestige-high")}else $.prestigeBadge.classList.add("hidden")}function D(){let h=J.activeCurrency==="coins";$.currencyBtns.forEach((F)=>{F.classList.toggle("active",F.dataset.currency===J.activeCurrency),F.classList.toggle("dollar-mode",F.dataset.currency==="dollars")}),$.dropIcon.textContent=h?"\uD83E\uDE99":"\uD83D\uDCB5",$.dropText.textContent=h?I0("dropCoin"):I0("dropDollar"),$.dropSub.textContent=h?I0("costCoin"):I0("costDollar"),$.dropBtn.style.borderColor=h?"#ffd700":"#00ff88",$.dropBtn.style.color=h?"#fff4a3":"#00ff88"}function G(h){$.dropBtn.disabled=!h}function S(h){if(X=h,$.tabs.forEach((F)=>F.classList.toggle("active",F.dataset.tab===h)),$.shopView.classList.toggle("hidden",h!=="shop"),$.prestigeView.classList.toggle("hidden",h!=="prestige"),$.settingsView=$.settingsView||document.getElementById("settings-view"),$.settingsView)$.settingsView.classList.toggle("hidden",h!=="settings");if($.panelTitle.textContent=E(h),h==="prestige")$.prestigePointsBig.textContent=J.prestigePoints||0,C(),D0(),c()}function I(h,F){let N=h.effect(F);switch(h.id){case"pushPower":return"Push "+N.toFixed(2)+"x";case"multiDrop":return Math.floor(Math.max(1,N))+" coins/drop";case"autoDrop":return N.toFixed(2)+"/s";case"multiplier":return"x"+N.toFixed(2);case"maxCoins":return N+" max";case"regenSpeed":return N.toFixed(1)+"s";case"dollarMagnet":return"x"+N.toFixed(2);case"luck":return"+"+(N*100).toFixed(0)+"% chance";case"comboShield":return N.toFixed(1)+"s window";case"prestigeBoost":return"x"+N.toFixed(2);case"jackpotChance":return"+"+((N-0.02)*100).toFixed(1)+"% extra";case"goldenTouch":return(N*100).toFixed(0)+"% double";default:return""}}function V(){let h=[IJ.ECONOMY,IJ.PUSH,IJ.CAPACITY,IJ.LUCK,IJ.CURRENCY,IJ.META],F=[];return h.forEach((N)=>{K9.forEach((P)=>{if(P.category===N)F.push(P)})}),F}function w(){$.upgradesList.innerHTML="",[IJ.ECONOMY,IJ.PUSH,IJ.CAPACITY,IJ.LUCK,IJ.CURRENCY,IJ.META].forEach((F)=>{let N=K9.filter((X0)=>X0.category===F);if(N.length===0)return;let P=document.createElement("div");P.className="upgrade-category-header cat-"+F;let f="category"+F.charAt(0).toUpperCase()+F.slice(1);P.textContent="◆ "+I0(f),$.upgradesList.appendChild(P),N.forEach(_)})}function _(h){let F=$8(J,h.id),N=F>=h.maxLevel,P=W6(h,F),f=J.coins>=P,X0=N?[]:YX(h,F,J.coins),G0=X0.length,R0=X0.reduce((k0,Z0)=>k0+Z0,0),Q0=G0>1,W0=Q0?"⇧ "+G0+" for \uD83E\uDE99"+R0.toLocaleString():null,E0=I(h,F),y0=N?"":I(h,F+1),M0=E0?'<div class="upgrade-effect">'+E0+(y0&&y0!==E0?' <span class="effect-arrow">→</span> <span class="effect-next">'+y0+"</span>":"")+"</div>":"",O0=Math.round(F/h.maxLevel*100),m0='<div class="upgrade-bar-wrap"><div class="upgrade-bar'+(N?" maxed":"")+'" style="width:'+O0+'%"></div></div>',h0=document.createElement("div"),YJ="upgrade-item cat-"+h.category+(N?" bought":"")+(f&&!N?" affordable":"");h0.className=YJ;let b=N?I0("max"):Q0?'<span class="upgrade-cost-bulk">'+W0+'</span><span class="upgrade-cost-single">\uD83E\uDE99'+P.toLocaleString()+"</span>":"\uD83E\uDE99"+P.toLocaleString();if(h0.innerHTML='<div class="upgrade-icon">'+h.icon+'</div><div class="upgrade-info"><div class="upgrade-name">'+h.name+'</div><div class="upgrade-desc">'+h.desc+"</div>"+M0+m0+'<div class="upgrade-level">'+I0("level")+" "+F+"/"+h.maxLevel+'</div></div><div class="upgrade-cost '+(f||N?"":"locked")+'">'+b+"</div>",!N)h0.style.cursor=f?"pointer":"not-allowed",h0.addEventListener("click",(k0)=>{let Z0=k0.shiftKey?G0:1;if(Q.onBuyUpgrade)Q.onBuyUpgrade(h.id,Z0)});$.upgradesList.appendChild(h0)}function C(){$.prestigeList.innerHTML="";let h=J.prestigePoints||0;DQ.forEach((F)=>{let N=J.prestigeUpgrades[F.id]||0,P=N>=F.maxLevel,f=EQ(F,N),X0=h>=f,G0=document.createElement("div");if(G0.className="upgrade-item"+(P?" bought":""),G0.innerHTML='<div class="upgrade-icon">'+F.icon+'</div><div class="upgrade-info"><div class="upgrade-name">'+F.name+'</div><div class="upgrade-desc">'+F.desc+'</div><div class="upgrade-level">'+I0("level")+" "+N+"/"+F.maxLevel+'</div></div><div class="upgrade-cost prestige-cost '+(X0||P?"":"locked")+'">'+(P?I0("max"):"\uD83D\uDC51"+f)+"</div>",!P)G0.style.cursor=X0?"pointer":"not-allowed",G0.addEventListener("click",()=>{if(Q.onBuyPrestigeUpgrade)Q.onBuyPrestigeUpgrade(F.id)});$.prestigeList.appendChild(G0)})}function k(h,F="info"){let N=document.createElement("div");N.className="notification "+F,N.textContent=h,$.notifications.appendChild(N),setTimeout(()=>{if(N.parentNode)N.remove()},2500)}function L(h){let F=document.createElement("div");F.className="jackpot-banner",F.innerHTML='\uD83C\uDFB0 <span class="jackpot-text">'+I0("jackpot")+'</span> <span class="jackpot-bonus">+'+h+" \uD83E\uDE99</span>",document.body.appendChild(F),requestAnimationFrame(()=>F.classList.add("show"));let N=document.createElement("div");N.className="jackpot-burst";for(let P=0;P<10;P++){let f=document.createElement("div");f.className="jackpot-particle",f.textContent="\uD83E\uDE99",f.style.setProperty("--dx",(Math.random()-0.5)*400+"px"),f.style.setProperty("--dy",Math.random()*-200-60+"px"),f.style.animationDelay=Math.random()*0.2+"s",N.appendChild(f)}F.appendChild(N),setTimeout(()=>{F.classList.remove("show"),F.classList.add("hide"),setTimeout(()=>{if(F.parentNode)F.remove()},500)},2200)}function r(h,F){let N=document.createElement("div");N.className="milestone-banner",N.innerHTML='<div class="milestone-eyebrow">'+I0("milestone")+'</div><div class="milestone-title">'+I0(h.key)+'</div><div class="milestone-subtitle">'+h.value.toLocaleString()+" lifetime coins</div>"+(F>0?'<div class="milestone-bonus">+'+F+" \uD83E\uDE99 "+I0("milestoneBonusSuffix")+"</div>":""),document.body.appendChild(N),requestAnimationFrame(()=>N.classList.add("show")),setTimeout(()=>{N.classList.remove("show"),N.classList.add("hide"),setTimeout(()=>{if(N.parentNode)N.remove()},600)},3500)}function j(h,F,N){let P=document.getElementById("streak-chip");if(h<=2&&!N){if(P)P.classList.add("hidden");return}if(!P){P=document.createElement("div"),P.id="streak-chip",P.className="streak-chip hidden";let f=document.getElementById("drop-area");if(f)f.appendChild(P)}if(P.classList.remove("hidden"),N)P.classList.remove("streak-hot"),P.classList.add("streak-broken"),P.innerHTML="\uD83D\uDC94 "+I0("streakBroken")+" · best "+F,setTimeout(()=>{if(P)P.classList.remove("streak-broken"),P.classList.add("hidden")},1800);else P.classList.add("streak-hot"),P.classList.remove("streak-broken"),P.innerHTML="\uD83D\uDD25 "+I0("winStreak")+" <b>x"+h+"</b>"+(F>h?" · best "+F:"")}function c(){let h=document.getElementById("stats-panel"),F=$.prestigeView;if(!F)return;if(!h){h=document.createElement("div"),h.id="stats-panel",h.className="stats-panel";let f=$.prestigeList;if(f&&f.parentNode===F)F.insertBefore(h,f);else F.appendChild(h)}let N=Math.floor(J.totalEarnedLifetime||J.totalEarned||0),P=[[I0("statsTotalDrops"),Math.floor(J.totalDropped||0).toLocaleString()],[I0("statsPeakCoins"),Math.floor(J.peakCoins||0).toLocaleString()],[I0("statsPeakDollars"),Math.floor(J.peakDollars||0).toLocaleString()],[I0("statsPeakCombo"),"x"+(J.peakCombo||0)],[I0("statsBestStreak"),"x"+(J.bestWinStreak||0)],[I0("statsJackpots"),"\uD83C\uDFB0 "+(J.jackpotsHit||0)],[I0("statsMilestones"),"\uD83C\uDFC5 "+(J.milestonesHit||[]).length+"/9"],[I0("total"),N.toLocaleString()]];h.innerHTML='<div class="stats-title">'+I0("statsTitle")+"</div>"+P.map(([f,X0])=>'<div class="stats-row"><span class="stats-key">'+f+'</span><span class="stats-val">'+X0+"</span></div>").join("")}function $0(h,F,N){let P=document.createElement("div");P.className="floating-reward",P.textContent=h,P.style.left=F+"px",P.style.top=N+"px",document.body.appendChild(P),setTimeout(()=>{if(P.parentNode)P.remove()},1200)}function s(h){let F=$.dropBtn;if(h>5){if($.dropEffectLabel.textContent="\uD83D\uDD25 "+I0("comboText")+h+"!",$.dropEffectLabel.style.color="#ff2d95",$.dropEffectLabel.classList.remove("mega"),$.dropEffectLabel.classList.add("mega"),F)F.classList.add("combo-hot"),F.classList.remove("combo-warm")}else if(h>3){if($.dropEffectLabel.textContent="✨ x"+h,$.dropEffectLabel.style.color="#ffd700",$.dropEffectLabel.classList.remove("mega"),F)F.classList.add("combo-warm"),F.classList.remove("combo-hot")}else if(h>1){if($.dropEffectLabel.textContent="✨ x"+h,$.dropEffectLabel.style.color="#fff4a3",$.dropEffectLabel.classList.remove("mega"),F)F.classList.remove("combo-warm","combo-hot")}else if($.dropEffectLabel.textContent="",$.dropEffectLabel.classList.remove("mega"),F)F.classList.remove("combo-warm","combo-hot")}function J0(h=30){if(!$.freeModal.classList.contains("hidden"))return;$.freeModal.classList.remove("hidden");let F=Math.max(1,Math.ceil(h));if($.freeCooldown.textContent=F,$.freeCoinsBtn.disabled=!0,Z)clearInterval(Z);Z=setInterval(()=>{if(F--,$.freeCooldown.textContent=F,F<=0)clearInterval(Z),Z=null,$.freeCoinsBtn.disabled=!1},1000),$.freeCoinsBtn.onclick=()=>{if($.freeCoinsBtn.disabled)return;if(Q.onClaimFree)Q.onClaimFree();K0()}}function K0(){if($.freeModal.classList.add("hidden"),Z)clearInterval(Z),Z=null}function l(h){if(h>0)$.regenTimer.classList.remove("hidden"),$.regenCountdown.textContent=Math.ceil(h);else $.regenTimer.classList.add("hidden")}function n(h){let F=h.currency==="dollars"?"\uD83D\uDCB5":"\uD83E\uDE99";if(h.isAuto){if(h.earned>0)$0("\uD83E\uDD16 +"+h.earned+" "+F,window.innerWidth/2-40,window.innerHeight/2-50);return}if(h.earned>0){let N=$.dropBtn.getBoundingClientRect(),P="+"+h.earned+" "+F;if(h.earned>=5)P="\uD83C\uDF89 +"+h.earned+" "+F;if(h.isCombo)P="\uD83D\uDD25 "+I0("comboText")+h.comboCount+"! +"+h.earned+" "+F;$0(P,N.left+N.width/2-40,N.top-30)}if(h.isCombo&&h.comboCount>3)k("\uD83D\uDD25 "+I0("comboText")+h.comboCount+"!","success")}function d(h){let F=document.querySelector(".coins-wasted");if(F)F.remove();let N=document.createElement("div");N.className="coins-wasted",N.textContent="⚠️ +"+h+" "+I0("wastedCoins"),N.style.left=window.innerWidth/2-100+"px",N.style.top="120px",document.body.appendChild(N),setTimeout(()=>{if(N.parentNode)N.remove()},2200)}function H0(){if(!$.prestigeProgressBar||!$.prestigeProgressText)return;let h=100,F=Math.min(1,(J.totalEarnedLifetime||J.totalEarned||0)/h);$.prestigeProgressBar.style.width=F*100+"%",$.prestigeProgressText.textContent=Math.floor(J.totalEarnedLifetime||J.totalEarned||0)+" / "+h}function D0(){if(!$.cardsGrid)return;let h=J.collectedCards||[];if(h.length>0)$.collectedCards.classList.remove("hidden"),$.cardsGrid.innerHTML="",h.forEach((F,N)=>{let P=document.createElement("div");P.className="card-item",P.textContent="\uD83C\uDCCF "+(N+1),P.title=F,$.cardsGrid.appendChild(P)});else $.collectedCards.classList.add("hidden")}function F0(h,F,N,P){let f=document.createElement("div");f.className="zone-feedback "+F,f.textContent=h,f.style.left=N+"px",f.style.top=P+"px",document.body.appendChild(f),setTimeout(()=>{if(f.parentNode)f.remove()},1500)}function e(h){let F=h>=2?"shake-hard":"shake-soft";document.body.classList.remove("shake-soft","shake-hard"),document.body.offsetWidth,document.body.classList.add(F)}function a(h){z(),D(),w();let F=h.activeCurrency==="dollars"?h.dollars>=1:h.coins>=1;if(G(F),h.isGameOver)J0(h.regenCooldown);if($.autoDropToggle)$.autoDropToggle.checked=!!h.autoDropEnabled;if(s(h.dropCount),H0(),X==="prestige")$.prestigePointsBig.textContent=h.prestigePoints||0,C(),D0();let N=h.totalEarned>=100||h.totalDollarsEarned>=10;if($.prestigeBtn.disabled=!N,h.prestigePoints>0)$.prestigeBadge.classList.remove("hidden"),$.prestigePointsDisplay.textContent=h.prestigePoints}function y(){return Y}function A(){return H}function x(h){if(Y=!!h,J.autoDropEnabled=Y,$.autoDropToggle)$.autoDropToggle.checked=Y}function p(h){if(H=!!h,LX(H),$.soundToggle)$.soundToggle.checked=H}let u="coinpusher_tutorial_dismissed";function T(){try{return localStorage.getItem(u)==="1"}catch(h){return!1}}function N0(){let h=document.getElementById("tutorial-overlay");if(!h||h.classList.contains("hidden"))return;h.classList.add("hiding");try{localStorage.setItem(u,"1")}catch(F){}setTimeout(()=>{h.classList.add("hidden"),h.classList.remove("hiding")},350)}function C0(){if(T())return;setTimeout(()=>{let h=document.getElementById("tutorial-overlay");if(!h)return;h.classList.remove("hidden"),h.addEventListener("click",N0,{once:!0})},700)}if($.dropBtn.addEventListener("click",()=>{if(Q.onDrop)Q.onDrop();N0()}),document.addEventListener("keydown",(h)=>{let F=h.target;if(F&&(F.tagName==="INPUT"||F.tagName==="TEXTAREA"))return;if(h.code==="Space"&&!h.repeat){if(h.preventDefault(),N0(),Q.onDrop)Q.onDrop()}}),$.currencyBtns.forEach((h)=>{h.addEventListener("click",()=>{if(Q.onCurrencySwitch)Q.onCurrencySwitch(h.dataset.currency)})}),$.tabs.forEach((h)=>{h.addEventListener("click",()=>S(h.dataset.tab))}),$.panelToggle.addEventListener("click",()=>{$.panelContent.classList.toggle("collapsed"),$.panelToggle.classList.toggle("collapsed")}),$.resetBtn)$.resetBtn.addEventListener("click",()=>{if(Q.onReset)Q.onReset()});if($.prestigeBtn)$.prestigeBtn.addEventListener("click",()=>{if(Q.onPrestige)Q.onPrestige()});if($.langBtn)$.langBtn.addEventListener("click",q);if($.autoDropToggle)$.autoDropToggle.addEventListener("change",(h)=>{Y=h.target.checked,J.autoDropEnabled=Y});if($.soundToggle)$.soundToggle.addEventListener("change",(h)=>{H=h.target.checked,p(H)});if(document.addEventListener("keydown",(h)=>{let F=h.target;if(F&&(F.tagName==="INPUT"||F.tagName==="TEXTAREA"))return;if(N0(),h.code==="Tab"&&!h.repeat&&JJ.isPrestigeReady&&JJ.isPrestigeReady()){if(h.preventDefault(),Q.onPrestige)Q.onPrestige();return}let N=V();if(h.key>="1"&&h.key<="9"){let P=parseInt(h.key)-1;if(P<N.length&&Q.onBuyUpgrade)Q.onBuyUpgrade(N[P].id)}else if(h.key==="0"){if(9<N.length&&Q.onBuyUpgrade)Q.onBuyUpgrade(N[9].id)}}),$.soundToggle)$.soundToggle.checked=H;O(),R(),C0();let b0=a;function T0(h){b0(h),JJ.isPrestigeReady=()=>!!(h&&(h.totalEarned>=100||h.totalDollarsEarned>=10))}function x0(h=20){let F=document.getElementById("coin-rain-container");if(!F)F=document.createElement("div"),F.id="coin-rain-container",document.body.appendChild(F);let N=["\uD83E\uDE99","\uD83D\uDCB0","⭐","✨","\uD83E\uDE99"];for(let P=0;P<h;P++){let f=document.createElement("div");f.className="coin-rain-particle",f.textContent=N[Math.floor(Math.random()*N.length)],f.style.left=Math.random()*100+"%",f.style.fontSize=16+Math.random()*18+"px",f.style.animationDuration=1.5+Math.random()*2+"s",f.style.animationDelay=Math.random()*0.8+"s",F.appendChild(f),setTimeout(()=>{if(f.parentNode)f.remove()},4000)}}function XJ(){let h=document.createElement("div");h.className="upgrade-flash",document.body.appendChild(h),setTimeout(()=>{if(h.parentNode)h.remove()},700)}let l0=null;function QJ(){if(!l0)l0=document.createElement("div"),l0.className="gamble-btn-container",l0.id="gamble-section";let h=$.shopView;if(h&&!l0.parentNode){let E0=$.upgradesList;if(E0&&E0.parentNode===h)E0.after(l0);else h.appendChild(l0)}let F=Math.floor(J.coins),N=F>=1,P=Math.max(1,Math.min(F,e0||F)),f=I0("gambleMax"),X0=I0("gambleHalf");l0.innerHTML=`
      <button class="gamble-btn" id="gamble-btn" ${N?"":"disabled"}>
        \uD83C\uDFB2 ${I0("gambleTitle")}
      </button>
      <div style="font-size:11px;color:var(--text-dim);margin-top:2px;">${I0("gambleDesc")}</div>
      <div class="gamble-controls">
        <button class="gamble-wager-btn" id="gamble-half-btn" ${N?"":"disabled"}>½ ${X0}</button>
        <input type="number" class="gamble-wager-input" id="gamble-wager"
          value="${Math.min(P,F)}" min="1" max="${Math.max(1,F)}" ${N?"":"disabled"}>
        <button class="gamble-wager-btn" id="gamble-max-btn" ${N?"":"disabled"}>${f}</button>
      </div>
    `;let G0=l0.querySelector("#gamble-btn"),R0=l0.querySelector("#gamble-wager"),Q0=l0.querySelector("#gamble-half-btn"),W0=l0.querySelector("#gamble-max-btn");if(G0)G0.addEventListener("click",()=>{let E0=parseInt(R0?.value||1);if(E0>0&&Q.onGamble)Q.onGamble(E0)});if(Q0)Q0.addEventListener("click",()=>{let E0=Math.max(1,Math.floor(F/2));if(R0)R0.value=E0;e0=E0});if(W0)W0.addEventListener("click",()=>{if(R0)R0.value=F;e0=F});if(R0)R0.addEventListener("change",()=>{let E0=parseInt(R0.value)||1;e0=Math.max(1,Math.min(E0,F)),R0.value=e0})}let e0=10;function NJ(){if(l0&&l0.parentNode)QJ()}function GJ(h){let F=document.createElement("div");F.className="gamble-result-overlay";let N=document.createElement("div");N.className="gamble-result-card "+(h.win?"win":"lose");let P=h.win?"\uD83C\uDF89":"\uD83D\uDC80",f=h.win?I0("gambleWin"):I0("gambleLose"),X0=h.win?"+"+h.wager:"-"+h.wager;if(N.innerHTML=`
      <div class="gamble-result-title">${P} ${f}</div>
      <div class="gamble-result-amount">${X0} \uD83E\uDE99</div>
    `,F.appendChild(N),document.body.appendChild(F),h.win)x0(30);setTimeout(()=>{F.style.transition="opacity 0.3s",F.style.opacity="0",setTimeout(()=>{if(F.parentNode)F.remove()},350)},1400)}let v=T0;function SJ(h){v(h),NJ()}let JJ={updateHUD:z,updateDropButton:G,renderUpgrades:w,renderPrestigeUpgrades:C,showNotification:k,showFloatingReward:$0,showJackpot:L,showMilestone:r,updateStreak:j,renderStatsPanel:c,showDropResult:n,showFreeModal:J0,hideFreeModal:K0,updateRegenTimer:l,updateCombo:s,refresh:SJ,switchTab:S,updateCurrencyUI:D,showCoinsWasted:d,showZoneFeedback:F0,renderPrestigeProgress:H0,renderCollectedCards:D0,isAutoDropEnabled:y,isSoundEnabled:A,setAutoDropEnabled:x,setSoundEnabled:p,isPrestigeReady:()=>!1,dismissTutorial:N0,screenShake:e,showCoinRain:x0,showUpgradeFlash:XJ,renderGambleUI:QJ,showGambleResult:GJ};return JJ}var fG=document.getElementById("canvas-container"),PX=tZ(fG);if(!PX)throw console.warn("Aborting game init: WebGL unavailable."),Error("WebGL unavailable");var{scene:kQ,camera:xG,renderer:gG,controls:pG,updateFlames:mG,updateAmbient:dG}=PX,u8=eZ(kQ),q0=OX(),uG=(q0.collectedCards||[]).length,w7=ZX(kQ,u8,uG);function lG(){if(!EX(q0,(Q)=>{let $=Q.currency==="dollars"?"dollar":"coin",K=Math.max(1,Math.floor(Q.coinsPerDrop||1));for(let W=0;W<K;W++)setTimeout(()=>w7.dropObject(Q.pushForce,$),W*50);if(Q.comboBonus>0)u0.showNotification("\uD83D\uDD25 Combo bonus +"+Q.comboBonus+" coin!","success");u0.showDropResult(Q),u0.updateCombo(Q.comboCount),Z9("drop")}).success){let $=(q0.activeCurrency==="dollars"?"\uD83D\uDCB5":"\uD83E\uDE99")+" "+I0(q0.activeCurrency==="dollars"?"notEnoughDollars":"notEnoughCoins");if(u0.showNotification($,"danger"),q0.activeCurrency==="coins"&&q0.coins<=0&&q0.dollars<=0){if(!q0._regenInitialized)q0.regenCooldown=W9(q0).regenCooldown,q0._regenInitialized=!0;q0.isGameOver=!0}}u0.refresh(q0),F8(q0)}function cG(J,Q=1){let $=RX(q0,J,Q);if($.success){let K=$.levelsPurchased>1?"⬆️ "+I0("upgraded")+$.newLevel+" (+"+$.levelsPurchased+")":"⬆️ "+I0("upgraded")+$.newLevel;u0.showNotification(K,"success"),u0.showUpgradeFlash(),u0.refresh(q0),F8(q0),Z9("upgrade")}else if($.reason==="not_enough_coins")u0.showNotification("\uD83E\uDE99 "+I0("notEnoughCoins"),"danger");else if($.reason==="max_level")u0.showNotification("⭐ "+I0("maxLevel"),"info")}function nG(J){let Q=kX(q0,J);if(Q.success)u0.showNotification("\uD83D\uDC51 "+I0("prestigeUp")+Q.newLevel,"prestige"),u0.refresh(q0),F8(q0),Z9("upgrade");else if(Q.reason==="not_enough_prestige")u0.showNotification(I0("notEnoughPrestige"),"danger");else if(Q.reason==="max_level")u0.showNotification("⭐ "+I0("maxLevel"),"info")}function sG(){let J=MX(q0);u0.showNotification("\uD83C\uDF81 +"+J+" "+I0("freeCoins"),"success"),q0.isGameOver=!1,u0.hideFreeModal(),u0.refresh(q0),F8(q0)}function iG(J){q0.activeCurrency=J,u0.updateCurrencyUI(),u0.updateDropButton(J==="coins"?q0.coins>=1:q0.dollars>=1)}function oG(){let J=VX(q0);if(J.success)u0.showNotification("\uD83C\uDF1F "+I0("prestigeGain")+J.gained+I0("prestigeTotal")+J.prestigePoints+")","prestige"),w7.initObjects(20,3),u0.refresh(q0),u0.switchTab("prestige"),F8(q0),Z9("prestige");else if(J.reason==="no_gain")u0.showNotification(I0("prestigeWait")+J.current+I0("prestigeCurrent"),"info")}function aG(){if(confirm(I0("resetConfirm")))FX(),location.reload()}function rG(J){let Q=DX(q0,J);if(Q.success)u0.showGambleResult(Q),u0.refresh(q0),F8(q0),Z9(Q.win?"win":"lose");else u0.showNotification("\uD83E\uDE99 "+I0("notEnoughCoins"),"danger")}var u0=IX(q0,{onDrop:lG,onBuyUpgrade:cG,onBuyPrestigeUpgrade:nG,onClaimFree:sG,onReset:aG,onPrestige:oG,onCurrencySwitch:iG,onGamble:rG});u0.renderGambleUI();var X6=(()=>{let Q=new vJ,$=new Float32Array(600),K=new Float32Array(600),W=new Float32Array(600),Z=new Float32Array(200);for(let O=0;O<200;O++)$[O*3]=0,$[O*3+1]=-10,$[O*3+2]=0,K[O*3]=0.6+Math.random()*0.4,K[O*3+1]=0.2+Math.random()*0.3,K[O*3+2]=0.6+Math.random()*0.4,Z[O]=0;Q.setAttribute("position",new nJ($,3)),Q.setAttribute("color",new nJ(K,3));let X=new p9({size:0.04,vertexColors:!0,transparent:!0,opacity:0.7,blending:t8}),Y=new V7(Q,X);kQ.add(Y);let H=0;function U(O,q,R,M=10){let z=Q.attributes.position.array;for(let D=0;D<Math.min(M,200);D++){let G=(H+D)%200;z[G*3]=O+(Math.random()-0.5)*0.6,z[G*3+1]=q+(Math.random()-0.5)*0.6,z[G*3+2]=R+(Math.random()-0.5)*0.6,W[G*3]=(Math.random()-0.5)*2,W[G*3+1]=Math.random()*3+1,W[G*3+2]=(Math.random()-0.5)*2,Z[G]=1+Math.random()}H=(H+M)%200,Q.attributes.position.needsUpdate=!0}function E(O){let q=Q.attributes.position.array,R=!1;for(let M=0;M<200;M++)if(Z[M]>0){if(Z[M]-=O,q[M*3]+=W[M*3]*O,q[M*3+1]+=W[M*3+1]*O,q[M*3+2]+=W[M*3+2]*O,W[M*3+1]-=4*O,R=!0,Z[M]<=0)q[M*3+1]=-10}if(R)Q.attributes.position.needsUpdate=!0}return{emit:U,update:E}})();NX(q0);w7.initObjects(20,5);u0.refresh(q0);var AX=performance.now(),yK=0,tG=[{value:100,key:"milestone100"},{value:500,key:"milestone500"},{value:1000,key:"milestone1k"},{value:5000,key:"milestone5k"},{value:1e4,key:"milestone10k"},{value:50000,key:"milestone50k"},{value:1e5,key:"milestone100k"},{value:500000,key:"milestone500k"},{value:1e6,key:"milestone1m"}];function eG(J,Q){let $=J.milestonesHit||[];for(let K of tG)if(Q>=K.value&&!$.includes(K.value))return K;return null}function JN(J){if(J.coins>(J.peakCoins||0))J.peakCoins=Math.floor(J.coins);if(J.dollars>(J.peakDollars||0))J.peakDollars=Math.floor(J.dollars);if(J.dropCount>(J.peakCombo||0))J.peakCombo=J.dropCount}function wX(J){requestAnimationFrame(wX);let Q=Math.min((J-AX)/1000,0.05);if(AX=J,BX(q0,Q,($)=>{let K=$.currency==="dollars"?"dollar":"coin",W=Math.max(1,Math.floor($.coinsPerDrop||1));for(let Z=0;Z<W;Z++)setTimeout(()=>w7.dropObject($.pushForce,K),Z*50);u0.showDropResult($),u0.updateCombo($.comboCount)}),yK+=Q,yK>0.5){yK=0;let $=w7.collectFallen(),K=W9(q0),W=Math.floor($.win.coins*K.rewardMultiplier),Z=Math.floor($.win.dollars*K.dollarMultiplier),X=$.hole.coins,Y=$.hole.dollars;if(W>0||Z>0||$.win.cards.length>0){let H=0,U=Math.max(0,Math.min(1,K.luckChance||0));if(U>0&&$.win.coins>0){for(let I=0;I<$.win.coins;I++)if(Math.random()<U){let V=Math.random()<0.6?2:Math.random()<0.85?3:4;H+=V-1}}let E=0;if(U>0&&$.win.cards.length>0){for(let I=0;I<$.win.cards.length;I++)if(Math.random()<U)E+=5}let O=W+H+E,q=1,R=K.goldenTouch||0;if(R>0&&Math.random()<R&&O>0)q=2,u0.showNotification("\uD83E\uDD32 GOLDEN TOUCH! Double coins!","prestige"),u0.showZoneFeedback("×2 GOLDEN!","win",window.innerWidth/2,window.innerHeight/2+120);let M=O*q,z=Math.min(M,q0.maxCoins-q0.coins),D=M-Math.max(0,z);if(q0.coins+=Math.max(0,z),q0.totalEarned+=Math.max(0,z),q0.totalEarnedLifetime=(q0.totalEarnedLifetime||0)+Math.max(0,z),Z>0){let I=Math.min(Z,q0.maxDollars-q0.dollars);q0.dollars+=Math.max(0,I),q0.totalDollarsEarned=(q0.totalDollarsEarned||0)+Math.max(0,I)}if(H>1)u0.showNotification("\uD83C\uDF40 Lucky bonus +"+H+" !","prestige");if(D>0&&q0.coins>=q0.maxCoins)u0.showCoinsWasted(D);if(X6.emit(0,u8.height+0.3,u8.frontDropZ+0.3,(W+Z+$.win.cards.length)*5),z>0){if(u0.showNotification("\uD83C\uDF89 +"+z+" "+I0("coinsEarned"),"success"),Z9(z>=5?"bigwin":"win"),u0.showZoneFeedback("+"+z,"win",window.innerWidth/2+(Math.random()-0.5)*100,window.innerHeight/2+80),z>=10)u0.screenShake(2);else if(z>=3)u0.screenShake(1)}let G=K.jackpotChance||0.02;if(z>0&&Math.random()<G){let I=Math.random(),V=I<0.7?25:I<0.95?50:100;u0.showJackpot(V),u0.screenShake(2),Z9("jackpot"),u0.showCoinRain(35),X6.emit(0,u8.height+0.6,u8.frontDropZ+0.5,60),q0.coins=Math.min(q0.coins+V,q0.maxCoins),q0.totalEarned+=V,q0.totalEarnedLifetime=(q0.totalEarnedLifetime||q0.totalEarned)+V,q0.jackpotsHit=(q0.jackpotsHit||0)+1}let S=0;while(S++<4){let I=eG(q0,q0.totalEarnedLifetime||0);if(!I)break;q0.milestonesHit.push(I.value);let V=Math.floor(I.value*0.05);if(V>0)q0.coins=Math.min(q0.coins+V,q0.maxCoins),q0.totalEarned+=V,q0.totalEarnedLifetime=(q0.totalEarnedLifetime||q0.totalEarned)+V;u0.showMilestone(I,V),u0.showCoinRain(15),X6.emit(0,u8.height+0.5,u8.frontDropZ+0.4,25)}if($.win.cards.length>0){if(!q0.collectedCards)q0.collectedCards=[];$.win.cards.forEach((I)=>{if(!q0.collectedCards.includes(I)){q0.collectedCards.push(I),u0.showNotification("\uD83C\uDCCF "+I0("cardCollected")+q0.collectedCards.length,"prestige");let V=10;q0.coins=Math.min(q0.coins+V,q0.maxCoins),q0.totalEarned+=V,q0.totalEarnedLifetime=(q0.totalEarnedLifetime||q0.totalEarned)+V}})}}if(X>0||Y>0||$.hole.cards.length>0){if(X6.emit(0,u8.height+0.3,u8.frontDropZ+0.3,(X+Y+$.hole.cards.length)*3),X>1){if(u0.showNotification("\uD83D\uDC80 "+X+" "+I0("coinsLost"),"danger"),Z9("lose"),u0.showZoneFeedback("-"+X,"hole",window.innerWidth/2+(Math.random()-0.5)*100,window.innerHeight/2+80),X>=3)u0.screenShake(1)}if(Y>0)u0.showNotification("\uD83D\uDC80 "+Y+" $ "+I0("coinsLost"),"danger");if($.hole.cards.length>0)u0.showNotification("\uD83D\uDC94 "+$.hole.cards.length+" "+I0("cardsLost"),"danger")}if(X>0){if(q0.winStreak>0)q0.bestWinStreak=Math.max(q0.bestWinStreak||0,q0.winStreak);q0.winStreak=0,u0.updateStreak(0,q0.bestWinStreak||0,!0)}else if(W>0||Z>0){if(q0.winStreak=(q0.winStreak||0)+1,q0.winStreak>(q0.bestWinStreak||0))q0.bestWinStreak=q0.winStreak;u0.updateStreak(q0.winStreak,q0.bestWinStreak||0,!1)}JN(q0)}if(u8.updateMechanism(J/1000),w7.update(Q,J/1000),X6.update(Q),mG(J/1000),dG(J/1000),u0.updateHUD(),q0.coins<=0&&q0.dollars<=0&&q0.regenCooldown>0)u0.updateRegenTimer(q0.regenCooldown);else if(q0.isGameOver)u0.showFreeModal(Math.max(1,q0.regenCooldown));else u0.hideFreeModal();pG.update(),gG.render(kQ,xG)}wX(performance.now());window.addEventListener("beforeunload",()=>F8(q0));console.log("\uD83C\uDCCF COIN PUSHER CASINO OCCULT loaded!");console.log("\uD83C\uDFAE SPACE=drop, 1-9,0=upgrades, TAB=prestige");
