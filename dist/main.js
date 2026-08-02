var aK="185",H9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},U9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rK=0,fQ=1,tK=2;var _9=1,eK=2,H7=3,U7=0,sJ=1,PJ=2,y8=0,b7=1,o8=2,xQ=3,gQ=4,JW=5;var q7=100,QW=101,$W=102,KW=103,WW=104,ZW=200,XW=201,YW=202,HW=203,UW=204,qW=205,NW=206,GW=207,FW=208,OW=209,DW=210,EW=211,RW=212,kW=213,MW=214,VW=0,BW=1,LW=2,pQ=3,zW=4,IW=5,PW=6,AW=7,_W=0,wW=1,CW=2,A8=0,mQ=1,dQ=2,uQ=3,f7=4,lQ=5,cQ=6,nQ=7;var N7=301,w9=302,w6=303,C6=304,x7=306,g7=1000,T6=1001,TW=1002,q9=1003,SW=1004;var p7=1005;var W8=1006,S6=1007;var C9=1008;var _8=1009,jW=1010,yW=1011,m7=1012,sQ=1013,N9=1014,a8=1015,r8=1016,iQ=1017,oQ=1018,G7=1020,vW=35902,hW=35899,bW=1021,fW=1022,v8=1023,T9=1026,S9=1027,xW=1028,aQ=1029,j9=1030,rQ=1031;var tQ=1033,j6=33776,y6=33777,v6=33778,h6=33779,eQ=35840,J$=35841,Q$=35842,$$=35843,K$=36196,W$=37492,Z$=37496,X$=37488,Y$=37489,b6=37490,H$=37491,U$=37808,q$=37809,N$=37810,G$=37811,F$=37812,O$=37813,D$=37814,E$=37815,R$=37816,k$=37817,M$=37818,V$=37819,B$=37820,L$=37821,z$=36492,I$=36494,P$=36495,A$=36283,_$=36284,f6=36285,w$=36286;var C$=0,gW=1,y9="",h8="srgb",T$="srgb-linear",S$="linear",MJ="srgb";var pW=512,mW=513,dW=514,x6=515,uW=516,lW=517,g6=518,cW=519;var j$="300 es",y$=2000;function MX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function VX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function h7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function nW(){let J=h7("canvas");return J.style.display="block",J}var _K={},Y7=null;function v$(...J){let Q="THREE."+J.shift();if(Y7)Y7("log",Q,...J);else console.log(Q,...J)}function sW(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function a0(...J){J=sW(J);let Q="THREE."+J.shift();if(Y7)Y7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function t0(...J){J=sW(J);let Q="THREE."+J.shift();if(Y7)Y7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function P9(...J){let Q=J.join(" ");if(Q in _K)return;_K[Q]=!0,a0(...J)}function iW(J,Q,$){return new Promise(function(K,W){function Z(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(Z,$);break;default:K()}}setTimeout(Z,$)})}var oW={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class b8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let K=$[J];if(K!==void 0){let W=K.indexOf(Q);if(W!==-1)K.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let K=$.slice(0);for(let W=0,Z=K.length;W<Z;W++)K[W].call(this,J);J.target=null}}}var cJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wK=1234567,y7=Math.PI/180,A9=180/Math.PI;function F7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(cJ[J&255]+cJ[J>>8&255]+cJ[J>>16&255]+cJ[J>>24&255]+"-"+cJ[Q&255]+cJ[Q>>8&255]+"-"+cJ[Q>>16&15|64]+cJ[Q>>24&255]+"-"+cJ[$&63|128]+cJ[$>>8&255]+"-"+cJ[$>>16&255]+cJ[$>>24&255]+cJ[K&255]+cJ[K>>8&255]+cJ[K>>16&255]+cJ[K>>24&255]).toLowerCase()}function UJ(J,Q,$){return Math.max(Q,Math.min($,J))}function h$(J,Q){return(J%Q+Q)%Q}function BX(J,Q,$,K,W){return K+(J-Q)*(W-K)/($-Q)}function LX(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function v7(J,Q,$){return(1-$)*J+$*Q}function zX(J,Q,$,K){return v7(J,Q,1-Math.exp(-$*K))}function IX(J,Q=1){return Q-Math.abs(h$(J,Q*2)-Q)}function PX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function AX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function _X(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function wX(J,Q){return J+Math.random()*(Q-J)}function CX(J){return J*(0.5-Math.random())}function TX(J){if(J!==void 0)wK=J;let Q=wK+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function SX(J){return J*y7}function jX(J){return J*A9}function yX(J){return(J&J-1)===0&&J!==0}function vX(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function hX(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function bX(J,Q,$,K,W){let{cos:Z,sin:X}=Math,Y=Z($/2),H=X($/2),U=Z((Q+K)/2),D=X((Q+K)/2),O=Z((Q-K)/2),q=X((Q-K)/2),R=Z((K-Q)/2),M=X((K-Q)/2);switch(W){case"XYX":J.set(Y*D,H*O,H*q,Y*U);break;case"YZY":J.set(H*q,Y*D,H*O,Y*U);break;case"ZXZ":J.set(H*O,H*q,Y*D,Y*U);break;case"XZX":J.set(Y*D,H*M,H*R,Y*U);break;case"YXY":J.set(H*R,Y*D,H*M,Y*U);break;case"ZYZ":J.set(H*M,H*R,Y*D,Y*U);break;default:a0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function Z7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function tJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var b$={DEG2RAD:y7,RAD2DEG:A9,generateUUID:F7,clamp:UJ,euclideanModulo:h$,mapLinear:BX,inverseLerp:LX,lerp:v7,damp:zX,pingpong:IX,smoothstep:PX,smootherstep:AX,randInt:_X,randFloat:wX,randFloatSpread:CX,seededRandom:TX,degToRad:SX,radToDeg:jX,isPowerOfTwo:yX,ceilPowerOfTwo:vX,floorPowerOfTwo:hX,setQuaternionFromProperEuler:bX,normalize:tJ,denormalize:Z7};class o0{static{o0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6],this.y=K[1]*Q+K[4]*$+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=UJ(this.x,J.x,Q.x),this.y=UJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=UJ(this.x,J,Q),this.y=UJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(UJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(UJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),K=Math.sin(Q),W=this.x-J.x,Z=this.y-J.y;return this.x=W*$-Z*K+J.x,this.y=W*K+Z*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class R8{constructor(J=0,Q=0,$=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=K}static slerpFlat(J,Q,$,K,W,Z,X){let Y=$[K+0],H=$[K+1],U=$[K+2],D=$[K+3],O=W[Z+0],q=W[Z+1],R=W[Z+2],M=W[Z+3];if(D!==M||Y!==O||H!==q||U!==R){let z=Y*O+H*q+U*R+D*M;if(z<0)O=-O,q=-q,R=-R,M=-M,z=-z;let E=1-X;if(z<0.9995){let N=Math.acos(z),C=Math.sin(N);E=Math.sin(E*N)/C,X=Math.sin(X*N)/C,Y=Y*E+O*X,H=H*E+q*X,U=U*E+R*X,D=D*E+M*X}else{Y=Y*E+O*X,H=H*E+q*X,U=U*E+R*X,D=D*E+M*X;let N=1/Math.sqrt(Y*Y+H*H+U*U+D*D);Y*=N,H*=N,U*=N,D*=N}}J[Q]=Y,J[Q+1]=H,J[Q+2]=U,J[Q+3]=D}static multiplyQuaternionsFlat(J,Q,$,K,W,Z){let X=$[K],Y=$[K+1],H=$[K+2],U=$[K+3],D=W[Z],O=W[Z+1],q=W[Z+2],R=W[Z+3];return J[Q]=X*R+U*D+Y*q-H*O,J[Q+1]=Y*R+U*O+H*D-X*q,J[Q+2]=H*R+U*q+X*O-Y*D,J[Q+3]=U*R-X*D-Y*O-H*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,K){return this._x=J,this._y=Q,this._z=$,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:K,_z:W,_order:Z}=J,X=Math.cos,Y=Math.sin,H=X($/2),U=X(K/2),D=X(W/2),O=Y($/2),q=Y(K/2),R=Y(W/2);switch(Z){case"XYZ":this._x=O*U*D+H*q*R,this._y=H*q*D-O*U*R,this._z=H*U*R+O*q*D,this._w=H*U*D-O*q*R;break;case"YXZ":this._x=O*U*D+H*q*R,this._y=H*q*D-O*U*R,this._z=H*U*R-O*q*D,this._w=H*U*D+O*q*R;break;case"ZXY":this._x=O*U*D-H*q*R,this._y=H*q*D+O*U*R,this._z=H*U*R+O*q*D,this._w=H*U*D-O*q*R;break;case"ZYX":this._x=O*U*D-H*q*R,this._y=H*q*D+O*U*R,this._z=H*U*R-O*q*D,this._w=H*U*D+O*q*R;break;case"YZX":this._x=O*U*D+H*q*R,this._y=H*q*D+O*U*R,this._z=H*U*R-O*q*D,this._w=H*U*D-O*q*R;break;case"XZY":this._x=O*U*D-H*q*R,this._y=H*q*D-O*U*R,this._z=H*U*R+O*q*D,this._w=H*U*D+O*q*R;break;default:a0("Quaternion: .setFromEuler() encountered an unknown order: "+Z)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,K=Math.sin($);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],K=Q[4],W=Q[8],Z=Q[1],X=Q[5],Y=Q[9],H=Q[2],U=Q[6],D=Q[10],O=$+X+D;if(O>0){let q=0.5/Math.sqrt(O+1);this._w=0.25/q,this._x=(U-Y)*q,this._y=(W-H)*q,this._z=(Z-K)*q}else if($>X&&$>D){let q=2*Math.sqrt(1+$-X-D);this._w=(U-Y)/q,this._x=0.25*q,this._y=(K+Z)/q,this._z=(W+H)/q}else if(X>D){let q=2*Math.sqrt(1+X-$-D);this._w=(W-H)/q,this._x=(K+Z)/q,this._y=0.25*q,this._z=(Y+U)/q}else{let q=2*Math.sqrt(1+D-$-X);this._w=(Z-K)/q,this._x=(W+H)/q,this._y=(Y+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(UJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let K=Math.min(1,Q/$);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:K,_z:W,_w:Z}=J,X=Q._x,Y=Q._y,H=Q._z,U=Q._w;return this._x=$*U+Z*X+K*H-W*Y,this._y=K*U+Z*Y+W*X-$*H,this._z=W*U+Z*H+$*Y-K*X,this._w=Z*U-$*X-K*Y-W*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:K,_z:W,_w:Z}=J,X=this.dot(J);if(X<0)$=-$,K=-K,W=-W,Z=-Z,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+Z*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+Z*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),K=Math.sqrt(1-$),W=Math.sqrt($);return this.set(K*Math.sin(J),K*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class g{static{g.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(CK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(CK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*K,this.y=W[1]*Q+W[4]*$+W[7]*K,this.z=W[2]*Q+W[5]*$+W[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,K=this.z,W=J.elements,Z=1/(W[3]*Q+W[7]*$+W[11]*K+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*K+W[12])*Z,this.y=(W[1]*Q+W[5]*$+W[9]*K+W[13])*Z,this.z=(W[2]*Q+W[6]*$+W[10]*K+W[14])*Z,this}applyQuaternion(J){let Q=this.x,$=this.y,K=this.z,W=J.x,Z=J.y,X=J.z,Y=J.w,H=2*(Z*K-X*$),U=2*(X*Q-W*K),D=2*(W*$-Z*Q);return this.x=Q+Y*H+Z*D-X*U,this.y=$+Y*U+X*H-W*D,this.z=K+Y*D+W*U-Z*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*K,this.y=W[1]*Q+W[5]*$+W[9]*K,this.z=W[2]*Q+W[6]*$+W[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=UJ(this.x,J.x,Q.x),this.y=UJ(this.y,J.y,Q.y),this.z=UJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=UJ(this.x,J,Q),this.y=UJ(this.y,J,Q),this.z=UJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(UJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:K,z:W}=J,Z=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-W*X,this.y=W*Z-$*Y,this.z=$*X-K*Z,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return OQ.copy(this).projectOnVector(J),this.sub(OQ)}reflect(J){return this.sub(OQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(UJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,K=this.z-J.z;return Q*Q+$*$+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let K=Math.sin(Q)*J;return this.x=K*Math.sin($),this.y=Math.cos(Q)*J,this.z=K*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var OQ=new g,CK=new R8;class $J{static{$J.prototype.isMatrix3=!0}constructor(J,Q,$,K,W,Z,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,K,W,Z,X,Y,H)}set(J,Q,$,K,W,Z,X,Y,H){let U=this.elements;return U[0]=J,U[1]=K,U[2]=X,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=Z,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,K=Q.elements,W=this.elements,Z=$[0],X=$[3],Y=$[6],H=$[1],U=$[4],D=$[7],O=$[2],q=$[5],R=$[8],M=K[0],z=K[3],E=K[6],N=K[1],C=K[4],A=K[7],V=K[2],I=K[5],_=K[8];return W[0]=Z*M+X*N+Y*V,W[3]=Z*z+X*C+Y*I,W[6]=Z*E+X*A+Y*_,W[1]=H*M+U*N+D*V,W[4]=H*z+U*C+D*I,W[7]=H*E+U*A+D*_,W[2]=O*M+q*N+R*V,W[5]=O*z+q*C+R*I,W[8]=O*E+q*A+R*_,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return Q*Z*U-Q*X*H-$*W*U+$*X*Y+K*W*H-K*Z*Y}invert(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],D=U*Z-X*H,O=X*Y-U*W,q=H*W-Z*Y,R=Q*D+$*O+K*q;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/R;return J[0]=D*M,J[1]=(K*H-U*$)*M,J[2]=(X*$-K*Z)*M,J[3]=O*M,J[4]=(U*Q-K*Y)*M,J[5]=(K*W-X*Q)*M,J[6]=q*M,J[7]=($*Y-H*Q)*M,J[8]=(Z*Q-$*W)*M,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,K,W,Z,X){let Y=Math.cos(W),H=Math.sin(W);return this.set($*Y,$*H,-$*(Y*Z+H*X)+Z+J,-K*H,K*Y,-K*(-H*Z+Y*X)+X+Q,0,0,1),this}scale(J,Q){return P9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(DQ.makeScale(J,Q)),this}rotate(J){return P9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(DQ.makeRotation(-J)),this}translate(J,Q){return P9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(DQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let K=0;K<9;K++)if(Q[K]!==$[K])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var DQ=new $J,TK=new $J().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),SK=new $J().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function fX(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,Z,X){if(this.enabled===!1||Z===X||!Z||!X)return W;if(this.spaces[Z].transfer==="srgb")W.r=s8(W.r),W.g=s8(W.g),W.b=s8(W.b);if(this.spaces[Z].primaries!==this.spaces[X].primaries)W.applyMatrix3(this.spaces[Z].toXYZ),W.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")W.r=X7(W.r),W.g=X7(W.g),W.b=X7(W.b);return W},workingToColorSpace:function(W,Z){return this.convert(W,this.workingColorSpace,Z)},colorSpaceToWorking:function(W,Z){return this.convert(W,Z,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,Z=this.workingColorSpace){return W.fromArray(this.spaces[Z].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,Z,X){return W.copy(this.spaces[Z].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,Z){return P9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,Z)},toWorkingColorSpace:function(W,Z){return P9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,Z)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:TK,fromXYZ:SK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:TK,fromXYZ:SK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var GJ=fX();function s8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function X7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var s9;class f${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(s9===void 0)s9=h7("canvas");s9.width=J.width,s9.height=J.height;let K=s9.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);$=s9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=h7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let K=$.getImageData(0,0,J.width,J.height),W=K.data;for(let Z=0;Z<W.length;Z++)W[Z]=s8(W[Z]/255)*255;return $.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(s8(Q[$]/255)*255);else Q[$]=s8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return a0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var xX=0;class d7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xX++}),this.uuid=F7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},K=this.data;if(K!==null){let W;if(Array.isArray(K)){W=[];for(let Z=0,X=K.length;Z<X;Z++)if(K[Z].isDataTexture)W.push(EQ(K[Z].image));else W.push(EQ(K[Z]))}else W=EQ(K);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function EQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return f$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return a0("Texture: Unable to serialize Texture."),{}}var gX=0,RQ=new g;class mJ extends b8{constructor(J=mJ.DEFAULT_IMAGE,Q=mJ.DEFAULT_MAPPING,$=1001,K=1001,W=1006,Z=1008,X=1023,Y=1009,H=mJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:gX++}),this.uuid=F7(),this.name="",this.source=new d7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=K,this.magFilter=W,this.minFilter=Z,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new o0(0,0),this.repeat=new o0(1,1),this.center=new o0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(RQ).x}get height(){return this.source.getSize(RQ).y}get depth(){return this.source.getSize(RQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){a0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){a0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&$&&(K.isVector2&&$.isVector2))K.copy($);else if(K&&$&&(K.isVector3&&$.isVector3))K.copy($);else if(K&&$&&(K.isMatrix3&&$.isMatrix3))K.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}mJ.DEFAULT_IMAGE=null;mJ.DEFAULT_MAPPING=300;mJ.DEFAULT_ANISOTROPY=1;class wJ{static{wJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,K=1){this.x=J,this.y=Q,this.z=$,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,K){return this.x=J,this.y=Q,this.z=$,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,K=this.z,W=this.w,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*K+Z[12]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*K+Z[13]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*K+Z[14]*W,this.w=Z[3]*Q+Z[7]*$+Z[11]*K+Z[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,K,W,Z=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],D=Y[8],O=Y[1],q=Y[5],R=Y[9],M=Y[2],z=Y[6],E=Y[10];if(Math.abs(U-O)<0.01&&Math.abs(D-M)<0.01&&Math.abs(R-z)<0.01){if(Math.abs(U+O)<0.1&&Math.abs(D+M)<0.1&&Math.abs(R+z)<0.1&&Math.abs(H+q+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let C=(H+1)/2,A=(q+1)/2,V=(E+1)/2,I=(U+O)/4,_=(D+M)/4,w=(R+z)/4;if(C>A&&C>V)if(C<0.01)$=0,K=0.707106781,W=0.707106781;else $=Math.sqrt(C),K=I/$,W=_/$;else if(A>V)if(A<0.01)$=0.707106781,K=0,W=0.707106781;else K=Math.sqrt(A),$=I/K,W=w/K;else if(V<0.01)$=0.707106781,K=0.707106781,W=0;else W=Math.sqrt(V),$=_/W,K=w/W;return this.set($,K,W,Q),this}let N=Math.sqrt((z-R)*(z-R)+(D-M)*(D-M)+(O-U)*(O-U));if(Math.abs(N)<0.001)N=1;return this.x=(z-R)/N,this.y=(D-M)/N,this.z=(O-U)/N,this.w=Math.acos((H+q+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=UJ(this.x,J.x,Q.x),this.y=UJ(this.y,J.y,Q.y),this.z=UJ(this.z,J.z,Q.z),this.w=UJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=UJ(this.x,J,Q),this.y=UJ(this.y,J,Q),this.z=UJ(this.z,J,Q),this.w=UJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(UJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x$ extends b8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new wJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new wJ(0,0,J,Q),this.textures=[];let K={width:J,height:Q,depth:$.depth},W=new mJ(K),Z=$.count;for(let X=0;X<Z;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let K=0,W=this.textures.length;K<W;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=$,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new d7(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class k8 extends x${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class p6 extends mJ{constructor(J=null,Q=1,$=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class g$ extends mJ{constructor(J=null,Q=1,$=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IJ{static{IJ.prototype.isMatrix4=!0}constructor(J,Q,$,K,W,Z,X,Y,H,U,D,O,q,R,M,z){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,K,W,Z,X,Y,H,U,D,O,q,R,M,z)}set(J,Q,$,K,W,Z,X,Y,H,U,D,O,q,R,M,z){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=$,E[12]=K,E[1]=W,E[5]=Z,E[9]=X,E[13]=Y,E[2]=H,E[6]=U,E[10]=D,E[14]=O,E[3]=q,E[7]=R,E[11]=M,E[15]=z,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new IJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,K=1/i9.setFromMatrixColumn(J,0).length(),W=1/i9.setFromMatrixColumn(J,1).length(),Z=1/i9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*K,Q[1]=$[1]*K,Q[2]=$[2]*K,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*Z,Q[9]=$[9]*Z,Q[10]=$[10]*Z,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,K=J.y,W=J.z,Z=Math.cos($),X=Math.sin($),Y=Math.cos(K),H=Math.sin(K),U=Math.cos(W),D=Math.sin(W);if(J.order==="XYZ"){let O=Z*U,q=Z*D,R=X*U,M=X*D;Q[0]=Y*U,Q[4]=-Y*D,Q[8]=H,Q[1]=q+R*H,Q[5]=O-M*H,Q[9]=-X*Y,Q[2]=M-O*H,Q[6]=R+q*H,Q[10]=Z*Y}else if(J.order==="YXZ"){let O=Y*U,q=Y*D,R=H*U,M=H*D;Q[0]=O+M*X,Q[4]=R*X-q,Q[8]=Z*H,Q[1]=Z*D,Q[5]=Z*U,Q[9]=-X,Q[2]=q*X-R,Q[6]=M+O*X,Q[10]=Z*Y}else if(J.order==="ZXY"){let O=Y*U,q=Y*D,R=H*U,M=H*D;Q[0]=O-M*X,Q[4]=-Z*D,Q[8]=R+q*X,Q[1]=q+R*X,Q[5]=Z*U,Q[9]=M-O*X,Q[2]=-Z*H,Q[6]=X,Q[10]=Z*Y}else if(J.order==="ZYX"){let O=Z*U,q=Z*D,R=X*U,M=X*D;Q[0]=Y*U,Q[4]=R*H-q,Q[8]=O*H+M,Q[1]=Y*D,Q[5]=M*H+O,Q[9]=q*H-R,Q[2]=-H,Q[6]=X*Y,Q[10]=Z*Y}else if(J.order==="YZX"){let O=Z*Y,q=Z*H,R=X*Y,M=X*H;Q[0]=Y*U,Q[4]=M-O*D,Q[8]=R*D+q,Q[1]=D,Q[5]=Z*U,Q[9]=-X*U,Q[2]=-H*U,Q[6]=q*D+R,Q[10]=O-M*D}else if(J.order==="XZY"){let O=Z*Y,q=Z*H,R=X*Y,M=X*H;Q[0]=Y*U,Q[4]=-D,Q[8]=H*U,Q[1]=O*D+M,Q[5]=Z*U,Q[9]=q*D-R,Q[2]=R*D-q,Q[6]=X*U,Q[10]=M*D+O}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(pX,J,mX)}lookAt(J,Q,$){let K=this.elements;if(U8.subVectors(J,Q),U8.lengthSq()===0)U8.z=1;if(U8.normalize(),$9.crossVectors($,U8),$9.lengthSq()===0){if(Math.abs($.z)===1)U8.x+=0.0001;else U8.z+=0.0001;U8.normalize(),$9.crossVectors($,U8)}return $9.normalize(),X6.crossVectors(U8,$9),K[0]=$9.x,K[4]=X6.x,K[8]=U8.x,K[1]=$9.y,K[5]=X6.y,K[9]=U8.y,K[2]=$9.z,K[6]=X6.z,K[10]=U8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,K=Q.elements,W=this.elements,Z=$[0],X=$[4],Y=$[8],H=$[12],U=$[1],D=$[5],O=$[9],q=$[13],R=$[2],M=$[6],z=$[10],E=$[14],N=$[3],C=$[7],A=$[11],V=$[15],I=K[0],_=K[4],w=K[8],k=K[12],L=K[1],r=K[5],T=K[9],c=K[13],$0=K[2],i=K[6],J0=K[10],W0=K[14],l=K[3],n=K[7],m=K[11],U0=K[15];return W[0]=Z*I+X*L+Y*$0+H*l,W[4]=Z*_+X*r+Y*i+H*n,W[8]=Z*w+X*T+Y*J0+H*m,W[12]=Z*k+X*c+Y*W0+H*U0,W[1]=U*I+D*L+O*$0+q*l,W[5]=U*_+D*r+O*i+q*n,W[9]=U*w+D*T+O*J0+q*m,W[13]=U*k+D*c+O*W0+q*U0,W[2]=R*I+M*L+z*$0+E*l,W[6]=R*_+M*r+z*i+E*n,W[10]=R*w+M*T+z*J0+E*m,W[14]=R*k+M*c+z*W0+E*U0,W[3]=N*I+C*L+A*$0+V*l,W[7]=N*_+C*r+A*i+V*n,W[11]=N*w+C*T+A*J0+V*m,W[15]=N*k+C*c+A*W0+V*U0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],K=J[8],W=J[12],Z=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],D=J[6],O=J[10],q=J[14],R=J[3],M=J[7],z=J[11],E=J[15],N=Y*q-H*O,C=X*q-H*D,A=X*O-Y*D,V=Z*q-H*U,I=Z*O-Y*U,_=Z*D-X*U;return Q*(M*N-z*C+E*A)-$*(R*N-z*V+E*I)+K*(R*C-M*V+E*_)-W*(R*A-M*I+z*_)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],K=J[8],W=J[1],Z=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return Q*(Z*U-X*H)-$*(W*U-X*Y)+K*(W*H-Z*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],D=J[9],O=J[10],q=J[11],R=J[12],M=J[13],z=J[14],E=J[15],N=Q*X-$*Z,C=Q*Y-K*Z,A=Q*H-W*Z,V=$*Y-K*X,I=$*H-W*X,_=K*H-W*Y,w=U*M-D*R,k=U*z-O*R,L=U*E-q*R,r=D*z-O*M,T=D*E-q*M,c=O*E-q*z,$0=N*c-C*T+A*r+V*L-I*k+_*w;if($0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let i=1/$0;return J[0]=(X*c-Y*T+H*r)*i,J[1]=(K*T-$*c-W*r)*i,J[2]=(M*_-z*I+E*V)*i,J[3]=(O*I-D*_-q*V)*i,J[4]=(Y*L-Z*c-H*k)*i,J[5]=(Q*c-K*L+W*k)*i,J[6]=(z*A-R*_-E*C)*i,J[7]=(U*_-O*A+q*C)*i,J[8]=(Z*T-X*L+H*w)*i,J[9]=($*L-Q*T-W*w)*i,J[10]=(R*I-M*A+E*N)*i,J[11]=(D*A-U*I-q*N)*i,J[12]=(X*k-Z*r-Y*w)*i,J[13]=(Q*r-$*k+K*w)*i,J[14]=(M*C-R*V-z*N)*i,J[15]=(U*V-D*C+O*N)*i,this}scale(J){let Q=this.elements,$=J.x,K=J.y,W=J.z;return Q[0]*=$,Q[4]*=K,Q[8]*=W,Q[1]*=$,Q[5]*=K,Q[9]*=W,Q[2]*=$,Q[6]*=K,Q[10]*=W,Q[3]*=$,Q[7]*=K,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,K))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),K=Math.sin(Q),W=1-$,Z=J.x,X=J.y,Y=J.z,H=W*Z,U=W*X;return this.set(H*Z+$,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,U*X+$,U*Y-K*Z,0,H*Y-K*X,U*Y+K*Z,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,K,W,Z){return this.set(1,$,W,0,J,1,Z,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,$){let K=this.elements,W=Q._x,Z=Q._y,X=Q._z,Y=Q._w,H=W+W,U=Z+Z,D=X+X,O=W*H,q=W*U,R=W*D,M=Z*U,z=Z*D,E=X*D,N=Y*H,C=Y*U,A=Y*D,V=$.x,I=$.y,_=$.z;return K[0]=(1-(M+E))*V,K[1]=(q+A)*V,K[2]=(R-C)*V,K[3]=0,K[4]=(q-A)*I,K[5]=(1-(O+E))*I,K[6]=(z+N)*I,K[7]=0,K[8]=(R+C)*_,K[9]=(z-N)*_,K[10]=(1-(O+M))*_,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,$){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let Z=i9.set(K[0],K[1],K[2]).length(),X=i9.set(K[4],K[5],K[6]).length(),Y=i9.set(K[8],K[9],K[10]).length();if(W<0)Z=-Z;L8.copy(this);let H=1/Z,U=1/X,D=1/Y;return L8.elements[0]*=H,L8.elements[1]*=H,L8.elements[2]*=H,L8.elements[4]*=U,L8.elements[5]*=U,L8.elements[6]*=U,L8.elements[8]*=D,L8.elements[9]*=D,L8.elements[10]*=D,Q.setFromRotationMatrix(L8),$.x=Z,$.y=X,$.z=Y,this}makePerspective(J,Q,$,K,W,Z,X=2000,Y=!1){let H=this.elements,U=2*W/(Q-J),D=2*W/($-K),O=(Q+J)/(Q-J),q=($+K)/($-K),R,M;if(Y)R=W/(Z-W),M=Z*W/(Z-W);else if(X===2000)R=-(Z+W)/(Z-W),M=-2*Z*W/(Z-W);else if(X===2001)R=-Z/(Z-W),M=-Z*W/(Z-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=O,H[12]=0,H[1]=0,H[5]=D,H[9]=q,H[13]=0,H[2]=0,H[6]=0,H[10]=R,H[14]=M,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,K,W,Z,X=2000,Y=!1){let H=this.elements,U=2/(Q-J),D=2/($-K),O=-(Q+J)/(Q-J),q=-($+K)/($-K),R,M;if(Y)R=1/(Z-W),M=Z/(Z-W);else if(X===2000)R=-2/(Z-W),M=-(Z+W)/(Z-W);else if(X===2001)R=-1/(Z-W),M=-W/(Z-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=O,H[1]=0,H[5]=D,H[9]=0,H[13]=q,H[2]=0,H[6]=0,H[10]=R,H[14]=M,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let K=0;K<16;K++)if(Q[K]!==$[K])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var i9=new g,L8=new IJ,pX=new g(0,0,0),mX=new g(1,1,1),$9=new g,X6=new g,U8=new g,jK=new IJ,yK=new R8;class i8{constructor(J=0,Q=0,$=0,K=i8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,K=this._order){return this._x=J,this._y=Q,this._z=$,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let K=J.elements,W=K[0],Z=K[4],X=K[8],Y=K[1],H=K[5],U=K[9],D=K[2],O=K[6],q=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(UJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-Z,W);else this._x=Math.atan2(O,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-UJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-D,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(UJ(O,-1,1)),Math.abs(O)<0.9999999)this._y=Math.atan2(-D,q),this._z=Math.atan2(-Z,H);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-UJ(D,-1,1)),Math.abs(D)<0.9999999)this._x=Math.atan2(O,q),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-Z,H);break;case"YZX":if(this._z=Math.asin(UJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-D,W);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-UJ(Z,-1,1)),Math.abs(Z)<0.9999999)this._x=Math.atan2(O,H),this._y=Math.atan2(X,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:a0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return jK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(jK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return yK.setFromEuler(this),this.setFromQuaternion(yK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}i8.DEFAULT_ORDER="XYZ";class m6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var dX=0,vK=new g,o9=new R8,d8=new IJ,Y6=new g,C7=new g,uX=new g,lX=new R8,hK=new g(1,0,0),bK=new g(0,1,0),fK=new g(0,0,1),xK={type:"added"},cX={type:"removed"},a9={type:"childadded",child:null},kQ={type:"childremoved",child:null};class TJ extends b8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:dX++}),this.uuid=F7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=TJ.DEFAULT_UP.clone();let J=new g,Q=new i8,$=new R8,K=new g(1,1,1);function W(){$.setFromEuler(Q,!1)}function Z(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(Z),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new IJ},normalMatrix:{value:new $J}}),this.matrix=new IJ,this.matrixWorld=new IJ,this.matrixAutoUpdate=TJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=TJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return o9.setFromAxisAngle(J,Q),this.quaternion.multiply(o9),this}rotateOnWorldAxis(J,Q){return o9.setFromAxisAngle(J,Q),this.quaternion.premultiply(o9),this}rotateX(J){return this.rotateOnAxis(hK,J)}rotateY(J){return this.rotateOnAxis(bK,J)}rotateZ(J){return this.rotateOnAxis(fK,J)}translateOnAxis(J,Q){return vK.copy(J).applyQuaternion(this.quaternion),this.position.add(vK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(hK,J)}translateY(J){return this.translateOnAxis(bK,J)}translateZ(J){return this.translateOnAxis(fK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(d8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)Y6.copy(J);else Y6.set(J,Q,$);let K=this.parent;if(this.updateWorldMatrix(!0,!1),C7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)d8.lookAt(C7,Y6,this.up);else d8.lookAt(Y6,C7,this.up);if(this.quaternion.setFromRotationMatrix(d8),K)d8.extractRotation(K.matrixWorld),o9.setFromRotationMatrix(d8),this.quaternion.premultiply(o9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return t0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(xK),a9.child=J,this.dispatchEvent(a9),a9.child=null;else t0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(cX),kQ.child=J,this.dispatchEvent(kQ),kQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),d8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),d8.multiply(J.parent.matrixWorld);return J.applyMatrix4(d8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(xK),a9.child=J,this.dispatchEvent(a9),a9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,K=this.children.length;$<K;$++){let Z=this.children[$].getObjectByProperty(J,Q);if(Z!==void 0)return Z}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let K=this.children;for(let W=0,Z=K.length;W<Z;W++)K[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(C7,J,uX),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(C7,lX,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:K}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*K,W[13]+=$-W[1]*Q-W[5]*$-W[9]*K,W[14]+=K-W[2]*Q-W[6]*$-W[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let Z=0,X=W.length;Z<X;Z++)W[Z].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,this.name!=="")K.name=this.name;if(this.castShadow===!0)K.castShadow=!0;if(this.receiveShadow===!0)K.receiveShadow=!0;if(this.visible===!1)K.visible=!1;if(this.frustumCulled===!1)K.frustumCulled=!1;if(this.renderOrder!==0)K.renderOrder=this.renderOrder;if(this.static!==!1)K.static=this.static;if(Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)K.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function W(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=W(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let D=Y[H];W(J.shapes,D)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push(W(J.materials,this.material[Y]));K.material=X}else K.material=W(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push(W(J.animations,Y))}}if(Q){let X=Z(J.geometries),Y=Z(J.materials),H=Z(J.textures),U=Z(J.images),D=Z(J.shapes),O=Z(J.skeletons),q=Z(J.animations),R=Z(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(D.length>0)$.shapes=D;if(O.length>0)$.skeletons=O;if(q.length>0)$.animations=q;if(R.length>0)$.nodes=R}return $.object=K,$;function Z(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let K=J.children[$];this.add(K.clone())}return this}}TJ.DEFAULT_UP=new g(0,1,0);TJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;TJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class K8 extends TJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var nX={type:"move"};class u7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new K8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new K8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new g,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new g;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new K8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new g,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new g,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let K=null,W=null,Z=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){Z=!0;for(let M of J.hand.values()){let z=Q.getJointPose(M,$),E=this._getHandJoint(H,M);if(z!==null)E.matrix.fromArray(z.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=z.radius;E.visible=z!==null}let U=H.joints["index-finger-tip"],D=H.joints["thumb-tip"],O=U.position.distanceTo(D.position),q=0.02,R=0.005;if(H.inputState.pinching&&O>q+R)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&O<=q-R)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,$),K===null&&W!==null)K=W;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(nX)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=W!==null;if(H!==null)H.visible=Z!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new K8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var aW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},K9={h:0,s:0,l:0},H6={h:0,s:0,l:0};function MQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class QJ{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,GJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,K=GJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,GJ.colorSpaceToWorking(this,K),this}setHSL(J,Q,$,K=GJ.workingColorSpace){if(J=h$(J,1),Q=UJ(Q,0,1),$=UJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,Z=2*$-W;this.r=MQ(Z,W,J+0.3333333333333333),this.g=MQ(Z,W,J),this.b=MQ(Z,W,J-0.3333333333333333)}return GJ.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)a0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,Z=K[1],X=K[2];switch(Z){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:a0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=K[1],Z=W.length;if(Z===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(Z===6)return this.setHex(parseInt(W,16),Q);else a0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=aW[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else a0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=s8(J.r),this.g=s8(J.g),this.b=s8(J.b),this}copyLinearToSRGB(J){return this.r=X7(J.r),this.g=X7(J.g),this.b=X7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return GJ.workingToColorSpace(nJ.copy(this),J),Math.round(UJ(nJ.r*255,0,255))*65536+Math.round(UJ(nJ.g*255,0,255))*256+Math.round(UJ(nJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=GJ.workingColorSpace){GJ.workingToColorSpace(nJ.copy(this),Q);let{r:$,g:K,b:W}=nJ,Z=Math.max($,K,W),X=Math.min($,K,W),Y,H,U=(X+Z)/2;if(X===Z)Y=0,H=0;else{let D=Z-X;switch(H=U<=0.5?D/(Z+X):D/(2-Z-X),Z){case $:Y=(K-W)/D+(K<W?6:0);break;case K:Y=(W-$)/D+2;break;case W:Y=($-K)/D+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,Q=GJ.workingColorSpace){return GJ.workingToColorSpace(nJ.copy(this),Q),J.r=nJ.r,J.g=nJ.g,J.b=nJ.b,J}getStyle(J="srgb"){GJ.workingToColorSpace(nJ.copy(this),J);let{r:Q,g:$,b:K}=nJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(K*255)})`}offsetHSL(J,Q,$){return this.getHSL(K9),this.setHSL(K9.h+J,K9.s+Q,K9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(K9),J.getHSL(H6);let $=v7(K9.h,H6.h,Q),K=v7(K9.s,H6.s,Q),W=v7(K9.l,H6.l,Q);return this.setHSL($,K,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,K=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*K,this.g=W[1]*Q+W[4]*$+W[7]*K,this.b=W[2]*Q+W[5]*$+W[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var nJ=new QJ;QJ.NAMES=aW;class l7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new QJ(J),this.density=Q}clone(){return new l7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class d6 extends TJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new i8,this.environmentIntensity=1,this.environmentRotation=new i8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var z8=new g,u8=new g,VQ=new g,l8=new g,r9=new g,t9=new g,gK=new g,BQ=new g,LQ=new g,zQ=new g,IQ=new wJ,PQ=new wJ,AQ=new wJ;class E8{constructor(J=new g,Q=new g,$=new g){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,K){K.subVectors($,Q),z8.subVectors(J,Q),K.cross(z8);let W=K.lengthSq();if(W>0)return K.multiplyScalar(1/Math.sqrt(W));return K.set(0,0,0)}static getBarycoord(J,Q,$,K,W){z8.subVectors(K,Q),u8.subVectors($,Q),VQ.subVectors(J,Q);let Z=z8.dot(z8),X=z8.dot(u8),Y=z8.dot(VQ),H=u8.dot(u8),U=u8.dot(VQ),D=Z*H-X*X;if(D===0)return W.set(0,0,0),null;let O=1/D,q=(H*Y-X*U)*O,R=(Z*U-X*Y)*O;return W.set(1-q-R,R,q)}static containsPoint(J,Q,$,K){if(this.getBarycoord(J,Q,$,K,l8)===null)return!1;return l8.x>=0&&l8.y>=0&&l8.x+l8.y<=1}static getInterpolation(J,Q,$,K,W,Z,X,Y){if(this.getBarycoord(J,Q,$,K,l8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,l8.x),Y.addScaledVector(Z,l8.y),Y.addScaledVector(X,l8.z),Y}static getInterpolatedAttribute(J,Q,$,K,W,Z){return IQ.setScalar(0),PQ.setScalar(0),AQ.setScalar(0),IQ.fromBufferAttribute(J,Q),PQ.fromBufferAttribute(J,$),AQ.fromBufferAttribute(J,K),Z.setScalar(0),Z.addScaledVector(IQ,W.x),Z.addScaledVector(PQ,W.y),Z.addScaledVector(AQ,W.z),Z}static isFrontFacing(J,Q,$,K){return z8.subVectors($,Q),u8.subVectors(J,Q),z8.cross(u8).dot(K)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,K){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,$,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return z8.subVectors(this.c,this.b),u8.subVectors(this.a,this.b),z8.cross(u8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return E8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return E8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,K,W){return E8.getInterpolation(J,this.a,this.b,this.c,Q,$,K,W)}containsPoint(J){return E8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return E8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,K=this.b,W=this.c,Z,X;r9.subVectors(K,$),t9.subVectors(W,$),BQ.subVectors(J,$);let Y=r9.dot(BQ),H=t9.dot(BQ);if(Y<=0&&H<=0)return Q.copy($);LQ.subVectors(J,K);let U=r9.dot(LQ),D=t9.dot(LQ);if(U>=0&&D<=U)return Q.copy(K);let O=Y*D-U*H;if(O<=0&&Y>=0&&U<=0)return Z=Y/(Y-U),Q.copy($).addScaledVector(r9,Z);zQ.subVectors(J,W);let q=r9.dot(zQ),R=t9.dot(zQ);if(R>=0&&q<=R)return Q.copy(W);let M=q*H-Y*R;if(M<=0&&H>=0&&R<=0)return X=H/(H-R),Q.copy($).addScaledVector(t9,X);let z=U*R-q*D;if(z<=0&&D-U>=0&&q-R>=0)return gK.subVectors(W,K),X=(D-U)/(D-U+(q-R)),Q.copy(K).addScaledVector(gK,X);let E=1/(z+M+O);return Z=M*E,X=O*E,Q.copy($).addScaledVector(r9,Z).addScaledVector(t9,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class v9{constructor(J=new g(1/0,1/0,1/0),Q=new g(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(I8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(I8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=I8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let Z=0,X=W.count;Z<X;Z++){if(J.isMesh===!0)J.getVertexPosition(Z,I8);else I8.fromBufferAttribute(W,Z);I8.applyMatrix4(J.matrixWorld),this.expandByPoint(I8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();U6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();U6.copy($.boundingBox)}U6.applyMatrix4(J.matrixWorld),this.union(U6)}}let K=J.children;for(let W=0,Z=K.length;W<Z;W++)this.expandByObject(K[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,I8),I8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(T7),q6.subVectors(this.max,T7),e9.subVectors(J.a,T7),J7.subVectors(J.b,T7),Q7.subVectors(J.c,T7),W9.subVectors(J7,e9),Z9.subVectors(Q7,J7),B9.subVectors(e9,Q7);let Q=[0,-W9.z,W9.y,0,-Z9.z,Z9.y,0,-B9.z,B9.y,W9.z,0,-W9.x,Z9.z,0,-Z9.x,B9.z,0,-B9.x,-W9.y,W9.x,0,-Z9.y,Z9.x,0,-B9.y,B9.x,0];if(!_Q(Q,e9,J7,Q7,q6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!_Q(Q,e9,J7,Q7,q6))return!1;return N6.crossVectors(W9,Z9),Q=[N6.x,N6.y,N6.z],_Q(Q,e9,J7,Q7,q6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,I8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(I8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return c8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),c8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),c8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),c8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),c8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),c8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),c8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),c8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(c8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var c8=[new g,new g,new g,new g,new g,new g,new g,new g],I8=new g,U6=new v9,e9=new g,J7=new g,Q7=new g,W9=new g,Z9=new g,B9=new g,T7=new g,q6=new g,N6=new g,L9=new g;function _Q(J,Q,$,K,W){for(let Z=0,X=J.length-3;Z<=X;Z+=3){L9.fromArray(J,Z);let Y=W.x*Math.abs(L9.x)+W.y*Math.abs(L9.y)+W.z*Math.abs(L9.z),H=Q.dot(L9),U=$.dot(L9),D=K.dot(L9);if(Math.max(-Math.max(H,U,D),Math.min(H,U,D))>Y)return!1}return!0}var CJ=new g,G6=new o0,sX=0;class dJ extends b8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sX++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let K=0,W=this.itemSize;K<W;K++)this.array[J+K]=Q.array[$+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)G6.fromBufferAttribute(this,Q),G6.applyMatrix3(J),this.setXY(Q,G6.x,G6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)CJ.fromBufferAttribute(this,Q),CJ.applyMatrix3(J),this.setXYZ(Q,CJ.x,CJ.y,CJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)CJ.fromBufferAttribute(this,Q),CJ.applyMatrix4(J),this.setXYZ(Q,CJ.x,CJ.y,CJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)CJ.fromBufferAttribute(this,Q),CJ.applyNormalMatrix(J),this.setXYZ(Q,CJ.x,CJ.y,CJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)CJ.fromBufferAttribute(this,Q),CJ.transformDirection(J),this.setXYZ(Q,CJ.x,CJ.y,CJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=Z7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=tJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=Z7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=Z7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=Z7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=Z7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,K){if(J*=this.itemSize,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array),K=tJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=K,this}setXYZW(J,Q,$,K,W){if(J*=this.itemSize,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array),K=tJ(K,this.array),W=tJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=K,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class u6 extends dJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class l6 extends dJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class LJ extends dJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var iX=new v9,S7=new g,wQ=new g;class O7{constructor(J=new g,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else iX.setFromPoints(J).getCenter($);let K=0;for(let W=0,Z=J.length;W<Z;W++)K=Math.max(K,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;S7.subVectors(J,this.center);let Q=S7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),K=($-this.radius)*0.5;this.center.addScaledVector(S7,K/$),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else wQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(S7.copy(J.center).add(wQ)),this.expandByPoint(S7.copy(J.center).sub(wQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var oX=0,D8=new IJ,CQ=new TJ,$7=new g,q8=new v9,j7=new v9,fJ=new g;class SJ extends b8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oX++}),this.uuid=F7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((MX(J))?l6:u6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new $J().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return D8.makeRotationFromQuaternion(J),this.applyMatrix4(D8),this}rotateX(J){return D8.makeRotationX(J),this.applyMatrix4(D8),this}rotateY(J){return D8.makeRotationY(J),this.applyMatrix4(D8),this}rotateZ(J){return D8.makeRotationZ(J),this.applyMatrix4(D8),this}translate(J,Q,$){return D8.makeTranslation(J,Q,$),this.applyMatrix4(D8),this}scale(J,Q,$){return D8.makeScale(J,Q,$),this.applyMatrix4(D8),this}lookAt(J){return CQ.lookAt(J),CQ.updateMatrix(),this.applyMatrix4(CQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($7).negate(),this.translate($7.x,$7.y,$7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let K=0,W=J.length;K<W;K++){let Z=J[K];$.push(Z.x,Z.y,Z.z||0)}this.setAttribute("position",new LJ($,3))}else{let $=Math.min(J.length,Q.count);for(let K=0;K<$;K++){let W=J[K];Q.setXYZ(K,W.x,W.y,W.z||0)}if(J.length>Q.count)a0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new v9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){t0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new g(-1/0,-1/0,-1/0),new g(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,K=Q.length;$<K;$++){let W=Q[$];if(q8.setFromBufferAttribute(W),this.morphTargetsRelative)fJ.addVectors(this.boundingBox.min,q8.min),this.boundingBox.expandByPoint(fJ),fJ.addVectors(this.boundingBox.max,q8.max),this.boundingBox.expandByPoint(fJ);else this.boundingBox.expandByPoint(q8.min),this.boundingBox.expandByPoint(q8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))t0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new O7;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){t0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new g,1/0);return}if(J){let $=this.boundingSphere.center;if(q8.setFromBufferAttribute(J),Q)for(let W=0,Z=Q.length;W<Z;W++){let X=Q[W];if(j7.setFromBufferAttribute(X),this.morphTargetsRelative)fJ.addVectors(q8.min,j7.min),q8.expandByPoint(fJ),fJ.addVectors(q8.max,j7.max),q8.expandByPoint(fJ);else q8.expandByPoint(j7.min),q8.expandByPoint(j7.max)}q8.getCenter($);let K=0;for(let W=0,Z=J.count;W<Z;W++)fJ.fromBufferAttribute(J,W),K=Math.max(K,$.distanceToSquared(fJ));if(Q)for(let W=0,Z=Q.length;W<Z;W++){let X=Q[W],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(fJ.fromBufferAttribute(X,H),Y)$7.fromBufferAttribute(J,H),fJ.add($7);K=Math.max(K,$.distanceToSquared(fJ))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))t0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){t0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:K,uv:W}=Q,Z=this.getAttribute("tangent");if(Z===void 0||Z.count!==$.count)Z=new dJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",Z);let X=[],Y=[];for(let w=0;w<$.count;w++)X[w]=new g,Y[w]=new g;let H=new g,U=new g,D=new g,O=new o0,q=new o0,R=new o0,M=new g,z=new g;function E(w,k,L){H.fromBufferAttribute($,w),U.fromBufferAttribute($,k),D.fromBufferAttribute($,L),O.fromBufferAttribute(W,w),q.fromBufferAttribute(W,k),R.fromBufferAttribute(W,L),U.sub(H),D.sub(H),q.sub(O),R.sub(O);let r=1/(q.x*R.y-R.x*q.y);if(!isFinite(r))return;M.copy(U).multiplyScalar(R.y).addScaledVector(D,-q.y).multiplyScalar(r),z.copy(D).multiplyScalar(q.x).addScaledVector(U,-R.x).multiplyScalar(r),X[w].add(M),X[k].add(M),X[L].add(M),Y[w].add(z),Y[k].add(z),Y[L].add(z)}let N=this.groups;if(N.length===0)N=[{start:0,count:J.count}];for(let w=0,k=N.length;w<k;++w){let L=N[w],r=L.start,T=L.count;for(let c=r,$0=r+T;c<$0;c+=3)E(J.getX(c+0),J.getX(c+1),J.getX(c+2))}let C=new g,A=new g,V=new g,I=new g;function _(w){V.fromBufferAttribute(K,w),I.copy(V);let k=X[w];C.copy(k),C.sub(V.multiplyScalar(V.dot(k))).normalize(),A.crossVectors(I,k);let r=A.dot(Y[w])<0?-1:1;Z.setXYZW(w,C.x,C.y,C.z,r)}for(let w=0,k=N.length;w<k;++w){let L=N[w],r=L.start,T=L.count;for(let c=r,$0=r+T;c<$0;c+=3)_(J.getX(c+0)),_(J.getX(c+1)),_(J.getX(c+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new dJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let O=0,q=$.count;O<q;O++)$.setXYZ(O,0,0,0);let K=new g,W=new g,Z=new g,X=new g,Y=new g,H=new g,U=new g,D=new g;if(J)for(let O=0,q=J.count;O<q;O+=3){let R=J.getX(O+0),M=J.getX(O+1),z=J.getX(O+2);K.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,M),Z.fromBufferAttribute(Q,z),U.subVectors(Z,W),D.subVectors(K,W),U.cross(D),X.fromBufferAttribute($,R),Y.fromBufferAttribute($,M),H.fromBufferAttribute($,z),X.add(U),Y.add(U),H.add(U),$.setXYZ(R,X.x,X.y,X.z),$.setXYZ(M,Y.x,Y.y,Y.z),$.setXYZ(z,H.x,H.y,H.z)}else for(let O=0,q=Q.count;O<q;O+=3)K.fromBufferAttribute(Q,O+0),W.fromBufferAttribute(Q,O+1),Z.fromBufferAttribute(Q,O+2),U.subVectors(Z,W),D.subVectors(K,W),U.cross(D),$.setXYZ(O+0,U.x,U.y,U.z),$.setXYZ(O+1,U.x,U.y,U.z),$.setXYZ(O+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)fJ.fromBufferAttribute(J,Q),fJ.normalize(),J.setXYZ(Q,fJ.x,fJ.y,fJ.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:D}=X,O=new H.constructor(Y.length*U),q=0,R=0;for(let M=0,z=Y.length;M<z;M++){if(X.isInterleavedBufferAttribute)q=Y[M]*X.data.stride+X.offset;else q=Y[M]*U;for(let E=0;E<U;E++)O[R++]=H[q++]}return new dJ(O,U,D)}if(this.index===null)return a0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new SJ,$=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,$);Q.setAttribute(X,H)}let W=this.morphAttributes;for(let X in W){let Y=[],H=W[X];for(let U=0,D=H.length;U<D;U++){let O=H[U],q=J(O,$);Y.push(q)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;for(let X=0,Y=Z.length;X<Y;X++){let H=Z[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let H=$[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},W=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let D=0,O=H.length;D<O;D++){let q=H[D];U.push(q.toJSON(J.data))}if(U.length>0)K[Y]=U,W=!0}if(W)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;if(Z.length>0)J.data.groups=JSON.parse(JSON.stringify(Z));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let K=J.attributes;for(let H in K){let U=K[H];this.setAttribute(H,U.clone(Q))}let W=J.morphAttributes;for(let H in W){let U=[],D=W[H];for(let O=0,q=D.length;O<q;O++)U.push(D[O].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let Z=J.groups;for(let H=0,U=Z.length;H<U;H++){let D=Z[H];this.addGroup(D.start,D.count,D.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var aX=0;class G9 extends b8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:aX++}),this.uuid=F7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new QJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){a0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){a0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set($);else if(K&&K.isVector2&&($&&$.isVector2)||K&&K.isEuler&&($&&$.isEuler)||K&&K.isVector3&&($&&$.isVector3))K.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function K(W){let Z=[];for(let X in W){let Y=W[X];delete Y.metadata,Z.push(Y)}return Z}if(Q){let W=K(J.textures),Z=K(J.images);if(W.length>0)$.textures=W;if(Z.length>0)$.images=Z}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new QJ().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new o0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new o0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let K=Q.length;$=Array(K);for(let W=0;W!==K;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var n8=new g,TQ=new g,F6=new g,X9=new g,SQ=new g,O6=new g,jQ=new g;class D7{constructor(J=new g,Q=new g(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,n8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=n8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return n8.copy(this.origin).addScaledVector(this.direction,Q),n8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,K){TQ.copy(J).add(Q).multiplyScalar(0.5),F6.copy(Q).sub(J).normalize(),X9.copy(this.origin).sub(TQ);let W=J.distanceTo(Q)*0.5,Z=-this.direction.dot(F6),X=X9.dot(this.direction),Y=-X9.dot(F6),H=X9.lengthSq(),U=Math.abs(1-Z*Z),D,O,q,R;if(U>0)if(D=Z*Y-X,O=Z*X-Y,R=W*U,D>=0)if(O>=-R)if(O<=R){let M=1/U;D*=M,O*=M,q=D*(D+Z*O+2*X)+O*(Z*D+O+2*Y)+H}else O=W,D=Math.max(0,-(Z*O+X)),q=-D*D+O*(O+2*Y)+H;else O=-W,D=Math.max(0,-(Z*O+X)),q=-D*D+O*(O+2*Y)+H;else if(O<=-R)D=Math.max(0,-(-Z*W+X)),O=D>0?-W:Math.min(Math.max(-W,-Y),W),q=-D*D+O*(O+2*Y)+H;else if(O<=R)D=0,O=Math.min(Math.max(-W,-Y),W),q=O*(O+2*Y)+H;else D=Math.max(0,-(Z*W+X)),O=D>0?W:Math.min(Math.max(-W,-Y),W),q=-D*D+O*(O+2*Y)+H;else O=Z>0?-W:W,D=Math.max(0,-(Z*O+X)),q=-D*D+O*(O+2*Y)+H;if($)$.copy(this.origin).addScaledVector(this.direction,D);if(K)K.copy(TQ).addScaledVector(F6,O);return q}intersectSphere(J,Q){n8.subVectors(J.center,this.origin);let $=n8.dot(this.direction),K=n8.dot(n8)-$*$,W=J.radius*J.radius;if(K>W)return null;let Z=Math.sqrt(W-K),X=$-Z,Y=$+Z;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,K,W,Z,X,Y,H=1/this.direction.x,U=1/this.direction.y,D=1/this.direction.z,O=this.origin;if(H>=0)$=(J.min.x-O.x)*H,K=(J.max.x-O.x)*H;else $=(J.max.x-O.x)*H,K=(J.min.x-O.x)*H;if(U>=0)W=(J.min.y-O.y)*U,Z=(J.max.y-O.y)*U;else W=(J.max.y-O.y)*U,Z=(J.min.y-O.y)*U;if($>Z||W>K)return null;if(W>$||isNaN($))$=W;if(Z<K||isNaN(K))K=Z;if(D>=0)X=(J.min.z-O.z)*D,Y=(J.max.z-O.z)*D;else X=(J.max.z-O.z)*D,Y=(J.min.z-O.z)*D;if($>Y||X>K)return null;if(X>$||$!==$)$=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at($>=0?$:K,Q)}intersectsBox(J){return this.intersectBox(J,n8)!==null}intersectTriangle(J,Q,$,K,W){SQ.subVectors(Q,J),O6.subVectors($,J),jQ.crossVectors(SQ,O6);let Z=this.direction.dot(jQ),X;if(Z>0){if(K)return null;X=1}else if(Z<0)X=-1,Z=-Z;else return null;X9.subVectors(this.origin,J);let Y=X*this.direction.dot(O6.crossVectors(X9,O6));if(Y<0)return null;let H=X*this.direction.dot(SQ.cross(X9));if(H<0)return null;if(Y+H>Z)return null;let U=-X*X9.dot(jQ);if(U<0)return null;return this.at(U/Z,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yJ extends G9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new QJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new i8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var pK=new IJ,z9=new D7,D6=new O7,mK=new g,E6=new g,R6=new g,k6=new g,yQ=new g,M6=new g,dK=new g,V6=new g;class D0 extends TJ{constructor(J=new SJ,Q=new yJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let K=Q[$[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Z=K.length;W<Z;W++){let X=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition(J,Q){let $=this.geometry,K=$.attributes.position,W=$.morphAttributes.position,Z=$.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if(W&&X){M6.set(0,0,0);for(let Y=0,H=W.length;Y<H;Y++){let U=X[Y],D=W[Y];if(U===0)continue;if(yQ.fromBufferAttribute(D,J),Z)M6.addScaledVector(yQ,U);else M6.addScaledVector(yQ.sub(Q),U)}Q.add(M6)}return Q}raycast(J,Q){let $=this.geometry,K=this.material,W=this.matrixWorld;if(K===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(D6.copy($.boundingSphere),D6.applyMatrix4(W),z9.copy(J.ray).recast(J.near),D6.containsPoint(z9.origin)===!1){if(z9.intersectSphere(D6,mK)===null)return;if(z9.origin.distanceToSquared(mK)>(J.far-J.near)**2)return}if(pK.copy(W).invert(),z9.copy(J.ray).applyMatrix4(pK),$.boundingBox!==null){if(z9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,z9)}_computeIntersections(J,Q,$){let K,W=this.geometry,Z=this.material,X=W.index,Y=W.attributes.position,H=W.attributes.uv,U=W.attributes.uv1,D=W.attributes.normal,O=W.groups,q=W.drawRange;if(X!==null)if(Array.isArray(Z))for(let R=0,M=O.length;R<M;R++){let z=O[R],E=Z[z.materialIndex],N=Math.max(z.start,q.start),C=Math.min(X.count,Math.min(z.start+z.count,q.start+q.count));for(let A=N,V=C;A<V;A+=3){let I=X.getX(A),_=X.getX(A+1),w=X.getX(A+2);if(K=B6(this,E,J,$,H,U,D,I,_,w),K)K.faceIndex=Math.floor(A/3),K.face.materialIndex=z.materialIndex,Q.push(K)}}else{let R=Math.max(0,q.start),M=Math.min(X.count,q.start+q.count);for(let z=R,E=M;z<E;z+=3){let N=X.getX(z),C=X.getX(z+1),A=X.getX(z+2);if(K=B6(this,Z,J,$,H,U,D,N,C,A),K)K.faceIndex=Math.floor(z/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(Z))for(let R=0,M=O.length;R<M;R++){let z=O[R],E=Z[z.materialIndex],N=Math.max(z.start,q.start),C=Math.min(Y.count,Math.min(z.start+z.count,q.start+q.count));for(let A=N,V=C;A<V;A+=3){let I=A,_=A+1,w=A+2;if(K=B6(this,E,J,$,H,U,D,I,_,w),K)K.faceIndex=Math.floor(A/3),K.face.materialIndex=z.materialIndex,Q.push(K)}}else{let R=Math.max(0,q.start),M=Math.min(Y.count,q.start+q.count);for(let z=R,E=M;z<E;z+=3){let N=z,C=z+1,A=z+2;if(K=B6(this,Z,J,$,H,U,D,N,C,A),K)K.faceIndex=Math.floor(z/3),Q.push(K)}}}}function rX(J,Q,$,K,W,Z,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,Z,W,!0,Y);else H=K.intersectTriangle(W,Z,X,Q.side===0,Y);if(H===null)return null;V6.copy(Y),V6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(V6);if(U<$.near||U>$.far)return null;return{distance:U,point:V6.clone(),object:J}}function B6(J,Q,$,K,W,Z,X,Y,H,U){J.getVertexPosition(Y,E6),J.getVertexPosition(H,R6),J.getVertexPosition(U,k6);let D=rX(J,Q,$,K,E6,R6,k6,dK);if(D){let O=new g;if(E8.getBarycoord(dK,E6,R6,k6,O),W)D.uv=E8.getInterpolatedAttribute(W,Y,H,U,O,new o0);if(Z)D.uv1=E8.getInterpolatedAttribute(Z,Y,H,U,O,new o0);if(X){if(D.normal=E8.getInterpolatedAttribute(X,Y,H,U,O,new g),D.normal.dot(K.direction)>0)D.normal.multiplyScalar(-1)}let q={a:Y,b:H,c:U,normal:new g,materialIndex:0};E8.getNormal(E6,R6,k6,q.normal),D.face=q,D.barycoord=O}return D}class p$ extends mJ{constructor(J=null,Q=1,$=1,K,W,Z,X,Y,H=1003,U=1003,D,O){super(null,Z,X,Y,H,U,K,W,D,O);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var vQ=new g,tX=new g,eX=new $J;class P8{constructor(J=new g(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,K){return this.normal.set(J,Q,$),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let K=vQ.subVectors($,Q).cross(tX.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let K=J.delta(vQ),W=this.normal.dot(K);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let Z=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(Z<0||Z>1))return null;return Q.copy(J.start).addScaledVector(K,Z)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||eX.getNormalMatrix(J),K=this.coplanarPoint(vQ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-K.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var I9=new O7,JY=new o0(0.5,0.5),L6=new g;class c7{constructor(J=new P8,Q=new P8,$=new P8,K=new P8,W=new P8,Z=new P8){this.planes=[J,Q,$,K,W,Z]}set(J,Q,$,K,W,Z){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(K),X[4].copy(W),X[5].copy(Z),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let K=this.planes,W=J.elements,Z=W[0],X=W[1],Y=W[2],H=W[3],U=W[4],D=W[5],O=W[6],q=W[7],R=W[8],M=W[9],z=W[10],E=W[11],N=W[12],C=W[13],A=W[14],V=W[15];if(K[0].setComponents(H-Z,q-U,E-R,V-N).normalize(),K[1].setComponents(H+Z,q+U,E+R,V+N).normalize(),K[2].setComponents(H+X,q+D,E+M,V+C).normalize(),K[3].setComponents(H-X,q-D,E-M,V-C).normalize(),$)K[4].setComponents(Y,O,z,A).normalize(),K[5].setComponents(H-Y,q-O,E-z,V-A).normalize();else if(K[4].setComponents(H-Y,q-O,E-z,V-A).normalize(),Q===2000)K[5].setComponents(H+Y,q+O,E+z,V+A).normalize();else if(Q===2001)K[5].setComponents(Y,O,z,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();I9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();I9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(I9)}intersectsSprite(J){I9.center.set(0,0,0);let Q=JY.distanceTo(J.center);return I9.radius=0.7071067811865476+Q,I9.applyMatrix4(J.matrixWorld),this.intersectsSphere(I9)}intersectsSphere(J){let Q=this.planes,$=J.center,K=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let K=Q[$];if(L6.x=K.normal.x>0?J.max.x:J.min.x,L6.y=K.normal.y>0?J.max.y:J.min.y,L6.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(L6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class h9 extends G9{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new QJ(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var uK=new IJ,bQ=new D7,z6=new O7,I6=new g;class E7 extends TJ{constructor(J=new SJ,Q=new h9){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,K=this.matrixWorld,W=J.params.Points.threshold,Z=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(z6.copy($.boundingSphere),z6.applyMatrix4(K),z6.radius+=W,J.ray.intersectsSphere(z6)===!1)return;uK.copy(K).invert(),bQ.copy(J.ray).applyMatrix4(uK);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=X*X,H=$.index,D=$.attributes.position;if(H!==null){let O=Math.max(0,Z.start),q=Math.min(H.count,Z.start+Z.count);for(let R=O,M=q;R<M;R++){let z=H.getX(R);I6.fromBufferAttribute(D,z),lK(I6,z,Y,K,J,Q,this)}}else{let O=Math.max(0,Z.start),q=Math.min(D.count,Z.start+Z.count);for(let R=O,M=q;R<M;R++)I6.fromBufferAttribute(D,R),lK(I6,R,Y,K,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let K=Q[$[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Z=K.length;W<Z;W++){let X=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function lK(J,Q,$,K,W,Z,X){let Y=bQ.distanceSqToPoint(J);if(Y<$){let H=new g;bQ.closestPointToPoint(J,H),H.applyMatrix4(K);let U=W.ray.origin.distanceTo(H);if(U<W.near||U>W.far)return;Z.push({distance:U,distanceToRay:Math.sqrt(Y),point:H,index:Q,face:null,faceIndex:null,barycoord:null,object:X})}}class c6 extends mJ{constructor(J=[],Q=301,$,K,W,Z,X,Y,H,U){super(J,Q,$,K,W,Z,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class f8 extends mJ{constructor(J,Q,$,K,W,Z,X,Y,H){super(J,Q,$,K,W,Z,X,Y,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class F9 extends mJ{constructor(J,Q,$=1014,K,W,Z,X=1003,Y=1003,H,U=1026,D=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let O={width:J,height:Q,depth:D};super(O,K,W,Z,X,Y,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new d7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class m$ extends F9{constructor(J,Q=1014,$=301,K,W,Z=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},D=[U,U,U,U,U,U];super(J,J,Q,$,K,W,Z,X,Y,H);this.image=D,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class n6 extends mJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class m0 extends SJ{constructor(J=1,Q=1,$=1,K=1,W=1,Z=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:K,heightSegments:W,depthSegments:Z};let X=this;K=Math.floor(K),W=Math.floor(W),Z=Math.floor(Z);let Y=[],H=[],U=[],D=[],O=0,q=0;R("z","y","x",-1,-1,$,Q,J,Z,W,0),R("z","y","x",1,-1,$,Q,-J,Z,W,1),R("x","z","y",1,1,J,$,Q,K,Z,2),R("x","z","y",1,-1,J,$,-Q,K,Z,3),R("x","y","z",1,-1,J,Q,$,K,W,4),R("x","y","z",-1,-1,J,Q,-$,K,W,5),this.setIndex(Y),this.setAttribute("position",new LJ(H,3)),this.setAttribute("normal",new LJ(U,3)),this.setAttribute("uv",new LJ(D,2));function R(M,z,E,N,C,A,V,I,_,w,k){let L=A/_,r=V/w,T=A/2,c=V/2,$0=I/2,i=_+1,J0=w+1,W0=0,l=0,n=new g;for(let m=0;m<J0;m++){let U0=m*r-c;for(let E0=0;E0<i;E0++){let F0=E0*L-T;n[M]=F0*N,n[z]=U0*C,n[E]=$0,H.push(n.x,n.y,n.z),n[M]=0,n[z]=0,n[E]=I>0?1:-1,U.push(n.x,n.y,n.z),D.push(E0/_),D.push(1-m/w),W0+=1}}for(let m=0;m<w;m++)for(let U0=0;U0<_;U0++){let E0=O+U0+i*m,F0=O+U0+i*(m+1),e0=O+(U0+1)+i*(m+1),f0=O+(U0+1)+i*m;Y.push(E0,F0,f0),Y.push(F0,e0,f0),l+=6}X.addGroup(q,l,k),q+=l,O+=W0}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new m0(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class xJ extends SJ{constructor(J=1,Q=1,$=1,K=32,W=1,Z=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:K,heightSegments:W,openEnded:Z,thetaStart:X,thetaLength:Y};let H=this;K=Math.floor(K),W=Math.floor(W);let U=[],D=[],O=[],q=[],R=0,M=[],z=$/2,E=0;if(N(),Z===!1){if(J>0)C(!0);if(Q>0)C(!1)}this.setIndex(U),this.setAttribute("position",new LJ(D,3)),this.setAttribute("normal",new LJ(O,3)),this.setAttribute("uv",new LJ(q,2));function N(){let A=new g,V=new g,I=0,_=(Q-J)/$;for(let w=0;w<=W;w++){let k=[],L=w/W,r=L*(Q-J)+J;for(let T=0;T<=K;T++){let c=T/K,$0=c*Y+X,i=Math.sin($0),J0=Math.cos($0);V.x=r*i,V.y=-L*$+z,V.z=r*J0,D.push(V.x,V.y,V.z),A.set(i,_,J0).normalize(),O.push(A.x,A.y,A.z),q.push(c,1-L),k.push(R++)}M.push(k)}for(let w=0;w<K;w++)for(let k=0;k<W;k++){let L=M[k][w],r=M[k+1][w],T=M[k+1][w+1],c=M[k][w+1];if(J>0||k!==0)U.push(L,r,c),I+=3;if(Q>0||k!==W-1)U.push(r,T,c),I+=3}H.addGroup(E,I,0),E+=I}function C(A){let V=R,I=new o0,_=new g,w=0,k=A===!0?J:Q,L=A===!0?1:-1;for(let T=1;T<=K;T++)D.push(0,z*L,0),O.push(0,L,0),q.push(0.5,0.5),R++;let r=R;for(let T=0;T<=K;T++){let $0=T/K*Y+X,i=Math.cos($0),J0=Math.sin($0);_.x=k*J0,_.y=z*L,_.z=k*i,D.push(_.x,_.y,_.z),O.push(0,L,0),I.x=i*0.5+0.5,I.y=J0*0.5*L+0.5,q.push(I.x,I.y),R++}for(let T=0;T<K;T++){let c=V+T,$0=r+T;if(A===!0)U.push($0,$0+1,c);else U.push($0+1,$0,c);w+=3}H.addGroup(E,w,A===!0?1:2),E+=w}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new xJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class b9 extends xJ{constructor(J=1,Q=1,$=32,K=1,W=!1,Z=0,X=Math.PI*2){super(0,J,Q,$,K,W,Z,X);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:K,openEnded:W,thetaStart:Z,thetaLength:X}}static fromJSON(J){return new b9(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class s6 extends SJ{constructor(J=[],Q=[],$=1,K=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:K};let W=[],Z=[];if(X(K),H($),U(),this.setAttribute("position",new LJ(W,3)),this.setAttribute("normal",new LJ(W.slice(),3)),this.setAttribute("uv",new LJ(Z,2)),K===0)this.computeVertexNormals();else this.normalizeNormals();function X(N){let C=new g,A=new g,V=new g;for(let I=0;I<Q.length;I+=3)q(Q[I+0],C),q(Q[I+1],A),q(Q[I+2],V),Y(C,A,V,N)}function Y(N,C,A,V){let I=V+1,_=[];for(let w=0;w<=I;w++){_[w]=[];let k=N.clone().lerp(A,w/I),L=C.clone().lerp(A,w/I),r=I-w;for(let T=0;T<=r;T++)if(T===0&&w===I)_[w][T]=k;else _[w][T]=k.clone().lerp(L,T/r)}for(let w=0;w<I;w++)for(let k=0;k<2*(I-w)-1;k++){let L=Math.floor(k/2);if(k%2===0)O(_[w][L+1]),O(_[w+1][L]),O(_[w][L]);else O(_[w][L+1]),O(_[w+1][L+1]),O(_[w+1][L])}}function H(N){let C=new g;for(let A=0;A<W.length;A+=3)C.x=W[A+0],C.y=W[A+1],C.z=W[A+2],C.normalize().multiplyScalar(N),W[A+0]=C.x,W[A+1]=C.y,W[A+2]=C.z}function U(){let N=new g;for(let C=0;C<W.length;C+=3){N.x=W[C+0],N.y=W[C+1],N.z=W[C+2];let A=z(N)/2/Math.PI+0.5,V=E(N)/Math.PI+0.5;Z.push(A,1-V)}R(),D()}function D(){for(let N=0;N<Z.length;N+=6){let C=Z[N+0],A=Z[N+2],V=Z[N+4],I=Math.max(C,A,V),_=Math.min(C,A,V);if(I>0.9&&_<0.1){if(C<0.2)Z[N+0]+=1;if(A<0.2)Z[N+2]+=1;if(V<0.2)Z[N+4]+=1}}}function O(N){W.push(N.x,N.y,N.z)}function q(N,C){let A=N*3;C.x=J[A+0],C.y=J[A+1],C.z=J[A+2]}function R(){let N=new g,C=new g,A=new g,V=new g,I=new o0,_=new o0,w=new o0;for(let k=0,L=0;k<W.length;k+=9,L+=6){N.set(W[k+0],W[k+1],W[k+2]),C.set(W[k+3],W[k+4],W[k+5]),A.set(W[k+6],W[k+7],W[k+8]),I.set(Z[L+0],Z[L+1]),_.set(Z[L+2],Z[L+3]),w.set(Z[L+4],Z[L+5]),V.copy(N).add(C).add(A).divideScalar(3);let r=z(V);M(I,L+0,N,r),M(_,L+2,C,r),M(w,L+4,A,r)}}function M(N,C,A,V){if(V<0&&N.x===1)Z[C]=N.x-1;if(A.x===0&&A.z===0)Z[C]=V/2/Math.PI+0.5}function z(N){return Math.atan2(N.z,-N.x)}function E(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new s6(J.vertices,J.indices,J.radius,J.detail)}}class R7 extends s6{constructor(J=1,Q=0){let $=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],K=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super($,K,J,Q);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new R7(J.radius,J.detail)}}class w8 extends SJ{constructor(J=1,Q=1,$=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:K};let W=J/2,Z=Q/2,X=Math.floor($),Y=Math.floor(K),H=X+1,U=Y+1,D=J/X,O=Q/Y,q=[],R=[],M=[],z=[];for(let E=0;E<U;E++){let N=E*O-Z;for(let C=0;C<H;C++){let A=C*D-W;R.push(A,-N,0),M.push(0,0,1),z.push(C/X),z.push(1-E/Y)}}for(let E=0;E<Y;E++)for(let N=0;N<X;N++){let C=N+H*E,A=N+H*(E+1),V=N+1+H*(E+1),I=N+1+H*E;q.push(C,A,I),q.push(A,V,I)}this.setIndex(q),this.setAttribute("position",new LJ(R,3)),this.setAttribute("normal",new LJ(M,3)),this.setAttribute("uv",new LJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new w8(J.width,J.height,J.widthSegments,J.heightSegments)}}class O9 extends SJ{constructor(J=0.5,Q=1,$=32,K=1,W=0,Z=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:K,thetaStart:W,thetaLength:Z},$=Math.max(3,$),K=Math.max(1,K);let X=[],Y=[],H=[],U=[],D=J,O=(Q-J)/K,q=new g,R=new o0;for(let M=0;M<=K;M++){for(let z=0;z<=$;z++){let E=W+z/$*Z;q.x=D*Math.cos(E),q.y=D*Math.sin(E),Y.push(q.x,q.y,q.z),H.push(0,0,1),R.x=(q.x/Q+1)/2,R.y=(q.y/Q+1)/2,U.push(R.x,R.y)}D+=O}for(let M=0;M<K;M++){let z=M*($+1);for(let E=0;E<$;E++){let N=E+z,C=N,A=N+$+1,V=N+$+2,I=N+1;X.push(C,A,I),X.push(A,V,I)}}this.setIndex(X),this.setAttribute("position",new LJ(Y,3)),this.setAttribute("normal",new LJ(H,3)),this.setAttribute("uv",new LJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new O9(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class x8 extends SJ{constructor(J=1,Q=32,$=16,K=0,W=Math.PI*2,Z=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:K,phiLength:W,thetaStart:Z,thetaLength:X},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(Z+X,Math.PI),H=0,U=[],D=new g,O=new g,q=[],R=[],M=[],z=[];for(let E=0;E<=$;E++){let N=[],C=E/$,A=Z+C*X,V=J*Math.cos(A),I=Math.sqrt(J*J-V*V),_=0;if(E===0&&Z===0)_=0.5/Q;else if(E===$&&Y===Math.PI)_=-0.5/Q;for(let w=0;w<=Q;w++){let k=w/Q,L=K+k*W;D.x=-I*Math.cos(L),D.y=V,D.z=I*Math.sin(L),R.push(D.x,D.y,D.z),O.copy(D).normalize(),M.push(O.x,O.y,O.z),z.push(k+_,1-C),N.push(H++)}U.push(N)}for(let E=0;E<$;E++)for(let N=0;N<Q;N++){let C=U[E][N+1],A=U[E][N],V=U[E+1][N],I=U[E+1][N+1];if(E!==0||Z>0)q.push(C,A,I);if(E!==$-1||Y<Math.PI)q.push(A,V,I)}this.setIndex(q),this.setAttribute("position",new LJ(R,3)),this.setAttribute("normal",new LJ(M,3)),this.setAttribute("uv",new LJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new x8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class k7 extends SJ{constructor(J=1,Q=0.4,$=12,K=48,W=Math.PI*2,Z=0,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:K,arc:W,thetaStart:Z,thetaLength:X},$=Math.floor($),K=Math.floor(K);let Y=[],H=[],U=[],D=[],O=new g,q=new g,R=new g;for(let M=0;M<=$;M++){let z=Z+M/$*X;for(let E=0;E<=K;E++){let N=E/K*W;q.x=(J+Q*Math.cos(z))*Math.cos(N),q.y=(J+Q*Math.cos(z))*Math.sin(N),q.z=Q*Math.sin(z),H.push(q.x,q.y,q.z),O.x=J*Math.cos(N),O.y=J*Math.sin(N),R.subVectors(q,O).normalize(),U.push(R.x,R.y,R.z),D.push(E/K),D.push(M/$)}}for(let M=1;M<=$;M++)for(let z=1;z<=K;z++){let E=(K+1)*M+z-1,N=(K+1)*(M-1)+z-1,C=(K+1)*(M-1)+z,A=(K+1)*M+z;Y.push(E,N,A),Y.push(N,C,A)}this.setIndex(Y),this.setAttribute("position",new LJ(H,3)),this.setAttribute("normal",new LJ(U,3)),this.setAttribute("uv",new LJ(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new k7(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}function f9(J){let Q={};for(let $ in J){Q[$]={};for(let K in J[$]){let W=J[$][K];if(cK(W))if(W.isRenderTargetTexture)a0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][K]=null;else Q[$][K]=W.clone();else if(Array.isArray(W))if(cK(W[0])){let Z=[];for(let X=0,Y=W.length;X<Y;X++)Z[X]=W[X].clone();Q[$][K]=Z}else Q[$][K]=W.slice();else Q[$][K]=W}}return Q}function iJ(J){let Q={};for(let $=0;$<J.length;$++){let K=f9(J[$]);for(let W in K)Q[W]=K[W]}return Q}function cK(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function QY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function d$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return GJ.workingColorSpace}var rW={clone:f9,merge:iJ},$Y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Z8 extends G9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$Y,this.fragmentShader=KY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=f9(J.uniforms),this.uniformsGroups=QY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let Z=this.uniforms[K].value;if(Z&&Z.isTexture)Q.uniforms[K]={type:"t",value:Z.toJSON(J).uuid};else if(Z&&Z.isColor)Q.uniforms[K]={type:"c",value:Z.getHex()};else if(Z&&Z.isVector2)Q.uniforms[K]={type:"v2",value:Z.toArray()};else if(Z&&Z.isVector3)Q.uniforms[K]={type:"v3",value:Z.toArray()};else if(Z&&Z.isVector4)Q.uniforms[K]={type:"v4",value:Z.toArray()};else if(Z&&Z.isMatrix3)Q.uniforms[K]={type:"m3",value:Z.toArray()};else if(Z&&Z.isMatrix4)Q.uniforms[K]={type:"m4",value:Z.toArray()};else Q.uniforms[K]={value:Z}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let K in this.extensions)if(this.extensions[K]===!0)$[K]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let K=J.uniforms[$];switch(this.uniforms[$]={},K.type){case"t":this.uniforms[$].value=Q[K.value]||null;break;case"c":this.uniforms[$].value=new QJ().setHex(K.value);break;case"v2":this.uniforms[$].value=new o0().fromArray(K.value);break;case"v3":this.uniforms[$].value=new g().fromArray(K.value);break;case"v4":this.uniforms[$].value=new wJ().fromArray(K.value);break;case"m3":this.uniforms[$].value=new $J().fromArray(K.value);break;case"m4":this.uniforms[$].value=new IJ().fromArray(K.value);break;default:this.uniforms[$].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class u$ extends Z8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JJ extends G9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new QJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new QJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new o0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new i8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class M7 extends JJ{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new o0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return UJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new QJ(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new QJ(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new QJ(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class l$ extends G9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class c$ extends G9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function P6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class x9{constructor(J,Q,$,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,K=Q[$],W=Q[$-1];$:{J:{let Z;Q:{K:if(!(J<K)){for(let X=$+2;;){if(K===void 0){if(J<W)break K;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(W=K,K=Q[++$],J<K)break J}Z=Q.length;break Q}if(!(J>=W)){let X=Q[1];if(J<X)$=2,W=X;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(K=W,W=Q[--$-1],J>=W)break J}Z=$,$=0;break Q}break $}while($<Z){let X=$+Z>>>1;if(J<Q[X])Z=X;else $=X+1}if(K=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,K)}return this.interpolate_($,W,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,K=this.valueSize,W=J*K;for(let Z=0;Z!==K;++Z)Q[Z]=$[W+Z];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class n$ extends x9{constructor(J,Q,$,K){super(J,Q,$,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let K=this.parameterPositions,W=J-2,Z=J+1,X=K[W],Y=K[Z];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,X=2*Q-$;break;case 2402:W=K.length-2,X=Q+K[W]-K[W+1];break;default:W=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:Z=J,Y=2*$-Q;break;case 2402:Z=1,Y=$+K[1]-K[0];break;default:Z=J-1,Y=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-$),this._offsetPrev=W*U,this._offsetNext=Z*U}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,D=this._offsetNext,O=this._weightPrev,q=this._weightNext,R=($-Q)/(K-Q),M=R*R,z=M*R,E=-O*z+2*O*M-O*R,N=(1+O)*z+(-1.5-2*O)*M+(-0.5+O)*R+1,C=(-1-q)*z+(1.5+q)*M+0.5*R,A=q*z-q*M;for(let V=0;V!==X;++V)W[V]=E*Z[U+V]+N*Z[H+V]+C*Z[Y+V]+A*Z[D+V];return W}}class s$ extends x9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=($-Q)/(K-Q),D=1-U;for(let O=0;O!==X;++O)W[O]=Z[H+O]*D+Z[Y+O]*U;return W}}class i$ extends x9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class o$ extends x9{interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,D=this.outTangents;if(!U||!D){let R=($-Q)/(K-Q),M=1-R;for(let z=0;z!==X;++z)W[z]=Z[H+z]*M+Z[Y+z]*R;return W}let O=X*2,q=J-1;for(let R=0;R!==X;++R){let M=Z[H+R],z=Z[Y+R],E=q*O+R*2,N=D[E],C=D[E+1],A=J*O+R*2,V=U[A],I=U[A+1],_=($-Q)/(K-Q),w,k,L,r,T;for(let c=0;c<8;c++){w=_*_,k=w*_,L=1-_,r=L*L,T=r*L;let i=T*Q+3*r*_*N+3*L*w*V+k*K-$;if(Math.abs(i)<0.0000000001)break;let J0=3*r*(N-Q)+6*L*_*(V-N)+3*w*(K-V);if(Math.abs(J0)<0.0000000001)break;_=_-i/J0,_=Math.max(0,Math.min(1,_))}W[R]=T*M+3*r*_*C+3*L*w*I+k*z}return W}}class M8{constructor(J,Q,$,K){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=P6(Q,this.TimeBufferType),this.values=P6($,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:P6(J.times,Array),values:P6(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)$.interpolation=K}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new i$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new s$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new n$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new o$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return a0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,K=Q.length;$!==K;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,K=Q.length;$!==K;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,K=$.length,W=0,Z=K-1;while(W!==K&&$[W]<J)++W;while(Z!==-1&&$[Z]>Q)--Z;if(++Z,W!==0||Z!==K){if(W>=Z)Z=Math.max(Z,1),W=Z-1;let X=this.getValueSize();this.times=$.slice(W,Z),this.values=this.values.slice(W*X,Z*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)t0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,K=this.values,W=$.length;if(W===0)t0("KeyframeTrack: Track is empty.",this),J=!1;let Z=null;for(let X=0;X!==W;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){t0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(Z!==null&&Z>Y){t0("KeyframeTrack: Out of order keys.",this,X,Y,Z),J=!1;break}Z=Y}if(K!==void 0){if(VX(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){t0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),K=this.getInterpolation()===2302,W=J.length-1,Z=1;for(let X=1;X<W;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!K){let D=X*$,O=D-$,q=D+$;for(let R=0;R!==$;++R){let M=Q[D+R];if(M!==Q[O+R]||M!==Q[q+R]){Y=!0;break}}}else Y=!0;if(Y){if(X!==Z){J[Z]=J[X];let D=X*$,O=Z*$;for(let q=0;q!==$;++q)Q[O+q]=Q[D+q]}++Z}}if(W>0){J[Z]=J[W];for(let X=W*$,Y=Z*$,H=0;H!==$;++H)Q[Y+H]=Q[X+H];++Z}if(Z!==J.length)this.times=J.slice(0,Z),this.values=Q.slice(0,Z*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);return K.createInterpolant=this.createInterpolant,K}}M8.prototype.ValueTypeName="";M8.prototype.TimeBufferType=Float32Array;M8.prototype.ValueBufferType=Float32Array;M8.prototype.DefaultInterpolation=2301;class g9 extends M8{constructor(J,Q,$){super(J,Q,$)}}g9.prototype.ValueTypeName="bool";g9.prototype.ValueBufferType=Array;g9.prototype.DefaultInterpolation=2300;g9.prototype.InterpolantFactoryMethodLinear=void 0;g9.prototype.InterpolantFactoryMethodSmooth=void 0;class a$ extends M8{constructor(J,Q,$,K){super(J,Q,$,K)}}a$.prototype.ValueTypeName="color";class r$ extends M8{constructor(J,Q,$,K){super(J,Q,$,K)}}r$.prototype.ValueTypeName="number";class t$ extends x9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=($-Q)/(K-Q),H=J*X;for(let U=H+X;H!==U;H+=4)R8.slerpFlat(W,0,Z,H-X,Z,H,Y);return W}}class i6 extends M8{constructor(J,Q,$,K){super(J,Q,$,K)}InterpolantFactoryMethodLinear(J){return new t$(this.times,this.values,this.getValueSize(),J)}}i6.prototype.ValueTypeName="quaternion";i6.prototype.InterpolantFactoryMethodSmooth=void 0;class p9 extends M8{constructor(J,Q,$){super(J,Q,$)}}p9.prototype.ValueTypeName="string";p9.prototype.ValueBufferType=Array;p9.prototype.DefaultInterpolation=2300;p9.prototype.InterpolantFactoryMethodLinear=void 0;p9.prototype.InterpolantFactoryMethodSmooth=void 0;class e$ extends M8{constructor(J,Q,$,K){super(J,Q,$,K)}}e$.prototype.ValueTypeName="vector";class JK{constructor(J,Q,$){let K=this,W=!1,Z=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(X++,W===!1){if(K.onStart!==void 0)K.onStart(U,Z,X)}W=!0},this.itemEnd=function(U){if(Z++,K.onProgress!==void 0)K.onProgress(U,Z,X);if(Z===X){if(W=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(U){if(K.onError!==void 0)K.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,D){return H.push(U,D),this},this.removeHandler=function(U){let D=H.indexOf(U);if(D!==-1)H.splice(D,2);return this},this.getHandler=function(U){for(let D=0,O=H.length;D<O;D+=2){let q=H[D],R=H[D+1];if(q.global)q.lastIndex=0;if(q.test(U))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var tW=new JK;class QK{constructor(J){if(this.manager=J!==void 0?J:tW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(K,W){$.load(J,K,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}QK.DEFAULT_MATERIAL_NAME="__DEFAULT";class V7 extends TJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new QJ(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var hQ=new IJ,nK=new g,sK=new g;class o6{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new o0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new IJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new c7,this._frameExtents=new o0(1,1),this._viewportCount=1,this._viewports=[new wJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(nK.setFromMatrixPosition(J.matrixWorld),Q.position.copy(nK),sK.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(sK),Q.updateMatrixWorld(),hQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hQ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(hQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var A6=new g,_6=new R8,j8=new g;class a6 extends TJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new IJ,this.projectionMatrix=new IJ,this.projectionMatrixInverse=new IJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(A6,_6,j8),j8.x===1&&j8.y===1&&j8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(A6,_6,j8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(A6,_6,j8),j8.x===1&&j8.y===1&&j8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(A6,_6,j8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Y9=new g,iK=new o0,oK=new o0;class pJ extends a6{constructor(J=50,Q=1,$=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=A9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(y7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return A9*2*Math.atan(Math.tan(y7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){Y9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(Y9.x,Y9.y).multiplyScalar(-J/Y9.z),Y9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(Y9.x,Y9.y).multiplyScalar(-J/Y9.z)}getViewSize(J,Q){return this.getViewBounds(J,iK,oK),Q.subVectors(oK,iK)}setViewOffset(J,Q,$,K,W,Z){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=K,this.view.width=W,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(y7*0.5*this.fov)/this.zoom,$=2*Q,K=this.aspect*$,W=-0.5*K,Z=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=Z;W+=Z.offsetX*K/Y,Q-=Z.offsetY*$/H,K*=Z.width/Y,$*=Z.height/H}let X=this.filmOffset;if(X!==0)W+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+K,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class eW extends o6{constructor(){super(new pJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=A9*2*J.angle*this.focus,K=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||K!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=K,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class D9 extends V7{constructor(J,Q,$=0,K=Math.PI/3,W=0,Z=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(TJ.DEFAULT_UP),this.updateMatrix(),this.target=new TJ,this.distance=$,this.angle=K,this.penumbra=W,this.decay=Z,this.map=null,this.shadow=new eW}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class JZ extends o6{constructor(){super(new pJ(90,1,0.5,500));this.isPointLightShadow=!0}}class t8 extends V7{constructor(J,Q,$=0,K=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=K,this.shadow=new JZ}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class n7 extends a6{constructor(J=-1,Q=1,$=1,K=-1,W=0.1,Z=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=K,this.near=W,this.far=Z,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,K,W,Z){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=K,this.view.width=W,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,K=(this.top+this.bottom)/2,W=$-J,Z=$+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=H*this.view.offsetX,Z=W+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic(W,Z,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class QZ extends o6{constructor(){super(new n7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class B7 extends V7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(TJ.DEFAULT_UP),this.updateMatrix(),this.target=new TJ,this.shadow=new QZ}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class r6 extends V7{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var K7=-90,W7=1;class $K extends TJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new pJ(K7,W7,J,Q);K.layers=this.layers,this.add(K);let W=new pJ(K7,W7,J,Q);W.layers=this.layers,this.add(W);let Z=new pJ(K7,W7,J,Q);Z.layers=this.layers,this.add(Z);let X=new pJ(K7,W7,J,Q);X.layers=this.layers,this.add(X);let Y=new pJ(K7,W7,J,Q);Y.layers=this.layers,this.add(Y);let H=new pJ(K7,W7,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,K,W,Z,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),Z.up.set(0,0,1),Z.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),Z.up.set(0,0,-1),Z.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,Z,X,Y,H,U]=this.children,D=J.getRenderTarget(),O=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let M=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let z=!1;if(J.isWebGLRenderer===!0)z=J.state.buffers.depth.getReversed();else z=J.reversedDepthBuffer;if(J.setRenderTarget($,0,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,2,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=M,J.setRenderTarget($,5,K),z&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(D,O,q),J.xr.enabled=R,$.texture.needsPMREMUpdate=!0}}class KK extends pJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var WK="\\[\\]\\.:\\/",WY=new RegExp("["+WK+"]","g"),ZK="[^"+WK+"]",ZY="[^"+WK.replace("\\.","")+"]",XY=/((?:WC+[\/:])*)/.source.replace("WC",ZK),YY=/(WCOD+)?/.source.replace("WCOD",ZY),HY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ZK),UY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ZK),qY=new RegExp("^"+XY+YY+HY+UY+"$"),NY=["material","materials","bones","map"];class $Z{constructor(J,Q,$){let K=$||RJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,K=this._bindings[$];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let K=this._targetGroup.nCachedObjects_,W=$.length;K!==W;++K)$[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class RJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||RJ.parseTrackName(Q),this.node=RJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new RJ(J,Q,$);else return new RJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(WY,"")}static parseTrackName(J){let Q=qY.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=$.nodeName&&$.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let W=$.nodeName.substring(K+1);if(NY.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,K),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let Z=0;Z<W.length;Z++){let X=W[Z];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},K=$(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)J[Q++]=$[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,K=Q.propertyName,W=Q.propertyIndex;if(!J)J=RJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){a0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){t0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){t0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){t0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){t0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){t0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){t0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){t0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let Z=J[K];if(Z===void 0){let H=Q.nodeName;t0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){t0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){t0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=Z,this.propertyIndex=W}else if(Z.fromArray!==void 0&&Z.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=Z;else if(Array.isArray(Z))Y=this.BindingType.EntireArray,this.resolvedProperty=Z;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}RJ.Composite=$Z;RJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};RJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};RJ.prototype.GetterByBindingType=[RJ.prototype._getValue_direct,RJ.prototype._getValue_array,RJ.prototype._getValue_arrayElement,RJ.prototype._getValue_toArray];RJ.prototype.SetterByBindingTypeAndVersioning=[[RJ.prototype._setValue_direct,RJ.prototype._setValue_direct_setNeedsUpdate,RJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_array,RJ.prototype._setValue_array_setNeedsUpdate,RJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_arrayElement,RJ.prototype._setValue_arrayElement_setNeedsUpdate,RJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_fromArray,RJ.prototype._setValue_fromArray_setNeedsUpdate,RJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uN=new Float32Array(1);class s7{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=UJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(UJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class XK{static{XK.prototype.isMatrix2=!0}constructor(J,Q,$,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,K){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=K,this}}class t6 extends b8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(J===void 0){a0("Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function YK(J,Q,$,K){let W=GY(K);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function GY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)a0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function PZ(){let J=null,Q=!1,$=null,K=null;function W(Z,X){$(Z,X),K=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;K=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(Z){$=Z},setContext:function(Z){J=Z}}}function FY(J){let Q=new WeakMap;function $(Y,H){let{array:U,usage:D}=Y,O=U.byteLength,q=J.createBuffer();J.bindBuffer(H,q),J.bufferData(H,U,D),Y.onUploadCallback();let R;if(U instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)R=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)R=J.SHORT;else if(U instanceof Uint32Array)R=J.UNSIGNED_INT;else if(U instanceof Int32Array)R=J.INT;else if(U instanceof Int8Array)R=J.BYTE;else if(U instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:R,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:O}}function K(Y,H,U){let{array:D,updateRanges:O}=H;if(J.bindBuffer(U,Y),O.length===0)J.bufferSubData(U,0,D);else{O.sort((R,M)=>R.start-M.start);let q=0;for(let R=1;R<O.length;R++){let M=O[q],z=O[R];if(z.start<=M.start+M.count+1)M.count=Math.max(M.count,z.start+z.count-M.start);else++q,O[q]=z}O.length=q+1;for(let R=0,M=O.length;R<M;R++){let z=O[R];J.bufferSubData(U,z.start*D.BYTES_PER_ELEMENT,D,z.start,z.count)}H.clearUpdateRanges()}H.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let D=Q.get(Y);if(!D||D.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(U.buffer,Y,H),U.version=Y.version}}return{get:W,remove:Z,update:X}}var OY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DY=`#ifdef USE_ALPHAHASH
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
#endif`,EY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VY=`#ifdef USE_AOMAP
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
#endif`,BY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LY=`#ifdef USE_BATCHING
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
#endif`,zY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AY=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_Y=`#ifdef USE_IRIDESCENCE
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
#endif`,wY=`#ifdef USE_BUMPMAP
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
#endif`,CY=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jY=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fY=`#define PI 3.141592653589793
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
} // validated`,xY=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gY=`vec3 transformedNormal = objectNormal;
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
#endif`,pY=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mY=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dY=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uY=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lY="gl_FragColor = linearToOutputTexel( gl_FragColor );",cY=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nY=`#ifdef USE_ENVMAP
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
#endif`,sY=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iY=`#ifdef USE_ENVMAP
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
#endif`,oY=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aY=`#ifdef USE_ENVMAP
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
#endif`,rY=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tY=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eY=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QH=`#ifdef USE_GRADIENTMAP
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
}`,$H=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZH=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,XH=`#ifdef USE_ENVMAP
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
#endif`,YH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NH=`PhysicalMaterial material;
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
#endif`,GH=`uniform sampler2D dfgLUT;
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
}`,FH=`
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
#endif`,OH=`#if defined( RE_IndirectDiffuse )
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
#endif`,DH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EH=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,RH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IH=`#if defined( USE_POINTS_UV )
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
#endif`,PH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_H=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wH=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TH=`#ifdef USE_MORPHTARGETS
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
#endif`,SH=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yH=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bH=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fH=`#ifdef USE_NORMALMAP
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
#endif`,xH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mH=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dH=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uH=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lH=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cH=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nH=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sH=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iH=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oH=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aH=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rH=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tH=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eH=`float getShadowMask() {
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
}`,J5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q5=`#ifdef USE_SKINNING
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
#endif`,$5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K5=`#ifdef USE_SKINNING
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
#endif`,W5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y5=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H5=`#ifdef USE_TRANSMISSION
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
#endif`,U5=`#ifdef USE_TRANSMISSION
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
#endif`,q5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D5=`uniform sampler2D t2D;
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
}`,E5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V5=`#include <common>
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
}`,B5=`#if DEPTH_PACKING == 3200
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
}`,L5=`#define DISTANCE
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
}`,z5=`#define DISTANCE
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
}`,I5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A5=`uniform float scale;
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
}`,_5=`uniform vec3 diffuse;
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
}`,w5=`#include <common>
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
}`,C5=`uniform vec3 diffuse;
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
}`,T5=`#define LAMBERT
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
}`,S5=`#define LAMBERT
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
}`,j5=`#define MATCAP
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
}`,y5=`#define MATCAP
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
}`,v5=`#define NORMAL
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
}`,h5=`#define NORMAL
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
}`,b5=`#define PHONG
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
}`,f5=`#define PHONG
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
}`,x5=`#define STANDARD
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
}`,g5=`#define STANDARD
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
}`,p5=`#define TOON
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
}`,m5=`#define TOON
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
}`,d5=`uniform float size;
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
}`,u5=`uniform vec3 diffuse;
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
}`,l5=`#include <common>
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
}`,c5=`uniform vec3 color;
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
}`,n5=`uniform float rotation;
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
}`,s5=`uniform vec3 diffuse;
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
}`,HJ={alphahash_fragment:OY,alphahash_pars_fragment:DY,alphamap_fragment:EY,alphamap_pars_fragment:RY,alphatest_fragment:kY,alphatest_pars_fragment:MY,aomap_fragment:VY,aomap_pars_fragment:BY,batching_pars_vertex:LY,batching_vertex:zY,begin_vertex:IY,beginnormal_vertex:PY,bsdfs:AY,iridescence_fragment:_Y,bumpmap_pars_fragment:wY,clipping_planes_fragment:CY,clipping_planes_pars_fragment:TY,clipping_planes_pars_vertex:SY,clipping_planes_vertex:jY,color_fragment:yY,color_pars_fragment:vY,color_pars_vertex:hY,color_vertex:bY,common:fY,cube_uv_reflection_fragment:xY,defaultnormal_vertex:gY,displacementmap_pars_vertex:pY,displacementmap_vertex:mY,emissivemap_fragment:dY,emissivemap_pars_fragment:uY,colorspace_fragment:lY,colorspace_pars_fragment:cY,envmap_fragment:nY,envmap_common_pars_fragment:sY,envmap_pars_fragment:iY,envmap_pars_vertex:oY,envmap_physical_pars_fragment:XH,envmap_vertex:aY,fog_vertex:rY,fog_pars_vertex:tY,fog_fragment:eY,fog_pars_fragment:JH,gradientmap_pars_fragment:QH,lightmap_pars_fragment:$H,lights_lambert_fragment:KH,lights_lambert_pars_fragment:WH,lights_pars_begin:ZH,lights_toon_fragment:YH,lights_toon_pars_fragment:HH,lights_phong_fragment:UH,lights_phong_pars_fragment:qH,lights_physical_fragment:NH,lights_physical_pars_fragment:GH,lights_fragment_begin:FH,lights_fragment_maps:OH,lights_fragment_end:DH,lightprobes_pars_fragment:EH,logdepthbuf_fragment:RH,logdepthbuf_pars_fragment:kH,logdepthbuf_pars_vertex:MH,logdepthbuf_vertex:VH,map_fragment:BH,map_pars_fragment:LH,map_particle_fragment:zH,map_particle_pars_fragment:IH,metalnessmap_fragment:PH,metalnessmap_pars_fragment:AH,morphinstance_vertex:_H,morphcolor_vertex:wH,morphnormal_vertex:CH,morphtarget_pars_vertex:TH,morphtarget_vertex:SH,normal_fragment_begin:jH,normal_fragment_maps:yH,normal_pars_fragment:vH,normal_pars_vertex:hH,normal_vertex:bH,normalmap_pars_fragment:fH,clearcoat_normal_fragment_begin:xH,clearcoat_normal_fragment_maps:gH,clearcoat_pars_fragment:pH,iridescence_pars_fragment:mH,opaque_fragment:dH,packing:uH,premultiplied_alpha_fragment:lH,project_vertex:cH,dithering_fragment:nH,dithering_pars_fragment:sH,roughnessmap_fragment:iH,roughnessmap_pars_fragment:oH,shadowmap_pars_fragment:aH,shadowmap_pars_vertex:rH,shadowmap_vertex:tH,shadowmask_pars_fragment:eH,skinbase_vertex:J5,skinning_pars_vertex:Q5,skinning_vertex:$5,skinnormal_vertex:K5,specularmap_fragment:W5,specularmap_pars_fragment:Z5,tonemapping_fragment:X5,tonemapping_pars_fragment:Y5,transmission_fragment:H5,transmission_pars_fragment:U5,uv_pars_fragment:q5,uv_pars_vertex:N5,uv_vertex:G5,worldpos_vertex:F5,background_vert:O5,background_frag:D5,backgroundCube_vert:E5,backgroundCube_frag:R5,cube_vert:k5,cube_frag:M5,depth_vert:V5,depth_frag:B5,distance_vert:L5,distance_frag:z5,equirect_vert:I5,equirect_frag:P5,linedashed_vert:A5,linedashed_frag:_5,meshbasic_vert:w5,meshbasic_frag:C5,meshlambert_vert:T5,meshlambert_frag:S5,meshmatcap_vert:j5,meshmatcap_frag:y5,meshnormal_vert:v5,meshnormal_frag:h5,meshphong_vert:b5,meshphong_frag:f5,meshphysical_vert:x5,meshphysical_frag:g5,meshtoon_vert:p5,meshtoon_frag:m5,points_vert:d5,points_frag:u5,shadow_vert:l5,shadow_frag:c5,sprite_vert:n5,sprite_frag:s5},T0={common:{diffuse:{value:new QJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $J},alphaMap:{value:null},alphaMapTransform:{value:new $J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $J}},envmap:{envMap:{value:null},envMapRotation:{value:new $J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $J},normalScale:{value:new o0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new QJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new g},probesMax:{value:new g},probesResolution:{value:new g}},points:{diffuse:{value:new QJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $J},alphaTest:{value:0},uvTransform:{value:new $J}},sprite:{diffuse:{value:new QJ(16777215)},opacity:{value:1},center:{value:new o0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $J},alphaMap:{value:null},alphaMapTransform:{value:new $J},alphaTest:{value:0}}},p8={basic:{uniforms:iJ([T0.common,T0.specularmap,T0.envmap,T0.aomap,T0.lightmap,T0.fog]),vertexShader:HJ.meshbasic_vert,fragmentShader:HJ.meshbasic_frag},lambert:{uniforms:iJ([T0.common,T0.specularmap,T0.envmap,T0.aomap,T0.lightmap,T0.emissivemap,T0.bumpmap,T0.normalmap,T0.displacementmap,T0.fog,T0.lights,{emissive:{value:new QJ(0)},envMapIntensity:{value:1}}]),vertexShader:HJ.meshlambert_vert,fragmentShader:HJ.meshlambert_frag},phong:{uniforms:iJ([T0.common,T0.specularmap,T0.envmap,T0.aomap,T0.lightmap,T0.emissivemap,T0.bumpmap,T0.normalmap,T0.displacementmap,T0.fog,T0.lights,{emissive:{value:new QJ(0)},specular:{value:new QJ(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:HJ.meshphong_vert,fragmentShader:HJ.meshphong_frag},standard:{uniforms:iJ([T0.common,T0.envmap,T0.aomap,T0.lightmap,T0.emissivemap,T0.bumpmap,T0.normalmap,T0.displacementmap,T0.roughnessmap,T0.metalnessmap,T0.fog,T0.lights,{emissive:{value:new QJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:HJ.meshphysical_vert,fragmentShader:HJ.meshphysical_frag},toon:{uniforms:iJ([T0.common,T0.aomap,T0.lightmap,T0.emissivemap,T0.bumpmap,T0.normalmap,T0.displacementmap,T0.gradientmap,T0.fog,T0.lights,{emissive:{value:new QJ(0)}}]),vertexShader:HJ.meshtoon_vert,fragmentShader:HJ.meshtoon_frag},matcap:{uniforms:iJ([T0.common,T0.bumpmap,T0.normalmap,T0.displacementmap,T0.fog,{matcap:{value:null}}]),vertexShader:HJ.meshmatcap_vert,fragmentShader:HJ.meshmatcap_frag},points:{uniforms:iJ([T0.points,T0.fog]),vertexShader:HJ.points_vert,fragmentShader:HJ.points_frag},dashed:{uniforms:iJ([T0.common,T0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:HJ.linedashed_vert,fragmentShader:HJ.linedashed_frag},depth:{uniforms:iJ([T0.common,T0.displacementmap]),vertexShader:HJ.depth_vert,fragmentShader:HJ.depth_frag},normal:{uniforms:iJ([T0.common,T0.bumpmap,T0.normalmap,T0.displacementmap,{opacity:{value:1}}]),vertexShader:HJ.meshnormal_vert,fragmentShader:HJ.meshnormal_frag},sprite:{uniforms:iJ([T0.sprite,T0.fog]),vertexShader:HJ.sprite_vert,fragmentShader:HJ.sprite_frag},background:{uniforms:{uvTransform:{value:new $J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:HJ.background_vert,fragmentShader:HJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $J}},vertexShader:HJ.backgroundCube_vert,fragmentShader:HJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:HJ.cube_vert,fragmentShader:HJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:HJ.equirect_vert,fragmentShader:HJ.equirect_frag},distance:{uniforms:iJ([T0.common,T0.displacementmap,{referencePosition:{value:new g},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:HJ.distance_vert,fragmentShader:HJ.distance_frag},shadow:{uniforms:iJ([T0.lights,T0.fog,{color:{value:new QJ(0)},opacity:{value:1}}]),vertexShader:HJ.shadow_vert,fragmentShader:HJ.shadow_frag}};p8.physical={uniforms:iJ([p8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $J},clearcoatNormalScale:{value:new o0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $J},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $J},sheen:{value:0},sheenColor:{value:new QJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $J},transmissionSamplerSize:{value:new o0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $J},attenuationDistance:{value:0},attenuationColor:{value:new QJ(0)},specularColor:{value:new QJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $J},anisotropyVector:{value:new o0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $J}}]),vertexShader:HJ.meshphysical_vert,fragmentShader:HJ.meshphysical_frag};var e6={r:0,b:0,g:0},i5=new IJ,AZ=new $J;AZ.set(-1,0,0,0,1,0,0,0,1);function o5(J,Q,$,K,W,Z){let X=new QJ(0),Y=W===!0?0:1,H,U,D=null,O=0,q=null;function R(C){let A=C.isScene===!0?C.background:null;if(A&&A.isTexture){let V=C.backgroundBlurriness>0;A=Q.get(A,V)}return A}function M(C){let A=!1,V=R(C);if(V===null)E(X,Y);else if(V&&V.isColor)E(V,1),A=!0;let I=J.xr.getEnvironmentBlendMode();if(I==="additive")$.buffers.color.setClear(0,0,0,1,Z);else if(I==="alpha-blend")$.buffers.color.setClear(0,0,0,0,Z);if(J.autoClear||A)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function z(C,A){let V=R(A);if(V&&(V.isCubeTexture||V.mapping===x7)){if(U===void 0)U=new D0(new m0(1,1,1),new Z8({name:"BackgroundCubeMaterial",uniforms:f9(p8.backgroundCube.uniforms),vertexShader:p8.backgroundCube.vertexShader,fragmentShader:p8.backgroundCube.fragmentShader,side:sJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(I,_,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(i5.makeRotationFromEuler(A.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(AZ);if(U.material.toneMapped=GJ.getTransfer(V.colorSpace)!==MJ,D!==V||O!==V.version||q!==J.toneMapping)U.material.needsUpdate=!0,D=V,O=V.version,q=J.toneMapping;U.layers.enableAll(),C.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new D0(new w8(2,2),new Z8({name:"BackgroundMaterial",uniforms:f9(p8.background.uniforms),vertexShader:p8.background.vertexShader,fragmentShader:p8.background.fragmentShader,side:U7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,H.material.toneMapped=GJ.getTransfer(V.colorSpace)!==MJ,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),D!==V||O!==V.version||q!==J.toneMapping)H.material.needsUpdate=!0,D=V,O=V.version,q=J.toneMapping;H.layers.enableAll(),C.unshift(H,H.geometry,H.material,0,0,null)}}function E(C,A){C.getRGB(e6,d$(J)),$.buffers.color.setClear(e6.r,e6.g,e6.b,A,Z)}function N(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(C,A=1){X.set(C),Y=A,E(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(C){Y=C,E(X,Y)},render:M,addToRenderList:z,dispose:N}}function a5(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},W=q(null),Z=W,X=!1;function Y(T,c,$0,i,J0){let W0=!1,l=O(T,i,$0,c);if(Z!==l)Z=l,U(Z.object);if(W0=R(T,i,$0,J0),W0)M(T,i,$0,J0);if(J0!==null)Q.update(J0,J.ELEMENT_ARRAY_BUFFER);if(W0||X){if(X=!1,V(T,c,$0,i),J0!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(J0).buffer)}}function H(){return J.createVertexArray()}function U(T){return J.bindVertexArray(T)}function D(T){return J.deleteVertexArray(T)}function O(T,c,$0,i){let J0=i.wireframe===!0,W0=K[c.id];if(W0===void 0)W0={},K[c.id]=W0;let l=T.isInstancedMesh===!0?T.id:0,n=W0[l];if(n===void 0)n={},W0[l]=n;let m=n[$0.id];if(m===void 0)m={},n[$0.id]=m;let U0=m[J0];if(U0===void 0)U0=q(H()),m[J0]=U0;return U0}function q(T){let c=[],$0=[],i=[];for(let J0=0;J0<$;J0++)c[J0]=0,$0[J0]=0,i[J0]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:c,enabledAttributes:$0,attributeDivisors:i,object:T,attributes:{},index:null}}function R(T,c,$0,i){let J0=Z.attributes,W0=c.attributes,l=0,n=$0.getAttributes();for(let m in n)if(n[m].location>=0){let E0=J0[m],F0=W0[m];if(F0===void 0){if(m==="instanceMatrix"&&T.instanceMatrix)F0=T.instanceMatrix;if(m==="instanceColor"&&T.instanceColor)F0=T.instanceColor}if(E0===void 0)return!0;if(E0.attribute!==F0)return!0;if(F0&&E0.data!==F0.data)return!0;l++}if(Z.attributesNum!==l)return!0;if(Z.index!==i)return!0;return!1}function M(T,c,$0,i){let J0={},W0=c.attributes,l=0,n=$0.getAttributes();for(let m in n)if(n[m].location>=0){let E0=W0[m];if(E0===void 0){if(m==="instanceMatrix"&&T.instanceMatrix)E0=T.instanceMatrix;if(m==="instanceColor"&&T.instanceColor)E0=T.instanceColor}let F0={};if(F0.attribute=E0,E0&&E0.data)F0.data=E0.data;J0[m]=F0,l++}Z.attributes=J0,Z.attributesNum=l,Z.index=i}function z(){let T=Z.newAttributes;for(let c=0,$0=T.length;c<$0;c++)T[c]=0}function E(T){N(T,0)}function N(T,c){let{newAttributes:$0,enabledAttributes:i,attributeDivisors:J0}=Z;if($0[T]=1,i[T]===0)J.enableVertexAttribArray(T),i[T]=1;if(J0[T]!==c)J.vertexAttribDivisor(T,c),J0[T]=c}function C(){let{newAttributes:T,enabledAttributes:c}=Z;for(let $0=0,i=c.length;$0<i;$0++)if(c[$0]!==T[$0])J.disableVertexAttribArray($0),c[$0]=0}function A(T,c,$0,i,J0,W0,l){if(l===!0)J.vertexAttribIPointer(T,c,$0,J0,W0);else J.vertexAttribPointer(T,c,$0,i,J0,W0)}function V(T,c,$0,i){z();let J0=i.attributes,W0=$0.getAttributes(),l=c.defaultAttributeValues;for(let n in W0){let m=W0[n];if(m.location>=0){let U0=J0[n];if(U0===void 0){if(n==="instanceMatrix"&&T.instanceMatrix)U0=T.instanceMatrix;if(n==="instanceColor"&&T.instanceColor)U0=T.instanceColor}if(U0!==void 0){let{normalized:E0,itemSize:F0}=U0,e0=Q.get(U0);if(e0===void 0)continue;let{buffer:f0,type:Q0,bytesPerElement:G0}=e0,w0=Q0===J.INT||Q0===J.UNSIGNED_INT||U0.gpuType===sQ;if(U0.isInterleavedBufferAttribute){let z0=U0.data,d=z0.stride,e=U0.offset;if(z0.isInstancedInterleavedBuffer){for(let b=0;b<m.locationSize;b++)N(m.location+b,z0.meshPerAttribute);if(T.isInstancedMesh!==!0&&i._maxInstanceCount===void 0)i._maxInstanceCount=z0.meshPerAttribute*z0.count}else for(let b=0;b<m.locationSize;b++)E(m.location+b);J.bindBuffer(J.ARRAY_BUFFER,f0);for(let b=0;b<m.locationSize;b++)A(m.location+b,F0/m.locationSize,Q0,E0,d*G0,(e+F0/m.locationSize*b)*G0,w0)}else{if(U0.isInstancedBufferAttribute){for(let z0=0;z0<m.locationSize;z0++)N(m.location+z0,U0.meshPerAttribute);if(T.isInstancedMesh!==!0&&i._maxInstanceCount===void 0)i._maxInstanceCount=U0.meshPerAttribute*U0.count}else for(let z0=0;z0<m.locationSize;z0++)E(m.location+z0);J.bindBuffer(J.ARRAY_BUFFER,f0);for(let z0=0;z0<m.locationSize;z0++)A(m.location+z0,F0/m.locationSize,Q0,E0,F0*G0,F0/m.locationSize*z0*G0,w0)}}else if(l!==void 0){let E0=l[n];if(E0!==void 0)switch(E0.length){case 2:J.vertexAttrib2fv(m.location,E0);break;case 3:J.vertexAttrib3fv(m.location,E0);break;case 4:J.vertexAttrib4fv(m.location,E0);break;default:J.vertexAttrib1fv(m.location,E0)}}}}C()}function I(){L();for(let T in K){let c=K[T];for(let $0 in c){let i=c[$0];for(let J0 in i){let W0=i[J0];for(let l in W0)D(W0[l].object),delete W0[l];delete i[J0]}}delete K[T]}}function _(T){if(K[T.id]===void 0)return;let c=K[T.id];for(let $0 in c){let i=c[$0];for(let J0 in i){let W0=i[J0];for(let l in W0)D(W0[l].object),delete W0[l];delete i[J0]}}delete K[T.id]}function w(T){for(let c in K){let $0=K[c];for(let i in $0){let J0=$0[i];if(J0[T.id]===void 0)continue;let W0=J0[T.id];for(let l in W0)D(W0[l].object),delete W0[l];delete J0[T.id]}}}function k(T){for(let c in K){let $0=K[c],i=T.isInstancedMesh===!0?T.id:0,J0=$0[i];if(J0===void 0)continue;for(let W0 in J0){let l=J0[W0];for(let n in l)D(l[n].object),delete l[n];delete J0[W0]}if(delete $0[i],Object.keys($0).length===0)delete K[c]}}function L(){if(r(),X=!0,Z===W)return;Z=W,U(Z.object)}function r(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:L,resetDefaultState:r,dispose:I,releaseStatesOfGeometry:_,releaseStatesOfObject:k,releaseStatesOfProgram:w,initAttributes:z,enableAttribute:E,disableUnusedAttributes:C}}function r5(J,Q,$){let K;function W(H){K=H}function Z(H,U){J.drawArrays(K,H,U),$.update(U,K,1)}function X(H,U,D){if(D===0)return;J.drawArraysInstanced(K,H,U,D),$.update(U,K,D)}function Y(H,U,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,U,0,D);let q=0;for(let R=0;R<D;R++)q+=U[R];$.update(q,K,1)}this.setMode=W,this.render=Z,this.renderInstances=X,this.renderMultiDraw=Y}function t5(J,Q,$,K){let W;function Z(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let w=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(w){if(w!==v8&&K.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(w){let k=w===r8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(w!==_8&&K.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==a8&&!k)return!1;return!0}function H(w){if(w==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",D=H(U);if(D!==U)a0("WebGLRenderer:",U,"not supported, using",D,"instead."),U=D;let O=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)a0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),z=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),N=J.getParameter(J.MAX_VERTEX_ATTRIBS),C=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),A=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=J.getParameter(J.MAX_SAMPLES),_=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Z,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:O,reversedDepthBuffer:q,maxTextures:R,maxVertexTextures:M,maxTextureSize:z,maxCubemapSize:E,maxAttributes:N,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:V,maxSamples:I,samples:_}}function e5(J){let Q=this,$=null,K=0,W=!1,Z=!1,X=new P8,Y=new $J,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(O,q){let R=O.length!==0||q||K!==0||W;return W=q,K=O.length,R},this.beginShadows=function(){Z=!0,D(null)},this.endShadows=function(){Z=!1},this.setGlobalState=function(O,q){$=D(O,q,0)},this.setState=function(O,q,R){let{clippingPlanes:M,clipIntersection:z,clipShadows:E}=O,N=J.get(O);if(!W||M===null||M.length===0||Z&&!E)if(Z)D(null);else U();else{let C=Z?0:K,A=C*4,V=N.clippingState||null;H.value=V,V=D(M,q,A,R);for(let I=0;I!==A;++I)V[I]=$[I];N.clippingState=V,this.numIntersection=z?this.numPlanes:0,this.numPlanes+=C}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function D(O,q,R,M){let z=O!==null?O.length:0,E=null;if(z!==0){if(E=H.value,M!==!0||E===null){let N=R+z*4,C=q.matrixWorldInverse;if(Y.getNormalMatrix(C),E===null||E.length<N)E=new Float32Array(N);for(let A=0,V=R;A!==z;++A,V+=4)X.copy(O[A]).applyMatrix4(C,Y),X.normal.toArray(E,V),E[V+3]=X.constant}H.value=E,H.needsUpdate=!0}return Q.numPlanes=z,Q.numIntersection=0,E}}var E9=4,KZ=[0.125,0.215,0.35,0.446,0.526,0.582],m9=20,JU=256,i7=new n7,WZ=new QJ,HK=null,UK=0,qK=0,NK=!1,QU=new g;class OK{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,K=100,W={}){let{size:Z=256,position:X=QU}=W;HK=this._renderer.getRenderTarget(),UK=this._renderer.getActiveCubeFace(),qK=this._renderer.getActiveMipmapLevel(),NK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(Z);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,K,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=YZ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=XZ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(HK,UK,qK),this._renderer.xr.enabled=NK,J.scissorTest=!1,L7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===N7||J.mapping===w9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);HK=this._renderer.getRenderTarget(),UK=this._renderer.getActiveCubeFace(),qK=this._renderer.getActiveMipmapLevel(),NK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:W8,minFilter:W8,generateMipmaps:!1,type:r8,format:v8,colorSpace:T$,depthBuffer:!1},K=ZZ(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=ZZ(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$U(W)),this._blurMaterial=WU(W,J,Q),this._ggxMaterial=KU(W,J,Q)}return K}_compileMaterial(J){let Q=new D0(new SJ,J);this._renderer.compile(Q,i7)}_sceneToCubeUV(J,Q,$,K,W){let Y=new pJ(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],D=this._renderer,O=D.autoClear,q=D.toneMapping;if(D.getClearColor(WZ),D.toneMapping=A8,D.autoClear=!1,D.state.buffers.depth.getReversed())D.setRenderTarget(K),D.clearDepth(),D.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new D0(new m0,new yJ({name:"PMREM.Background",side:sJ,depthWrite:!1,depthTest:!1}));let M=this._backgroundBox,z=M.material,E=!1,N=J.background;if(N){if(N.isColor)z.color.copy(N),J.background=null,E=!0}else z.color.copy(WZ),E=!0;for(let C=0;C<6;C++){let A=C%3;if(A===0)Y.up.set(0,H[C],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x+U[C],W.y,W.z);else if(A===1)Y.up.set(0,0,H[C]),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y+U[C],W.z);else Y.up.set(0,H[C],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y,W.z+U[C]);let V=this._cubeSize;if(L7(K,A*V,C>2?V:0,V,V),D.setRenderTarget(K),E)D.render(M,Y);D.render(J,Y)}D.toneMapping=q,D.autoClear=O,J.background=N}_textureToCubeUV(J,Q){let $=this._renderer,K=J.mapping===N7||J.mapping===w9;if(K){if(this._cubemapMaterial===null)this._cubemapMaterial=YZ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=XZ();let W=K?this._cubemapMaterial:this._equirectMaterial,Z=this._lodMeshes[0];Z.material=W;let X=W.uniforms;X.envMap.value=J;let Y=this._cubeSize;L7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(Z,i7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let K=this._lodMeshes.length;for(let W=1;W<K;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let K=this._renderer,W=this._pingPongRenderTarget,Z=this._ggxMaterial,X=this._lodMeshes[$];X.material=Z;let Y=Z.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),D=Math.sqrt(H*H-U*U),O=0+H*1.25,q=D*O,{_lodMax:R}=this,M=this._sizeLods[$],z=3*M*($>R-E9?$-R+E9:0),E=4*(this._cubeSize-M);Y.envMap.value=J.texture,Y.roughness.value=q,Y.mipInt.value=R-Q,L7(W,z,E,3*M,2*M),K.setRenderTarget(W),K.render(X,i7),Y.envMap.value=W.texture,Y.roughness.value=0,Y.mipInt.value=R-$,L7(J,z,E,3*M,2*M),K.setRenderTarget(J),K.render(X,i7)}_blur(J,Q,$,K,W){let Z=this._pingPongRenderTarget;this._halfBlur(J,Z,Q,$,K,"latitudinal",W),this._halfBlur(Z,J,$,$,K,"longitudinal",W)}_halfBlur(J,Q,$,K,W,Z,X){let Y=this._renderer,H=this._blurMaterial;if(Z!=="latitudinal"&&Z!=="longitudinal")t0("blur direction must be either latitudinal or longitudinal!");let U=3,D=this._lodMeshes[K];D.material=H;let O=H.uniforms,q=this._sizeLods[$]-1,R=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*m9-1),M=W/R,z=isFinite(W)?1+Math.floor(U*M):m9;if(z>m9)a0(`sigmaRadians, ${W}, is too large and will clip, as it requested ${z} samples when the maximum is set to ${m9}`);let E=[],N=0;for(let _=0;_<m9;++_){let w=_/M,k=Math.exp(-w*w/2);if(E.push(k),_===0)N+=k;else if(_<z)N+=2*k}for(let _=0;_<E.length;_++)E[_]=E[_]/N;if(O.envMap.value=J.texture,O.samples.value=z,O.weights.value=E,O.latitudinal.value=Z==="latitudinal",X)O.poleAxis.value=X;let{_lodMax:C}=this;O.dTheta.value=R,O.mipInt.value=C-$;let A=this._sizeLods[K],V=3*A*(K>C-E9?K-C+E9:0),I=4*(this._cubeSize-A);L7(Q,V,I,3*A,2*A),Y.setRenderTarget(Q),Y.render(D,i7)}}function $U(J){let Q=[],$=[],K=[],W=J,Z=J-E9+1+KZ.length;for(let X=0;X<Z;X++){let Y=Math.pow(2,W);Q.push(Y);let H=1/Y;if(X>J-E9)H=KZ[X-J+E9-1];else if(X===0)H=0;$.push(H);let U=1/(Y-2),D=-U,O=1+U,q=[D,D,O,D,O,O,D,D,O,O,D,O],R=6,M=6,z=3,E=2,N=1,C=new Float32Array(z*M*R),A=new Float32Array(E*M*R),V=new Float32Array(N*M*R);for(let _=0;_<R;_++){let w=_%3*2/3-1,k=_>2?0:-1,L=[w,k,0,w+0.6666666666666666,k,0,w+0.6666666666666666,k+1,0,w,k,0,w+0.6666666666666666,k+1,0,w,k+1,0];C.set(L,z*M*_),A.set(q,E*M*_);let r=[_,_,_,_,_,_];V.set(r,N*M*_)}let I=new SJ;if(I.setAttribute("position",new dJ(C,z)),I.setAttribute("uv",new dJ(A,E)),I.setAttribute("faceIndex",new dJ(V,N)),K.push(new D0(I,null)),W>E9)W--}return{lodMeshes:K,sizeLods:Q,sigmas:$}}function ZZ(J,Q,$){let K=new k8(J,Q,$);return K.texture.mapping=x7,K.texture.name="PMREM.cubeUv",K.scissorTest=!0,K}function L7(J,Q,$,K,W){J.viewport.set(Q,$,K,W),J.scissor.set(Q,$,K,W)}function KU(J,Q,$){return new Z8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JU,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:QQ(),fragmentShader:`

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
		`,blending:y8,depthTest:!1,depthWrite:!1})}function WU(J,Q,$){let K=new Float32Array(m9),W=new g(0,1,0);return new Z8({name:"SphericalGaussianBlur",defines:{n:m9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:K},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:QQ(),fragmentShader:`

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
		`,blending:y8,depthTest:!1,depthWrite:!1})}function XZ(){return new Z8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:QQ(),fragmentShader:`

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
		`,blending:y8,depthTest:!1,depthWrite:!1})}function YZ(){return new Z8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:QQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:y8,depthTest:!1,depthWrite:!1})}function QQ(){return`

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
	`}class RK extends k8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},K=[$,$,$,$,$,$];this.texture=new c6(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new m0(5,5,5),W=new Z8({name:"CubemapFromEquirect",uniforms:f9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:sJ,blending:y8});W.uniforms.tEquirect.value=Q;let Z=new D0(K,W),X=Q.minFilter;if(Q.minFilter===C9)Q.minFilter=W8;return new $K(1,10,this).update(J,Z),Q.minFilter=X,Z.geometry.dispose(),Z.material.dispose(),this}clear(J,Q=!0,$=!0,K=!0){let W=J.getRenderTarget();for(let Z=0;Z<6;Z++)J.setRenderTarget(this,Z),J.clear(Q,$,K);J.setRenderTarget(W)}}function ZU(J){let Q=new WeakMap,$=new WeakMap,K=null;function W(q,R=!1){if(q===null||q===void 0)return null;if(R)return X(q);return Z(q)}function Z(q){if(q&&q.isTexture){let R=q.mapping;if(R===w6||R===C6)if(Q.has(q)){let M=Q.get(q).texture;return Y(M,q.mapping)}else{let M=q.image;if(M&&M.height>0){let z=new RK(M.height);return z.fromEquirectangularTexture(J,q),Q.set(q,z),q.addEventListener("dispose",U),Y(z.texture,q.mapping)}else return null}}return q}function X(q){if(q&&q.isTexture){let R=q.mapping,M=R===w6||R===C6,z=R===N7||R===w9;if(M||z){let E=$.get(q),N=E!==void 0?E.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==N){if(K===null)K=new OK(J);return E=M?K.fromEquirectangular(q,E):K.fromCubemap(q,E),E.texture.pmremVersion=q.pmremVersion,$.set(q,E),E.texture}else if(E!==void 0)return E.texture;else{let C=q.image;if(M&&C&&C.height>0||z&&C&&H(C)){if(K===null)K=new OK(J);return E=M?K.fromEquirectangular(q):K.fromCubemap(q),E.texture.pmremVersion=q.pmremVersion,$.set(q,E),q.addEventListener("dispose",D),E.texture}else return null}}}return q}function Y(q,R){if(R===w6)q.mapping=N7;else if(R===C6)q.mapping=w9;return q}function H(q){let R=0,M=6;for(let z=0;z<M;z++)if(q[z]!==void 0)R++;return R===M}function U(q){let R=q.target;R.removeEventListener("dispose",U);let M=Q.get(R);if(M!==void 0)Q.delete(R),M.dispose()}function D(q){let R=q.target;R.removeEventListener("dispose",D);let M=$.get(R);if(M!==void 0)$.delete(R),M.dispose()}function O(){if(Q=new WeakMap,$=new WeakMap,K!==null)K.dispose(),K=null}return{get:W,dispose:O}}function XU(J){let Q={};function $(K){if(Q[K]!==void 0)return Q[K];let W=J.getExtension(K);return Q[K]=W,W}return{has:function(K){return $(K)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(K){let W=$(K);if(W===null)P9("WebGLRenderer: "+K+" extension not supported.");return W}}}function YU(J,Q,$,K){let W={},Z=new WeakMap;function X(O){let q=O.target;if(q.index!==null)Q.remove(q.index);for(let M in q.attributes)Q.remove(q.attributes[M]);q.removeEventListener("dispose",X),delete W[q.id];let R=Z.get(q);if(R)Q.remove(R),Z.delete(q);if(K.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function Y(O,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",X),W[q.id]=!0,$.memory.geometries++,q}function H(O){let q=O.attributes;for(let R in q)Q.update(q[R],J.ARRAY_BUFFER)}function U(O){let q=[],R=O.index,M=O.attributes.position,z=0;if(M===void 0)return;if(R!==null){let C=R.array;z=R.version;for(let A=0,V=C.length;A<V;A+=3){let I=C[A+0],_=C[A+1],w=C[A+2];q.push(I,_,_,w,w,I)}}else{let C=M.array;z=M.version;for(let A=0,V=C.length/3-1;A<V;A+=3){let I=A+0,_=A+1,w=A+2;q.push(I,_,_,w,w,I)}}let E=new(M.count>=65535?l6:u6)(q,1);E.version=z;let N=Z.get(O);if(N)Q.remove(N);Z.set(O,E)}function D(O){let q=Z.get(O);if(q){let R=O.index;if(R!==null){if(q.version<R.version)U(O)}}else U(O);return Z.get(O)}return{get:Y,update:H,getWireframeAttribute:D}}function HU(J,Q,$){let K;function W(O){K=O}let Z,X;function Y(O){Z=O.type,X=O.bytesPerElement}function H(O,q){J.drawElements(K,q,Z,O*X),$.update(q,K,1)}function U(O,q,R){if(R===0)return;J.drawElementsInstanced(K,q,Z,O*X,R),$.update(q,K,R)}function D(O,q,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,q,0,Z,O,0,R);let z=0;for(let E=0;E<R;E++)z+=q[E];$.update(z,K,1)}this.setMode=W,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=D}function UU(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function K(Z,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(Z/3);break;case J.LINES:$.lines+=Y*(Z/2);break;case J.LINE_STRIP:$.lines+=Y*(Z-1);break;case J.LINE_LOOP:$.lines+=Y*Z;break;case J.POINTS:$.points+=Y*Z;break;default:t0("WebGLInfo: Unknown draw mode:",X);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:K}}function qU(J,Q,$){let K=new WeakMap,W=new wJ;function Z(X,Y,H){let U=X.morphTargetInfluences,D=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,O=D!==void 0?D.length:0,q=K.get(Y);if(q===void 0||q.count!==O){let L=function(){w.dispose(),K.delete(Y),Y.removeEventListener("dispose",L)};if(q!==void 0)q.texture.dispose();let R=Y.morphAttributes.position!==void 0,M=Y.morphAttributes.normal!==void 0,z=Y.morphAttributes.color!==void 0,E=Y.morphAttributes.position||[],N=Y.morphAttributes.normal||[],C=Y.morphAttributes.color||[],A=0;if(R===!0)A=1;if(M===!0)A=2;if(z===!0)A=3;let V=Y.attributes.position.count*A,I=1;if(V>Q.maxTextureSize)I=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let _=new Float32Array(V*I*4*O),w=new p6(_,V,I,O);w.type=a8,w.needsUpdate=!0;let k=A*4;for(let r=0;r<O;r++){let T=E[r],c=N[r],$0=C[r],i=V*I*4*r;for(let J0=0;J0<T.count;J0++){let W0=J0*k;if(R===!0)W.fromBufferAttribute(T,J0),_[i+W0+0]=W.x,_[i+W0+1]=W.y,_[i+W0+2]=W.z,_[i+W0+3]=0;if(M===!0)W.fromBufferAttribute(c,J0),_[i+W0+4]=W.x,_[i+W0+5]=W.y,_[i+W0+6]=W.z,_[i+W0+7]=0;if(z===!0)W.fromBufferAttribute($0,J0),_[i+W0+8]=W.x,_[i+W0+9]=W.y,_[i+W0+10]=W.z,_[i+W0+11]=$0.itemSize===4?W.w:1}}q={count:O,texture:w,size:new o0(V,I)},K.set(Y,q),Y.addEventListener("dispose",L)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let R=0;for(let z=0;z<U.length;z++)R+=U[z];let M=Y.morphTargetsRelative?1:1-R;H.getUniforms().setValue(J,"morphTargetBaseInfluence",M),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:Z}}function NU(J,Q,$,K,W){let Z=new WeakMap;function X(U){let D=W.render.frame,O=U.geometry,q=Q.get(U,O);if(Z.get(q)!==D)Q.update(q),Z.set(q,D);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(Z.get(U)!==D){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);Z.set(U,D)}}if(U.isSkinnedMesh){let R=U.skeleton;if(Z.get(R)!==D)R.update(),Z.set(R,D)}return q}function Y(){Z=new WeakMap}function H(U){let D=U.target;if(D.removeEventListener("dispose",H),K.releaseStatesOfObject(D),$.remove(D.instanceMatrix),D.instanceColor!==null)$.remove(D.instanceColor)}return{update:X,dispose:Y}}var GU={[mQ]:"LINEAR_TONE_MAPPING",[dQ]:"REINHARD_TONE_MAPPING",[uQ]:"CINEON_TONE_MAPPING",[f7]:"ACES_FILMIC_TONE_MAPPING",[cQ]:"AGX_TONE_MAPPING",[nQ]:"NEUTRAL_TONE_MAPPING",[lQ]:"CUSTOM_TONE_MAPPING"};function FU(J,Q,$,K,W,Z){let X=new k8(Q,$,{type:J,depthBuffer:W,stencilBuffer:Z,samples:K?4:0,depthTexture:W?new F9(Q,$):void 0}),Y=new k8(Q,$,{type:r8,depthBuffer:!1,stencilBuffer:!1}),H=new SJ;H.setAttribute("position",new LJ([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new LJ([0,2,0,0,2,0],2));let U=new u$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),D=new D0(H,U),O=new n7(-1,1,1,-1,0,1),q=null,R=null,M=!1,z,E=null,N=[],C=!1;this.setSize=function(A,V){X.setSize(A,V),Y.setSize(A,V);for(let I=0;I<N.length;I++){let _=N[I];if(_.setSize)_.setSize(A,V)}},this.setEffects=function(A){N=A,C=N.length>0&&N[0].isRenderPass===!0;let{width:V,height:I}=X;for(let _=0;_<N.length;_++){let w=N[_];if(w.setSize)w.setSize(V,I)}},this.begin=function(A,V){if(M)return!1;if(A.toneMapping===A8&&N.length===0)return!1;if(E=V,V!==null){let{width:I,height:_}=V;if(X.width!==I||X.height!==_)this.setSize(I,_)}if(C===!1)A.setRenderTarget(X);return z=A.toneMapping,A.toneMapping=A8,!0},this.hasRenderPass=function(){return C},this.end=function(A,V){A.toneMapping=z,M=!0;let I=X,_=Y;for(let w=0;w<N.length;w++){let k=N[w];if(k.enabled===!1)continue;if(k.render(A,_,I,V),k.needsSwap!==!1){let L=I;I=_,_=L}}if(q!==A.outputColorSpace||R!==A.toneMapping){if(q=A.outputColorSpace,R=A.toneMapping,U.defines={},GJ.getTransfer(q)===MJ)U.defines.SRGB_TRANSFER="";let w=GU[R];if(w)U.defines[w]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=I.texture,A.setRenderTarget(E),A.render(D,O),E=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),H.dispose(),U.dispose()}}var _Z=new mJ,DK=new F9(1,1),wZ=new p6,CZ=new g$,TZ=new c6,HZ=[],UZ=[],qZ=new Float32Array(16),NZ=new Float32Array(9),GZ=new Float32Array(4);function z7(J,Q,$){let K=J[0];if(K<=0||K>0)return J;let W=Q*$,Z=HZ[W];if(Z===void 0)Z=new Float32Array(W),HZ[W]=Z;if(Q!==0){K.toArray(Z,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(Z,Y)}return Z}function vJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,K=J.length;$<K;$++)if(J[$]!==Q[$])return!1;return!0}function hJ(J,Q){for(let $=0,K=Q.length;$<K;$++)J[$]=Q[$]}function $Q(J,Q){let $=UZ[Q];if($===void 0)$=new Int32Array(Q),UZ[Q]=$;for(let K=0;K!==Q;++K)$[K]=J.allocateTextureUnit();return $}function OU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function DU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(vJ($,Q))return;J.uniform2fv(this.addr,Q),hJ($,Q)}}function EU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(vJ($,Q))return;J.uniform3fv(this.addr,Q),hJ($,Q)}}function RU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(vJ($,Q))return;J.uniform4fv(this.addr,Q),hJ($,Q)}}function kU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(vJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),hJ($,Q)}else{if(vJ($,K))return;GZ.set(K),J.uniformMatrix2fv(this.addr,!1,GZ),hJ($,K)}}function MU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(vJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),hJ($,Q)}else{if(vJ($,K))return;NZ.set(K),J.uniformMatrix3fv(this.addr,!1,NZ),hJ($,K)}}function VU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(vJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),hJ($,Q)}else{if(vJ($,K))return;qZ.set(K),J.uniformMatrix4fv(this.addr,!1,qZ),hJ($,K)}}function BU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function LU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(vJ($,Q))return;J.uniform2iv(this.addr,Q),hJ($,Q)}}function zU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(vJ($,Q))return;J.uniform3iv(this.addr,Q),hJ($,Q)}}function IU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(vJ($,Q))return;J.uniform4iv(this.addr,Q),hJ($,Q)}}function PU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function AU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(vJ($,Q))return;J.uniform2uiv(this.addr,Q),hJ($,Q)}}function _U(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(vJ($,Q))return;J.uniform3uiv(this.addr,Q),hJ($,Q)}}function wU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(vJ($,Q))return;J.uniform4uiv(this.addr,Q),hJ($,Q)}}function CU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;let Z;if(this.type===J.SAMPLER_2D_SHADOW)DK.compareFunction=$.isReversedDepthBuffer()?g6:x6,Z=DK;else Z=_Z;$.setTexture2D(Q||Z,W)}function TU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTexture3D(Q||CZ,W)}function SU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTextureCube(Q||TZ,W)}function jU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTexture2DArray(Q||wZ,W)}function yU(J){switch(J){case 5126:return OU;case 35664:return DU;case 35665:return EU;case 35666:return RU;case 35674:return kU;case 35675:return MU;case 35676:return VU;case 5124:case 35670:return BU;case 35667:case 35671:return LU;case 35668:case 35672:return zU;case 35669:case 35673:return IU;case 5125:return PU;case 36294:return AU;case 36295:return _U;case 36296:return wU;case 35678:case 36198:case 36298:case 36306:case 35682:return CU;case 35679:case 36299:case 36307:return TU;case 35680:case 36300:case 36308:case 36293:return SU;case 36289:case 36303:case 36311:case 36292:return jU}}function vU(J,Q){J.uniform1fv(this.addr,Q)}function hU(J,Q){let $=z7(Q,this.size,2);J.uniform2fv(this.addr,$)}function bU(J,Q){let $=z7(Q,this.size,3);J.uniform3fv(this.addr,$)}function fU(J,Q){let $=z7(Q,this.size,4);J.uniform4fv(this.addr,$)}function xU(J,Q){let $=z7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function gU(J,Q){let $=z7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function pU(J,Q){let $=z7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function mU(J,Q){J.uniform1iv(this.addr,Q)}function dU(J,Q){J.uniform2iv(this.addr,Q)}function uU(J,Q){J.uniform3iv(this.addr,Q)}function lU(J,Q){J.uniform4iv(this.addr,Q)}function cU(J,Q){J.uniform1uiv(this.addr,Q)}function nU(J,Q){J.uniform2uiv(this.addr,Q)}function sU(J,Q){J.uniform3uiv(this.addr,Q)}function iU(J,Q){J.uniform4uiv(this.addr,Q)}function oU(J,Q,$){let K=this.cache,W=Q.length,Z=$Q($,W);if(!vJ(K,Z))J.uniform1iv(this.addr,Z),hJ(K,Z);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=DK;else X=_Z;for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||X,Z[Y])}function aU(J,Q,$){let K=this.cache,W=Q.length,Z=$Q($,W);if(!vJ(K,Z))J.uniform1iv(this.addr,Z),hJ(K,Z);for(let X=0;X!==W;++X)$.setTexture3D(Q[X]||CZ,Z[X])}function rU(J,Q,$){let K=this.cache,W=Q.length,Z=$Q($,W);if(!vJ(K,Z))J.uniform1iv(this.addr,Z),hJ(K,Z);for(let X=0;X!==W;++X)$.setTextureCube(Q[X]||TZ,Z[X])}function tU(J,Q,$){let K=this.cache,W=Q.length,Z=$Q($,W);if(!vJ(K,Z))J.uniform1iv(this.addr,Z),hJ(K,Z);for(let X=0;X!==W;++X)$.setTexture2DArray(Q[X]||wZ,Z[X])}function eU(J){switch(J){case 5126:return vU;case 35664:return hU;case 35665:return bU;case 35666:return fU;case 35674:return xU;case 35675:return gU;case 35676:return pU;case 5124:case 35670:return mU;case 35667:case 35671:return dU;case 35668:case 35672:return uU;case 35669:case 35673:return lU;case 5125:return cU;case 36294:return nU;case 36295:return sU;case 36296:return iU;case 35678:case 36198:case 36298:case 36306:case 35682:return oU;case 35679:case 36299:case 36307:return aU;case 35680:case 36300:case 36308:case 36293:return rU;case 36289:case 36303:case 36311:case 36292:return tU}}class SZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=yU(Q.type)}}class jZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=eU(Q.type)}}class yZ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let K=this.seq;for(let W=0,Z=K.length;W!==Z;++W){let X=K[W];X.setValue(J,Q[X.id],$)}}}var GK=/(\w+)(\])?(\[|\.)?/g;function FZ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Jq(J,Q,$){let K=J.name,W=K.length;GK.lastIndex=0;while(!0){let Z=GK.exec(K),X=GK.lastIndex,Y=Z[1],H=Z[2]==="]",U=Z[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===W){FZ($,U===void 0?new SZ(Y,J,Q):new jZ(Y,J,Q));break}else{let O=$.map[Y];if(O===void 0)O=new yZ(Y),FZ($,O);$=O}}}class r7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let X=J.getActiveUniform(Q,Z),Y=J.getUniformLocation(Q,X.name);Jq(X,Y,this)}let K=[],W=[];for(let Z of this.seq)if(Z.type===J.SAMPLER_2D_SHADOW||Z.type===J.SAMPLER_CUBE_SHADOW||Z.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(Z);else W.push(Z);if(K.length>0)this.seq=K.concat(W)}setValue(J,Q,$,K){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,K)}setOptional(J,Q,$){let K=Q[$];if(K!==void 0)this.setValue(J,$,K)}static upload(J,Q,$,K){for(let W=0,Z=Q.length;W!==Z;++W){let X=Q[W],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let $=[];for(let K=0,W=J.length;K!==W;++K){let Z=J[K];if(Z.id in Q)$.push(Z)}return $}}function OZ(J,Q,$){let K=J.createShader(Q);return J.shaderSource(K,$),J.compileShader(K),K}var Qq=37297,$q=0;function Kq(J,Q){let $=J.split(`
`),K=[],W=Math.max(Q-6,0),Z=Math.min(Q+6,$.length);for(let X=W;X<Z;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return K.join(`
`)}var DZ=new $J;function Wq(J){GJ._getMatrix(DZ,GJ.workingColorSpace,J);let Q=`mat3( ${DZ.elements.map(($)=>$.toFixed(4))} )`;switch(GJ.getTransfer(J)){case S$:return[Q,"LinearTransferOETF"];case MJ:return[Q,"sRGBTransferOETF"];default:return a0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function EZ(J,Q,$){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),Z=(J.getShaderInfoLog(Q)||"").trim();if(K&&Z==="")return"";let X=/ERROR: 0:(\d+)/.exec(Z);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+Z+`

`+Kq(J.getShaderSource(Q),Y)}else return Z}function Zq(J,Q){let $=Wq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var Xq={[mQ]:"Linear",[dQ]:"Reinhard",[uQ]:"Cineon",[f7]:"ACESFilmic",[cQ]:"AgX",[nQ]:"Neutral",[lQ]:"Custom"};function Yq(J,Q){let $=Xq[Q];if($===void 0)return a0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var JQ=new g;function Hq(){GJ.getLuminanceCoefficients(JQ);let J=JQ.x.toFixed(4),Q=JQ.y.toFixed(4),$=JQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Uq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(a7).join(`
`)}function qq(J){let Q=[];for(let $ in J){let K=J[$];if(K===!1)continue;Q.push("#define "+$+" "+K)}return Q.join(`
`)}function Nq(J,Q){let $={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<K;W++){let Z=J.getActiveAttrib(Q,W),X=Z.name,Y=1;if(Z.type===J.FLOAT_MAT2)Y=2;if(Z.type===J.FLOAT_MAT3)Y=3;if(Z.type===J.FLOAT_MAT4)Y=4;$[X]={type:Z.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function a7(J){return J!==""}function RZ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function kZ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Gq=/^[ \t]*#include +<([\w\d./]+)>/gm;function EK(J){return J.replace(Gq,Oq)}var Fq=new Map;function Oq(J,Q){let $=HJ[Q];if($===void 0){let K=Fq.get(Q);if(K!==void 0)$=HJ[K],a0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,K);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return EK($)}var Dq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function MZ(J){return J.replace(Dq,Eq)}function Eq(J,Q,$,K){let W="";for(let Z=parseInt(Q);Z<parseInt($);Z++)W+=K.replace(/\[\s*i\s*\]/g,"[ "+Z+" ]").replace(/UNROLLED_LOOP_INDEX/g,Z);return W}function VZ(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Rq={[_9]:"SHADOWMAP_TYPE_PCF",[H7]:"SHADOWMAP_TYPE_VSM"};function kq(J){return Rq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mq={[N7]:"ENVMAP_TYPE_CUBE",[w9]:"ENVMAP_TYPE_CUBE",[x7]:"ENVMAP_TYPE_CUBE_UV"};function Vq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Mq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bq={[w9]:"ENVMAP_MODE_REFRACTION"};function Lq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Bq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zq={[_W]:"ENVMAP_BLENDING_MULTIPLY",[wW]:"ENVMAP_BLENDING_MIX",[CW]:"ENVMAP_BLENDING_ADD"};function Iq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return zq[J.combine]||"ENVMAP_BLENDING_NONE"}function Pq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,K=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:K,maxMip:$}}function Aq(J,Q,$,K){let W=J.getContext(),Z=$.defines,X=$.vertexShader,Y=$.fragmentShader,H=kq($),U=Vq($),D=Lq($),O=Iq($),q=Pq($),R=Uq($),M=qq(Z),z=W.createProgram(),E,N,C=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(a7).join(`
`),E.length>0)E+=`
`;if(N=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(a7).join(`
`),N.length>0)N+=`
`}else E=[VZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+D:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(a7).join(`
`),N=[VZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+D:"",$.envMap?"#define "+O:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==A8?"#define TONE_MAPPING":"",$.toneMapping!==A8?HJ.tonemapping_pars_fragment:"",$.toneMapping!==A8?Yq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",HJ.colorspace_pars_fragment,Zq("linearToOutputTexel",$.outputColorSpace),Hq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(a7).join(`
`);if(X=EK(X),X=RZ(X,$),X=kZ(X,$),Y=EK(Y),Y=RZ(Y,$),Y=kZ(Y,$),X=MZ(X),Y=MZ(Y),$.isRawShaderMaterial!==!0)C=`#version 300 es
`,E=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,N=["#define varying in",$.glslVersion===j$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===j$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N;let A=C+E+X,V=C+N+Y,I=OZ(W,W.VERTEX_SHADER,A),_=OZ(W,W.FRAGMENT_SHADER,V);if(W.attachShader(z,I),W.attachShader(z,_),$.index0AttributeName!==void 0)W.bindAttribLocation(z,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(z,0,"position");W.linkProgram(z);function w(T){if(J.debug.checkShaderErrors){let c=W.getProgramInfoLog(z)||"",$0=W.getShaderInfoLog(I)||"",i=W.getShaderInfoLog(_)||"",J0=c.trim(),W0=$0.trim(),l=i.trim(),n=!0,m=!0;if(W.getProgramParameter(z,W.LINK_STATUS)===!1)if(n=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,z,I,_);else{let U0=EZ(W,I,"vertex"),E0=EZ(W,_,"fragment");t0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(z,W.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+J0+`
`+U0+`
`+E0)}else if(J0!=="")a0("WebGLProgram: Program Info Log:",J0);else if(W0===""||l==="")m=!1;if(m)T.diagnostics={runnable:n,programLog:J0,vertexShader:{log:W0,prefix:E},fragmentShader:{log:l,prefix:N}}}W.deleteShader(I),W.deleteShader(_),k=new r7(W,z),L=Nq(W,z)}let k;this.getUniforms=function(){if(k===void 0)w(this);return k};let L;this.getAttributes=function(){if(L===void 0)w(this);return L};let r=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(r===!1)r=W.getProgramParameter(z,Qq);return r},this.destroy=function(){K.releaseStatesOfProgram(this),W.deleteProgram(z),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=$q++,this.cacheKey=Q,this.usedTimes=1,this.program=z,this.vertexShader=I,this.fragmentShader=_,this}var _q=0;class vZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has($)===!1)K.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new hZ(J),Q.set(J,$);return $}}class hZ{constructor(J){this.id=_q++,this.code=J,this.usedTimes=0}}function wq(J){return J===j9||J===b6||J===f6}function Cq(J,Q,$,K,W,Z){let X=new m6,Y=new vZ,H=new Set,U=[],D=new Map,O=K.logarithmicDepthBuffer,q=K.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(k){if(H.add(k),k===0)return"uv";return`uv${k}`}function z(k,L,r,T,c,$0){let i=T.fog,J0=c.geometry,W0=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?T.environment:null,l=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,n=Q.get(k.envMap||W0,l),m=!!n&&n.mapping===x7?n.image.height:null,U0=R[k.type];if(k.precision!==null){if(q=K.getMaxPrecision(k.precision),q!==k.precision)a0("WebGLProgram.getParameters:",k.precision,"not supported, using",q,"instead.")}let E0=J0.morphAttributes.position||J0.morphAttributes.normal||J0.morphAttributes.color,F0=E0!==void 0?E0.length:0,e0=0;if(J0.morphAttributes.position!==void 0)e0=1;if(J0.morphAttributes.normal!==void 0)e0=2;if(J0.morphAttributes.color!==void 0)e0=3;let f0,Q0,G0,w0;if(U0){let l0=p8[U0];f0=l0.vertexShader,Q0=l0.fragmentShader}else{f0=k.vertexShader,Q0=k.fragmentShader;let l0=Y.getVertexShaderStage(k),_J=Y.getFragmentShaderStage(k);Y.update(k,l0,_J),G0=l0.id,w0=_J.id}let z0=J.getRenderTarget(),d=J.state.buffers.depth.getReversed(),e=c.isInstancedMesh===!0,b=c.isBatchedMesh===!0,y=!!k.map,u=!!k.matcap,s=!!n,p=!!k.aoMap,S=!!k.lightMap,S0=!!k.bumpMap&&k.wireframe===!1,d0=!!k.normalMap,n0=!!k.displacementMap,s0=!!k.emissiveMap,XJ=!!k.metalnessMap,v=!!k.roughnessMap,KJ=k.anisotropy>0,i0=k.clearcoat>0,j=k.dispersion>0,F=k.iridescence>0,G=k.sheen>0,P=k.transmission>0,h=KJ&&!!k.anisotropyMap,Y0=i0&&!!k.clearcoatMap,N0=i0&&!!k.clearcoatNormalMap,k0=i0&&!!k.clearcoatRoughnessMap,K0=F&&!!k.iridescenceMap,Z0=F&&!!k.iridescenceThicknessMap,R0=G&&!!k.sheenColorMap,h0=G&&!!k.sheenRoughnessMap,B0=!!k.specularMap,O0=!!k.specularColorMap,u0=!!k.specularIntensityMap,x0=P&&!!k.transmissionMap,qJ=P&&!!k.thicknessMap,f=!!k.gradientMap,M0=!!k.alphaMap,X0=k.alphaTest>0,L0=!!k.alphaHash,C0=!!k.extensions,H0=A8;if(k.toneMapped){if(z0===null||z0.isXRRenderTarget===!0)H0=J.toneMapping}let I0={shaderID:U0,shaderType:k.type,shaderName:k.name,vertexShader:f0,fragmentShader:Q0,defines:k.defines,customVertexShaderID:G0,customFragmentShaderID:w0,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:q,batching:b,batchingColor:b&&c._colorsTexture!==null,instancing:e,instancingColor:e&&c.instanceColor!==null,instancingMorph:e&&c.morphTexture!==null,outputColorSpace:z0===null?J.outputColorSpace:z0.isXRRenderTarget===!0?z0.texture.colorSpace:GJ.workingColorSpace,alphaToCoverage:!!k.alphaToCoverage,map:y,matcap:u,envMap:s,envMapMode:s&&n.mapping,envMapCubeUVHeight:m,aoMap:p,lightMap:S,bumpMap:S0,normalMap:d0,displacementMap:n0,emissiveMap:s0,normalMapObjectSpace:d0&&k.normalMapType===gW,normalMapTangentSpace:d0&&k.normalMapType===C$,packedNormalMap:d0&&k.normalMapType===C$&&wq(k.normalMap.format),metalnessMap:XJ,roughnessMap:v,anisotropy:KJ,anisotropyMap:h,clearcoat:i0,clearcoatMap:Y0,clearcoatNormalMap:N0,clearcoatRoughnessMap:k0,dispersion:j,iridescence:F,iridescenceMap:K0,iridescenceThicknessMap:Z0,sheen:G,sheenColorMap:R0,sheenRoughnessMap:h0,specularMap:B0,specularColorMap:O0,specularIntensityMap:u0,transmission:P,transmissionMap:x0,thicknessMap:qJ,gradientMap:f,opaque:k.transparent===!1&&k.blending===b7&&k.alphaToCoverage===!1,alphaMap:M0,alphaTest:X0,alphaHash:L0,combine:k.combine,mapUv:y&&M(k.map.channel),aoMapUv:p&&M(k.aoMap.channel),lightMapUv:S&&M(k.lightMap.channel),bumpMapUv:S0&&M(k.bumpMap.channel),normalMapUv:d0&&M(k.normalMap.channel),displacementMapUv:n0&&M(k.displacementMap.channel),emissiveMapUv:s0&&M(k.emissiveMap.channel),metalnessMapUv:XJ&&M(k.metalnessMap.channel),roughnessMapUv:v&&M(k.roughnessMap.channel),anisotropyMapUv:h&&M(k.anisotropyMap.channel),clearcoatMapUv:Y0&&M(k.clearcoatMap.channel),clearcoatNormalMapUv:N0&&M(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k0&&M(k.clearcoatRoughnessMap.channel),iridescenceMapUv:K0&&M(k.iridescenceMap.channel),iridescenceThicknessMapUv:Z0&&M(k.iridescenceThicknessMap.channel),sheenColorMapUv:R0&&M(k.sheenColorMap.channel),sheenRoughnessMapUv:h0&&M(k.sheenRoughnessMap.channel),specularMapUv:B0&&M(k.specularMap.channel),specularColorMapUv:O0&&M(k.specularColorMap.channel),specularIntensityMapUv:u0&&M(k.specularIntensityMap.channel),transmissionMapUv:x0&&M(k.transmissionMap.channel),thicknessMapUv:qJ&&M(k.thicknessMap.channel),alphaMapUv:M0&&M(k.alphaMap.channel),vertexTangents:!!J0.attributes.tangent&&(d0||KJ),vertexNormals:!!J0.attributes.normal,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!J0.attributes.color&&J0.attributes.color.itemSize===4,pointsUvs:c.isPoints===!0&&!!J0.attributes.uv&&(y||M0),fog:!!i,useFog:k.fog===!0,fogExp2:!!i&&i.isFogExp2,flatShading:k.wireframe===!1&&(k.flatShading===!0||J0.attributes.normal===void 0&&d0===!1&&(k.isMeshLambertMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isMeshPhysicalMaterial)),sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:O,reversedDepthBuffer:d,skinning:c.isSkinnedMesh===!0,hasPositionAttribute:J0.attributes.position!==void 0,morphTargets:J0.morphAttributes.position!==void 0,morphNormals:J0.morphAttributes.normal!==void 0,morphColors:J0.morphAttributes.color!==void 0,morphTargetsCount:F0,morphTextureStride:e0,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:$0.length,numClippingPlanes:Z.numPlanes,numClipIntersection:Z.numIntersection,dithering:k.dithering,shadowMapEnabled:J.shadowMap.enabled&&r.length>0,shadowMapType:J.shadowMap.type,toneMapping:H0,decodeVideoTexture:y&&k.map.isVideoTexture===!0&&GJ.getTransfer(k.map.colorSpace)===MJ,decodeVideoTextureEmissive:s0&&k.emissiveMap.isVideoTexture===!0&&GJ.getTransfer(k.emissiveMap.colorSpace)===MJ,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===PJ,flipSided:k.side===sJ,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:C0&&k.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(C0&&k.extensions.multiDraw===!0||b)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return I0.vertexUv1s=H.has(1),I0.vertexUv2s=H.has(2),I0.vertexUv3s=H.has(3),H.clear(),I0}function E(k){let L=[];if(k.shaderID)L.push(k.shaderID);else L.push(k.customVertexShaderID),L.push(k.customFragmentShaderID);if(k.defines!==void 0)for(let r in k.defines)L.push(r),L.push(k.defines[r]);if(k.isRawShaderMaterial===!1)N(L,k),C(L,k),L.push(J.outputColorSpace);return L.push(k.customProgramCacheKey),L.join()}function N(k,L){k.push(L.precision),k.push(L.outputColorSpace),k.push(L.envMapMode),k.push(L.envMapCubeUVHeight),k.push(L.mapUv),k.push(L.alphaMapUv),k.push(L.lightMapUv),k.push(L.aoMapUv),k.push(L.bumpMapUv),k.push(L.normalMapUv),k.push(L.displacementMapUv),k.push(L.emissiveMapUv),k.push(L.metalnessMapUv),k.push(L.roughnessMapUv),k.push(L.anisotropyMapUv),k.push(L.clearcoatMapUv),k.push(L.clearcoatNormalMapUv),k.push(L.clearcoatRoughnessMapUv),k.push(L.iridescenceMapUv),k.push(L.iridescenceThicknessMapUv),k.push(L.sheenColorMapUv),k.push(L.sheenRoughnessMapUv),k.push(L.specularMapUv),k.push(L.specularColorMapUv),k.push(L.specularIntensityMapUv),k.push(L.transmissionMapUv),k.push(L.thicknessMapUv),k.push(L.combine),k.push(L.fogExp2),k.push(L.sizeAttenuation),k.push(L.morphTargetsCount),k.push(L.morphAttributeCount),k.push(L.numDirLights),k.push(L.numPointLights),k.push(L.numSpotLights),k.push(L.numSpotLightMaps),k.push(L.numHemiLights),k.push(L.numRectAreaLights),k.push(L.numDirLightShadows),k.push(L.numPointLightShadows),k.push(L.numSpotLightShadows),k.push(L.numSpotLightShadowsWithMaps),k.push(L.numLightProbes),k.push(L.shadowMapType),k.push(L.toneMapping),k.push(L.numClippingPlanes),k.push(L.numClipIntersection),k.push(L.depthPacking)}function C(k,L){if(X.disableAll(),L.instancing)X.enable(0);if(L.instancingColor)X.enable(1);if(L.instancingMorph)X.enable(2);if(L.matcap)X.enable(3);if(L.envMap)X.enable(4);if(L.normalMapObjectSpace)X.enable(5);if(L.normalMapTangentSpace)X.enable(6);if(L.clearcoat)X.enable(7);if(L.iridescence)X.enable(8);if(L.alphaTest)X.enable(9);if(L.vertexColors)X.enable(10);if(L.vertexAlphas)X.enable(11);if(L.vertexUv1s)X.enable(12);if(L.vertexUv2s)X.enable(13);if(L.vertexUv3s)X.enable(14);if(L.vertexTangents)X.enable(15);if(L.anisotropy)X.enable(16);if(L.alphaHash)X.enable(17);if(L.batching)X.enable(18);if(L.dispersion)X.enable(19);if(L.batchingColor)X.enable(20);if(L.gradientMap)X.enable(21);if(L.packedNormalMap)X.enable(22);if(L.vertexNormals)X.enable(23);if(k.push(X.mask),X.disableAll(),L.fog)X.enable(0);if(L.useFog)X.enable(1);if(L.flatShading)X.enable(2);if(L.logarithmicDepthBuffer)X.enable(3);if(L.reversedDepthBuffer)X.enable(4);if(L.skinning)X.enable(5);if(L.morphTargets)X.enable(6);if(L.morphNormals)X.enable(7);if(L.morphColors)X.enable(8);if(L.premultipliedAlpha)X.enable(9);if(L.shadowMapEnabled)X.enable(10);if(L.doubleSided)X.enable(11);if(L.flipSided)X.enable(12);if(L.useDepthPacking)X.enable(13);if(L.dithering)X.enable(14);if(L.transmission)X.enable(15);if(L.sheen)X.enable(16);if(L.opaque)X.enable(17);if(L.pointsUvs)X.enable(18);if(L.decodeVideoTexture)X.enable(19);if(L.decodeVideoTextureEmissive)X.enable(20);if(L.alphaToCoverage)X.enable(21);if(L.numLightProbeGrids>0)X.enable(22);if(L.hasPositionAttribute)X.enable(23);k.push(X.mask)}function A(k){let L=R[k.type],r;if(L){let T=p8[L];r=rW.clone(T.uniforms)}else r=k.uniforms;return r}function V(k,L){let r=D.get(L);if(r!==void 0)++r.usedTimes;else r=new Aq(J,L,k,W),U.push(r),D.set(L,r);return r}function I(k){if(--k.usedTimes===0){let L=U.indexOf(k);U[L]=U[U.length-1],U.pop(),D.delete(k.cacheKey),k.destroy()}}function _(k){Y.remove(k)}function w(){Y.dispose()}return{getParameters:z,getProgramCacheKey:E,getUniforms:A,acquireProgram:V,releaseProgram:I,releaseShaderCache:_,programs:U,dispose:w}}function Tq(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function W(X,Y,H){J.get(X)[Y]=H}function Z(){J=new WeakMap}return{has:Q,get:$,remove:K,update:W,dispose:Z}}function Sq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function BZ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function LZ(){let J=[],Q=0,$=[],K=[],W=[];function Z(){Q=0,$.length=0,K.length=0,W.length=0}function X(q){let R=0;if(q.isInstancedMesh)R+=2;if(q.isSkinnedMesh)R+=1;return R}function Y(q,R,M,z,E,N){let C=J[Q];if(C===void 0)C={id:q.id,object:q,geometry:R,material:M,materialVariant:X(q),groupOrder:z,renderOrder:q.renderOrder,z:E,group:N},J[Q]=C;else C.id=q.id,C.object=q,C.geometry=R,C.material=M,C.materialVariant=X(q),C.groupOrder=z,C.renderOrder=q.renderOrder,C.z=E,C.group=N;return Q++,C}function H(q,R,M,z,E,N){let C=Y(q,R,M,z,E,N);if(M.transmission>0)K.push(C);else if(M.transparent===!0)W.push(C);else $.push(C)}function U(q,R,M,z,E,N){let C=Y(q,R,M,z,E,N);if(M.transmission>0)K.unshift(C);else if(M.transparent===!0)W.unshift(C);else $.unshift(C)}function D(q,R,M){if($.length>1)$.sort(q||Sq);if(K.length>1)K.sort(R||BZ);if(W.length>1)W.sort(R||BZ);if(M)$.reverse(),K.reverse(),W.reverse()}function O(){for(let q=Q,R=J.length;q<R;q++){let M=J[q];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:$,transmissive:K,transparent:W,init:Z,push:H,unshift:U,finish:O,sort:D}}function jq(){let J=new WeakMap;function Q(K,W){let Z=J.get(K),X;if(Z===void 0)X=new LZ,J.set(K,[X]);else if(W>=Z.length)X=new LZ,Z.push(X);else X=Z[W];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function yq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new g,color:new QJ};break;case"SpotLight":$={position:new g,direction:new g,color:new QJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new g,color:new QJ,distance:0,decay:0};break;case"HemisphereLight":$={direction:new g,skyColor:new QJ,groundColor:new QJ};break;case"RectAreaLight":$={color:new QJ,position:new g,halfWidth:new g,halfHeight:new g};break}return J[Q.id]=$,$}}}function vq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var hq=0;function bq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function fq(J){let Q=new yq,$=vq(),K={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)K.probe.push(new g);let W=new g,Z=new IJ,X=new IJ;function Y(U){let D=0,O=0,q=0;for(let L=0;L<9;L++)K.probe[L].set(0,0,0);let R=0,M=0,z=0,E=0,N=0,C=0,A=0,V=0,I=0,_=0,w=0;U.sort(bq);for(let L=0,r=U.length;L<r;L++){let T=U[L],c=T.color,$0=T.intensity,i=T.distance,J0=null;if(T.shadow&&T.shadow.map)if(T.shadow.map.texture.format===j9)J0=T.shadow.map.texture;else J0=T.shadow.map.depthTexture||T.shadow.map.texture;if(T.isAmbientLight)D+=c.r*$0,O+=c.g*$0,q+=c.b*$0;else if(T.isLightProbe){for(let W0=0;W0<9;W0++)K.probe[W0].addScaledVector(T.sh.coefficients[W0],$0);w++}else if(T.isDirectionalLight){let W0=Q.get(T);if(W0.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let l=T.shadow,n=$.get(T);n.shadowIntensity=l.intensity,n.shadowBias=l.bias,n.shadowNormalBias=l.normalBias,n.shadowRadius=l.radius,n.shadowMapSize=l.mapSize,K.directionalShadow[R]=n,K.directionalShadowMap[R]=J0,K.directionalShadowMatrix[R]=T.shadow.matrix,C++}K.directional[R]=W0,R++}else if(T.isSpotLight){let W0=Q.get(T);W0.position.setFromMatrixPosition(T.matrixWorld),W0.color.copy(c).multiplyScalar($0),W0.distance=i,W0.coneCos=Math.cos(T.angle),W0.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),W0.decay=T.decay,K.spot[z]=W0;let l=T.shadow;if(T.map){if(K.spotLightMap[I]=T.map,I++,l.updateMatrices(T),T.castShadow)_++}if(K.spotLightMatrix[z]=l.matrix,T.castShadow){let n=$.get(T);n.shadowIntensity=l.intensity,n.shadowBias=l.bias,n.shadowNormalBias=l.normalBias,n.shadowRadius=l.radius,n.shadowMapSize=l.mapSize,K.spotShadow[z]=n,K.spotShadowMap[z]=J0,V++}z++}else if(T.isRectAreaLight){let W0=Q.get(T);W0.color.copy(c).multiplyScalar($0),W0.halfWidth.set(T.width*0.5,0,0),W0.halfHeight.set(0,T.height*0.5,0),K.rectArea[E]=W0,E++}else if(T.isPointLight){let W0=Q.get(T);if(W0.color.copy(T.color).multiplyScalar(T.intensity),W0.distance=T.distance,W0.decay=T.decay,T.castShadow){let l=T.shadow,n=$.get(T);n.shadowIntensity=l.intensity,n.shadowBias=l.bias,n.shadowNormalBias=l.normalBias,n.shadowRadius=l.radius,n.shadowMapSize=l.mapSize,n.shadowCameraNear=l.camera.near,n.shadowCameraFar=l.camera.far,K.pointShadow[M]=n,K.pointShadowMap[M]=J0,K.pointShadowMatrix[M]=T.shadow.matrix,A++}K.point[M]=W0,M++}else if(T.isHemisphereLight){let W0=Q.get(T);W0.skyColor.copy(T.color).multiplyScalar($0),W0.groundColor.copy(T.groundColor).multiplyScalar($0),K.hemi[N]=W0,N++}}if(E>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=T0.LTC_FLOAT_1,K.rectAreaLTC2=T0.LTC_FLOAT_2;else K.rectAreaLTC1=T0.LTC_HALF_1,K.rectAreaLTC2=T0.LTC_HALF_2;K.ambient[0]=D,K.ambient[1]=O,K.ambient[2]=q;let k=K.hash;if(k.directionalLength!==R||k.pointLength!==M||k.spotLength!==z||k.rectAreaLength!==E||k.hemiLength!==N||k.numDirectionalShadows!==C||k.numPointShadows!==A||k.numSpotShadows!==V||k.numSpotMaps!==I||k.numLightProbes!==w)K.directional.length=R,K.spot.length=z,K.rectArea.length=E,K.point.length=M,K.hemi.length=N,K.directionalShadow.length=C,K.directionalShadowMap.length=C,K.pointShadow.length=A,K.pointShadowMap.length=A,K.spotShadow.length=V,K.spotShadowMap.length=V,K.directionalShadowMatrix.length=C,K.pointShadowMatrix.length=A,K.spotLightMatrix.length=V+I-_,K.spotLightMap.length=I,K.numSpotLightShadowsWithMaps=_,K.numLightProbes=w,k.directionalLength=R,k.pointLength=M,k.spotLength=z,k.rectAreaLength=E,k.hemiLength=N,k.numDirectionalShadows=C,k.numPointShadows=A,k.numSpotShadows=V,k.numSpotMaps=I,k.numLightProbes=w,K.version=hq++}function H(U,D){let O=0,q=0,R=0,M=0,z=0,E=D.matrixWorldInverse;for(let N=0,C=U.length;N<C;N++){let A=U[N];if(A.isDirectionalLight){let V=K.directional[O];V.direction.setFromMatrixPosition(A.matrixWorld),W.setFromMatrixPosition(A.target.matrixWorld),V.direction.sub(W),V.direction.transformDirection(E),O++}else if(A.isSpotLight){let V=K.spot[R];V.position.setFromMatrixPosition(A.matrixWorld),V.position.applyMatrix4(E),V.direction.setFromMatrixPosition(A.matrixWorld),W.setFromMatrixPosition(A.target.matrixWorld),V.direction.sub(W),V.direction.transformDirection(E),R++}else if(A.isRectAreaLight){let V=K.rectArea[M];V.position.setFromMatrixPosition(A.matrixWorld),V.position.applyMatrix4(E),X.identity(),Z.copy(A.matrixWorld),Z.premultiply(E),X.extractRotation(Z),V.halfWidth.set(A.width*0.5,0,0),V.halfHeight.set(0,A.height*0.5,0),V.halfWidth.applyMatrix4(X),V.halfHeight.applyMatrix4(X),M++}else if(A.isPointLight){let V=K.point[q];V.position.setFromMatrixPosition(A.matrixWorld),V.position.applyMatrix4(E),q++}else if(A.isHemisphereLight){let V=K.hemi[z];V.direction.setFromMatrixPosition(A.matrixWorld),V.direction.transformDirection(E),z++}}}return{setup:Y,setupView:H,state:K}}function zZ(J){let Q=new fq(J),$=[],K=[],W=[];function Z(q){O.camera=q,$.length=0,K.length=0,W.length=0}function X(q){$.push(q)}function Y(q){K.push(q)}function H(q){W.push(q)}function U(){Q.setup($)}function D(q){Q.setupView($,q)}let O={lightsArray:$,shadowsArray:K,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:Z,state:O,setupLights:U,setupLightsView:D,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function xq(J){let Q=new WeakMap;function $(W,Z=0){let X=Q.get(W),Y;if(X===void 0)Y=new zZ(J),Q.set(W,[Y]);else if(Z>=X.length)Y=new zZ(J),X.push(Y);else Y=X[Z];return Y}function K(){Q=new WeakMap}return{get:$,dispose:K}}var gq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pq=`uniform sampler2D shadow_pass;
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
}`,mq=[new g(1,0,0),new g(-1,0,0),new g(0,1,0),new g(0,-1,0),new g(0,0,1),new g(0,0,-1)],dq=[new g(0,-1,0),new g(0,-1,0),new g(0,0,1),new g(0,0,-1),new g(0,-1,0),new g(0,-1,0)],IZ=new IJ,o7=new g,FK=new g;function uq(J,Q,$){let K=new c7,W=new o0,Z=new o0,X=new wJ,Y=new l$,H=new c$,U={},D=$.maxTextureSize,O={[U7]:sJ,[sJ]:U7,[PJ]:PJ},q=new Z8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new o0},radius:{value:4}},vertexShader:gq,fragmentShader:pq}),R=q.clone();R.defines.HORIZONTAL_PASS=1;let M=new SJ;M.setAttribute("position",new dJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let z=new D0(M,q),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_9;let N=this.type;this.render=function(_,w,k){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(_.length===0)return;if(this.type===eK)a0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_9;let L=J.getRenderTarget(),r=J.getActiveCubeFace(),T=J.getActiveMipmapLevel(),c=J.state;if(c.setBlending(y8),c.buffers.depth.getReversed()===!0)c.buffers.color.setClear(0,0,0,0);else c.buffers.color.setClear(1,1,1,1);c.buffers.depth.setTest(!0),c.setScissorTest(!1);let $0=N!==this.type;if($0)w.traverse(function(i){if(i.material)if(Array.isArray(i.material))i.material.forEach((J0)=>J0.needsUpdate=!0);else i.material.needsUpdate=!0});for(let i=0,J0=_.length;i<J0;i++){let W0=_[i],l=W0.shadow;if(l===void 0){a0("WebGLShadowMap:",W0,"has no shadow.");continue}if(l.autoUpdate===!1&&l.needsUpdate===!1)continue;W.copy(l.mapSize);let n=l.getFrameExtents();if(W.multiply(n),Z.copy(l.mapSize),W.x>D||W.y>D){if(W.x>D)Z.x=Math.floor(D/n.x),W.x=Z.x*n.x,l.mapSize.x=Z.x;if(W.y>D)Z.y=Math.floor(D/n.y),W.y=Z.y*n.y,l.mapSize.y=Z.y}let m=J.state.buffers.depth.getReversed();if(l.camera._reversedDepth=m,l.map===null||$0===!0){if(l.map!==null){if(l.map.depthTexture!==null)l.map.depthTexture.dispose(),l.map.depthTexture=null;l.map.dispose()}if(this.type===H7){if(W0.isPointLight){a0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}l.map=new k8(W.x,W.y,{format:j9,type:r8,minFilter:W8,magFilter:W8,generateMipmaps:!1}),l.map.texture.name=W0.name+".shadowMap",l.map.depthTexture=new F9(W.x,W.y,a8),l.map.depthTexture.name=W0.name+".shadowMapDepth",l.map.depthTexture.format=T9,l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=q9,l.map.depthTexture.magFilter=q9}else{if(W0.isPointLight)l.map=new RK(W.x),l.map.depthTexture=new m$(W.x,N9);else l.map=new k8(W.x,W.y),l.map.depthTexture=new F9(W.x,W.y,N9);if(l.map.depthTexture.name=W0.name+".shadowMap",l.map.depthTexture.format=T9,this.type===_9)l.map.depthTexture.compareFunction=m?g6:x6,l.map.depthTexture.minFilter=W8,l.map.depthTexture.magFilter=W8;else l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=q9,l.map.depthTexture.magFilter=q9}l.camera.updateProjectionMatrix()}let U0=l.map.isWebGLCubeRenderTarget?6:1;for(let E0=0;E0<U0;E0++){if(l.map.isWebGLCubeRenderTarget)J.setRenderTarget(l.map,E0),J.clear();else{if(E0===0)J.setRenderTarget(l.map),J.clear();let F0=l.getViewport(E0);X.set(Z.x*F0.x,Z.y*F0.y,Z.x*F0.z,Z.y*F0.w),c.viewport(X)}if(W0.isPointLight){let{camera:F0,matrix:e0}=l,f0=W0.distance||F0.far;if(f0!==F0.far)F0.far=f0,F0.updateProjectionMatrix();o7.setFromMatrixPosition(W0.matrixWorld),F0.position.copy(o7),FK.copy(F0.position),FK.add(mq[E0]),F0.up.copy(dq[E0]),F0.lookAt(FK),F0.updateMatrixWorld(),e0.makeTranslation(-o7.x,-o7.y,-o7.z),IZ.multiplyMatrices(F0.projectionMatrix,F0.matrixWorldInverse),l._frustum.setFromProjectionMatrix(IZ,F0.coordinateSystem,F0.reversedDepth)}else l.updateMatrices(W0);K=l.getFrustum(),V(w,k,l.camera,W0,this.type)}if(l.isPointLightShadow!==!0&&this.type===H7)C(l,k);l.needsUpdate=!1}N=this.type,E.needsUpdate=!1,J.setRenderTarget(L,r,T)};function C(_,w){let k=Q.update(z);if(q.defines.VSM_SAMPLES!==_.blurSamples)q.defines.VSM_SAMPLES=_.blurSamples,R.defines.VSM_SAMPLES=_.blurSamples,q.needsUpdate=!0,R.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new k8(W.x,W.y,{format:j9,type:r8});q.uniforms.shadow_pass.value=_.map.depthTexture,q.uniforms.resolution.value=_.mapSize,q.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(w,null,k,q,z,null),R.uniforms.shadow_pass.value=_.mapPass.texture,R.uniforms.resolution.value=_.mapSize,R.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(w,null,k,R,z,null)}function A(_,w,k,L){let r=null,T=k.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(T!==void 0)r=T;else if(r=k.isPointLight===!0?H:Y,J.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let c=r.uuid,$0=w.uuid,i=U[c];if(i===void 0)i={},U[c]=i;let J0=i[$0];if(J0===void 0)J0=r.clone(),i[$0]=J0,w.addEventListener("dispose",I);r=J0}if(r.visible=w.visible,r.wireframe=w.wireframe,L===H7)r.side=w.shadowSide!==null?w.shadowSide:w.side;else r.side=w.shadowSide!==null?w.shadowSide:O[w.side];if(r.alphaMap=w.alphaMap,r.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,r.map=w.map,r.clipShadows=w.clipShadows,r.clippingPlanes=w.clippingPlanes,r.clipIntersection=w.clipIntersection,r.displacementMap=w.displacementMap,r.displacementScale=w.displacementScale,r.displacementBias=w.displacementBias,r.wireframeLinewidth=w.wireframeLinewidth,r.linewidth=w.linewidth,k.isPointLight===!0&&r.isMeshDistanceMaterial===!0){let c=J.properties.get(r);c.light=k}return r}function V(_,w,k,L,r){if(_.visible===!1)return;if(_.layers.test(w.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&r===H7)&&(!_.frustumCulled||K.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld);let $0=Q.update(_),i=_.material;if(Array.isArray(i)){let J0=$0.groups;for(let W0=0,l=J0.length;W0<l;W0++){let n=J0[W0],m=i[n.materialIndex];if(m&&m.visible){let U0=A(_,m,L,r);_.onBeforeShadow(J,_,w,k,$0,U0,n),J.renderBufferDirect(k,null,$0,U0,_,n),_.onAfterShadow(J,_,w,k,$0,U0,n)}}}else if(i.visible){let J0=A(_,i,L,r);_.onBeforeShadow(J,_,w,k,$0,J0,null),J.renderBufferDirect(k,null,$0,J0,_,null),_.onAfterShadow(J,_,w,k,$0,J0,null)}}}let c=_.children;for(let $0=0,i=c.length;$0<i;$0++)V(c[$0],w,k,L,r)}function I(_){_.target.removeEventListener("dispose",I);for(let k in U){let L=U[k],r=_.target.uuid;if(r in L)L[r].dispose(),delete L[r]}}}function lq(J,Q){function $(){let f=!1,M0=new wJ,X0=null,L0=new wJ(0,0,0,0);return{setMask:function(C0){if(X0!==C0&&!f)J.colorMask(C0,C0,C0,C0),X0=C0},setLocked:function(C0){f=C0},setClear:function(C0,H0,I0,l0,_J){if(_J===!0)C0*=l0,H0*=l0,I0*=l0;if(M0.set(C0,H0,I0,l0),L0.equals(M0)===!1)J.clearColor(C0,H0,I0,l0),L0.copy(M0)},reset:function(){f=!1,X0=null,L0.set(-1,0,0,0)}}}function K(){let f=!1,M0=!1,X0=null,L0=null,C0=null;return{setReversed:function(H0){if(M0!==H0){let I0=Q.get("EXT_clip_control");if(H0)I0.clipControlEXT(I0.LOWER_LEFT_EXT,I0.ZERO_TO_ONE_EXT);else I0.clipControlEXT(I0.LOWER_LEFT_EXT,I0.NEGATIVE_ONE_TO_ONE_EXT);M0=H0;let l0=C0;C0=null,this.setClear(l0)}},getReversed:function(){return M0},setTest:function(H0){if(H0)z0(J.DEPTH_TEST);else d(J.DEPTH_TEST)},setMask:function(H0){if(X0!==H0&&!f)J.depthMask(H0),X0=H0},setFunc:function(H0){if(M0)H0=oW[H0];if(L0!==H0){switch(H0){case VW:J.depthFunc(J.NEVER);break;case BW:J.depthFunc(J.ALWAYS);break;case LW:J.depthFunc(J.LESS);break;case pQ:J.depthFunc(J.LEQUAL);break;case zW:J.depthFunc(J.EQUAL);break;case IW:J.depthFunc(J.GEQUAL);break;case PW:J.depthFunc(J.GREATER);break;case AW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}L0=H0}},setLocked:function(H0){f=H0},setClear:function(H0){if(C0!==H0){if(C0=H0,M0)H0=1-H0;J.clearDepth(H0)}},reset:function(){f=!1,X0=null,L0=null,C0=null,M0=!1}}}function W(){let f=!1,M0=null,X0=null,L0=null,C0=null,H0=null,I0=null,l0=null,_J=null;return{setTest:function(DJ){if(!f)if(DJ)z0(J.STENCIL_TEST);else d(J.STENCIL_TEST)},setMask:function(DJ){if(M0!==DJ&&!f)J.stencilMask(DJ),M0=DJ},setFunc:function(DJ,Y8,H8){if(X0!==DJ||L0!==Y8||C0!==H8)J.stencilFunc(DJ,Y8,H8),X0=DJ,L0=Y8,C0=H8},setOp:function(DJ,Y8,H8){if(H0!==DJ||I0!==Y8||l0!==H8)J.stencilOp(DJ,Y8,H8),H0=DJ,I0=Y8,l0=H8},setLocked:function(DJ){f=DJ},setClear:function(DJ){if(_J!==DJ)J.clearStencil(DJ),_J=DJ},reset:function(){f=!1,M0=null,X0=null,L0=null,C0=null,H0=null,I0=null,l0=null,_J=null}}}let Z=new $,X=new K,Y=new W,H=new WeakMap,U=new WeakMap,D={},O={},q={},R=new WeakMap,M=[],z=null,E=!1,N=null,C=null,A=null,V=null,I=null,_=null,w=null,k=new QJ(0,0,0),L=0,r=!1,T=null,c=null,$0=null,i=null,J0=null,W0=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),l=!1,n=0,m=J.getParameter(J.VERSION);if(m.indexOf("WebGL")!==-1)n=parseFloat(/^WebGL (\d)/.exec(m)[1]),l=n>=1;else if(m.indexOf("OpenGL ES")!==-1)n=parseFloat(/^OpenGL ES (\d)/.exec(m)[1]),l=n>=2;let U0=null,E0={},F0=J.getParameter(J.SCISSOR_BOX),e0=J.getParameter(J.VIEWPORT),f0=new wJ().fromArray(F0),Q0=new wJ().fromArray(e0);function G0(f,M0,X0,L0){let C0=new Uint8Array(4),H0=J.createTexture();J.bindTexture(f,H0),J.texParameteri(f,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(f,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let I0=0;I0<X0;I0++)if(f===J.TEXTURE_3D||f===J.TEXTURE_2D_ARRAY)J.texImage3D(M0,0,J.RGBA,1,1,L0,0,J.RGBA,J.UNSIGNED_BYTE,C0);else J.texImage2D(M0+I0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,C0);return H0}let w0={};w0[J.TEXTURE_2D]=G0(J.TEXTURE_2D,J.TEXTURE_2D,1),w0[J.TEXTURE_CUBE_MAP]=G0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),w0[J.TEXTURE_2D_ARRAY]=G0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),w0[J.TEXTURE_3D]=G0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),Z.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),z0(J.DEPTH_TEST),X.setFunc(pQ),S0(!1),d0(fQ),z0(J.CULL_FACE),p(y8);function z0(f){if(D[f]!==!0)J.enable(f),D[f]=!0}function d(f){if(D[f]!==!1)J.disable(f),D[f]=!1}function e(f,M0){if(q[f]!==M0){if(J.bindFramebuffer(f,M0),q[f]=M0,f===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=M0;if(f===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=M0;return!0}return!1}function b(f,M0){let X0=M,L0=!1;if(f){if(X0=R.get(M0),X0===void 0)X0=[],R.set(M0,X0);let C0=f.textures;if(X0.length!==C0.length||X0[0]!==J.COLOR_ATTACHMENT0){for(let H0=0,I0=C0.length;H0<I0;H0++)X0[H0]=J.COLOR_ATTACHMENT0+H0;X0.length=C0.length,L0=!0}}else if(X0[0]!==J.BACK)X0[0]=J.BACK,L0=!0;if(L0)J.drawBuffers(X0)}function y(f){if(z!==f)return J.useProgram(f),z=f,!0;return!1}let u={[q7]:J.FUNC_ADD,[QW]:J.FUNC_SUBTRACT,[$W]:J.FUNC_REVERSE_SUBTRACT};u[KW]=J.MIN,u[WW]=J.MAX;let s={[ZW]:J.ZERO,[XW]:J.ONE,[YW]:J.SRC_COLOR,[UW]:J.SRC_ALPHA,[DW]:J.SRC_ALPHA_SATURATE,[FW]:J.DST_COLOR,[NW]:J.DST_ALPHA,[HW]:J.ONE_MINUS_SRC_COLOR,[qW]:J.ONE_MINUS_SRC_ALPHA,[OW]:J.ONE_MINUS_DST_COLOR,[GW]:J.ONE_MINUS_DST_ALPHA,[EW]:J.CONSTANT_COLOR,[RW]:J.ONE_MINUS_CONSTANT_COLOR,[kW]:J.CONSTANT_ALPHA,[MW]:J.ONE_MINUS_CONSTANT_ALPHA};function p(f,M0,X0,L0,C0,H0,I0,l0,_J,DJ){if(f===y8){if(E===!0)d(J.BLEND),E=!1;return}if(E===!1)z0(J.BLEND),E=!0;if(f!==JW){if(f!==N||DJ!==r){if(C!==q7||I!==q7)J.blendEquation(J.FUNC_ADD),C=q7,I=q7;if(DJ)switch(f){case b7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case o8:J.blendFunc(J.ONE,J.ONE);break;case xQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case gQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:t0("WebGLState: Invalid blending: ",f);break}else switch(f){case b7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case o8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case xQ:t0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gQ:t0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:t0("WebGLState: Invalid blending: ",f);break}A=null,V=null,_=null,w=null,k.set(0,0,0),L=0,N=f,r=DJ}return}if(C0=C0||M0,H0=H0||X0,I0=I0||L0,M0!==C||C0!==I)J.blendEquationSeparate(u[M0],u[C0]),C=M0,I=C0;if(X0!==A||L0!==V||H0!==_||I0!==w)J.blendFuncSeparate(s[X0],s[L0],s[H0],s[I0]),A=X0,V=L0,_=H0,w=I0;if(l0.equals(k)===!1||_J!==L)J.blendColor(l0.r,l0.g,l0.b,_J),k.copy(l0),L=_J;N=f,r=!1}function S(f,M0){f.side===PJ?d(J.CULL_FACE):z0(J.CULL_FACE);let X0=f.side===sJ;if(M0)X0=!X0;S0(X0),f.blending===b7&&f.transparent===!1?p(y8):p(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),X.setFunc(f.depthFunc),X.setTest(f.depthTest),X.setMask(f.depthWrite),Z.setMask(f.colorWrite);let L0=f.stencilWrite;if(Y.setTest(L0),L0)Y.setMask(f.stencilWriteMask),Y.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),Y.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass);s0(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?z0(J.SAMPLE_ALPHA_TO_COVERAGE):d(J.SAMPLE_ALPHA_TO_COVERAGE)}function S0(f){if(T!==f){if(f)J.frontFace(J.CW);else J.frontFace(J.CCW);T=f}}function d0(f){if(f!==rK){if(z0(J.CULL_FACE),f!==c)if(f===fQ)J.cullFace(J.BACK);else if(f===tK)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else d(J.CULL_FACE);c=f}function n0(f){if(f!==$0){if(l)J.lineWidth(f);$0=f}}function s0(f,M0,X0){if(f){if(z0(J.POLYGON_OFFSET_FILL),i!==M0||J0!==X0){if(i=M0,J0=X0,X.getReversed())M0=-M0;J.polygonOffset(M0,X0)}}else d(J.POLYGON_OFFSET_FILL)}function XJ(f){if(f)z0(J.SCISSOR_TEST);else d(J.SCISSOR_TEST)}function v(f){if(f===void 0)f=J.TEXTURE0+W0-1;if(U0!==f)J.activeTexture(f),U0=f}function KJ(f,M0,X0){if(X0===void 0)if(U0===null)X0=J.TEXTURE0+W0-1;else X0=U0;let L0=E0[X0];if(L0===void 0)L0={type:void 0,texture:void 0},E0[X0]=L0;if(L0.type!==f||L0.texture!==M0){if(U0!==X0)J.activeTexture(X0),U0=X0;J.bindTexture(f,M0||w0[f]),L0.type=f,L0.texture=M0}}function i0(){let f=E0[U0];if(f!==void 0&&f.type!==void 0)J.bindTexture(f.type,null),f.type=void 0,f.texture=void 0}function j(){try{J.compressedTexImage2D(...arguments)}catch(f){t0("WebGLState:",f)}}function F(){try{J.compressedTexImage3D(...arguments)}catch(f){t0("WebGLState:",f)}}function G(){try{J.texSubImage2D(...arguments)}catch(f){t0("WebGLState:",f)}}function P(){try{J.texSubImage3D(...arguments)}catch(f){t0("WebGLState:",f)}}function h(){try{J.compressedTexSubImage2D(...arguments)}catch(f){t0("WebGLState:",f)}}function Y0(){try{J.compressedTexSubImage3D(...arguments)}catch(f){t0("WebGLState:",f)}}function N0(){try{J.texStorage2D(...arguments)}catch(f){t0("WebGLState:",f)}}function k0(){try{J.texStorage3D(...arguments)}catch(f){t0("WebGLState:",f)}}function K0(){try{J.texImage2D(...arguments)}catch(f){t0("WebGLState:",f)}}function Z0(){try{J.texImage3D(...arguments)}catch(f){t0("WebGLState:",f)}}function R0(f){if(O[f]!==void 0)return O[f];else return J.getParameter(f)}function h0(f,M0){if(O[f]!==M0)J.pixelStorei(f,M0),O[f]=M0}function B0(f){if(f0.equals(f)===!1)J.scissor(f.x,f.y,f.z,f.w),f0.copy(f)}function O0(f){if(Q0.equals(f)===!1)J.viewport(f.x,f.y,f.z,f.w),Q0.copy(f)}function u0(f,M0){let X0=U.get(M0);if(X0===void 0)X0=new WeakMap,U.set(M0,X0);let L0=X0.get(f);if(L0===void 0)L0=J.getUniformBlockIndex(M0,f.name),X0.set(f,L0)}function x0(f,M0){let L0=U.get(M0).get(f);if(H.get(M0)!==L0)J.uniformBlockBinding(M0,L0,f.__bindingPointIndex),H.set(M0,L0)}function qJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),D={},O={},U0=null,E0={},q={},R=new WeakMap,M=[],z=null,E=!1,N=null,C=null,A=null,V=null,I=null,_=null,w=null,k=new QJ(0,0,0),L=0,r=!1,T=null,c=null,$0=null,i=null,J0=null,f0.set(0,0,J.canvas.width,J.canvas.height),Q0.set(0,0,J.canvas.width,J.canvas.height),Z.reset(),X.reset(),Y.reset()}return{buffers:{color:Z,depth:X,stencil:Y},enable:z0,disable:d,bindFramebuffer:e,drawBuffers:b,useProgram:y,setBlending:p,setMaterial:S,setFlipSided:S0,setCullFace:d0,setLineWidth:n0,setPolygonOffset:s0,setScissorTest:XJ,activeTexture:v,bindTexture:KJ,unbindTexture:i0,compressedTexImage2D:j,compressedTexImage3D:F,texImage2D:K0,texImage3D:Z0,pixelStorei:h0,getParameter:R0,updateUBOMapping:u0,uniformBlockBinding:x0,texStorage2D:N0,texStorage3D:k0,texSubImage2D:G,texSubImage3D:P,compressedTexSubImage2D:h,compressedTexSubImage3D:Y0,scissor:B0,viewport:O0,reset:qJ}}function cq(J,Q,$,K,W,Z,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new o0,D=new WeakMap,O=new Set,q,R=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(F){}function z(F,G){return M?new OffscreenCanvas(F,G):h7("canvas")}function E(F,G,P){let h=1,Y0=j(F);if(Y0.width>P||Y0.height>P)h=P/Math.max(Y0.width,Y0.height);if(h<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let N0=Math.floor(h*Y0.width),k0=Math.floor(h*Y0.height);if(q===void 0)q=z(N0,k0);let K0=G?z(N0,k0):q;return K0.width=N0,K0.height=k0,K0.getContext("2d").drawImage(F,0,0,N0,k0),a0("WebGLRenderer: Texture has been resized from ("+Y0.width+"x"+Y0.height+") to ("+N0+"x"+k0+")."),K0}else{if("data"in F)a0("WebGLRenderer: Image in DataTexture is too big ("+Y0.width+"x"+Y0.height+").");return F}return F}function N(F){return F.generateMipmaps}function C(F){J.generateMipmap(F)}function A(F){if(F.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(F.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(F,G,P,h,Y0,N0=!1){if(F!==null){if(J[F]!==void 0)return J[F];a0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let k0;if(h){if(k0=Q.get("EXT_texture_norm16"),!k0)a0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let K0=G;if(G===J.RED){if(P===J.FLOAT)K0=J.R32F;if(P===J.HALF_FLOAT)K0=J.R16F;if(P===J.UNSIGNED_BYTE)K0=J.R8;if(P===J.UNSIGNED_SHORT&&k0)K0=k0.R16_EXT;if(P===J.SHORT&&k0)K0=k0.R16_SNORM_EXT}if(G===J.RED_INTEGER){if(P===J.UNSIGNED_BYTE)K0=J.R8UI;if(P===J.UNSIGNED_SHORT)K0=J.R16UI;if(P===J.UNSIGNED_INT)K0=J.R32UI;if(P===J.BYTE)K0=J.R8I;if(P===J.SHORT)K0=J.R16I;if(P===J.INT)K0=J.R32I}if(G===J.RG){if(P===J.FLOAT)K0=J.RG32F;if(P===J.HALF_FLOAT)K0=J.RG16F;if(P===J.UNSIGNED_BYTE)K0=J.RG8;if(P===J.UNSIGNED_SHORT&&k0)K0=k0.RG16_EXT;if(P===J.SHORT&&k0)K0=k0.RG16_SNORM_EXT}if(G===J.RG_INTEGER){if(P===J.UNSIGNED_BYTE)K0=J.RG8UI;if(P===J.UNSIGNED_SHORT)K0=J.RG16UI;if(P===J.UNSIGNED_INT)K0=J.RG32UI;if(P===J.BYTE)K0=J.RG8I;if(P===J.SHORT)K0=J.RG16I;if(P===J.INT)K0=J.RG32I}if(G===J.RGB_INTEGER){if(P===J.UNSIGNED_BYTE)K0=J.RGB8UI;if(P===J.UNSIGNED_SHORT)K0=J.RGB16UI;if(P===J.UNSIGNED_INT)K0=J.RGB32UI;if(P===J.BYTE)K0=J.RGB8I;if(P===J.SHORT)K0=J.RGB16I;if(P===J.INT)K0=J.RGB32I}if(G===J.RGBA_INTEGER){if(P===J.UNSIGNED_BYTE)K0=J.RGBA8UI;if(P===J.UNSIGNED_SHORT)K0=J.RGBA16UI;if(P===J.UNSIGNED_INT)K0=J.RGBA32UI;if(P===J.BYTE)K0=J.RGBA8I;if(P===J.SHORT)K0=J.RGBA16I;if(P===J.INT)K0=J.RGBA32I}if(G===J.RGB){if(P===J.UNSIGNED_SHORT&&k0)K0=k0.RGB16_EXT;if(P===J.SHORT&&k0)K0=k0.RGB16_SNORM_EXT;if(P===J.UNSIGNED_INT_5_9_9_9_REV)K0=J.RGB9_E5;if(P===J.UNSIGNED_INT_10F_11F_11F_REV)K0=J.R11F_G11F_B10F}if(G===J.RGBA){let Z0=N0?S$:GJ.getTransfer(Y0);if(P===J.FLOAT)K0=J.RGBA32F;if(P===J.HALF_FLOAT)K0=J.RGBA16F;if(P===J.UNSIGNED_BYTE)K0=Z0===MJ?J.SRGB8_ALPHA8:J.RGBA8;if(P===J.UNSIGNED_SHORT&&k0)K0=k0.RGBA16_EXT;if(P===J.SHORT&&k0)K0=k0.RGBA16_SNORM_EXT;if(P===J.UNSIGNED_SHORT_4_4_4_4)K0=J.RGBA4;if(P===J.UNSIGNED_SHORT_5_5_5_1)K0=J.RGB5_A1}if(K0===J.R16F||K0===J.R32F||K0===J.RG16F||K0===J.RG32F||K0===J.RGBA16F||K0===J.RGBA32F)Q.get("EXT_color_buffer_float");return K0}function I(F,G){let P;if(F){if(G===null||G===N9||G===G7)P=J.DEPTH24_STENCIL8;else if(G===a8)P=J.DEPTH32F_STENCIL8;else if(G===m7)P=J.DEPTH24_STENCIL8,a0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(G===null||G===N9||G===G7)P=J.DEPTH_COMPONENT24;else if(G===a8)P=J.DEPTH_COMPONENT32F;else if(G===m7)P=J.DEPTH_COMPONENT16;return P}function _(F,G){if(N(F)===!0||F.isFramebufferTexture&&F.minFilter!==q9&&F.minFilter!==W8)return Math.log2(Math.max(G.width,G.height))+1;else if(F.mipmaps!==void 0&&F.mipmaps.length>0)return F.mipmaps.length;else if(F.isCompressedTexture&&Array.isArray(F.image))return G.mipmaps.length;else return 1}function w(F){let G=F.target;if(G.removeEventListener("dispose",w),L(G),G.isVideoTexture)D.delete(G);if(G.isHTMLTexture)O.delete(G)}function k(F){let G=F.target;G.removeEventListener("dispose",k),T(G)}function L(F){let G=K.get(F);if(G.__webglInit===void 0)return;let P=F.source,h=R.get(P);if(h){let Y0=h[G.__cacheKey];if(Y0.usedTimes--,Y0.usedTimes===0)r(F);if(Object.keys(h).length===0)R.delete(P)}K.remove(F)}function r(F){let G=K.get(F);J.deleteTexture(G.__webglTexture);let P=F.source,h=R.get(P);delete h[G.__cacheKey],X.memory.textures--}function T(F){let G=K.get(F);if(F.depthTexture)F.depthTexture.dispose(),K.remove(F.depthTexture);if(F.isWebGLCubeRenderTarget)for(let h=0;h<6;h++){if(Array.isArray(G.__webglFramebuffer[h]))for(let Y0=0;Y0<G.__webglFramebuffer[h].length;Y0++)J.deleteFramebuffer(G.__webglFramebuffer[h][Y0]);else J.deleteFramebuffer(G.__webglFramebuffer[h]);if(G.__webglDepthbuffer)J.deleteRenderbuffer(G.__webglDepthbuffer[h])}else{if(Array.isArray(G.__webglFramebuffer))for(let h=0;h<G.__webglFramebuffer.length;h++)J.deleteFramebuffer(G.__webglFramebuffer[h]);else J.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer)J.deleteRenderbuffer(G.__webglDepthbuffer);if(G.__webglMultisampledFramebuffer)J.deleteFramebuffer(G.__webglMultisampledFramebuffer);if(G.__webglColorRenderbuffer){for(let h=0;h<G.__webglColorRenderbuffer.length;h++)if(G.__webglColorRenderbuffer[h])J.deleteRenderbuffer(G.__webglColorRenderbuffer[h])}if(G.__webglDepthRenderbuffer)J.deleteRenderbuffer(G.__webglDepthRenderbuffer)}let P=F.textures;for(let h=0,Y0=P.length;h<Y0;h++){let N0=K.get(P[h]);if(N0.__webglTexture)J.deleteTexture(N0.__webglTexture),X.memory.textures--;K.remove(P[h])}K.remove(F)}let c=0;function $0(){c=0}function i(){return c}function J0(F){c=F}function W0(){let F=c;if(F>=W.maxTextures)a0("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+W.maxTextures);return c+=1,F}function l(F){let G=[];return G.push(F.wrapS),G.push(F.wrapT),G.push(F.wrapR||0),G.push(F.magFilter),G.push(F.minFilter),G.push(F.anisotropy),G.push(F.internalFormat),G.push(F.format),G.push(F.type),G.push(F.generateMipmaps),G.push(F.premultiplyAlpha),G.push(F.flipY),G.push(F.unpackAlignment),G.push(F.colorSpace),G.join()}function n(F,G){let P=K.get(F);if(F.isVideoTexture)KJ(F);if(F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&P.__version!==F.version){let h=F.image;if(h===null)a0("WebGLRenderer: Texture marked for update but no image data found.");else if(h.complete===!1)a0("WebGLRenderer: Texture marked for update but image is incomplete");else{d(P,F,G);return}}else if(F.isExternalTexture)P.__webglTexture=F.sourceTexture?F.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,P.__webglTexture,J.TEXTURE0+G)}function m(F,G){let P=K.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&P.__version!==F.version){d(P,F,G);return}else if(F.isExternalTexture)P.__webglTexture=F.sourceTexture?F.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,P.__webglTexture,J.TEXTURE0+G)}function U0(F,G){let P=K.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&P.__version!==F.version){d(P,F,G);return}$.bindTexture(J.TEXTURE_3D,P.__webglTexture,J.TEXTURE0+G)}function E0(F,G){let P=K.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&P.__version!==F.version){e(P,F,G);return}$.bindTexture(J.TEXTURE_CUBE_MAP,P.__webglTexture,J.TEXTURE0+G)}let F0={[g7]:J.REPEAT,[T6]:J.CLAMP_TO_EDGE,[TW]:J.MIRRORED_REPEAT},e0={[q9]:J.NEAREST,[SW]:J.NEAREST_MIPMAP_NEAREST,[p7]:J.NEAREST_MIPMAP_LINEAR,[W8]:J.LINEAR,[S6]:J.LINEAR_MIPMAP_NEAREST,[C9]:J.LINEAR_MIPMAP_LINEAR},f0={[pW]:J.NEVER,[cW]:J.ALWAYS,[mW]:J.LESS,[x6]:J.LEQUAL,[dW]:J.EQUAL,[g6]:J.GEQUAL,[uW]:J.GREATER,[lW]:J.NOTEQUAL};function Q0(F,G){if(G.type===a8&&Q.has("OES_texture_float_linear")===!1&&(G.magFilter===W8||G.magFilter===S6||G.magFilter===p7||G.magFilter===C9||G.minFilter===W8||G.minFilter===S6||G.minFilter===p7||G.minFilter===C9))a0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(F,J.TEXTURE_WRAP_S,F0[G.wrapS]),J.texParameteri(F,J.TEXTURE_WRAP_T,F0[G.wrapT]),F===J.TEXTURE_3D||F===J.TEXTURE_2D_ARRAY)J.texParameteri(F,J.TEXTURE_WRAP_R,F0[G.wrapR]);if(J.texParameteri(F,J.TEXTURE_MAG_FILTER,e0[G.magFilter]),J.texParameteri(F,J.TEXTURE_MIN_FILTER,e0[G.minFilter]),G.compareFunction)J.texParameteri(F,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(F,J.TEXTURE_COMPARE_FUNC,f0[G.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(G.magFilter===q9)return;if(G.minFilter!==p7&&G.minFilter!==C9)return;if(G.type===a8&&Q.has("OES_texture_float_linear")===!1)return;if(G.anisotropy>1||K.get(G).__currentAnisotropy){let P=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(F,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(G.anisotropy,W.getMaxAnisotropy())),K.get(G).__currentAnisotropy=G.anisotropy}}}function G0(F,G){let P=!1;if(F.__webglInit===void 0)F.__webglInit=!0,G.addEventListener("dispose",w);let h=G.source,Y0=R.get(h);if(Y0===void 0)Y0={},R.set(h,Y0);let N0=l(G);if(N0!==F.__cacheKey){if(Y0[N0]===void 0)Y0[N0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,P=!0;Y0[N0].usedTimes++;let k0=Y0[F.__cacheKey];if(k0!==void 0){if(Y0[F.__cacheKey].usedTimes--,k0.usedTimes===0)r(G)}F.__cacheKey=N0,F.__webglTexture=Y0[N0].texture}return P}function w0(F,G,P){return Math.floor(Math.floor(F/P)/G)}function z0(F,G,P,h){let N0=F.updateRanges;if(N0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,G.width,G.height,P,h,G.data);else{N0.sort((h0,B0)=>h0.start-B0.start);let k0=0;for(let h0=1;h0<N0.length;h0++){let B0=N0[k0],O0=N0[h0],u0=B0.start+B0.count,x0=w0(O0.start,G.width,4),qJ=w0(B0.start,G.width,4);if(O0.start<=u0+1&&x0===qJ&&w0(O0.start+O0.count-1,G.width,4)===x0)B0.count=Math.max(B0.count,O0.start+O0.count-B0.start);else++k0,N0[k0]=O0}N0.length=k0+1;let K0=$.getParameter(J.UNPACK_ROW_LENGTH),Z0=$.getParameter(J.UNPACK_SKIP_PIXELS),R0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,G.width);for(let h0=0,B0=N0.length;h0<B0;h0++){let O0=N0[h0],u0=Math.floor(O0.start/4),x0=Math.ceil(O0.count/4),qJ=u0%G.width,f=Math.floor(u0/G.width),M0=x0,X0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,qJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,f),$.texSubImage2D(J.TEXTURE_2D,0,qJ,f,M0,1,P,h,G.data)}F.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,K0),$.pixelStorei(J.UNPACK_SKIP_PIXELS,Z0),$.pixelStorei(J.UNPACK_SKIP_ROWS,R0)}}function d(F,G,P){let h=J.TEXTURE_2D;if(G.isDataArrayTexture||G.isCompressedArrayTexture)h=J.TEXTURE_2D_ARRAY;if(G.isData3DTexture)h=J.TEXTURE_3D;let Y0=G0(F,G),N0=G.source;$.bindTexture(h,F.__webglTexture,J.TEXTURE0+P);let k0=K.get(N0);if(N0.version!==k0.__version||Y0===!0){if($.activeTexture(J.TEXTURE0+P),(typeof ImageBitmap<"u"&&G.image instanceof ImageBitmap)===!1){let X0=GJ.getPrimaries(GJ.workingColorSpace),L0=G.colorSpace===y9?null:GJ.getPrimaries(G.colorSpace),C0=G.colorSpace===y9||X0===L0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,G.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,C0)}$.pixelStorei(J.UNPACK_ALIGNMENT,G.unpackAlignment);let Z0=E(G.image,!1,W.maxTextureSize);Z0=i0(G,Z0);let R0=Z.convert(G.format,G.colorSpace),h0=Z.convert(G.type),B0=V(G.internalFormat,R0,h0,G.normalized,G.colorSpace,G.isVideoTexture);Q0(h,G);let O0,u0=G.mipmaps,x0=G.isVideoTexture!==!0,qJ=k0.__version===void 0||Y0===!0,f=N0.dataReady,M0=_(G,Z0);if(G.isDepthTexture){if(B0=I(G.format===S9,G.type),qJ)if(x0)$.texStorage2D(J.TEXTURE_2D,1,B0,Z0.width,Z0.height);else $.texImage2D(J.TEXTURE_2D,0,B0,Z0.width,Z0.height,0,R0,h0,null)}else if(G.isDataTexture)if(u0.length>0){if(x0&&qJ)$.texStorage2D(J.TEXTURE_2D,M0,B0,u0[0].width,u0[0].height);for(let X0=0,L0=u0.length;X0<L0;X0++)if(O0=u0[X0],x0){if(f)$.texSubImage2D(J.TEXTURE_2D,X0,0,0,O0.width,O0.height,R0,h0,O0.data)}else $.texImage2D(J.TEXTURE_2D,X0,B0,O0.width,O0.height,0,R0,h0,O0.data);G.generateMipmaps=!1}else if(x0){if(qJ)$.texStorage2D(J.TEXTURE_2D,M0,B0,Z0.width,Z0.height);if(f)z0(G,Z0,R0,h0)}else $.texImage2D(J.TEXTURE_2D,0,B0,Z0.width,Z0.height,0,R0,h0,Z0.data);else if(G.isCompressedTexture)if(G.isCompressedArrayTexture){if(x0&&qJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,M0,B0,u0[0].width,u0[0].height,Z0.depth);for(let X0=0,L0=u0.length;X0<L0;X0++)if(O0=u0[X0],G.format!==v8)if(R0!==null)if(x0){if(f)if(G.layerUpdates.size>0){let C0=YK(O0.width,O0.height,G.format,G.type);for(let H0 of G.layerUpdates){let I0=O0.data.subarray(H0*C0/O0.data.BYTES_PER_ELEMENT,(H0+1)*C0/O0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,H0,O0.width,O0.height,1,R0,I0)}G.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,0,O0.width,O0.height,Z0.depth,R0,O0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,X0,B0,O0.width,O0.height,Z0.depth,0,O0.data,0,0);else a0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(x0){if(f)$.texSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,0,O0.width,O0.height,Z0.depth,R0,h0,O0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,X0,B0,O0.width,O0.height,Z0.depth,0,R0,h0,O0.data)}else{if(x0&&qJ)$.texStorage2D(J.TEXTURE_2D,M0,B0,u0[0].width,u0[0].height);for(let X0=0,L0=u0.length;X0<L0;X0++)if(O0=u0[X0],G.format!==v8)if(R0!==null)if(x0){if(f)$.compressedTexSubImage2D(J.TEXTURE_2D,X0,0,0,O0.width,O0.height,R0,O0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,X0,B0,O0.width,O0.height,0,O0.data);else a0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(x0){if(f)$.texSubImage2D(J.TEXTURE_2D,X0,0,0,O0.width,O0.height,R0,h0,O0.data)}else $.texImage2D(J.TEXTURE_2D,X0,B0,O0.width,O0.height,0,R0,h0,O0.data)}else if(G.isDataArrayTexture)if(x0){if(qJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,M0,B0,Z0.width,Z0.height,Z0.depth);if(f)if(G.layerUpdates.size>0){let X0=YK(Z0.width,Z0.height,G.format,G.type);for(let L0 of G.layerUpdates){let C0=Z0.data.subarray(L0*X0/Z0.data.BYTES_PER_ELEMENT,(L0+1)*X0/Z0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,L0,Z0.width,Z0.height,1,R0,h0,C0)}G.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,Z0.width,Z0.height,Z0.depth,R0,h0,Z0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,B0,Z0.width,Z0.height,Z0.depth,0,R0,h0,Z0.data);else if(G.isData3DTexture)if(x0){if(qJ)$.texStorage3D(J.TEXTURE_3D,M0,B0,Z0.width,Z0.height,Z0.depth);if(f)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,Z0.width,Z0.height,Z0.depth,R0,h0,Z0.data)}else $.texImage3D(J.TEXTURE_3D,0,B0,Z0.width,Z0.height,Z0.depth,0,R0,h0,Z0.data);else if(G.isFramebufferTexture){if(qJ)if(x0)$.texStorage2D(J.TEXTURE_2D,M0,B0,Z0.width,Z0.height);else{let{width:X0,height:L0}=Z0;for(let C0=0;C0<M0;C0++)$.texImage2D(J.TEXTURE_2D,C0,B0,X0,L0,0,R0,h0,null),X0>>=1,L0>>=1}}else if(G.isHTMLTexture){if("texElementImage2D"in J){let X0=J.canvas;if(!X0.hasAttribute("layoutsubtree"))X0.setAttribute("layoutsubtree","true");if(Z0.parentNode!==X0){X0.appendChild(Z0),O.add(G),X0.onpaint=(L0)=>{let C0=L0.changedElements;for(let H0 of O)if(C0.includes(H0.image))H0.needsUpdate=!0},X0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,Z0);else{let{RGBA:C0,RGBA:H0,UNSIGNED_BYTE:I0}=J;J.texElementImage2D(J.TEXTURE_2D,0,C0,H0,I0,Z0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(u0.length>0){if(x0&&qJ){let X0=j(u0[0]);$.texStorage2D(J.TEXTURE_2D,M0,B0,X0.width,X0.height)}for(let X0=0,L0=u0.length;X0<L0;X0++)if(O0=u0[X0],x0){if(f)$.texSubImage2D(J.TEXTURE_2D,X0,0,0,R0,h0,O0)}else $.texImage2D(J.TEXTURE_2D,X0,B0,R0,h0,O0);G.generateMipmaps=!1}else if(x0){if(qJ){let X0=j(Z0);$.texStorage2D(J.TEXTURE_2D,M0,B0,X0.width,X0.height)}if(f)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R0,h0,Z0)}else $.texImage2D(J.TEXTURE_2D,0,B0,R0,h0,Z0);if(N(G))C(h);if(k0.__version=N0.version,G.onUpdate)G.onUpdate(G)}F.__version=G.version}function e(F,G,P){if(G.image.length!==6)return;let h=G0(F,G),Y0=G.source;$.bindTexture(J.TEXTURE_CUBE_MAP,F.__webglTexture,J.TEXTURE0+P);let N0=K.get(Y0);if(Y0.version!==N0.__version||h===!0){$.activeTexture(J.TEXTURE0+P);let k0=GJ.getPrimaries(GJ.workingColorSpace),K0=G.colorSpace===y9?null:GJ.getPrimaries(G.colorSpace),Z0=G.colorSpace===y9||k0===K0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,G.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,G.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z0);let R0=G.isCompressedTexture||G.image[0].isCompressedTexture,h0=G.image[0]&&G.image[0].isDataTexture,B0=[];for(let H0=0;H0<6;H0++){if(!R0&&!h0)B0[H0]=E(G.image[H0],!0,W.maxCubemapSize);else B0[H0]=h0?G.image[H0].image:G.image[H0];B0[H0]=i0(G,B0[H0])}let O0=B0[0],u0=Z.convert(G.format,G.colorSpace),x0=Z.convert(G.type),qJ=V(G.internalFormat,u0,x0,G.normalized,G.colorSpace),f=G.isVideoTexture!==!0,M0=N0.__version===void 0||h===!0,X0=Y0.dataReady,L0=_(G,O0);Q0(J.TEXTURE_CUBE_MAP,G);let C0;if(R0){if(f&&M0)$.texStorage2D(J.TEXTURE_CUBE_MAP,L0,qJ,O0.width,O0.height);for(let H0=0;H0<6;H0++){C0=B0[H0].mipmaps;for(let I0=0;I0<C0.length;I0++){let l0=C0[I0];if(G.format!==v8)if(u0!==null)if(f){if(X0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,I0,0,0,l0.width,l0.height,u0,l0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,I0,qJ,l0.width,l0.height,0,l0.data);else a0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(f){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,I0,0,0,l0.width,l0.height,u0,x0,l0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,I0,qJ,l0.width,l0.height,0,u0,x0,l0.data)}}}else{if(C0=G.mipmaps,f&&M0){if(C0.length>0)L0++;let H0=j(B0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,L0,qJ,H0.width,H0.height)}for(let H0=0;H0<6;H0++)if(h0){if(f){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,0,0,B0[H0].width,B0[H0].height,u0,x0,B0[H0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,qJ,B0[H0].width,B0[H0].height,0,u0,x0,B0[H0].data);for(let I0=0;I0<C0.length;I0++){let _J=C0[I0].image[H0].image;if(f){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,I0+1,0,0,_J.width,_J.height,u0,x0,_J.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,I0+1,qJ,_J.width,_J.height,0,u0,x0,_J.data)}}else{if(f){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,0,0,u0,x0,B0[H0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,qJ,u0,x0,B0[H0]);for(let I0=0;I0<C0.length;I0++){let l0=C0[I0];if(f){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,I0+1,0,0,u0,x0,l0.image[H0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,I0+1,qJ,u0,x0,l0.image[H0])}}}if(N(G))C(J.TEXTURE_CUBE_MAP);if(N0.__version=Y0.version,G.onUpdate)G.onUpdate(G)}F.__version=G.version}function b(F,G,P,h,Y0,N0){let k0=Z.convert(P.format,P.colorSpace),K0=Z.convert(P.type),Z0=V(P.internalFormat,k0,K0,P.normalized,P.colorSpace),R0=K.get(G),h0=K.get(P);if(h0.__renderTarget=G,!R0.__hasExternalTextures){let B0=Math.max(1,G.width>>N0),O0=Math.max(1,G.height>>N0);if(Y0===J.TEXTURE_3D||Y0===J.TEXTURE_2D_ARRAY)$.texImage3D(Y0,N0,Z0,B0,O0,G.depth,0,k0,K0,null);else $.texImage2D(Y0,N0,Z0,B0,O0,0,k0,K0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,F),v(G))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,h,Y0,h0.__webglTexture,0,XJ(G));else if(Y0===J.TEXTURE_2D||Y0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&Y0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,h,Y0,h0.__webglTexture,N0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function y(F,G,P){if(J.bindRenderbuffer(J.RENDERBUFFER,F),G.depthBuffer){let h=G.depthTexture,Y0=h&&h.isDepthTexture?h.type:null,N0=I(G.stencilBuffer,Y0),k0=G.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(G))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,XJ(G),N0,G.width,G.height);else if(P)J.renderbufferStorageMultisample(J.RENDERBUFFER,XJ(G),N0,G.width,G.height);else J.renderbufferStorage(J.RENDERBUFFER,N0,G.width,G.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,k0,J.RENDERBUFFER,F)}else{let h=G.textures;for(let Y0=0;Y0<h.length;Y0++){let N0=h[Y0],k0=Z.convert(N0.format,N0.colorSpace),K0=Z.convert(N0.type),Z0=V(N0.internalFormat,k0,K0,N0.normalized,N0.colorSpace);if(v(G))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,XJ(G),Z0,G.width,G.height);else if(P)J.renderbufferStorageMultisample(J.RENDERBUFFER,XJ(G),Z0,G.width,G.height);else J.renderbufferStorage(J.RENDERBUFFER,Z0,G.width,G.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function u(F,G,P){let h=G.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,F),!(G.depthTexture&&G.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y0=K.get(G.depthTexture);if(Y0.__renderTarget=G,!Y0.__webglTexture||G.depthTexture.image.width!==G.width||G.depthTexture.image.height!==G.height)G.depthTexture.image.width=G.width,G.depthTexture.image.height=G.height,G.depthTexture.needsUpdate=!0;if(h){if(Y0.__webglInit===void 0)Y0.__webglInit=!0,G.depthTexture.addEventListener("dispose",w);if(Y0.__webglTexture===void 0){Y0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,Y0.__webglTexture),Q0(J.TEXTURE_CUBE_MAP,G.depthTexture);let R0=Z.convert(G.depthTexture.format),h0=Z.convert(G.depthTexture.type),B0;if(G.depthTexture.format===T9)B0=J.DEPTH_COMPONENT24;else if(G.depthTexture.format===S9)B0=J.DEPTH24_STENCIL8;for(let O0=0;O0<6;O0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,0,B0,G.width,G.height,0,R0,h0,null)}}else n(G.depthTexture,0);let N0=Y0.__webglTexture,k0=XJ(G),K0=h?J.TEXTURE_CUBE_MAP_POSITIVE_X+P:J.TEXTURE_2D,Z0=G.depthTexture.format===S9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(G.depthTexture.format===T9)if(v(G))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Z0,K0,N0,0,k0);else J.framebufferTexture2D(J.FRAMEBUFFER,Z0,K0,N0,0);else if(G.depthTexture.format===S9)if(v(G))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Z0,K0,N0,0,k0);else J.framebufferTexture2D(J.FRAMEBUFFER,Z0,K0,N0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function s(F){let G=K.get(F),P=F.isWebGLCubeRenderTarget===!0;if(G.__boundDepthTexture!==F.depthTexture){let h=F.depthTexture;if(G.__depthDisposeCallback)G.__depthDisposeCallback();if(h){let Y0=()=>{delete G.__boundDepthTexture,delete G.__depthDisposeCallback,h.removeEventListener("dispose",Y0)};h.addEventListener("dispose",Y0),G.__depthDisposeCallback=Y0}G.__boundDepthTexture=h}if(F.depthTexture&&!G.__autoAllocateDepthBuffer)if(P)for(let h=0;h<6;h++)u(G.__webglFramebuffer[h],F,h);else{let h=F.texture.mipmaps;if(h&&h.length>0)u(G.__webglFramebuffer[0],F,0);else u(G.__webglFramebuffer,F,0)}else if(P){G.__webglDepthbuffer=[];for(let h=0;h<6;h++)if($.bindFramebuffer(J.FRAMEBUFFER,G.__webglFramebuffer[h]),G.__webglDepthbuffer[h]===void 0)G.__webglDepthbuffer[h]=J.createRenderbuffer(),y(G.__webglDepthbuffer[h],F,!1);else{let Y0=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=G.__webglDepthbuffer[h];J.bindRenderbuffer(J.RENDERBUFFER,N0),J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,N0)}}else{let h=F.texture.mipmaps;if(h&&h.length>0)$.bindFramebuffer(J.FRAMEBUFFER,G.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,G.__webglFramebuffer);if(G.__webglDepthbuffer===void 0)G.__webglDepthbuffer=J.createRenderbuffer(),y(G.__webglDepthbuffer,F,!1);else{let Y0=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=G.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,N0),J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,N0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function p(F,G,P){let h=K.get(F);if(G!==void 0)b(h.__webglFramebuffer,F,F.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(P!==void 0)s(F)}function S(F){let G=F.texture,P=K.get(F),h=K.get(G);F.addEventListener("dispose",k);let Y0=F.textures,N0=F.isWebGLCubeRenderTarget===!0,k0=Y0.length>1;if(!k0){if(h.__webglTexture===void 0)h.__webglTexture=J.createTexture();h.__version=G.version,X.memory.textures++}if(N0){P.__webglFramebuffer=[];for(let K0=0;K0<6;K0++)if(G.mipmaps&&G.mipmaps.length>0){P.__webglFramebuffer[K0]=[];for(let Z0=0;Z0<G.mipmaps.length;Z0++)P.__webglFramebuffer[K0][Z0]=J.createFramebuffer()}else P.__webglFramebuffer[K0]=J.createFramebuffer()}else{if(G.mipmaps&&G.mipmaps.length>0){P.__webglFramebuffer=[];for(let K0=0;K0<G.mipmaps.length;K0++)P.__webglFramebuffer[K0]=J.createFramebuffer()}else P.__webglFramebuffer=J.createFramebuffer();if(k0)for(let K0=0,Z0=Y0.length;K0<Z0;K0++){let R0=K.get(Y0[K0]);if(R0.__webglTexture===void 0)R0.__webglTexture=J.createTexture(),X.memory.textures++}if(F.samples>0&&v(F)===!1){P.__webglMultisampledFramebuffer=J.createFramebuffer(),P.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let K0=0;K0<Y0.length;K0++){let Z0=Y0[K0];P.__webglColorRenderbuffer[K0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,P.__webglColorRenderbuffer[K0]);let R0=Z.convert(Z0.format,Z0.colorSpace),h0=Z.convert(Z0.type),B0=V(Z0.internalFormat,R0,h0,Z0.normalized,Z0.colorSpace,F.isXRRenderTarget===!0),O0=XJ(F);J.renderbufferStorageMultisample(J.RENDERBUFFER,O0,B0,F.width,F.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+K0,J.RENDERBUFFER,P.__webglColorRenderbuffer[K0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),F.depthBuffer)P.__webglDepthRenderbuffer=J.createRenderbuffer(),y(P.__webglDepthRenderbuffer,F,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(N0){$.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture),Q0(J.TEXTURE_CUBE_MAP,G);for(let K0=0;K0<6;K0++)if(G.mipmaps&&G.mipmaps.length>0)for(let Z0=0;Z0<G.mipmaps.length;Z0++)b(P.__webglFramebuffer[K0][Z0],F,G,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,Z0);else b(P.__webglFramebuffer[K0],F,G,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,0);if(N(G))C(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(k0){for(let K0=0,Z0=Y0.length;K0<Z0;K0++){let R0=Y0[K0],h0=K.get(R0),B0=J.TEXTURE_2D;if(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)B0=F.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(B0,h0.__webglTexture),Q0(B0,R0),b(P.__webglFramebuffer,F,R0,J.COLOR_ATTACHMENT0+K0,B0,0),N(R0))C(B0)}$.unbindTexture()}else{let K0=J.TEXTURE_2D;if(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)K0=F.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(K0,h.__webglTexture),Q0(K0,G),G.mipmaps&&G.mipmaps.length>0)for(let Z0=0;Z0<G.mipmaps.length;Z0++)b(P.__webglFramebuffer[Z0],F,G,J.COLOR_ATTACHMENT0,K0,Z0);else b(P.__webglFramebuffer,F,G,J.COLOR_ATTACHMENT0,K0,0);if(N(G))C(K0);$.unbindTexture()}if(F.depthBuffer)s(F)}function S0(F){let G=F.textures;for(let P=0,h=G.length;P<h;P++){let Y0=G[P];if(N(Y0)){let N0=A(F),k0=K.get(Y0).__webglTexture;$.bindTexture(N0,k0),C(N0),$.unbindTexture()}}}let d0=[],n0=[];function s0(F){if(F.samples>0){if(v(F)===!1){let{textures:G,width:P,height:h}=F,Y0=J.COLOR_BUFFER_BIT,N0=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,k0=K.get(F),K0=G.length>1;if(K0)for(let R0=0;R0<G.length;R0++)$.bindFramebuffer(J.FRAMEBUFFER,k0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,k0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,k0.__webglMultisampledFramebuffer);let Z0=F.texture.mipmaps;if(Z0&&Z0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,k0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,k0.__webglFramebuffer);for(let R0=0;R0<G.length;R0++){if(F.resolveDepthBuffer){if(F.depthBuffer)Y0|=J.DEPTH_BUFFER_BIT;if(F.stencilBuffer&&F.resolveStencilBuffer)Y0|=J.STENCIL_BUFFER_BIT}if(K0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,k0.__webglColorRenderbuffer[R0]);let h0=K.get(G[R0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,h0,0)}if(J.blitFramebuffer(0,0,P,h,0,0,P,h,Y0,J.NEAREST),H===!0){if(d0.length=0,n0.length=0,d0.push(J.COLOR_ATTACHMENT0+R0),F.depthBuffer&&F.resolveDepthBuffer===!1)d0.push(N0),n0.push(N0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,n0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,d0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),K0)for(let R0=0;R0<G.length;R0++){$.bindFramebuffer(J.FRAMEBUFFER,k0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.RENDERBUFFER,k0.__webglColorRenderbuffer[R0]);let h0=K.get(G[R0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,k0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.TEXTURE_2D,h0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,k0.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&H){let G=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[G])}}}function XJ(F){return Math.min(W.maxSamples,F.samples)}function v(F){let G=K.get(F);return F.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&G.__useRenderToTexture!==!1}function KJ(F){let G=X.render.frame;if(D.get(F)!==G)D.set(F,G),F.update()}function i0(F,G){let{colorSpace:P,format:h,type:Y0}=F;if(F.isCompressedTexture===!0||F.isVideoTexture===!0)return G;if(P!==T$&&P!==y9)if(GJ.getTransfer(P)===MJ){if(h!==v8||Y0!==_8)a0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else t0("WebGLTextures: Unsupported texture color space:",P);return G}function j(F){if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement)U.width=F.naturalWidth||F.width,U.height=F.naturalHeight||F.height;else if(typeof VideoFrame<"u"&&F instanceof VideoFrame)U.width=F.displayWidth,U.height=F.displayHeight;else U.width=F.width,U.height=F.height;return U}this.allocateTextureUnit=W0,this.resetTextureUnits=$0,this.getTextureUnits=i,this.setTextureUnits=J0,this.setTexture2D=n,this.setTexture2DArray=m,this.setTexture3D=U0,this.setTextureCube=E0,this.rebindTextures=p,this.setupRenderTarget=S,this.updateRenderTargetMipmap=S0,this.updateMultisampleRenderTarget=s0,this.setupDepthRenderbuffer=s,this.setupFrameBufferTexture=b,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function nq(J,Q){function $(K,W=y9){let Z,X=GJ.getTransfer(W);if(K===_8)return J.UNSIGNED_BYTE;if(K===iQ)return J.UNSIGNED_SHORT_4_4_4_4;if(K===oQ)return J.UNSIGNED_SHORT_5_5_5_1;if(K===vW)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===hW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===jW)return J.BYTE;if(K===yW)return J.SHORT;if(K===m7)return J.UNSIGNED_SHORT;if(K===sQ)return J.INT;if(K===N9)return J.UNSIGNED_INT;if(K===a8)return J.FLOAT;if(K===r8)return J.HALF_FLOAT;if(K===bW)return J.ALPHA;if(K===fW)return J.RGB;if(K===v8)return J.RGBA;if(K===T9)return J.DEPTH_COMPONENT;if(K===S9)return J.DEPTH_STENCIL;if(K===xW)return J.RED;if(K===aQ)return J.RED_INTEGER;if(K===j9)return J.RG;if(K===rQ)return J.RG_INTEGER;if(K===tQ)return J.RGBA_INTEGER;if(K===j6||K===y6||K===v6||K===h6)if(X===MJ)if(Z=Q.get("WEBGL_compressed_texture_s3tc_srgb"),Z!==null){if(K===j6)return Z.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===y6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===v6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===h6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Z=Q.get("WEBGL_compressed_texture_s3tc"),Z!==null){if(K===j6)return Z.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===y6)return Z.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===v6)return Z.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===h6)return Z.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===eQ||K===J$||K===Q$||K===$$)if(Z=Q.get("WEBGL_compressed_texture_pvrtc"),Z!==null){if(K===eQ)return Z.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===J$)return Z.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===Q$)return Z.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===$$)return Z.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===K$||K===W$||K===Z$||K===X$||K===Y$||K===b6||K===H$)if(Z=Q.get("WEBGL_compressed_texture_etc"),Z!==null){if(K===K$||K===W$)return X===MJ?Z.COMPRESSED_SRGB8_ETC2:Z.COMPRESSED_RGB8_ETC2;if(K===Z$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Z.COMPRESSED_RGBA8_ETC2_EAC;if(K===X$)return Z.COMPRESSED_R11_EAC;if(K===Y$)return Z.COMPRESSED_SIGNED_R11_EAC;if(K===b6)return Z.COMPRESSED_RG11_EAC;if(K===H$)return Z.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===U$||K===q$||K===N$||K===G$||K===F$||K===O$||K===D$||K===E$||K===R$||K===k$||K===M$||K===V$||K===B$||K===L$)if(Z=Q.get("WEBGL_compressed_texture_astc"),Z!==null){if(K===U$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Z.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===q$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Z.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===N$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Z.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===G$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Z.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===F$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Z.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===O$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Z.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===D$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Z.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===E$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Z.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===R$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Z.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===k$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Z.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===M$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Z.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===V$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Z.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===B$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Z.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===L$)return X===MJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Z.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===z$||K===I$||K===P$)if(Z=Q.get("EXT_texture_compression_bptc"),Z!==null){if(K===z$)return X===MJ?Z.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Z.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===I$)return Z.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===P$)return Z.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===A$||K===_$||K===f6||K===w$)if(Z=Q.get("EXT_texture_compression_rgtc"),Z!==null){if(K===A$)return Z.COMPRESSED_RED_RGTC1_EXT;if(K===_$)return Z.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===f6)return Z.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===w$)return Z.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===G7)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:$}}var sq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iq=`
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

}`;class bZ{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new n6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new Z8({vertexShader:sq,fragmentShader:iq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new D0(new w8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fZ extends b8{constructor(J,Q){super();let $=this,K=null,W=1,Z=null,X="local-floor",Y=1,H=null,U=null,D=null,O=null,q=null,R=null,M=typeof XRWebGLBinding<"u",z=new bZ,E={},N=Q.getContextAttributes(),C=null,A=null,V=[],I=[],_=new o0,w=null,k=new pJ;k.viewport=new wJ;let L=new pJ;L.viewport=new wJ;let r=[k,L],T=new KK,c=null,$0=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q0){let G0=V[Q0];if(G0===void 0)G0=new u7,V[Q0]=G0;return G0.getTargetRaySpace()},this.getControllerGrip=function(Q0){let G0=V[Q0];if(G0===void 0)G0=new u7,V[Q0]=G0;return G0.getGripSpace()},this.getHand=function(Q0){let G0=V[Q0];if(G0===void 0)G0=new u7,V[Q0]=G0;return G0.getHandSpace()};function i(Q0){let G0=I.indexOf(Q0.inputSource);if(G0===-1)return;let w0=V[G0];if(w0!==void 0)w0.update(Q0.inputSource,Q0.frame,H||Z),w0.dispatchEvent({type:Q0.type,data:Q0.inputSource})}function J0(){K.removeEventListener("select",i),K.removeEventListener("selectstart",i),K.removeEventListener("selectend",i),K.removeEventListener("squeeze",i),K.removeEventListener("squeezestart",i),K.removeEventListener("squeezeend",i),K.removeEventListener("end",J0),K.removeEventListener("inputsourceschange",W0);for(let Q0=0;Q0<V.length;Q0++){let G0=I[Q0];if(G0===null)continue;I[Q0]=null,V[Q0].disconnect(G0)}c=null,$0=null,z.reset();for(let Q0 in E)delete E[Q0];J.setRenderTarget(C),q=null,O=null,D=null,K=null,A=null,f0.stop(),$.isPresenting=!1,J.setPixelRatio(w),J.setSize(_.width,_.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q0){if(W=Q0,$.isPresenting===!0)a0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q0){if(X=Q0,$.isPresenting===!0)a0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||Z},this.setReferenceSpace=function(Q0){H=Q0},this.getBaseLayer=function(){return O!==null?O:q},this.getBinding=function(){if(D===null&&M)D=new XRWebGLBinding(K,Q);return D},this.getFrame=function(){return R},this.getSession=function(){return K},this.setSession=async function(Q0){if(K=Q0,K!==null){if(C=J.getRenderTarget(),K.addEventListener("select",i),K.addEventListener("selectstart",i),K.addEventListener("selectend",i),K.addEventListener("squeeze",i),K.addEventListener("squeezestart",i),K.addEventListener("squeezeend",i),K.addEventListener("end",J0),K.addEventListener("inputsourceschange",W0),N.xrCompatible!==!0)await Q.makeXRCompatible();if(w=J.getPixelRatio(),J.getSize(_),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let w0={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer(K,Q,w0),K.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),A=new k8(q.framebufferWidth,q.framebufferHeight,{format:v8,type:_8,colorSpace:J.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let w0=null,z0=null,d=null;if(N.depth)d=N.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,w0=N.stencil?S9:T9,z0=N.stencil?G7:N9;let e={colorFormat:Q.RGBA8,depthFormat:d,scaleFactor:W};D=this.getBinding(),O=D.createProjectionLayer(e),K.updateRenderState({layers:[O]}),J.setPixelRatio(1),J.setSize(O.textureWidth,O.textureHeight,!1),A=new k8(O.textureWidth,O.textureHeight,{format:v8,type:_8,depthTexture:new F9(O.textureWidth,O.textureHeight,z0,void 0,void 0,void 0,void 0,void 0,void 0,w0),stencilBuffer:N.stencil,colorSpace:J.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:O.ignoreDepthValues===!1,resolveStencilBuffer:O.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(Y),H=null,Z=await K.requestReferenceSpace(X),f0.setContext(K),f0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return z.getDepthTexture()};function W0(Q0){for(let G0=0;G0<Q0.removed.length;G0++){let w0=Q0.removed[G0],z0=I.indexOf(w0);if(z0>=0)I[z0]=null,V[z0].disconnect(w0)}for(let G0=0;G0<Q0.added.length;G0++){let w0=Q0.added[G0],z0=I.indexOf(w0);if(z0===-1){for(let e=0;e<V.length;e++)if(e>=I.length){I.push(w0),z0=e;break}else if(I[e]===null){I[e]=w0,z0=e;break}if(z0===-1)break}let d=V[z0];if(d)d.connect(w0)}}let l=new g,n=new g;function m(Q0,G0,w0){l.setFromMatrixPosition(G0.matrixWorld),n.setFromMatrixPosition(w0.matrixWorld);let z0=l.distanceTo(n),d=G0.projectionMatrix.elements,e=w0.projectionMatrix.elements,b=d[14]/(d[10]-1),y=d[14]/(d[10]+1),u=(d[9]+1)/d[5],s=(d[9]-1)/d[5],p=(d[8]-1)/d[0],S=(e[8]+1)/e[0],S0=b*p,d0=b*S,n0=z0/(-p+S),s0=n0*-p;if(G0.matrixWorld.decompose(Q0.position,Q0.quaternion,Q0.scale),Q0.translateX(s0),Q0.translateZ(n0),Q0.matrixWorld.compose(Q0.position,Q0.quaternion,Q0.scale),Q0.matrixWorldInverse.copy(Q0.matrixWorld).invert(),d[10]===-1)Q0.projectionMatrix.copy(G0.projectionMatrix),Q0.projectionMatrixInverse.copy(G0.projectionMatrixInverse);else{let XJ=b+n0,v=y+n0,KJ=S0-s0,i0=d0+(z0-s0),j=u*y/v*XJ,F=s*y/v*XJ;Q0.projectionMatrix.makePerspective(KJ,i0,j,F,XJ,v),Q0.projectionMatrixInverse.copy(Q0.projectionMatrix).invert()}}function U0(Q0,G0){if(G0===null)Q0.matrixWorld.copy(Q0.matrix);else Q0.matrixWorld.multiplyMatrices(G0.matrixWorld,Q0.matrix);Q0.matrixWorldInverse.copy(Q0.matrixWorld).invert()}this.updateCamera=function(Q0){if(K===null)return;let{near:G0,far:w0}=Q0;if(z.texture!==null){if(z.depthNear>0)G0=z.depthNear;if(z.depthFar>0)w0=z.depthFar}if(T.near=L.near=k.near=G0,T.far=L.far=k.far=w0,c!==T.near||$0!==T.far)K.updateRenderState({depthNear:T.near,depthFar:T.far}),c=T.near,$0=T.far;T.layers.mask=Q0.layers.mask|6,k.layers.mask=T.layers.mask&-5,L.layers.mask=T.layers.mask&-3;let z0=Q0.parent,d=T.cameras;U0(T,z0);for(let e=0;e<d.length;e++)U0(d[e],z0);if(d.length===2)m(T,k,L);else T.projectionMatrix.copy(k.projectionMatrix);E0(Q0,T,z0)};function E0(Q0,G0,w0){if(w0===null)Q0.matrix.copy(G0.matrixWorld);else Q0.matrix.copy(w0.matrixWorld),Q0.matrix.invert(),Q0.matrix.multiply(G0.matrixWorld);if(Q0.matrix.decompose(Q0.position,Q0.quaternion,Q0.scale),Q0.updateMatrixWorld(!0),Q0.projectionMatrix.copy(G0.projectionMatrix),Q0.projectionMatrixInverse.copy(G0.projectionMatrixInverse),Q0.isPerspectiveCamera)Q0.fov=A9*2*Math.atan(1/Q0.projectionMatrix.elements[5]),Q0.zoom=1}this.getCamera=function(){return T},this.getFoveation=function(){if(O===null&&q===null)return;return Y},this.setFoveation=function(Q0){if(Y=Q0,O!==null)O.fixedFoveation=Q0;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=Q0},this.hasDepthSensing=function(){return z.texture!==null},this.getDepthSensingMesh=function(){return z.getMesh(T)},this.getCameraTexture=function(Q0){return E[Q0]};let F0=null;function e0(Q0,G0){if(U=G0.getViewerPose(H||Z),R=G0,U!==null){let w0=U.views;if(q!==null)J.setRenderTargetFramebuffer(A,q.framebuffer),J.setRenderTarget(A);let z0=!1;if(w0.length!==T.cameras.length)T.cameras.length=0,z0=!0;for(let y=0;y<w0.length;y++){let u=w0[y],s=null;if(q!==null)s=q.getViewport(u);else{let S=D.getViewSubImage(O,u);if(s=S.viewport,y===0)J.setRenderTargetTextures(A,S.colorTexture,S.depthStencilTexture),J.setRenderTarget(A)}let p=r[y];if(p===void 0)p=new pJ,p.layers.enable(y),p.viewport=new wJ,r[y]=p;if(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.projectionMatrix.fromArray(u.projectionMatrix),p.projectionMatrixInverse.copy(p.projectionMatrix).invert(),p.viewport.set(s.x,s.y,s.width,s.height),y===0)T.matrix.copy(p.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale);if(z0===!0)T.cameras.push(p)}let d=K.enabledFeatures;if(d&&d.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&M){D=$.getBinding();let y=D.getDepthInformation(w0[0]);if(y&&y.isValid&&y.texture)z.init(y,K.renderState)}if(d&&d.includes("camera-access")&&M){J.state.unbindTexture(),D=$.getBinding();for(let y=0;y<w0.length;y++){let u=w0[y].camera;if(u){let s=E[u];if(!s)s=new n6,E[u]=s;let p=D.getCameraImage(u);s.sourceTexture=p}}}}for(let w0=0;w0<V.length;w0++){let z0=I[w0],d=V[w0];if(z0!==null&&d!==void 0)d.update(z0,G0,H||Z)}if(F0)F0(Q0,G0);if(G0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:G0});R=null}let f0=new PZ;f0.setAnimationLoop(e0),this.setAnimationLoop=function(Q0){F0=Q0},this.dispose=function(){}}}var oq=new IJ,xZ=new $J;xZ.set(-1,0,0,0,1,0,0,0,1);function aq(J,Q){function $(E,N){if(E.matrixAutoUpdate===!0)E.updateMatrix();N.value.copy(E.matrix)}function K(E,N){if(N.color.getRGB(E.fogColor.value,d$(J)),N.isFog)E.fogNear.value=N.near,E.fogFar.value=N.far;else if(N.isFogExp2)E.fogDensity.value=N.density}function W(E,N,C,A,V){if(N.isNodeMaterial)N.uniformsNeedUpdate=!1;else if(N.isMeshBasicMaterial)Z(E,N);else if(N.isMeshLambertMaterial){if(Z(E,N),N.envMap)E.envMapIntensity.value=N.envMapIntensity}else if(N.isMeshToonMaterial)Z(E,N),O(E,N);else if(N.isMeshPhongMaterial){if(Z(E,N),D(E,N),N.envMap)E.envMapIntensity.value=N.envMapIntensity}else if(N.isMeshStandardMaterial){if(Z(E,N),q(E,N),N.isMeshPhysicalMaterial)R(E,N,V)}else if(N.isMeshMatcapMaterial)Z(E,N),M(E,N);else if(N.isMeshDepthMaterial)Z(E,N);else if(N.isMeshDistanceMaterial)Z(E,N),z(E,N);else if(N.isMeshNormalMaterial)Z(E,N);else if(N.isLineBasicMaterial){if(X(E,N),N.isLineDashedMaterial)Y(E,N)}else if(N.isPointsMaterial)H(E,N,C,A);else if(N.isSpriteMaterial)U(E,N);else if(N.isShadowMaterial)E.color.value.copy(N.color),E.opacity.value=N.opacity;else if(N.isShaderMaterial)N.uniformsNeedUpdate=!1}function Z(E,N){if(E.opacity.value=N.opacity,N.color)E.diffuse.value.copy(N.color);if(N.emissive)E.emissive.value.copy(N.emissive).multiplyScalar(N.emissiveIntensity);if(N.map)E.map.value=N.map,$(N.map,E.mapTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.bumpMap){if(E.bumpMap.value=N.bumpMap,$(N.bumpMap,E.bumpMapTransform),E.bumpScale.value=N.bumpScale,N.side===sJ)E.bumpScale.value*=-1}if(N.normalMap){if(E.normalMap.value=N.normalMap,$(N.normalMap,E.normalMapTransform),E.normalScale.value.copy(N.normalScale),N.side===sJ)E.normalScale.value.negate()}if(N.displacementMap)E.displacementMap.value=N.displacementMap,$(N.displacementMap,E.displacementMapTransform),E.displacementScale.value=N.displacementScale,E.displacementBias.value=N.displacementBias;if(N.emissiveMap)E.emissiveMap.value=N.emissiveMap,$(N.emissiveMap,E.emissiveMapTransform);if(N.specularMap)E.specularMap.value=N.specularMap,$(N.specularMap,E.specularMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest;let C=Q.get(N),A=C.envMap,V=C.envMapRotation;if(A){if(E.envMap.value=A,E.envMapRotation.value.setFromMatrix4(oq.makeRotationFromEuler(V)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(xZ);E.reflectivity.value=N.reflectivity,E.ior.value=N.ior,E.refractionRatio.value=N.refractionRatio}if(N.lightMap)E.lightMap.value=N.lightMap,E.lightMapIntensity.value=N.lightMapIntensity,$(N.lightMap,E.lightMapTransform);if(N.aoMap)E.aoMap.value=N.aoMap,E.aoMapIntensity.value=N.aoMapIntensity,$(N.aoMap,E.aoMapTransform)}function X(E,N){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,N.map)E.map.value=N.map,$(N.map,E.mapTransform)}function Y(E,N){E.dashSize.value=N.dashSize,E.totalSize.value=N.dashSize+N.gapSize,E.scale.value=N.scale}function H(E,N,C,A){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,E.size.value=N.size*C,E.scale.value=A*0.5,N.map)E.map.value=N.map,$(N.map,E.uvTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest}function U(E,N){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,E.rotation.value=N.rotation,N.map)E.map.value=N.map,$(N.map,E.mapTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest}function D(E,N){E.specular.value.copy(N.specular),E.shininess.value=Math.max(N.shininess,0.0001)}function O(E,N){if(N.gradientMap)E.gradientMap.value=N.gradientMap}function q(E,N){if(E.metalness.value=N.metalness,N.metalnessMap)E.metalnessMap.value=N.metalnessMap,$(N.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=N.roughness,N.roughnessMap)E.roughnessMap.value=N.roughnessMap,$(N.roughnessMap,E.roughnessMapTransform);if(N.envMap)E.envMapIntensity.value=N.envMapIntensity}function R(E,N,C){if(E.ior.value=N.ior,N.sheen>0){if(E.sheenColor.value.copy(N.sheenColor).multiplyScalar(N.sheen),E.sheenRoughness.value=N.sheenRoughness,N.sheenColorMap)E.sheenColorMap.value=N.sheenColorMap,$(N.sheenColorMap,E.sheenColorMapTransform);if(N.sheenRoughnessMap)E.sheenRoughnessMap.value=N.sheenRoughnessMap,$(N.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(N.clearcoat>0){if(E.clearcoat.value=N.clearcoat,E.clearcoatRoughness.value=N.clearcoatRoughness,N.clearcoatMap)E.clearcoatMap.value=N.clearcoatMap,$(N.clearcoatMap,E.clearcoatMapTransform);if(N.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=N.clearcoatRoughnessMap,$(N.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(N.clearcoatNormalMap){if(E.clearcoatNormalMap.value=N.clearcoatNormalMap,$(N.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(N.clearcoatNormalScale),N.side===sJ)E.clearcoatNormalScale.value.negate()}}if(N.dispersion>0)E.dispersion.value=N.dispersion;if(N.iridescence>0){if(E.iridescence.value=N.iridescence,E.iridescenceIOR.value=N.iridescenceIOR,E.iridescenceThicknessMinimum.value=N.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=N.iridescenceThicknessRange[1],N.iridescenceMap)E.iridescenceMap.value=N.iridescenceMap,$(N.iridescenceMap,E.iridescenceMapTransform);if(N.iridescenceThicknessMap)E.iridescenceThicknessMap.value=N.iridescenceThicknessMap,$(N.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(N.transmission>0){if(E.transmission.value=N.transmission,E.transmissionSamplerMap.value=C.texture,E.transmissionSamplerSize.value.set(C.width,C.height),N.transmissionMap)E.transmissionMap.value=N.transmissionMap,$(N.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=N.thickness,N.thicknessMap)E.thicknessMap.value=N.thicknessMap,$(N.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=N.attenuationDistance,E.attenuationColor.value.copy(N.attenuationColor)}if(N.anisotropy>0){if(E.anisotropyVector.value.set(N.anisotropy*Math.cos(N.anisotropyRotation),N.anisotropy*Math.sin(N.anisotropyRotation)),N.anisotropyMap)E.anisotropyMap.value=N.anisotropyMap,$(N.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=N.specularIntensity,E.specularColor.value.copy(N.specularColor),N.specularColorMap)E.specularColorMap.value=N.specularColorMap,$(N.specularColorMap,E.specularColorMapTransform);if(N.specularIntensityMap)E.specularIntensityMap.value=N.specularIntensityMap,$(N.specularIntensityMap,E.specularIntensityMapTransform)}function M(E,N){if(N.matcap)E.matcap.value=N.matcap}function z(E,N){let C=Q.get(N).light;E.referencePosition.value.setFromMatrixPosition(C.matrixWorld),E.nearDistance.value=C.shadow.camera.near,E.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:W}}function rq(J,Q,$,K){let W={},Z={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,I){let _=I.program;K.uniformBlockBinding(V,_)}function U(V,I){let _=W[V.id];if(_===void 0)E(V),_=D(V),W[V.id]=_,V.addEventListener("dispose",C);let w=I.program;K.updateUBOMapping(V,w);let k=Q.render.frame;if(Z[V.id]!==k)q(V),Z[V.id]=k}function D(V){let I=O();V.__bindingPointIndex=I;let _=J.createBuffer(),w=V.__size,k=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,_),J.bufferData(J.UNIFORM_BUFFER,w,k),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,I,_),_}function O(){for(let V=0;V<Y;V++)if(X.indexOf(V)===-1)return X.push(V),V;return t0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(V){let I=W[V.id],_=V.uniforms,w=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,I);for(let k=0,L=_.length;k<L;k++){let r=_[k];if(Array.isArray(r))for(let T=0,c=r.length;T<c;T++)R(r[T],k,T,w);else R(r,k,0,w)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function R(V,I,_,w){if(z(V,I,_,w)===!0){let{__offset:k,value:L}=V;if(Array.isArray(L)){let r=0;for(let T=0;T<L.length;T++){let c=L[T],$0=N(c);if(M(c,V.__data,r),typeof c!=="number"&&typeof c!=="boolean"&&!c.isMatrix3&&!ArrayBuffer.isView(c))r+=$0.storage/Float32Array.BYTES_PER_ELEMENT}}else M(L,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,k,V.__data)}}function M(V,I,_){if(typeof V==="number"||typeof V==="boolean")I[0]=V;else if(V.isMatrix3)I[0]=V.elements[0],I[1]=V.elements[1],I[2]=V.elements[2],I[3]=0,I[4]=V.elements[3],I[5]=V.elements[4],I[6]=V.elements[5],I[7]=0,I[8]=V.elements[6],I[9]=V.elements[7],I[10]=V.elements[8],I[11]=0;else if(ArrayBuffer.isView(V))I.set(new V.constructor(V.buffer,V.byteOffset,I.length));else V.toArray(I,_)}function z(V,I,_,w){let k=V.value,L=I+"_"+_;if(w[L]===void 0){if(typeof k==="number"||typeof k==="boolean")w[L]=k;else if(ArrayBuffer.isView(k))w[L]=k.slice();else w[L]=k.clone();return!0}else{let r=w[L];if(typeof k==="number"||typeof k==="boolean"){if(r!==k)return w[L]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(r.equals(k)===!1)return r.copy(k),!0}return!1}function E(V){let I=V.uniforms,_=0,w=16;for(let L=0,r=I.length;L<r;L++){let T=Array.isArray(I[L])?I[L]:[I[L]];for(let c=0,$0=T.length;c<$0;c++){let i=T[c],J0=Array.isArray(i.value)?i.value:[i.value];for(let W0=0,l=J0.length;W0<l;W0++){let n=J0[W0],m=N(n),U0=_%w,E0=U0%m.boundary,F0=U0+E0;if(_+=E0,F0!==0&&w-F0<m.storage)_+=w-F0;i.__data=new Float32Array(m.storage/Float32Array.BYTES_PER_ELEMENT),i.__offset=_,_+=m.storage}}}let k=_%w;if(k>0)_+=w-k;return V.__size=_,V.__cache={},this}function N(V){let I={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")I.boundary=4,I.storage=4;else if(V.isVector2)I.boundary=8,I.storage=8;else if(V.isVector3||V.isColor)I.boundary=16,I.storage=12;else if(V.isVector4)I.boundary=16,I.storage=16;else if(V.isMatrix3)I.boundary=48,I.storage=48;else if(V.isMatrix4)I.boundary=64,I.storage=64;else if(V.isTexture)a0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))I.boundary=16,I.storage=V.byteLength;else a0("WebGLRenderer: Unsupported uniform value type.",V);return I}function C(V){let I=V.target;I.removeEventListener("dispose",C);let _=X.indexOf(I.__bindingPointIndex);X.splice(_,1),J.deleteBuffer(W[I.id]),delete W[I.id],delete Z[I.id]}function A(){for(let V in W)J.deleteBuffer(W[V]);X=[],W={},Z={}}return{bind:H,update:U,dispose:A}}var tq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),g8=null;function eq(){if(g8===null)g8=new p$(tq,16,16,j9,r8),g8.name="DFG_LUT",g8.minFilter=W8,g8.magFilter=W8,g8.wrapS=T6,g8.wrapT=T6,g8.generateMipmaps=!1,g8.needsUpdate=!0;return g8}class kK{constructor(J={}){let{canvas:Q=nW(),context:$=null,depth:K=!0,stencil:W=!1,alpha:Z=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:D=!1,reversedDepthBuffer:O=!1,outputBufferType:q=_8}=J;this.isWebGLRenderer=!0;let R;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=$.getContextAttributes().alpha}else R=Z;let M=q,z=new Set([tQ,rQ,aQ]),E=new Set([_8,N9,m7,G7,iQ,oQ]),N=new Uint32Array(4),C=new Int32Array(4),A=new g,V=null,I=null,_=[],w=[],k=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=A8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,r=!1,T=null,c=null,$0=null,i=null;this._outputColorSpace=h8;let J0=0,W0=0,l=null,n=-1,m=null,U0=new wJ,E0=new wJ,F0=null,e0=new QJ(0),f0=0,Q0=Q.width,G0=Q.height,w0=1,z0=null,d=null,e=new wJ(0,0,Q0,G0),b=new wJ(0,0,Q0,G0),y=!1,u=new c7,s=!1,p=!1,S=new IJ,S0=new g,d0=new wJ,n0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},s0=!1;function XJ(){return l===null?w0:1}let v=$;function KJ(B,x){return Q.getContext(B,x)}try{let B={alpha:!0,depth:K,stencil:W,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:D};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${aK}`);if(Q.addEventListener("webglcontextlost",l0,!1),Q.addEventListener("webglcontextrestored",_J,!1),Q.addEventListener("webglcontextcreationerror",DJ,!1),v===null){if(v=KJ("webgl2",B),v===null)if(KJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(B){throw t0("WebGLRenderer: "+B.message),B}let i0,j,F,G,P,h,Y0,N0,k0,K0,Z0,R0,h0,B0,O0,u0,x0,qJ,f,M0,X0,L0,C0;function H0(){if(i0=new XU(v),i0.init(),X0=new nq(v,i0),j=new t5(v,i0,J,X0),F=new lq(v,i0),j.reversedDepthBuffer&&O)F.buffers.depth.setReversed(!0);c=v.createFramebuffer(),$0=v.createFramebuffer(),i=v.createFramebuffer(),G=new UU(v),P=new Tq,h=new cq(v,i0,F,P,j,X0,G),Y0=new ZU(L),N0=new FY(v),L0=new a5(v,N0),k0=new YU(v,N0,G,L0),K0=new NU(v,k0,N0,L0,G),qJ=new qU(v,j,h),O0=new e5(P),Z0=new Cq(L,Y0,i0,j,L0,O0),R0=new aq(L,P),h0=new jq,B0=new xq(i0),x0=new o5(L,Y0,F,K0,R,Y),u0=new uq(L,K0,j),C0=new rq(v,G,j,F),f=new r5(v,i0,G),M0=new HU(v,i0,G),G.programs=Z0.programs,L.capabilities=j,L.extensions=i0,L.properties=P,L.renderLists=h0,L.shadowMap=u0,L.state=F,L.info=G}if(H0(),M!==_8)k=new FU(M,Q.width,Q.height,X,K,W);let I0=new fZ(L,v);this.xr=I0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let B=i0.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=i0.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return w0},this.setPixelRatio=function(B){if(B===void 0)return;w0=B,this.setSize(Q0,G0,!1)},this.getSize=function(B){return B.set(Q0,G0)},this.setSize=function(B,x,t=!0){if(I0.isPresenting){a0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Q0=B,G0=x,Q.width=Math.floor(B*w0),Q.height=Math.floor(x*w0),t===!0)Q.style.width=B+"px",Q.style.height=x+"px";if(k!==null)k.setSize(Q.width,Q.height);this.setViewport(0,0,B,x)},this.getDrawingBufferSize=function(B){return B.set(Q0*w0,G0*w0).floor()},this.setDrawingBufferSize=function(B,x,t){Q0=B,G0=x,w0=t,Q.width=Math.floor(B*t),Q.height=Math.floor(x*t),this.setViewport(0,0,B,x)},this.setEffects=function(B){if(M===_8){t0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let x=0;x<B.length;x++)if(B[x].isOutputPass===!0){a0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(U0)},this.getViewport=function(B){return B.copy(e)},this.setViewport=function(B,x,t,o){if(B.isVector4)e.set(B.x,B.y,B.z,B.w);else e.set(B,x,t,o);F.viewport(U0.copy(e).multiplyScalar(w0).round())},this.getScissor=function(B){return B.copy(b)},this.setScissor=function(B,x,t,o){if(B.isVector4)b.set(B.x,B.y,B.z,B.w);else b.set(B,x,t,o);F.scissor(E0.copy(b).multiplyScalar(w0).round())},this.getScissorTest=function(){return y},this.setScissorTest=function(B){F.setScissorTest(y=B)},this.setOpaqueSort=function(B){z0=B},this.setTransparentSort=function(B){d=B},this.getClearColor=function(B){return B.copy(x0.getClearColor())},this.setClearColor=function(){x0.setClearColor(...arguments)},this.getClearAlpha=function(){return x0.getClearAlpha()},this.setClearAlpha=function(){x0.setClearAlpha(...arguments)},this.clear=function(B=!0,x=!0,t=!0){let o=0;if(B){let a=!1;if(l!==null){let A0=l.texture.format;a=z.has(A0)}if(a){let A0=l.texture.type,y0=E.has(A0),P0=x0.getClearColor(),v0=x0.getClearAlpha(),g0=P0.r,r0=P0.g,WJ=P0.b;if(y0)N[0]=g0,N[1]=r0,N[2]=WJ,N[3]=v0,v.clearBufferuiv(v.COLOR,0,N);else C[0]=g0,C[1]=r0,C[2]=WJ,C[3]=v0,v.clearBufferiv(v.COLOR,0,C)}else o|=v.COLOR_BUFFER_BIT}if(x)o|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(t)o|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(o!==0)v.clear(o)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),T=B},this.dispose=function(){Q.removeEventListener("webglcontextlost",l0,!1),Q.removeEventListener("webglcontextrestored",_J,!1),Q.removeEventListener("webglcontextcreationerror",DJ,!1),x0.dispose(),h0.dispose(),B0.dispose(),P.dispose(),Y0.dispose(),K0.dispose(),L0.dispose(),C0.dispose(),Z0.dispose(),I0.dispose(),I0.removeEventListener("sessionstart",P7),I0.removeEventListener("sessionend",k9),F8.stop()};function l0(B){B.preventDefault(),v$("WebGLRenderer: Context Lost."),r=!0}function _J(){v$("WebGLRenderer: Context Restored."),r=!1;let B=G.autoReset,x=u0.enabled,t=u0.autoUpdate,o=u0.needsUpdate,a=u0.type;H0(),G.autoReset=B,u0.enabled=x,u0.autoUpdate=t,u0.needsUpdate=o,u0.type=a}function DJ(B){t0("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function Y8(B){let x=B.target;x.removeEventListener("dispose",Y8),H8(x)}function H8(B){I7(B),P.remove(B)}function I7(B){let x=P.get(B).programs;if(x!==void 0){if(x.forEach(function(t){Z0.releaseProgram(t)}),B.isShaderMaterial)Z0.releaseShaderCache(B)}}this.renderBufferDirect=function(B,x,t,o,a,A0){if(x===null)x=n0;let y0=a.isMesh&&a.matrixWorld.determinantAffine()<0,P0=w7(B,x,t,o,a);F.setMaterial(o,y0);let v0=t.index,g0=1;if(o.wireframe===!0){if(v0=k0.getWireframeAttribute(t),v0===void 0)return;g0=2}let r0=t.drawRange,WJ=t.attributes.position,p0=r0.start*g0,FJ=(r0.start+r0.count)*g0;if(A0!==null)p0=Math.max(p0,A0.start*g0),FJ=Math.min(FJ,(A0.start+A0.count)*g0);if(v0!==null)p0=Math.max(p0,0),FJ=Math.min(FJ,v0.count);else if(WJ!==void 0&&WJ!==null)p0=Math.max(p0,0),FJ=Math.min(FJ,WJ.count);let VJ=FJ-p0;if(VJ<0||VJ===1/0)return;L0.setup(a,o,P0,t,v0);let BJ,OJ=f;if(v0!==null)BJ=N0.get(v0),OJ=M0,OJ.setIndex(BJ);if(a.isMesh)if(o.wireframe===!0)F.setLineWidth(o.wireframeLinewidth*XJ()),OJ.setMode(v.LINES);else OJ.setMode(v.TRIANGLES);else if(a.isLine){let jJ=o.linewidth;if(jJ===void 0)jJ=1;if(F.setLineWidth(jJ*XJ()),a.isLineSegments)OJ.setMode(v.LINES);else if(a.isLineLoop)OJ.setMode(v.LINE_LOOP);else OJ.setMode(v.LINE_STRIP)}else if(a.isPoints)OJ.setMode(v.POINTS);else if(a.isSprite)OJ.setMode(v.TRIANGLES);if(a.isBatchedMesh)if(!i0.get("WEBGL_multi_draw")){let{_multiDrawStarts:jJ,_multiDrawCounts:j0,_multiDrawCount:gJ}=a,NJ=v0?N0.get(v0).bytesPerElement:1,uJ=P.get(o).currentProgram.getUniforms();for(let Q8=0;Q8<gJ;Q8++)uJ.setValue(v,"_gl_DrawID",Q8),OJ.render(jJ[Q8]/NJ,j0[Q8])}else OJ.renderMultiDraw(a._multiDrawStarts,a._multiDrawCounts,a._multiDrawCount);else if(a.isInstancedMesh)OJ.renderInstances(p0,VJ,a.count);else if(t.isInstancedBufferGeometry){let jJ=t._maxInstanceCount!==void 0?t._maxInstanceCount:1/0,j0=Math.min(t.instanceCount,jJ);OJ.renderInstances(p0,VJ,j0)}else OJ.render(p0,VJ)};function C8(B,x,t){if(B.transparent===!0&&B.side===PJ&&B.forceSinglePass===!1)B.side=sJ,B.needsUpdate=!0,n9(B,x,t),B.side=U7,B.needsUpdate=!0,n9(B,x,t),B.side=PJ;else n9(B,x,t)}this.compile=function(B,x,t=null){if(t===null)t=B;if(I=B0.get(t),I.init(x),w.push(I),t.traverseVisible(function(a){if(a.isLight&&a.layers.test(x.layers)){if(I.pushLight(a),a.castShadow)I.pushShadow(a)}}),B!==t)B.traverseVisible(function(a){if(a.isLight&&a.layers.test(x.layers)){if(I.pushLight(a),a.castShadow)I.pushShadow(a)}});I.setupLights();let o=new Set;return B.traverse(function(a){if(!(a.isMesh||a.isPoints||a.isLine||a.isSprite))return;let A0=a.material;if(A0)if(Array.isArray(A0))for(let y0=0;y0<A0.length;y0++){let P0=A0[y0];C8(P0,t,a),o.add(P0)}else C8(A0,t,a),o.add(A0)}),I=w.pop(),o},this.compileAsync=function(B,x,t=null){let o=this.compile(B,x,t);return new Promise((a)=>{function A0(){if(o.forEach(function(y0){if(P.get(y0).currentProgram.isReady())o.delete(y0)}),o.size===0){a(B);return}setTimeout(A0,10)}if(i0.get("KHR_parallel_shader_compile")!==null)A0();else setTimeout(A0,10)})};let l9=null;function $6(B){if(l9)l9(B)}function P7(){F8.stop()}function k9(){F8.start()}let F8=new PZ;if(F8.setAnimationLoop($6),typeof self<"u")F8.setContext(self);this.setAnimationLoop=function(B){l9=B,I0.setAnimationLoop(B),B===null?F8.stop():F8.start()},I0.addEventListener("sessionstart",P7),I0.addEventListener("sessionend",k9),this.render=function(B,x){if(x!==void 0&&x.isCamera!==!0){t0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(r===!0)return;if(T!==null)T.renderStart(B,x);let t=I0.enabled===!0&&I0.isPresenting===!0,o=k!==null&&(l===null||t)&&k.begin(L,l);if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(x.parent===null&&x.matrixWorldAutoUpdate===!0)x.updateMatrixWorld();if(I0.enabled===!0&&I0.isPresenting===!0&&(k===null||k.isCompositing()===!1)){if(I0.cameraAutoUpdate===!0)I0.updateCamera(x);x=I0.getCamera()}if(B.isScene===!0)B.onBeforeRender(L,B,x,l);if(I=B0.get(B,w.length),I.init(x),I.state.textureUnits=h.getTextureUnits(),w.push(I),S.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),u.setFromProjectionMatrix(S,y$,x.reversedDepth),p=this.localClippingEnabled,s=O0.init(this.clippingPlanes,p),V=h0.get(B,_.length),V.init(),_.push(V),I0.enabled===!0&&I0.isPresenting===!0){let y0=L.xr.getDepthSensingMesh();if(y0!==null)A7(y0,x,-1/0,L.sortObjects)}if(A7(B,x,0,L.sortObjects),V.finish(),L.sortObjects===!0)V.sort(z0,d,x.reversedDepth);if(s0=I0.enabled===!1||I0.isPresenting===!1||I0.hasDepthSensing()===!1,s0)x0.addToRenderList(V,B);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(s===!0)O0.beginShadows();let a=I.state.shadowsArray;if(u0.render(a,B,x),s===!0)O0.endShadows();if((o&&k.hasRenderPass())===!1){let{opaque:y0,transmissive:P0}=V;if(I.setupLights(),x.isArrayCamera){let v0=x.cameras;if(P0.length>0)for(let g0=0,r0=v0.length;g0<r0;g0++){let WJ=v0[g0];c9(y0,P0,B,WJ)}if(s0)x0.render(B);for(let g0=0,r0=v0.length;g0<r0;g0++){let WJ=v0[g0];K6(V,B,WJ,WJ.viewport)}}else{if(P0.length>0)c9(y0,P0,B,x);if(s0)x0.render(B);K6(V,B,x)}}if(l!==null&&W0===0)h.updateMultisampleRenderTarget(l),h.updateRenderTargetMipmap(l);if(o)k.end(L);if(B.isScene===!0)B.onAfterRender(L,B,x);if(L0.resetDefaultState(),n=-1,m=null,w.pop(),w.length>0){if(I=w[w.length-1],h.setTextureUnits(I.state.textureUnits),s===!0)O0.setGlobalState(L.clippingPlanes,I.state.camera)}else I=null;if(_.pop(),_.length>0)V=_[_.length-1];else V=null;if(T!==null)T.renderEnd()};function A7(B,x,t,o){if(B.visible===!1)return;if(B.layers.test(x.layers)){if(B.isGroup)t=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(x)}else if(B.isLightProbeGrid)I.pushLightProbeGrid(B);else if(B.isLight){if(I.pushLight(B),B.castShadow)I.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||u.intersectsSprite(B)){if(o)d0.setFromMatrixPosition(B.matrixWorld).applyMatrix4(S);let y0=K0.update(B),P0=B.material;if(P0.visible)V.push(B,y0,P0,t,d0.z,null)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||u.intersectsObject(B)){let y0=K0.update(B),P0=B.material;if(o){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();d0.copy(B.boundingSphere.center)}else{if(y0.boundingSphere===null)y0.computeBoundingSphere();d0.copy(y0.boundingSphere.center)}d0.applyMatrix4(B.matrixWorld).applyMatrix4(S)}if(Array.isArray(P0)){let v0=y0.groups;for(let g0=0,r0=v0.length;g0<r0;g0++){let WJ=v0[g0],p0=P0[WJ.materialIndex];if(p0&&p0.visible)V.push(B,y0,p0,t,d0.z,WJ)}}else if(P0.visible)V.push(B,y0,P0,t,d0.z,null)}}}let A0=B.children;for(let y0=0,P0=A0.length;y0<P0;y0++)A7(A0[y0],x,t,o)}function K6(B,x,t,o){let{opaque:a,transmissive:A0,transparent:y0}=B;if(I.setupLightsView(t),s===!0)O0.setGlobalState(L.clippingPlanes,t);if(o)F.viewport(U0.copy(o));if(a.length>0)M9(a,x,t);if(A0.length>0)M9(A0,x,t);if(y0.length>0)M9(y0,x,t);F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function c9(B,x,t,o){if((t.isScene===!0?t.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[o.id]===void 0){let p0=i0.has("EXT_color_buffer_half_float")||i0.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[o.id]=new k8(1,1,{generateMipmaps:!0,type:p0?r8:_8,minFilter:C9,samples:Math.max(4,j.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:GJ.workingColorSpace})}let A0=I.state.transmissionRenderTarget[o.id],y0=o.viewport||U0;A0.setSize(y0.z*L.transmissionResolutionScale,y0.w*L.transmissionResolutionScale);let P0=L.getRenderTarget(),v0=L.getActiveCubeFace(),g0=L.getActiveMipmapLevel();if(L.setRenderTarget(A0),L.getClearColor(e0),f0=L.getClearAlpha(),f0<1)L.setClearColor(16777215,0.5);if(L.clear(),s0)x0.render(t);let r0=L.toneMapping;L.toneMapping=A8;let WJ=o.viewport;if(o.viewport!==void 0)o.viewport=void 0;if(I.setupLightsView(o),s===!0)O0.setGlobalState(L.clippingPlanes,o);if(M9(B,t,o),h.updateMultisampleRenderTarget(A0),h.updateRenderTargetMipmap(A0),i0.has("WEBGL_multisampled_render_to_texture")===!1){let p0=!1;for(let FJ=0,VJ=x.length;FJ<VJ;FJ++){let BJ=x[FJ],{object:OJ,geometry:jJ,material:j0,group:gJ}=BJ;if(j0.side===PJ&&OJ.layers.test(o.layers)){let NJ=j0.side;j0.side=sJ,j0.needsUpdate=!0,W6(OJ,t,o,jJ,j0,gJ),j0.side=NJ,j0.needsUpdate=!0,p0=!0}}if(p0===!0)h.updateMultisampleRenderTarget(A0),h.updateRenderTargetMipmap(A0)}if(L.setRenderTarget(P0,v0,g0),L.setClearColor(e0,f0),WJ!==void 0)o.viewport=WJ;L.toneMapping=r0}function M9(B,x,t){let o=x.isScene===!0?x.overrideMaterial:null;for(let a=0,A0=B.length;a<A0;a++){let y0=B[a],{object:P0,geometry:v0,group:g0}=y0,r0=y0.material;if(r0.allowOverride===!0&&o!==null)r0=o;if(P0.layers.test(t.layers))W6(P0,x,t,v0,r0,g0)}}function W6(B,x,t,o,a,A0){if(B.onBeforeRender(L,x,t,o,a,A0),B.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),a.onBeforeRender(L,x,t,o,B,A0),a.transparent===!0&&a.side===PJ&&a.forceSinglePass===!1)a.side=sJ,a.needsUpdate=!0,L.renderBufferDirect(t,x,o,a,B,A0),a.side=U7,a.needsUpdate=!0,L.renderBufferDirect(t,x,o,a,B,A0),a.side=PJ;else L.renderBufferDirect(t,x,o,a,B,A0);B.onAfterRender(L,x,t,o,a,A0)}function n9(B,x,t){if(x.isScene!==!0)x=n0;let o=P.get(B),a=I.state.lights,A0=I.state.shadowsArray,y0=a.state.version,P0=Z0.getParameters(B,a.state,A0,x,t,I.state.lightProbeGridArray),v0=Z0.getProgramCacheKey(P0),g0=o.programs;o.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?x.environment:null,o.fog=x.fog;let r0=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;if(o.envMap=Y0.get(B.envMap||o.environment,r0),o.envMapRotation=o.environment!==null&&B.envMap===null?x.environmentRotation:B.envMapRotation,g0===void 0)B.addEventListener("dispose",Y8),g0=new Map,o.programs=g0;let WJ=g0.get(v0);if(WJ!==void 0){if(o.currentProgram===WJ&&o.lightsStateVersion===y0)return Z6(B,P0),WJ}else{if(P0.uniforms=Z0.getUniforms(B),T!==null&&B.isNodeMaterial)T.build(B,t,P0);B.onBeforeCompile(P0,L),WJ=Z0.acquireProgram(P0,v0),g0.set(v0,WJ),o.uniforms=P0.uniforms}let p0=o.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)p0.clippingPlanes=O0.uniform;if(Z6(B,P0),o.needsLights=FQ(B),o.lightsStateVersion=y0,o.needsLights)p0.ambientLightColor.value=a.state.ambient,p0.lightProbe.value=a.state.probe,p0.directionalLights.value=a.state.directional,p0.directionalLightShadows.value=a.state.directionalShadow,p0.spotLights.value=a.state.spot,p0.spotLightShadows.value=a.state.spotShadow,p0.rectAreaLights.value=a.state.rectArea,p0.ltc_1.value=a.state.rectAreaLTC1,p0.ltc_2.value=a.state.rectAreaLTC2,p0.pointLights.value=a.state.point,p0.pointLightShadows.value=a.state.pointShadow,p0.hemisphereLights.value=a.state.hemi,p0.directionalShadowMatrix.value=a.state.directionalShadowMatrix,p0.spotLightMatrix.value=a.state.spotLightMatrix,p0.spotLightMap.value=a.state.spotLightMap,p0.pointShadowMatrix.value=a.state.pointShadowMatrix;return o.lightProbeGrid=I.state.lightProbeGridArray.length>0,o.currentProgram=WJ,o.uniformsList=null,WJ}function m8(B){if(B.uniformsList===null){let x=B.currentProgram.getUniforms();B.uniformsList=r7.seqWithValue(x.seq,B.uniforms)}return B.uniformsList}function Z6(B,x){let t=P.get(B);t.outputColorSpace=x.outputColorSpace,t.batching=x.batching,t.batchingColor=x.batchingColor,t.instancing=x.instancing,t.instancingColor=x.instancingColor,t.instancingMorph=x.instancingMorph,t.skinning=x.skinning,t.morphTargets=x.morphTargets,t.morphNormals=x.morphNormals,t.morphColors=x.morphColors,t.morphTargetsCount=x.morphTargetsCount,t.numClippingPlanes=x.numClippingPlanes,t.numIntersection=x.numClipIntersection,t.vertexAlphas=x.vertexAlphas,t.vertexTangents=x.vertexTangents,t.toneMapping=x.toneMapping}function _7(B,x){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;A.setFromMatrixPosition(x.matrixWorld);for(let t=0,o=B.length;t<o;t++){let a=B[t];if(a.texture!==null&&a.boundingBox.containsPoint(A))return a}return null}function w7(B,x,t,o,a){if(x.isScene!==!0)x=n0;h.resetTextureUnits();let A0=x.fog,y0=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?x.environment:null,P0=l===null?L.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:GJ.workingColorSpace,v0=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap,g0=Y0.get(o.envMap||y0,v0),r0=o.vertexColors===!0&&!!t.attributes.color&&t.attributes.color.itemSize===4,WJ=!!t.attributes.tangent&&(!!o.normalMap||o.anisotropy>0),p0=!!t.morphAttributes.position,FJ=!!t.morphAttributes.normal,VJ=!!t.morphAttributes.color,BJ=A8;if(o.toneMapped){if(l===null||l.isXRRenderTarget===!0)BJ=L.toneMapping}let OJ=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,jJ=OJ!==void 0?OJ.length:0,j0=P.get(o),gJ=I.state.lights;if(s===!0){if(p===!0||B!==m){let V0=B===m&&o.id===n;O0.setState(o,B,V0)}}let NJ=!1;if(o.version===j0.__version){if(j0.needsLights&&j0.lightsStateVersion!==gJ.state.version)NJ=!0;else if(j0.outputColorSpace!==P0)NJ=!0;else if(a.isBatchedMesh&&j0.batching===!1)NJ=!0;else if(!a.isBatchedMesh&&j0.batching===!0)NJ=!0;else if(a.isBatchedMesh&&j0.batchingColor===!0&&a.colorTexture===null)NJ=!0;else if(a.isBatchedMesh&&j0.batchingColor===!1&&a.colorTexture!==null)NJ=!0;else if(a.isInstancedMesh&&j0.instancing===!1)NJ=!0;else if(!a.isInstancedMesh&&j0.instancing===!0)NJ=!0;else if(a.isSkinnedMesh&&j0.skinning===!1)NJ=!0;else if(!a.isSkinnedMesh&&j0.skinning===!0)NJ=!0;else if(a.isInstancedMesh&&j0.instancingColor===!0&&a.instanceColor===null)NJ=!0;else if(a.isInstancedMesh&&j0.instancingColor===!1&&a.instanceColor!==null)NJ=!0;else if(a.isInstancedMesh&&j0.instancingMorph===!0&&a.morphTexture===null)NJ=!0;else if(a.isInstancedMesh&&j0.instancingMorph===!1&&a.morphTexture!==null)NJ=!0;else if(j0.envMap!==g0)NJ=!0;else if(o.fog===!0&&j0.fog!==A0)NJ=!0;else if(j0.numClippingPlanes!==void 0&&(j0.numClippingPlanes!==O0.numPlanes||j0.numIntersection!==O0.numIntersection))NJ=!0;else if(j0.vertexAlphas!==r0)NJ=!0;else if(j0.vertexTangents!==WJ)NJ=!0;else if(j0.morphTargets!==p0)NJ=!0;else if(j0.morphNormals!==FJ)NJ=!0;else if(j0.morphColors!==VJ)NJ=!0;else if(j0.toneMapping!==BJ)NJ=!0;else if(j0.morphTargetsCount!==jJ)NJ=!0;else if(!!j0.lightProbeGrid!==I.state.lightProbeGridArray.length>0)NJ=!0}else NJ=!0,j0.__version=o.version;let uJ=j0.currentProgram;if(NJ===!0){if(uJ=n9(o,x,a),T&&o.isNodeMaterial)T.onUpdateProgram(o,uJ,j0)}let Q8=!1,T8=!1,B8=!1,EJ=uJ.getUniforms(),zJ=j0.uniforms;if(F.useProgram(uJ.program))Q8=!0,T8=!0,B8=!0;if(o.id!==n)n=o.id,T8=!0;if(j0.needsLights){let V0=_7(I.state.lightProbeGridArray,a);if(j0.lightProbeGrid!==V0)j0.lightProbeGrid=V0,T8=!0}if(Q8||m!==B){if(F.buffers.depth.getReversed()&&B.reversedDepth!==!0)B._reversedDepth=!0,B.updateProjectionMatrix();EJ.setValue(v,"projectionMatrix",B.projectionMatrix),EJ.setValue(v,"viewMatrix",B.matrixWorldInverse);let b0=EJ.map.cameraPosition;if(b0!==void 0)b0.setValue(v,S0.setFromMatrixPosition(B.matrixWorld));if(j.logarithmicDepthBuffer)EJ.setValue(v,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(o.isMeshPhongMaterial||o.isMeshToonMaterial||o.isMeshLambertMaterial||o.isMeshBasicMaterial||o.isMeshStandardMaterial||o.isShaderMaterial)EJ.setValue(v,"isOrthographic",B.isOrthographicCamera===!0);if(m!==B)m=B,T8=!0,B8=!0}if(j0.needsLights){if(gJ.state.directionalShadowMap.length>0)EJ.setValue(v,"directionalShadowMap",gJ.state.directionalShadowMap,h);if(gJ.state.spotShadowMap.length>0)EJ.setValue(v,"spotShadowMap",gJ.state.spotShadowMap,h);if(gJ.state.pointShadowMap.length>0)EJ.setValue(v,"pointShadowMap",gJ.state.pointShadowMap,h)}if(a.isSkinnedMesh){EJ.setOptional(v,a,"bindMatrix"),EJ.setOptional(v,a,"bindMatrixInverse");let V0=a.skeleton;if(V0){if(V0.boneTexture===null)V0.computeBoneTexture();EJ.setValue(v,"boneTexture",V0.boneTexture,h)}}if(a.isBatchedMesh){if(EJ.setOptional(v,a,"batchingTexture"),EJ.setValue(v,"batchingTexture",a._matricesTexture,h),EJ.setOptional(v,a,"batchingIdTexture"),EJ.setValue(v,"batchingIdTexture",a._indirectTexture,h),EJ.setOptional(v,a,"batchingColorTexture"),a._colorsTexture!==null)EJ.setValue(v,"batchingColorTexture",a._colorsTexture,h)}let S8=t.morphAttributes;if(S8.position!==void 0||S8.normal!==void 0||S8.color!==void 0)qJ.update(a,t,uJ);if(T8||j0.receiveShadow!==a.receiveShadow)j0.receiveShadow=a.receiveShadow,EJ.setValue(v,"receiveShadow",a.receiveShadow);if((o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial)&&o.envMap===null&&x.environment!==null)zJ.envMapIntensity.value=x.environmentIntensity;if(zJ.dfgLUT!==void 0)zJ.dfgLUT.value=eq();if(T8){if(EJ.setValue(v,"toneMappingExposure",L.toneMappingExposure),j0.needsLights)GQ(zJ,B8);if(A0&&o.fog===!0)R0.refreshFogUniforms(zJ,A0);if(R0.refreshMaterialUniforms(zJ,o,w0,G0,I.state.transmissionRenderTarget[B.id]),j0.needsLights&&j0.lightProbeGrid){let V0=j0.lightProbeGrid;zJ.probesSH.value=V0.texture,zJ.probesMin.value.copy(V0.boundingBox.min),zJ.probesMax.value.copy(V0.boundingBox.max),zJ.probesResolution.value.copy(V0.resolution)}r7.upload(v,m8(j0),zJ,h)}if(o.isShaderMaterial&&o.uniformsNeedUpdate===!0)r7.upload(v,m8(j0),zJ,h),o.uniformsNeedUpdate=!1;if(o.isSpriteMaterial)EJ.setValue(v,"center",a.center);if(EJ.setValue(v,"modelViewMatrix",a.modelViewMatrix),EJ.setValue(v,"normalMatrix",a.normalMatrix),EJ.setValue(v,"modelMatrix",a.matrixWorld),o.uniformsGroups!==void 0){let V0=o.uniformsGroups;for(let b0=0,YJ=V0.length;b0<YJ;b0++){let ZJ=V0[b0];C0.update(ZJ,uJ),C0.bind(ZJ,uJ)}}return uJ}function GQ(B,x){B.ambientLightColor.needsUpdate=x,B.lightProbe.needsUpdate=x,B.directionalLights.needsUpdate=x,B.directionalLightShadows.needsUpdate=x,B.pointLights.needsUpdate=x,B.pointLightShadows.needsUpdate=x,B.spotLights.needsUpdate=x,B.spotLightShadows.needsUpdate=x,B.rectAreaLights.needsUpdate=x,B.hemisphereLights.needsUpdate=x}function FQ(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}if(this.getActiveCubeFace=function(){return J0},this.getActiveMipmapLevel=function(){return W0},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(B,x,t){let o=P.get(B);if(o.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,o.__autoAllocateDepthBuffer===!1)o.__useRenderToTexture=!1;P.get(B.texture).__webglTexture=x,P.get(B.depthTexture).__webglTexture=o.__autoAllocateDepthBuffer?void 0:t,o.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,x){let t=P.get(B);t.__webglFramebuffer=x,t.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(B,x=0,t=0){l=B,J0=x,W0=t;let o=null,a=!1,A0=!1;if(B){let P0=P.get(B);if(P0.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(v.FRAMEBUFFER,P0.__webglFramebuffer),U0.copy(B.viewport),E0.copy(B.scissor),F0=B.scissorTest,F.viewport(U0),F.scissor(E0),F.setScissorTest(F0),n=-1;return}else if(P0.__webglFramebuffer===void 0)h.setupRenderTarget(B);else if(P0.__hasExternalTextures)h.rebindTextures(B,P.get(B.texture).__webglTexture,P.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let r0=B.depthTexture;if(P0.__boundDepthTexture!==r0){if(r0!==null&&P.has(r0)&&(B.width!==r0.image.width||B.height!==r0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");h.setupDepthRenderbuffer(B)}}let v0=B.texture;if(v0.isData3DTexture||v0.isDataArrayTexture||v0.isCompressedArrayTexture)A0=!0;let g0=P.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(g0[x]))o=g0[x][t];else o=g0[x];a=!0}else if(B.samples>0&&h.useMultisampledRTT(B)===!1)o=P.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(g0))o=g0[t];else o=g0;U0.copy(B.viewport),E0.copy(B.scissor),F0=B.scissorTest}else U0.copy(e).multiplyScalar(w0).floor(),E0.copy(b).multiplyScalar(w0).floor(),F0=y;if(t!==0)o=c;if(F.bindFramebuffer(v.FRAMEBUFFER,o))F.drawBuffers(B,o);if(F.viewport(U0),F.scissor(E0),F.setScissorTest(F0),a){let P0=P.get(B.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+x,P0.__webglTexture,t)}else if(A0){let P0=x;for(let v0=0;v0<B.textures.length;v0++){let g0=P.get(B.textures[v0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+v0,g0.__webglTexture,t,P0)}}else if(B!==null&&t!==0){let P0=P.get(B.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,P0.__webglTexture,t)}n=-1},this.readRenderTargetPixels=function(B,x,t,o,a,A0,y0,P0=0){if(!(B&&B.isWebGLRenderTarget)){t0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let v0=P.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&y0!==void 0)v0=v0[y0];if(v0){F.bindFramebuffer(v.FRAMEBUFFER,v0);try{let g0=B.textures[P0],r0=g0.format,WJ=g0.type;if(B.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+P0);if(!j.textureFormatReadable(r0)){t0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(WJ)){t0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(x>=0&&x<=B.width-o&&(t>=0&&t<=B.height-a))v.readPixels(x,t,o,a,X0.convert(r0),X0.convert(WJ),A0)}finally{let g0=l!==null?P.get(l).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,g0)}}},this.readRenderTargetPixelsAsync=async function(B,x,t,o,a,A0,y0,P0=0){if(!(B&&B.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let v0=P.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&y0!==void 0)v0=v0[y0];if(v0)if(x>=0&&x<=B.width-o&&(t>=0&&t<=B.height-a)){F.bindFramebuffer(v.FRAMEBUFFER,v0);let g0=B.textures[P0],r0=g0.format,WJ=g0.type;if(B.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+P0);if(!j.textureFormatReadable(r0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(WJ))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let p0=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,p0),v.bufferData(v.PIXEL_PACK_BUFFER,A0.byteLength,v.STREAM_READ),v.readPixels(x,t,o,a,X0.convert(r0),X0.convert(WJ),0);let FJ=l!==null?P.get(l).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,FJ);let VJ=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await iW(v,VJ,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,p0),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,A0),v.deleteBuffer(p0),v.deleteSync(VJ),A0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,x=null,t=0){let o=Math.pow(2,-t),a=Math.floor(B.image.width*o),A0=Math.floor(B.image.height*o),y0=x!==null?x.x:0,P0=x!==null?x.y:0;h.setTexture2D(B,0),v.copyTexSubImage2D(v.TEXTURE_2D,t,0,0,y0,P0,a,A0),F.unbindTexture()},this.copyTextureToTexture=function(B,x,t=null,o=null,a=0,A0=0){let y0,P0,v0,g0,r0,WJ,p0,FJ,VJ,BJ=B.isCompressedTexture?B.mipmaps[A0]:B.image;if(t!==null)y0=t.max.x-t.min.x,P0=t.max.y-t.min.y,v0=t.isBox3?t.max.z-t.min.z:1,g0=t.min.x,r0=t.min.y,WJ=t.isBox3?t.min.z:0;else{let zJ=Math.pow(2,-a);if(y0=Math.floor(BJ.width*zJ),P0=Math.floor(BJ.height*zJ),B.isDataArrayTexture)v0=BJ.depth;else if(B.isData3DTexture)v0=Math.floor(BJ.depth*zJ);else v0=1;g0=0,r0=0,WJ=0}if(o!==null)p0=o.x,FJ=o.y,VJ=o.z;else p0=0,FJ=0,VJ=0;let OJ=X0.convert(x.format),jJ=X0.convert(x.type),j0;if(x.isData3DTexture)h.setTexture3D(x,0),j0=v.TEXTURE_3D;else if(x.isDataArrayTexture||x.isCompressedArrayTexture)h.setTexture2DArray(x,0),j0=v.TEXTURE_2D_ARRAY;else h.setTexture2D(x,0),j0=v.TEXTURE_2D;F.activeTexture(v.TEXTURE0),F.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(v.UNPACK_ALIGNMENT,x.unpackAlignment);let gJ=F.getParameter(v.UNPACK_ROW_LENGTH),NJ=F.getParameter(v.UNPACK_IMAGE_HEIGHT),uJ=F.getParameter(v.UNPACK_SKIP_PIXELS),Q8=F.getParameter(v.UNPACK_SKIP_ROWS),T8=F.getParameter(v.UNPACK_SKIP_IMAGES);F.pixelStorei(v.UNPACK_ROW_LENGTH,BJ.width),F.pixelStorei(v.UNPACK_IMAGE_HEIGHT,BJ.height),F.pixelStorei(v.UNPACK_SKIP_PIXELS,g0),F.pixelStorei(v.UNPACK_SKIP_ROWS,r0),F.pixelStorei(v.UNPACK_SKIP_IMAGES,WJ);let B8=B.isDataArrayTexture||B.isData3DTexture,EJ=x.isDataArrayTexture||x.isData3DTexture;if(B.isDepthTexture){let zJ=P.get(B),S8=P.get(x),V0=P.get(zJ.__renderTarget),b0=P.get(S8.__renderTarget);F.bindFramebuffer(v.READ_FRAMEBUFFER,V0.__webglFramebuffer),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,b0.__webglFramebuffer);for(let YJ=0;YJ<v0;YJ++){if(B8)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,P.get(B).__webglTexture,a,WJ+YJ),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,P.get(x).__webglTexture,A0,VJ+YJ);v.blitFramebuffer(g0,r0,y0,P0,p0,FJ,y0,P0,v.DEPTH_BUFFER_BIT,v.NEAREST)}F.bindFramebuffer(v.READ_FRAMEBUFFER,null),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(a!==0||B.isRenderTargetTexture||P.has(B)){let zJ=P.get(B),S8=P.get(x);F.bindFramebuffer(v.READ_FRAMEBUFFER,$0),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,i);for(let V0=0;V0<v0;V0++){if(B8)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,zJ.__webglTexture,a,WJ+V0);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,zJ.__webglTexture,a);if(EJ)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,S8.__webglTexture,A0,VJ+V0);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,S8.__webglTexture,A0);if(a!==0)v.blitFramebuffer(g0,r0,y0,P0,p0,FJ,y0,P0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(EJ)v.copyTexSubImage3D(j0,A0,p0,FJ,VJ+V0,g0,r0,y0,P0);else v.copyTexSubImage2D(j0,A0,p0,FJ,g0,r0,y0,P0)}F.bindFramebuffer(v.READ_FRAMEBUFFER,null),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(EJ)if(B.isDataTexture||B.isData3DTexture)v.texSubImage3D(j0,A0,p0,FJ,VJ,y0,P0,v0,OJ,jJ,BJ.data);else if(x.isCompressedArrayTexture)v.compressedTexSubImage3D(j0,A0,p0,FJ,VJ,y0,P0,v0,OJ,BJ.data);else v.texSubImage3D(j0,A0,p0,FJ,VJ,y0,P0,v0,OJ,jJ,BJ);else if(B.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,A0,p0,FJ,y0,P0,OJ,jJ,BJ.data);else if(B.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,A0,p0,FJ,BJ.width,BJ.height,OJ,BJ.data);else v.texSubImage2D(v.TEXTURE_2D,A0,p0,FJ,y0,P0,OJ,jJ,BJ);if(F.pixelStorei(v.UNPACK_ROW_LENGTH,gJ),F.pixelStorei(v.UNPACK_IMAGE_HEIGHT,NJ),F.pixelStorei(v.UNPACK_SKIP_PIXELS,uJ),F.pixelStorei(v.UNPACK_SKIP_ROWS,Q8),F.pixelStorei(v.UNPACK_SKIP_IMAGES,T8),A0===0&&x.generateMipmaps)v.generateMipmap(j0);F.unbindTexture()},this.initRenderTarget=function(B){if(P.get(B).__webglFramebuffer===void 0)h.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)h.setTextureCube(B,0);else if(B.isData3DTexture)h.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)h.setTexture2DArray(B,0);else h.setTexture2D(B,0);F.unbindTexture()},this.resetState=function(){J0=0,W0=0,l=null,F.reset(),L0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return y$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=GJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=GJ._getUnpackColorSpace()}}var gZ={type:"change"},VK={type:"start"},mZ={type:"end"},WQ=new D7,pZ=new P8,JN=Math.cos(70*b$.DEG2RAD),bJ=new g,X8=2*Math.PI,kJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},MK=0.000001;class BK extends t6{constructor(J,Q=null){super(J,Q);if(this.state=kJ.NONE,this.target=new g,this.cursor=new g,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:H9.ROTATE,MIDDLE:H9.DOLLY,RIGHT:H9.PAN},this.touches={ONE:U9.ROTATE,TWO:U9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new g,this._lastQuaternion=new R8,this._lastTargetPosition=new g,this._quat=new R8().setFromUnitVectors(J.up,new g(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new s7,this._sphericalDelta=new s7,this._scale=1,this._panOffset=new g,this._rotateStart=new o0,this._rotateEnd=new o0,this._rotateDelta=new o0,this._panStart=new o0,this._panEnd=new o0,this._panDelta=new o0,this._dollyStart=new o0,this._dollyEnd=new o0,this._dollyDelta=new o0,this._dollyDirection=new g,this._mouse=new o0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$N.bind(this),this._onPointerDown=QN.bind(this),this._onPointerUp=KN.bind(this),this._onContextMenu=qN.bind(this),this._onMouseWheel=XN.bind(this),this._onKeyDown=YN.bind(this),this._onTouchStart=HN.bind(this),this._onTouchMove=UN.bind(this),this._onMouseDown=WN.bind(this),this._onMouseMove=ZN.bind(this),this._interceptControlDown=NN.bind(this),this._interceptControlUp=GN.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gZ),this.update(),this.state=kJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(bJ.copy(Q).sub(this.target),bJ.applyQuaternion(this._quat),this._spherical.setFromVector3(bJ),this.autoRotate&&this.state===kJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,K=this.maxAzimuthAngle;if(isFinite($)&&isFinite(K)){if($<-Math.PI)$+=X8;else if($>Math.PI)$-=X8;if(K<-Math.PI)K+=X8;else if(K>Math.PI)K-=X8;if($<=K)this._spherical.theta=Math.max($,Math.min(K,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+K)/2?Math.max($,this._spherical.theta):Math.min(K,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let Z=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=Z!=this._spherical.radius}if(bJ.setFromSpherical(this._spherical),bJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(bJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let Z=null;if(this.object.isPerspectiveCamera){let X=bJ.length();Z=this._clampDistance(X*this._scale);let Y=X-Z;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),W=!!Y}else if(this.object.isOrthographicCamera){let X=new g(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=Y!==this.object.zoom;let H=new g(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),Z=bJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(Z!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(Z).add(this.object.position);else if(WQ.origin.copy(this.object.position),WQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(WQ.direction))<JN)this.object.lookAt(this.target);else pZ.setFromNormalAndCoplanarPoint(this.object.up,this.target),WQ.intersectPlane(pZ,this.target)}else if(this.object.isOrthographicCamera){let Z=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),Z!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>MK||8*(1-this._lastQuaternion.dot(this.object.quaternion))>MK||this._lastTargetPosition.distanceToSquared(this.target)>MK)return this.dispatchEvent(gZ),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return X8/60*this.autoRotateSpeed*J;else return X8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){bJ.setFromMatrixColumn(Q,0),bJ.multiplyScalar(-J),this._panOffset.add(bJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)bJ.setFromMatrixColumn(Q,1);else bJ.setFromMatrixColumn(Q,0),bJ.crossVectors(this.object.up,bJ);bJ.multiplyScalar(J),this._panOffset.add(bJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let K=this.object.position;bJ.copy(K).sub(this.target);let W=bJ.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*W/$.clientHeight,this.object.matrix),this._panUp(2*Q*W/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),K=J-$.left,W=Q-$.top,Z=$.width,X=$.height;this._mouse.x=K/Z*2-1,this._mouse.y=-(W/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(X8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(X8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(X8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-X8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(X8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-X8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateStart.set($,K)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panStart.set($,K)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,K=J.pageY-Q.y,W=Math.sqrt($*$+K*K);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),K=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._rotateEnd.set(K,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(X8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(X8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panEnd.set($,K)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,K=J.pageY-Q.y,W=Math.sqrt($*$+K*K);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let Z=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(Z,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new o0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function QN(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function $N(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function KN(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mZ),this.state=kJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function WN(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case H9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=kJ.DOLLY;break;case H9.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=kJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=kJ.ROTATE}break;case H9.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=kJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=kJ.PAN}break;default:this.state=kJ.NONE}if(this.state!==kJ.NONE)this.dispatchEvent(VK)}function ZN(J){switch(this.state){case kJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case kJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case kJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function XN(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==kJ.NONE)return;J.preventDefault(),this.dispatchEvent(VK),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(mZ)}function YN(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function HN(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case U9.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=kJ.TOUCH_ROTATE;break;case U9.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=kJ.TOUCH_PAN;break;default:this.state=kJ.NONE}break;case 2:switch(this.touches.TWO){case U9.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=kJ.TOUCH_DOLLY_PAN;break;case U9.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=kJ.TOUCH_DOLLY_ROTATE;break;default:this.state=kJ.NONE}break;default:this.state=kJ.NONE}if(this.state!==kJ.NONE)this.dispatchEvent(VK)}function UN(J){switch(this._trackPointer(J),this.state){case kJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case kJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case kJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case kJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=kJ.NONE}}function qN(J){if(this.enabled===!1)return;J.preventDefault()}function NN(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function GN(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function dZ(J){let Q;try{Q=new kK({antialias:!0,alpha:!1})}catch(n){if(console.error("WebGL renderer unavailable:",n),J)J.innerHTML='<div class="webgl-fallback" style="color:#ffd700;font-family:Orbitron,sans-serif;text-align:center;padding:32px;margin:24px;border:2px solid #7b2d8e;border-radius:18px;background:rgba(26,0,37,0.88);"><h2>WebGL unavailable</h2><p style="color:#9980aa;margin-top:8px;">This game requires a browser with WebGL support. Try a recent Chrome, Firefox, or Edge.</p></div>';return null}Q.setSize(window.innerWidth,window.innerHeight),Q.setPixelRatio(Math.min(window.devicePixelRatio,2)),Q.shadowMap.enabled=!0,Q.shadowMap.type=_9,Q.toneMapping=f7,Q.toneMappingExposure=1.6,Q.outputColorSpace=h8,J.appendChild(Q.domElement);let $=new d6;$.background=new QJ(853016),$.fog=new l7(853016,0.028);let K=new x8(40,48,48),W=new Z8({side:sJ,fog:!1,uniforms:{topColor:{value:new QJ(1968957)},bottomColor:{value:new QJ(853016)},moonColor:{value:new QJ(16773833)},time:{value:0}},vertexShader:`
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
    `}),Z=new D0(K,W);$.add(Z);let X=new pJ(40,window.innerWidth/window.innerHeight,0.1,50);X.position.set(8,6,9);let Y=new BK(X,Q.domElement);Y.target.set(0,0.6,-0.5),Y.enableDamping=!0,Y.dampingFactor=0.08,Y.minDistance=4,Y.maxDistance=20,Y.maxPolarAngle=Math.PI/2,Y.minPolarAngle=Math.PI/7,Y.update(),$.add(new r6(8934860,1.4));let H=new B7(16772829,2.2);H.position.set(5,10,4),H.castShadow=!0,H.shadow.mapSize.width=1024,H.shadow.mapSize.height=1024,$.add(H);let U=new B7(14527231,1.2);U.position.set(-4,5,-3),$.add(U);let D=new B7(4517631,0.8);D.position.set(5,3,-4),$.add(D);let O=new D9(16768392,1.2,15,Math.PI/5,0.5,1);O.position.set(0,7,2),O.target.position.set(0,0,-0.5),$.add(O),$.add(O.target);let q=new D9(14527231,0.8,12,Math.PI/4,0.5,1);q.position.set(-2,6,-1),q.target.position.set(0,0.3,0),$.add(q),$.add(q.target);let R=new D9(16766720,1.5,10,Math.PI/6,0.6,1);R.position.set(-2,5,-4),R.target.position.set(-2,1.5,-3),$.add(R),$.add(R.target);let M=new D9(16766720,1.5,10,Math.PI/6,0.6,1);M.position.set(2,5,-4),M.target.position.set(2,1.5,-3),$.add(M),$.add(M.target);let z=new D9(16777215,1,10,Math.PI/8,0.4,1);z.position.set(0,6,-3),z.target.position.set(0,1.5,-3),$.add(z),$.add(z.target);let E=new t8(16766720,0.6,4);E.position.set(-2.5,2,-2.5),$.add(E);let N=new t8(16766720,0.6,4);N.position.set(2.5,2,-2.5),$.add(N);let C=new t8(16755268,0.5,5);C.position.set(0,2.5,-2.5),$.add(C);let A=[];[[-6,4],[6,4],[-6,-2],[6,-2],[-6,-5],[6,-5]].forEach(([n,m])=>{let U0=new JJ({color:8939059,roughness:0.25,metalness:0.85,emissive:5583616,emissiveIntensity:0.1}),E0=new D0(new xJ(0.25,0.35,3.5,8),U0);E0.position.set(n,1.75,m),E0.castShadow=!0,$.add(E0);let F0=new JJ({color:14527027,roughness:0.15,metalness:0.9,emissive:11171584,emissiveIntensity:0.3}),e0=new D0(new xJ(0.45,0.35,0.25,8),F0);e0.position.set(n,3.6,m),$.add(e0);let f0=new D0(new xJ(0.38,0.42,0.15,8),F0);f0.position.set(n,0.05,m),$.add(f0);let Q0=new JJ({color:6702114,roughness:0.7,metalness:0.6}),G0=new D0(new xJ(0.04,0.06,0.3,6),Q0);G0.position.set(n,3.85,m),$.add(G0);let w0=new JJ({color:16737792,emissive:16729088,emissiveIntensity:2.5,transparent:!0,opacity:0.7}),z0=new D0(new b9(0.15,0.5,6),w0.clone());z0.position.set(n,4.15,m),$.add(z0);let d=new JJ({color:16772676,emissive:16777096,emissiveIntensity:4,transparent:!0,opacity:0.85}),e=new D0(new b9(0.07,0.3,6),d.clone());e.position.set(n,4.1,m),$.add(e);let b=new yJ({color:16777215,transparent:!0,opacity:0.6}),y=new D0(new b9(0.03,0.12,4),b.clone());y.position.set(n,4.05,m),$.add(y);let u=new t8(16737792,1,5);u.position.set(n,4.2,m),$.add(u),A.push({outer:z0,inner:e,core:y,light:u,baseY:4.15,phase:Math.random()*Math.PI*2,pos:{x:n,z:m}})});let I=new yJ({color:16763972,transparent:!0,opacity:0.2}),_=[];for(let n=0;n<8;n++){let m=n/8*Math.PI*2,U0=5.5+Math.random()*2.5,E0=3+Math.random()*2,F0=Math.cos(m)*U0,e0=Math.sin(m)*U0-1,f0=new D0(new x8(0.12,8,8),I);f0.position.set(F0,E0,e0),$.add(f0);let Q0=new t8(16763972,0.15,2);Q0.position.copy(f0.position),$.add(Q0),_.push({mesh:f0,light:Q0,angle:m,radius:U0,baseHeight:E0,phase:Math.random()*Math.PI*2})}let w=new h9({color:14531583,size:0.04,transparent:!0,opacity:0.6,blending:o8}),k=new SJ,L=new Float32Array(1800);for(let n=0;n<600;n++)L[n*3]=(Math.random()-0.5)*40,L[n*3+1]=Math.random()*15,L[n*3+2]=(Math.random()-0.5)*40-5;k.setAttribute("position",new dJ(L,3));let r=new E7(k,w);$.add(r);function T(){let n=document.createElement("canvas");n.width=1024,n.height=1024;let m=n.getContext("2d"),U0=m.createRadialGradient(512,512,0,512,512,720);U0.addColorStop(0,"#120820"),U0.addColorStop(1,"#0a0515"),m.fillStyle=U0,m.fillRect(0,0,1024,1024);let E0=8,F0=1024/E0;for(let f0=0;f0<E0;f0++)for(let Q0=0;Q0<E0;Q0++)if((f0+Q0)%2===0)m.fillStyle="rgba(30, 15, 50, 0.35)",m.fillRect(f0*F0,Q0*F0,F0,F0);m.strokeStyle="rgba(255, 215, 0, 0.12)",m.lineWidth=2;for(let f0=0;f0<=E0;f0++)m.beginPath(),m.moveTo(f0*F0,0),m.lineTo(f0*F0,1024),m.stroke(),m.beginPath(),m.moveTo(0,f0*F0),m.lineTo(1024,f0*F0),m.stroke();for(let f0=0;f0<5000;f0++)m.fillStyle=`rgba(255, 255, 255, ${Math.random()*0.03})`,m.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e0=new f8(n);return e0.wrapS=g7,e0.wrapT=g7,e0.repeat.set(4,4),e0}let c=T(),$0=new D0(new w8(40,40),new JJ({map:c,color:16777215,roughness:0.35,metalness:0.45,emissive:1116194,emissiveIntensity:0.15}));$0.rotation.x=-Math.PI/2,$0.position.y=-0.1,$0.receiveShadow=!0,$.add($0);let i=new yJ({color:13404415,transparent:!0,opacity:0.08});for(let n=-10;n<=10;n++){let m=new D0(new m0(40,0.003,0.015),i);m.position.set(0,-0.09,n*2),$.add(m);let U0=new D0(new m0(0.015,0.003,40),i);U0.position.set(n*2,-0.09,0),$.add(U0)}let J0=new D0(new O9(4,4.2,32),new yJ({color:16766720,transparent:!0,opacity:0.08,side:PJ}));J0.rotation.x=-Math.PI/2,J0.position.set(0,-0.08,0),$.add(J0),[[-4.5,1.2,-3,16766720],[4.5,1.2,-3,16766720],[-4.5,1.2,2,16729190],[4.5,1.2,2,65416],[-3,0.5,-3,4517631],[3,0.5,-3,16746564]].forEach(([n,m,U0,E0])=>{let F0=new t8(E0,0.7,4);F0.position.set(n,m,U0),$.add(F0);let e0=new D0(new x8(0.06,8,8),new yJ({color:E0}));e0.position.copy(F0.position),$.add(e0)});let W0=new yJ({color:4456550,transparent:!0,opacity:0.04,side:PJ}),l=[];for(let n=0;n<6;n++){let m=new D0(new w8(3+Math.random()*2,0.3),W0),U0=0.05+Math.random()*0.1;m.position.set((Math.random()-0.5)*8,U0,(Math.random()-0.5)*8-1),m.rotation.y=Math.random()*Math.PI*2,$.add(m),l.push({mesh:m,baseY:U0,baseX:m.position.x,phase:Math.random()*Math.PI*2})}return window.addEventListener("resize",()=>{X.aspect=window.innerWidth/window.innerHeight,X.updateProjectionMatrix(),Q.setSize(window.innerWidth,window.innerHeight)}),{scene:$,camera:X,renderer:Q,controls:Y,flameData:A,lanterns:_,smokeData:l,updateAmbient(n){W.uniforms.time.value=n;let m=0.42+0.32*Math.sin(n*0.6);w.opacity=m;let U0=0.5+0.5*Math.sin(n*0.35+1);w.color.setRGB(0.78+U0*0.1,0.66+(1-U0)*0.1,0.95);for(let E0 of l)E0.mesh.position.y=E0.baseY+Math.sin(n*0.4+E0.phase)*0.18,E0.mesh.position.x=E0.baseX+Math.sin(n*0.25+E0.phase*1.7)*0.35},updateFlames(n){for(let m of A){let U0=0.5+0.5*Math.sin(n*8+m.phase),E0=0.4+0.6*Math.sin(n*11+m.phase*1.3),F0=U0*E0;if(m.outer.material.emissiveIntensity=1.5+2.5*F0,m.outer.material.opacity=0.4+0.4*F0,m.inner.material.emissiveIntensity=2.5+4*F0,m.light.intensity=0.6+0.8*F0,m.outer.position.x=m.pos.x+Math.sin(n*6+m.phase)*0.04,m.outer.position.z=m.pos.z+Math.cos(n*8+m.phase)*0.04,m.outer.scale.x=0.9+0.2*Math.sin(n*5+m.phase*0.7),m.outer.scale.z=0.9+0.2*Math.cos(n*7+m.phase),m.outer.scale.y=0.8+0.4*Math.sin(n*9+m.phase),m.inner.position.copy(m.outer.position),m.inner.position.y=m.baseY+Math.sin(n*6+m.phase)*0.04,m.core)m.core.position.copy(m.inner.position),m.core.position.y=m.baseY-0.1+Math.sin(n*10+m.phase)*0.02,m.core.material.opacity=0.3+0.5*F0;m.light.position.copy(m.outer.position),m.light.position.y=4.2}for(let m of _)m.mesh.position.y=m.baseHeight+Math.sin(n*0.5+m.phase)*0.08,m.light.position.y=m.mesh.position.y}}}function uZ(J){let Q=new K8,$=7,K=6,W=0.5,Z=0.54,X=-2.75,Y=1.6,H=-4.05,U=-3.2,D=3.2,O=0,q=new JJ({color:1706037,roughness:0.5,metalness:0.6,emissive:656416,emissiveIntensity:0.12}),R=new JJ({color:918560,roughness:0.6,metalness:0.5,emissive:328208,emissiveIntensity:0.08}),M=new D0(new m0(7.8,0.2,6.6),R);M.position.set(0,0.1,0.1),M.castShadow=!0,M.receiveShadow=!0,Q.add(M);let z=new D0(new m0(7.5,0.175,6.3),q);z.position.set(0,0.275,0.05),z.castShadow=!0,z.receiveShadow=!0,Q.add(z);let E=new D0(new m0(7,0.125,6),q);E.position.set(0,0.425,0),E.castShadow=!0,E.receiveShadow=!0,Q.add(E);let N=new JJ({color:16766720,roughness:0.15,metalness:0.92,emissive:8939008,emissiveIntensity:0.2}),A=new D0(new m0(7.65,0.05,6.45),N);A.position.set(0,0.2,0.08),Q.add(A);let V=new D0(new m0(7.25,0.05,6.15),N);V.position.set(0,0.35,0.03),Q.add(V);let I=new JJ({color:3807829,roughness:0.95,metalness:0.02,emissive:1706544,emissiveIntensity:0.25}),_=new D0(new m0(6.5,0.04,6),I);_.position.set(0,0.52,0),_.receiveShadow=!0,Q.add(_);let w=3.2,k=-1.2,L=0.9,r=1.2,T=0.08,c=0.54+T,$0=-1.5,i=0.45,J0=0.7,W0=$0-i/2,l=$0+i/2,n=k+w/2,m=k-w/2,U0=$0,E0=new JJ({color:13404415,emissive:11158783,emissiveIntensity:1.5,transparent:!0,opacity:0.6,side:PJ}),F0=new D0(new O9(0.2,0.4,20,1),E0);F0.position.set(0,0.53,U0),F0.rotation.x=-Math.PI/2,Q.add(F0);let e0=new K8,f0=3.3,Q0=2.9000000000000004,G0=U0,w0=new JJ({color:6706602,roughness:0.3,metalness:0.8,emissive:4465322,emissiveIntensity:0.2}),z0=new D0(new m0(Q0*2+0.5,0.04,0.04),w0);z0.position.set(0,f0,G0),e0.add(z0);let d=new JJ({color:8943564,roughness:0.2,metalness:0.9,emissive:6702250,emissiveIntensity:0.3});for(let V0 of[-1,1]){let b0=new D0(new x8(0.06,6,6),d);b0.position.set(V0*(Q0+0.25),f0,G0),e0.add(b0)}let e=new JJ({color:13404415,emissive:11158783,emissiveIntensity:2}),b=new D0(new R7(0.1,0),e);b.position.set(0,f0,G0),e0.add(b);let y=new yJ({color:16777215,transparent:!0,opacity:0.6}),u=new D0(new R7(0.05,0),y);u.position.set(0,f0,G0),e0.add(u);let s=new yJ({color:13404415,transparent:!0,opacity:0.08,side:PJ}),p=new D0(new m0(0.02,f0-0.5,0.02),s);p.position.set(0,0.5+(f0-0.5)/2,G0),e0.add(p);let S=new yJ({color:13404415,transparent:!0,opacity:0.15,side:PJ}),S0=new D0(new O9(0.1,0.25,16,1),S);S0.rotation.x=-Math.PI/2,S0.position.set(0,0.52,G0),e0.add(S0);let d0={slider:b,innerSlider:u,beam:p,target:S0,railY:f0,railSpan:Q0};Q.add(e0);let n0=new K8,s0=new JJ({color:3809376,roughness:0.4,metalness:0.6,emissive:1706544,emissiveIntensity:0.3}),XJ=new JJ({color:13404415,roughness:0.2,metalness:0.8,emissive:11158783,emissiveIntensity:0.6}),v=new JJ({color:4469640,roughness:0.3,metalness:0.7,emissive:2232678,emissiveIntensity:0.4}),KJ=3.2-J0/2,i0=new D0(new m0(KJ,T,w),s0);i0.position.set(-(J0/2+KJ/2),0.54+T/2,k),i0.castShadow=!0,i0.receiveShadow=!0,n0.add(i0);let j=new D0(new m0(KJ,T,w),s0);j.position.set(J0/2+KJ/2,0.54+T/2,k),j.castShadow=!0,j.receiveShadow=!0,n0.add(j);let F=6.4,G=T+0.06,P=new D0(new m0(F,G,0.06),XJ);P.position.set(0,0.54+G/2,k+w/2),n0.add(P);let h=T+0.22,Y0=0.54+h/2,N0=new D0(new m0(F,h,0.06),v);N0.position.set(0,Y0,k-w/2),N0.castShadow=!0,n0.add(N0);for(let V0 of[-1,1]){let b0=T+0.12,YJ=new D0(new m0(0.06,b0,w),v);YJ.position.set(V0*(F/2),0.54+b0/2,k),n0.add(YJ)}let k0=new JJ({color:13404415,emissive:11158783,emissiveIntensity:1.5}),K0=new D0(new m0(F,0.02,0.02),k0);K0.position.set(0,0.54+T+0.01,k+w/2+0.02),n0.add(K0),Q.add(n0);let Z0=k,R0=k,h0=0,B0=-1,O0=2.8,u0=new JJ({color:2757734,roughness:0.4,metalness:0,transparent:!0,opacity:0.2,side:PJ,emissive:656416,emissiveIntensity:0.18,depthWrite:!1}),x0=new D0(new m0(7.3,O0,0.2),u0);x0.position.set(0,0.5+O0/2,-4.05),x0.castShadow=!1,x0.receiveShadow=!1,x0.renderOrder=1,Q.add(x0);let qJ=new yJ({color:10181046,transparent:!0,opacity:0.08,blending:o8,side:PJ,depthWrite:!1}),f=new D0(new w8(7.25,O0-0.1),qJ);f.position.set(0,0.5+O0/2,-3.9299999999999997);let M0=new JJ({color:13404415,emissive:11158783,emissiveIntensity:2}),X0=new D0(new m0(7.15,0.03,0.03),M0);X0.position.set(0,0.62,-3.9099999999999997),Q.add(X0),f.renderOrder=2,Q.add(f);let L0=new JJ({color:16766720,emissive:16755200,emissiveIntensity:2.2}),C0=0.06,H0=7.25,I0=O0+0.1;[{x:0,y:0.5+O0+0.07,w:H0},{x:0,y:0.44,w:H0}].forEach(({x:V0,y:b0,w:YJ})=>{let ZJ=new D0(new m0(YJ,C0,C0),L0);ZJ.position.set(V0,b0,-3.94),Q.add(ZJ)}),[{x:-H0/2+C0/2},{x:H0/2-C0/2}].forEach(({x:V0})=>{let b0=new D0(new m0(C0,I0,C0),L0);b0.position.set(V0,0.5+O0/2,-3.94),Q.add(b0)});let l0=new K8;l0.position.set(0,1.8,-3.92),Q.add(l0);let _J=new JJ({color:16766720,emissive:13142528,emissiveIntensity:1.4,roughness:0.12,metalness:0.95}),DJ=new D0(new xJ(0.78,0.78,0.16,32),_J);DJ.rotation.z=Math.PI/2,l0.add(DJ);let Y8=new JJ({color:16774307,emissive:16766720,emissiveIntensity:1.8}),H8=new D0(new k7(0.62,0.025,8,32),Y8);H8.rotation.y=Math.PI/2,H8.position.z=0.085,l0.add(H8);let I7=new D0(new k7(0.5,0.02,8,24),Y8);I7.rotation.y=Math.PI/2,I7.position.z=0.09,l0.add(I7);let C8=new JJ({color:16774307,emissive:16766720,emissiveIntensity:2.6}),l9=new D0(new m0(0.06,0.6,0.04),C8);l9.position.set(0,0,0.09),l0.add(l9);let $6=new D0(new m0(0.24,0.06,0.04),C8);$6.position.set(0,0.22,0.09),l0.add($6);let P7=new D0(new m0(0.24,0.06,0.04),C8);P7.position.set(0,-0.22,0.09),l0.add(P7);let k9=new D0(new m0(0.13,0.05,0.04),C8);k9.position.set(-0.04,0.07,0.09),l0.add(k9);let F8=new D0(new m0(0.13,0.05,0.04),C8);F8.position.set(0.04,-0.07,0.09),l0.add(F8),[-0.09].forEach((V0)=>{let b0=new D0(new m0(0.13,0.05,0.04),C8);b0.position.set(-k9.position.x,-k9.position.y,V0),l0.add(b0);let YJ=new D0(new m0(0.13,0.05,0.04),C8);YJ.position.set(-F8.position.x,-F8.position.y,V0),l0.add(YJ)});function A7(){let YJ=document.createElement("canvas");YJ.width=1024,YJ.height=224;let ZJ=YJ.getContext("2d"),aJ=ZJ.createLinearGradient(0,0,0,224);aJ.addColorStop(0,"#ffe9a3"),aJ.addColorStop(0.5,"#ffd700"),aJ.addColorStop(1,"#b8860b"),ZJ.fillStyle=aJ,ZJ.fillRect(0,0,1024,224),ZJ.fillStyle="#150527",ZJ.fillRect(14,14,996,196),ZJ.strokeStyle="rgba(255, 215, 0, 0.55)",ZJ.lineWidth=3,ZJ.strokeRect(26,26,972,172),ZJ.textAlign="center",ZJ.textBaseline="middle",ZJ.font="900 104px Orbitron, Arial, sans-serif";let $8=ZJ.createLinearGradient(0,56,0,190.4);$8.addColorStop(0,"#fff8d0"),$8.addColorStop(0.45,"#ffd700"),$8.addColorStop(1,"#e8930c"),ZJ.shadowColor="rgba(255, 200, 40, 0.95)",ZJ.shadowBlur=34,ZJ.fillStyle=$8,ZJ.fillText("COIN PUSHER",512,116),ZJ.shadowBlur=0,ZJ.fillStyle="rgba(255, 215, 0, 0.9)",ZJ.font="900 58px Orbitron, Arial, sans-serif",ZJ.fillText("✦",82,114),ZJ.fillText("✦",942,114);let lJ=new f8(YJ);return lJ.colorSpace=h8,lJ.anisotropy=4,lJ}let K6=new yJ({map:A7(),transparent:!0,side:PJ,toneMapped:!1}),c9=new D0(new w8(4.2,0.72),K6);c9.position.set(0,3.45,-3.92),Q.add(c9);let M9=[];[-2.55,2.55].forEach((V0,b0)=>{let YJ=new JJ({color:16766720,roughness:0.18,metalness:0.92,emissive:13404160,emissiveIntensity:0.7}),ZJ=new D0(new xJ(0.15,0.18,2.2,12),YJ);ZJ.position.set(V0,1.8,-3.92),Q.add(ZJ);let aJ=new D0(new xJ(0.22,0.18,0.18,12),YJ);aJ.position.set(V0,3,-3.92),Q.add(aJ);let $8=new D0(new xJ(0.22,0.24,0.12,12),YJ);$8.position.set(V0,0.75,-3.92),Q.add($8);let lJ=new D0(new x8(0.1,16,16),new yJ({color:16770688,transparent:!0,opacity:0.85}));lJ.position.set(V0,3.2,-3.92),Q.add(lJ);let O8=[16720452,4521864,4491519,16755234,13395711];for(let rJ=0;rJ<5;rJ++){let V9=new JJ({color:O8[rJ%O8.length],emissive:O8[rJ%O8.length],emissiveIntensity:0.45,roughness:0.3,metalness:0.5}),AK=new D0(new xJ(0.2,0.2,0.045,12),V9);AK.position.set(V0+(b0===0?-0.4:0.4),0.9+rJ*0.05,-3.8899999999999997),Q.add(AK)}M9.push({orb:lJ,phase:b0*0.5})}),[-3.25,3.25].forEach((V0)=>{let b0=new K8;b0.position.set(V0,2.55,-3.92);let YJ=new JJ({color:16766720,emissive:16755200,emissiveIntensity:2.2}),ZJ=new D0(new m0(0.08,0.78,0.05),YJ);b0.add(ZJ);let aJ=new D0(new m0(0.32,0.08,0.05),YJ);aJ.position.y=0.28,b0.add(aJ);let $8=new D0(new m0(0.32,0.08,0.05),YJ);$8.position.y=-0.28,b0.add($8);let lJ=new D0(new m0(0.18,0.06,0.05),YJ);lJ.position.set(-0.05,0.1,0),b0.add(lJ);let O8=new D0(new m0(0.18,0.06,0.05),YJ);O8.position.set(0.05,-0.1,0),b0.add(O8),Q.add(b0)}),Q.userData=Q.userData||{},Q.userData.wallAnims={heroCoinGroup:l0,sideColumns:M9,frameGoldMat:L0,marquee:c9};let W6=new JJ({color:1706037,roughness:0.4,metalness:0.7,emissive:656416,emissiveIntensity:0.1}),n9=new JJ({color:3351142,roughness:0.25,metalness:0.9,emissive:2232661,emissiveIntensity:0.2}),m8=3.2;[-3.75,3.75].forEach((V0,b0)=>{let YJ=new D0(new m0(0.4,m8,6.4),W6);YJ.position.set(V0,0.5+m8/2,0),YJ.castShadow=!0,Q.add(YJ);let ZJ=new D0(new m0(0.42,m8,0.05),n9);ZJ.position.set(V0,0.5+m8/2,3.15),Q.add(ZJ);let aJ=new D0(new m0(0.44,m8*0.8,0.03),new JJ({color:16766720,emissive:11171584,emissiveIntensity:0.3,metalness:0.92,roughness:0.15}));aJ.position.set(V0,0.5+m8*0.6,3.16),Q.add(aJ);let $8=new yJ({color:524818,transparent:!0,opacity:0.4});for(let lJ=0;lJ<4;lJ++){let O8=new D0(new m0(0.04,0.55,0.01),$8);O8.position.set(V0+(b0===0?0.1:-0.1),2.3+lJ*0.7,-1.5),Q.add(O8)}});let Z6=new M7({color:12312063,transparent:!0,opacity:0.06,roughness:0.02,metalness:0,side:PJ,depthWrite:!1}),_7=new D0(new m0(6.8,2.2,0.04),Z6);_7.position.set(0,2.3,1.5),_7.renderOrder=4,Q.add(_7);let w7=new D0(new m0(7.3,2.5,0.06),new M7({color:14531583,transparent:!0,opacity:0.04,roughness:0.05,metalness:0,side:PJ,depthWrite:!1}));w7.position.set(0,2.5,-3.5),w7.renderOrder=3,Q.add(w7);let GQ=new JJ({color:8943564,roughness:0.2,metalness:0.8,emissive:4469674,emissiveIntensity:0.1});[[-3.65,1.5],[3.65,1.5]].forEach(([V0,b0])=>{let YJ=new D0(new m0(0.06,2.3,0.06),GQ);YJ.position.set(V0,2.3,b0),Q.add(YJ)});let FQ=3,B=[{type:"hole",width:1},{type:"win",width:4.4},{type:"hole",width:1}],x=[],t=-3.2;for(let V0=0;V0<FQ;V0++){let b0=B[V0].width;x.push({startX:t,endX:t+b0,centerX:t+b0/2,type:B[V0].type,width:b0}),t+=b0}let o=new JJ({color:1837624,roughness:0.4,metalness:0.6,emissive:853024,emissiveIntensity:0.3,side:PJ}),a=new JJ({color:3351142,roughness:0.3,metalness:0.8,emissive:1706544,emissiveIntensity:0.25,side:PJ}),A0=new M7({color:10079487,transparent:!0,opacity:0.12,roughness:0.05,metalness:0,side:PJ,depthWrite:!1}),y0=new JJ({color:16766720,roughness:0.15,metalness:0.9,emissive:8939008,emissiveIntensity:0.35}),P0=1.6,v0=3.4,g0=0.32000000000000006,r0=0.09999999999999998,WJ=v0-P0,p0=Math.atan2(g0-r0,WJ),FJ=(P0+v0)/2,VJ=new D0(new m0(6.5,0.03,WJ),o);VJ.position.set(0,(g0+r0)/2,FJ),VJ.rotation.x=p0,VJ.receiveShadow=!0,Q.add(VJ);for(let V0 of[-1,1]){let b0=new D0(new m0(0.04,0.3,WJ),A0);b0.position.set(V0*6.5/2,(g0+r0)/2+0.1,FJ),b0.rotation.x=p0,Q.add(b0)}let BJ=new D0(new m0(7.6,0.04,0.55),o);BJ.position.set(0,r0-0.02,v0+0.2),BJ.receiveShadow=!0,Q.add(BJ);for(let V0 of[-1,1]){let b0=new D0(new m0(0.05,0.55,0.6),A0);b0.position.set(V0*7.6/2,r0+0.26,v0+0.2),Q.add(b0)}let OJ=new D0(new m0(7.6,0.55,0.04),A0);OJ.position.set(0,r0+0.27,v0+0.5),OJ.renderOrder=5,Q.add(OJ);let jJ=new D0(new m0(7.64,0.035,0.05),y0);jJ.position.set(0,r0+0.55,v0+0.5),Q.add(jJ);let j0={win:new JJ({color:65416,emissive:65348,emissiveIntensity:2.6}),hole:new JJ({color:16720452,emissive:16711714,emissiveIntensity:2.6})};x.forEach((V0)=>{let b0=new D0(new m0(V0.width-0.05,0.03,0.03),j0[V0.type]);b0.position.set(V0.centerX,g0+0.05,P0-0.03),Q.add(b0)});let gJ=k+w/2+0.2,NJ=1.55,uJ=0.18,Q8=NJ-gJ,T8=new JJ({color:3807829,roughness:0.6,metalness:0.3,emissive:1706544,emissiveIntensity:0.2}),B8=new D0(new m0(6.5,0.02,Q8),T8);B8.position.set(0,0.54-uJ/2,gJ+Q8/2),B8.rotation.x=Math.atan2(uJ,Q8),B8.receiveShadow=!0,Q.add(B8);let EJ=new JJ({color:4517631,emissive:2280703,emissiveIntensity:1.2});[[-3.2,-2.6,4.5],[3.2,-2.6,4.5]].forEach(([V0,b0,YJ])=>{let ZJ=new D0(new m0(0.02,0.02,YJ),EJ);ZJ.position.set(V0,0.8,b0),Q.add(ZJ)}),J.add(Q);let zJ=0;function S8(V0){let b0=Math.sin(V0*0.6)*(Q0-0.2);zJ=b0;let YJ=V0*r,ZJ=Math.sin(YJ),aJ=ZJ>0?Math.pow(ZJ,1.3):-Math.pow(-ZJ,0.7),$8=k+aJ*L;b.position.x=b0,u.position.x=b0,p.position.x=b0,p.position.z=G0,p.position.y=0.5+(f0-0.5)/2,p.scale.y=1+Math.sin(V0*0.6)*0.1,S0.position.x=b0,S0.position.z=G0;let lJ=0.8+0.2*Math.sin(V0*1.2);S0.material.opacity=0.1+0.15*lJ,b.position.y=f0+Math.sin(V0*2+b0)*0.02,u.position.y=b.position.y,b.rotation.x=V0*0.5,b.rotation.y=V0*0.3,u.rotation.x=b.rotation.x,u.rotation.y=b.rotation.y,R0=Z0,Z0=$8;let O8=Math.max(V0-B0,0.001);if(B0<0)h0=0;else h0=(Z0-R0)/O8;B0=V0,n0.position.z=Z0-k,F0.position.x=zJ;let rJ=Q.userData&&Q.userData.wallAnims;if(rJ){if(rJ.heroCoinGroup)rJ.heroCoinGroup.rotation.y=V0*0.28;if(rJ.marquee){let V9=0.5+0.5*Math.sin(V0*1.2);rJ.marquee.scale.set(1+0.02*V9,1+0.02*V9,1)}if(rJ.sideColumns)for(let V9 of rJ.sideColumns)V9.orb.material.opacity=0.6+0.4*Math.sin(V0*2+V9.phase);if(rJ.frameGoldMat)rJ.frameGoldMat.emissiveIntensity=1.6+1*Math.sin(V0*0.9)}}return{group:Q,width:7,depth:6,height:0.5,surfaceY:0.54,backZ:-2.75,frontDropZ:1.6,leftX:-3.2,rightX:3.2,winZ:2.6,zones:x,getZoneType(V0){for(let b0 of x)if(V0>=b0.startX&&V0<b0.endX)return b0.type;return"hole"},mechX:0,get dropX(){return zJ},dropZ:U0,dropHeight:3.5,updateMechanism:S8,get shelfZ(){return Z0},get shelfVelocity(){return h0},get shelfFrontZ(){return Z0+w/2},get shelfBackZ(){return Z0-w/2},shelfSurfaceY:c,shelfThickness:T,slotCenterZ:$0,slotBackZ:W0,slotFrontZ:l,slotWidth:J0,slotHalfWidth:J0/2,shelfAmplitude:L,shelfSpeed:r,shelfNeutralZ:k,shelfDepth:w,slopeStartZ:gJ,slopeEndZ:NJ,slopeDrop:uJ}}var d9=0.06,FN=0.5,ON=0.22,ZQ=0.01,DN=0.2,EN=0.28,lZ=0.008,t7=6000,cZ=0.987,N8=0.3,nZ=14,sZ=0.1,iZ=0.35,XQ=2.5,eJ=0.28,RN=0.25,kN=0.15,oZ=0,MN=6,R9=0.6;function aZ(J,Q,$=0){oZ=$;let K=[],W=new K8;J.add(W);function Z(d,e,b,y,u,s){d.beginPath();for(let p=0;p<y*2;p++){let S=p%2===0?u:s,S0=p*Math.PI/y-Math.PI/2,d0=e+Math.cos(S0)*S,n0=b+Math.sin(S0)*S;if(p===0)d.moveTo(d0,n0);else d.lineTo(d0,n0)}d.closePath(),d.fill()}function X(d){let b=document.createElement("canvas");b.width=128,b.height=128;let y=b.getContext("2d"),u=64,s=64,p=62,S=[["#fff3c0","#f2c94c","#b8860b"],["#fffbe6","#ffe27a","#c9951e"],["#ffe9a3","#f0b63a","#a06a12"]],[S0,d0,n0]=S[d%S.length],s0=y.createRadialGradient(u-12,s-12,p*0.15,u,s,p);s0.addColorStop(0,S0),s0.addColorStop(0.65,d0),s0.addColorStop(1,n0),y.fillStyle=s0,y.beginPath(),y.arc(u,s,p,0,Math.PI*2),y.fill(),y.strokeStyle="rgba(90,60,10,0.9)",y.lineWidth=7,y.beginPath(),y.arc(u,s,p-2,0,Math.PI*2),y.stroke(),y.strokeStyle="rgba(255,246,200,0.55)",y.lineWidth=2,y.beginPath(),y.arc(u,s,p-9,0,Math.PI*2),y.stroke(),y.strokeStyle="rgba(255,255,255,0.35)",y.lineWidth=3,y.beginPath(),y.arc(u,s,p*0.6,0,Math.PI*2),y.stroke(),y.strokeStyle="rgba(90,60,10,0.45)",y.lineWidth=2;for(let v=0;v<48;v++){let KJ=v/48*Math.PI*2;y.beginPath(),y.moveTo(u+Math.cos(KJ)*(p-2),s+Math.sin(KJ)*(p-2)),y.lineTo(u+Math.cos(KJ)*(p-8),s+Math.sin(KJ)*(p-8)),y.stroke()}if(y.fillStyle="rgba(110,68,0,0.95)",y.textAlign="center",y.textBaseline="middle",d%3===0)y.font="900 62px Arial",y.fillText("1",u,s+5);else if(d%3===1)Z(y,u,s-2,5,p*0.42,p*0.19);else y.font="900 58px Arial",y.fillText("C",u,s+5);y.strokeStyle="rgba(255,255,255,0.22)",y.lineWidth=3,y.beginPath(),y.arc(u-7,s-7,p*0.78,Math.PI,Math.PI*1.7),y.stroke();let XJ=new f8(b);return XJ.colorSpace=h8,XJ}function Y(d){let y=document.createElement("canvas");y.width=256,y.height=128;let u=y.getContext("2d"),s=u.createLinearGradient(0,0,0,128);s.addColorStop(0,d%2?"#3ddc84":"#2ecf7e"),s.addColorStop(1,d%2?"#1aa864":"#0f8f52"),u.fillStyle=s,u.fillRect(0,0,256,128),u.strokeStyle="rgba(255,255,255,0.85)",u.lineWidth=5,u.strokeRect(7,7,242,114),u.strokeStyle="rgba(0,80,40,0.8)",u.lineWidth=2,u.strokeRect(13,13,230,102),u.fillStyle="rgba(255,255,255,0.95)",u.textAlign="center",u.textBaseline="middle",u.font="900 92px Arial",u.fillText("$",128,68),u.font="900 26px Arial",u.fillText("10",30,26),u.fillText("10",226,102);let p=new f8(y);return p.colorSpace=h8,p}function H(d){let y=document.createElement("canvas");y.width=128,y.height=176;let u=y.getContext("2d");u.fillStyle="#fdf6ec",u.fillRect(0,0,128,176),u.strokeStyle="rgba(60,20,80,0.8)",u.lineWidth=6,u.strokeRect(4,4,120,168),u.strokeStyle="rgba(60,20,80,0.35)",u.lineWidth=2,u.strokeRect(12,12,104,152);let s=d===0||d===1;u.fillStyle=s?"#e02a4d":"#2b2b33";let p=["♥","♦","♠","♣"];u.font="70px serif",u.fillText(p[d%4],64,92),u.font="900 30px serif",u.fillText("A",26,28),u.fillText("A",102,148);let S=new f8(y);return S.colorSpace=h8,S}let U=new xJ(eJ*0.97,eJ,d9,32),D=new m0(FN,ZQ,ON),O=new m0(DN,lZ,EN),q=[0,1,2].map((d)=>new JJ({map:X(d),roughness:0.3,metalness:0.9,emissive:5583616,emissiveIntensity:0.07})),R=new JJ({color:13212218,roughness:0.35,metalness:0.92,emissive:5583616,emissiveIntensity:0.07}),M={coin:[0,1,2].map((d)=>[R,q[d],q[d]]),bill:[0,1].map((d)=>new JJ({map:Y(d),roughness:0.4,metalness:0.05,emissive:13073,emissiveIntensity:0.1})),card:[0,1,2,3].map((d)=>new JJ({map:H(d),roughness:0.65,metalness:0,emissive:2228292,emissiveIntensity:0.04}))};function z(d){if(d==="coin")return eJ;if(d==="dollar")return RN;return kN}function E(d){if(d==="coin")return d9/2;if(d==="dollar")return ZQ/2;return lZ/2}let N=new Map;function C(){N.clear()}function A(d,e){return d*73856093^e*19349663}function V(d){let e=Math.floor(d.x/R9),b=Math.floor(d.z/R9),y=A(e,b),u=N.get(y);if(!u)u=[],N.set(y,u);u.push(d)}function I(d){let e=Math.floor(d.x/R9),b=Math.floor(d.z/R9),y=[];for(let u=-1;u<=1;u++)for(let s=-1;s<=1;s++){let p=N.get(A(e+u,b+s));if(p)for(let S=0;S<p.length;S++)y.push(p[S])}return y}function _(d,e,b){let y=new D0(U,M.coin[Math.floor(Math.random()*3)]);return y.position.set(d,b,e),y.rotation.y=Math.random()*Math.PI*2,y.castShadow=!0,y.receiveShadow=!0,W.add(y),y}function w(d,e,b){let y=new D0(D,M.bill[Math.floor(Math.random()*2)]);return y.position.set(d,b,e),y.rotation.y=Math.random()*Math.PI*2,y.castShadow=!0,y.receiveShadow=!0,W.add(y),y}function k(d,e){let b=Q.shelfSurfaceY+0.1,y=M.card[Math.floor(Math.random()*4)],u=new D0(O,y);u.position.set(d,b,e),u.rotation.y=Math.random()*Math.PI*2,u.castShadow=!0,u.receiveShadow=!0,W.add(u);let s=`card_${++oZ}`;return u.userData={isCard:!0,cardId:s,collected:!1},u}function L(d,e,b,y,u="sliding"){let s;if(d==="card")s=k(e,b),y=s.position.y,u="floating";else if(d==="dollar")s=w(e,b,y);else s=_(e,b,y);let p={mesh:s,type:d,x:e,y,z:b,vx:0,vy:0,vz:0,state:u,spin:0,_dropTime:0,_slotTimer:0};return K.push(p),p}function r(d=55,e=6){c();let b=Math.floor(d*0.6);for(let y=0;y<Math.min(b,t7);y++){let u=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),s=Q.shelfBackZ+0.2+Math.random()*(Q.shelfAmplitude*1.2),p=Q.shelfSurfaceY+d9/2,S=L("coin",u,s,p,"sliding");S.onShelf=!0,S.vz=(Math.random()-0.5)*0.05}for(let y=0;y<Math.min(d-b,t7);y++){let u=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),s=Q.frontDropZ-0.5+Math.random()*0.8;L("coin",u,s,Q.surfaceY+d9/2,"sliding")}for(let y=0;y<Math.min(e,t7-d);y++){let u=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),s=Q.shelfBackZ+0.3+Math.random()*(Q.shelfDepth*0.5),p=L("dollar",u,s,Q.shelfSurfaceY+ZQ/2,"sliding");p.onShelf=!0}for(let y=0;y<3;y++){let u=Q.leftX+0.5+Math.random()*(Q.rightX-Q.leftX-1),s=Q.shelfBackZ+0.5+Math.random()*(Q.shelfDepth*0.5),p=L("card",u,s);p.vz=0.06+Math.random()*0.07}for(let y=0;y<8;y++)J0(),W0(),l();for(let y of K)if(y.state==="sliding"&&y.type!=="card")y.y=Math.max(y.y,$0(y));T(2);for(let y=0;y<10;y++)J0(),W0(),l();for(let y of K)if(y.state==="sliding"&&y.type!=="card")y.y=Math.max(y.y,$0(y))}function T(d){for(let e=0;e<d;e++){let b=Q.leftX+1.2+Math.random()*(Q.rightX-Q.leftX-2.4),y=Q.shelfBackZ+0.6+Math.random()*(Q.shelfDepth-1.8),u=6+Math.floor(Math.random()*6);for(let s=0;s<u;s++){let p=Math.sin(s*0.3)*0.006,S=Math.cos(s*0.4)*0.006,S0=Q.shelfSurfaceY+d9/2+s*(d9+0.001),d0=L("coin",b+p,y+S,S0,"sliding");d0.onShelf=!0,d0.vy=0}}}function c(){K.forEach((d)=>W.remove(d.mesh)),K.length=0}function $0(d){let e=E(d.type);if(d.onShelf)return Q.shelfSurfaceY+e;if(d.z>Q.slopeStartZ&&d.z<Q.frontDropZ){let b=Math.max(0,Math.min(1,(d.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ)));return Q.surfaceY+e-b*Q.slopeDrop}return Q.surfaceY+e}function i(d){let e=eJ*4;for(let b=0;b<K.length;b++){let y=K[b];if(y===d||y.onShelf||y.state!=="sliding")continue;let u=y.x-d.x,s=y.z-d.z,p=Math.sqrt(u*u+s*s);if(p<e&&p>0.01){let S=(1-p/e)*0.3;y.vx+=u/p*S,y.vz+=s/p*S*0.5}}}function J0(){C();for(let e=0;e<K.length;e++){let b=K[e];if(b.state==="dropping"||b.state==="falling")continue;V(b)}let d=new Set;for(let e=0;e<K.length;e++){let b=K[e];if(b.state==="dropping"||b.state==="falling")continue;if(b.state==="floating")continue;let y=I(b);for(let u=0;u<y.length;u++){let s=y[u];if(s===b)continue;let p=b<s?e:K.indexOf(s),S=e<p?`${e}:${p}`:`${p}:${e}`;if(d.has(S))continue;d.add(S);let S0=z(b.type),d0=z(s.type),n0=S0+d0+0.02,s0=s.x-b.x,XJ=s.z-b.z,v=Math.sqrt(s0*s0+XJ*XJ);if(v<n0&&v>0.001){let KJ=n0-v,i0=s0/v,j=XJ/v;if(b.state==="falling"&&s.state==="sliding")s.vz+=KJ*0.3,s.vx+=(Math.random()-0.5)*KJ*0.15,b.vx-=i0*KJ*0.15,b.vz-=j*KJ*0.15;else if(s.state==="falling"&&b.state==="sliding")b.vz+=KJ*0.3,b.vx+=(Math.random()-0.5)*KJ*0.15,s.vx-=i0*KJ*0.15,s.vz-=j*KJ*0.15;else{let F=KJ*0.3;b.x-=i0*F,b.z-=j*F,s.x+=i0*F,s.z+=j*F;let G=(s.vx-b.vx)*i0+(s.vz-b.vz)*j;if(G<0){let P=G*N8*0.5;b.vx+=P*i0,b.vz+=P*j,s.vx-=P*i0,s.vz-=P*j}}}}}for(let e=0;e<K.length;e++){let b=K[e];if(b.type==="card")continue;if(Math.abs(b.vx)>XQ)b.vx=Math.sign(b.vx)*XQ;if(Math.abs(b.vz)>XQ)b.vz=Math.sign(b.vz)*XQ}}function W0(){let d=new Map;for(let e=0;e<K.length;e++){let b=K[e];if(b.type==="card"||b.state==="falling"||b.state==="dropping")continue;let y=Math.floor(b.x/R9),u=Math.floor(b.z/R9),s=A(y,u),p=d.get(s);if(!p)p=[],d.set(s,p);p.push(b)}for(let e=0;e<2;e++)for(let b=0;b<K.length;b++){let y=K[b];if(y.type==="card"||y.state==="falling"||y.state==="dropping")continue;let u=E(y.type),s=z(y.type),p=$0(y)-u,S=Math.floor(y.x/R9),S0=Math.floor(y.z/R9);for(let n0=-1;n0<=1;n0++)for(let s0=-1;s0<=1;s0++){let XJ=d.get(A(S+n0,S0+s0));if(!XJ)continue;for(let v=0;v<XJ.length;v++){let KJ=XJ[v];if(KJ===y)continue;let i0=z(KJ.type),j=KJ.x-y.x,F=KJ.z-y.z;if(Math.sqrt(j*j+F*F)>s+i0*0.95)continue;let P=E(KJ.type),h=KJ.y+P;if(h<y.y-u+0.02&&h>p)p=h}}let d0=p+u;if(y.y<d0-0.001){if(y.y=d0,y.vy<0)y.vy=0}}}function l(){for(let d=0;d<K.length;d++){let e=K[d];if(e.state==="dropping"||e.state==="falling")continue;let b=z(e.type),y=Math.max(0,(e.z-Q.backZ)/(Q.frontDropZ-Q.backZ)),u=Q.leftX+b+y*0.05,s=Q.rightX-b-y*0.05;if(e.x<u)e.x=u,e.vx=Math.abs(e.vx)*N8*0.5;if(e.x>s)e.x=s,e.vx=-Math.abs(e.vx)*N8*0.5;if(e.z<Q.backZ+b)e.z=Q.backZ+b,e.vz=Math.abs(e.vz)*N8;if(e.onShelf&&e.z<Q.shelfBackZ+b+0.03)e.z=Q.shelfBackZ+b+0.03,e.vz=Math.abs(e.vz)*N8;if(!e.onShelf&&e.z<Q.backZ+b)e.z=Q.backZ+b,e.vz=Math.abs(e.vz)*N8}}function n(d){let e=Q.shelfFrontZ,b=Q.shelfBackZ-0.5,y=Math.max(0,Q.shelfVelocity)*0.8;for(let u=0;u<K.length;u++){let s=K[u];if(s.onShelf||s.state!=="sliding"||s.type==="card")continue;if(s.z>b&&s.z<e+1.5){let p=e-s.z,S=Math.max(0,1-p/2);s.vz+=y*S*d}if(Q.shelfVelocity>0){let p=Q.shelfFrontZ,S=p+z(s.type)+0.02;if(s.z<S&&s.z>p-0.35){if(s.z+=Math.min(S-s.z,Q.shelfVelocity*d*2),s.vz<0.2)s.vz=0.2}}}}function m(d=1,e="coin"){if(K.length>=t7){let p=[];for(let S=0;S<K.length&&p.length<3;S++)if(K[S].type!=="card"&&K[S].state==="sliding")p.push(S);p.reverse().forEach((S)=>{W.remove(K[S].mesh),K.splice(S,1)})}let b=Q.dropX+(Math.random()-0.5)*0.08,y=Q.dropZ,u=Q.dropHeight,s=L(e,b,y,u,"falling");return s.y=u,s.vy=-0.2,s.vz=(Math.random()-0.5)*0.05+d*0.02,s.vx=(Math.random()-0.5)*0.05,s.spin=6+Math.random()*3,s._dropTime=performance.now(),s}function U0(){let d={win:{coins:0,dollars:0,cards:[]},hole:{coins:0,dollars:0,cards:[]}},e=[];for(let b=0;b<K.length;b++){let y=K[b],u=y.z>Q.frontDropZ&&y.y<Q.surfaceY-0.05;if(y.z>Q.winZ||u){let s=Q.getZoneType(y.x);if(y.type==="card")d[s].cards.push(y.mesh.userData.cardId);else if(y.type==="dollar")d[s].dollars++;else d[s].coins++;e.push(b)}}return e.reverse().forEach((b)=>{W.remove(K[b].mesh),K.splice(b,1)}),d}function E0(d,e){let y=d/4;for(let s=0;s<4;s++){for(let p=0;p<K.length;p++){let S=K[p];if(S.type==="card"||S.state==="floating")continue;if(S.state==="falling"){S.vy-=nZ*y,S.y+=S.vy*y,S.x+=S.vx*y,S.z+=S.vz*y;let S0=Math.abs(S.x)<Q.slotHalfWidth,d0=S.z>Q.slotBackZ&&S.z<Q.slotFrontZ,n0=!(S0&&d0),s0=E(S.type),XJ=Q.shelfSurfaceY+s0,v=Q.surfaceY+s0;if(n0&&S.y<=XJ){if(S.y=XJ,S.vy*=-iZ,Math.abs(S.vy)<=sZ)S.vy=0,S.vx*=0.5,S.vz*=0.5,S.state="sliding",S.onShelf=!0,S.mesh.rotation.x=0,S.mesh.rotation.z=0}else if(S.y<=v){if(S.y=v,S.vy*=-iZ,Math.abs(S.vy)<=sZ)S.vy=0,S.vx*=0.5,S.vz*=0.5,S.state="sliding",S.onShelf=!1,S.mesh.rotation.x=0,S.mesh.rotation.z=0}}if(S.state==="dropping"){if(S.vy-=nZ*y,S.x<Q.leftX+eJ)S.x=Q.leftX+eJ,S.vx=Math.abs(S.vx)*N8;if(S.x>Q.rightX-eJ)S.x=Q.rightX-eJ,S.vx=-Math.abs(S.vx)*N8;if(S.z>=Q.frontDropZ)S.vz+=4*y,S.vx*=0.98;else S.vx*=0.95,S.vz*=0.93;if(S.y+=S.vy*y,S.z+=S.vz*y,S.x+=S.vx*y,S.y<=Q.surfaceY+E(S.type)&&S.z<Q.frontDropZ){let S0=Q.surfaceY+E(S.type);if(S.z>Q.slopeStartZ&&S.z<Q.slopeEndZ){let d0=Math.max(0,Math.min(1,(S.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ)));S0=Q.surfaceY+E(S.type)-d0*Q.slopeDrop}S.y=S0,S.vy=0,S.vx*=0.3,S.vz*=0.3,S.state="sliding",S.onShelf=!1,S.mesh.rotation.x=0,S.mesh.rotation.z=0}}if(S.state==="sliding"){if(S.onShelf){let S0=Math.abs(S.x)<Q.slotHalfWidth,d0=S.z>Q.slotBackZ&&S.z<Q.slotFrontZ;if(performance.now()-(S._dropTime||0)<500||S0&&d0)S._slotTimer=(S._slotTimer||0)+y;else S.vz+=Q.shelfVelocity*y*1.5}if(S.x+=S.vx*y,S.z+=S.vz*y,S.vx*=cZ,S.vz*=cZ,Math.abs(S.vx)<0.001)S.vx=0;if(Math.abs(S.vz)<0.001)S.vz=0;if(S.onShelf){let S0=Q.shelfBackZ+eJ+0.03;if(S.z<S0)if(S.z=S0,Q.shelfVelocity>0)S.vz+=Q.shelfVelocity*0.6;else S.vz=0}if(S.onShelf){let S0=Q.shelfFrontZ-z(S.type);if(S.z>S0){if(S.state="dropping",S.onShelf=!1,S.vy=-0.1,S.vz<0.15)S.vz=0.15;i(S)}}if(S.onShelf){let S0=Math.abs(S.x)<Q.slotHalfWidth,d0=S.z>Q.slotBackZ&&S.z<Q.slotFrontZ;if(S0&&d0&&Q.shelfVelocity<-0.3&&(S._slotTimer||0)>0.3)S.onShelf=!1,S.state="falling",S.vy=-0.5,S._slotTimer=0}if(!S.onShelf&&S.z>Q.frontDropZ){if(S.state="dropping",S.vy=-0.3,S.vz<0.5)S.vz=0.5}if(!S.onShelf&&S.z>Q.slopeStartZ+z(S.type)*0.5&&S.z<Q.frontDropZ){if(Math.abs(S.y-(Q.surfaceY+E(S.type)))<0.15){let d0=Math.max(0,Math.min(1,(S.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ))),n0=2+d0*3;S.vz+=n0*y;let s0=Q.surfaceY+E(S.type)-d0*Q.slopeDrop;if(S.y<s0+0.01)S.y=s0}}}}J0(),W0(),l();for(let p=0;p<K.length;p++){let S=K[p];if(S.state==="sliding"&&S.type!=="card"){let S0=$0(S);if(S.y<S0)S.y=S0}}n(y);for(let p=0;p<K.length;p++){let S=K[p];if(S.type==="card"||S.state==="dropping")continue;if(S.state==="falling"){if(S.x<Q.leftX+eJ)S.x=Q.leftX+eJ,S.vx=Math.abs(S.vx)*N8;if(S.x>Q.rightX-eJ)S.x=Q.rightX-eJ,S.vx=-Math.abs(S.vx)*N8;if(S.z<Q.backZ+eJ)S.z=Q.backZ+eJ,S.vz=Math.abs(S.vz)*N8}if(S.state==="sliding"&&S.onShelf){let S0=z(S.type);if(S.x<Q.leftX+S0+0.06)S.x=Q.leftX+S0+0.06,S.vx=Math.abs(S.vx)*N8;if(S.x>Q.rightX-S0-0.06)S.x=Q.rightX-S0-0.06,S.vx=-Math.abs(S.vx)*N8}}}let u=performance.now();for(let s=0;s<K.length;s++){let p=K[s];if(p.type==="card"||p.state==="floating"){p.z+=p.vz*d,p.y=Q.shelfSurfaceY+0.12+Math.sin(u*0.001+p.x)*0.01,p.mesh.rotation.y+=d*0.5,p.mesh.position.set(p.x,p.y,p.z);continue}if(p.state==="falling")p.mesh.rotation.y+=d*p.spin,p.mesh.rotation.x=Math.sin(u*0.01+p.x)*0.1,p.mesh.rotation.z=Math.cos(u*0.01+p.z)*0.1;else if(p.state==="dropping")p.mesh.rotation.x+=d*1.8,p.mesh.rotation.z+=d*1.1;else if(p.state==="sliding"){let S=z(p.type);if(p.mesh.rotation.x+=p.vz*d/S,p.mesh.rotation.z-=p.vx*d/S,Math.sqrt(p.vx*p.vx+p.vz*p.vz)>0.05)p.mesh.rotation.y+=p.vz*0.06*d;p.mesh.rotation.y*=0.94}p.mesh.position.set(p.x,p.y,p.z)}F0(e),z0(d)}function F0(d){let e=K.filter((y)=>y.type!=="card").length,b=K.filter((y)=>y.type==="card").length;if(e<15&&K.length<t7-15){let y=15-e;for(let u=0;u<y;u++){let s=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),p="coin";if(Math.random()<0.12)p="dollar";else if(Math.random()<0.04&&b<MN){p="card";let d0=Q.shelfBackZ+0.5+Math.random()*(Q.shelfDepth*0.5),n0=L("card",s,d0);n0.vz=0.06+Math.random()*0.07;continue}let S=Q.shelfBackZ+0.2+Math.random()*(Q.shelfDepth*0.5),S0=L(p,s,S,Q.shelfSurfaceY+(p==="coin"?d9/2:ZQ/2),"sliding");S0.onShelf=!0}}}let e0=36,f0=new xJ(0.19,0.19,0.04,20),Q0=[],G0=(d)=>0.32-Math.max(0,d-Q.frontDropZ)*0.122;function w0(d,e,b){let y=Math.max(0,Math.min(Math.floor(d||0),12));for(let u=0;u<y;u++){if(Q0.length>=e0){let S=Q0.shift();W.remove(S.mesh)}let s=new D0(f0,M.coin[Math.floor(Math.random()*3)]);s.castShadow=!0,W.add(s);let p=Q.frontDropZ+1.6+Math.random()*0.5;Q0.push({mesh:s,t:0,dur:1+Math.random()*0.5,x0:e+Math.random()*(b-e),y0:1.3+Math.random()*0.25,z0:Q.frontDropZ+0.08,x1:Math.max(-3,Math.min(3,(Math.random()-0.5)*5.2)),z1:p,settleY:G0(p)+0.03+Math.random()*0.07,spin:6+Math.random()*8,phase:Math.random()*Math.PI*2,settled:!1})}}function z0(d){for(let e=Q0.length-1;e>=0;e--){let b=Q0[e];b.t+=d;let y=Math.min(1,b.t/b.dur);if(b.settled){b.mesh.position.set(b.x1,b.settleY+Math.sin(b.t*1.4+b.phase)*0.004,b.z1),b.mesh.rotation.y+=d*0.2;continue}let u=Math.min(1,y/0.45),s={x:b.x0,y:b.y0+0.35,z:b.z0},p={x:b.x0,y:G0(b.z0+0.1)+0.02,z:b.z0+0.1},S=1-u,S0=S*S*b.x0+2*S*u*s.x+u*u*p.x,d0=S*S*b.y0+2*S*u*s.y+u*u*p.y,n0=S*S*b.z0+2*S*u*s.z+u*u*p.z;if(y<0.45)b.mesh.position.set(S0,Math.max(d0,G0(n0)),n0);else{let s0=Math.min(1,(y-0.45)/0.55),XJ={x:(b.x0+b.x1)/2,y:G0((b.z0+b.z1)/2)+0.22,z:(b.z0+b.z1)/2},v=1-s0,KJ=v*v*p.x+2*v*s0*XJ.x+s0*s0*b.x1,i0=v*v*p.y+2*v*s0*XJ.y+s0*s0*b.settleY,j=v*v*p.z+2*v*s0*XJ.z+s0*s0*b.z1;if(b.mesh.position.set(KJ,Math.max(i0,G0(j)-0.01),j),y>=1)b.settled=!0}b.mesh.rotation.x+=d*b.spin*0.7,b.mesh.rotation.z+=d*b.spin}}return{initObjects:r,dropObject:m,collectFallen:U0,update:E0,clearObjects:c,group:W,spawnWinCoins:w0}}var LK={en:{coins:"coins",dollars:"dollars",total:"total",prestige:"prestige",coinsBtn:"Coins",dollarsBtn:"Dollars",dropCoin:"DROP COIN",dropDollar:"DROP BILL",dropSub:"SPACE to drop",costCoin:"-1 coin",costDollar:"-1 $",shop:"Shop",prestigeTab:"Prestige",shopTitle:"Upgrades",prestigePoints:"Prestige Points",prestigeSacrifice:"SACRIFICE PROGRESS",prestigeDesc:"Lose everything but gain permanent prestige points",pushPower:"Demon Push",pushPowerDesc:"Coins push with the force of the underworld",multiDrop:"Multi-Drop",multiDropDesc:"Drop multiple coins at once",autoDrop:"Auto Dealer",autoDropDesc:"A phantom dealer drops for you!",multiplier:"Devil Multiplier",multiplierDesc:"Multiplies all rewards by sacred fire",maxCoins:"Infinite Wallet",maxCoinsDesc:"Max coin capacity increased by spirits",regenSpeed:"Occult Regen",regenDesc:"Free coins arrive from beyond the grave",dollarMagnet:"Dollar Magnet",dollarMagnetDesc:"Multiplies your dollar earnings",luck:"Fortune's Favor",luckDesc:"WIN zones have a chance to roll bonus coins (2×–4×)",comboShield:"Combo Shield",comboShieldDesc:"Combo decays more slowly between drops",prestigeBoost:"Prestige Boost",prestigeBoostDesc:"Gain more prestige points per reset",level:"Lv.",max:"MAX",soulBonus:"Soul Pact",soulBonusDesc:"Start each life with +50% max coins",darkMultiplier:"Dark Multiplier",darkMultiplierDesc:"Permanent +1 reward multiplier per level",voidDollars:"Void Blessing",voidDollarsDesc:"Start with starting-game dollars",occultAuto:"Occult Auto-Drop",occultAutoDesc:"Auto-drop 2x faster (permanent)",saintGold:"Saint Blessing",saintGoldDesc:"Coin gains +4 per level (compounds with Dark Multiplier)",upgraded:"Upgraded! Lv.",notEnoughCoins:"Not enough coins!",notEnoughDollars:"Not enough dollars!",maxLevel:"Already max level!",prestigeUp:"Prestige up! Lv.",notEnoughPrestige:"Not enough prestige points",coinsEarned:"coins earned!",coinsLost:"coins lost to the void...",cardsLost:"card(s) lost!",comboText:"COMBO x",freeCoins:"free coins claimed!",prestigeGain:"PRESTIGE! +",prestigeTotal:" (Total: ",prestigeWait:"Earn more before prestiging (",prestigeCurrent:" pts current)",resetConfirm:"Reset all progress (except prestige)?",categoryEconomy:"⚙ ECONOMY",categoryPush:"⚒ PUSH",categoryCapacity:"\uD83E\uDEA3 CAPACITY",categoryLuck:"\uD83C\uDF40 LUCK",categoryCurrency:"\uD83D\uDCB1 CURRENCY",categoryMeta:"✨ META",buy:"BUY",buyMax:"BUY MAX",noFunds:"Out of Funds!",freeCoinsDesc:"The spirits of the casino offer you a second chance...",claimBonus:"CLAIM BONUS",nextDonation:"Next donation in ",help:"Help",wastedCoins:"coins wasted (max reached)",cardCollected:"Bonus card collected! #",cardBonus:"bonus reward!",milestone:"MILESTONE",milestoneReached:"Milestone reached! +",milestoneBonusSuffix:" free coins",milestone100:"First hundred",milestone500:"Half a grand",milestone1k:"Four digits",milestone5k:"Heavy wallet",milestone10k:"Ten thousand!",milestone50k:"Halfway to a fortune",milestone100k:"Six figures",milestone500k:"Half a million",milestone1m:"MILLIONAIRE",jackpot:"JACKPOT!",jackpotBonus:"Jackpot bonus: +",winStreak:"WIN STREAK",streakBroken:"Streak broken",statsTitle:"\uD83D\uDCCA LIFETIME RECORDS",statsPeakCoins:"Peak coins",statsPeakDollars:"Peak dollars",statsPeakCombo:"Peak combo",statsTotalDrops:"Total drops",statsJackpots:"JACKPOTS hit",statsMilestones:"Milestones cleared",statsBestStreak:"Best win streak",jackpotChance:"Jackpot's Favor",jackpotChanceDesc:"Increases the chance of hitting the JACKPOT!",goldenTouch:"Golden Touch",goldenTouchDesc:"Chance to double earned coin batches",gambleTitle:"⚡ RISK IT",gambleDesc:"Double or Nothing! 50/50 chance",gambleWin:"YOU WON!",gambleLose:"YOU LOST!",gambleGain:"Profit: +",gambleLoss:"Loss: -",gambleWager:"Wager:",gambleMax:"MAX",gambleHalf:"HALF",comboBig:"COMBO"},fr:{coins:"pieces",dollars:"dollars",total:"total",prestige:"prestige",coinsBtn:"Pieces",dollarsBtn:"Dollars",dropCoin:"LACHER PIECE",dropDollar:"LACHER BILLET",dropSub:"ESPACE pour drop",costCoin:"-1 piece",costDollar:"-1 $",shop:"Boutique",prestigeTab:"Prestige",shopTitle:"Ameliorations",prestigePoints:"Points de Prestige",prestigeSacrifice:"SACRIFIER LA PROGRESSION",prestigeDesc:"Perds tout mais gagne des points de prestige permanents",pushPower:"Poussee Demoniaque",pushPowerDesc:"Les pieces poussent avec la force des enfers",multiDrop:"Multi-Drop",multiDropDesc:"Lache plusieurs pieces physiques d'un coup",autoDrop:"Croupier Automatique",autoDropDesc:"Un croupier fantome drop pour toi !",multiplier:"Multiplicateur du Diable",multiplierDesc:"Multiplie toutes les recompenses par le feu sacre",maxCoins:"Portefeuille de l'Infini",maxCoinsDesc:"Capacite max augmente par les esprits",regenSpeed:"Regeneration Occulte",regenDesc:"Les pieces gratuites arrivent d'outre-tombe",dollarMagnet:"Aimant a Dollars",dollarMagnetDesc:"Multiplie tes gains en dollars",luck:"Faveur de la Fortune",luckDesc:"Les zones WIN ont une chance de donner un bonus (x2-x4)",comboShield:"Bouclier de Combo",comboShieldDesc:"Le combo s'estompe plus lentement entre les drops",prestigeBoost:"Gain de Prestige Accru",prestigeBoostDesc:"Gagne plus de points de prestige a chaque reset",level:"Niv.",max:"MAX",soulBonus:"Pacte des Ames",soulBonusDesc:"Commence chaque vie avec +50% de pieces max",darkMultiplier:"Multiplicateur Obscur",darkMultiplierDesc:"+1 multiplicateur de recompense permanent par niveau",voidDollars:"Benediction du Vide",voidDollarsDesc:"Commence avec des dollars d'entree de jeu",occultAuto:"Auto-Drop Occulte",occultAutoDesc:"Auto-drop 2x plus rapide (permanent)",saintGold:"Benediction des Saints",saintGoldDesc:"Gains de pieces +4 par niveau (se combine avec Multiplicateur Obscur)",upgraded:"Ameliore ! Niv.",notEnoughCoins:"Pas assez de pieces !",notEnoughDollars:"Pas assez de dollars !",maxLevel:"Deja max level !",prestigeUp:"Prestige up ! Niv.",notEnoughPrestige:"Pas assez de points de prestige",coinsEarned:"pieces gagnees !",coinsLost:"pieces perdues dans le vide...",cardsLost:"carte(s) perdue(s) !",comboText:"Combo x",freeCoins:"pieces gratuites !",prestigeGain:"PRESTIGE ! +",prestigeTotal:" (Total: ",prestigeWait:"Gagne plus avant de prestiger (",prestigeCurrent:" pts actuels)",resetConfirm:"Reinitialiser toute la progression (hors prestige) ?",categoryEconomy:"⚙ ECONOMIE",categoryPush:"⚒ POUSSEE",categoryCapacity:"\uD83E\uDEA3 CAPACITE",categoryLuck:"\uD83C\uDF40 CHANCE",categoryCurrency:"\uD83D\uDCB1 MONNAIE",categoryMeta:"✨ META",buy:"ACHETER",buyMax:"ACHETER MAX",noFunds:"Plus de fonds !",freeCoinsDesc:"Les esprits du casino t'offrent une seconde chance...",claimBonus:"RECLAMER LE BUTIN",nextDonation:"Prochain don dans ",help:"Aide",wastedCoins:"pieces gaspilees (max atteint)",cardCollected:"Carte bonus collectionnee ! #",cardBonus:"recompense bonus !",milestone:"JALON",milestoneReached:"Jalon atteint ! +",milestoneBonusSuffix:" pieces gratuites",milestone100:"Premiere centaine",milestone500:"Un demi-millier",milestone1k:"Quatre chiffres",milestone5k:"Portefeuille lourd",milestone10k:"Dix mille !",milestone50k:"A mi-chemin de la fortune",milestone100k:"Six chiffres",milestone500k:"Un demi-million",milestone1m:"MILLIONNAIRE",jackpot:"JACKPOT !",jackpotBonus:"Bonus jackpot : +",winStreak:"SERIE DE VICTOIRES",streakBroken:"Serie cassee",statsTitle:"\uD83D\uDCCA RECORDS A VIE",statsPeakCoins:"Pieces max",statsPeakDollars:"Dollars max",statsPeakCombo:"Combo max",statsTotalDrops:"Total de drops",statsJackpots:"JACKPOTS reussis",statsMilestones:"Jalons franchis",statsBestStreak:"Meilleure serie",jackpotChance:"Faveur du Jackpot",jackpotChanceDesc:"Augmente les chances de gagner le JACKPOT !",goldenTouch:"Touche Doree",goldenTouchDesc:"Chance de doubler les gains de pieces",gambleTitle:"⚡ RISQUE TOUT",gambleDesc:"Double ou Rien ! 50/50 de chance",gambleWin:"GAGNE !",gambleLose:"PERDU !",gambleGain:"Gain: +",gambleLoss:"Perte: -",gambleWager:"Mise:",gambleMax:"MAX",gambleHalf:"MOITIE",comboBig:"COMBO"}},YQ=localStorage.getItem("coinpusher_lang")||"en";function _0(J){return LK[YQ]&&LK[YQ][J]||LK.en[J]||J}function zK(){return YQ}function rZ(J){YQ=J,localStorage.setItem("coinpusher_lang",J)}var AJ=Object.freeze({ECONOMY:"economy",PUSH:"push",CAPACITY:"capacity",LUCK:"luck",CURRENCY:"currency",META:"meta"}),VN=[{id:"pushPower",nameKey:"pushPower",descKey:"pushPowerDesc",icon:"\uD83D\uDC80",baseCost:10,costMultiplier:1.45,maxLevel:20,effect:(J)=>1+J*0.3,category:AJ.PUSH},{id:"multiDrop",nameKey:"multiDrop",descKey:"multiDropDesc",icon:"\uD83C\uDFB0",baseCost:25,costMultiplier:1.55,maxLevel:10,effect:(J)=>1+J,category:AJ.ECONOMY},{id:"autoDrop",nameKey:"autoDrop",descKey:"autoDropDesc",icon:"\uD83C\uDCCF",baseCost:60,costMultiplier:1.7,maxLevel:12,effect:(J)=>J*0.5,category:AJ.ECONOMY},{id:"multiplier",nameKey:"multiplier",descKey:"multiplierDesc",icon:"♦️",baseCost:40,costMultiplier:1.85,maxLevel:25,effect:(J)=>1+J*0.4,category:AJ.ECONOMY},{id:"maxCoins",nameKey:"maxCoins",descKey:"maxCoinsDesc",icon:"\uD83E\uDE99",baseCost:15,costMultiplier:1.35,maxLevel:40,effect:(J)=>100+J*30,category:AJ.CAPACITY},{id:"regenSpeed",nameKey:"regenSpeed",descKey:"regenDesc",icon:"⏳",baseCost:20,costMultiplier:1.5,maxLevel:20,effect:(J)=>Math.max(1,30-J*1.4),category:AJ.CAPACITY},{id:"dollarMagnet",nameKey:"dollarMagnet",descKey:"dollarMagnetDesc",icon:"\uD83D\uDCB5",baseCost:80,costMultiplier:1.6,maxLevel:15,effect:(J)=>1+J*0.3,category:AJ.CURRENCY},{id:"luck",nameKey:"luck",descKey:"luckDesc",icon:"\uD83C\uDF40",baseCost:200,costMultiplier:1.9,maxLevel:10,effect:(J)=>J*0.05,category:AJ.LUCK},{id:"comboShield",nameKey:"comboShield",descKey:"comboShieldDesc",icon:"\uD83D\uDEE1️",baseCost:120,costMultiplier:1.7,maxLevel:8,effect:(J)=>Math.min(8,2.5+J*0.6),category:AJ.CAPACITY},{id:"prestigeBoost",nameKey:"prestigeBoost",descKey:"prestigeBoostDesc",icon:"\uD83C\uDF1F",baseCost:500,costMultiplier:2,maxLevel:10,effect:(J)=>1+J*0.3,category:AJ.META},{id:"jackpotChance",nameKey:"jackpotChance",descKey:"jackpotChanceDesc",icon:"\uD83C\uDFB0",baseCost:350,costMultiplier:2,maxLevel:10,effect:(J)=>0.02+J*0.005,category:AJ.LUCK},{id:"goldenTouch",nameKey:"goldenTouch",descKey:"goldenTouchDesc",icon:"\uD83E\uDD32",baseCost:500,costMultiplier:2.1,maxLevel:10,effect:(J)=>J*0.04,category:AJ.LUCK}],e8=VN.map((J)=>({...J,get name(){return _0(J.nameKey)},get desc(){return _0(J.descKey)}}));function e7(J,Q){return Math.floor(J.baseCost*Math.pow(J.costMultiplier,Q))}function oJ(J,Q){return J.effect(Q)}function tZ(J,Q,$,K=99){let W=[];for(let Z=0;Z<K;Z++){let X=Q+Z;if(X>=J.maxLevel)break;let Y=e7(J,X);if(Y>$)break;W.push(Y),$-=Y}return W}var eZ=[{id:"soulBonus",nameKey:"soulBonus",descKey:"soulBonusDesc",icon:"\uD83D\uDC9C",baseCost:1,costMultiplier:2,maxLevel:10,effect:(J)=>1+J*0.5},{id:"darkMultiplier",nameKey:"darkMultiplier",descKey:"darkMultiplierDesc",icon:"\uD83C\uDF19",baseCost:3,costMultiplier:2.5,maxLevel:8,effect:(J)=>1+J},{id:"voidDollars",nameKey:"voidDollars",descKey:"voidDollarsDesc",icon:"\uD83D\uDCB5",baseCost:2,costMultiplier:2,maxLevel:10,effect:(J)=>J*50},{id:"occultAuto",nameKey:"occultAuto",descKey:"occultAutoDesc",icon:"\uD83D\uDD2E",baseCost:5,costMultiplier:3,maxLevel:5,effect:(J)=>1+J*0.4},{id:"saintGold",nameKey:"saintGold",descKey:"saintGoldDesc",icon:"⭐",baseCost:8,costMultiplier:3,maxLevel:5,effect:(J)=>1+J*4}],HQ=eZ.map((J)=>({...J,get name(){return _0(J.nameKey)},get desc(){return _0(J.descKey)}}));function UQ(J,Q){return Math.floor(J.baseCost*Math.pow(J.costMultiplier,Q))}function JX(J,Q){return J.effect(Q)}function QX(J,Q){let $=J+Q*10;return Math.max(1,Math.floor(Math.sqrt($/50)))}function qQ(J){let Q={soulMultiplier:1,darkMultiplier:1,voidStartingDollars:0,occultSpeedBonus:1,saintMultiplier:1};if(!J.prestigeUpgrades)return Q;return eZ.forEach(($)=>{let K=J.prestigeUpgrades[$.id]||0;if(K>0){let W=JX($,K);switch($.id){case"soulBonus":Q.soulMultiplier=W;break;case"darkMultiplier":Q.darkMultiplier=W;break;case"voidDollars":Q.voidStartingDollars=W;break;case"occultAuto":Q.occultSpeedBonus=W;break;case"saintGold":Q.saintMultiplier=W;break}}}),Q}function G8(J){try{let Q={schemaVersion:2,coins:J.coins,dollars:J.dollars,maxDollars:J.maxDollars,totalEarned:J.totalEarned,totalEarnedLifetime:J.totalEarnedLifetime||J.totalEarned,totalDropped:J.totalDropped,totalDollarsEarned:J.totalDollarsEarned||0,activeCurrency:J.activeCurrency||"coins",autoDropEnabled:J.autoDropEnabled??!1,upgrades:{...J.upgrades},prestigePoints:J.prestigePoints,prestigeUpgrades:{...J.prestigeUpgrades},collectedCards:J.collectedCards||[],dropCount:J.dropCount||0,lastDropTime:J.lastDropTime||0,regenCooldown:typeof J.regenCooldown==="number"?J.regenCooldown:30,isGameOver:!!J.isGameOver,peakCoins:J.peakCoins||0,peakDollars:J.peakDollars||0,peakCombo:J.peakCombo||0,bestWinStreak:J.bestWinStreak||0,winStreak:J.winStreak||0,milestonesHit:Array.isArray(J.milestonesHit)?J.milestonesHit:[],jackpotsHit:J.jackpotsHit||0,gameTime:J.gameTime||0,lastSave:Date.now()};localStorage.setItem("coinpusher3d_save",JSON.stringify(Q))}catch(Q){console.warn("Save failed:",Q)}}function $X(){try{let J=localStorage.getItem("coinpusher3d_save");if(!J)return null;let Q=JSON.parse(J);if(typeof Q.coins!=="number"||typeof Q.totalEarned!=="number")return null;return Q}catch(J){return console.warn("Load failed:",J),null}}function KX(J){setInterval(()=>{if(J)G8(J)},1e4)}function WX(){localStorage.removeItem("coinpusher3d_save")}function ZX(){let J=$X(),Q=J?.prestigePoints||0,$=J?.prestigeUpgrades||{},K=qQ({prestigePoints:Q,prestigeUpgrades:$}),W=J?.upgrades||{},Z=W.maxCoins||0,X=oJ(e8[4],Z),H={coins:0,maxCoins:Math.floor(X*K.soulMultiplier),dollars:0,maxDollars:Math.max(10,K.voidStartingDollars||0),totalEarned:0,totalEarnedLifetime:0,totalDropped:0,totalDollarsEarned:0,upgrades:{},dropCount:0,lastDropTime:0,autoDropAccumulator:0,regenCooldown:30,_regenInitialized:!1,isGameOver:!1,gameTime:0,activeCurrency:J?.activeCurrency||"coins",autoDropEnabled:J?.autoDropEnabled??!1,prestigePoints:Q,prestigeUpgrades:{...$},collectedCards:J?.collectedCards||[],peakCoins:0,peakDollars:0,peakCombo:0,bestWinStreak:0,winStreak:0,milestonesHit:[],jackpotsHit:0};if(J){H.totalEarned=typeof J.totalEarned==="number"?J.totalEarned:0,H.totalEarnedLifetime=typeof J.totalEarnedLifetime==="number"?J.totalEarnedLifetime:H.totalEarned,H.totalDropped=typeof J.totalDropped==="number"?J.totalDropped:0,H.totalDollarsEarned=typeof J.totalDollarsEarned==="number"?J.totalDollarsEarned:0,H.upgrades=W,H.maxDollars=Math.max(10,J.maxDollars||0);let U=typeof J.coins==="number"?J.coins:80;H.coins=Math.min(Math.max(U,80),H.maxCoins);let D=typeof J.dollars==="number"?J.dollars:0;if(H.dollars=Math.min(Math.max(D,10),H.maxDollars),typeof J.dropCount==="number")H.dropCount=J.dropCount;if(typeof J.lastDropTime==="number")H.lastDropTime=J.lastDropTime;if(typeof J.regenCooldown==="number")H.regenCooldown=J.regenCooldown;if(typeof J.isGameOver==="boolean")H.isGameOver=J.isGameOver;if(typeof J.peakCoins==="number")H.peakCoins=J.peakCoins;if(typeof J.peakDollars==="number")H.peakDollars=J.peakDollars;if(typeof J.peakCombo==="number")H.peakCombo=J.peakCombo;if(typeof J.bestWinStreak==="number")H.bestWinStreak=J.bestWinStreak;if(typeof J.winStreak==="number")H.winStreak=J.winStreak;if(Array.isArray(J.milestonesHit))H.milestonesHit=J.milestonesHit;if(typeof J.jackpotsHit==="number")H.jackpotsHit=J.jackpotsHit;if(typeof J.gameTime==="number")H.gameTime=J.gameTime}else H.coins=80,H.dollars=10,H.maxDollars=10;return H}function XX(J,Q){if(J.coins<Q||Q<=0)return{success:!1,reason:"not_enough_coins"};let $=Math.random()<0.5;if($)J.coins+=Q;else J.coins-=Q;return J.totalDropped+=Q,{success:!0,win:$,wager:Q,newBalance:Math.floor(J.coins)}}function J8(J,Q){return J.upgrades[Q]||0}function J9(J){if(J._cachedStats&&J._cachedStatsKey!==void 0){let c=J._cachedStatsKey;if(c.upgradesRef===J.upgrades&&c.prestigeUpgradesRef===J.prestigeUpgrades&&c.activeCurrency===J.activeCurrency&&c.autoDropEnabled===J.autoDropEnabled)return J._cachedStats}let Q=(c)=>e8.find(($0)=>$0.id===c),$=J8(J,"pushPower"),K=J8(J,"multiDrop"),W=J8(J,"autoDrop"),Z=J8(J,"multiplier"),X=J8(J,"maxCoins"),Y=J8(J,"regenSpeed"),H=J8(J,"dollarMagnet"),U=J8(J,"prestigeBoost"),D=J8(J,"luck"),O=J8(J,"comboShield"),q=J8(J,"jackpotChance"),R=J8(J,"goldenTouch"),M=qQ(J),z=oJ(Q("pushPower"),$),E=oJ(Q("multiDrop"),K),N=oJ(Q("autoDrop"),W)*M.occultSpeedBonus,C=oJ(Q("multiplier"),Z)*M.darkMultiplier*M.saintMultiplier,A=Math.floor(oJ(Q("maxCoins"),X)*M.soulMultiplier),V=oJ(Q("regenSpeed"),Y),I=oJ(Q("dollarMagnet"),H),_=oJ(Q("prestigeBoost"),U),w=oJ(Q("luck"),D),k=oJ(Q("comboShield"),O),L=oJ(Q("jackpotChance"),q),r=oJ(Q("goldenTouch"),R),T={pushPower:z,coinsPerDrop:E,autoDropRate:N,rewardMultiplier:C,maxCoins:A,regenCooldown:V,dollarMultiplier:I,prestigeBoost:_,luckChance:w,comboWindow:k,jackpotChance:L,goldenTouch:r};return J._cachedStats=T,J._cachedStatsKey={upgradesRef:J.upgrades,prestigeUpgradesRef:J.prestigeUpgrades,activeCurrency:J.activeCurrency,autoDropEnabled:J.autoDropEnabled},T}function BN(J){return J9(J).comboWindow||2.5}function YX(J,Q){let $=J9(J);if(J.activeCurrency==="dollars")return LN(J,$,Q);let K=1;if(J.coins<K)return{success:!1,reason:"no_coins"};J.coins-=K,J.totalDropped+=K,J.dropCount++,J.lastDropTime=Date.now();let W=0;if(J.dropCount%10===0)W=1,J.coins=Math.min(J.coins+W,J.maxCoins);if(Q)Q({spent:K,earned:0,total:J.coins,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:$.pushPower,currency:"coins",coinsPerDrop:$.coinsPerDrop,comboBonus:W});return{success:!0,spent:K,earned:0,total:J.coins,stats:$}}function LN(J,Q,$){if(J.dollars<1)return{success:!1,reason:"no_dollars"};if(J.dollars-=1,J.totalDropped+=1,J.dropCount++,J.lastDropTime=Date.now(),$)$({spent:1,earned:0,total:J.dollars,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:Q.pushPower*0.8,currency:"dollars",coinsPerDrop:1,comboBonus:0});return{success:!0,spent:1,earned:0,total:J.dollars,stats:Q}}function HX(J,Q,$=1){let K=e8.find((Y)=>Y.id===Q);if(!K)return{success:!1,reason:"not_found"};let W=0,Z=null;for(let Y=0;Y<$;Y++){let H=J8(J,Q);if(H>=K.maxLevel){Z="max_level";break}let U=e7(K,H);if(J.coins<U){Z="not_enough_coins";break}J.coins-=U,J.upgrades[Q]=H+1,W++}if(W===0)return{success:!1,reason:Z||"not_enough_coins"};let X=J9(J);return J.maxCoins=X.maxCoins,G8(J),{success:!0,newLevel:J.upgrades[Q],levelsPurchased:W,stats:X}}function UX(J,Q){let $=HQ.find((Z)=>Z.id===Q);if(!$)return{success:!1,reason:"not_found"};let K=J.prestigeUpgrades[Q]||0;if(K>=$.maxLevel)return{success:!1,reason:"max_level"};let W=UQ($,K);if(J.prestigePoints<W)return{success:!1,reason:"not_enough_prestige"};return J.prestigePoints-=W,J.prestigeUpgrades[Q]=(J.prestigeUpgrades[Q]||0)+1,G8(J),{success:!0,newLevel:J.prestigeUpgrades[Q]}}function qX(J){let Q=J9(J),$=Math.max(5,Math.floor(J.totalEarnedLifetime/100));return J.coins=Math.min(J.coins+$,J.maxCoins),J.regenCooldown=Q.regenCooldown,J._regenInitialized=!1,$}function NX(J){let Q=J.totalEarnedLifetime||J.totalEarned,$=J.totalDollarsEarned||0,K=J.upgrades.prestigeBoost||0,W=K>0?oJ(e8[7],K):1,Z=QX(Q,$),X=Math.floor(Z*W);if(X<=J.prestigePoints)return{success:!1,reason:"no_gain",current:J.prestigePoints};if(Q<100&&$<10)return{success:!1,reason:"no_gain",current:J.prestigePoints};let Y=[...J.collectedCards||[]],H={...J.prestigeUpgrades};J.upgrades={},J.dropCount=0,J.lastDropTime=0,J.autoDropAccumulator=0,J.regenCooldown=30,J._regenInitialized=!1,J.isGameOver=!1,J.gameTime=0,J.totalEarned=0,J.totalDropped=0,J.totalDollarsEarned=0,J.prestigePoints=X,J.prestigeUpgrades=H,J.collectedCards=Y;let U=J.prestigeUpgrades.soulBonus||0,D=J.prestigeUpgrades.voidDollars||0;return J.maxCoins=Math.floor(oJ(e8[4],0)*qQ(J).soulMultiplier),J.coins=Math.min(Math.max(25,Math.floor(25*(1+U*0.5))),J.maxCoins),J.maxDollars=Math.max(10,D*50),J.dollars=J.maxDollars,G8(J),{success:!0,prestigePoints:X,gained:X}}function GX(J,Q,$){J.gameTime+=Q;let K=J9(J);if(J.autoDropEnabled&&K.autoDropRate>0){J.autoDropAccumulator+=K.autoDropRate*Q;while(J.autoDropAccumulator>=1&&J.coins>=1){J.autoDropAccumulator-=1;let Z=1;if(J.coins>=Z){if(J.coins-=Z,J.totalDropped+=Z,J.dropCount++,J.lastDropTime=Date.now(),$)$({spent:Z,earned:0,total:J.coins,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:K.pushPower*0.7,isAuto:!0,currency:"coins",coinsPerDrop:K.coinsPerDrop,comboBonus:0})}}}if(J.coins<=0&&J.dollars<=0){if(!J._regenInitialized)J.regenCooldown=K.regenCooldown,J._regenInitialized=!0;if(J.regenCooldown-=Q,J.regenCooldown<=0)J.regenCooldown=0,J.isGameOver=!0}else J.isGameOver=!1,J._regenInitialized=!1,J.regenCooldown=K.regenCooldown;let W=BN(J)*1000;if(Date.now()-J.lastDropTime>W&&J.dropCount>0){if(J._comboDecayAccum=(J._comboDecayAccum||0)+Q,J._comboDecayAccum>=1)J.dropCount=Math.max(0,J.dropCount-Math.floor(J._comboDecayAccum)),J._comboDecayAccum=J._comboDecayAccum%1}else J._comboDecayAccum=0;return J}var zN={drop:{freq:800,type:"sine",duration:0.08,slide:-200},win:{freq:1200,type:"sine",duration:0.15,slide:400},lose:{freq:300,type:"sawtooth",duration:0.2,slide:-100},upgrade:{freq:600,type:"square",duration:0.12,slide:300},prestige:{freq:900,type:"sine",duration:0.4,slide:600},jackpot:{freq:1320,type:"sine",duration:0.6,slide:880,gain:0.22},bigwin:{freq:880,type:"triangle",duration:0.35,slide:660,gain:0.2}};var J6=null,IK=(()=>{try{let J=localStorage.getItem("coinpusher_sound");return J===null?!0:J==="1"}catch(J){return!0}})();function FX(J){IK=!!J;try{localStorage.setItem("coinpusher_sound",J?"1":"0")}catch(Q){}}function OX(){return IK}function IN(){if(!IK)return null;if(!J6){let J=window.AudioContext||window.webkitAudioContext;if(!J)return null;J6=new J}if(J6.state==="suspended")J6.resume();return J6}function Q9(J){let Q=zN[J];if(!Q)return;let $=IN();if(!$)return;let K=$.createOscillator(),W=$.createGain();K.type=Q.type,K.frequency.setValueAtTime(Q.freq,$.currentTime),K.frequency.exponentialRampToValueAtTime(Math.max(50,Q.freq+Q.slide),$.currentTime+Q.duration),W.gain.setValueAtTime(Q.gain||0.15,$.currentTime),W.gain.exponentialRampToValueAtTime(0.001,$.currentTime+Q.duration),K.connect(W),W.connect($.destination),K.start(),K.stop($.currentTime+Q.duration)}function DX(J,Q){let $={coinsDisplay:document.getElementById("coins-display"),dollarsDisplay:document.getElementById("dollars-display"),totalEarned:document.getElementById("total-earned"),dropBtn:document.getElementById("drop-btn"),dropIcon:document.querySelector("#drop-btn .btn-icon"),dropText:document.querySelector("#drop-btn .btn-text"),dropSub:document.querySelector("#drop-btn .btn-sub"),upgradesList:document.getElementById("upgrades-list"),prestigeList:document.getElementById("prestige-upgrades-list"),shopView:document.getElementById("shop-view"),prestigeView:document.getElementById("prestige-view"),panelContent:document.getElementById("panel-content"),panelToggle:document.getElementById("panel-toggle"),panelTitle:document.getElementById("panel-title"),tabs:document.querySelectorAll(".tab-btn"),currencyBtns:document.querySelectorAll(".currency-btn"),freeModal:document.getElementById("free-coins-modal"),freeCoinsBtn:document.getElementById("free-coins-btn"),freeCooldown:document.getElementById("free-cooldown"),regenTimer:document.getElementById("regen-timer"),regenCountdown:document.getElementById("regen-countdown"),notifications:document.getElementById("notifications"),dropEffectLabel:document.getElementById("drop-effect-label"),resetBtn:document.getElementById("reset-btn"),prestigeBtn:document.getElementById("prestige-btn"),prestigeBadge:document.getElementById("prestige-badge"),prestigePointsDisplay:document.getElementById("prestige-points-display"),prestigePointsBig:document.getElementById("prestige-points-big"),prestigeProgressBar:document.getElementById("prestige-progress-bar"),prestigeProgressText:document.getElementById("prestige-progress-text"),prestigeProgressWrap:document.getElementById("prestige-progress-wrap"),collectedCards:document.getElementById("collected-cards"),cardsGrid:document.getElementById("cards-grid"),autoDropToggle:document.getElementById("auto-drop-toggle"),soundToggle:document.getElementById("sound-toggle"),langBtn:document.getElementById("lang-btn")},K=J.coins,W=J.dollars,Z=null,X="shop",Y=!1,H=OX();function U(j){if(j==="shop")return"\uD83D\uDED2 "+_0("shop");if(j==="prestige")return"\uD83D\uDC51 "+_0("prestigeTab");if(j==="settings")return"⚙ "+_0("help");return""}function D(j){if(j==="shop")return"\uD83D\uDED2 "+_0("shopTitle");if(j==="prestige")return"\uD83D\uDC51 "+_0("prestigeTab");return"⚙ "+_0("help")}function O(){if(!$.langBtn)return;$.langBtn.textContent=zK()==="en"?"FR":"EN"}function q(){rZ(zK()==="en"?"fr":"en"),O(),R(),i0.refresh(J)}function R(){document.querySelectorAll(".label").forEach((F)=>{if(F.dataset.key)F.textContent=_0(F.dataset.key)}),document.querySelectorAll(".currency-btn").forEach((F)=>{F.textContent=F.dataset.currency==="coins"?"\uD83E\uDE99 "+_0("coinsBtn"):"\uD83D\uDCB5 "+_0("dollarsBtn")}),E(),M(),I(),w()}function M(){if($.tabs.forEach((G)=>{G.textContent=U(G.dataset.tab)}),$.panelTitle)$.panelTitle.textContent=D(X);let j=document.querySelector(".prestige-sub");if(j)j.textContent="⭐ "+_0("prestigePoints");if($.prestigeBtn)$.prestigeBtn.textContent="\uD83D\uDD25 "+_0("prestigeSacrifice");let F=document.querySelector(".prestige-sub-desc");if(F)F.textContent=_0("prestigeDesc");if($.freeModal){let G=$.freeModal.querySelector("h2"),P=$.freeModal.querySelector("p");if(G)G.textContent="\uD83D\uDC80 "+_0("noFunds");if(P)P.textContent=_0("freeCoinsDesc");let h=$.freeCoinsBtn?.querySelector("span");if(h)h.textContent="\uD83C\uDF81 "+_0("claimBonus")}}function z(){let j=Math.floor(J.coins),F=Math.floor(J.dollars);if(j!==K){if($.coinsDisplay.textContent=j,j>K)$.coinsDisplay.classList.remove("pop"),$.coinsDisplay.offsetWidth,$.coinsDisplay.classList.add("pop");K=j}if(F!==W){if($.dollarsDisplay.textContent=F,F>W)$.dollarsDisplay.classList.remove("pop"),$.dollarsDisplay.offsetWidth,$.dollarsDisplay.classList.add("pop");W=F}if($.totalEarned.textContent=Math.floor(J.totalEarnedLifetime||J.totalEarned),J.prestigePoints>0){if($.prestigeBadge.classList.remove("hidden"),$.prestigePointsDisplay.textContent=J.prestigePoints,$.prestigePointsBig.textContent=J.prestigePoints,J.prestigePoints>=10)$.prestigeBadge.classList.add("prestige-high")}else $.prestigeBadge.classList.add("hidden")}function E(){let j=J.activeCurrency==="coins";$.currencyBtns.forEach((F)=>{F.classList.toggle("active",F.dataset.currency===J.activeCurrency),F.classList.toggle("dollar-mode",F.dataset.currency==="dollars")}),$.dropIcon.textContent=j?"\uD83E\uDE99":"\uD83D\uDCB5",$.dropText.textContent=j?_0("dropCoin"):_0("dropDollar"),$.dropSub.textContent=j?_0("costCoin"):_0("costDollar"),$.dropBtn.style.borderColor=j?"#ffd700":"#00ff88",$.dropBtn.style.color=j?"#fff4a3":"#00ff88"}function N(j){$.dropBtn.disabled=!j}function C(j){if(X=j,$.tabs.forEach((F)=>F.classList.toggle("active",F.dataset.tab===j)),$.shopView.classList.toggle("hidden",j!=="shop"),$.prestigeView.classList.toggle("hidden",j!=="prestige"),$.settingsView=$.settingsView||document.getElementById("settings-view"),$.settingsView)$.settingsView.classList.toggle("hidden",j!=="settings");if($.panelTitle.textContent=D(j),j==="prestige")$.prestigePointsBig.textContent=J.prestigePoints||0,w(),E0(),c()}function A(j,F){let G=j.effect(F);switch(j.id){case"pushPower":return"Push "+G.toFixed(2)+"x";case"multiDrop":return Math.floor(Math.max(1,G))+" coins/drop";case"autoDrop":return G.toFixed(2)+"/s";case"multiplier":return"x"+G.toFixed(2);case"maxCoins":return G+" max";case"regenSpeed":return G.toFixed(1)+"s";case"dollarMagnet":return"x"+G.toFixed(2);case"luck":return"+"+(G*100).toFixed(0)+"% chance";case"comboShield":return G.toFixed(1)+"s window";case"prestigeBoost":return"x"+G.toFixed(2);case"jackpotChance":return"+"+((G-0.02)*100).toFixed(1)+"% extra";case"goldenTouch":return(G*100).toFixed(0)+"% double";default:return""}}function V(){let j=[AJ.ECONOMY,AJ.PUSH,AJ.CAPACITY,AJ.LUCK,AJ.CURRENCY,AJ.META],F=[];return j.forEach((G)=>{e8.forEach((P)=>{if(P.category===G)F.push(P)})}),F}function I(){$.upgradesList.innerHTML="",[AJ.ECONOMY,AJ.PUSH,AJ.CAPACITY,AJ.LUCK,AJ.CURRENCY,AJ.META].forEach((F)=>{let G=e8.filter((Y0)=>Y0.category===F);if(G.length===0)return;let P=document.createElement("div");P.className="upgrade-category-header cat-"+F;let h="category"+F.charAt(0).toUpperCase()+F.slice(1);P.textContent="◆ "+_0(h),$.upgradesList.appendChild(P),G.forEach(_)})}function _(j){let F=J8(J,j.id),G=F>=j.maxLevel,P=e7(j,F),h=J.coins>=P,Y0=G?[]:tZ(j,F,J.coins),N0=Y0.length,k0=Y0.reduce((M0,X0)=>M0+X0,0),K0=N0>1,Z0=K0?"⇧ "+N0+" for \uD83E\uDE99"+k0.toLocaleString():null,R0=A(j,F),h0=G?"":A(j,F+1),B0=R0?'<div class="upgrade-effect">'+R0+(h0&&h0!==R0?' <span class="effect-arrow">→</span> <span class="effect-next">'+h0+"</span>":"")+"</div>":"",O0=Math.round(F/j.maxLevel*100),u0='<div class="upgrade-bar-wrap"><div class="upgrade-bar'+(G?" maxed":"")+'" style="width:'+O0+'%"></div></div>',x0=document.createElement("div"),qJ="upgrade-item cat-"+j.category+(G?" bought":"")+(h&&!G?" affordable":"");x0.className=qJ;let f=G?_0("max"):K0?'<span class="upgrade-cost-bulk">'+Z0+'</span><span class="upgrade-cost-single">\uD83E\uDE99'+P.toLocaleString()+"</span>":"\uD83E\uDE99"+P.toLocaleString();if(x0.innerHTML='<div class="upgrade-icon">'+j.icon+'</div><div class="upgrade-info"><div class="upgrade-name">'+j.name+'</div><div class="upgrade-desc">'+j.desc+"</div>"+B0+u0+'<div class="upgrade-level">'+_0("level")+" "+F+"/"+j.maxLevel+'</div></div><div class="upgrade-cost '+(h||G?"":"locked")+'">'+f+"</div>",!G)x0.style.cursor=h?"pointer":"not-allowed",x0.addEventListener("click",(M0)=>{let X0=M0.shiftKey?N0:1;if(Q.onBuyUpgrade)Q.onBuyUpgrade(j.id,X0)});$.upgradesList.appendChild(x0)}function w(){$.prestigeList.innerHTML="";let j=J.prestigePoints||0;HQ.forEach((F)=>{let G=J.prestigeUpgrades[F.id]||0,P=G>=F.maxLevel,h=UQ(F,G),Y0=j>=h,N0=document.createElement("div");if(N0.className="upgrade-item"+(P?" bought":""),N0.innerHTML='<div class="upgrade-icon">'+F.icon+'</div><div class="upgrade-info"><div class="upgrade-name">'+F.name+'</div><div class="upgrade-desc">'+F.desc+'</div><div class="upgrade-level">'+_0("level")+" "+G+"/"+F.maxLevel+'</div></div><div class="upgrade-cost prestige-cost '+(Y0||P?"":"locked")+'">'+(P?_0("max"):"\uD83D\uDC51"+h)+"</div>",!P)N0.style.cursor=Y0?"pointer":"not-allowed",N0.addEventListener("click",()=>{if(Q.onBuyPrestigeUpgrade)Q.onBuyPrestigeUpgrade(F.id)});$.prestigeList.appendChild(N0)})}function k(j,F="info"){let G=document.createElement("div");G.className="notification "+F,G.textContent=j,$.notifications.appendChild(G),setTimeout(()=>{if(G.parentNode)G.remove()},2500)}function L(j){let F=document.createElement("div");F.className="jackpot-banner",F.innerHTML='\uD83C\uDFB0 <span class="jackpot-text">'+_0("jackpot")+'</span> <span class="jackpot-bonus">+'+j+" \uD83E\uDE99</span>",document.body.appendChild(F),requestAnimationFrame(()=>F.classList.add("show"));let G=document.createElement("div");G.className="jackpot-burst";for(let P=0;P<10;P++){let h=document.createElement("div");h.className="jackpot-particle",h.textContent="\uD83E\uDE99",h.style.setProperty("--dx",(Math.random()-0.5)*400+"px"),h.style.setProperty("--dy",Math.random()*-200-60+"px"),h.style.animationDelay=Math.random()*0.2+"s",G.appendChild(h)}F.appendChild(G),setTimeout(()=>{F.classList.remove("show"),F.classList.add("hide"),setTimeout(()=>{if(F.parentNode)F.remove()},500)},2200)}function r(j,F){let G=document.createElement("div");G.className="milestone-banner",G.innerHTML='<div class="milestone-eyebrow">'+_0("milestone")+'</div><div class="milestone-title">'+_0(j.key)+'</div><div class="milestone-subtitle">'+j.value.toLocaleString()+" lifetime coins</div>"+(F>0?'<div class="milestone-bonus">+'+F+" \uD83E\uDE99 "+_0("milestoneBonusSuffix")+"</div>":""),document.body.appendChild(G),requestAnimationFrame(()=>G.classList.add("show")),setTimeout(()=>{G.classList.remove("show"),G.classList.add("hide"),setTimeout(()=>{if(G.parentNode)G.remove()},600)},3500)}function T(j,F,G){let P=document.getElementById("streak-chip");if(j<=2&&!G){if(P)P.classList.add("hidden");return}if(!P){P=document.createElement("div"),P.id="streak-chip",P.className="streak-chip hidden";let h=document.getElementById("drop-area");if(h)h.appendChild(P)}if(P.classList.remove("hidden"),G)P.classList.remove("streak-hot"),P.classList.add("streak-broken"),P.innerHTML="\uD83D\uDC94 "+_0("streakBroken")+" · best "+F,setTimeout(()=>{if(P)P.classList.remove("streak-broken"),P.classList.add("hidden")},1800);else P.classList.add("streak-hot"),P.classList.remove("streak-broken"),P.innerHTML="\uD83D\uDD25 "+_0("winStreak")+" <b>x"+j+"</b>"+(F>j?" · best "+F:"")}function c(){let j=document.getElementById("stats-panel"),F=$.prestigeView;if(!F)return;if(!j){j=document.createElement("div"),j.id="stats-panel",j.className="stats-panel";let h=$.prestigeList;if(h&&h.parentNode===F)F.insertBefore(j,h);else F.appendChild(j)}let G=Math.floor(J.totalEarnedLifetime||J.totalEarned||0),P=[[_0("statsTotalDrops"),Math.floor(J.totalDropped||0).toLocaleString()],[_0("statsPeakCoins"),Math.floor(J.peakCoins||0).toLocaleString()],[_0("statsPeakDollars"),Math.floor(J.peakDollars||0).toLocaleString()],[_0("statsPeakCombo"),"x"+(J.peakCombo||0)],[_0("statsBestStreak"),"x"+(J.bestWinStreak||0)],[_0("statsJackpots"),"\uD83C\uDFB0 "+(J.jackpotsHit||0)],[_0("statsMilestones"),"\uD83C\uDFC5 "+(J.milestonesHit||[]).length+"/9"],[_0("total"),G.toLocaleString()]];j.innerHTML='<div class="stats-title">'+_0("statsTitle")+"</div>"+P.map(([h,Y0])=>'<div class="stats-row"><span class="stats-key">'+h+'</span><span class="stats-val">'+Y0+"</span></div>").join("")}function $0(j,F,G){let P=document.createElement("div");P.className="floating-reward",P.textContent=j,P.style.left=F+"px",P.style.top=G+"px",document.body.appendChild(P),setTimeout(()=>{if(P.parentNode)P.remove()},1200)}function i(j){let F=$.dropBtn;if(j>5){if($.dropEffectLabel.textContent="\uD83D\uDD25 "+_0("comboText")+j+"!",$.dropEffectLabel.style.color="#ff2d95",$.dropEffectLabel.classList.remove("mega"),$.dropEffectLabel.classList.add("mega"),F)F.classList.add("combo-hot"),F.classList.remove("combo-warm")}else if(j>3){if($.dropEffectLabel.textContent="✨ x"+j,$.dropEffectLabel.style.color="#ffd700",$.dropEffectLabel.classList.remove("mega"),F)F.classList.add("combo-warm"),F.classList.remove("combo-hot")}else if(j>1){if($.dropEffectLabel.textContent="✨ x"+j,$.dropEffectLabel.style.color="#fff4a3",$.dropEffectLabel.classList.remove("mega"),F)F.classList.remove("combo-warm","combo-hot")}else if($.dropEffectLabel.textContent="",$.dropEffectLabel.classList.remove("mega"),F)F.classList.remove("combo-warm","combo-hot")}function J0(j=30){if(!$.freeModal.classList.contains("hidden"))return;$.freeModal.classList.remove("hidden");let F=Math.max(1,Math.ceil(j));if($.freeCooldown.textContent=F,$.freeCoinsBtn.disabled=!0,Z)clearInterval(Z);Z=setInterval(()=>{if(F--,$.freeCooldown.textContent=F,F<=0)clearInterval(Z),Z=null,$.freeCoinsBtn.disabled=!1},1000),$.freeCoinsBtn.onclick=()=>{if($.freeCoinsBtn.disabled)return;if(Q.onClaimFree)Q.onClaimFree();W0()}}function W0(){if($.freeModal.classList.add("hidden"),Z)clearInterval(Z),Z=null}function l(j){if(j>0)$.regenTimer.classList.remove("hidden"),$.regenCountdown.textContent=Math.ceil(j);else $.regenTimer.classList.add("hidden")}function n(j){let F=j.currency==="dollars"?"\uD83D\uDCB5":"\uD83E\uDE99";if(j.isAuto){if(j.earned>0)$0("\uD83E\uDD16 +"+j.earned+" "+F,window.innerWidth/2-40,window.innerHeight/2-50);return}if(j.earned>0){let G=$.dropBtn.getBoundingClientRect(),P="+"+j.earned+" "+F;if(j.earned>=5)P="\uD83C\uDF89 +"+j.earned+" "+F;if(j.isCombo)P="\uD83D\uDD25 "+_0("comboText")+j.comboCount+"! +"+j.earned+" "+F;$0(P,G.left+G.width/2-40,G.top-30)}if(j.isCombo&&j.comboCount>3)k("\uD83D\uDD25 "+_0("comboText")+j.comboCount+"!","success")}function m(j){let F=document.querySelector(".coins-wasted");if(F)F.remove();let G=document.createElement("div");G.className="coins-wasted",G.textContent="⚠️ +"+j+" "+_0("wastedCoins"),G.style.left=window.innerWidth/2-100+"px",G.style.top="120px",document.body.appendChild(G),setTimeout(()=>{if(G.parentNode)G.remove()},2200)}function U0(){if(!$.prestigeProgressBar||!$.prestigeProgressText)return;let j=100,F=Math.min(1,(J.totalEarnedLifetime||J.totalEarned||0)/j);$.prestigeProgressBar.style.width=F*100+"%",$.prestigeProgressText.textContent=Math.floor(J.totalEarnedLifetime||J.totalEarned||0)+" / "+j}function E0(){if(!$.cardsGrid)return;let j=J.collectedCards||[];if(j.length>0)$.collectedCards.classList.remove("hidden"),$.cardsGrid.innerHTML="",j.forEach((F,G)=>{let P=document.createElement("div");P.className="card-item",P.textContent="\uD83C\uDCCF "+(G+1),P.title=F,$.cardsGrid.appendChild(P)});else $.collectedCards.classList.add("hidden")}function F0(j,F,G,P){let h=document.createElement("div");h.className="zone-feedback "+F,h.textContent=j,h.style.left=G+"px",h.style.top=P+"px",document.body.appendChild(h),setTimeout(()=>{if(h.parentNode)h.remove()},1500)}function e0(j){let F=j>=2?"shake-hard":"shake-soft";document.body.classList.remove("shake-soft","shake-hard"),document.body.offsetWidth,document.body.classList.add(F)}function f0(j){z(),E(),I();let F=j.activeCurrency==="dollars"?j.dollars>=1:j.coins>=1;if(N(F),j.isGameOver)J0(j.regenCooldown);if($.autoDropToggle)$.autoDropToggle.checked=!!j.autoDropEnabled;if(i(j.dropCount),U0(),X==="prestige")$.prestigePointsBig.textContent=j.prestigePoints||0,w(),E0();let G=j.totalEarned>=100||j.totalDollarsEarned>=10;if($.prestigeBtn.disabled=!G,j.prestigePoints>0)$.prestigeBadge.classList.remove("hidden"),$.prestigePointsDisplay.textContent=j.prestigePoints}function Q0(){return Y}function G0(){return H}function w0(j){if(Y=!!j,J.autoDropEnabled=Y,$.autoDropToggle)$.autoDropToggle.checked=Y}function z0(j){if(H=!!j,FX(H),$.soundToggle)$.soundToggle.checked=H}let d="coinpusher_tutorial_dismissed";function e(){try{return localStorage.getItem(d)==="1"}catch(j){return!1}}function b(){let j=document.getElementById("tutorial-overlay");if(!j||j.classList.contains("hidden"))return;j.classList.add("hiding");try{localStorage.setItem(d,"1")}catch(F){}setTimeout(()=>{j.classList.add("hidden"),j.classList.remove("hiding")},350)}function y(){if(e())return;setTimeout(()=>{let j=document.getElementById("tutorial-overlay");if(!j)return;j.classList.remove("hidden"),j.addEventListener("click",b,{once:!0})},700)}if($.dropBtn.addEventListener("click",()=>{if(Q.onDrop)Q.onDrop();b()}),document.addEventListener("keydown",(j)=>{let F=j.target;if(F&&(F.tagName==="INPUT"||F.tagName==="TEXTAREA"))return;if(j.code==="Space"&&!j.repeat){if(j.preventDefault(),b(),Q.onDrop)Q.onDrop()}}),$.currencyBtns.forEach((j)=>{j.addEventListener("click",()=>{if(Q.onCurrencySwitch)Q.onCurrencySwitch(j.dataset.currency)})}),$.tabs.forEach((j)=>{j.addEventListener("click",()=>C(j.dataset.tab))}),$.panelToggle.addEventListener("click",()=>{$.panelContent.classList.toggle("collapsed"),$.panelToggle.classList.toggle("collapsed")}),$.resetBtn)$.resetBtn.addEventListener("click",()=>{if(Q.onReset)Q.onReset()});if($.prestigeBtn)$.prestigeBtn.addEventListener("click",()=>{if(Q.onPrestige)Q.onPrestige()});if($.langBtn)$.langBtn.addEventListener("click",q);if($.autoDropToggle)$.autoDropToggle.addEventListener("change",(j)=>{Y=j.target.checked,J.autoDropEnabled=Y});if($.soundToggle)$.soundToggle.addEventListener("change",(j)=>{H=j.target.checked,z0(H)});if(document.addEventListener("keydown",(j)=>{let F=j.target;if(F&&(F.tagName==="INPUT"||F.tagName==="TEXTAREA"))return;if(b(),j.code==="Tab"&&!j.repeat&&i0.isPrestigeReady&&i0.isPrestigeReady()){if(j.preventDefault(),Q.onPrestige)Q.onPrestige();return}let G=V();if(j.key>="1"&&j.key<="9"){let P=parseInt(j.key)-1;if(P<G.length&&Q.onBuyUpgrade)Q.onBuyUpgrade(G[P].id)}else if(j.key==="0"){if(9<G.length&&Q.onBuyUpgrade)Q.onBuyUpgrade(G[9].id)}}),$.soundToggle)$.soundToggle.checked=H;O(),R(),y();let u=f0;function s(j){u(j),i0.isPrestigeReady=()=>!!(j&&(j.totalEarned>=100||j.totalDollarsEarned>=10))}function p(j=20){let F=document.getElementById("coin-rain-container");if(!F)F=document.createElement("div"),F.id="coin-rain-container",document.body.appendChild(F);let G=["\uD83E\uDE99","\uD83D\uDCB0","⭐","✨","\uD83E\uDE99"];for(let P=0;P<j;P++){let h=document.createElement("div");h.className="coin-rain-particle",h.textContent=G[Math.floor(Math.random()*G.length)],h.style.left=Math.random()*100+"%",h.style.fontSize=16+Math.random()*18+"px",h.style.animationDuration=1.5+Math.random()*2+"s",h.style.animationDelay=Math.random()*0.8+"s",F.appendChild(h),setTimeout(()=>{if(h.parentNode)h.remove()},4000)}}function S(){let j=document.createElement("div");j.className="upgrade-flash",document.body.appendChild(j),setTimeout(()=>{if(j.parentNode)j.remove()},700)}let S0=null;function d0(){if(!S0)S0=document.createElement("div"),S0.className="gamble-btn-container",S0.id="gamble-section";let j=$.shopView;if(j&&!S0.parentNode){let R0=$.upgradesList;if(R0&&R0.parentNode===j)R0.after(S0);else j.appendChild(S0)}let F=Math.floor(J.coins),G=F>=1,P=Math.max(1,Math.min(F,n0||F)),h=_0("gambleMax"),Y0=_0("gambleHalf");S0.innerHTML=`
      <button class="gamble-btn" id="gamble-btn" ${G?"":"disabled"}>
        \uD83C\uDFB2 ${_0("gambleTitle")}
      </button>
      <div style="font-size:11px;color:var(--text-dim);margin-top:2px;">${_0("gambleDesc")}</div>
      <div class="gamble-controls">
        <button class="gamble-wager-btn" id="gamble-half-btn" ${G?"":"disabled"}>½ ${Y0}</button>
        <input type="number" class="gamble-wager-input" id="gamble-wager"
          value="${Math.min(P,F)}" min="1" max="${Math.max(1,F)}" ${G?"":"disabled"}>
        <button class="gamble-wager-btn" id="gamble-max-btn" ${G?"":"disabled"}>${h}</button>
      </div>
    `;let N0=S0.querySelector("#gamble-btn"),k0=S0.querySelector("#gamble-wager"),K0=S0.querySelector("#gamble-half-btn"),Z0=S0.querySelector("#gamble-max-btn");if(N0)N0.addEventListener("click",()=>{let R0=parseInt(k0?.value||1);if(R0>0&&Q.onGamble)Q.onGamble(R0)});if(K0)K0.addEventListener("click",()=>{let R0=Math.max(1,Math.floor(F/2));if(k0)k0.value=R0;n0=R0});if(Z0)Z0.addEventListener("click",()=>{if(k0)k0.value=F;n0=F});if(k0)k0.addEventListener("change",()=>{let R0=parseInt(k0.value)||1;n0=Math.max(1,Math.min(R0,F)),k0.value=n0})}let n0=10;function s0(){if(S0&&S0.parentNode)d0()}function XJ(j){let F=document.createElement("div");F.className="gamble-result-overlay";let G=document.createElement("div");G.className="gamble-result-card "+(j.win?"win":"lose");let P=j.win?"\uD83C\uDF89":"\uD83D\uDC80",h=j.win?_0("gambleWin"):_0("gambleLose"),Y0=j.win?"+"+j.wager:"-"+j.wager;if(G.innerHTML=`
      <div class="gamble-result-title">${P} ${h}</div>
      <div class="gamble-result-amount">${Y0} \uD83E\uDE99</div>
    `,F.appendChild(G),document.body.appendChild(F),j.win)p(30);setTimeout(()=>{F.style.transition="opacity 0.3s",F.style.opacity="0",setTimeout(()=>{if(F.parentNode)F.remove()},350)},1400)}let v=s;function KJ(j){v(j),s0()}let i0={updateHUD:z,updateDropButton:N,renderUpgrades:I,renderPrestigeUpgrades:w,showNotification:k,showFloatingReward:$0,showJackpot:L,showMilestone:r,updateStreak:T,renderStatsPanel:c,showDropResult:n,showFreeModal:J0,hideFreeModal:W0,updateRegenTimer:l,updateCombo:i,refresh:KJ,switchTab:C,updateCurrencyUI:E,showCoinsWasted:m,showZoneFeedback:F0,renderPrestigeProgress:U0,renderCollectedCards:E0,isAutoDropEnabled:Q0,isSoundEnabled:G0,setAutoDropEnabled:w0,setSoundEnabled:z0,isPrestigeReady:()=>!1,dismissTutorial:b,screenShake:e0,showCoinRain:p,showUpgradeFlash:S,renderGambleUI:d0,showGambleResult:XJ};return i0}var PN=document.getElementById("canvas-container"),RX=dZ(PN);if(!RX)throw console.warn("Aborting game init: WebGL unavailable."),Error("WebGL unavailable");var{scene:NQ,camera:AN,renderer:_N,controls:wN,updateFlames:CN,updateAmbient:TN}=RX,V8=uZ(NQ),q0=ZX(),SN=(q0.collectedCards||[]).length,u9=aZ(NQ,V8,SN);function jN(){if(!YX(q0,(Q)=>{let $=Q.currency==="dollars"?"dollar":"coin",K=Math.max(1,Math.floor(Q.coinsPerDrop||1));for(let W=0;W<K;W++)setTimeout(()=>u9.dropObject(Q.pushForce,$),W*50);if(Q.comboBonus>0)c0.showNotification("\uD83D\uDD25 Combo bonus +"+Q.comboBonus+" coin!","success");c0.showDropResult(Q),c0.updateCombo(Q.comboCount),Q9("drop")}).success){let $=(q0.activeCurrency==="dollars"?"\uD83D\uDCB5":"\uD83E\uDE99")+" "+_0(q0.activeCurrency==="dollars"?"notEnoughDollars":"notEnoughCoins");if(c0.showNotification($,"danger"),q0.activeCurrency==="coins"&&q0.coins<=0&&q0.dollars<=0){if(!q0._regenInitialized)q0.regenCooldown=J9(q0).regenCooldown,q0._regenInitialized=!0;q0.isGameOver=!0}}c0.refresh(q0),G8(q0)}function yN(J,Q=1){let $=HX(q0,J,Q);if($.success){let K=$.levelsPurchased>1?"⬆️ "+_0("upgraded")+$.newLevel+" (+"+$.levelsPurchased+")":"⬆️ "+_0("upgraded")+$.newLevel;c0.showNotification(K,"success"),c0.showUpgradeFlash(),c0.refresh(q0),G8(q0),Q9("upgrade")}else if($.reason==="not_enough_coins")c0.showNotification("\uD83E\uDE99 "+_0("notEnoughCoins"),"danger");else if($.reason==="max_level")c0.showNotification("⭐ "+_0("maxLevel"),"info")}function vN(J){let Q=UX(q0,J);if(Q.success)c0.showNotification("\uD83D\uDC51 "+_0("prestigeUp")+Q.newLevel,"prestige"),c0.refresh(q0),G8(q0),Q9("upgrade");else if(Q.reason==="not_enough_prestige")c0.showNotification(_0("notEnoughPrestige"),"danger");else if(Q.reason==="max_level")c0.showNotification("⭐ "+_0("maxLevel"),"info")}function hN(){let J=qX(q0);c0.showNotification("\uD83C\uDF81 +"+J+" "+_0("freeCoins"),"success"),q0.isGameOver=!1,c0.hideFreeModal(),c0.refresh(q0),G8(q0)}function bN(J){q0.activeCurrency=J,c0.updateCurrencyUI(),c0.updateDropButton(J==="coins"?q0.coins>=1:q0.dollars>=1)}function fN(){let J=NX(q0);if(J.success)c0.showNotification("\uD83C\uDF1F "+_0("prestigeGain")+J.gained+_0("prestigeTotal")+J.prestigePoints+")","prestige"),u9.initObjects(20,3),c0.refresh(q0),c0.switchTab("prestige"),G8(q0),Q9("prestige");else if(J.reason==="no_gain")c0.showNotification(_0("prestigeWait")+J.current+_0("prestigeCurrent"),"info")}function xN(){if(confirm(_0("resetConfirm")))WX(),location.reload()}function gN(J){let Q=XX(q0,J);if(Q.success)c0.showGambleResult(Q),c0.refresh(q0),G8(q0),Q9(Q.win?"win":"lose");else c0.showNotification("\uD83E\uDE99 "+_0("notEnoughCoins"),"danger")}var c0=DX(q0,{onDrop:jN,onBuyUpgrade:yN,onBuyPrestigeUpgrade:vN,onClaimFree:hN,onReset:xN,onPrestige:fN,onCurrencySwitch:bN,onGamble:gN});c0.renderGambleUI();var Q6=(()=>{let Q=new SJ,$=new Float32Array(600),K=new Float32Array(600),W=new Float32Array(600),Z=new Float32Array(200);for(let O=0;O<200;O++)$[O*3]=0,$[O*3+1]=-10,$[O*3+2]=0,K[O*3]=0.6+Math.random()*0.4,K[O*3+1]=0.2+Math.random()*0.3,K[O*3+2]=0.6+Math.random()*0.4,Z[O]=0;Q.setAttribute("position",new dJ($,3)),Q.setAttribute("color",new dJ(K,3));let X=new h9({size:0.04,vertexColors:!0,transparent:!0,opacity:0.7,blending:o8}),Y=new E7(Q,X);NQ.add(Y);let H=0;function U(O,q,R,M=10){let z=Q.attributes.position.array;for(let E=0;E<Math.min(M,200);E++){let N=(H+E)%200;z[N*3]=O+(Math.random()-0.5)*0.6,z[N*3+1]=q+(Math.random()-0.5)*0.6,z[N*3+2]=R+(Math.random()-0.5)*0.6,W[N*3]=(Math.random()-0.5)*2,W[N*3+1]=Math.random()*3+1,W[N*3+2]=(Math.random()-0.5)*2,Z[N]=1+Math.random()}H=(H+M)%200,Q.attributes.position.needsUpdate=!0}function D(O){let q=Q.attributes.position.array,R=!1;for(let M=0;M<200;M++)if(Z[M]>0){if(Z[M]-=O,q[M*3]+=W[M*3]*O,q[M*3+1]+=W[M*3+1]*O,q[M*3+2]+=W[M*3+2]*O,W[M*3+1]-=4*O,R=!0,Z[M]<=0)q[M*3+1]=-10}if(R)Q.attributes.position.needsUpdate=!0}return{emit:U,update:D}})();KX(q0);u9.initObjects(20,5);c0.refresh(q0);var EX=performance.now(),PK=0,pN=[{value:100,key:"milestone100"},{value:500,key:"milestone500"},{value:1000,key:"milestone1k"},{value:5000,key:"milestone5k"},{value:1e4,key:"milestone10k"},{value:50000,key:"milestone50k"},{value:1e5,key:"milestone100k"},{value:500000,key:"milestone500k"},{value:1e6,key:"milestone1m"}];function mN(J,Q){let $=J.milestonesHit||[];for(let K of pN)if(Q>=K.value&&!$.includes(K.value))return K;return null}function dN(J){if(J.coins>(J.peakCoins||0))J.peakCoins=Math.floor(J.coins);if(J.dollars>(J.peakDollars||0))J.peakDollars=Math.floor(J.dollars);if(J.dropCount>(J.peakCombo||0))J.peakCombo=J.dropCount}function kX(J){requestAnimationFrame(kX);let Q=Math.min((J-EX)/1000,0.05);if(EX=J,GX(q0,Q,($)=>{let K=$.currency==="dollars"?"dollar":"coin",W=Math.max(1,Math.floor($.coinsPerDrop||1));for(let Z=0;Z<W;Z++)setTimeout(()=>u9.dropObject($.pushForce,K),Z*50);c0.showDropResult($),c0.updateCombo($.comboCount)}),PK+=Q,PK>0.5){PK=0;let $=u9.collectFallen(),K=J9(q0),W=Math.floor($.win.coins*K.rewardMultiplier),Z=Math.floor($.win.dollars*K.dollarMultiplier),X=$.hole.coins,Y=$.hole.dollars;if(W>0||Z>0||$.win.cards.length>0){let H=0,U=Math.max(0,Math.min(1,K.luckChance||0));if(U>0&&$.win.coins>0){for(let V=0;V<$.win.coins;V++)if(Math.random()<U){let I=Math.random()<0.6?2:Math.random()<0.85?3:4;H+=I-1}}let D=0;if(U>0&&$.win.cards.length>0){for(let V=0;V<$.win.cards.length;V++)if(Math.random()<U)D+=5}let O=W+H+D,q=1,R=K.goldenTouch||0;if(R>0&&Math.random()<R&&O>0)q=2,c0.showNotification("\uD83E\uDD32 GOLDEN TOUCH! Double coins!","prestige"),c0.showZoneFeedback("×2 GOLDEN!","win",window.innerWidth/2,window.innerHeight/2+120);let M=O*q,z=Math.min(M,q0.maxCoins-q0.coins),E=M-Math.max(0,z);if(q0.coins+=Math.max(0,z),q0.totalEarned+=Math.max(0,z),q0.totalEarnedLifetime=(q0.totalEarnedLifetime||0)+Math.max(0,z),Z>0){let V=Math.min(Z,q0.maxDollars-q0.dollars);q0.dollars+=Math.max(0,V),q0.totalDollarsEarned=(q0.totalDollarsEarned||0)+Math.max(0,V)}if(H>1)c0.showNotification("\uD83C\uDF40 Lucky bonus +"+H+" !","prestige");if(E>0&&q0.coins>=q0.maxCoins)c0.showCoinsWasted(E);Q6.emit(0,V8.height+0.3,V8.frontDropZ+0.3,(W+Z+$.win.cards.length)*5);let N=W+Z+$.win.cards.length;if(N>0)u9.spawnWinCoins(N,V8.leftX+1,V8.rightX-1);if(z>0){if(c0.showNotification("\uD83C\uDF89 +"+z+" "+_0("coinsEarned"),"success"),Q9(z>=5?"bigwin":"win"),c0.showZoneFeedback("+"+z,"win",window.innerWidth/2+(Math.random()-0.5)*100,window.innerHeight/2+80),z>=10)c0.screenShake(2);else if(z>=3)c0.screenShake(1)}let C=K.jackpotChance||0.02;if(z>0&&Math.random()<C){let V=Math.random(),I=V<0.7?25:V<0.95?50:100;c0.showJackpot(I),c0.screenShake(2),Q9("jackpot"),c0.showCoinRain(35),Q6.emit(0,V8.height+0.6,V8.frontDropZ+0.5,60),q0.coins=Math.min(q0.coins+I,q0.maxCoins),q0.totalEarned+=I,q0.totalEarnedLifetime=(q0.totalEarnedLifetime||q0.totalEarned)+I,q0.jackpotsHit=(q0.jackpotsHit||0)+1}let A=0;while(A++<4){let V=mN(q0,q0.totalEarnedLifetime||0);if(!V)break;q0.milestonesHit.push(V.value);let I=Math.floor(V.value*0.05);if(I>0)q0.coins=Math.min(q0.coins+I,q0.maxCoins),q0.totalEarned+=I,q0.totalEarnedLifetime=(q0.totalEarnedLifetime||q0.totalEarned)+I;c0.showMilestone(V,I),c0.showCoinRain(15),Q6.emit(0,V8.height+0.5,V8.frontDropZ+0.4,25)}if($.win.cards.length>0){if(!q0.collectedCards)q0.collectedCards=[];$.win.cards.forEach((V)=>{if(!q0.collectedCards.includes(V)){q0.collectedCards.push(V),c0.showNotification("\uD83C\uDCCF "+_0("cardCollected")+q0.collectedCards.length,"prestige");let I=10;q0.coins=Math.min(q0.coins+I,q0.maxCoins),q0.totalEarned+=I,q0.totalEarnedLifetime=(q0.totalEarnedLifetime||q0.totalEarned)+I}})}}if(X>0||Y>0||$.hole.cards.length>0){if(Q6.emit(0,V8.height+0.3,V8.frontDropZ+0.3,(X+Y+$.hole.cards.length)*3),X>1){if(c0.showNotification("\uD83D\uDC80 "+X+" "+_0("coinsLost"),"danger"),Q9("lose"),c0.showZoneFeedback("-"+X,"hole",window.innerWidth/2+(Math.random()-0.5)*100,window.innerHeight/2+80),X>=3)c0.screenShake(1)}if(Y>0)c0.showNotification("\uD83D\uDC80 "+Y+" $ "+_0("coinsLost"),"danger");if($.hole.cards.length>0)c0.showNotification("\uD83D\uDC94 "+$.hole.cards.length+" "+_0("cardsLost"),"danger")}if(X>0){if(q0.winStreak>0)q0.bestWinStreak=Math.max(q0.bestWinStreak||0,q0.winStreak);q0.winStreak=0,c0.updateStreak(0,q0.bestWinStreak||0,!0)}else if(W>0||Z>0){if(q0.winStreak=(q0.winStreak||0)+1,q0.winStreak>(q0.bestWinStreak||0))q0.bestWinStreak=q0.winStreak;c0.updateStreak(q0.winStreak,q0.bestWinStreak||0,!1)}dN(q0)}if(V8.updateMechanism(J/1000),u9.update(Q,J/1000),Q6.update(Q),CN(J/1000),TN(J/1000),c0.updateHUD(),q0.coins<=0&&q0.dollars<=0&&q0.regenCooldown>0)c0.updateRegenTimer(q0.regenCooldown);else if(q0.isGameOver)c0.showFreeModal(Math.max(1,q0.regenCooldown));else c0.hideFreeModal();wN.update(),_N.render(NQ,AN)}kX(performance.now());window.addEventListener("beforeunload",()=>G8(q0));console.log("\uD83C\uDCCF COIN PUSHER CASINO OCCULT loaded!");console.log("\uD83C\uDFAE SPACE=drop, 1-9,0=upgrades, TAB=prestige");
