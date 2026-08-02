var JW="185",F9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},O9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},QW=0,dQ=1,$W=2;var y9=1,KW=2,F7=3,O7=0,iJ=1,PJ=2,b8=0,m7=1,f8=2,uQ=3,lQ=4,WW=5;var D7=100,ZW=101,XW=102,YW=103,HW=104,UW=200,qW=201,NW=202,GW=203,FW=204,OW=205,DW=206,EW=207,RW=208,kW=209,MW=210,VW=211,BW=212,LW=213,zW=214,IW=0,PW=1,AW=2,cQ=3,_W=4,wW=5,CW=6,TW=7,SW=0,jW=1,yW=2,S8=0,nQ=1,sQ=2,iQ=3,d7=4,oQ=5,aQ=6,rQ=7;var E7=301,v9=302,S6=303,j6=304,u7=306,l7=1000,y6=1001,vW=1002,D9=1003,hW=1004;var c7=1005;var Y8=1006,v6=1007;var h9=1008;var j8=1009,bW=1010,fW=1011,n7=1012,tQ=1013,E9=1014,e8=1015,J9=1016,eQ=1017,J$=1018,R7=1020,xW=35902,gW=35899,pW=1021,mW=1022,x8=1023,b9=1026,f9=1027,dW=1028,Q$=1029,x9=1030,$$=1031;var K$=1033,h6=33776,b6=33777,f6=33778,x6=33779,W$=35840,Z$=35841,X$=35842,Y$=35843,H$=36196,U$=37492,q$=37496,N$=37488,G$=37489,g6=37490,F$=37491,O$=37808,D$=37809,E$=37810,R$=37811,k$=37812,M$=37813,V$=37814,B$=37815,L$=37816,z$=37817,I$=37818,P$=37819,A$=37820,_$=37821,w$=36492,C$=36494,T$=36495,S$=36283,j$=36284,p6=36285,y$=36286;var v$=0,uW=1,g9="",g8="srgb",h$="srgb-linear",b$="linear",LJ="srgb";var lW=512,cW=513,nW=514,m6=515,sW=516,iW=517,d6=518,oW=519;var f$="300 es",x$=2000;function zX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function IX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function p7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function aW(){let J=p7("canvas");return J.style.display="block",J}var SK={},G7=null;function g$(...J){let Q="THREE."+J.shift();if(G7)G7("log",Q,...J);else console.log(Q,...J)}function rW(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function o0(...J){J=rW(J);let Q="THREE."+J.shift();if(G7)G7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function a0(...J){J=rW(J);let Q="THREE."+J.shift();if(G7)G7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function S9(...J){let Q=J.join(" ");if(Q in SK)return;SK[Q]=!0,o0(...J)}function tW(J,Q,$){return new Promise(function(K,W){function Z(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(Z,$);break;default:K()}}setTimeout(Z,$)})}var eW={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class p8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let K=$[J];if(K!==void 0){let W=K.indexOf(Q);if(W!==-1)K.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let K=$.slice(0);for(let W=0,Z=K.length;W<Z;W++)K[W].call(this,J);J.target=null}}}var nJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jK=1234567,x7=Math.PI/180,j9=180/Math.PI;function k7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(nJ[J&255]+nJ[J>>8&255]+nJ[J>>16&255]+nJ[J>>24&255]+"-"+nJ[Q&255]+nJ[Q>>8&255]+"-"+nJ[Q>>16&15|64]+nJ[Q>>24&255]+"-"+nJ[$&63|128]+nJ[$>>8&255]+"-"+nJ[$>>16&255]+nJ[$>>24&255]+nJ[K&255]+nJ[K>>8&255]+nJ[K>>16&255]+nJ[K>>24&255]).toLowerCase()}function qJ(J,Q,$){return Math.max(Q,Math.min($,J))}function p$(J,Q){return(J%Q+Q)%Q}function PX(J,Q,$,K,W){return K+(J-Q)*(W-K)/($-Q)}function AX(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function g7(J,Q,$){return(1-$)*J+$*Q}function _X(J,Q,$,K){return g7(J,Q,1-Math.exp(-$*K))}function wX(J,Q=1){return Q-Math.abs(p$(J,Q*2)-Q)}function CX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function TX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function SX(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function jX(J,Q){return J+Math.random()*(Q-J)}function yX(J){return J*(0.5-Math.random())}function vX(J){if(J!==void 0)jK=J;let Q=jK+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function hX(J){return J*x7}function bX(J){return J*j9}function fX(J){return(J&J-1)===0&&J!==0}function xX(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function gX(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function pX(J,Q,$,K,W){let{cos:Z,sin:X}=Math,Y=Z($/2),H=X($/2),U=Z((Q+K)/2),D=X((Q+K)/2),O=Z((Q-K)/2),G=X((Q-K)/2),R=Z((K-Q)/2),M=X((K-Q)/2);switch(W){case"XYX":J.set(Y*D,H*O,H*G,Y*U);break;case"YZY":J.set(H*G,Y*D,H*O,Y*U);break;case"ZXZ":J.set(H*O,H*G,Y*D,Y*U);break;case"XZX":J.set(Y*D,H*M,H*R,Y*U);break;case"YXY":J.set(H*R,Y*D,H*M,Y*U);break;case"ZYZ":J.set(H*M,H*R,Y*D,Y*U);break;default:o0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function q7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function Q8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var m$={DEG2RAD:x7,RAD2DEG:j9,generateUUID:k7,clamp:qJ,euclideanModulo:p$,mapLinear:PX,inverseLerp:AX,lerp:g7,damp:_X,pingpong:wX,smoothstep:CX,smootherstep:TX,randInt:SX,randFloat:jX,randFloatSpread:yX,seededRandom:vX,degToRad:hX,radToDeg:bX,isPowerOfTwo:fX,ceilPowerOfTwo:xX,floorPowerOfTwo:gX,setQuaternionFromProperEuler:pX,normalize:Q8,denormalize:q7};class i0{static{i0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6],this.y=K[1]*Q+K[4]*$+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=qJ(this.x,J.x,Q.x),this.y=qJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=qJ(this.x,J,Q),this.y=qJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(qJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(qJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),K=Math.sin(Q),W=this.x-J.x,Z=this.y-J.y;return this.x=W*$-Z*K+J.x,this.y=W*K+Z*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class L8{constructor(J=0,Q=0,$=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=K}static slerpFlat(J,Q,$,K,W,Z,X){let Y=$[K+0],H=$[K+1],U=$[K+2],D=$[K+3],O=W[Z+0],G=W[Z+1],R=W[Z+2],M=W[Z+3];if(D!==M||Y!==O||H!==G||U!==R){let z=Y*O+H*G+U*R+D*M;if(z<0)O=-O,G=-G,R=-R,M=-M,z=-z;let E=1-X;if(z<0.9995){let F=Math.acos(z),T=Math.sin(F);E=Math.sin(E*F)/T,X=Math.sin(X*F)/T,Y=Y*E+O*X,H=H*E+G*X,U=U*E+R*X,D=D*E+M*X}else{Y=Y*E+O*X,H=H*E+G*X,U=U*E+R*X,D=D*E+M*X;let F=1/Math.sqrt(Y*Y+H*H+U*U+D*D);Y*=F,H*=F,U*=F,D*=F}}J[Q]=Y,J[Q+1]=H,J[Q+2]=U,J[Q+3]=D}static multiplyQuaternionsFlat(J,Q,$,K,W,Z){let X=$[K],Y=$[K+1],H=$[K+2],U=$[K+3],D=W[Z],O=W[Z+1],G=W[Z+2],R=W[Z+3];return J[Q]=X*R+U*D+Y*G-H*O,J[Q+1]=Y*R+U*O+H*D-X*G,J[Q+2]=H*R+U*G+X*O-Y*D,J[Q+3]=U*R-X*D-Y*O-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,K){return this._x=J,this._y=Q,this._z=$,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:K,_z:W,_order:Z}=J,X=Math.cos,Y=Math.sin,H=X($/2),U=X(K/2),D=X(W/2),O=Y($/2),G=Y(K/2),R=Y(W/2);switch(Z){case"XYZ":this._x=O*U*D+H*G*R,this._y=H*G*D-O*U*R,this._z=H*U*R+O*G*D,this._w=H*U*D-O*G*R;break;case"YXZ":this._x=O*U*D+H*G*R,this._y=H*G*D-O*U*R,this._z=H*U*R-O*G*D,this._w=H*U*D+O*G*R;break;case"ZXY":this._x=O*U*D-H*G*R,this._y=H*G*D+O*U*R,this._z=H*U*R+O*G*D,this._w=H*U*D-O*G*R;break;case"ZYX":this._x=O*U*D-H*G*R,this._y=H*G*D+O*U*R,this._z=H*U*R-O*G*D,this._w=H*U*D+O*G*R;break;case"YZX":this._x=O*U*D+H*G*R,this._y=H*G*D+O*U*R,this._z=H*U*R-O*G*D,this._w=H*U*D-O*G*R;break;case"XZY":this._x=O*U*D-H*G*R,this._y=H*G*D-O*U*R,this._z=H*U*R+O*G*D,this._w=H*U*D+O*G*R;break;default:o0("Quaternion: .setFromEuler() encountered an unknown order: "+Z)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,K=Math.sin($);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],K=Q[4],W=Q[8],Z=Q[1],X=Q[5],Y=Q[9],H=Q[2],U=Q[6],D=Q[10],O=$+X+D;if(O>0){let G=0.5/Math.sqrt(O+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(W-H)*G,this._z=(Z-K)*G}else if($>X&&$>D){let G=2*Math.sqrt(1+$-X-D);this._w=(U-Y)/G,this._x=0.25*G,this._y=(K+Z)/G,this._z=(W+H)/G}else if(X>D){let G=2*Math.sqrt(1+X-$-D);this._w=(W-H)/G,this._x=(K+Z)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+D-$-X);this._w=(Z-K)/G,this._x=(W+H)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(qJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let K=Math.min(1,Q/$);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:K,_z:W,_w:Z}=J,X=Q._x,Y=Q._y,H=Q._z,U=Q._w;return this._x=$*U+Z*X+K*H-W*Y,this._y=K*U+Z*Y+W*X-$*H,this._z=W*U+Z*H+$*Y-K*X,this._w=Z*U-$*X-K*Y-W*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:K,_z:W,_w:Z}=J,X=this.dot(J);if(X<0)$=-$,K=-K,W=-W,Z=-Z,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+Z*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+Z*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),K=Math.sqrt(1-$),W=Math.sqrt($);return this.set(K*Math.sin(J),K*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{static{x.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(yK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(yK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*K,this.y=W[1]*Q+W[4]*$+W[7]*K,this.z=W[2]*Q+W[5]*$+W[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,K=this.z,W=J.elements,Z=1/(W[3]*Q+W[7]*$+W[11]*K+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*K+W[12])*Z,this.y=(W[1]*Q+W[5]*$+W[9]*K+W[13])*Z,this.z=(W[2]*Q+W[6]*$+W[10]*K+W[14])*Z,this}applyQuaternion(J){let Q=this.x,$=this.y,K=this.z,W=J.x,Z=J.y,X=J.z,Y=J.w,H=2*(Z*K-X*$),U=2*(X*Q-W*K),D=2*(W*$-Z*Q);return this.x=Q+Y*H+Z*D-X*U,this.y=$+Y*U+X*H-W*D,this.z=K+Y*D+W*U-Z*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*K,this.y=W[1]*Q+W[5]*$+W[9]*K,this.z=W[2]*Q+W[6]*$+W[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=qJ(this.x,J.x,Q.x),this.y=qJ(this.y,J.y,Q.y),this.z=qJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=qJ(this.x,J,Q),this.y=qJ(this.y,J,Q),this.z=qJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(qJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:K,z:W}=J,Z=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-W*X,this.y=W*Z-$*Y,this.z=$*X-K*Z,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return MQ.copy(this).projectOnVector(J),this.sub(MQ)}reflect(J){return this.sub(MQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(qJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,K=this.z-J.z;return Q*Q+$*$+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let K=Math.sin(Q)*J;return this.x=K*Math.sin($),this.y=Math.cos(Q)*J,this.z=K*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var MQ=new x,yK=new L8;class KJ{static{KJ.prototype.isMatrix3=!0}constructor(J,Q,$,K,W,Z,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,K,W,Z,X,Y,H)}set(J,Q,$,K,W,Z,X,Y,H){let U=this.elements;return U[0]=J,U[1]=K,U[2]=X,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=Z,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,K=Q.elements,W=this.elements,Z=$[0],X=$[3],Y=$[6],H=$[1],U=$[4],D=$[7],O=$[2],G=$[5],R=$[8],M=K[0],z=K[3],E=K[6],F=K[1],T=K[4],A=K[7],V=K[2],P=K[5],C=K[8];return W[0]=Z*M+X*F+Y*V,W[3]=Z*z+X*T+Y*P,W[6]=Z*E+X*A+Y*C,W[1]=H*M+U*F+D*V,W[4]=H*z+U*T+D*P,W[7]=H*E+U*A+D*C,W[2]=O*M+G*F+R*V,W[5]=O*z+G*T+R*P,W[8]=O*E+G*A+R*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return Q*Z*U-Q*X*H-$*W*U+$*X*Y+K*W*H-K*Z*Y}invert(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],D=U*Z-X*H,O=X*Y-U*W,G=H*W-Z*Y,R=Q*D+$*O+K*G;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/R;return J[0]=D*M,J[1]=(K*H-U*$)*M,J[2]=(X*$-K*Z)*M,J[3]=O*M,J[4]=(U*Q-K*Y)*M,J[5]=(K*W-X*Q)*M,J[6]=G*M,J[7]=($*Y-H*Q)*M,J[8]=(Z*Q-$*W)*M,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,K,W,Z,X){let Y=Math.cos(W),H=Math.sin(W);return this.set($*Y,$*H,-$*(Y*Z+H*X)+Z+J,-K*H,K*Y,-K*(-H*Z+Y*X)+X+Q,0,0,1),this}scale(J,Q){return S9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(VQ.makeScale(J,Q)),this}rotate(J){return S9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(VQ.makeRotation(-J)),this}translate(J,Q){return S9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(VQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let K=0;K<9;K++)if(Q[K]!==$[K])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var VQ=new KJ,vK=new KJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),hK=new KJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function mX(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,Z,X){if(this.enabled===!1||Z===X||!Z||!X)return W;if(this.spaces[Z].transfer==="srgb")W.r=r8(W.r),W.g=r8(W.g),W.b=r8(W.b);if(this.spaces[Z].primaries!==this.spaces[X].primaries)W.applyMatrix3(this.spaces[Z].toXYZ),W.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")W.r=N7(W.r),W.g=N7(W.g),W.b=N7(W.b);return W},workingToColorSpace:function(W,Z){return this.convert(W,this.workingColorSpace,Z)},colorSpaceToWorking:function(W,Z){return this.convert(W,Z,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,Z=this.workingColorSpace){return W.fromArray(this.spaces[Z].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,Z,X){return W.copy(this.spaces[Z].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,Z){return S9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,Z)},toWorkingColorSpace:function(W,Z){return S9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,Z)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:vK,fromXYZ:hK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:vK,fromXYZ:hK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var FJ=mX();function r8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function N7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var t9;class d${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(t9===void 0)t9=p7("canvas");t9.width=J.width,t9.height=J.height;let K=t9.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);$=t9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=p7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let K=$.getImageData(0,0,J.width,J.height),W=K.data;for(let Z=0;Z<W.length;Z++)W[Z]=r8(W[Z]/255)*255;return $.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(r8(Q[$]/255)*255);else Q[$]=r8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return o0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var dX=0;class s7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dX++}),this.uuid=k7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},K=this.data;if(K!==null){let W;if(Array.isArray(K)){W=[];for(let Z=0,X=K.length;Z<X;Z++)if(K[Z].isDataTexture)W.push(BQ(K[Z].image));else W.push(BQ(K[Z]))}else W=BQ(K);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function BQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return d$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return o0("Texture: Unable to serialize Texture."),{}}var uX=0,LQ=new x;class lJ extends p8{constructor(J=lJ.DEFAULT_IMAGE,Q=lJ.DEFAULT_MAPPING,$=1001,K=1001,W=1006,Z=1008,X=1023,Y=1009,H=lJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:uX++}),this.uuid=k7(),this.name="",this.source=new s7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=K,this.magFilter=W,this.minFilter=Z,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new i0(0,0),this.repeat=new i0(1,1),this.center=new i0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new KJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(LQ).x}get height(){return this.source.getSize(LQ).y}get depth(){return this.source.getSize(LQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){o0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){o0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&$&&(K.isVector2&&$.isVector2))K.copy($);else if(K&&$&&(K.isVector3&&$.isVector3))K.copy($);else if(K&&$&&(K.isMatrix3&&$.isMatrix3))K.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}lJ.DEFAULT_IMAGE=null;lJ.DEFAULT_MAPPING=300;lJ.DEFAULT_ANISOTROPY=1;class wJ{static{wJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,K=1){this.x=J,this.y=Q,this.z=$,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,K){return this.x=J,this.y=Q,this.z=$,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,K=this.z,W=this.w,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*K+Z[12]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*K+Z[13]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*K+Z[14]*W,this.w=Z[3]*Q+Z[7]*$+Z[11]*K+Z[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,K,W,Z=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],D=Y[8],O=Y[1],G=Y[5],R=Y[9],M=Y[2],z=Y[6],E=Y[10];if(Math.abs(U-O)<0.01&&Math.abs(D-M)<0.01&&Math.abs(R-z)<0.01){if(Math.abs(U+O)<0.1&&Math.abs(D+M)<0.1&&Math.abs(R+z)<0.1&&Math.abs(H+G+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let T=(H+1)/2,A=(G+1)/2,V=(E+1)/2,P=(U+O)/4,C=(D+M)/4,j=(R+z)/4;if(T>A&&T>V)if(T<0.01)$=0,K=0.707106781,W=0.707106781;else $=Math.sqrt(T),K=P/$,W=C/$;else if(A>V)if(A<0.01)$=0.707106781,K=0,W=0.707106781;else K=Math.sqrt(A),$=P/K,W=j/K;else if(V<0.01)$=0.707106781,K=0.707106781,W=0;else W=Math.sqrt(V),$=C/W,K=j/W;return this.set($,K,W,Q),this}let F=Math.sqrt((z-R)*(z-R)+(D-M)*(D-M)+(O-U)*(O-U));if(Math.abs(F)<0.001)F=1;return this.x=(z-R)/F,this.y=(D-M)/F,this.z=(O-U)/F,this.w=Math.acos((H+G+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=qJ(this.x,J.x,Q.x),this.y=qJ(this.y,J.y,Q.y),this.z=qJ(this.z,J.z,Q.z),this.w=qJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=qJ(this.x,J,Q),this.y=qJ(this.y,J,Q),this.z=qJ(this.z,J,Q),this.w=qJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(qJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u$ extends p8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new wJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new wJ(0,0,J,Q),this.textures=[];let K={width:J,height:Q,depth:$.depth},W=new lJ(K),Z=$.count;for(let X=0;X<Z;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let K=0,W=this.textures.length;K<W;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=$,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new s7(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class z8 extends u${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class u6 extends lJ{constructor(J=null,Q=1,$=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class l$ extends lJ{constructor(J=null,Q=1,$=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IJ{static{IJ.prototype.isMatrix4=!0}constructor(J,Q,$,K,W,Z,X,Y,H,U,D,O,G,R,M,z){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,K,W,Z,X,Y,H,U,D,O,G,R,M,z)}set(J,Q,$,K,W,Z,X,Y,H,U,D,O,G,R,M,z){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=$,E[12]=K,E[1]=W,E[5]=Z,E[9]=X,E[13]=Y,E[2]=H,E[6]=U,E[10]=D,E[14]=O,E[3]=G,E[7]=R,E[11]=M,E[15]=z,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new IJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,K=1/e9.setFromMatrixColumn(J,0).length(),W=1/e9.setFromMatrixColumn(J,1).length(),Z=1/e9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*K,Q[1]=$[1]*K,Q[2]=$[2]*K,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*Z,Q[9]=$[9]*Z,Q[10]=$[10]*Z,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,K=J.y,W=J.z,Z=Math.cos($),X=Math.sin($),Y=Math.cos(K),H=Math.sin(K),U=Math.cos(W),D=Math.sin(W);if(J.order==="XYZ"){let O=Z*U,G=Z*D,R=X*U,M=X*D;Q[0]=Y*U,Q[4]=-Y*D,Q[8]=H,Q[1]=G+R*H,Q[5]=O-M*H,Q[9]=-X*Y,Q[2]=M-O*H,Q[6]=R+G*H,Q[10]=Z*Y}else if(J.order==="YXZ"){let O=Y*U,G=Y*D,R=H*U,M=H*D;Q[0]=O+M*X,Q[4]=R*X-G,Q[8]=Z*H,Q[1]=Z*D,Q[5]=Z*U,Q[9]=-X,Q[2]=G*X-R,Q[6]=M+O*X,Q[10]=Z*Y}else if(J.order==="ZXY"){let O=Y*U,G=Y*D,R=H*U,M=H*D;Q[0]=O-M*X,Q[4]=-Z*D,Q[8]=R+G*X,Q[1]=G+R*X,Q[5]=Z*U,Q[9]=M-O*X,Q[2]=-Z*H,Q[6]=X,Q[10]=Z*Y}else if(J.order==="ZYX"){let O=Z*U,G=Z*D,R=X*U,M=X*D;Q[0]=Y*U,Q[4]=R*H-G,Q[8]=O*H+M,Q[1]=Y*D,Q[5]=M*H+O,Q[9]=G*H-R,Q[2]=-H,Q[6]=X*Y,Q[10]=Z*Y}else if(J.order==="YZX"){let O=Z*Y,G=Z*H,R=X*Y,M=X*H;Q[0]=Y*U,Q[4]=M-O*D,Q[8]=R*D+G,Q[1]=D,Q[5]=Z*U,Q[9]=-X*U,Q[2]=-H*U,Q[6]=G*D+R,Q[10]=O-M*D}else if(J.order==="XZY"){let O=Z*Y,G=Z*H,R=X*Y,M=X*H;Q[0]=Y*U,Q[4]=-D,Q[8]=H*U,Q[1]=O*D+M,Q[5]=Z*U,Q[9]=G*D-R,Q[2]=R*D-G,Q[6]=X*U,Q[10]=M*D+O}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(lX,J,cX)}lookAt(J,Q,$){let K=this.elements;if(N8.subVectors(J,Q),N8.lengthSq()===0)N8.z=1;if(N8.normalize(),Y9.crossVectors($,N8),Y9.lengthSq()===0){if(Math.abs($.z)===1)N8.x+=0.0001;else N8.z+=0.0001;N8.normalize(),Y9.crossVectors($,N8)}return Y9.normalize(),U6.crossVectors(N8,Y9),K[0]=Y9.x,K[4]=U6.x,K[8]=N8.x,K[1]=Y9.y,K[5]=U6.y,K[9]=N8.y,K[2]=Y9.z,K[6]=U6.z,K[10]=N8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,K=Q.elements,W=this.elements,Z=$[0],X=$[4],Y=$[8],H=$[12],U=$[1],D=$[5],O=$[9],G=$[13],R=$[2],M=$[6],z=$[10],E=$[14],F=$[3],T=$[7],A=$[11],V=$[15],P=K[0],C=K[4],j=K[8],k=K[12],L=K[1],i=K[5],S=K[9],n=K[13],J0=K[2],u=K[6],t=K[10],Q0=K[14],d=K[3],Y0=K[7],N0=K[11],E0=K[15];return W[0]=Z*P+X*L+Y*J0+H*d,W[4]=Z*C+X*i+Y*u+H*Y0,W[8]=Z*j+X*S+Y*t+H*N0,W[12]=Z*k+X*n+Y*Q0+H*E0,W[1]=U*P+D*L+O*J0+G*d,W[5]=U*C+D*i+O*u+G*Y0,W[9]=U*j+D*S+O*t+G*N0,W[13]=U*k+D*n+O*Q0+G*E0,W[2]=R*P+M*L+z*J0+E*d,W[6]=R*C+M*i+z*u+E*Y0,W[10]=R*j+M*S+z*t+E*N0,W[14]=R*k+M*n+z*Q0+E*E0,W[3]=F*P+T*L+A*J0+V*d,W[7]=F*C+T*i+A*u+V*Y0,W[11]=F*j+T*S+A*t+V*N0,W[15]=F*k+T*n+A*Q0+V*E0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],K=J[8],W=J[12],Z=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],D=J[6],O=J[10],G=J[14],R=J[3],M=J[7],z=J[11],E=J[15],F=Y*G-H*O,T=X*G-H*D,A=X*O-Y*D,V=Z*G-H*U,P=Z*O-Y*U,C=Z*D-X*U;return Q*(M*F-z*T+E*A)-$*(R*F-z*V+E*P)+K*(R*T-M*V+E*C)-W*(R*A-M*P+z*C)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],K=J[8],W=J[1],Z=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return Q*(Z*U-X*H)-$*(W*U-X*Y)+K*(W*H-Z*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],D=J[9],O=J[10],G=J[11],R=J[12],M=J[13],z=J[14],E=J[15],F=Q*X-$*Z,T=Q*Y-K*Z,A=Q*H-W*Z,V=$*Y-K*X,P=$*H-W*X,C=K*H-W*Y,j=U*M-D*R,k=U*z-O*R,L=U*E-G*R,i=D*z-O*M,S=D*E-G*M,n=O*E-G*z,J0=F*n-T*S+A*i+V*L-P*k+C*j;if(J0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let u=1/J0;return J[0]=(X*n-Y*S+H*i)*u,J[1]=(K*S-$*n-W*i)*u,J[2]=(M*C-z*P+E*V)*u,J[3]=(O*P-D*C-G*V)*u,J[4]=(Y*L-Z*n-H*k)*u,J[5]=(Q*n-K*L+W*k)*u,J[6]=(z*A-R*C-E*T)*u,J[7]=(U*C-O*A+G*T)*u,J[8]=(Z*S-X*L+H*j)*u,J[9]=($*L-Q*S-W*j)*u,J[10]=(R*P-M*A+E*F)*u,J[11]=(D*A-U*P-G*F)*u,J[12]=(X*k-Z*i-Y*j)*u,J[13]=(Q*i-$*k+K*j)*u,J[14]=(M*T-R*V-z*F)*u,J[15]=(U*V-D*T+O*F)*u,this}scale(J){let Q=this.elements,$=J.x,K=J.y,W=J.z;return Q[0]*=$,Q[4]*=K,Q[8]*=W,Q[1]*=$,Q[5]*=K,Q[9]*=W,Q[2]*=$,Q[6]*=K,Q[10]*=W,Q[3]*=$,Q[7]*=K,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,K))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),K=Math.sin(Q),W=1-$,Z=J.x,X=J.y,Y=J.z,H=W*Z,U=W*X;return this.set(H*Z+$,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,U*X+$,U*Y-K*Z,0,H*Y-K*X,U*Y+K*Z,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,K,W,Z){return this.set(1,$,W,0,J,1,Z,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,$){let K=this.elements,W=Q._x,Z=Q._y,X=Q._z,Y=Q._w,H=W+W,U=Z+Z,D=X+X,O=W*H,G=W*U,R=W*D,M=Z*U,z=Z*D,E=X*D,F=Y*H,T=Y*U,A=Y*D,V=$.x,P=$.y,C=$.z;return K[0]=(1-(M+E))*V,K[1]=(G+A)*V,K[2]=(R-T)*V,K[3]=0,K[4]=(G-A)*P,K[5]=(1-(O+E))*P,K[6]=(z+F)*P,K[7]=0,K[8]=(R+T)*C,K[9]=(z-F)*C,K[10]=(1-(O+M))*C,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,$){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let Z=e9.set(K[0],K[1],K[2]).length(),X=e9.set(K[4],K[5],K[6]).length(),Y=e9.set(K[8],K[9],K[10]).length();if(W<0)Z=-Z;_8.copy(this);let H=1/Z,U=1/X,D=1/Y;return _8.elements[0]*=H,_8.elements[1]*=H,_8.elements[2]*=H,_8.elements[4]*=U,_8.elements[5]*=U,_8.elements[6]*=U,_8.elements[8]*=D,_8.elements[9]*=D,_8.elements[10]*=D,Q.setFromRotationMatrix(_8),$.x=Z,$.y=X,$.z=Y,this}makePerspective(J,Q,$,K,W,Z,X=2000,Y=!1){let H=this.elements,U=2*W/(Q-J),D=2*W/($-K),O=(Q+J)/(Q-J),G=($+K)/($-K),R,M;if(Y)R=W/(Z-W),M=Z*W/(Z-W);else if(X===2000)R=-(Z+W)/(Z-W),M=-2*Z*W/(Z-W);else if(X===2001)R=-Z/(Z-W),M=-Z*W/(Z-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=O,H[12]=0,H[1]=0,H[5]=D,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=R,H[14]=M,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,K,W,Z,X=2000,Y=!1){let H=this.elements,U=2/(Q-J),D=2/($-K),O=-(Q+J)/(Q-J),G=-($+K)/($-K),R,M;if(Y)R=1/(Z-W),M=Z/(Z-W);else if(X===2000)R=-2/(Z-W),M=-(Z+W)/(Z-W);else if(X===2001)R=-1/(Z-W),M=-W/(Z-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=O,H[1]=0,H[5]=D,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=R,H[14]=M,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let K=0;K<16;K++)if(Q[K]!==$[K])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var e9=new x,_8=new IJ,lX=new x(0,0,0),cX=new x(1,1,1),Y9=new x,U6=new x,N8=new x,bK=new IJ,fK=new L8;class t8{constructor(J=0,Q=0,$=0,K=t8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,K=this._order){return this._x=J,this._y=Q,this._z=$,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let K=J.elements,W=K[0],Z=K[4],X=K[8],Y=K[1],H=K[5],U=K[9],D=K[2],O=K[6],G=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(qJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-Z,W);else this._x=Math.atan2(O,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-qJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,G),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-D,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(qJ(O,-1,1)),Math.abs(O)<0.9999999)this._y=Math.atan2(-D,G),this._z=Math.atan2(-Z,H);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-qJ(D,-1,1)),Math.abs(D)<0.9999999)this._x=Math.atan2(O,G),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-Z,H);break;case"YZX":if(this._z=Math.asin(qJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-D,W);else this._x=0,this._y=Math.atan2(X,G);break;case"XZY":if(this._z=Math.asin(-qJ(Z,-1,1)),Math.abs(Z)<0.9999999)this._x=Math.atan2(O,H),this._y=Math.atan2(X,W);else this._x=Math.atan2(-U,G),this._y=0;break;default:o0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return bK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(bK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return fK.setFromEuler(this),this.setFromQuaternion(fK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}t8.DEFAULT_ORDER="XYZ";class l6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var nX=0,xK=new x,J7=new L8,n8=new IJ,q6=new x,v7=new x,sX=new x,iX=new L8,gK=new x(1,0,0),pK=new x(0,1,0),mK=new x(0,0,1),dK={type:"added"},oX={type:"removed"},Q7={type:"childadded",child:null},zQ={type:"childremoved",child:null};class vJ extends p8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:nX++}),this.uuid=k7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vJ.DEFAULT_UP.clone();let J=new x,Q=new t8,$=new L8,K=new x(1,1,1);function W(){$.setFromEuler(Q,!1)}function Z(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(Z),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new IJ},normalMatrix:{value:new KJ}}),this.matrix=new IJ,this.matrixWorld=new IJ,this.matrixAutoUpdate=vJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return J7.setFromAxisAngle(J,Q),this.quaternion.multiply(J7),this}rotateOnWorldAxis(J,Q){return J7.setFromAxisAngle(J,Q),this.quaternion.premultiply(J7),this}rotateX(J){return this.rotateOnAxis(gK,J)}rotateY(J){return this.rotateOnAxis(pK,J)}rotateZ(J){return this.rotateOnAxis(mK,J)}translateOnAxis(J,Q){return xK.copy(J).applyQuaternion(this.quaternion),this.position.add(xK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(gK,J)}translateY(J){return this.translateOnAxis(pK,J)}translateZ(J){return this.translateOnAxis(mK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(n8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)q6.copy(J);else q6.set(J,Q,$);let K=this.parent;if(this.updateWorldMatrix(!0,!1),v7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)n8.lookAt(v7,q6,this.up);else n8.lookAt(q6,v7,this.up);if(this.quaternion.setFromRotationMatrix(n8),K)n8.extractRotation(K.matrixWorld),J7.setFromRotationMatrix(n8),this.quaternion.premultiply(J7.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return a0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(dK),Q7.child=J,this.dispatchEvent(Q7),Q7.child=null;else a0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(oX),zQ.child=J,this.dispatchEvent(zQ),zQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),n8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),n8.multiply(J.parent.matrixWorld);return J.applyMatrix4(n8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(dK),Q7.child=J,this.dispatchEvent(Q7),Q7.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,K=this.children.length;$<K;$++){let Z=this.children[$].getObjectByProperty(J,Q);if(Z!==void 0)return Z}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let K=this.children;for(let W=0,Z=K.length;W<Z;W++)K[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(v7,J,sX),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(v7,iX,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:K}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*K,W[13]+=$-W[1]*Q-W[5]*$-W[9]*K,W[14]+=K-W[2]*Q-W[6]*$-W[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let Z=0,X=W.length;Z<X;Z++)W[Z].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,this.name!=="")K.name=this.name;if(this.castShadow===!0)K.castShadow=!0;if(this.receiveShadow===!0)K.receiveShadow=!0;if(this.visible===!1)K.visible=!1;if(this.frustumCulled===!1)K.frustumCulled=!1;if(this.renderOrder!==0)K.renderOrder=this.renderOrder;if(this.static!==!1)K.static=this.static;if(Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)K.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function W(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=W(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let D=Y[H];W(J.shapes,D)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push(W(J.materials,this.material[Y]));K.material=X}else K.material=W(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push(W(J.animations,Y))}}if(Q){let X=Z(J.geometries),Y=Z(J.materials),H=Z(J.textures),U=Z(J.images),D=Z(J.shapes),O=Z(J.skeletons),G=Z(J.animations),R=Z(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(D.length>0)$.shapes=D;if(O.length>0)$.skeletons=O;if(G.length>0)$.animations=G;if(R.length>0)$.nodes=R}return $.object=K,$;function Z(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let K=J.children[$];this.add(K.clone())}return this}}vJ.DEFAULT_UP=new x(0,1,0);vJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;vJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class X8 extends vJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var aX={type:"move"};class i7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new X8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new X8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new X8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let K=null,W=null,Z=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){Z=!0;for(let M of J.hand.values()){let z=Q.getJointPose(M,$),E=this._getHandJoint(H,M);if(z!==null)E.matrix.fromArray(z.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=z.radius;E.visible=z!==null}let U=H.joints["index-finger-tip"],D=H.joints["thumb-tip"],O=U.position.distanceTo(D.position),G=0.02,R=0.005;if(H.inputState.pinching&&O>G+R)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&O<=G-R)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,$),K===null&&W!==null)K=W;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(aX)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=W!==null;if(H!==null)H.visible=Z!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new X8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var JZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},H9={h:0,s:0,l:0},N6={h:0,s:0,l:0};function IQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class QJ{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,FJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,K=FJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,FJ.colorSpaceToWorking(this,K),this}setHSL(J,Q,$,K=FJ.workingColorSpace){if(J=p$(J,1),Q=qJ(Q,0,1),$=qJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,Z=2*$-W;this.r=IQ(Z,W,J+0.3333333333333333),this.g=IQ(Z,W,J),this.b=IQ(Z,W,J-0.3333333333333333)}return FJ.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)o0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,Z=K[1],X=K[2];switch(Z){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:o0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=K[1],Z=W.length;if(Z===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(Z===6)return this.setHex(parseInt(W,16),Q);else o0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=JZ[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else o0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=r8(J.r),this.g=r8(J.g),this.b=r8(J.b),this}copyLinearToSRGB(J){return this.r=N7(J.r),this.g=N7(J.g),this.b=N7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return FJ.workingToColorSpace(sJ.copy(this),J),Math.round(qJ(sJ.r*255,0,255))*65536+Math.round(qJ(sJ.g*255,0,255))*256+Math.round(qJ(sJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=FJ.workingColorSpace){FJ.workingToColorSpace(sJ.copy(this),Q);let{r:$,g:K,b:W}=sJ,Z=Math.max($,K,W),X=Math.min($,K,W),Y,H,U=(X+Z)/2;if(X===Z)Y=0,H=0;else{let D=Z-X;switch(H=U<=0.5?D/(Z+X):D/(2-Z-X),Z){case $:Y=(K-W)/D+(K<W?6:0);break;case K:Y=(W-$)/D+2;break;case W:Y=($-K)/D+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,Q=FJ.workingColorSpace){return FJ.workingToColorSpace(sJ.copy(this),Q),J.r=sJ.r,J.g=sJ.g,J.b=sJ.b,J}getStyle(J="srgb"){FJ.workingToColorSpace(sJ.copy(this),J);let{r:Q,g:$,b:K}=sJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(K*255)})`}offsetHSL(J,Q,$){return this.getHSL(H9),this.setHSL(H9.h+J,H9.s+Q,H9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(H9),J.getHSL(N6);let $=g7(H9.h,N6.h,Q),K=g7(H9.s,N6.s,Q),W=g7(H9.l,N6.l,Q);return this.setHSL($,K,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,K=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*K,this.g=W[1]*Q+W[4]*$+W[7]*K,this.b=W[2]*Q+W[5]*$+W[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var sJ=new QJ;QJ.NAMES=JZ;class o7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new QJ(J),this.density=Q}clone(){return new o7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class c6 extends vJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new t8,this.environmentIntensity=1,this.environmentRotation=new t8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var w8=new x,s8=new x,PQ=new x,i8=new x,$7=new x,K7=new x,uK=new x,AQ=new x,_Q=new x,wQ=new x,CQ=new wJ,TQ=new wJ,SQ=new wJ;class B8{constructor(J=new x,Q=new x,$=new x){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,K){K.subVectors($,Q),w8.subVectors(J,Q),K.cross(w8);let W=K.lengthSq();if(W>0)return K.multiplyScalar(1/Math.sqrt(W));return K.set(0,0,0)}static getBarycoord(J,Q,$,K,W){w8.subVectors(K,Q),s8.subVectors($,Q),PQ.subVectors(J,Q);let Z=w8.dot(w8),X=w8.dot(s8),Y=w8.dot(PQ),H=s8.dot(s8),U=s8.dot(PQ),D=Z*H-X*X;if(D===0)return W.set(0,0,0),null;let O=1/D,G=(H*Y-X*U)*O,R=(Z*U-X*Y)*O;return W.set(1-G-R,R,G)}static containsPoint(J,Q,$,K){if(this.getBarycoord(J,Q,$,K,i8)===null)return!1;return i8.x>=0&&i8.y>=0&&i8.x+i8.y<=1}static getInterpolation(J,Q,$,K,W,Z,X,Y){if(this.getBarycoord(J,Q,$,K,i8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,i8.x),Y.addScaledVector(Z,i8.y),Y.addScaledVector(X,i8.z),Y}static getInterpolatedAttribute(J,Q,$,K,W,Z){return CQ.setScalar(0),TQ.setScalar(0),SQ.setScalar(0),CQ.fromBufferAttribute(J,Q),TQ.fromBufferAttribute(J,$),SQ.fromBufferAttribute(J,K),Z.setScalar(0),Z.addScaledVector(CQ,W.x),Z.addScaledVector(TQ,W.y),Z.addScaledVector(SQ,W.z),Z}static isFrontFacing(J,Q,$,K){return w8.subVectors($,Q),s8.subVectors(J,Q),w8.cross(s8).dot(K)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,K){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,$,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return w8.subVectors(this.c,this.b),s8.subVectors(this.a,this.b),w8.cross(s8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return B8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return B8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,K,W){return B8.getInterpolation(J,this.a,this.b,this.c,Q,$,K,W)}containsPoint(J){return B8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return B8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,K=this.b,W=this.c,Z,X;$7.subVectors(K,$),K7.subVectors(W,$),AQ.subVectors(J,$);let Y=$7.dot(AQ),H=K7.dot(AQ);if(Y<=0&&H<=0)return Q.copy($);_Q.subVectors(J,K);let U=$7.dot(_Q),D=K7.dot(_Q);if(U>=0&&D<=U)return Q.copy(K);let O=Y*D-U*H;if(O<=0&&Y>=0&&U<=0)return Z=Y/(Y-U),Q.copy($).addScaledVector($7,Z);wQ.subVectors(J,W);let G=$7.dot(wQ),R=K7.dot(wQ);if(R>=0&&G<=R)return Q.copy(W);let M=G*H-Y*R;if(M<=0&&H>=0&&R<=0)return X=H/(H-R),Q.copy($).addScaledVector(K7,X);let z=U*R-G*D;if(z<=0&&D-U>=0&&G-R>=0)return uK.subVectors(W,K),X=(D-U)/(D-U+(G-R)),Q.copy(K).addScaledVector(uK,X);let E=1/(z+M+O);return Z=M*E,X=O*E,Q.copy($).addScaledVector($7,Z).addScaledVector(K7,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class p9{constructor(J=new x(1/0,1/0,1/0),Q=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(C8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(C8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=C8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let Z=0,X=W.count;Z<X;Z++){if(J.isMesh===!0)J.getVertexPosition(Z,C8);else C8.fromBufferAttribute(W,Z);C8.applyMatrix4(J.matrixWorld),this.expandByPoint(C8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();G6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();G6.copy($.boundingBox)}G6.applyMatrix4(J.matrixWorld),this.union(G6)}}let K=J.children;for(let W=0,Z=K.length;W<Z;W++)this.expandByObject(K[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,C8),C8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(h7),F6.subVectors(this.max,h7),W7.subVectors(J.a,h7),Z7.subVectors(J.b,h7),X7.subVectors(J.c,h7),U9.subVectors(Z7,W7),q9.subVectors(X7,Z7),_9.subVectors(W7,X7);let Q=[0,-U9.z,U9.y,0,-q9.z,q9.y,0,-_9.z,_9.y,U9.z,0,-U9.x,q9.z,0,-q9.x,_9.z,0,-_9.x,-U9.y,U9.x,0,-q9.y,q9.x,0,-_9.y,_9.x,0];if(!jQ(Q,W7,Z7,X7,F6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!jQ(Q,W7,Z7,X7,F6))return!1;return O6.crossVectors(U9,q9),Q=[O6.x,O6.y,O6.z],jQ(Q,W7,Z7,X7,F6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,C8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(C8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return o8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),o8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),o8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),o8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),o8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),o8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),o8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),o8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(o8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var o8=[new x,new x,new x,new x,new x,new x,new x,new x],C8=new x,G6=new p9,W7=new x,Z7=new x,X7=new x,U9=new x,q9=new x,_9=new x,h7=new x,F6=new x,O6=new x,w9=new x;function jQ(J,Q,$,K,W){for(let Z=0,X=J.length-3;Z<=X;Z+=3){w9.fromArray(J,Z);let Y=W.x*Math.abs(w9.x)+W.y*Math.abs(w9.y)+W.z*Math.abs(w9.z),H=Q.dot(w9),U=$.dot(w9),D=K.dot(w9);if(Math.max(-Math.max(H,U,D),Math.min(H,U,D))>Y)return!1}return!0}var yJ=new x,D6=new i0,rX=0;class bJ extends p8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rX++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let K=0,W=this.itemSize;K<W;K++)this.array[J+K]=Q.array[$+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)D6.fromBufferAttribute(this,Q),D6.applyMatrix3(J),this.setXY(Q,D6.x,D6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)yJ.fromBufferAttribute(this,Q),yJ.applyMatrix3(J),this.setXYZ(Q,yJ.x,yJ.y,yJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)yJ.fromBufferAttribute(this,Q),yJ.applyMatrix4(J),this.setXYZ(Q,yJ.x,yJ.y,yJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)yJ.fromBufferAttribute(this,Q),yJ.applyNormalMatrix(J),this.setXYZ(Q,yJ.x,yJ.y,yJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)yJ.fromBufferAttribute(this,Q),yJ.transformDirection(J),this.setXYZ(Q,yJ.x,yJ.y,yJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=q7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=Q8($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=q7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=q7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=q7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=q7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,K){if(J*=this.itemSize,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array),K=Q8(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=K,this}setXYZW(J,Q,$,K,W){if(J*=this.itemSize,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array),K=Q8(K,this.array),W=Q8(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=K,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class n6 extends bJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class s6 extends bJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class zJ extends bJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var tX=new p9,b7=new x,yQ=new x;class M7{constructor(J=new x,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else tX.setFromPoints(J).getCenter($);let K=0;for(let W=0,Z=J.length;W<Z;W++)K=Math.max(K,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;b7.subVectors(J,this.center);let Q=b7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),K=($-this.radius)*0.5;this.center.addScaledVector(b7,K/$),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else yQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(b7.copy(J.center).add(yQ)),this.expandByPoint(b7.copy(J.center).sub(yQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var eX=0,V8=new IJ,vQ=new vJ,Y7=new x,G8=new p9,f7=new p9,pJ=new x;class SJ extends p8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eX++}),this.uuid=k7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((zX(J))?s6:n6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new KJ().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return V8.makeRotationFromQuaternion(J),this.applyMatrix4(V8),this}rotateX(J){return V8.makeRotationX(J),this.applyMatrix4(V8),this}rotateY(J){return V8.makeRotationY(J),this.applyMatrix4(V8),this}rotateZ(J){return V8.makeRotationZ(J),this.applyMatrix4(V8),this}translate(J,Q,$){return V8.makeTranslation(J,Q,$),this.applyMatrix4(V8),this}scale(J,Q,$){return V8.makeScale(J,Q,$),this.applyMatrix4(V8),this}lookAt(J){return vQ.lookAt(J),vQ.updateMatrix(),this.applyMatrix4(vQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Y7).negate(),this.translate(Y7.x,Y7.y,Y7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let K=0,W=J.length;K<W;K++){let Z=J[K];$.push(Z.x,Z.y,Z.z||0)}this.setAttribute("position",new zJ($,3))}else{let $=Math.min(J.length,Q.count);for(let K=0;K<$;K++){let W=J[K];Q.setXYZ(K,W.x,W.y,W.z||0)}if(J.length>Q.count)o0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new p9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){a0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,K=Q.length;$<K;$++){let W=Q[$];if(G8.setFromBufferAttribute(W),this.morphTargetsRelative)pJ.addVectors(this.boundingBox.min,G8.min),this.boundingBox.expandByPoint(pJ),pJ.addVectors(this.boundingBox.max,G8.max),this.boundingBox.expandByPoint(pJ);else this.boundingBox.expandByPoint(G8.min),this.boundingBox.expandByPoint(G8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))a0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new M7;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){a0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let $=this.boundingSphere.center;if(G8.setFromBufferAttribute(J),Q)for(let W=0,Z=Q.length;W<Z;W++){let X=Q[W];if(f7.setFromBufferAttribute(X),this.morphTargetsRelative)pJ.addVectors(G8.min,f7.min),G8.expandByPoint(pJ),pJ.addVectors(G8.max,f7.max),G8.expandByPoint(pJ);else G8.expandByPoint(f7.min),G8.expandByPoint(f7.max)}G8.getCenter($);let K=0;for(let W=0,Z=J.count;W<Z;W++)pJ.fromBufferAttribute(J,W),K=Math.max(K,$.distanceToSquared(pJ));if(Q)for(let W=0,Z=Q.length;W<Z;W++){let X=Q[W],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(pJ.fromBufferAttribute(X,H),Y)Y7.fromBufferAttribute(J,H),pJ.add(Y7);K=Math.max(K,$.distanceToSquared(pJ))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))a0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){a0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:K,uv:W}=Q,Z=this.getAttribute("tangent");if(Z===void 0||Z.count!==$.count)Z=new bJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",Z);let X=[],Y=[];for(let j=0;j<$.count;j++)X[j]=new x,Y[j]=new x;let H=new x,U=new x,D=new x,O=new i0,G=new i0,R=new i0,M=new x,z=new x;function E(j,k,L){H.fromBufferAttribute($,j),U.fromBufferAttribute($,k),D.fromBufferAttribute($,L),O.fromBufferAttribute(W,j),G.fromBufferAttribute(W,k),R.fromBufferAttribute(W,L),U.sub(H),D.sub(H),G.sub(O),R.sub(O);let i=1/(G.x*R.y-R.x*G.y);if(!isFinite(i))return;M.copy(U).multiplyScalar(R.y).addScaledVector(D,-G.y).multiplyScalar(i),z.copy(D).multiplyScalar(G.x).addScaledVector(U,-R.x).multiplyScalar(i),X[j].add(M),X[k].add(M),X[L].add(M),Y[j].add(z),Y[k].add(z),Y[L].add(z)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let j=0,k=F.length;j<k;++j){let L=F[j],i=L.start,S=L.count;for(let n=i,J0=i+S;n<J0;n+=3)E(J.getX(n+0),J.getX(n+1),J.getX(n+2))}let T=new x,A=new x,V=new x,P=new x;function C(j){V.fromBufferAttribute(K,j),P.copy(V);let k=X[j];T.copy(k),T.sub(V.multiplyScalar(V.dot(k))).normalize(),A.crossVectors(P,k);let i=A.dot(Y[j])<0?-1:1;Z.setXYZW(j,T.x,T.y,T.z,i)}for(let j=0,k=F.length;j<k;++j){let L=F[j],i=L.start,S=L.count;for(let n=i,J0=i+S;n<J0;n+=3)C(J.getX(n+0)),C(J.getX(n+1)),C(J.getX(n+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new bJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let O=0,G=$.count;O<G;O++)$.setXYZ(O,0,0,0);let K=new x,W=new x,Z=new x,X=new x,Y=new x,H=new x,U=new x,D=new x;if(J)for(let O=0,G=J.count;O<G;O+=3){let R=J.getX(O+0),M=J.getX(O+1),z=J.getX(O+2);K.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,M),Z.fromBufferAttribute(Q,z),U.subVectors(Z,W),D.subVectors(K,W),U.cross(D),X.fromBufferAttribute($,R),Y.fromBufferAttribute($,M),H.fromBufferAttribute($,z),X.add(U),Y.add(U),H.add(U),$.setXYZ(R,X.x,X.y,X.z),$.setXYZ(M,Y.x,Y.y,Y.z),$.setXYZ(z,H.x,H.y,H.z)}else for(let O=0,G=Q.count;O<G;O+=3)K.fromBufferAttribute(Q,O+0),W.fromBufferAttribute(Q,O+1),Z.fromBufferAttribute(Q,O+2),U.subVectors(Z,W),D.subVectors(K,W),U.cross(D),$.setXYZ(O+0,U.x,U.y,U.z),$.setXYZ(O+1,U.x,U.y,U.z),$.setXYZ(O+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)pJ.fromBufferAttribute(J,Q),pJ.normalize(),J.setXYZ(Q,pJ.x,pJ.y,pJ.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:D}=X,O=new H.constructor(Y.length*U),G=0,R=0;for(let M=0,z=Y.length;M<z;M++){if(X.isInterleavedBufferAttribute)G=Y[M]*X.data.stride+X.offset;else G=Y[M]*U;for(let E=0;E<U;E++)O[R++]=H[G++]}return new bJ(O,U,D)}if(this.index===null)return o0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new SJ,$=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,$);Q.setAttribute(X,H)}let W=this.morphAttributes;for(let X in W){let Y=[],H=W[X];for(let U=0,D=H.length;U<D;U++){let O=H[U],G=J(O,$);Y.push(G)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;for(let X=0,Y=Z.length;X<Y;X++){let H=Z[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let H=$[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},W=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let D=0,O=H.length;D<O;D++){let G=H[D];U.push(G.toJSON(J.data))}if(U.length>0)K[Y]=U,W=!0}if(W)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;if(Z.length>0)J.data.groups=JSON.parse(JSON.stringify(Z));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let K=J.attributes;for(let H in K){let U=K[H];this.setAttribute(H,U.clone(Q))}let W=J.morphAttributes;for(let H in W){let U=[],D=W[H];for(let O=0,G=D.length;O<G;O++)U.push(D[O].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let Z=J.groups;for(let H=0,U=Z.length;H<U;H++){let D=Z[H];this.addGroup(D.start,D.count,D.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var JY=0;class R9 extends p8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:JY++}),this.uuid=k7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new QJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){o0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){o0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set($);else if(K&&K.isVector2&&($&&$.isVector2)||K&&K.isEuler&&($&&$.isEuler)||K&&K.isVector3&&($&&$.isVector3))K.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function K(W){let Z=[];for(let X in W){let Y=W[X];delete Y.metadata,Z.push(Y)}return Z}if(Q){let W=K(J.textures),Z=K(J.images);if(W.length>0)$.textures=W;if(Z.length>0)$.images=Z}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new QJ().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new i0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new i0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let K=Q.length;$=Array(K);for(let W=0;W!==K;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var a8=new x,hQ=new x,E6=new x,N9=new x,bQ=new x,R6=new x,fQ=new x;class V7{constructor(J=new x,Q=new x(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,a8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=a8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return a8.copy(this.origin).addScaledVector(this.direction,Q),a8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,K){hQ.copy(J).add(Q).multiplyScalar(0.5),E6.copy(Q).sub(J).normalize(),N9.copy(this.origin).sub(hQ);let W=J.distanceTo(Q)*0.5,Z=-this.direction.dot(E6),X=N9.dot(this.direction),Y=-N9.dot(E6),H=N9.lengthSq(),U=Math.abs(1-Z*Z),D,O,G,R;if(U>0)if(D=Z*Y-X,O=Z*X-Y,R=W*U,D>=0)if(O>=-R)if(O<=R){let M=1/U;D*=M,O*=M,G=D*(D+Z*O+2*X)+O*(Z*D+O+2*Y)+H}else O=W,D=Math.max(0,-(Z*O+X)),G=-D*D+O*(O+2*Y)+H;else O=-W,D=Math.max(0,-(Z*O+X)),G=-D*D+O*(O+2*Y)+H;else if(O<=-R)D=Math.max(0,-(-Z*W+X)),O=D>0?-W:Math.min(Math.max(-W,-Y),W),G=-D*D+O*(O+2*Y)+H;else if(O<=R)D=0,O=Math.min(Math.max(-W,-Y),W),G=O*(O+2*Y)+H;else D=Math.max(0,-(Z*W+X)),O=D>0?W:Math.min(Math.max(-W,-Y),W),G=-D*D+O*(O+2*Y)+H;else O=Z>0?-W:W,D=Math.max(0,-(Z*O+X)),G=-D*D+O*(O+2*Y)+H;if($)$.copy(this.origin).addScaledVector(this.direction,D);if(K)K.copy(hQ).addScaledVector(E6,O);return G}intersectSphere(J,Q){a8.subVectors(J.center,this.origin);let $=a8.dot(this.direction),K=a8.dot(a8)-$*$,W=J.radius*J.radius;if(K>W)return null;let Z=Math.sqrt(W-K),X=$-Z,Y=$+Z;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,K,W,Z,X,Y,H=1/this.direction.x,U=1/this.direction.y,D=1/this.direction.z,O=this.origin;if(H>=0)$=(J.min.x-O.x)*H,K=(J.max.x-O.x)*H;else $=(J.max.x-O.x)*H,K=(J.min.x-O.x)*H;if(U>=0)W=(J.min.y-O.y)*U,Z=(J.max.y-O.y)*U;else W=(J.max.y-O.y)*U,Z=(J.min.y-O.y)*U;if($>Z||W>K)return null;if(W>$||isNaN($))$=W;if(Z<K||isNaN(K))K=Z;if(D>=0)X=(J.min.z-O.z)*D,Y=(J.max.z-O.z)*D;else X=(J.max.z-O.z)*D,Y=(J.min.z-O.z)*D;if($>Y||X>K)return null;if(X>$||$!==$)$=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at($>=0?$:K,Q)}intersectsBox(J){return this.intersectBox(J,a8)!==null}intersectTriangle(J,Q,$,K,W){bQ.subVectors(Q,J),R6.subVectors($,J),fQ.crossVectors(bQ,R6);let Z=this.direction.dot(fQ),X;if(Z>0){if(K)return null;X=1}else if(Z<0)X=-1,Z=-Z;else return null;N9.subVectors(this.origin,J);let Y=X*this.direction.dot(R6.crossVectors(N9,R6));if(Y<0)return null;let H=X*this.direction.dot(bQ.cross(N9));if(H<0)return null;if(Y+H>Z)return null;let U=-X*N9.dot(fQ);if(U<0)return null;return this.at(U/Z,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hJ extends R9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new QJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new t8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var lK=new IJ,C9=new V7,k6=new M7,cK=new x,M6=new x,V6=new x,B6=new x,xQ=new x,L6=new x,nK=new x,z6=new x;class F0 extends vJ{constructor(J=new SJ,Q=new hJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let K=Q[$[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Z=K.length;W<Z;W++){let X=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition(J,Q){let $=this.geometry,K=$.attributes.position,W=$.morphAttributes.position,Z=$.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if(W&&X){L6.set(0,0,0);for(let Y=0,H=W.length;Y<H;Y++){let U=X[Y],D=W[Y];if(U===0)continue;if(xQ.fromBufferAttribute(D,J),Z)L6.addScaledVector(xQ,U);else L6.addScaledVector(xQ.sub(Q),U)}Q.add(L6)}return Q}raycast(J,Q){let $=this.geometry,K=this.material,W=this.matrixWorld;if(K===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(k6.copy($.boundingSphere),k6.applyMatrix4(W),C9.copy(J.ray).recast(J.near),k6.containsPoint(C9.origin)===!1){if(C9.intersectSphere(k6,cK)===null)return;if(C9.origin.distanceToSquared(cK)>(J.far-J.near)**2)return}if(lK.copy(W).invert(),C9.copy(J.ray).applyMatrix4(lK),$.boundingBox!==null){if(C9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,C9)}_computeIntersections(J,Q,$){let K,W=this.geometry,Z=this.material,X=W.index,Y=W.attributes.position,H=W.attributes.uv,U=W.attributes.uv1,D=W.attributes.normal,O=W.groups,G=W.drawRange;if(X!==null)if(Array.isArray(Z))for(let R=0,M=O.length;R<M;R++){let z=O[R],E=Z[z.materialIndex],F=Math.max(z.start,G.start),T=Math.min(X.count,Math.min(z.start+z.count,G.start+G.count));for(let A=F,V=T;A<V;A+=3){let P=X.getX(A),C=X.getX(A+1),j=X.getX(A+2);if(K=I6(this,E,J,$,H,U,D,P,C,j),K)K.faceIndex=Math.floor(A/3),K.face.materialIndex=z.materialIndex,Q.push(K)}}else{let R=Math.max(0,G.start),M=Math.min(X.count,G.start+G.count);for(let z=R,E=M;z<E;z+=3){let F=X.getX(z),T=X.getX(z+1),A=X.getX(z+2);if(K=I6(this,Z,J,$,H,U,D,F,T,A),K)K.faceIndex=Math.floor(z/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(Z))for(let R=0,M=O.length;R<M;R++){let z=O[R],E=Z[z.materialIndex],F=Math.max(z.start,G.start),T=Math.min(Y.count,Math.min(z.start+z.count,G.start+G.count));for(let A=F,V=T;A<V;A+=3){let P=A,C=A+1,j=A+2;if(K=I6(this,E,J,$,H,U,D,P,C,j),K)K.faceIndex=Math.floor(A/3),K.face.materialIndex=z.materialIndex,Q.push(K)}}else{let R=Math.max(0,G.start),M=Math.min(Y.count,G.start+G.count);for(let z=R,E=M;z<E;z+=3){let F=z,T=z+1,A=z+2;if(K=I6(this,Z,J,$,H,U,D,F,T,A),K)K.faceIndex=Math.floor(z/3),Q.push(K)}}}}function QY(J,Q,$,K,W,Z,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,Z,W,!0,Y);else H=K.intersectTriangle(W,Z,X,Q.side===0,Y);if(H===null)return null;z6.copy(Y),z6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(z6);if(U<$.near||U>$.far)return null;return{distance:U,point:z6.clone(),object:J}}function I6(J,Q,$,K,W,Z,X,Y,H,U){J.getVertexPosition(Y,M6),J.getVertexPosition(H,V6),J.getVertexPosition(U,B6);let D=QY(J,Q,$,K,M6,V6,B6,nK);if(D){let O=new x;if(B8.getBarycoord(nK,M6,V6,B6,O),W)D.uv=B8.getInterpolatedAttribute(W,Y,H,U,O,new i0);if(Z)D.uv1=B8.getInterpolatedAttribute(Z,Y,H,U,O,new i0);if(X){if(D.normal=B8.getInterpolatedAttribute(X,Y,H,U,O,new x),D.normal.dot(K.direction)>0)D.normal.multiplyScalar(-1)}let G={a:Y,b:H,c:U,normal:new x,materialIndex:0};B8.getNormal(M6,V6,B6,G.normal),D.face=G,D.barycoord=O}return D}class c$ extends lJ{constructor(J=null,Q=1,$=1,K,W,Z,X,Y,H=1003,U=1003,D,O){super(null,Z,X,Y,H,U,K,W,D,O);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var gQ=new x,$Y=new x,KY=new KJ;class T8{constructor(J=new x(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,K){return this.normal.set(J,Q,$),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let K=gQ.subVectors($,Q).cross($Y.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let K=J.delta(gQ),W=this.normal.dot(K);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let Z=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(Z<0||Z>1))return null;return Q.copy(J.start).addScaledVector(K,Z)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||KY.getNormalMatrix(J),K=this.coplanarPoint(gQ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-K.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var T9=new M7,WY=new i0(0.5,0.5),P6=new x;class a7{constructor(J=new T8,Q=new T8,$=new T8,K=new T8,W=new T8,Z=new T8){this.planes=[J,Q,$,K,W,Z]}set(J,Q,$,K,W,Z){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(K),X[4].copy(W),X[5].copy(Z),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let K=this.planes,W=J.elements,Z=W[0],X=W[1],Y=W[2],H=W[3],U=W[4],D=W[5],O=W[6],G=W[7],R=W[8],M=W[9],z=W[10],E=W[11],F=W[12],T=W[13],A=W[14],V=W[15];if(K[0].setComponents(H-Z,G-U,E-R,V-F).normalize(),K[1].setComponents(H+Z,G+U,E+R,V+F).normalize(),K[2].setComponents(H+X,G+D,E+M,V+T).normalize(),K[3].setComponents(H-X,G-D,E-M,V-T).normalize(),$)K[4].setComponents(Y,O,z,A).normalize(),K[5].setComponents(H-Y,G-O,E-z,V-A).normalize();else if(K[4].setComponents(H-Y,G-O,E-z,V-A).normalize(),Q===2000)K[5].setComponents(H+Y,G+O,E+z,V+A).normalize();else if(Q===2001)K[5].setComponents(Y,O,z,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();T9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();T9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(T9)}intersectsSprite(J){T9.center.set(0,0,0);let Q=WY.distanceTo(J.center);return T9.radius=0.7071067811865476+Q,T9.applyMatrix4(J.matrixWorld),this.intersectsSphere(T9)}intersectsSphere(J){let Q=this.planes,$=J.center,K=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let K=Q[$];if(P6.x=K.normal.x>0?J.max.x:J.min.x,P6.y=K.normal.y>0?J.max.y:J.min.y,P6.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(P6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class k9 extends R9{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new QJ(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var sK=new IJ,mQ=new V7,A6=new M7,_6=new x;class m9 extends vJ{constructor(J=new SJ,Q=new k9){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,K=this.matrixWorld,W=J.params.Points.threshold,Z=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(A6.copy($.boundingSphere),A6.applyMatrix4(K),A6.radius+=W,J.ray.intersectsSphere(A6)===!1)return;sK.copy(K).invert(),mQ.copy(J.ray).applyMatrix4(sK);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=X*X,H=$.index,D=$.attributes.position;if(H!==null){let O=Math.max(0,Z.start),G=Math.min(H.count,Z.start+Z.count);for(let R=O,M=G;R<M;R++){let z=H.getX(R);_6.fromBufferAttribute(D,z),iK(_6,z,Y,K,J,Q,this)}}else{let O=Math.max(0,Z.start),G=Math.min(D.count,Z.start+Z.count);for(let R=O,M=G;R<M;R++)_6.fromBufferAttribute(D,R),iK(_6,R,Y,K,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let K=Q[$[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Z=K.length;W<Z;W++){let X=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function iK(J,Q,$,K,W,Z,X){let Y=mQ.distanceSqToPoint(J);if(Y<$){let H=new x;mQ.closestPointToPoint(J,H),H.applyMatrix4(K);let U=W.ray.origin.distanceTo(H);if(U<W.near||U>W.far)return;Z.push({distance:U,distanceToRay:Math.sqrt(Y),point:H,index:Q,face:null,faceIndex:null,barycoord:null,object:X})}}class i6 extends lJ{constructor(J=[],Q=301,$,K,W,Z,X,Y,H,U){super(J,Q,$,K,W,Z,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class m8 extends lJ{constructor(J,Q,$,K,W,Z,X,Y,H){super(J,Q,$,K,W,Z,X,Y,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class M9 extends lJ{constructor(J,Q,$=1014,K,W,Z,X=1003,Y=1003,H,U=1026,D=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let O={width:J,height:Q,depth:D};super(O,K,W,Z,X,Y,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new s7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class n$ extends M9{constructor(J,Q=1014,$=301,K,W,Z=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},D=[U,U,U,U,U,U];super(J,J,Q,$,K,W,Z,X,Y,H);this.image=D,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class o6 extends lJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class u0 extends SJ{constructor(J=1,Q=1,$=1,K=1,W=1,Z=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:K,heightSegments:W,depthSegments:Z};let X=this;K=Math.floor(K),W=Math.floor(W),Z=Math.floor(Z);let Y=[],H=[],U=[],D=[],O=0,G=0;R("z","y","x",-1,-1,$,Q,J,Z,W,0),R("z","y","x",1,-1,$,Q,-J,Z,W,1),R("x","z","y",1,1,J,$,Q,K,Z,2),R("x","z","y",1,-1,J,$,-Q,K,Z,3),R("x","y","z",1,-1,J,Q,$,K,W,4),R("x","y","z",-1,-1,J,Q,-$,K,W,5),this.setIndex(Y),this.setAttribute("position",new zJ(H,3)),this.setAttribute("normal",new zJ(U,3)),this.setAttribute("uv",new zJ(D,2));function R(M,z,E,F,T,A,V,P,C,j,k){let L=A/C,i=V/j,S=A/2,n=V/2,J0=P/2,u=C+1,t=j+1,Q0=0,d=0,Y0=new x;for(let N0=0;N0<t;N0++){let E0=N0*i-n;for(let v0=0;v0<u;v0++){let w0=v0*L-S;Y0[M]=w0*F,Y0[z]=E0*T,Y0[E]=J0,H.push(Y0.x,Y0.y,Y0.z),Y0[M]=0,Y0[z]=0,Y0[E]=P>0?1:-1,U.push(Y0.x,Y0.y,Y0.z),D.push(v0/C),D.push(1-N0/j),Q0+=1}}for(let N0=0;N0<j;N0++)for(let E0=0;E0<C;E0++){let v0=O+E0+u*N0,w0=O+E0+u*(N0+1),XJ=O+(E0+1)+u*(N0+1),ZJ=O+(E0+1)+u*N0;Y.push(v0,w0,ZJ),Y.push(w0,XJ,ZJ),d+=6}X.addGroup(G,d,k),G+=d,O+=Q0}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new u0(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class mJ extends SJ{constructor(J=1,Q=1,$=1,K=32,W=1,Z=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:K,heightSegments:W,openEnded:Z,thetaStart:X,thetaLength:Y};let H=this;K=Math.floor(K),W=Math.floor(W);let U=[],D=[],O=[],G=[],R=0,M=[],z=$/2,E=0;if(F(),Z===!1){if(J>0)T(!0);if(Q>0)T(!1)}this.setIndex(U),this.setAttribute("position",new zJ(D,3)),this.setAttribute("normal",new zJ(O,3)),this.setAttribute("uv",new zJ(G,2));function F(){let A=new x,V=new x,P=0,C=(Q-J)/$;for(let j=0;j<=W;j++){let k=[],L=j/W,i=L*(Q-J)+J;for(let S=0;S<=K;S++){let n=S/K,J0=n*Y+X,u=Math.sin(J0),t=Math.cos(J0);V.x=i*u,V.y=-L*$+z,V.z=i*t,D.push(V.x,V.y,V.z),A.set(u,C,t).normalize(),O.push(A.x,A.y,A.z),G.push(n,1-L),k.push(R++)}M.push(k)}for(let j=0;j<K;j++)for(let k=0;k<W;k++){let L=M[k][j],i=M[k+1][j],S=M[k+1][j+1],n=M[k][j+1];if(J>0||k!==0)U.push(L,i,n),P+=3;if(Q>0||k!==W-1)U.push(i,S,n),P+=3}H.addGroup(E,P,0),E+=P}function T(A){let V=R,P=new i0,C=new x,j=0,k=A===!0?J:Q,L=A===!0?1:-1;for(let S=1;S<=K;S++)D.push(0,z*L,0),O.push(0,L,0),G.push(0.5,0.5),R++;let i=R;for(let S=0;S<=K;S++){let J0=S/K*Y+X,u=Math.cos(J0),t=Math.sin(J0);C.x=k*t,C.y=z*L,C.z=k*u,D.push(C.x,C.y,C.z),O.push(0,L,0),P.x=u*0.5+0.5,P.y=t*0.5*L+0.5,G.push(P.x,P.y),R++}for(let S=0;S<K;S++){let n=V+S,J0=i+S;if(A===!0)U.push(J0,J0+1,n);else U.push(J0+1,J0,n);j+=3}H.addGroup(E,j,A===!0?1:2),E+=j}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new mJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class d9 extends mJ{constructor(J=1,Q=1,$=32,K=1,W=!1,Z=0,X=Math.PI*2){super(0,J,Q,$,K,W,Z,X);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:K,openEnded:W,thetaStart:Z,thetaLength:X}}static fromJSON(J){return new d9(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class a6 extends SJ{constructor(J=[],Q=[],$=1,K=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:K};let W=[],Z=[];if(X(K),H($),U(),this.setAttribute("position",new zJ(W,3)),this.setAttribute("normal",new zJ(W.slice(),3)),this.setAttribute("uv",new zJ(Z,2)),K===0)this.computeVertexNormals();else this.normalizeNormals();function X(F){let T=new x,A=new x,V=new x;for(let P=0;P<Q.length;P+=3)G(Q[P+0],T),G(Q[P+1],A),G(Q[P+2],V),Y(T,A,V,F)}function Y(F,T,A,V){let P=V+1,C=[];for(let j=0;j<=P;j++){C[j]=[];let k=F.clone().lerp(A,j/P),L=T.clone().lerp(A,j/P),i=P-j;for(let S=0;S<=i;S++)if(S===0&&j===P)C[j][S]=k;else C[j][S]=k.clone().lerp(L,S/i)}for(let j=0;j<P;j++)for(let k=0;k<2*(P-j)-1;k++){let L=Math.floor(k/2);if(k%2===0)O(C[j][L+1]),O(C[j+1][L]),O(C[j][L]);else O(C[j][L+1]),O(C[j+1][L+1]),O(C[j+1][L])}}function H(F){let T=new x;for(let A=0;A<W.length;A+=3)T.x=W[A+0],T.y=W[A+1],T.z=W[A+2],T.normalize().multiplyScalar(F),W[A+0]=T.x,W[A+1]=T.y,W[A+2]=T.z}function U(){let F=new x;for(let T=0;T<W.length;T+=3){F.x=W[T+0],F.y=W[T+1],F.z=W[T+2];let A=z(F)/2/Math.PI+0.5,V=E(F)/Math.PI+0.5;Z.push(A,1-V)}R(),D()}function D(){for(let F=0;F<Z.length;F+=6){let T=Z[F+0],A=Z[F+2],V=Z[F+4],P=Math.max(T,A,V),C=Math.min(T,A,V);if(P>0.9&&C<0.1){if(T<0.2)Z[F+0]+=1;if(A<0.2)Z[F+2]+=1;if(V<0.2)Z[F+4]+=1}}}function O(F){W.push(F.x,F.y,F.z)}function G(F,T){let A=F*3;T.x=J[A+0],T.y=J[A+1],T.z=J[A+2]}function R(){let F=new x,T=new x,A=new x,V=new x,P=new i0,C=new i0,j=new i0;for(let k=0,L=0;k<W.length;k+=9,L+=6){F.set(W[k+0],W[k+1],W[k+2]),T.set(W[k+3],W[k+4],W[k+5]),A.set(W[k+6],W[k+7],W[k+8]),P.set(Z[L+0],Z[L+1]),C.set(Z[L+2],Z[L+3]),j.set(Z[L+4],Z[L+5]),V.copy(F).add(T).add(A).divideScalar(3);let i=z(V);M(P,L+0,F,i),M(C,L+2,T,i),M(j,L+4,A,i)}}function M(F,T,A,V){if(V<0&&F.x===1)Z[T]=F.x-1;if(A.x===0&&A.z===0)Z[T]=V/2/Math.PI+0.5}function z(F){return Math.atan2(F.z,-F.x)}function E(F){return Math.atan2(-F.y,Math.sqrt(F.x*F.x+F.z*F.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new a6(J.vertices,J.indices,J.radius,J.detail)}}class B7 extends a6{constructor(J=1,Q=0){let $=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],K=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super($,K,J,Q);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new B7(J.radius,J.detail)}}class y8 extends SJ{constructor(J=1,Q=1,$=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:K};let W=J/2,Z=Q/2,X=Math.floor($),Y=Math.floor(K),H=X+1,U=Y+1,D=J/X,O=Q/Y,G=[],R=[],M=[],z=[];for(let E=0;E<U;E++){let F=E*O-Z;for(let T=0;T<H;T++){let A=T*D-W;R.push(A,-F,0),M.push(0,0,1),z.push(T/X),z.push(1-E/Y)}}for(let E=0;E<Y;E++)for(let F=0;F<X;F++){let T=F+H*E,A=F+H*(E+1),V=F+1+H*(E+1),P=F+1+H*E;G.push(T,A,P),G.push(A,V,P)}this.setIndex(G),this.setAttribute("position",new zJ(R,3)),this.setAttribute("normal",new zJ(M,3)),this.setAttribute("uv",new zJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new y8(J.width,J.height,J.widthSegments,J.heightSegments)}}class V9 extends SJ{constructor(J=0.5,Q=1,$=32,K=1,W=0,Z=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:K,thetaStart:W,thetaLength:Z},$=Math.max(3,$),K=Math.max(1,K);let X=[],Y=[],H=[],U=[],D=J,O=(Q-J)/K,G=new x,R=new i0;for(let M=0;M<=K;M++){for(let z=0;z<=$;z++){let E=W+z/$*Z;G.x=D*Math.cos(E),G.y=D*Math.sin(E),Y.push(G.x,G.y,G.z),H.push(0,0,1),R.x=(G.x/Q+1)/2,R.y=(G.y/Q+1)/2,U.push(R.x,R.y)}D+=O}for(let M=0;M<K;M++){let z=M*($+1);for(let E=0;E<$;E++){let F=E+z,T=F,A=F+$+1,V=F+$+2,P=F+1;X.push(T,A,P),X.push(A,V,P)}}this.setIndex(X),this.setAttribute("position",new zJ(Y,3)),this.setAttribute("normal",new zJ(H,3)),this.setAttribute("uv",new zJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new V9(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class v8 extends SJ{constructor(J=1,Q=32,$=16,K=0,W=Math.PI*2,Z=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:K,phiLength:W,thetaStart:Z,thetaLength:X},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(Z+X,Math.PI),H=0,U=[],D=new x,O=new x,G=[],R=[],M=[],z=[];for(let E=0;E<=$;E++){let F=[],T=E/$,A=Z+T*X,V=J*Math.cos(A),P=Math.sqrt(J*J-V*V),C=0;if(E===0&&Z===0)C=0.5/Q;else if(E===$&&Y===Math.PI)C=-0.5/Q;for(let j=0;j<=Q;j++){let k=j/Q,L=K+k*W;D.x=-P*Math.cos(L),D.y=V,D.z=P*Math.sin(L),R.push(D.x,D.y,D.z),O.copy(D).normalize(),M.push(O.x,O.y,O.z),z.push(k+C,1-T),F.push(H++)}U.push(F)}for(let E=0;E<$;E++)for(let F=0;F<Q;F++){let T=U[E][F+1],A=U[E][F],V=U[E+1][F],P=U[E+1][F+1];if(E!==0||Z>0)G.push(T,A,P);if(E!==$-1||Y<Math.PI)G.push(A,V,P)}this.setIndex(G),this.setAttribute("position",new zJ(R,3)),this.setAttribute("normal",new zJ(M,3)),this.setAttribute("uv",new zJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new v8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class L7 extends SJ{constructor(J=1,Q=0.4,$=12,K=48,W=Math.PI*2,Z=0,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:K,arc:W,thetaStart:Z,thetaLength:X},$=Math.floor($),K=Math.floor(K);let Y=[],H=[],U=[],D=[],O=new x,G=new x,R=new x;for(let M=0;M<=$;M++){let z=Z+M/$*X;for(let E=0;E<=K;E++){let F=E/K*W;G.x=(J+Q*Math.cos(z))*Math.cos(F),G.y=(J+Q*Math.cos(z))*Math.sin(F),G.z=Q*Math.sin(z),H.push(G.x,G.y,G.z),O.x=J*Math.cos(F),O.y=J*Math.sin(F),R.subVectors(G,O).normalize(),U.push(R.x,R.y,R.z),D.push(E/K),D.push(M/$)}}for(let M=1;M<=$;M++)for(let z=1;z<=K;z++){let E=(K+1)*M+z-1,F=(K+1)*(M-1)+z-1,T=(K+1)*(M-1)+z,A=(K+1)*M+z;Y.push(E,F,A),Y.push(F,T,A)}this.setIndex(Y),this.setAttribute("position",new zJ(H,3)),this.setAttribute("normal",new zJ(U,3)),this.setAttribute("uv",new zJ(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new L7(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}function u9(J){let Q={};for(let $ in J){Q[$]={};for(let K in J[$]){let W=J[$][K];if(oK(W))if(W.isRenderTargetTexture)o0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][K]=null;else Q[$][K]=W.clone();else if(Array.isArray(W))if(oK(W[0])){let Z=[];for(let X=0,Y=W.length;X<Y;X++)Z[X]=W[X].clone();Q[$][K]=Z}else Q[$][K]=W.slice();else Q[$][K]=W}}return Q}function oJ(J){let Q={};for(let $=0;$<J.length;$++){let K=u9(J[$]);for(let W in K)Q[W]=K[W]}return Q}function oK(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function ZY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function s$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return FJ.workingColorSpace}var QZ={clone:u9,merge:oJ},XY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class H8 extends R9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XY,this.fragmentShader=YY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=u9(J.uniforms),this.uniformsGroups=ZY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let Z=this.uniforms[K].value;if(Z&&Z.isTexture)Q.uniforms[K]={type:"t",value:Z.toJSON(J).uuid};else if(Z&&Z.isColor)Q.uniforms[K]={type:"c",value:Z.getHex()};else if(Z&&Z.isVector2)Q.uniforms[K]={type:"v2",value:Z.toArray()};else if(Z&&Z.isVector3)Q.uniforms[K]={type:"v3",value:Z.toArray()};else if(Z&&Z.isVector4)Q.uniforms[K]={type:"v4",value:Z.toArray()};else if(Z&&Z.isMatrix3)Q.uniforms[K]={type:"m3",value:Z.toArray()};else if(Z&&Z.isMatrix4)Q.uniforms[K]={type:"m4",value:Z.toArray()};else Q.uniforms[K]={value:Z}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let K in this.extensions)if(this.extensions[K]===!0)$[K]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let K=J.uniforms[$];switch(this.uniforms[$]={},K.type){case"t":this.uniforms[$].value=Q[K.value]||null;break;case"c":this.uniforms[$].value=new QJ().setHex(K.value);break;case"v2":this.uniforms[$].value=new i0().fromArray(K.value);break;case"v3":this.uniforms[$].value=new x().fromArray(K.value);break;case"v4":this.uniforms[$].value=new wJ().fromArray(K.value);break;case"m3":this.uniforms[$].value=new KJ().fromArray(K.value);break;case"m4":this.uniforms[$].value=new IJ().fromArray(K.value);break;default:this.uniforms[$].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class i$ extends H8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class r0 extends R9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new QJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new QJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new t8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class z7 extends r0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new i0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new QJ(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new QJ(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new QJ(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class o$ extends R9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class a$ extends R9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function w6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class l9{constructor(J,Q,$,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,K=Q[$],W=Q[$-1];$:{J:{let Z;Q:{K:if(!(J<K)){for(let X=$+2;;){if(K===void 0){if(J<W)break K;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(W=K,K=Q[++$],J<K)break J}Z=Q.length;break Q}if(!(J>=W)){let X=Q[1];if(J<X)$=2,W=X;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(K=W,W=Q[--$-1],J>=W)break J}Z=$,$=0;break Q}break $}while($<Z){let X=$+Z>>>1;if(J<Q[X])Z=X;else $=X+1}if(K=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,K)}return this.interpolate_($,W,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,K=this.valueSize,W=J*K;for(let Z=0;Z!==K;++Z)Q[Z]=$[W+Z];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class r$ extends l9{constructor(J,Q,$,K){super(J,Q,$,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let K=this.parameterPositions,W=J-2,Z=J+1,X=K[W],Y=K[Z];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,X=2*Q-$;break;case 2402:W=K.length-2,X=Q+K[W]-K[W+1];break;default:W=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:Z=J,Y=2*$-Q;break;case 2402:Z=1,Y=$+K[1]-K[0];break;default:Z=J-1,Y=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-$),this._offsetPrev=W*U,this._offsetNext=Z*U}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,D=this._offsetNext,O=this._weightPrev,G=this._weightNext,R=($-Q)/(K-Q),M=R*R,z=M*R,E=-O*z+2*O*M-O*R,F=(1+O)*z+(-1.5-2*O)*M+(-0.5+O)*R+1,T=(-1-G)*z+(1.5+G)*M+0.5*R,A=G*z-G*M;for(let V=0;V!==X;++V)W[V]=E*Z[U+V]+F*Z[H+V]+T*Z[Y+V]+A*Z[D+V];return W}}class t$ extends l9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=($-Q)/(K-Q),D=1-U;for(let O=0;O!==X;++O)W[O]=Z[H+O]*D+Z[Y+O]*U;return W}}class e$ extends l9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class JK extends l9{interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,D=this.outTangents;if(!U||!D){let R=($-Q)/(K-Q),M=1-R;for(let z=0;z!==X;++z)W[z]=Z[H+z]*M+Z[Y+z]*R;return W}let O=X*2,G=J-1;for(let R=0;R!==X;++R){let M=Z[H+R],z=Z[Y+R],E=G*O+R*2,F=D[E],T=D[E+1],A=J*O+R*2,V=U[A],P=U[A+1],C=($-Q)/(K-Q),j,k,L,i,S;for(let n=0;n<8;n++){j=C*C,k=j*C,L=1-C,i=L*L,S=i*L;let u=S*Q+3*i*C*F+3*L*j*V+k*K-$;if(Math.abs(u)<0.0000000001)break;let t=3*i*(F-Q)+6*L*C*(V-F)+3*j*(K-V);if(Math.abs(t)<0.0000000001)break;C=C-u/t,C=Math.max(0,Math.min(1,C))}W[R]=S*M+3*i*C*T+3*L*j*P+k*z}return W}}class I8{constructor(J,Q,$,K){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=w6(Q,this.TimeBufferType),this.values=w6($,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:w6(J.times,Array),values:w6(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)$.interpolation=K}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new e$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new t$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new r$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new JK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return o0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,K=Q.length;$!==K;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,K=Q.length;$!==K;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,K=$.length,W=0,Z=K-1;while(W!==K&&$[W]<J)++W;while(Z!==-1&&$[Z]>Q)--Z;if(++Z,W!==0||Z!==K){if(W>=Z)Z=Math.max(Z,1),W=Z-1;let X=this.getValueSize();this.times=$.slice(W,Z),this.values=this.values.slice(W*X,Z*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)a0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,K=this.values,W=$.length;if(W===0)a0("KeyframeTrack: Track is empty.",this),J=!1;let Z=null;for(let X=0;X!==W;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){a0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(Z!==null&&Z>Y){a0("KeyframeTrack: Out of order keys.",this,X,Y,Z),J=!1;break}Z=Y}if(K!==void 0){if(IX(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){a0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),K=this.getInterpolation()===2302,W=J.length-1,Z=1;for(let X=1;X<W;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!K){let D=X*$,O=D-$,G=D+$;for(let R=0;R!==$;++R){let M=Q[D+R];if(M!==Q[O+R]||M!==Q[G+R]){Y=!0;break}}}else Y=!0;if(Y){if(X!==Z){J[Z]=J[X];let D=X*$,O=Z*$;for(let G=0;G!==$;++G)Q[O+G]=Q[D+G]}++Z}}if(W>0){J[Z]=J[W];for(let X=W*$,Y=Z*$,H=0;H!==$;++H)Q[Y+H]=Q[X+H];++Z}if(Z!==J.length)this.times=J.slice(0,Z),this.values=Q.slice(0,Z*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);return K.createInterpolant=this.createInterpolant,K}}I8.prototype.ValueTypeName="";I8.prototype.TimeBufferType=Float32Array;I8.prototype.ValueBufferType=Float32Array;I8.prototype.DefaultInterpolation=2301;class c9 extends I8{constructor(J,Q,$){super(J,Q,$)}}c9.prototype.ValueTypeName="bool";c9.prototype.ValueBufferType=Array;c9.prototype.DefaultInterpolation=2300;c9.prototype.InterpolantFactoryMethodLinear=void 0;c9.prototype.InterpolantFactoryMethodSmooth=void 0;class QK extends I8{constructor(J,Q,$,K){super(J,Q,$,K)}}QK.prototype.ValueTypeName="color";class $K extends I8{constructor(J,Q,$,K){super(J,Q,$,K)}}$K.prototype.ValueTypeName="number";class KK extends l9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=($-Q)/(K-Q),H=J*X;for(let U=H+X;H!==U;H+=4)L8.slerpFlat(W,0,Z,H-X,Z,H,Y);return W}}class r6 extends I8{constructor(J,Q,$,K){super(J,Q,$,K)}InterpolantFactoryMethodLinear(J){return new KK(this.times,this.values,this.getValueSize(),J)}}r6.prototype.ValueTypeName="quaternion";r6.prototype.InterpolantFactoryMethodSmooth=void 0;class n9 extends I8{constructor(J,Q,$){super(J,Q,$)}}n9.prototype.ValueTypeName="string";n9.prototype.ValueBufferType=Array;n9.prototype.DefaultInterpolation=2300;n9.prototype.InterpolantFactoryMethodLinear=void 0;n9.prototype.InterpolantFactoryMethodSmooth=void 0;class WK extends I8{constructor(J,Q,$,K){super(J,Q,$,K)}}WK.prototype.ValueTypeName="vector";class ZK{constructor(J,Q,$){let K=this,W=!1,Z=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(X++,W===!1){if(K.onStart!==void 0)K.onStart(U,Z,X)}W=!0},this.itemEnd=function(U){if(Z++,K.onProgress!==void 0)K.onProgress(U,Z,X);if(Z===X){if(W=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(U){if(K.onError!==void 0)K.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,D){return H.push(U,D),this},this.removeHandler=function(U){let D=H.indexOf(U);if(D!==-1)H.splice(D,2);return this},this.getHandler=function(U){for(let D=0,O=H.length;D<O;D+=2){let G=H[D],R=H[D+1];if(G.global)G.lastIndex=0;if(G.test(U))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var $Z=new ZK;class XK{constructor(J){if(this.manager=J!==void 0?J:$Z,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(K,W){$.load(J,K,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}XK.DEFAULT_MATERIAL_NAME="__DEFAULT";class I7 extends vJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new QJ(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var pQ=new IJ,aK=new x,rK=new x;class t6{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new i0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new IJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new a7,this._frameExtents=new i0(1,1),this._viewportCount=1,this._viewports=[new wJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(aK.setFromMatrixPosition(J.matrixWorld),Q.position.copy(aK),rK.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(rK),Q.updateMatrixWorld(),pQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pQ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(pQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var C6=new x,T6=new L8,h8=new x;class e6 extends vJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new IJ,this.projectionMatrix=new IJ,this.projectionMatrixInverse=new IJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(C6,T6,h8),h8.x===1&&h8.y===1&&h8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(C6,T6,h8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(C6,T6,h8),h8.x===1&&h8.y===1&&h8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(C6,T6,h8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var G9=new x,tK=new i0,eK=new i0;class uJ extends e6{constructor(J=50,Q=1,$=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=j9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(x7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return j9*2*Math.atan(Math.tan(x7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){G9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(G9.x,G9.y).multiplyScalar(-J/G9.z),G9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(G9.x,G9.y).multiplyScalar(-J/G9.z)}getViewSize(J,Q){return this.getViewBounds(J,tK,eK),Q.subVectors(eK,tK)}setViewOffset(J,Q,$,K,W,Z){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=K,this.view.width=W,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(x7*0.5*this.fov)/this.zoom,$=2*Q,K=this.aspect*$,W=-0.5*K,Z=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=Z;W+=Z.offsetX*K/Y,Q-=Z.offsetY*$/H,K*=Z.width/Y,$*=Z.height/H}let X=this.filmOffset;if(X!==0)W+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+K,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class KZ extends t6{constructor(){super(new uJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=j9*2*J.angle*this.focus,K=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||K!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=K,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class B9 extends I7{constructor(J,Q,$=0,K=Math.PI/3,W=0,Z=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vJ.DEFAULT_UP),this.updateMatrix(),this.target=new vJ,this.distance=$,this.angle=K,this.penumbra=W,this.decay=Z,this.map=null,this.shadow=new KZ}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class WZ extends t6{constructor(){super(new uJ(90,1,0.5,500));this.isPointLightShadow=!0}}class d8 extends I7{constructor(J,Q,$=0,K=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=K,this.shadow=new WZ}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class r7 extends e6{constructor(J=-1,Q=1,$=1,K=-1,W=0.1,Z=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=K,this.near=W,this.far=Z,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,K,W,Z){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=K,this.view.width=W,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,K=(this.top+this.bottom)/2,W=$-J,Z=$+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=H*this.view.offsetX,Z=W+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic(W,Z,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class ZZ extends t6{constructor(){super(new r7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class P7 extends I7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vJ.DEFAULT_UP),this.updateMatrix(),this.target=new vJ,this.shadow=new ZZ}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class JQ extends I7{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var H7=-90,U7=1;class YK extends vJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new uJ(H7,U7,J,Q);K.layers=this.layers,this.add(K);let W=new uJ(H7,U7,J,Q);W.layers=this.layers,this.add(W);let Z=new uJ(H7,U7,J,Q);Z.layers=this.layers,this.add(Z);let X=new uJ(H7,U7,J,Q);X.layers=this.layers,this.add(X);let Y=new uJ(H7,U7,J,Q);Y.layers=this.layers,this.add(Y);let H=new uJ(H7,U7,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,K,W,Z,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),Z.up.set(0,0,1),Z.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),Z.up.set(0,0,-1),Z.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,Z,X,Y,H,U]=this.children,D=J.getRenderTarget(),O=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let M=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let z=!1;if(J.isWebGLRenderer===!0)z=J.state.buffers.depth.getReversed();else z=J.reversedDepthBuffer;if(J.setRenderTarget($,0,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,2,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,K),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=M,J.setRenderTarget($,5,K),z&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(D,O,G),J.xr.enabled=R,$.texture.needsPMREMUpdate=!0}}class HK extends uJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var UK="\\[\\]\\.:\\/",HY=new RegExp("["+UK+"]","g"),qK="[^"+UK+"]",UY="[^"+UK.replace("\\.","")+"]",qY=/((?:WC+[\/:])*)/.source.replace("WC",qK),NY=/(WCOD+)?/.source.replace("WCOD",UY),GY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qK),FY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qK),OY=new RegExp("^"+qY+NY+GY+FY+"$"),DY=["material","materials","bones","map"];class XZ{constructor(J,Q,$){let K=$||RJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,K=this._bindings[$];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let K=this._targetGroup.nCachedObjects_,W=$.length;K!==W;++K)$[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class RJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||RJ.parseTrackName(Q),this.node=RJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new RJ(J,Q,$);else return new RJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(HY,"")}static parseTrackName(J){let Q=OY.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=$.nodeName&&$.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let W=$.nodeName.substring(K+1);if(DY.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,K),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let Z=0;Z<W.length;Z++){let X=W[Z];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},K=$(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)J[Q++]=$[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,K=Q.propertyName,W=Q.propertyIndex;if(!J)J=RJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){o0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){a0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){a0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){a0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){a0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){a0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){a0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){a0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let Z=J[K];if(Z===void 0){let H=Q.nodeName;a0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){a0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){a0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=Z,this.propertyIndex=W}else if(Z.fromArray!==void 0&&Z.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=Z;else if(Array.isArray(Z))Y=this.BindingType.EntireArray,this.resolvedProperty=Z;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}RJ.Composite=XZ;RJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};RJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};RJ.prototype.GetterByBindingType=[RJ.prototype._getValue_direct,RJ.prototype._getValue_array,RJ.prototype._getValue_arrayElement,RJ.prototype._getValue_toArray];RJ.prototype.SetterByBindingTypeAndVersioning=[[RJ.prototype._setValue_direct,RJ.prototype._setValue_direct_setNeedsUpdate,RJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_array,RJ.prototype._setValue_array_setNeedsUpdate,RJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_arrayElement,RJ.prototype._setValue_arrayElement_setNeedsUpdate,RJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_fromArray,RJ.prototype._setValue_fromArray_setNeedsUpdate,RJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rN=new Float32Array(1);class t7{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=qJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(qJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class NK{static{NK.prototype.isMatrix2=!0}constructor(J,Q,$,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,K){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=K,this}}class QQ extends p8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(J===void 0){o0("Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function GK(J,Q,$,K){let W=EY(K);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function EY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)o0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function CZ(){let J=null,Q=!1,$=null,K=null;function W(Z,X){$(Z,X),K=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;K=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(Z){$=Z},setContext:function(Z){J=Z}}}function RY(J){let Q=new WeakMap;function $(Y,H){let{array:U,usage:D}=Y,O=U.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,U,D),Y.onUploadCallback();let R;if(U instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)R=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)R=J.SHORT;else if(U instanceof Uint32Array)R=J.UNSIGNED_INT;else if(U instanceof Int32Array)R=J.INT;else if(U instanceof Int8Array)R=J.BYTE;else if(U instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:R,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:O}}function K(Y,H,U){let{array:D,updateRanges:O}=H;if(J.bindBuffer(U,Y),O.length===0)J.bufferSubData(U,0,D);else{O.sort((R,M)=>R.start-M.start);let G=0;for(let R=1;R<O.length;R++){let M=O[G],z=O[R];if(z.start<=M.start+M.count+1)M.count=Math.max(M.count,z.start+z.count-M.start);else++G,O[G]=z}O.length=G+1;for(let R=0,M=O.length;R<M;R++){let z=O[R];J.bufferSubData(U,z.start*D.BYTES_PER_ELEMENT,D,z.start,z.count)}H.clearUpdateRanges()}H.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let D=Q.get(Y);if(!D||D.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(U.buffer,Y,H),U.version=Y.version}}return{get:W,remove:Z,update:X}}var kY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MY=`#ifdef USE_ALPHAHASH
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
#endif`,VY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IY=`#ifdef USE_AOMAP
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
#endif`,PY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AY=`#ifdef USE_BATCHING
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
#endif`,_Y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TY=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SY=`#ifdef USE_IRIDESCENCE
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
#endif`,jY=`#ifdef USE_BUMPMAP
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
#endif`,yY=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bY=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mY=`#define PI 3.141592653589793
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
} // validated`,dY=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uY=`vec3 transformedNormal = objectNormal;
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
#endif`,lY=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cY=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nY=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sY=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iY="gl_FragColor = linearToOutputTexel( gl_FragColor );",oY=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aY=`#ifdef USE_ENVMAP
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
#endif`,rY=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tY=`#ifdef USE_ENVMAP
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
#endif`,eY=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JH=`#ifdef USE_ENVMAP
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
#endif`,QH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$H=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZH=`#ifdef USE_GRADIENTMAP
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
}`,XH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UH=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qH=`#ifdef USE_ENVMAP
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
#endif`,NH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DH=`PhysicalMaterial material;
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
#endif`,EH=`uniform sampler2D dfgLUT;
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
}`,RH=`
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
#endif`,kH=`#if defined( RE_IndirectDiffuse )
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
#endif`,MH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VH=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,BH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_H=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wH=`#if defined( USE_POINTS_UV )
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
#endif`,CH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jH=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vH=`#ifdef USE_MORPHTARGETS
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
#endif`,hH=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fH=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pH=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mH=`#ifdef USE_NORMALMAP
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
#endif`,dH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cH=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nH=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sH=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iH=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oH=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aH=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rH=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tH=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eH=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K5=`float getShadowMask() {
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
}`,W5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z5=`#ifdef USE_SKINNING
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
#endif`,X5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y5=`#ifdef USE_SKINNING
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
#endif`,H5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N5=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G5=`#ifdef USE_TRANSMISSION
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
#endif`,F5=`#ifdef USE_TRANSMISSION
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
#endif`,O5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M5=`uniform sampler2D t2D;
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
}`,V5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I5=`#include <common>
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
}`,P5=`#if DEPTH_PACKING == 3200
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
}`,A5=`#define DISTANCE
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
}`,_5=`#define DISTANCE
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
}`,w5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T5=`uniform float scale;
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
}`,S5=`uniform vec3 diffuse;
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
}`,j5=`#include <common>
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
}`,y5=`uniform vec3 diffuse;
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
}`,v5=`#define LAMBERT
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
}`,h5=`#define LAMBERT
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
}`,b5=`#define MATCAP
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
}`,f5=`#define MATCAP
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
}`,x5=`#define NORMAL
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
}`,g5=`#define NORMAL
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
}`,p5=`#define PHONG
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
}`,m5=`#define PHONG
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
}`,d5=`#define STANDARD
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
}`,u5=`#define STANDARD
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
}`,l5=`#define TOON
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
}`,c5=`#define TOON
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
}`,n5=`uniform float size;
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
}`,s5=`uniform vec3 diffuse;
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
}`,i5=`#include <common>
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
}`,o5=`uniform vec3 color;
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
}`,a5=`uniform float rotation;
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
}`,r5=`uniform vec3 diffuse;
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
}`,HJ={alphahash_fragment:kY,alphahash_pars_fragment:MY,alphamap_fragment:VY,alphamap_pars_fragment:BY,alphatest_fragment:LY,alphatest_pars_fragment:zY,aomap_fragment:IY,aomap_pars_fragment:PY,batching_pars_vertex:AY,batching_vertex:_Y,begin_vertex:wY,beginnormal_vertex:CY,bsdfs:TY,iridescence_fragment:SY,bumpmap_pars_fragment:jY,clipping_planes_fragment:yY,clipping_planes_pars_fragment:vY,clipping_planes_pars_vertex:hY,clipping_planes_vertex:bY,color_fragment:fY,color_pars_fragment:xY,color_pars_vertex:gY,color_vertex:pY,common:mY,cube_uv_reflection_fragment:dY,defaultnormal_vertex:uY,displacementmap_pars_vertex:lY,displacementmap_vertex:cY,emissivemap_fragment:nY,emissivemap_pars_fragment:sY,colorspace_fragment:iY,colorspace_pars_fragment:oY,envmap_fragment:aY,envmap_common_pars_fragment:rY,envmap_pars_fragment:tY,envmap_pars_vertex:eY,envmap_physical_pars_fragment:qH,envmap_vertex:JH,fog_vertex:QH,fog_pars_vertex:$H,fog_fragment:KH,fog_pars_fragment:WH,gradientmap_pars_fragment:ZH,lightmap_pars_fragment:XH,lights_lambert_fragment:YH,lights_lambert_pars_fragment:HH,lights_pars_begin:UH,lights_toon_fragment:NH,lights_toon_pars_fragment:GH,lights_phong_fragment:FH,lights_phong_pars_fragment:OH,lights_physical_fragment:DH,lights_physical_pars_fragment:EH,lights_fragment_begin:RH,lights_fragment_maps:kH,lights_fragment_end:MH,lightprobes_pars_fragment:VH,logdepthbuf_fragment:BH,logdepthbuf_pars_fragment:LH,logdepthbuf_pars_vertex:zH,logdepthbuf_vertex:IH,map_fragment:PH,map_pars_fragment:AH,map_particle_fragment:_H,map_particle_pars_fragment:wH,metalnessmap_fragment:CH,metalnessmap_pars_fragment:TH,morphinstance_vertex:SH,morphcolor_vertex:jH,morphnormal_vertex:yH,morphtarget_pars_vertex:vH,morphtarget_vertex:hH,normal_fragment_begin:bH,normal_fragment_maps:fH,normal_pars_fragment:xH,normal_pars_vertex:gH,normal_vertex:pH,normalmap_pars_fragment:mH,clearcoat_normal_fragment_begin:dH,clearcoat_normal_fragment_maps:uH,clearcoat_pars_fragment:lH,iridescence_pars_fragment:cH,opaque_fragment:nH,packing:sH,premultiplied_alpha_fragment:iH,project_vertex:oH,dithering_fragment:aH,dithering_pars_fragment:rH,roughnessmap_fragment:tH,roughnessmap_pars_fragment:eH,shadowmap_pars_fragment:J5,shadowmap_pars_vertex:Q5,shadowmap_vertex:$5,shadowmask_pars_fragment:K5,skinbase_vertex:W5,skinning_pars_vertex:Z5,skinning_vertex:X5,skinnormal_vertex:Y5,specularmap_fragment:H5,specularmap_pars_fragment:U5,tonemapping_fragment:q5,tonemapping_pars_fragment:N5,transmission_fragment:G5,transmission_pars_fragment:F5,uv_pars_fragment:O5,uv_pars_vertex:D5,uv_vertex:E5,worldpos_vertex:R5,background_vert:k5,background_frag:M5,backgroundCube_vert:V5,backgroundCube_frag:B5,cube_vert:L5,cube_frag:z5,depth_vert:I5,depth_frag:P5,distance_vert:A5,distance_frag:_5,equirect_vert:w5,equirect_frag:C5,linedashed_vert:T5,linedashed_frag:S5,meshbasic_vert:j5,meshbasic_frag:y5,meshlambert_vert:v5,meshlambert_frag:h5,meshmatcap_vert:b5,meshmatcap_frag:f5,meshnormal_vert:x5,meshnormal_frag:g5,meshphong_vert:p5,meshphong_frag:m5,meshphysical_vert:d5,meshphysical_frag:u5,meshtoon_vert:l5,meshtoon_frag:c5,points_vert:n5,points_frag:s5,shadow_vert:i5,shadow_frag:o5,sprite_vert:a5,sprite_frag:r5},C0={common:{diffuse:{value:new QJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new KJ},alphaMap:{value:null},alphaMapTransform:{value:new KJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new KJ}},envmap:{envMap:{value:null},envMapRotation:{value:new KJ},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new KJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new KJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new KJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new KJ},normalScale:{value:new i0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new KJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new KJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new KJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new KJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new QJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new QJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new KJ},alphaTest:{value:0},uvTransform:{value:new KJ}},sprite:{diffuse:{value:new QJ(16777215)},opacity:{value:1},center:{value:new i0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new KJ},alphaMap:{value:null},alphaMapTransform:{value:new KJ},alphaTest:{value:0}}},l8={basic:{uniforms:oJ([C0.common,C0.specularmap,C0.envmap,C0.aomap,C0.lightmap,C0.fog]),vertexShader:HJ.meshbasic_vert,fragmentShader:HJ.meshbasic_frag},lambert:{uniforms:oJ([C0.common,C0.specularmap,C0.envmap,C0.aomap,C0.lightmap,C0.emissivemap,C0.bumpmap,C0.normalmap,C0.displacementmap,C0.fog,C0.lights,{emissive:{value:new QJ(0)},envMapIntensity:{value:1}}]),vertexShader:HJ.meshlambert_vert,fragmentShader:HJ.meshlambert_frag},phong:{uniforms:oJ([C0.common,C0.specularmap,C0.envmap,C0.aomap,C0.lightmap,C0.emissivemap,C0.bumpmap,C0.normalmap,C0.displacementmap,C0.fog,C0.lights,{emissive:{value:new QJ(0)},specular:{value:new QJ(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:HJ.meshphong_vert,fragmentShader:HJ.meshphong_frag},standard:{uniforms:oJ([C0.common,C0.envmap,C0.aomap,C0.lightmap,C0.emissivemap,C0.bumpmap,C0.normalmap,C0.displacementmap,C0.roughnessmap,C0.metalnessmap,C0.fog,C0.lights,{emissive:{value:new QJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:HJ.meshphysical_vert,fragmentShader:HJ.meshphysical_frag},toon:{uniforms:oJ([C0.common,C0.aomap,C0.lightmap,C0.emissivemap,C0.bumpmap,C0.normalmap,C0.displacementmap,C0.gradientmap,C0.fog,C0.lights,{emissive:{value:new QJ(0)}}]),vertexShader:HJ.meshtoon_vert,fragmentShader:HJ.meshtoon_frag},matcap:{uniforms:oJ([C0.common,C0.bumpmap,C0.normalmap,C0.displacementmap,C0.fog,{matcap:{value:null}}]),vertexShader:HJ.meshmatcap_vert,fragmentShader:HJ.meshmatcap_frag},points:{uniforms:oJ([C0.points,C0.fog]),vertexShader:HJ.points_vert,fragmentShader:HJ.points_frag},dashed:{uniforms:oJ([C0.common,C0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:HJ.linedashed_vert,fragmentShader:HJ.linedashed_frag},depth:{uniforms:oJ([C0.common,C0.displacementmap]),vertexShader:HJ.depth_vert,fragmentShader:HJ.depth_frag},normal:{uniforms:oJ([C0.common,C0.bumpmap,C0.normalmap,C0.displacementmap,{opacity:{value:1}}]),vertexShader:HJ.meshnormal_vert,fragmentShader:HJ.meshnormal_frag},sprite:{uniforms:oJ([C0.sprite,C0.fog]),vertexShader:HJ.sprite_vert,fragmentShader:HJ.sprite_frag},background:{uniforms:{uvTransform:{value:new KJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:HJ.background_vert,fragmentShader:HJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new KJ}},vertexShader:HJ.backgroundCube_vert,fragmentShader:HJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:HJ.cube_vert,fragmentShader:HJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:HJ.equirect_vert,fragmentShader:HJ.equirect_frag},distance:{uniforms:oJ([C0.common,C0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:HJ.distance_vert,fragmentShader:HJ.distance_frag},shadow:{uniforms:oJ([C0.lights,C0.fog,{color:{value:new QJ(0)},opacity:{value:1}}]),vertexShader:HJ.shadow_vert,fragmentShader:HJ.shadow_frag}};l8.physical={uniforms:oJ([l8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new KJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new KJ},clearcoatNormalScale:{value:new i0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new KJ},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new KJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new KJ},sheen:{value:0},sheenColor:{value:new QJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new KJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new KJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new KJ},transmissionSamplerSize:{value:new i0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new KJ},attenuationDistance:{value:0},attenuationColor:{value:new QJ(0)},specularColor:{value:new QJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new KJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new KJ},anisotropyVector:{value:new i0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new KJ}}]),vertexShader:HJ.meshphysical_vert,fragmentShader:HJ.meshphysical_frag};var $Q={r:0,b:0,g:0},t5=new IJ,TZ=new KJ;TZ.set(-1,0,0,0,1,0,0,0,1);function e5(J,Q,$,K,W,Z){let X=new QJ(0),Y=W===!0?0:1,H,U,D=null,O=0,G=null;function R(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){let V=T.backgroundBlurriness>0;A=Q.get(A,V)}return A}function M(T){let A=!1,V=R(T);if(V===null)E(X,Y);else if(V&&V.isColor)E(V,1),A=!0;let P=J.xr.getEnvironmentBlendMode();if(P==="additive")$.buffers.color.setClear(0,0,0,1,Z);else if(P==="alpha-blend")$.buffers.color.setClear(0,0,0,0,Z);if(J.autoClear||A)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function z(T,A){let V=R(A);if(V&&(V.isCubeTexture||V.mapping===u7)){if(U===void 0)U=new F0(new u0(1,1,1),new H8({name:"BackgroundCubeMaterial",uniforms:u9(l8.backgroundCube.uniforms),vertexShader:l8.backgroundCube.vertexShader,fragmentShader:l8.backgroundCube.fragmentShader,side:iJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(P,C,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(t5.makeRotationFromEuler(A.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(TZ);if(U.material.toneMapped=FJ.getTransfer(V.colorSpace)!==LJ,D!==V||O!==V.version||G!==J.toneMapping)U.material.needsUpdate=!0,D=V,O=V.version,G=J.toneMapping;U.layers.enableAll(),T.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new F0(new y8(2,2),new H8({name:"BackgroundMaterial",uniforms:u9(l8.background.uniforms),vertexShader:l8.background.vertexShader,fragmentShader:l8.background.fragmentShader,side:O7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,H.material.toneMapped=FJ.getTransfer(V.colorSpace)!==LJ,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),D!==V||O!==V.version||G!==J.toneMapping)H.material.needsUpdate=!0,D=V,O=V.version,G=J.toneMapping;H.layers.enableAll(),T.unshift(H,H.geometry,H.material,0,0,null)}}function E(T,A){T.getRGB($Q,s$(J)),$.buffers.color.setClear($Q.r,$Q.g,$Q.b,A,Z)}function F(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(T,A=1){X.set(T),Y=A,E(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(T){Y=T,E(X,Y)},render:M,addToRenderList:z,dispose:F}}function JU(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},W=G(null),Z=W,X=!1;function Y(S,n,J0,u,t){let Q0=!1,d=O(S,u,J0,n);if(Z!==d)Z=d,U(Z.object);if(Q0=R(S,u,J0,t),Q0)M(S,u,J0,t);if(t!==null)Q.update(t,J.ELEMENT_ARRAY_BUFFER);if(Q0||X){if(X=!1,V(S,n,J0,u),t!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(t).buffer)}}function H(){return J.createVertexArray()}function U(S){return J.bindVertexArray(S)}function D(S){return J.deleteVertexArray(S)}function O(S,n,J0,u){let t=u.wireframe===!0,Q0=K[n.id];if(Q0===void 0)Q0={},K[n.id]=Q0;let d=S.isInstancedMesh===!0?S.id:0,Y0=Q0[d];if(Y0===void 0)Y0={},Q0[d]=Y0;let N0=Y0[J0.id];if(N0===void 0)N0={},Y0[J0.id]=N0;let E0=N0[t];if(E0===void 0)E0=G(H()),N0[t]=E0;return E0}function G(S){let n=[],J0=[],u=[];for(let t=0;t<$;t++)n[t]=0,J0[t]=0,u[t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:n,enabledAttributes:J0,attributeDivisors:u,object:S,attributes:{},index:null}}function R(S,n,J0,u){let t=Z.attributes,Q0=n.attributes,d=0,Y0=J0.getAttributes();for(let N0 in Y0)if(Y0[N0].location>=0){let v0=t[N0],w0=Q0[N0];if(w0===void 0){if(N0==="instanceMatrix"&&S.instanceMatrix)w0=S.instanceMatrix;if(N0==="instanceColor"&&S.instanceColor)w0=S.instanceColor}if(v0===void 0)return!0;if(v0.attribute!==w0)return!0;if(w0&&v0.data!==w0.data)return!0;d++}if(Z.attributesNum!==d)return!0;if(Z.index!==u)return!0;return!1}function M(S,n,J0,u){let t={},Q0=n.attributes,d=0,Y0=J0.getAttributes();for(let N0 in Y0)if(Y0[N0].location>=0){let v0=Q0[N0];if(v0===void 0){if(N0==="instanceMatrix"&&S.instanceMatrix)v0=S.instanceMatrix;if(N0==="instanceColor"&&S.instanceColor)v0=S.instanceColor}let w0={};if(w0.attribute=v0,v0&&v0.data)w0.data=v0.data;t[N0]=w0,d++}Z.attributes=t,Z.attributesNum=d,Z.index=u}function z(){let S=Z.newAttributes;for(let n=0,J0=S.length;n<J0;n++)S[n]=0}function E(S){F(S,0)}function F(S,n){let{newAttributes:J0,enabledAttributes:u,attributeDivisors:t}=Z;if(J0[S]=1,u[S]===0)J.enableVertexAttribArray(S),u[S]=1;if(t[S]!==n)J.vertexAttribDivisor(S,n),t[S]=n}function T(){let{newAttributes:S,enabledAttributes:n}=Z;for(let J0=0,u=n.length;J0<u;J0++)if(n[J0]!==S[J0])J.disableVertexAttribArray(J0),n[J0]=0}function A(S,n,J0,u,t,Q0,d){if(d===!0)J.vertexAttribIPointer(S,n,J0,t,Q0);else J.vertexAttribPointer(S,n,J0,u,t,Q0)}function V(S,n,J0,u){z();let t=u.attributes,Q0=J0.getAttributes(),d=n.defaultAttributeValues;for(let Y0 in Q0){let N0=Q0[Y0];if(N0.location>=0){let E0=t[Y0];if(E0===void 0){if(Y0==="instanceMatrix"&&S.instanceMatrix)E0=S.instanceMatrix;if(Y0==="instanceColor"&&S.instanceColor)E0=S.instanceColor}if(E0!==void 0){let{normalized:v0,itemSize:w0}=E0,XJ=Q.get(E0);if(XJ===void 0)continue;let{buffer:ZJ,type:K0,bytesPerElement:O0}=XJ,L0=K0===J.INT||K0===J.UNSIGNED_INT||E0.gpuType===tQ;if(E0.isInterleavedBufferAttribute){let M0=E0.data,X0=M0.stride,$0=E0.offset;if(M0.isInstancedInterleavedBuffer){for(let g=0;g<N0.locationSize;g++)F(N0.location+g,M0.meshPerAttribute);if(S.isInstancedMesh!==!0&&u._maxInstanceCount===void 0)u._maxInstanceCount=M0.meshPerAttribute*M0.count}else for(let g=0;g<N0.locationSize;g++)E(N0.location+g);J.bindBuffer(J.ARRAY_BUFFER,ZJ);for(let g=0;g<N0.locationSize;g++)A(N0.location+g,w0/N0.locationSize,K0,v0,X0*O0,($0+w0/N0.locationSize*g)*O0,L0)}else{if(E0.isInstancedBufferAttribute){for(let M0=0;M0<N0.locationSize;M0++)F(N0.location+M0,E0.meshPerAttribute);if(S.isInstancedMesh!==!0&&u._maxInstanceCount===void 0)u._maxInstanceCount=E0.meshPerAttribute*E0.count}else for(let M0=0;M0<N0.locationSize;M0++)E(N0.location+M0);J.bindBuffer(J.ARRAY_BUFFER,ZJ);for(let M0=0;M0<N0.locationSize;M0++)A(N0.location+M0,w0/N0.locationSize,K0,v0,w0*O0,w0/N0.locationSize*M0*O0,L0)}}else if(d!==void 0){let v0=d[Y0];if(v0!==void 0)switch(v0.length){case 2:J.vertexAttrib2fv(N0.location,v0);break;case 3:J.vertexAttrib3fv(N0.location,v0);break;case 4:J.vertexAttrib4fv(N0.location,v0);break;default:J.vertexAttrib1fv(N0.location,v0)}}}}T()}function P(){L();for(let S in K){let n=K[S];for(let J0 in n){let u=n[J0];for(let t in u){let Q0=u[t];for(let d in Q0)D(Q0[d].object),delete Q0[d];delete u[t]}}delete K[S]}}function C(S){if(K[S.id]===void 0)return;let n=K[S.id];for(let J0 in n){let u=n[J0];for(let t in u){let Q0=u[t];for(let d in Q0)D(Q0[d].object),delete Q0[d];delete u[t]}}delete K[S.id]}function j(S){for(let n in K){let J0=K[n];for(let u in J0){let t=J0[u];if(t[S.id]===void 0)continue;let Q0=t[S.id];for(let d in Q0)D(Q0[d].object),delete Q0[d];delete t[S.id]}}}function k(S){for(let n in K){let J0=K[n],u=S.isInstancedMesh===!0?S.id:0,t=J0[u];if(t===void 0)continue;for(let Q0 in t){let d=t[Q0];for(let Y0 in d)D(d[Y0].object),delete d[Y0];delete t[Q0]}if(delete J0[u],Object.keys(J0).length===0)delete K[n]}}function L(){if(i(),X=!0,Z===W)return;Z=W,U(Z.object)}function i(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:L,resetDefaultState:i,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:k,releaseStatesOfProgram:j,initAttributes:z,enableAttribute:E,disableUnusedAttributes:T}}function QU(J,Q,$){let K;function W(H){K=H}function Z(H,U){J.drawArrays(K,H,U),$.update(U,K,1)}function X(H,U,D){if(D===0)return;J.drawArraysInstanced(K,H,U,D),$.update(U,K,D)}function Y(H,U,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,U,0,D);let G=0;for(let R=0;R<D;R++)G+=U[R];$.update(G,K,1)}this.setMode=W,this.render=Z,this.renderInstances=X,this.renderMultiDraw=Y}function $U(J,Q,$,K){let W;function Z(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let j=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(j){if(j!==x8&&K.convert(j)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(j){let k=j===J9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(j!==j8&&K.convert(j)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&j!==e8&&!k)return!1;return!0}function H(j){if(j==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";j="mediump"}if(j==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",D=H(U);if(D!==U)o0("WebGLRenderer:",U,"not supported, using",D,"instead."),U=D;let O=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)o0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),z=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),T=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),A=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),P=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Z,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:O,reversedDepthBuffer:G,maxTextures:R,maxVertexTextures:M,maxTextureSize:z,maxCubemapSize:E,maxAttributes:F,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:V,maxSamples:P,samples:C}}function KU(J){let Q=this,$=null,K=0,W=!1,Z=!1,X=new T8,Y=new KJ,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(O,G){let R=O.length!==0||G||K!==0||W;return W=G,K=O.length,R},this.beginShadows=function(){Z=!0,D(null)},this.endShadows=function(){Z=!1},this.setGlobalState=function(O,G){$=D(O,G,0)},this.setState=function(O,G,R){let{clippingPlanes:M,clipIntersection:z,clipShadows:E}=O,F=J.get(O);if(!W||M===null||M.length===0||Z&&!E)if(Z)D(null);else U();else{let T=Z?0:K,A=T*4,V=F.clippingState||null;H.value=V,V=D(M,G,A,R);for(let P=0;P!==A;++P)V[P]=$[P];F.clippingState=V,this.numIntersection=z?this.numPlanes:0,this.numPlanes+=T}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function D(O,G,R,M){let z=O!==null?O.length:0,E=null;if(z!==0){if(E=H.value,M!==!0||E===null){let F=R+z*4,T=G.matrixWorldInverse;if(Y.getNormalMatrix(T),E===null||E.length<F)E=new Float32Array(F);for(let A=0,V=R;A!==z;++A,V+=4)X.copy(O[A]).applyMatrix4(T,Y),X.normal.toArray(E,V),E[V+3]=X.constant}H.value=E,H.needsUpdate=!0}return Q.numPlanes=z,Q.numIntersection=0,E}}var L9=4,YZ=[0.125,0.215,0.35,0.446,0.526,0.582],s9=20,WU=256,e7=new r7,HZ=new QJ,FK=null,OK=0,DK=0,EK=!1,ZU=new x;class MK{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,K=100,W={}){let{size:Z=256,position:X=ZU}=W;FK=this._renderer.getRenderTarget(),OK=this._renderer.getActiveCubeFace(),DK=this._renderer.getActiveMipmapLevel(),EK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(Z);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,K,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=NZ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=qZ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(FK,OK,DK),this._renderer.xr.enabled=EK,J.scissorTest=!1,A7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===E7||J.mapping===v9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);FK=this._renderer.getRenderTarget(),OK=this._renderer.getActiveCubeFace(),DK=this._renderer.getActiveMipmapLevel(),EK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:Y8,minFilter:Y8,generateMipmaps:!1,type:J9,format:x8,colorSpace:h$,depthBuffer:!1},K=UZ(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=UZ(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XU(W)),this._blurMaterial=HU(W,J,Q),this._ggxMaterial=YU(W,J,Q)}return K}_compileMaterial(J){let Q=new F0(new SJ,J);this._renderer.compile(Q,e7)}_sceneToCubeUV(J,Q,$,K,W){let Y=new uJ(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],D=this._renderer,O=D.autoClear,G=D.toneMapping;if(D.getClearColor(HZ),D.toneMapping=S8,D.autoClear=!1,D.state.buffers.depth.getReversed())D.setRenderTarget(K),D.clearDepth(),D.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new F0(new u0,new hJ({name:"PMREM.Background",side:iJ,depthWrite:!1,depthTest:!1}));let M=this._backgroundBox,z=M.material,E=!1,F=J.background;if(F){if(F.isColor)z.color.copy(F),J.background=null,E=!0}else z.color.copy(HZ),E=!0;for(let T=0;T<6;T++){let A=T%3;if(A===0)Y.up.set(0,H[T],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x+U[T],W.y,W.z);else if(A===1)Y.up.set(0,0,H[T]),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y+U[T],W.z);else Y.up.set(0,H[T],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y,W.z+U[T]);let V=this._cubeSize;if(A7(K,A*V,T>2?V:0,V,V),D.setRenderTarget(K),E)D.render(M,Y);D.render(J,Y)}D.toneMapping=G,D.autoClear=O,J.background=F}_textureToCubeUV(J,Q){let $=this._renderer,K=J.mapping===E7||J.mapping===v9;if(K){if(this._cubemapMaterial===null)this._cubemapMaterial=NZ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=qZ();let W=K?this._cubemapMaterial:this._equirectMaterial,Z=this._lodMeshes[0];Z.material=W;let X=W.uniforms;X.envMap.value=J;let Y=this._cubeSize;A7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(Z,e7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let K=this._lodMeshes.length;for(let W=1;W<K;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let K=this._renderer,W=this._pingPongRenderTarget,Z=this._ggxMaterial,X=this._lodMeshes[$];X.material=Z;let Y=Z.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),D=Math.sqrt(H*H-U*U),O=0+H*1.25,G=D*O,{_lodMax:R}=this,M=this._sizeLods[$],z=3*M*($>R-L9?$-R+L9:0),E=4*(this._cubeSize-M);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=R-Q,A7(W,z,E,3*M,2*M),K.setRenderTarget(W),K.render(X,e7),Y.envMap.value=W.texture,Y.roughness.value=0,Y.mipInt.value=R-$,A7(J,z,E,3*M,2*M),K.setRenderTarget(J),K.render(X,e7)}_blur(J,Q,$,K,W){let Z=this._pingPongRenderTarget;this._halfBlur(J,Z,Q,$,K,"latitudinal",W),this._halfBlur(Z,J,$,$,K,"longitudinal",W)}_halfBlur(J,Q,$,K,W,Z,X){let Y=this._renderer,H=this._blurMaterial;if(Z!=="latitudinal"&&Z!=="longitudinal")a0("blur direction must be either latitudinal or longitudinal!");let U=3,D=this._lodMeshes[K];D.material=H;let O=H.uniforms,G=this._sizeLods[$]-1,R=isFinite(W)?Math.PI/(2*G):2*Math.PI/(2*s9-1),M=W/R,z=isFinite(W)?1+Math.floor(U*M):s9;if(z>s9)o0(`sigmaRadians, ${W}, is too large and will clip, as it requested ${z} samples when the maximum is set to ${s9}`);let E=[],F=0;for(let C=0;C<s9;++C){let j=C/M,k=Math.exp(-j*j/2);if(E.push(k),C===0)F+=k;else if(C<z)F+=2*k}for(let C=0;C<E.length;C++)E[C]=E[C]/F;if(O.envMap.value=J.texture,O.samples.value=z,O.weights.value=E,O.latitudinal.value=Z==="latitudinal",X)O.poleAxis.value=X;let{_lodMax:T}=this;O.dTheta.value=R,O.mipInt.value=T-$;let A=this._sizeLods[K],V=3*A*(K>T-L9?K-T+L9:0),P=4*(this._cubeSize-A);A7(Q,V,P,3*A,2*A),Y.setRenderTarget(Q),Y.render(D,e7)}}function XU(J){let Q=[],$=[],K=[],W=J,Z=J-L9+1+YZ.length;for(let X=0;X<Z;X++){let Y=Math.pow(2,W);Q.push(Y);let H=1/Y;if(X>J-L9)H=YZ[X-J+L9-1];else if(X===0)H=0;$.push(H);let U=1/(Y-2),D=-U,O=1+U,G=[D,D,O,D,O,O,D,D,O,O,D,O],R=6,M=6,z=3,E=2,F=1,T=new Float32Array(z*M*R),A=new Float32Array(E*M*R),V=new Float32Array(F*M*R);for(let C=0;C<R;C++){let j=C%3*2/3-1,k=C>2?0:-1,L=[j,k,0,j+0.6666666666666666,k,0,j+0.6666666666666666,k+1,0,j,k,0,j+0.6666666666666666,k+1,0,j,k+1,0];T.set(L,z*M*C),A.set(G,E*M*C);let i=[C,C,C,C,C,C];V.set(i,F*M*C)}let P=new SJ;if(P.setAttribute("position",new bJ(T,z)),P.setAttribute("uv",new bJ(A,E)),P.setAttribute("faceIndex",new bJ(V,F)),K.push(new F0(P,null)),W>L9)W--}return{lodMeshes:K,sizeLods:Q,sigmas:$}}function UZ(J,Q,$){let K=new z8(J,Q,$);return K.texture.mapping=u7,K.texture.name="PMREM.cubeUv",K.scissorTest=!0,K}function A7(J,Q,$,K,W){J.viewport.set(Q,$,K,W),J.scissor.set(Q,$,K,W)}function YU(J,Q,$){return new H8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WU,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:WQ(),fragmentShader:`

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
		`,blending:b8,depthTest:!1,depthWrite:!1})}function HU(J,Q,$){let K=new Float32Array(s9),W=new x(0,1,0);return new H8({name:"SphericalGaussianBlur",defines:{n:s9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:K},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:WQ(),fragmentShader:`

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
		`,blending:b8,depthTest:!1,depthWrite:!1})}function qZ(){return new H8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:WQ(),fragmentShader:`

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
		`,blending:b8,depthTest:!1,depthWrite:!1})}function NZ(){return new H8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:WQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:b8,depthTest:!1,depthWrite:!1})}function WQ(){return`

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
	`}class LK extends z8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},K=[$,$,$,$,$,$];this.texture=new i6(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new u0(5,5,5),W=new H8({name:"CubemapFromEquirect",uniforms:u9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:iJ,blending:b8});W.uniforms.tEquirect.value=Q;let Z=new F0(K,W),X=Q.minFilter;if(Q.minFilter===h9)Q.minFilter=Y8;return new YK(1,10,this).update(J,Z),Q.minFilter=X,Z.geometry.dispose(),Z.material.dispose(),this}clear(J,Q=!0,$=!0,K=!0){let W=J.getRenderTarget();for(let Z=0;Z<6;Z++)J.setRenderTarget(this,Z),J.clear(Q,$,K);J.setRenderTarget(W)}}function UU(J){let Q=new WeakMap,$=new WeakMap,K=null;function W(G,R=!1){if(G===null||G===void 0)return null;if(R)return X(G);return Z(G)}function Z(G){if(G&&G.isTexture){let R=G.mapping;if(R===S6||R===j6)if(Q.has(G)){let M=Q.get(G).texture;return Y(M,G.mapping)}else{let M=G.image;if(M&&M.height>0){let z=new LK(M.height);return z.fromEquirectangularTexture(J,G),Q.set(G,z),G.addEventListener("dispose",U),Y(z.texture,G.mapping)}else return null}}return G}function X(G){if(G&&G.isTexture){let R=G.mapping,M=R===S6||R===j6,z=R===E7||R===v9;if(M||z){let E=$.get(G),F=E!==void 0?E.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==F){if(K===null)K=new MK(J);return E=M?K.fromEquirectangular(G,E):K.fromCubemap(G,E),E.texture.pmremVersion=G.pmremVersion,$.set(G,E),E.texture}else if(E!==void 0)return E.texture;else{let T=G.image;if(M&&T&&T.height>0||z&&T&&H(T)){if(K===null)K=new MK(J);return E=M?K.fromEquirectangular(G):K.fromCubemap(G),E.texture.pmremVersion=G.pmremVersion,$.set(G,E),G.addEventListener("dispose",D),E.texture}else return null}}}return G}function Y(G,R){if(R===S6)G.mapping=E7;else if(R===j6)G.mapping=v9;return G}function H(G){let R=0,M=6;for(let z=0;z<M;z++)if(G[z]!==void 0)R++;return R===M}function U(G){let R=G.target;R.removeEventListener("dispose",U);let M=Q.get(R);if(M!==void 0)Q.delete(R),M.dispose()}function D(G){let R=G.target;R.removeEventListener("dispose",D);let M=$.get(R);if(M!==void 0)$.delete(R),M.dispose()}function O(){if(Q=new WeakMap,$=new WeakMap,K!==null)K.dispose(),K=null}return{get:W,dispose:O}}function qU(J){let Q={};function $(K){if(Q[K]!==void 0)return Q[K];let W=J.getExtension(K);return Q[K]=W,W}return{has:function(K){return $(K)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(K){let W=$(K);if(W===null)S9("WebGLRenderer: "+K+" extension not supported.");return W}}}function NU(J,Q,$,K){let W={},Z=new WeakMap;function X(O){let G=O.target;if(G.index!==null)Q.remove(G.index);for(let M in G.attributes)Q.remove(G.attributes[M]);G.removeEventListener("dispose",X),delete W[G.id];let R=Z.get(G);if(R)Q.remove(R),Z.delete(G);if(K.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(O,G){if(W[G.id]===!0)return G;return G.addEventListener("dispose",X),W[G.id]=!0,$.memory.geometries++,G}function H(O){let G=O.attributes;for(let R in G)Q.update(G[R],J.ARRAY_BUFFER)}function U(O){let G=[],R=O.index,M=O.attributes.position,z=0;if(M===void 0)return;if(R!==null){let T=R.array;z=R.version;for(let A=0,V=T.length;A<V;A+=3){let P=T[A+0],C=T[A+1],j=T[A+2];G.push(P,C,C,j,j,P)}}else{let T=M.array;z=M.version;for(let A=0,V=T.length/3-1;A<V;A+=3){let P=A+0,C=A+1,j=A+2;G.push(P,C,C,j,j,P)}}let E=new(M.count>=65535?s6:n6)(G,1);E.version=z;let F=Z.get(O);if(F)Q.remove(F);Z.set(O,E)}function D(O){let G=Z.get(O);if(G){let R=O.index;if(R!==null){if(G.version<R.version)U(O)}}else U(O);return Z.get(O)}return{get:Y,update:H,getWireframeAttribute:D}}function GU(J,Q,$){let K;function W(O){K=O}let Z,X;function Y(O){Z=O.type,X=O.bytesPerElement}function H(O,G){J.drawElements(K,G,Z,O*X),$.update(G,K,1)}function U(O,G,R){if(R===0)return;J.drawElementsInstanced(K,G,Z,O*X,R),$.update(G,K,R)}function D(O,G,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,G,0,Z,O,0,R);let z=0;for(let E=0;E<R;E++)z+=G[E];$.update(z,K,1)}this.setMode=W,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=D}function FU(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function K(Z,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(Z/3);break;case J.LINES:$.lines+=Y*(Z/2);break;case J.LINE_STRIP:$.lines+=Y*(Z-1);break;case J.LINE_LOOP:$.lines+=Y*Z;break;case J.POINTS:$.points+=Y*Z;break;default:a0("WebGLInfo: Unknown draw mode:",X);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:K}}function OU(J,Q,$){let K=new WeakMap,W=new wJ;function Z(X,Y,H){let U=X.morphTargetInfluences,D=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,O=D!==void 0?D.length:0,G=K.get(Y);if(G===void 0||G.count!==O){let L=function(){j.dispose(),K.delete(Y),Y.removeEventListener("dispose",L)};if(G!==void 0)G.texture.dispose();let R=Y.morphAttributes.position!==void 0,M=Y.morphAttributes.normal!==void 0,z=Y.morphAttributes.color!==void 0,E=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],T=Y.morphAttributes.color||[],A=0;if(R===!0)A=1;if(M===!0)A=2;if(z===!0)A=3;let V=Y.attributes.position.count*A,P=1;if(V>Q.maxTextureSize)P=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let C=new Float32Array(V*P*4*O),j=new u6(C,V,P,O);j.type=e8,j.needsUpdate=!0;let k=A*4;for(let i=0;i<O;i++){let S=E[i],n=F[i],J0=T[i],u=V*P*4*i;for(let t=0;t<S.count;t++){let Q0=t*k;if(R===!0)W.fromBufferAttribute(S,t),C[u+Q0+0]=W.x,C[u+Q0+1]=W.y,C[u+Q0+2]=W.z,C[u+Q0+3]=0;if(M===!0)W.fromBufferAttribute(n,t),C[u+Q0+4]=W.x,C[u+Q0+5]=W.y,C[u+Q0+6]=W.z,C[u+Q0+7]=0;if(z===!0)W.fromBufferAttribute(J0,t),C[u+Q0+8]=W.x,C[u+Q0+9]=W.y,C[u+Q0+10]=W.z,C[u+Q0+11]=J0.itemSize===4?W.w:1}}G={count:O,texture:j,size:new i0(V,P)},K.set(Y,G),Y.addEventListener("dispose",L)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let R=0;for(let z=0;z<U.length;z++)R+=U[z];let M=Y.morphTargetsRelative?1:1-R;H.getUniforms().setValue(J,"morphTargetBaseInfluence",M),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:Z}}function DU(J,Q,$,K,W){let Z=new WeakMap;function X(U){let D=W.render.frame,O=U.geometry,G=Q.get(U,O);if(Z.get(G)!==D)Q.update(G),Z.set(G,D);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(Z.get(U)!==D){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);Z.set(U,D)}}if(U.isSkinnedMesh){let R=U.skeleton;if(Z.get(R)!==D)R.update(),Z.set(R,D)}return G}function Y(){Z=new WeakMap}function H(U){let D=U.target;if(D.removeEventListener("dispose",H),K.releaseStatesOfObject(D),$.remove(D.instanceMatrix),D.instanceColor!==null)$.remove(D.instanceColor)}return{update:X,dispose:Y}}var EU={[nQ]:"LINEAR_TONE_MAPPING",[sQ]:"REINHARD_TONE_MAPPING",[iQ]:"CINEON_TONE_MAPPING",[d7]:"ACES_FILMIC_TONE_MAPPING",[aQ]:"AGX_TONE_MAPPING",[rQ]:"NEUTRAL_TONE_MAPPING",[oQ]:"CUSTOM_TONE_MAPPING"};function RU(J,Q,$,K,W,Z){let X=new z8(Q,$,{type:J,depthBuffer:W,stencilBuffer:Z,samples:K?4:0,depthTexture:W?new M9(Q,$):void 0}),Y=new z8(Q,$,{type:J9,depthBuffer:!1,stencilBuffer:!1}),H=new SJ;H.setAttribute("position",new zJ([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new zJ([0,2,0,0,2,0],2));let U=new i$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),D=new F0(H,U),O=new r7(-1,1,1,-1,0,1),G=null,R=null,M=!1,z,E=null,F=[],T=!1;this.setSize=function(A,V){X.setSize(A,V),Y.setSize(A,V);for(let P=0;P<F.length;P++){let C=F[P];if(C.setSize)C.setSize(A,V)}},this.setEffects=function(A){F=A,T=F.length>0&&F[0].isRenderPass===!0;let{width:V,height:P}=X;for(let C=0;C<F.length;C++){let j=F[C];if(j.setSize)j.setSize(V,P)}},this.begin=function(A,V){if(M)return!1;if(A.toneMapping===S8&&F.length===0)return!1;if(E=V,V!==null){let{width:P,height:C}=V;if(X.width!==P||X.height!==C)this.setSize(P,C)}if(T===!1)A.setRenderTarget(X);return z=A.toneMapping,A.toneMapping=S8,!0},this.hasRenderPass=function(){return T},this.end=function(A,V){A.toneMapping=z,M=!0;let P=X,C=Y;for(let j=0;j<F.length;j++){let k=F[j];if(k.enabled===!1)continue;if(k.render(A,C,P,V),k.needsSwap!==!1){let L=P;P=C,C=L}}if(G!==A.outputColorSpace||R!==A.toneMapping){if(G=A.outputColorSpace,R=A.toneMapping,U.defines={},FJ.getTransfer(G)===LJ)U.defines.SRGB_TRANSFER="";let j=EU[R];if(j)U.defines[j]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=P.texture,A.setRenderTarget(E),A.render(D,O),E=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),H.dispose(),U.dispose()}}var SZ=new lJ,VK=new M9(1,1),jZ=new u6,yZ=new l$,vZ=new i6,GZ=[],FZ=[],OZ=new Float32Array(16),DZ=new Float32Array(9),EZ=new Float32Array(4);function _7(J,Q,$){let K=J[0];if(K<=0||K>0)return J;let W=Q*$,Z=GZ[W];if(Z===void 0)Z=new Float32Array(W),GZ[W]=Z;if(Q!==0){K.toArray(Z,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(Z,Y)}return Z}function fJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,K=J.length;$<K;$++)if(J[$]!==Q[$])return!1;return!0}function xJ(J,Q){for(let $=0,K=Q.length;$<K;$++)J[$]=Q[$]}function ZQ(J,Q){let $=FZ[Q];if($===void 0)$=new Int32Array(Q),FZ[Q]=$;for(let K=0;K!==Q;++K)$[K]=J.allocateTextureUnit();return $}function kU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function MU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(fJ($,Q))return;J.uniform2fv(this.addr,Q),xJ($,Q)}}function VU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(fJ($,Q))return;J.uniform3fv(this.addr,Q),xJ($,Q)}}function BU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(fJ($,Q))return;J.uniform4fv(this.addr,Q),xJ($,Q)}}function LU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(fJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),xJ($,Q)}else{if(fJ($,K))return;EZ.set(K),J.uniformMatrix2fv(this.addr,!1,EZ),xJ($,K)}}function zU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(fJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),xJ($,Q)}else{if(fJ($,K))return;DZ.set(K),J.uniformMatrix3fv(this.addr,!1,DZ),xJ($,K)}}function IU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(fJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),xJ($,Q)}else{if(fJ($,K))return;OZ.set(K),J.uniformMatrix4fv(this.addr,!1,OZ),xJ($,K)}}function PU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function AU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(fJ($,Q))return;J.uniform2iv(this.addr,Q),xJ($,Q)}}function _U(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(fJ($,Q))return;J.uniform3iv(this.addr,Q),xJ($,Q)}}function wU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(fJ($,Q))return;J.uniform4iv(this.addr,Q),xJ($,Q)}}function CU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function TU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(fJ($,Q))return;J.uniform2uiv(this.addr,Q),xJ($,Q)}}function SU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(fJ($,Q))return;J.uniform3uiv(this.addr,Q),xJ($,Q)}}function jU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(fJ($,Q))return;J.uniform4uiv(this.addr,Q),xJ($,Q)}}function yU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;let Z;if(this.type===J.SAMPLER_2D_SHADOW)VK.compareFunction=$.isReversedDepthBuffer()?d6:m6,Z=VK;else Z=SZ;$.setTexture2D(Q||Z,W)}function vU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTexture3D(Q||yZ,W)}function hU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTextureCube(Q||vZ,W)}function bU(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTexture2DArray(Q||jZ,W)}function fU(J){switch(J){case 5126:return kU;case 35664:return MU;case 35665:return VU;case 35666:return BU;case 35674:return LU;case 35675:return zU;case 35676:return IU;case 5124:case 35670:return PU;case 35667:case 35671:return AU;case 35668:case 35672:return _U;case 35669:case 35673:return wU;case 5125:return CU;case 36294:return TU;case 36295:return SU;case 36296:return jU;case 35678:case 36198:case 36298:case 36306:case 35682:return yU;case 35679:case 36299:case 36307:return vU;case 35680:case 36300:case 36308:case 36293:return hU;case 36289:case 36303:case 36311:case 36292:return bU}}function xU(J,Q){J.uniform1fv(this.addr,Q)}function gU(J,Q){let $=_7(Q,this.size,2);J.uniform2fv(this.addr,$)}function pU(J,Q){let $=_7(Q,this.size,3);J.uniform3fv(this.addr,$)}function mU(J,Q){let $=_7(Q,this.size,4);J.uniform4fv(this.addr,$)}function dU(J,Q){let $=_7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function uU(J,Q){let $=_7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function lU(J,Q){let $=_7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function cU(J,Q){J.uniform1iv(this.addr,Q)}function nU(J,Q){J.uniform2iv(this.addr,Q)}function sU(J,Q){J.uniform3iv(this.addr,Q)}function iU(J,Q){J.uniform4iv(this.addr,Q)}function oU(J,Q){J.uniform1uiv(this.addr,Q)}function aU(J,Q){J.uniform2uiv(this.addr,Q)}function rU(J,Q){J.uniform3uiv(this.addr,Q)}function tU(J,Q){J.uniform4uiv(this.addr,Q)}function eU(J,Q,$){let K=this.cache,W=Q.length,Z=ZQ($,W);if(!fJ(K,Z))J.uniform1iv(this.addr,Z),xJ(K,Z);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=VK;else X=SZ;for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||X,Z[Y])}function Jq(J,Q,$){let K=this.cache,W=Q.length,Z=ZQ($,W);if(!fJ(K,Z))J.uniform1iv(this.addr,Z),xJ(K,Z);for(let X=0;X!==W;++X)$.setTexture3D(Q[X]||yZ,Z[X])}function Qq(J,Q,$){let K=this.cache,W=Q.length,Z=ZQ($,W);if(!fJ(K,Z))J.uniform1iv(this.addr,Z),xJ(K,Z);for(let X=0;X!==W;++X)$.setTextureCube(Q[X]||vZ,Z[X])}function $q(J,Q,$){let K=this.cache,W=Q.length,Z=ZQ($,W);if(!fJ(K,Z))J.uniform1iv(this.addr,Z),xJ(K,Z);for(let X=0;X!==W;++X)$.setTexture2DArray(Q[X]||jZ,Z[X])}function Kq(J){switch(J){case 5126:return xU;case 35664:return gU;case 35665:return pU;case 35666:return mU;case 35674:return dU;case 35675:return uU;case 35676:return lU;case 5124:case 35670:return cU;case 35667:case 35671:return nU;case 35668:case 35672:return sU;case 35669:case 35673:return iU;case 5125:return oU;case 36294:return aU;case 36295:return rU;case 36296:return tU;case 35678:case 36198:case 36298:case 36306:case 35682:return eU;case 35679:case 36299:case 36307:return Jq;case 35680:case 36300:case 36308:case 36293:return Qq;case 36289:case 36303:case 36311:case 36292:return $q}}class hZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=fU(Q.type)}}class bZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=Kq(Q.type)}}class fZ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let K=this.seq;for(let W=0,Z=K.length;W!==Z;++W){let X=K[W];X.setValue(J,Q[X.id],$)}}}var RK=/(\w+)(\])?(\[|\.)?/g;function RZ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Wq(J,Q,$){let K=J.name,W=K.length;RK.lastIndex=0;while(!0){let Z=RK.exec(K),X=RK.lastIndex,Y=Z[1],H=Z[2]==="]",U=Z[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===W){RZ($,U===void 0?new hZ(Y,J,Q):new bZ(Y,J,Q));break}else{let O=$.map[Y];if(O===void 0)O=new fZ(Y),RZ($,O);$=O}}}class $6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let X=J.getActiveUniform(Q,Z),Y=J.getUniformLocation(Q,X.name);Wq(X,Y,this)}let K=[],W=[];for(let Z of this.seq)if(Z.type===J.SAMPLER_2D_SHADOW||Z.type===J.SAMPLER_CUBE_SHADOW||Z.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(Z);else W.push(Z);if(K.length>0)this.seq=K.concat(W)}setValue(J,Q,$,K){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,K)}setOptional(J,Q,$){let K=Q[$];if(K!==void 0)this.setValue(J,$,K)}static upload(J,Q,$,K){for(let W=0,Z=Q.length;W!==Z;++W){let X=Q[W],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let $=[];for(let K=0,W=J.length;K!==W;++K){let Z=J[K];if(Z.id in Q)$.push(Z)}return $}}function kZ(J,Q,$){let K=J.createShader(Q);return J.shaderSource(K,$),J.compileShader(K),K}var Zq=37297,Xq=0;function Yq(J,Q){let $=J.split(`
`),K=[],W=Math.max(Q-6,0),Z=Math.min(Q+6,$.length);for(let X=W;X<Z;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return K.join(`
`)}var MZ=new KJ;function Hq(J){FJ._getMatrix(MZ,FJ.workingColorSpace,J);let Q=`mat3( ${MZ.elements.map(($)=>$.toFixed(4))} )`;switch(FJ.getTransfer(J)){case b$:return[Q,"LinearTransferOETF"];case LJ:return[Q,"sRGBTransferOETF"];default:return o0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function VZ(J,Q,$){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),Z=(J.getShaderInfoLog(Q)||"").trim();if(K&&Z==="")return"";let X=/ERROR: 0:(\d+)/.exec(Z);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+Z+`

`+Yq(J.getShaderSource(Q),Y)}else return Z}function Uq(J,Q){let $=Hq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var qq={[nQ]:"Linear",[sQ]:"Reinhard",[iQ]:"Cineon",[d7]:"ACESFilmic",[aQ]:"AgX",[rQ]:"Neutral",[oQ]:"Custom"};function Nq(J,Q){let $=qq[Q];if($===void 0)return o0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var KQ=new x;function Gq(){FJ.getLuminanceCoefficients(KQ);let J=KQ.x.toFixed(4),Q=KQ.y.toFixed(4),$=KQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Fq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Q6).join(`
`)}function Oq(J){let Q=[];for(let $ in J){let K=J[$];if(K===!1)continue;Q.push("#define "+$+" "+K)}return Q.join(`
`)}function Dq(J,Q){let $={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<K;W++){let Z=J.getActiveAttrib(Q,W),X=Z.name,Y=1;if(Z.type===J.FLOAT_MAT2)Y=2;if(Z.type===J.FLOAT_MAT3)Y=3;if(Z.type===J.FLOAT_MAT4)Y=4;$[X]={type:Z.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function Q6(J){return J!==""}function BZ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function LZ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Eq=/^[ \t]*#include +<([\w\d./]+)>/gm;function BK(J){return J.replace(Eq,kq)}var Rq=new Map;function kq(J,Q){let $=HJ[Q];if($===void 0){let K=Rq.get(Q);if(K!==void 0)$=HJ[K],o0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,K);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return BK($)}var Mq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zZ(J){return J.replace(Mq,Vq)}function Vq(J,Q,$,K){let W="";for(let Z=parseInt(Q);Z<parseInt($);Z++)W+=K.replace(/\[\s*i\s*\]/g,"[ "+Z+" ]").replace(/UNROLLED_LOOP_INDEX/g,Z);return W}function IZ(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Bq={[y9]:"SHADOWMAP_TYPE_PCF",[F7]:"SHADOWMAP_TYPE_VSM"};function Lq(J){return Bq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zq={[E7]:"ENVMAP_TYPE_CUBE",[v9]:"ENVMAP_TYPE_CUBE",[u7]:"ENVMAP_TYPE_CUBE_UV"};function Iq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return zq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var Pq={[v9]:"ENVMAP_MODE_REFRACTION"};function Aq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Pq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _q={[SW]:"ENVMAP_BLENDING_MULTIPLY",[jW]:"ENVMAP_BLENDING_MIX",[yW]:"ENVMAP_BLENDING_ADD"};function wq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return _q[J.combine]||"ENVMAP_BLENDING_NONE"}function Cq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,K=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:K,maxMip:$}}function Tq(J,Q,$,K){let W=J.getContext(),Z=$.defines,X=$.vertexShader,Y=$.fragmentShader,H=Lq($),U=Iq($),D=Aq($),O=wq($),G=Cq($),R=Fq($),M=Oq(Z),z=W.createProgram(),E,F,T=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(Q6).join(`
`),E.length>0)E+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(Q6).join(`
`),F.length>0)F+=`
`}else E=[IZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+D:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Q6).join(`
`),F=[IZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+D:"",$.envMap?"#define "+O:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==S8?"#define TONE_MAPPING":"",$.toneMapping!==S8?HJ.tonemapping_pars_fragment:"",$.toneMapping!==S8?Nq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",HJ.colorspace_pars_fragment,Uq("linearToOutputTexel",$.outputColorSpace),Gq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(Q6).join(`
`);if(X=BK(X),X=BZ(X,$),X=LZ(X,$),Y=BK(Y),Y=BZ(Y,$),Y=LZ(Y,$),X=zZ(X),Y=zZ(Y),$.isRawShaderMaterial!==!0)T=`#version 300 es
`,E=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,F=["#define varying in",$.glslVersion===f$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===f$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let A=T+E+X,V=T+F+Y,P=kZ(W,W.VERTEX_SHADER,A),C=kZ(W,W.FRAGMENT_SHADER,V);if(W.attachShader(z,P),W.attachShader(z,C),$.index0AttributeName!==void 0)W.bindAttribLocation(z,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(z,0,"position");W.linkProgram(z);function j(S){if(J.debug.checkShaderErrors){let n=W.getProgramInfoLog(z)||"",J0=W.getShaderInfoLog(P)||"",u=W.getShaderInfoLog(C)||"",t=n.trim(),Q0=J0.trim(),d=u.trim(),Y0=!0,N0=!0;if(W.getProgramParameter(z,W.LINK_STATUS)===!1)if(Y0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,z,P,C);else{let E0=VZ(W,P,"vertex"),v0=VZ(W,C,"fragment");a0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(z,W.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+t+`
`+E0+`
`+v0)}else if(t!=="")o0("WebGLProgram: Program Info Log:",t);else if(Q0===""||d==="")N0=!1;if(N0)S.diagnostics={runnable:Y0,programLog:t,vertexShader:{log:Q0,prefix:E},fragmentShader:{log:d,prefix:F}}}W.deleteShader(P),W.deleteShader(C),k=new $6(W,z),L=Dq(W,z)}let k;this.getUniforms=function(){if(k===void 0)j(this);return k};let L;this.getAttributes=function(){if(L===void 0)j(this);return L};let i=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(i===!1)i=W.getProgramParameter(z,Zq);return i},this.destroy=function(){K.releaseStatesOfProgram(this),W.deleteProgram(z),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=Xq++,this.cacheKey=Q,this.usedTimes=1,this.program=z,this.vertexShader=P,this.fragmentShader=C,this}var Sq=0;class xZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has($)===!1)K.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new gZ(J),Q.set(J,$);return $}}class gZ{constructor(J){this.id=Sq++,this.code=J,this.usedTimes=0}}function jq(J){return J===x9||J===g6||J===p6}function yq(J,Q,$,K,W,Z){let X=new l6,Y=new xZ,H=new Set,U=[],D=new Map,O=K.logarithmicDepthBuffer,G=K.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(k){if(H.add(k),k===0)return"uv";return`uv${k}`}function z(k,L,i,S,n,J0){let u=S.fog,t=n.geometry,Q0=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?S.environment:null,d=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Y0=Q.get(k.envMap||Q0,d),N0=!!Y0&&Y0.mapping===u7?Y0.image.height:null,E0=R[k.type];if(k.precision!==null){if(G=K.getMaxPrecision(k.precision),G!==k.precision)o0("WebGLProgram.getParameters:",k.precision,"not supported, using",G,"instead.")}let v0=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,w0=v0!==void 0?v0.length:0,XJ=0;if(t.morphAttributes.position!==void 0)XJ=1;if(t.morphAttributes.normal!==void 0)XJ=2;if(t.morphAttributes.color!==void 0)XJ=3;let ZJ,K0,O0,L0;if(E0){let $J=l8[E0];ZJ=$J.vertexShader,K0=$J.fragmentShader}else{ZJ=k.vertexShader,K0=k.fragmentShader;let $J=Y.getVertexShaderStage(k),GJ=Y.getFragmentShaderStage(k);Y.update(k,$J,GJ),O0=$J.id,L0=GJ.id}let M0=J.getRenderTarget(),X0=J.state.buffers.depth.getReversed(),$0=n.isInstancedMesh===!0,g=n.isBatchedMesh===!0,o=!!k.map,f=!!k.matcap,_=!!Y0,h=!!k.aoMap,r=!!k.lightMap,m=!!k.bumpMap&&k.wireframe===!1,w=!!k.normalMap,p0=!!k.displacementMap,m0=!!k.emissiveMap,s0=!!k.metalnessMap,y=!!k.roughnessMap,JJ=k.anisotropy>0,b0=k.clearcoat>0,l0=k.dispersion>0,N=k.iridescence>0,q=k.sheen>0,I=k.transmission>0,v=JJ&&!!k.anisotropyMap,l=b0&&!!k.clearcoatMap,U0=b0&&!!k.clearcoatNormalMap,G0=b0&&!!k.clearcoatRoughnessMap,e=N&&!!k.iridescenceMap,Z0=N&&!!k.iridescenceThicknessMap,k0=q&&!!k.sheenColorMap,P0=q&&!!k.sheenRoughnessMap,V0=!!k.specularMap,D0=!!k.specularColorMap,g0=!!k.specularIntensityMap,c0=I&&!!k.transmissionMap,WJ=I&&!!k.thicknessMap,b=!!k.gradientMap,R0=!!k.alphaMap,W0=k.alphaTest>0,B0=!!k.alphaHash,S0=!!k.extensions,H0=S8;if(k.toneMapped){if(M0===null||M0.isXRRenderTarget===!0)H0=J.toneMapping}let z0={shaderID:E0,shaderType:k.type,shaderName:k.name,vertexShader:ZJ,fragmentShader:K0,defines:k.defines,customVertexShaderID:O0,customFragmentShaderID:L0,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:G,batching:g,batchingColor:g&&n._colorsTexture!==null,instancing:$0,instancingColor:$0&&n.instanceColor!==null,instancingMorph:$0&&n.morphTexture!==null,outputColorSpace:M0===null?J.outputColorSpace:M0.isXRRenderTarget===!0?M0.texture.colorSpace:FJ.workingColorSpace,alphaToCoverage:!!k.alphaToCoverage,map:o,matcap:f,envMap:_,envMapMode:_&&Y0.mapping,envMapCubeUVHeight:N0,aoMap:h,lightMap:r,bumpMap:m,normalMap:w,displacementMap:p0,emissiveMap:m0,normalMapObjectSpace:w&&k.normalMapType===uW,normalMapTangentSpace:w&&k.normalMapType===v$,packedNormalMap:w&&k.normalMapType===v$&&jq(k.normalMap.format),metalnessMap:s0,roughnessMap:y,anisotropy:JJ,anisotropyMap:v,clearcoat:b0,clearcoatMap:l,clearcoatNormalMap:U0,clearcoatRoughnessMap:G0,dispersion:l0,iridescence:N,iridescenceMap:e,iridescenceThicknessMap:Z0,sheen:q,sheenColorMap:k0,sheenRoughnessMap:P0,specularMap:V0,specularColorMap:D0,specularIntensityMap:g0,transmission:I,transmissionMap:c0,thicknessMap:WJ,gradientMap:b,opaque:k.transparent===!1&&k.blending===m7&&k.alphaToCoverage===!1,alphaMap:R0,alphaTest:W0,alphaHash:B0,combine:k.combine,mapUv:o&&M(k.map.channel),aoMapUv:h&&M(k.aoMap.channel),lightMapUv:r&&M(k.lightMap.channel),bumpMapUv:m&&M(k.bumpMap.channel),normalMapUv:w&&M(k.normalMap.channel),displacementMapUv:p0&&M(k.displacementMap.channel),emissiveMapUv:m0&&M(k.emissiveMap.channel),metalnessMapUv:s0&&M(k.metalnessMap.channel),roughnessMapUv:y&&M(k.roughnessMap.channel),anisotropyMapUv:v&&M(k.anisotropyMap.channel),clearcoatMapUv:l&&M(k.clearcoatMap.channel),clearcoatNormalMapUv:U0&&M(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G0&&M(k.clearcoatRoughnessMap.channel),iridescenceMapUv:e&&M(k.iridescenceMap.channel),iridescenceThicknessMapUv:Z0&&M(k.iridescenceThicknessMap.channel),sheenColorMapUv:k0&&M(k.sheenColorMap.channel),sheenRoughnessMapUv:P0&&M(k.sheenRoughnessMap.channel),specularMapUv:V0&&M(k.specularMap.channel),specularColorMapUv:D0&&M(k.specularColorMap.channel),specularIntensityMapUv:g0&&M(k.specularIntensityMap.channel),transmissionMapUv:c0&&M(k.transmissionMap.channel),thicknessMapUv:WJ&&M(k.thicknessMap.channel),alphaMapUv:R0&&M(k.alphaMap.channel),vertexTangents:!!t.attributes.tangent&&(w||JJ),vertexNormals:!!t.attributes.normal,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!t.attributes.color&&t.attributes.color.itemSize===4,pointsUvs:n.isPoints===!0&&!!t.attributes.uv&&(o||R0),fog:!!u,useFog:k.fog===!0,fogExp2:!!u&&u.isFogExp2,flatShading:k.wireframe===!1&&(k.flatShading===!0||t.attributes.normal===void 0&&w===!1&&(k.isMeshLambertMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isMeshPhysicalMaterial)),sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:O,reversedDepthBuffer:X0,skinning:n.isSkinnedMesh===!0,hasPositionAttribute:t.attributes.position!==void 0,morphTargets:t.morphAttributes.position!==void 0,morphNormals:t.morphAttributes.normal!==void 0,morphColors:t.morphAttributes.color!==void 0,morphTargetsCount:w0,morphTextureStride:XJ,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:J0.length,numClippingPlanes:Z.numPlanes,numClipIntersection:Z.numIntersection,dithering:k.dithering,shadowMapEnabled:J.shadowMap.enabled&&i.length>0,shadowMapType:J.shadowMap.type,toneMapping:H0,decodeVideoTexture:o&&k.map.isVideoTexture===!0&&FJ.getTransfer(k.map.colorSpace)===LJ,decodeVideoTextureEmissive:m0&&k.emissiveMap.isVideoTexture===!0&&FJ.getTransfer(k.emissiveMap.colorSpace)===LJ,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===PJ,flipSided:k.side===iJ,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:S0&&k.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(S0&&k.extensions.multiDraw===!0||g)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return z0.vertexUv1s=H.has(1),z0.vertexUv2s=H.has(2),z0.vertexUv3s=H.has(3),H.clear(),z0}function E(k){let L=[];if(k.shaderID)L.push(k.shaderID);else L.push(k.customVertexShaderID),L.push(k.customFragmentShaderID);if(k.defines!==void 0)for(let i in k.defines)L.push(i),L.push(k.defines[i]);if(k.isRawShaderMaterial===!1)F(L,k),T(L,k),L.push(J.outputColorSpace);return L.push(k.customProgramCacheKey),L.join()}function F(k,L){k.push(L.precision),k.push(L.outputColorSpace),k.push(L.envMapMode),k.push(L.envMapCubeUVHeight),k.push(L.mapUv),k.push(L.alphaMapUv),k.push(L.lightMapUv),k.push(L.aoMapUv),k.push(L.bumpMapUv),k.push(L.normalMapUv),k.push(L.displacementMapUv),k.push(L.emissiveMapUv),k.push(L.metalnessMapUv),k.push(L.roughnessMapUv),k.push(L.anisotropyMapUv),k.push(L.clearcoatMapUv),k.push(L.clearcoatNormalMapUv),k.push(L.clearcoatRoughnessMapUv),k.push(L.iridescenceMapUv),k.push(L.iridescenceThicknessMapUv),k.push(L.sheenColorMapUv),k.push(L.sheenRoughnessMapUv),k.push(L.specularMapUv),k.push(L.specularColorMapUv),k.push(L.specularIntensityMapUv),k.push(L.transmissionMapUv),k.push(L.thicknessMapUv),k.push(L.combine),k.push(L.fogExp2),k.push(L.sizeAttenuation),k.push(L.morphTargetsCount),k.push(L.morphAttributeCount),k.push(L.numDirLights),k.push(L.numPointLights),k.push(L.numSpotLights),k.push(L.numSpotLightMaps),k.push(L.numHemiLights),k.push(L.numRectAreaLights),k.push(L.numDirLightShadows),k.push(L.numPointLightShadows),k.push(L.numSpotLightShadows),k.push(L.numSpotLightShadowsWithMaps),k.push(L.numLightProbes),k.push(L.shadowMapType),k.push(L.toneMapping),k.push(L.numClippingPlanes),k.push(L.numClipIntersection),k.push(L.depthPacking)}function T(k,L){if(X.disableAll(),L.instancing)X.enable(0);if(L.instancingColor)X.enable(1);if(L.instancingMorph)X.enable(2);if(L.matcap)X.enable(3);if(L.envMap)X.enable(4);if(L.normalMapObjectSpace)X.enable(5);if(L.normalMapTangentSpace)X.enable(6);if(L.clearcoat)X.enable(7);if(L.iridescence)X.enable(8);if(L.alphaTest)X.enable(9);if(L.vertexColors)X.enable(10);if(L.vertexAlphas)X.enable(11);if(L.vertexUv1s)X.enable(12);if(L.vertexUv2s)X.enable(13);if(L.vertexUv3s)X.enable(14);if(L.vertexTangents)X.enable(15);if(L.anisotropy)X.enable(16);if(L.alphaHash)X.enable(17);if(L.batching)X.enable(18);if(L.dispersion)X.enable(19);if(L.batchingColor)X.enable(20);if(L.gradientMap)X.enable(21);if(L.packedNormalMap)X.enable(22);if(L.vertexNormals)X.enable(23);if(k.push(X.mask),X.disableAll(),L.fog)X.enable(0);if(L.useFog)X.enable(1);if(L.flatShading)X.enable(2);if(L.logarithmicDepthBuffer)X.enable(3);if(L.reversedDepthBuffer)X.enable(4);if(L.skinning)X.enable(5);if(L.morphTargets)X.enable(6);if(L.morphNormals)X.enable(7);if(L.morphColors)X.enable(8);if(L.premultipliedAlpha)X.enable(9);if(L.shadowMapEnabled)X.enable(10);if(L.doubleSided)X.enable(11);if(L.flipSided)X.enable(12);if(L.useDepthPacking)X.enable(13);if(L.dithering)X.enable(14);if(L.transmission)X.enable(15);if(L.sheen)X.enable(16);if(L.opaque)X.enable(17);if(L.pointsUvs)X.enable(18);if(L.decodeVideoTexture)X.enable(19);if(L.decodeVideoTextureEmissive)X.enable(20);if(L.alphaToCoverage)X.enable(21);if(L.numLightProbeGrids>0)X.enable(22);if(L.hasPositionAttribute)X.enable(23);k.push(X.mask)}function A(k){let L=R[k.type],i;if(L){let S=l8[L];i=QZ.clone(S.uniforms)}else i=k.uniforms;return i}function V(k,L){let i=D.get(L);if(i!==void 0)++i.usedTimes;else i=new Tq(J,L,k,W),U.push(i),D.set(L,i);return i}function P(k){if(--k.usedTimes===0){let L=U.indexOf(k);U[L]=U[U.length-1],U.pop(),D.delete(k.cacheKey),k.destroy()}}function C(k){Y.remove(k)}function j(){Y.dispose()}return{getParameters:z,getProgramCacheKey:E,getUniforms:A,acquireProgram:V,releaseProgram:P,releaseShaderCache:C,programs:U,dispose:j}}function vq(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function W(X,Y,H){J.get(X)[Y]=H}function Z(){J=new WeakMap}return{has:Q,get:$,remove:K,update:W,dispose:Z}}function hq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function PZ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function AZ(){let J=[],Q=0,$=[],K=[],W=[];function Z(){Q=0,$.length=0,K.length=0,W.length=0}function X(G){let R=0;if(G.isInstancedMesh)R+=2;if(G.isSkinnedMesh)R+=1;return R}function Y(G,R,M,z,E,F){let T=J[Q];if(T===void 0)T={id:G.id,object:G,geometry:R,material:M,materialVariant:X(G),groupOrder:z,renderOrder:G.renderOrder,z:E,group:F},J[Q]=T;else T.id=G.id,T.object=G,T.geometry=R,T.material=M,T.materialVariant=X(G),T.groupOrder=z,T.renderOrder=G.renderOrder,T.z=E,T.group=F;return Q++,T}function H(G,R,M,z,E,F){let T=Y(G,R,M,z,E,F);if(M.transmission>0)K.push(T);else if(M.transparent===!0)W.push(T);else $.push(T)}function U(G,R,M,z,E,F){let T=Y(G,R,M,z,E,F);if(M.transmission>0)K.unshift(T);else if(M.transparent===!0)W.unshift(T);else $.unshift(T)}function D(G,R,M){if($.length>1)$.sort(G||hq);if(K.length>1)K.sort(R||PZ);if(W.length>1)W.sort(R||PZ);if(M)$.reverse(),K.reverse(),W.reverse()}function O(){for(let G=Q,R=J.length;G<R;G++){let M=J[G];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:$,transmissive:K,transparent:W,init:Z,push:H,unshift:U,finish:O,sort:D}}function bq(){let J=new WeakMap;function Q(K,W){let Z=J.get(K),X;if(Z===void 0)X=new AZ,J.set(K,[X]);else if(W>=Z.length)X=new AZ,Z.push(X);else X=Z[W];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function fq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new x,color:new QJ};break;case"SpotLight":$={position:new x,direction:new x,color:new QJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new x,color:new QJ,distance:0,decay:0};break;case"HemisphereLight":$={direction:new x,skyColor:new QJ,groundColor:new QJ};break;case"RectAreaLight":$={color:new QJ,position:new x,halfWidth:new x,halfHeight:new x};break}return J[Q.id]=$,$}}}function xq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var gq=0;function pq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function mq(J){let Q=new fq,$=xq(),K={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)K.probe.push(new x);let W=new x,Z=new IJ,X=new IJ;function Y(U){let D=0,O=0,G=0;for(let L=0;L<9;L++)K.probe[L].set(0,0,0);let R=0,M=0,z=0,E=0,F=0,T=0,A=0,V=0,P=0,C=0,j=0;U.sort(pq);for(let L=0,i=U.length;L<i;L++){let S=U[L],n=S.color,J0=S.intensity,u=S.distance,t=null;if(S.shadow&&S.shadow.map)if(S.shadow.map.texture.format===x9)t=S.shadow.map.texture;else t=S.shadow.map.depthTexture||S.shadow.map.texture;if(S.isAmbientLight)D+=n.r*J0,O+=n.g*J0,G+=n.b*J0;else if(S.isLightProbe){for(let Q0=0;Q0<9;Q0++)K.probe[Q0].addScaledVector(S.sh.coefficients[Q0],J0);j++}else if(S.isDirectionalLight){let Q0=Q.get(S);if(Q0.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let d=S.shadow,Y0=$.get(S);Y0.shadowIntensity=d.intensity,Y0.shadowBias=d.bias,Y0.shadowNormalBias=d.normalBias,Y0.shadowRadius=d.radius,Y0.shadowMapSize=d.mapSize,K.directionalShadow[R]=Y0,K.directionalShadowMap[R]=t,K.directionalShadowMatrix[R]=S.shadow.matrix,T++}K.directional[R]=Q0,R++}else if(S.isSpotLight){let Q0=Q.get(S);Q0.position.setFromMatrixPosition(S.matrixWorld),Q0.color.copy(n).multiplyScalar(J0),Q0.distance=u,Q0.coneCos=Math.cos(S.angle),Q0.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),Q0.decay=S.decay,K.spot[z]=Q0;let d=S.shadow;if(S.map){if(K.spotLightMap[P]=S.map,P++,d.updateMatrices(S),S.castShadow)C++}if(K.spotLightMatrix[z]=d.matrix,S.castShadow){let Y0=$.get(S);Y0.shadowIntensity=d.intensity,Y0.shadowBias=d.bias,Y0.shadowNormalBias=d.normalBias,Y0.shadowRadius=d.radius,Y0.shadowMapSize=d.mapSize,K.spotShadow[z]=Y0,K.spotShadowMap[z]=t,V++}z++}else if(S.isRectAreaLight){let Q0=Q.get(S);Q0.color.copy(n).multiplyScalar(J0),Q0.halfWidth.set(S.width*0.5,0,0),Q0.halfHeight.set(0,S.height*0.5,0),K.rectArea[E]=Q0,E++}else if(S.isPointLight){let Q0=Q.get(S);if(Q0.color.copy(S.color).multiplyScalar(S.intensity),Q0.distance=S.distance,Q0.decay=S.decay,S.castShadow){let d=S.shadow,Y0=$.get(S);Y0.shadowIntensity=d.intensity,Y0.shadowBias=d.bias,Y0.shadowNormalBias=d.normalBias,Y0.shadowRadius=d.radius,Y0.shadowMapSize=d.mapSize,Y0.shadowCameraNear=d.camera.near,Y0.shadowCameraFar=d.camera.far,K.pointShadow[M]=Y0,K.pointShadowMap[M]=t,K.pointShadowMatrix[M]=S.shadow.matrix,A++}K.point[M]=Q0,M++}else if(S.isHemisphereLight){let Q0=Q.get(S);Q0.skyColor.copy(S.color).multiplyScalar(J0),Q0.groundColor.copy(S.groundColor).multiplyScalar(J0),K.hemi[F]=Q0,F++}}if(E>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=C0.LTC_FLOAT_1,K.rectAreaLTC2=C0.LTC_FLOAT_2;else K.rectAreaLTC1=C0.LTC_HALF_1,K.rectAreaLTC2=C0.LTC_HALF_2;K.ambient[0]=D,K.ambient[1]=O,K.ambient[2]=G;let k=K.hash;if(k.directionalLength!==R||k.pointLength!==M||k.spotLength!==z||k.rectAreaLength!==E||k.hemiLength!==F||k.numDirectionalShadows!==T||k.numPointShadows!==A||k.numSpotShadows!==V||k.numSpotMaps!==P||k.numLightProbes!==j)K.directional.length=R,K.spot.length=z,K.rectArea.length=E,K.point.length=M,K.hemi.length=F,K.directionalShadow.length=T,K.directionalShadowMap.length=T,K.pointShadow.length=A,K.pointShadowMap.length=A,K.spotShadow.length=V,K.spotShadowMap.length=V,K.directionalShadowMatrix.length=T,K.pointShadowMatrix.length=A,K.spotLightMatrix.length=V+P-C,K.spotLightMap.length=P,K.numSpotLightShadowsWithMaps=C,K.numLightProbes=j,k.directionalLength=R,k.pointLength=M,k.spotLength=z,k.rectAreaLength=E,k.hemiLength=F,k.numDirectionalShadows=T,k.numPointShadows=A,k.numSpotShadows=V,k.numSpotMaps=P,k.numLightProbes=j,K.version=gq++}function H(U,D){let O=0,G=0,R=0,M=0,z=0,E=D.matrixWorldInverse;for(let F=0,T=U.length;F<T;F++){let A=U[F];if(A.isDirectionalLight){let V=K.directional[O];V.direction.setFromMatrixPosition(A.matrixWorld),W.setFromMatrixPosition(A.target.matrixWorld),V.direction.sub(W),V.direction.transformDirection(E),O++}else if(A.isSpotLight){let V=K.spot[R];V.position.setFromMatrixPosition(A.matrixWorld),V.position.applyMatrix4(E),V.direction.setFromMatrixPosition(A.matrixWorld),W.setFromMatrixPosition(A.target.matrixWorld),V.direction.sub(W),V.direction.transformDirection(E),R++}else if(A.isRectAreaLight){let V=K.rectArea[M];V.position.setFromMatrixPosition(A.matrixWorld),V.position.applyMatrix4(E),X.identity(),Z.copy(A.matrixWorld),Z.premultiply(E),X.extractRotation(Z),V.halfWidth.set(A.width*0.5,0,0),V.halfHeight.set(0,A.height*0.5,0),V.halfWidth.applyMatrix4(X),V.halfHeight.applyMatrix4(X),M++}else if(A.isPointLight){let V=K.point[G];V.position.setFromMatrixPosition(A.matrixWorld),V.position.applyMatrix4(E),G++}else if(A.isHemisphereLight){let V=K.hemi[z];V.direction.setFromMatrixPosition(A.matrixWorld),V.direction.transformDirection(E),z++}}}return{setup:Y,setupView:H,state:K}}function _Z(J){let Q=new mq(J),$=[],K=[],W=[];function Z(G){O.camera=G,$.length=0,K.length=0,W.length=0}function X(G){$.push(G)}function Y(G){K.push(G)}function H(G){W.push(G)}function U(){Q.setup($)}function D(G){Q.setupView($,G)}let O={lightsArray:$,shadowsArray:K,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:Z,state:O,setupLights:U,setupLightsView:D,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function dq(J){let Q=new WeakMap;function $(W,Z=0){let X=Q.get(W),Y;if(X===void 0)Y=new _Z(J),Q.set(W,[Y]);else if(Z>=X.length)Y=new _Z(J),X.push(Y);else Y=X[Z];return Y}function K(){Q=new WeakMap}return{get:$,dispose:K}}var uq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lq=`uniform sampler2D shadow_pass;
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
}`,cq=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],nq=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],wZ=new IJ,J6=new x,kK=new x;function sq(J,Q,$){let K=new a7,W=new i0,Z=new i0,X=new wJ,Y=new o$,H=new a$,U={},D=$.maxTextureSize,O={[O7]:iJ,[iJ]:O7,[PJ]:PJ},G=new H8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new i0},radius:{value:4}},vertexShader:uq,fragmentShader:lq}),R=G.clone();R.defines.HORIZONTAL_PASS=1;let M=new SJ;M.setAttribute("position",new bJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let z=new F0(M,G),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y9;let F=this.type;this.render=function(C,j,k){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(C.length===0)return;if(this.type===KW)o0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=y9;let L=J.getRenderTarget(),i=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),n=J.state;if(n.setBlending(b8),n.buffers.depth.getReversed()===!0)n.buffers.color.setClear(0,0,0,0);else n.buffers.color.setClear(1,1,1,1);n.buffers.depth.setTest(!0),n.setScissorTest(!1);let J0=F!==this.type;if(J0)j.traverse(function(u){if(u.material)if(Array.isArray(u.material))u.material.forEach((t)=>t.needsUpdate=!0);else u.material.needsUpdate=!0});for(let u=0,t=C.length;u<t;u++){let Q0=C[u],d=Q0.shadow;if(d===void 0){o0("WebGLShadowMap:",Q0,"has no shadow.");continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;W.copy(d.mapSize);let Y0=d.getFrameExtents();if(W.multiply(Y0),Z.copy(d.mapSize),W.x>D||W.y>D){if(W.x>D)Z.x=Math.floor(D/Y0.x),W.x=Z.x*Y0.x,d.mapSize.x=Z.x;if(W.y>D)Z.y=Math.floor(D/Y0.y),W.y=Z.y*Y0.y,d.mapSize.y=Z.y}let N0=J.state.buffers.depth.getReversed();if(d.camera._reversedDepth=N0,d.map===null||J0===!0){if(d.map!==null){if(d.map.depthTexture!==null)d.map.depthTexture.dispose(),d.map.depthTexture=null;d.map.dispose()}if(this.type===F7){if(Q0.isPointLight){o0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}d.map=new z8(W.x,W.y,{format:x9,type:J9,minFilter:Y8,magFilter:Y8,generateMipmaps:!1}),d.map.texture.name=Q0.name+".shadowMap",d.map.depthTexture=new M9(W.x,W.y,e8),d.map.depthTexture.name=Q0.name+".shadowMapDepth",d.map.depthTexture.format=b9,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=D9,d.map.depthTexture.magFilter=D9}else{if(Q0.isPointLight)d.map=new LK(W.x),d.map.depthTexture=new n$(W.x,E9);else d.map=new z8(W.x,W.y),d.map.depthTexture=new M9(W.x,W.y,E9);if(d.map.depthTexture.name=Q0.name+".shadowMap",d.map.depthTexture.format=b9,this.type===y9)d.map.depthTexture.compareFunction=N0?d6:m6,d.map.depthTexture.minFilter=Y8,d.map.depthTexture.magFilter=Y8;else d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=D9,d.map.depthTexture.magFilter=D9}d.camera.updateProjectionMatrix()}let E0=d.map.isWebGLCubeRenderTarget?6:1;for(let v0=0;v0<E0;v0++){if(d.map.isWebGLCubeRenderTarget)J.setRenderTarget(d.map,v0),J.clear();else{if(v0===0)J.setRenderTarget(d.map),J.clear();let w0=d.getViewport(v0);X.set(Z.x*w0.x,Z.y*w0.y,Z.x*w0.z,Z.y*w0.w),n.viewport(X)}if(Q0.isPointLight){let{camera:w0,matrix:XJ}=d,ZJ=Q0.distance||w0.far;if(ZJ!==w0.far)w0.far=ZJ,w0.updateProjectionMatrix();J6.setFromMatrixPosition(Q0.matrixWorld),w0.position.copy(J6),kK.copy(w0.position),kK.add(cq[v0]),w0.up.copy(nq[v0]),w0.lookAt(kK),w0.updateMatrixWorld(),XJ.makeTranslation(-J6.x,-J6.y,-J6.z),wZ.multiplyMatrices(w0.projectionMatrix,w0.matrixWorldInverse),d._frustum.setFromProjectionMatrix(wZ,w0.coordinateSystem,w0.reversedDepth)}else d.updateMatrices(Q0);K=d.getFrustum(),V(j,k,d.camera,Q0,this.type)}if(d.isPointLightShadow!==!0&&this.type===F7)T(d,k);d.needsUpdate=!1}F=this.type,E.needsUpdate=!1,J.setRenderTarget(L,i,S)};function T(C,j){let k=Q.update(z);if(G.defines.VSM_SAMPLES!==C.blurSamples)G.defines.VSM_SAMPLES=C.blurSamples,R.defines.VSM_SAMPLES=C.blurSamples,G.needsUpdate=!0,R.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new z8(W.x,W.y,{format:x9,type:J9});G.uniforms.shadow_pass.value=C.map.depthTexture,G.uniforms.resolution.value=C.mapSize,G.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(j,null,k,G,z,null),R.uniforms.shadow_pass.value=C.mapPass.texture,R.uniforms.resolution.value=C.mapSize,R.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(j,null,k,R,z,null)}function A(C,j,k,L){let i=null,S=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)i=S;else if(i=k.isPointLight===!0?H:Y,J.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0||j.alphaToCoverage===!0){let n=i.uuid,J0=j.uuid,u=U[n];if(u===void 0)u={},U[n]=u;let t=u[J0];if(t===void 0)t=i.clone(),u[J0]=t,j.addEventListener("dispose",P);i=t}if(i.visible=j.visible,i.wireframe=j.wireframe,L===F7)i.side=j.shadowSide!==null?j.shadowSide:j.side;else i.side=j.shadowSide!==null?j.shadowSide:O[j.side];if(i.alphaMap=j.alphaMap,i.alphaTest=j.alphaToCoverage===!0?0.5:j.alphaTest,i.map=j.map,i.clipShadows=j.clipShadows,i.clippingPlanes=j.clippingPlanes,i.clipIntersection=j.clipIntersection,i.displacementMap=j.displacementMap,i.displacementScale=j.displacementScale,i.displacementBias=j.displacementBias,i.wireframeLinewidth=j.wireframeLinewidth,i.linewidth=j.linewidth,k.isPointLight===!0&&i.isMeshDistanceMaterial===!0){let n=J.properties.get(i);n.light=k}return i}function V(C,j,k,L,i){if(C.visible===!1)return;if(C.layers.test(j.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&i===F7)&&(!C.frustumCulled||K.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let J0=Q.update(C),u=C.material;if(Array.isArray(u)){let t=J0.groups;for(let Q0=0,d=t.length;Q0<d;Q0++){let Y0=t[Q0],N0=u[Y0.materialIndex];if(N0&&N0.visible){let E0=A(C,N0,L,i);C.onBeforeShadow(J,C,j,k,J0,E0,Y0),J.renderBufferDirect(k,null,J0,E0,C,Y0),C.onAfterShadow(J,C,j,k,J0,E0,Y0)}}}else if(u.visible){let t=A(C,u,L,i);C.onBeforeShadow(J,C,j,k,J0,t,null),J.renderBufferDirect(k,null,J0,t,C,null),C.onAfterShadow(J,C,j,k,J0,t,null)}}}let n=C.children;for(let J0=0,u=n.length;J0<u;J0++)V(n[J0],j,k,L,i)}function P(C){C.target.removeEventListener("dispose",P);for(let k in U){let L=U[k],i=C.target.uuid;if(i in L)L[i].dispose(),delete L[i]}}}function iq(J,Q){function $(){let b=!1,R0=new wJ,W0=null,B0=new wJ(0,0,0,0);return{setMask:function(S0){if(W0!==S0&&!b)J.colorMask(S0,S0,S0,S0),W0=S0},setLocked:function(S0){b=S0},setClear:function(S0,H0,z0,$J,GJ){if(GJ===!0)S0*=$J,H0*=$J,z0*=$J;if(R0.set(S0,H0,z0,$J),B0.equals(R0)===!1)J.clearColor(S0,H0,z0,$J),B0.copy(R0)},reset:function(){b=!1,W0=null,B0.set(-1,0,0,0)}}}function K(){let b=!1,R0=!1,W0=null,B0=null,S0=null;return{setReversed:function(H0){if(R0!==H0){let z0=Q.get("EXT_clip_control");if(H0)z0.clipControlEXT(z0.LOWER_LEFT_EXT,z0.ZERO_TO_ONE_EXT);else z0.clipControlEXT(z0.LOWER_LEFT_EXT,z0.NEGATIVE_ONE_TO_ONE_EXT);R0=H0;let $J=S0;S0=null,this.setClear($J)}},getReversed:function(){return R0},setTest:function(H0){if(H0)M0(J.DEPTH_TEST);else X0(J.DEPTH_TEST)},setMask:function(H0){if(W0!==H0&&!b)J.depthMask(H0),W0=H0},setFunc:function(H0){if(R0)H0=eW[H0];if(B0!==H0){switch(H0){case IW:J.depthFunc(J.NEVER);break;case PW:J.depthFunc(J.ALWAYS);break;case AW:J.depthFunc(J.LESS);break;case cQ:J.depthFunc(J.LEQUAL);break;case _W:J.depthFunc(J.EQUAL);break;case wW:J.depthFunc(J.GEQUAL);break;case CW:J.depthFunc(J.GREATER);break;case TW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}B0=H0}},setLocked:function(H0){b=H0},setClear:function(H0){if(S0!==H0){if(S0=H0,R0)H0=1-H0;J.clearDepth(H0)}},reset:function(){b=!1,W0=null,B0=null,S0=null,R0=!1}}}function W(){let b=!1,R0=null,W0=null,B0=null,S0=null,H0=null,z0=null,$J=null,GJ=null;return{setTest:function(kJ){if(!b)if(kJ)M0(J.STENCIL_TEST);else X0(J.STENCIL_TEST)},setMask:function(kJ){if(R0!==kJ&&!b)J.stencilMask(kJ),R0=kJ},setFunc:function(kJ,q8,D8){if(W0!==kJ||B0!==q8||S0!==D8)J.stencilFunc(kJ,q8,D8),W0=kJ,B0=q8,S0=D8},setOp:function(kJ,q8,D8){if(H0!==kJ||z0!==q8||$J!==D8)J.stencilOp(kJ,q8,D8),H0=kJ,z0=q8,$J=D8},setLocked:function(kJ){b=kJ},setClear:function(kJ){if(GJ!==kJ)J.clearStencil(kJ),GJ=kJ},reset:function(){b=!1,R0=null,W0=null,B0=null,S0=null,H0=null,z0=null,$J=null,GJ=null}}}let Z=new $,X=new K,Y=new W,H=new WeakMap,U=new WeakMap,D={},O={},G={},R=new WeakMap,M=[],z=null,E=!1,F=null,T=null,A=null,V=null,P=null,C=null,j=null,k=new QJ(0,0,0),L=0,i=!1,S=null,n=null,J0=null,u=null,t=null,Q0=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,Y0=0,N0=J.getParameter(J.VERSION);if(N0.indexOf("WebGL")!==-1)Y0=parseFloat(/^WebGL (\d)/.exec(N0)[1]),d=Y0>=1;else if(N0.indexOf("OpenGL ES")!==-1)Y0=parseFloat(/^OpenGL ES (\d)/.exec(N0)[1]),d=Y0>=2;let E0=null,v0={},w0=J.getParameter(J.SCISSOR_BOX),XJ=J.getParameter(J.VIEWPORT),ZJ=new wJ().fromArray(w0),K0=new wJ().fromArray(XJ);function O0(b,R0,W0,B0){let S0=new Uint8Array(4),H0=J.createTexture();J.bindTexture(b,H0),J.texParameteri(b,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(b,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let z0=0;z0<W0;z0++)if(b===J.TEXTURE_3D||b===J.TEXTURE_2D_ARRAY)J.texImage3D(R0,0,J.RGBA,1,1,B0,0,J.RGBA,J.UNSIGNED_BYTE,S0);else J.texImage2D(R0+z0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,S0);return H0}let L0={};L0[J.TEXTURE_2D]=O0(J.TEXTURE_2D,J.TEXTURE_2D,1),L0[J.TEXTURE_CUBE_MAP]=O0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),L0[J.TEXTURE_2D_ARRAY]=O0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),L0[J.TEXTURE_3D]=O0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),Z.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),M0(J.DEPTH_TEST),X.setFunc(cQ),m(!1),w(dQ),M0(J.CULL_FACE),h(b8);function M0(b){if(D[b]!==!0)J.enable(b),D[b]=!0}function X0(b){if(D[b]!==!1)J.disable(b),D[b]=!1}function $0(b,R0){if(G[b]!==R0){if(J.bindFramebuffer(b,R0),G[b]=R0,b===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=R0;if(b===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=R0;return!0}return!1}function g(b,R0){let W0=M,B0=!1;if(b){if(W0=R.get(R0),W0===void 0)W0=[],R.set(R0,W0);let S0=b.textures;if(W0.length!==S0.length||W0[0]!==J.COLOR_ATTACHMENT0){for(let H0=0,z0=S0.length;H0<z0;H0++)W0[H0]=J.COLOR_ATTACHMENT0+H0;W0.length=S0.length,B0=!0}}else if(W0[0]!==J.BACK)W0[0]=J.BACK,B0=!0;if(B0)J.drawBuffers(W0)}function o(b){if(z!==b)return J.useProgram(b),z=b,!0;return!1}let f={[D7]:J.FUNC_ADD,[ZW]:J.FUNC_SUBTRACT,[XW]:J.FUNC_REVERSE_SUBTRACT};f[YW]=J.MIN,f[HW]=J.MAX;let _={[UW]:J.ZERO,[qW]:J.ONE,[NW]:J.SRC_COLOR,[FW]:J.SRC_ALPHA,[MW]:J.SRC_ALPHA_SATURATE,[RW]:J.DST_COLOR,[DW]:J.DST_ALPHA,[GW]:J.ONE_MINUS_SRC_COLOR,[OW]:J.ONE_MINUS_SRC_ALPHA,[kW]:J.ONE_MINUS_DST_COLOR,[EW]:J.ONE_MINUS_DST_ALPHA,[VW]:J.CONSTANT_COLOR,[BW]:J.ONE_MINUS_CONSTANT_COLOR,[LW]:J.CONSTANT_ALPHA,[zW]:J.ONE_MINUS_CONSTANT_ALPHA};function h(b,R0,W0,B0,S0,H0,z0,$J,GJ,kJ){if(b===b8){if(E===!0)X0(J.BLEND),E=!1;return}if(E===!1)M0(J.BLEND),E=!0;if(b!==WW){if(b!==F||kJ!==i){if(T!==D7||P!==D7)J.blendEquation(J.FUNC_ADD),T=D7,P=D7;if(kJ)switch(b){case m7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case f8:J.blendFunc(J.ONE,J.ONE);break;case uQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case lQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:a0("WebGLState: Invalid blending: ",b);break}else switch(b){case m7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case f8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case uQ:a0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lQ:a0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:a0("WebGLState: Invalid blending: ",b);break}A=null,V=null,C=null,j=null,k.set(0,0,0),L=0,F=b,i=kJ}return}if(S0=S0||R0,H0=H0||W0,z0=z0||B0,R0!==T||S0!==P)J.blendEquationSeparate(f[R0],f[S0]),T=R0,P=S0;if(W0!==A||B0!==V||H0!==C||z0!==j)J.blendFuncSeparate(_[W0],_[B0],_[H0],_[z0]),A=W0,V=B0,C=H0,j=z0;if($J.equals(k)===!1||GJ!==L)J.blendColor($J.r,$J.g,$J.b,GJ),k.copy($J),L=GJ;F=b,i=!1}function r(b,R0){b.side===PJ?X0(J.CULL_FACE):M0(J.CULL_FACE);let W0=b.side===iJ;if(R0)W0=!W0;m(W0),b.blending===m7&&b.transparent===!1?h(b8):h(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),X.setFunc(b.depthFunc),X.setTest(b.depthTest),X.setMask(b.depthWrite),Z.setMask(b.colorWrite);let B0=b.stencilWrite;if(Y.setTest(B0),B0)Y.setMask(b.stencilWriteMask),Y.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),Y.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass);m0(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?M0(J.SAMPLE_ALPHA_TO_COVERAGE):X0(J.SAMPLE_ALPHA_TO_COVERAGE)}function m(b){if(S!==b){if(b)J.frontFace(J.CW);else J.frontFace(J.CCW);S=b}}function w(b){if(b!==QW){if(M0(J.CULL_FACE),b!==n)if(b===dQ)J.cullFace(J.BACK);else if(b===$W)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else X0(J.CULL_FACE);n=b}function p0(b){if(b!==J0){if(d)J.lineWidth(b);J0=b}}function m0(b,R0,W0){if(b){if(M0(J.POLYGON_OFFSET_FILL),u!==R0||t!==W0){if(u=R0,t=W0,X.getReversed())R0=-R0;J.polygonOffset(R0,W0)}}else X0(J.POLYGON_OFFSET_FILL)}function s0(b){if(b)M0(J.SCISSOR_TEST);else X0(J.SCISSOR_TEST)}function y(b){if(b===void 0)b=J.TEXTURE0+Q0-1;if(E0!==b)J.activeTexture(b),E0=b}function JJ(b,R0,W0){if(W0===void 0)if(E0===null)W0=J.TEXTURE0+Q0-1;else W0=E0;let B0=v0[W0];if(B0===void 0)B0={type:void 0,texture:void 0},v0[W0]=B0;if(B0.type!==b||B0.texture!==R0){if(E0!==W0)J.activeTexture(W0),E0=W0;J.bindTexture(b,R0||L0[b]),B0.type=b,B0.texture=R0}}function b0(){let b=v0[E0];if(b!==void 0&&b.type!==void 0)J.bindTexture(b.type,null),b.type=void 0,b.texture=void 0}function l0(){try{J.compressedTexImage2D(...arguments)}catch(b){a0("WebGLState:",b)}}function N(){try{J.compressedTexImage3D(...arguments)}catch(b){a0("WebGLState:",b)}}function q(){try{J.texSubImage2D(...arguments)}catch(b){a0("WebGLState:",b)}}function I(){try{J.texSubImage3D(...arguments)}catch(b){a0("WebGLState:",b)}}function v(){try{J.compressedTexSubImage2D(...arguments)}catch(b){a0("WebGLState:",b)}}function l(){try{J.compressedTexSubImage3D(...arguments)}catch(b){a0("WebGLState:",b)}}function U0(){try{J.texStorage2D(...arguments)}catch(b){a0("WebGLState:",b)}}function G0(){try{J.texStorage3D(...arguments)}catch(b){a0("WebGLState:",b)}}function e(){try{J.texImage2D(...arguments)}catch(b){a0("WebGLState:",b)}}function Z0(){try{J.texImage3D(...arguments)}catch(b){a0("WebGLState:",b)}}function k0(b){if(O[b]!==void 0)return O[b];else return J.getParameter(b)}function P0(b,R0){if(O[b]!==R0)J.pixelStorei(b,R0),O[b]=R0}function V0(b){if(ZJ.equals(b)===!1)J.scissor(b.x,b.y,b.z,b.w),ZJ.copy(b)}function D0(b){if(K0.equals(b)===!1)J.viewport(b.x,b.y,b.z,b.w),K0.copy(b)}function g0(b,R0){let W0=U.get(R0);if(W0===void 0)W0=new WeakMap,U.set(R0,W0);let B0=W0.get(b);if(B0===void 0)B0=J.getUniformBlockIndex(R0,b.name),W0.set(b,B0)}function c0(b,R0){let B0=U.get(R0).get(b);if(H.get(R0)!==B0)J.uniformBlockBinding(R0,B0,b.__bindingPointIndex),H.set(R0,B0)}function WJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),D={},O={},E0=null,v0={},G={},R=new WeakMap,M=[],z=null,E=!1,F=null,T=null,A=null,V=null,P=null,C=null,j=null,k=new QJ(0,0,0),L=0,i=!1,S=null,n=null,J0=null,u=null,t=null,ZJ.set(0,0,J.canvas.width,J.canvas.height),K0.set(0,0,J.canvas.width,J.canvas.height),Z.reset(),X.reset(),Y.reset()}return{buffers:{color:Z,depth:X,stencil:Y},enable:M0,disable:X0,bindFramebuffer:$0,drawBuffers:g,useProgram:o,setBlending:h,setMaterial:r,setFlipSided:m,setCullFace:w,setLineWidth:p0,setPolygonOffset:m0,setScissorTest:s0,activeTexture:y,bindTexture:JJ,unbindTexture:b0,compressedTexImage2D:l0,compressedTexImage3D:N,texImage2D:e,texImage3D:Z0,pixelStorei:P0,getParameter:k0,updateUBOMapping:g0,uniformBlockBinding:c0,texStorage2D:U0,texStorage3D:G0,texSubImage2D:q,texSubImage3D:I,compressedTexSubImage2D:v,compressedTexSubImage3D:l,scissor:V0,viewport:D0,reset:WJ}}function oq(J,Q,$,K,W,Z,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new i0,D=new WeakMap,O=new Set,G,R=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(N){}function z(N,q){return M?new OffscreenCanvas(N,q):p7("canvas")}function E(N,q,I){let v=1,l=l0(N);if(l.width>I||l.height>I)v=I/Math.max(l.width,l.height);if(v<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let U0=Math.floor(v*l.width),G0=Math.floor(v*l.height);if(G===void 0)G=z(U0,G0);let e=q?z(U0,G0):G;return e.width=U0,e.height=G0,e.getContext("2d").drawImage(N,0,0,U0,G0),o0("WebGLRenderer: Texture has been resized from ("+l.width+"x"+l.height+") to ("+U0+"x"+G0+")."),e}else{if("data"in N)o0("WebGLRenderer: Image in DataTexture is too big ("+l.width+"x"+l.height+").");return N}return N}function F(N){return N.generateMipmaps}function T(N){J.generateMipmap(N)}function A(N){if(N.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(N.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(N,q,I,v,l,U0=!1){if(N!==null){if(J[N]!==void 0)return J[N];o0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let G0;if(v){if(G0=Q.get("EXT_texture_norm16"),!G0)o0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let e=q;if(q===J.RED){if(I===J.FLOAT)e=J.R32F;if(I===J.HALF_FLOAT)e=J.R16F;if(I===J.UNSIGNED_BYTE)e=J.R8;if(I===J.UNSIGNED_SHORT&&G0)e=G0.R16_EXT;if(I===J.SHORT&&G0)e=G0.R16_SNORM_EXT}if(q===J.RED_INTEGER){if(I===J.UNSIGNED_BYTE)e=J.R8UI;if(I===J.UNSIGNED_SHORT)e=J.R16UI;if(I===J.UNSIGNED_INT)e=J.R32UI;if(I===J.BYTE)e=J.R8I;if(I===J.SHORT)e=J.R16I;if(I===J.INT)e=J.R32I}if(q===J.RG){if(I===J.FLOAT)e=J.RG32F;if(I===J.HALF_FLOAT)e=J.RG16F;if(I===J.UNSIGNED_BYTE)e=J.RG8;if(I===J.UNSIGNED_SHORT&&G0)e=G0.RG16_EXT;if(I===J.SHORT&&G0)e=G0.RG16_SNORM_EXT}if(q===J.RG_INTEGER){if(I===J.UNSIGNED_BYTE)e=J.RG8UI;if(I===J.UNSIGNED_SHORT)e=J.RG16UI;if(I===J.UNSIGNED_INT)e=J.RG32UI;if(I===J.BYTE)e=J.RG8I;if(I===J.SHORT)e=J.RG16I;if(I===J.INT)e=J.RG32I}if(q===J.RGB_INTEGER){if(I===J.UNSIGNED_BYTE)e=J.RGB8UI;if(I===J.UNSIGNED_SHORT)e=J.RGB16UI;if(I===J.UNSIGNED_INT)e=J.RGB32UI;if(I===J.BYTE)e=J.RGB8I;if(I===J.SHORT)e=J.RGB16I;if(I===J.INT)e=J.RGB32I}if(q===J.RGBA_INTEGER){if(I===J.UNSIGNED_BYTE)e=J.RGBA8UI;if(I===J.UNSIGNED_SHORT)e=J.RGBA16UI;if(I===J.UNSIGNED_INT)e=J.RGBA32UI;if(I===J.BYTE)e=J.RGBA8I;if(I===J.SHORT)e=J.RGBA16I;if(I===J.INT)e=J.RGBA32I}if(q===J.RGB){if(I===J.UNSIGNED_SHORT&&G0)e=G0.RGB16_EXT;if(I===J.SHORT&&G0)e=G0.RGB16_SNORM_EXT;if(I===J.UNSIGNED_INT_5_9_9_9_REV)e=J.RGB9_E5;if(I===J.UNSIGNED_INT_10F_11F_11F_REV)e=J.R11F_G11F_B10F}if(q===J.RGBA){let Z0=U0?b$:FJ.getTransfer(l);if(I===J.FLOAT)e=J.RGBA32F;if(I===J.HALF_FLOAT)e=J.RGBA16F;if(I===J.UNSIGNED_BYTE)e=Z0===LJ?J.SRGB8_ALPHA8:J.RGBA8;if(I===J.UNSIGNED_SHORT&&G0)e=G0.RGBA16_EXT;if(I===J.SHORT&&G0)e=G0.RGBA16_SNORM_EXT;if(I===J.UNSIGNED_SHORT_4_4_4_4)e=J.RGBA4;if(I===J.UNSIGNED_SHORT_5_5_5_1)e=J.RGB5_A1}if(e===J.R16F||e===J.R32F||e===J.RG16F||e===J.RG32F||e===J.RGBA16F||e===J.RGBA32F)Q.get("EXT_color_buffer_float");return e}function P(N,q){let I;if(N){if(q===null||q===E9||q===R7)I=J.DEPTH24_STENCIL8;else if(q===e8)I=J.DEPTH32F_STENCIL8;else if(q===n7)I=J.DEPTH24_STENCIL8,o0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(q===null||q===E9||q===R7)I=J.DEPTH_COMPONENT24;else if(q===e8)I=J.DEPTH_COMPONENT32F;else if(q===n7)I=J.DEPTH_COMPONENT16;return I}function C(N,q){if(F(N)===!0||N.isFramebufferTexture&&N.minFilter!==D9&&N.minFilter!==Y8)return Math.log2(Math.max(q.width,q.height))+1;else if(N.mipmaps!==void 0&&N.mipmaps.length>0)return N.mipmaps.length;else if(N.isCompressedTexture&&Array.isArray(N.image))return q.mipmaps.length;else return 1}function j(N){let q=N.target;if(q.removeEventListener("dispose",j),L(q),q.isVideoTexture)D.delete(q);if(q.isHTMLTexture)O.delete(q)}function k(N){let q=N.target;q.removeEventListener("dispose",k),S(q)}function L(N){let q=K.get(N);if(q.__webglInit===void 0)return;let I=N.source,v=R.get(I);if(v){let l=v[q.__cacheKey];if(l.usedTimes--,l.usedTimes===0)i(N);if(Object.keys(v).length===0)R.delete(I)}K.remove(N)}function i(N){let q=K.get(N);J.deleteTexture(q.__webglTexture);let I=N.source,v=R.get(I);delete v[q.__cacheKey],X.memory.textures--}function S(N){let q=K.get(N);if(N.depthTexture)N.depthTexture.dispose(),K.remove(N.depthTexture);if(N.isWebGLCubeRenderTarget)for(let v=0;v<6;v++){if(Array.isArray(q.__webglFramebuffer[v]))for(let l=0;l<q.__webglFramebuffer[v].length;l++)J.deleteFramebuffer(q.__webglFramebuffer[v][l]);else J.deleteFramebuffer(q.__webglFramebuffer[v]);if(q.__webglDepthbuffer)J.deleteRenderbuffer(q.__webglDepthbuffer[v])}else{if(Array.isArray(q.__webglFramebuffer))for(let v=0;v<q.__webglFramebuffer.length;v++)J.deleteFramebuffer(q.__webglFramebuffer[v]);else J.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer)J.deleteRenderbuffer(q.__webglDepthbuffer);if(q.__webglMultisampledFramebuffer)J.deleteFramebuffer(q.__webglMultisampledFramebuffer);if(q.__webglColorRenderbuffer){for(let v=0;v<q.__webglColorRenderbuffer.length;v++)if(q.__webglColorRenderbuffer[v])J.deleteRenderbuffer(q.__webglColorRenderbuffer[v])}if(q.__webglDepthRenderbuffer)J.deleteRenderbuffer(q.__webglDepthRenderbuffer)}let I=N.textures;for(let v=0,l=I.length;v<l;v++){let U0=K.get(I[v]);if(U0.__webglTexture)J.deleteTexture(U0.__webglTexture),X.memory.textures--;K.remove(I[v])}K.remove(N)}let n=0;function J0(){n=0}function u(){return n}function t(N){n=N}function Q0(){let N=n;if(N>=W.maxTextures)o0("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+W.maxTextures);return n+=1,N}function d(N){let q=[];return q.push(N.wrapS),q.push(N.wrapT),q.push(N.wrapR||0),q.push(N.magFilter),q.push(N.minFilter),q.push(N.anisotropy),q.push(N.internalFormat),q.push(N.format),q.push(N.type),q.push(N.generateMipmaps),q.push(N.premultiplyAlpha),q.push(N.flipY),q.push(N.unpackAlignment),q.push(N.colorSpace),q.join()}function Y0(N,q){let I=K.get(N);if(N.isVideoTexture)JJ(N);if(N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&I.__version!==N.version){let v=N.image;if(v===null)o0("WebGLRenderer: Texture marked for update but no image data found.");else if(v.complete===!1)o0("WebGLRenderer: Texture marked for update but image is incomplete");else{X0(I,N,q);return}}else if(N.isExternalTexture)I.__webglTexture=N.sourceTexture?N.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,I.__webglTexture,J.TEXTURE0+q)}function N0(N,q){let I=K.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&I.__version!==N.version){X0(I,N,q);return}else if(N.isExternalTexture)I.__webglTexture=N.sourceTexture?N.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,I.__webglTexture,J.TEXTURE0+q)}function E0(N,q){let I=K.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&I.__version!==N.version){X0(I,N,q);return}$.bindTexture(J.TEXTURE_3D,I.__webglTexture,J.TEXTURE0+q)}function v0(N,q){let I=K.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&I.__version!==N.version){$0(I,N,q);return}$.bindTexture(J.TEXTURE_CUBE_MAP,I.__webglTexture,J.TEXTURE0+q)}let w0={[l7]:J.REPEAT,[y6]:J.CLAMP_TO_EDGE,[vW]:J.MIRRORED_REPEAT},XJ={[D9]:J.NEAREST,[hW]:J.NEAREST_MIPMAP_NEAREST,[c7]:J.NEAREST_MIPMAP_LINEAR,[Y8]:J.LINEAR,[v6]:J.LINEAR_MIPMAP_NEAREST,[h9]:J.LINEAR_MIPMAP_LINEAR},ZJ={[lW]:J.NEVER,[oW]:J.ALWAYS,[cW]:J.LESS,[m6]:J.LEQUAL,[nW]:J.EQUAL,[d6]:J.GEQUAL,[sW]:J.GREATER,[iW]:J.NOTEQUAL};function K0(N,q){if(q.type===e8&&Q.has("OES_texture_float_linear")===!1&&(q.magFilter===Y8||q.magFilter===v6||q.magFilter===c7||q.magFilter===h9||q.minFilter===Y8||q.minFilter===v6||q.minFilter===c7||q.minFilter===h9))o0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(N,J.TEXTURE_WRAP_S,w0[q.wrapS]),J.texParameteri(N,J.TEXTURE_WRAP_T,w0[q.wrapT]),N===J.TEXTURE_3D||N===J.TEXTURE_2D_ARRAY)J.texParameteri(N,J.TEXTURE_WRAP_R,w0[q.wrapR]);if(J.texParameteri(N,J.TEXTURE_MAG_FILTER,XJ[q.magFilter]),J.texParameteri(N,J.TEXTURE_MIN_FILTER,XJ[q.minFilter]),q.compareFunction)J.texParameteri(N,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(N,J.TEXTURE_COMPARE_FUNC,ZJ[q.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(q.magFilter===D9)return;if(q.minFilter!==c7&&q.minFilter!==h9)return;if(q.type===e8&&Q.has("OES_texture_float_linear")===!1)return;if(q.anisotropy>1||K.get(q).__currentAnisotropy){let I=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(N,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(q.anisotropy,W.getMaxAnisotropy())),K.get(q).__currentAnisotropy=q.anisotropy}}}function O0(N,q){let I=!1;if(N.__webglInit===void 0)N.__webglInit=!0,q.addEventListener("dispose",j);let v=q.source,l=R.get(v);if(l===void 0)l={},R.set(v,l);let U0=d(q);if(U0!==N.__cacheKey){if(l[U0]===void 0)l[U0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,I=!0;l[U0].usedTimes++;let G0=l[N.__cacheKey];if(G0!==void 0){if(l[N.__cacheKey].usedTimes--,G0.usedTimes===0)i(q)}N.__cacheKey=U0,N.__webglTexture=l[U0].texture}return I}function L0(N,q,I){return Math.floor(Math.floor(N/I)/q)}function M0(N,q,I,v){let U0=N.updateRanges;if(U0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,q.width,q.height,I,v,q.data);else{U0.sort((P0,V0)=>P0.start-V0.start);let G0=0;for(let P0=1;P0<U0.length;P0++){let V0=U0[G0],D0=U0[P0],g0=V0.start+V0.count,c0=L0(D0.start,q.width,4),WJ=L0(V0.start,q.width,4);if(D0.start<=g0+1&&c0===WJ&&L0(D0.start+D0.count-1,q.width,4)===c0)V0.count=Math.max(V0.count,D0.start+D0.count-V0.start);else++G0,U0[G0]=D0}U0.length=G0+1;let e=$.getParameter(J.UNPACK_ROW_LENGTH),Z0=$.getParameter(J.UNPACK_SKIP_PIXELS),k0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,q.width);for(let P0=0,V0=U0.length;P0<V0;P0++){let D0=U0[P0],g0=Math.floor(D0.start/4),c0=Math.ceil(D0.count/4),WJ=g0%q.width,b=Math.floor(g0/q.width),R0=c0,W0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,WJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,b),$.texSubImage2D(J.TEXTURE_2D,0,WJ,b,R0,1,I,v,q.data)}N.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,e),$.pixelStorei(J.UNPACK_SKIP_PIXELS,Z0),$.pixelStorei(J.UNPACK_SKIP_ROWS,k0)}}function X0(N,q,I){let v=J.TEXTURE_2D;if(q.isDataArrayTexture||q.isCompressedArrayTexture)v=J.TEXTURE_2D_ARRAY;if(q.isData3DTexture)v=J.TEXTURE_3D;let l=O0(N,q),U0=q.source;$.bindTexture(v,N.__webglTexture,J.TEXTURE0+I);let G0=K.get(U0);if(U0.version!==G0.__version||l===!0){if($.activeTexture(J.TEXTURE0+I),(typeof ImageBitmap<"u"&&q.image instanceof ImageBitmap)===!1){let W0=FJ.getPrimaries(FJ.workingColorSpace),B0=q.colorSpace===g9?null:FJ.getPrimaries(q.colorSpace),S0=q.colorSpace===g9||W0===B0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,q.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,S0)}$.pixelStorei(J.UNPACK_ALIGNMENT,q.unpackAlignment);let Z0=E(q.image,!1,W.maxTextureSize);Z0=b0(q,Z0);let k0=Z.convert(q.format,q.colorSpace),P0=Z.convert(q.type),V0=V(q.internalFormat,k0,P0,q.normalized,q.colorSpace,q.isVideoTexture);K0(v,q);let D0,g0=q.mipmaps,c0=q.isVideoTexture!==!0,WJ=G0.__version===void 0||l===!0,b=U0.dataReady,R0=C(q,Z0);if(q.isDepthTexture){if(V0=P(q.format===f9,q.type),WJ)if(c0)$.texStorage2D(J.TEXTURE_2D,1,V0,Z0.width,Z0.height);else $.texImage2D(J.TEXTURE_2D,0,V0,Z0.width,Z0.height,0,k0,P0,null)}else if(q.isDataTexture)if(g0.length>0){if(c0&&WJ)$.texStorage2D(J.TEXTURE_2D,R0,V0,g0[0].width,g0[0].height);for(let W0=0,B0=g0.length;W0<B0;W0++)if(D0=g0[W0],c0){if(b)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,D0.width,D0.height,k0,P0,D0.data)}else $.texImage2D(J.TEXTURE_2D,W0,V0,D0.width,D0.height,0,k0,P0,D0.data);q.generateMipmaps=!1}else if(c0){if(WJ)$.texStorage2D(J.TEXTURE_2D,R0,V0,Z0.width,Z0.height);if(b)M0(q,Z0,k0,P0)}else $.texImage2D(J.TEXTURE_2D,0,V0,Z0.width,Z0.height,0,k0,P0,Z0.data);else if(q.isCompressedTexture)if(q.isCompressedArrayTexture){if(c0&&WJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,R0,V0,g0[0].width,g0[0].height,Z0.depth);for(let W0=0,B0=g0.length;W0<B0;W0++)if(D0=g0[W0],q.format!==x8)if(k0!==null)if(c0){if(b)if(q.layerUpdates.size>0){let S0=GK(D0.width,D0.height,q.format,q.type);for(let H0 of q.layerUpdates){let z0=D0.data.subarray(H0*S0/D0.data.BYTES_PER_ELEMENT,(H0+1)*S0/D0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,H0,D0.width,D0.height,1,k0,z0)}q.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,0,D0.width,D0.height,Z0.depth,k0,D0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,W0,V0,D0.width,D0.height,Z0.depth,0,D0.data,0,0);else o0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(c0){if(b)$.texSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,0,D0.width,D0.height,Z0.depth,k0,P0,D0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,W0,V0,D0.width,D0.height,Z0.depth,0,k0,P0,D0.data)}else{if(c0&&WJ)$.texStorage2D(J.TEXTURE_2D,R0,V0,g0[0].width,g0[0].height);for(let W0=0,B0=g0.length;W0<B0;W0++)if(D0=g0[W0],q.format!==x8)if(k0!==null)if(c0){if(b)$.compressedTexSubImage2D(J.TEXTURE_2D,W0,0,0,D0.width,D0.height,k0,D0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,W0,V0,D0.width,D0.height,0,D0.data);else o0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(c0){if(b)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,D0.width,D0.height,k0,P0,D0.data)}else $.texImage2D(J.TEXTURE_2D,W0,V0,D0.width,D0.height,0,k0,P0,D0.data)}else if(q.isDataArrayTexture)if(c0){if(WJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,R0,V0,Z0.width,Z0.height,Z0.depth);if(b)if(q.layerUpdates.size>0){let W0=GK(Z0.width,Z0.height,q.format,q.type);for(let B0 of q.layerUpdates){let S0=Z0.data.subarray(B0*W0/Z0.data.BYTES_PER_ELEMENT,(B0+1)*W0/Z0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,B0,Z0.width,Z0.height,1,k0,P0,S0)}q.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,Z0.width,Z0.height,Z0.depth,k0,P0,Z0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,V0,Z0.width,Z0.height,Z0.depth,0,k0,P0,Z0.data);else if(q.isData3DTexture)if(c0){if(WJ)$.texStorage3D(J.TEXTURE_3D,R0,V0,Z0.width,Z0.height,Z0.depth);if(b)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,Z0.width,Z0.height,Z0.depth,k0,P0,Z0.data)}else $.texImage3D(J.TEXTURE_3D,0,V0,Z0.width,Z0.height,Z0.depth,0,k0,P0,Z0.data);else if(q.isFramebufferTexture){if(WJ)if(c0)$.texStorage2D(J.TEXTURE_2D,R0,V0,Z0.width,Z0.height);else{let{width:W0,height:B0}=Z0;for(let S0=0;S0<R0;S0++)$.texImage2D(J.TEXTURE_2D,S0,V0,W0,B0,0,k0,P0,null),W0>>=1,B0>>=1}}else if(q.isHTMLTexture){if("texElementImage2D"in J){let W0=J.canvas;if(!W0.hasAttribute("layoutsubtree"))W0.setAttribute("layoutsubtree","true");if(Z0.parentNode!==W0){W0.appendChild(Z0),O.add(q),W0.onpaint=(B0)=>{let S0=B0.changedElements;for(let H0 of O)if(S0.includes(H0.image))H0.needsUpdate=!0},W0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,Z0);else{let{RGBA:S0,RGBA:H0,UNSIGNED_BYTE:z0}=J;J.texElementImage2D(J.TEXTURE_2D,0,S0,H0,z0,Z0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(g0.length>0){if(c0&&WJ){let W0=l0(g0[0]);$.texStorage2D(J.TEXTURE_2D,R0,V0,W0.width,W0.height)}for(let W0=0,B0=g0.length;W0<B0;W0++)if(D0=g0[W0],c0){if(b)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,k0,P0,D0)}else $.texImage2D(J.TEXTURE_2D,W0,V0,k0,P0,D0);q.generateMipmaps=!1}else if(c0){if(WJ){let W0=l0(Z0);$.texStorage2D(J.TEXTURE_2D,R0,V0,W0.width,W0.height)}if(b)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k0,P0,Z0)}else $.texImage2D(J.TEXTURE_2D,0,V0,k0,P0,Z0);if(F(q))T(v);if(G0.__version=U0.version,q.onUpdate)q.onUpdate(q)}N.__version=q.version}function $0(N,q,I){if(q.image.length!==6)return;let v=O0(N,q),l=q.source;$.bindTexture(J.TEXTURE_CUBE_MAP,N.__webglTexture,J.TEXTURE0+I);let U0=K.get(l);if(l.version!==U0.__version||v===!0){$.activeTexture(J.TEXTURE0+I);let G0=FJ.getPrimaries(FJ.workingColorSpace),e=q.colorSpace===g9?null:FJ.getPrimaries(q.colorSpace),Z0=q.colorSpace===g9||G0===e?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,q.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,q.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z0);let k0=q.isCompressedTexture||q.image[0].isCompressedTexture,P0=q.image[0]&&q.image[0].isDataTexture,V0=[];for(let H0=0;H0<6;H0++){if(!k0&&!P0)V0[H0]=E(q.image[H0],!0,W.maxCubemapSize);else V0[H0]=P0?q.image[H0].image:q.image[H0];V0[H0]=b0(q,V0[H0])}let D0=V0[0],g0=Z.convert(q.format,q.colorSpace),c0=Z.convert(q.type),WJ=V(q.internalFormat,g0,c0,q.normalized,q.colorSpace),b=q.isVideoTexture!==!0,R0=U0.__version===void 0||v===!0,W0=l.dataReady,B0=C(q,D0);K0(J.TEXTURE_CUBE_MAP,q);let S0;if(k0){if(b&&R0)$.texStorage2D(J.TEXTURE_CUBE_MAP,B0,WJ,D0.width,D0.height);for(let H0=0;H0<6;H0++){S0=V0[H0].mipmaps;for(let z0=0;z0<S0.length;z0++){let $J=S0[z0];if(q.format!==x8)if(g0!==null)if(b){if(W0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,z0,0,0,$J.width,$J.height,g0,$J.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,z0,WJ,$J.width,$J.height,0,$J.data);else o0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(b){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,z0,0,0,$J.width,$J.height,g0,c0,$J.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,z0,WJ,$J.width,$J.height,0,g0,c0,$J.data)}}}else{if(S0=q.mipmaps,b&&R0){if(S0.length>0)B0++;let H0=l0(V0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,B0,WJ,H0.width,H0.height)}for(let H0=0;H0<6;H0++)if(P0){if(b){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,0,0,V0[H0].width,V0[H0].height,g0,c0,V0[H0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,WJ,V0[H0].width,V0[H0].height,0,g0,c0,V0[H0].data);for(let z0=0;z0<S0.length;z0++){let GJ=S0[z0].image[H0].image;if(b){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,z0+1,0,0,GJ.width,GJ.height,g0,c0,GJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,z0+1,WJ,GJ.width,GJ.height,0,g0,c0,GJ.data)}}else{if(b){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,0,0,g0,c0,V0[H0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,WJ,g0,c0,V0[H0]);for(let z0=0;z0<S0.length;z0++){let $J=S0[z0];if(b){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,z0+1,0,0,g0,c0,$J.image[H0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,z0+1,WJ,g0,c0,$J.image[H0])}}}if(F(q))T(J.TEXTURE_CUBE_MAP);if(U0.__version=l.version,q.onUpdate)q.onUpdate(q)}N.__version=q.version}function g(N,q,I,v,l,U0){let G0=Z.convert(I.format,I.colorSpace),e=Z.convert(I.type),Z0=V(I.internalFormat,G0,e,I.normalized,I.colorSpace),k0=K.get(q),P0=K.get(I);if(P0.__renderTarget=q,!k0.__hasExternalTextures){let V0=Math.max(1,q.width>>U0),D0=Math.max(1,q.height>>U0);if(l===J.TEXTURE_3D||l===J.TEXTURE_2D_ARRAY)$.texImage3D(l,U0,Z0,V0,D0,q.depth,0,G0,e,null);else $.texImage2D(l,U0,Z0,V0,D0,0,G0,e,null)}if($.bindFramebuffer(J.FRAMEBUFFER,N),y(q))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,v,l,P0.__webglTexture,0,s0(q));else if(l===J.TEXTURE_2D||l>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,v,l,P0.__webglTexture,U0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function o(N,q,I){if(J.bindRenderbuffer(J.RENDERBUFFER,N),q.depthBuffer){let v=q.depthTexture,l=v&&v.isDepthTexture?v.type:null,U0=P(q.stencilBuffer,l),G0=q.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(y(q))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,s0(q),U0,q.width,q.height);else if(I)J.renderbufferStorageMultisample(J.RENDERBUFFER,s0(q),U0,q.width,q.height);else J.renderbufferStorage(J.RENDERBUFFER,U0,q.width,q.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,G0,J.RENDERBUFFER,N)}else{let v=q.textures;for(let l=0;l<v.length;l++){let U0=v[l],G0=Z.convert(U0.format,U0.colorSpace),e=Z.convert(U0.type),Z0=V(U0.internalFormat,G0,e,U0.normalized,U0.colorSpace);if(y(q))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,s0(q),Z0,q.width,q.height);else if(I)J.renderbufferStorageMultisample(J.RENDERBUFFER,s0(q),Z0,q.width,q.height);else J.renderbufferStorage(J.RENDERBUFFER,Z0,q.width,q.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function f(N,q,I){let v=q.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,N),!(q.depthTexture&&q.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let l=K.get(q.depthTexture);if(l.__renderTarget=q,!l.__webglTexture||q.depthTexture.image.width!==q.width||q.depthTexture.image.height!==q.height)q.depthTexture.image.width=q.width,q.depthTexture.image.height=q.height,q.depthTexture.needsUpdate=!0;if(v){if(l.__webglInit===void 0)l.__webglInit=!0,q.depthTexture.addEventListener("dispose",j);if(l.__webglTexture===void 0){l.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,l.__webglTexture),K0(J.TEXTURE_CUBE_MAP,q.depthTexture);let k0=Z.convert(q.depthTexture.format),P0=Z.convert(q.depthTexture.type),V0;if(q.depthTexture.format===b9)V0=J.DEPTH_COMPONENT24;else if(q.depthTexture.format===f9)V0=J.DEPTH24_STENCIL8;for(let D0=0;D0<6;D0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,0,V0,q.width,q.height,0,k0,P0,null)}}else Y0(q.depthTexture,0);let U0=l.__webglTexture,G0=s0(q),e=v?J.TEXTURE_CUBE_MAP_POSITIVE_X+I:J.TEXTURE_2D,Z0=q.depthTexture.format===f9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(q.depthTexture.format===b9)if(y(q))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Z0,e,U0,0,G0);else J.framebufferTexture2D(J.FRAMEBUFFER,Z0,e,U0,0);else if(q.depthTexture.format===f9)if(y(q))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Z0,e,U0,0,G0);else J.framebufferTexture2D(J.FRAMEBUFFER,Z0,e,U0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _(N){let q=K.get(N),I=N.isWebGLCubeRenderTarget===!0;if(q.__boundDepthTexture!==N.depthTexture){let v=N.depthTexture;if(q.__depthDisposeCallback)q.__depthDisposeCallback();if(v){let l=()=>{delete q.__boundDepthTexture,delete q.__depthDisposeCallback,v.removeEventListener("dispose",l)};v.addEventListener("dispose",l),q.__depthDisposeCallback=l}q.__boundDepthTexture=v}if(N.depthTexture&&!q.__autoAllocateDepthBuffer)if(I)for(let v=0;v<6;v++)f(q.__webglFramebuffer[v],N,v);else{let v=N.texture.mipmaps;if(v&&v.length>0)f(q.__webglFramebuffer[0],N,0);else f(q.__webglFramebuffer,N,0)}else if(I){q.__webglDepthbuffer=[];for(let v=0;v<6;v++)if($.bindFramebuffer(J.FRAMEBUFFER,q.__webglFramebuffer[v]),q.__webglDepthbuffer[v]===void 0)q.__webglDepthbuffer[v]=J.createRenderbuffer(),o(q.__webglDepthbuffer[v],N,!1);else{let l=N.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=q.__webglDepthbuffer[v];J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,l,J.RENDERBUFFER,U0)}}else{let v=N.texture.mipmaps;if(v&&v.length>0)$.bindFramebuffer(J.FRAMEBUFFER,q.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,q.__webglFramebuffer);if(q.__webglDepthbuffer===void 0)q.__webglDepthbuffer=J.createRenderbuffer(),o(q.__webglDepthbuffer,N,!1);else{let l=N.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=q.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,l,J.RENDERBUFFER,U0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function h(N,q,I){let v=K.get(N);if(q!==void 0)g(v.__webglFramebuffer,N,N.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(I!==void 0)_(N)}function r(N){let q=N.texture,I=K.get(N),v=K.get(q);N.addEventListener("dispose",k);let l=N.textures,U0=N.isWebGLCubeRenderTarget===!0,G0=l.length>1;if(!G0){if(v.__webglTexture===void 0)v.__webglTexture=J.createTexture();v.__version=q.version,X.memory.textures++}if(U0){I.__webglFramebuffer=[];for(let e=0;e<6;e++)if(q.mipmaps&&q.mipmaps.length>0){I.__webglFramebuffer[e]=[];for(let Z0=0;Z0<q.mipmaps.length;Z0++)I.__webglFramebuffer[e][Z0]=J.createFramebuffer()}else I.__webglFramebuffer[e]=J.createFramebuffer()}else{if(q.mipmaps&&q.mipmaps.length>0){I.__webglFramebuffer=[];for(let e=0;e<q.mipmaps.length;e++)I.__webglFramebuffer[e]=J.createFramebuffer()}else I.__webglFramebuffer=J.createFramebuffer();if(G0)for(let e=0,Z0=l.length;e<Z0;e++){let k0=K.get(l[e]);if(k0.__webglTexture===void 0)k0.__webglTexture=J.createTexture(),X.memory.textures++}if(N.samples>0&&y(N)===!1){I.__webglMultisampledFramebuffer=J.createFramebuffer(),I.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let e=0;e<l.length;e++){let Z0=l[e];I.__webglColorRenderbuffer[e]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,I.__webglColorRenderbuffer[e]);let k0=Z.convert(Z0.format,Z0.colorSpace),P0=Z.convert(Z0.type),V0=V(Z0.internalFormat,k0,P0,Z0.normalized,Z0.colorSpace,N.isXRRenderTarget===!0),D0=s0(N);J.renderbufferStorageMultisample(J.RENDERBUFFER,D0,V0,N.width,N.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+e,J.RENDERBUFFER,I.__webglColorRenderbuffer[e])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),N.depthBuffer)I.__webglDepthRenderbuffer=J.createRenderbuffer(),o(I.__webglDepthRenderbuffer,N,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(U0){$.bindTexture(J.TEXTURE_CUBE_MAP,v.__webglTexture),K0(J.TEXTURE_CUBE_MAP,q);for(let e=0;e<6;e++)if(q.mipmaps&&q.mipmaps.length>0)for(let Z0=0;Z0<q.mipmaps.length;Z0++)g(I.__webglFramebuffer[e][Z0],N,q,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+e,Z0);else g(I.__webglFramebuffer[e],N,q,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0);if(F(q))T(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(G0){for(let e=0,Z0=l.length;e<Z0;e++){let k0=l[e],P0=K.get(k0),V0=J.TEXTURE_2D;if(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)V0=N.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(V0,P0.__webglTexture),K0(V0,k0),g(I.__webglFramebuffer,N,k0,J.COLOR_ATTACHMENT0+e,V0,0),F(k0))T(V0)}$.unbindTexture()}else{let e=J.TEXTURE_2D;if(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)e=N.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(e,v.__webglTexture),K0(e,q),q.mipmaps&&q.mipmaps.length>0)for(let Z0=0;Z0<q.mipmaps.length;Z0++)g(I.__webglFramebuffer[Z0],N,q,J.COLOR_ATTACHMENT0,e,Z0);else g(I.__webglFramebuffer,N,q,J.COLOR_ATTACHMENT0,e,0);if(F(q))T(e);$.unbindTexture()}if(N.depthBuffer)_(N)}function m(N){let q=N.textures;for(let I=0,v=q.length;I<v;I++){let l=q[I];if(F(l)){let U0=A(N),G0=K.get(l).__webglTexture;$.bindTexture(U0,G0),T(U0),$.unbindTexture()}}}let w=[],p0=[];function m0(N){if(N.samples>0){if(y(N)===!1){let{textures:q,width:I,height:v}=N,l=J.COLOR_BUFFER_BIT,U0=N.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=K.get(N),e=q.length>1;if(e)for(let k0=0;k0<q.length;k0++)$.bindFramebuffer(J.FRAMEBUFFER,G0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,G0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,G0.__webglMultisampledFramebuffer);let Z0=N.texture.mipmaps;if(Z0&&Z0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,G0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,G0.__webglFramebuffer);for(let k0=0;k0<q.length;k0++){if(N.resolveDepthBuffer){if(N.depthBuffer)l|=J.DEPTH_BUFFER_BIT;if(N.stencilBuffer&&N.resolveStencilBuffer)l|=J.STENCIL_BUFFER_BIT}if(e){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,G0.__webglColorRenderbuffer[k0]);let P0=K.get(q[k0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,P0,0)}if(J.blitFramebuffer(0,0,I,v,0,0,I,v,l,J.NEAREST),H===!0){if(w.length=0,p0.length=0,w.push(J.COLOR_ATTACHMENT0+k0),N.depthBuffer&&N.resolveDepthBuffer===!1)w.push(U0),p0.push(U0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,p0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,w)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),e)for(let k0=0;k0<q.length;k0++){$.bindFramebuffer(J.FRAMEBUFFER,G0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.RENDERBUFFER,G0.__webglColorRenderbuffer[k0]);let P0=K.get(q[k0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,G0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.TEXTURE_2D,P0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,G0.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&H){let q=N.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[q])}}}function s0(N){return Math.min(W.maxSamples,N.samples)}function y(N){let q=K.get(N);return N.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&q.__useRenderToTexture!==!1}function JJ(N){let q=X.render.frame;if(D.get(N)!==q)D.set(N,q),N.update()}function b0(N,q){let{colorSpace:I,format:v,type:l}=N;if(N.isCompressedTexture===!0||N.isVideoTexture===!0)return q;if(I!==h$&&I!==g9)if(FJ.getTransfer(I)===LJ){if(v!==x8||l!==j8)o0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else a0("WebGLTextures: Unsupported texture color space:",I);return q}function l0(N){if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement)U.width=N.naturalWidth||N.width,U.height=N.naturalHeight||N.height;else if(typeof VideoFrame<"u"&&N instanceof VideoFrame)U.width=N.displayWidth,U.height=N.displayHeight;else U.width=N.width,U.height=N.height;return U}this.allocateTextureUnit=Q0,this.resetTextureUnits=J0,this.getTextureUnits=u,this.setTextureUnits=t,this.setTexture2D=Y0,this.setTexture2DArray=N0,this.setTexture3D=E0,this.setTextureCube=v0,this.rebindTextures=h,this.setupRenderTarget=r,this.updateRenderTargetMipmap=m,this.updateMultisampleRenderTarget=m0,this.setupDepthRenderbuffer=_,this.setupFrameBufferTexture=g,this.useMultisampledRTT=y,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function aq(J,Q){function $(K,W=g9){let Z,X=FJ.getTransfer(W);if(K===j8)return J.UNSIGNED_BYTE;if(K===eQ)return J.UNSIGNED_SHORT_4_4_4_4;if(K===J$)return J.UNSIGNED_SHORT_5_5_5_1;if(K===xW)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===gW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===bW)return J.BYTE;if(K===fW)return J.SHORT;if(K===n7)return J.UNSIGNED_SHORT;if(K===tQ)return J.INT;if(K===E9)return J.UNSIGNED_INT;if(K===e8)return J.FLOAT;if(K===J9)return J.HALF_FLOAT;if(K===pW)return J.ALPHA;if(K===mW)return J.RGB;if(K===x8)return J.RGBA;if(K===b9)return J.DEPTH_COMPONENT;if(K===f9)return J.DEPTH_STENCIL;if(K===dW)return J.RED;if(K===Q$)return J.RED_INTEGER;if(K===x9)return J.RG;if(K===$$)return J.RG_INTEGER;if(K===K$)return J.RGBA_INTEGER;if(K===h6||K===b6||K===f6||K===x6)if(X===LJ)if(Z=Q.get("WEBGL_compressed_texture_s3tc_srgb"),Z!==null){if(K===h6)return Z.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===b6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===f6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===x6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Z=Q.get("WEBGL_compressed_texture_s3tc"),Z!==null){if(K===h6)return Z.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===b6)return Z.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===f6)return Z.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===x6)return Z.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===W$||K===Z$||K===X$||K===Y$)if(Z=Q.get("WEBGL_compressed_texture_pvrtc"),Z!==null){if(K===W$)return Z.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===Z$)return Z.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===X$)return Z.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===Y$)return Z.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===H$||K===U$||K===q$||K===N$||K===G$||K===g6||K===F$)if(Z=Q.get("WEBGL_compressed_texture_etc"),Z!==null){if(K===H$||K===U$)return X===LJ?Z.COMPRESSED_SRGB8_ETC2:Z.COMPRESSED_RGB8_ETC2;if(K===q$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Z.COMPRESSED_RGBA8_ETC2_EAC;if(K===N$)return Z.COMPRESSED_R11_EAC;if(K===G$)return Z.COMPRESSED_SIGNED_R11_EAC;if(K===g6)return Z.COMPRESSED_RG11_EAC;if(K===F$)return Z.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===O$||K===D$||K===E$||K===R$||K===k$||K===M$||K===V$||K===B$||K===L$||K===z$||K===I$||K===P$||K===A$||K===_$)if(Z=Q.get("WEBGL_compressed_texture_astc"),Z!==null){if(K===O$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Z.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===D$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Z.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===E$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Z.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===R$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Z.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===k$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Z.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===M$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Z.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===V$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Z.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===B$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Z.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===L$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Z.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===z$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Z.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===I$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Z.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===P$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Z.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===A$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Z.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===_$)return X===LJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Z.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===w$||K===C$||K===T$)if(Z=Q.get("EXT_texture_compression_bptc"),Z!==null){if(K===w$)return X===LJ?Z.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Z.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===C$)return Z.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===T$)return Z.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===S$||K===j$||K===p6||K===y$)if(Z=Q.get("EXT_texture_compression_rgtc"),Z!==null){if(K===S$)return Z.COMPRESSED_RED_RGTC1_EXT;if(K===j$)return Z.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===p6)return Z.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===y$)return Z.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===R7)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:$}}var rq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tq=`
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

}`;class pZ{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new o6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new H8({vertexShader:rq,fragmentShader:tq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new F0(new y8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mZ extends p8{constructor(J,Q){super();let $=this,K=null,W=1,Z=null,X="local-floor",Y=1,H=null,U=null,D=null,O=null,G=null,R=null,M=typeof XRWebGLBinding<"u",z=new pZ,E={},F=Q.getContextAttributes(),T=null,A=null,V=[],P=[],C=new i0,j=null,k=new uJ;k.viewport=new wJ;let L=new uJ;L.viewport=new wJ;let i=[k,L],S=new HK,n=null,J0=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K0){let O0=V[K0];if(O0===void 0)O0=new i7,V[K0]=O0;return O0.getTargetRaySpace()},this.getControllerGrip=function(K0){let O0=V[K0];if(O0===void 0)O0=new i7,V[K0]=O0;return O0.getGripSpace()},this.getHand=function(K0){let O0=V[K0];if(O0===void 0)O0=new i7,V[K0]=O0;return O0.getHandSpace()};function u(K0){let O0=P.indexOf(K0.inputSource);if(O0===-1)return;let L0=V[O0];if(L0!==void 0)L0.update(K0.inputSource,K0.frame,H||Z),L0.dispatchEvent({type:K0.type,data:K0.inputSource})}function t(){K.removeEventListener("select",u),K.removeEventListener("selectstart",u),K.removeEventListener("selectend",u),K.removeEventListener("squeeze",u),K.removeEventListener("squeezestart",u),K.removeEventListener("squeezeend",u),K.removeEventListener("end",t),K.removeEventListener("inputsourceschange",Q0);for(let K0=0;K0<V.length;K0++){let O0=P[K0];if(O0===null)continue;P[K0]=null,V[K0].disconnect(O0)}n=null,J0=null,z.reset();for(let K0 in E)delete E[K0];J.setRenderTarget(T),G=null,O=null,D=null,K=null,A=null,ZJ.stop(),$.isPresenting=!1,J.setPixelRatio(j),J.setSize(C.width,C.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K0){if(W=K0,$.isPresenting===!0)o0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K0){if(X=K0,$.isPresenting===!0)o0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||Z},this.setReferenceSpace=function(K0){H=K0},this.getBaseLayer=function(){return O!==null?O:G},this.getBinding=function(){if(D===null&&M)D=new XRWebGLBinding(K,Q);return D},this.getFrame=function(){return R},this.getSession=function(){return K},this.setSession=async function(K0){if(K=K0,K!==null){if(T=J.getRenderTarget(),K.addEventListener("select",u),K.addEventListener("selectstart",u),K.addEventListener("selectend",u),K.addEventListener("squeeze",u),K.addEventListener("squeezestart",u),K.addEventListener("squeezeend",u),K.addEventListener("end",t),K.addEventListener("inputsourceschange",Q0),F.xrCompatible!==!0)await Q.makeXRCompatible();if(j=J.getPixelRatio(),J.getSize(C),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let L0={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:W};G=new XRWebGLLayer(K,Q,L0),K.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),A=new z8(G.framebufferWidth,G.framebufferHeight,{format:x8,type:j8,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1})}else{let L0=null,M0=null,X0=null;if(F.depth)X0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,L0=F.stencil?f9:b9,M0=F.stencil?R7:E9;let $0={colorFormat:Q.RGBA8,depthFormat:X0,scaleFactor:W};D=this.getBinding(),O=D.createProjectionLayer($0),K.updateRenderState({layers:[O]}),J.setPixelRatio(1),J.setSize(O.textureWidth,O.textureHeight,!1),A=new z8(O.textureWidth,O.textureHeight,{format:x8,type:j8,depthTexture:new M9(O.textureWidth,O.textureHeight,M0,void 0,void 0,void 0,void 0,void 0,void 0,L0),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:O.ignoreDepthValues===!1,resolveStencilBuffer:O.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(Y),H=null,Z=await K.requestReferenceSpace(X),ZJ.setContext(K),ZJ.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return z.getDepthTexture()};function Q0(K0){for(let O0=0;O0<K0.removed.length;O0++){let L0=K0.removed[O0],M0=P.indexOf(L0);if(M0>=0)P[M0]=null,V[M0].disconnect(L0)}for(let O0=0;O0<K0.added.length;O0++){let L0=K0.added[O0],M0=P.indexOf(L0);if(M0===-1){for(let $0=0;$0<V.length;$0++)if($0>=P.length){P.push(L0),M0=$0;break}else if(P[$0]===null){P[$0]=L0,M0=$0;break}if(M0===-1)break}let X0=V[M0];if(X0)X0.connect(L0)}}let d=new x,Y0=new x;function N0(K0,O0,L0){d.setFromMatrixPosition(O0.matrixWorld),Y0.setFromMatrixPosition(L0.matrixWorld);let M0=d.distanceTo(Y0),X0=O0.projectionMatrix.elements,$0=L0.projectionMatrix.elements,g=X0[14]/(X0[10]-1),o=X0[14]/(X0[10]+1),f=(X0[9]+1)/X0[5],_=(X0[9]-1)/X0[5],h=(X0[8]-1)/X0[0],r=($0[8]+1)/$0[0],m=g*h,w=g*r,p0=M0/(-h+r),m0=p0*-h;if(O0.matrixWorld.decompose(K0.position,K0.quaternion,K0.scale),K0.translateX(m0),K0.translateZ(p0),K0.matrixWorld.compose(K0.position,K0.quaternion,K0.scale),K0.matrixWorldInverse.copy(K0.matrixWorld).invert(),X0[10]===-1)K0.projectionMatrix.copy(O0.projectionMatrix),K0.projectionMatrixInverse.copy(O0.projectionMatrixInverse);else{let s0=g+p0,y=o+p0,JJ=m-m0,b0=w+(M0-m0),l0=f*o/y*s0,N=_*o/y*s0;K0.projectionMatrix.makePerspective(JJ,b0,l0,N,s0,y),K0.projectionMatrixInverse.copy(K0.projectionMatrix).invert()}}function E0(K0,O0){if(O0===null)K0.matrixWorld.copy(K0.matrix);else K0.matrixWorld.multiplyMatrices(O0.matrixWorld,K0.matrix);K0.matrixWorldInverse.copy(K0.matrixWorld).invert()}this.updateCamera=function(K0){if(K===null)return;let{near:O0,far:L0}=K0;if(z.texture!==null){if(z.depthNear>0)O0=z.depthNear;if(z.depthFar>0)L0=z.depthFar}if(S.near=L.near=k.near=O0,S.far=L.far=k.far=L0,n!==S.near||J0!==S.far)K.updateRenderState({depthNear:S.near,depthFar:S.far}),n=S.near,J0=S.far;S.layers.mask=K0.layers.mask|6,k.layers.mask=S.layers.mask&-5,L.layers.mask=S.layers.mask&-3;let M0=K0.parent,X0=S.cameras;E0(S,M0);for(let $0=0;$0<X0.length;$0++)E0(X0[$0],M0);if(X0.length===2)N0(S,k,L);else S.projectionMatrix.copy(k.projectionMatrix);v0(K0,S,M0)};function v0(K0,O0,L0){if(L0===null)K0.matrix.copy(O0.matrixWorld);else K0.matrix.copy(L0.matrixWorld),K0.matrix.invert(),K0.matrix.multiply(O0.matrixWorld);if(K0.matrix.decompose(K0.position,K0.quaternion,K0.scale),K0.updateMatrixWorld(!0),K0.projectionMatrix.copy(O0.projectionMatrix),K0.projectionMatrixInverse.copy(O0.projectionMatrixInverse),K0.isPerspectiveCamera)K0.fov=j9*2*Math.atan(1/K0.projectionMatrix.elements[5]),K0.zoom=1}this.getCamera=function(){return S},this.getFoveation=function(){if(O===null&&G===null)return;return Y},this.setFoveation=function(K0){if(Y=K0,O!==null)O.fixedFoveation=K0;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=K0},this.hasDepthSensing=function(){return z.texture!==null},this.getDepthSensingMesh=function(){return z.getMesh(S)},this.getCameraTexture=function(K0){return E[K0]};let w0=null;function XJ(K0,O0){if(U=O0.getViewerPose(H||Z),R=O0,U!==null){let L0=U.views;if(G!==null)J.setRenderTargetFramebuffer(A,G.framebuffer),J.setRenderTarget(A);let M0=!1;if(L0.length!==S.cameras.length)S.cameras.length=0,M0=!0;for(let o=0;o<L0.length;o++){let f=L0[o],_=null;if(G!==null)_=G.getViewport(f);else{let r=D.getViewSubImage(O,f);if(_=r.viewport,o===0)J.setRenderTargetTextures(A,r.colorTexture,r.depthStencilTexture),J.setRenderTarget(A)}let h=i[o];if(h===void 0)h=new uJ,h.layers.enable(o),h.viewport=new wJ,i[o]=h;if(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.projectionMatrix.fromArray(f.projectionMatrix),h.projectionMatrixInverse.copy(h.projectionMatrix).invert(),h.viewport.set(_.x,_.y,_.width,_.height),o===0)S.matrix.copy(h.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale);if(M0===!0)S.cameras.push(h)}let X0=K.enabledFeatures;if(X0&&X0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&M){D=$.getBinding();let o=D.getDepthInformation(L0[0]);if(o&&o.isValid&&o.texture)z.init(o,K.renderState)}if(X0&&X0.includes("camera-access")&&M){J.state.unbindTexture(),D=$.getBinding();for(let o=0;o<L0.length;o++){let f=L0[o].camera;if(f){let _=E[f];if(!_)_=new o6,E[f]=_;let h=D.getCameraImage(f);_.sourceTexture=h}}}}for(let L0=0;L0<V.length;L0++){let M0=P[L0],X0=V[L0];if(M0!==null&&X0!==void 0)X0.update(M0,O0,H||Z)}if(w0)w0(K0,O0);if(O0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:O0});R=null}let ZJ=new CZ;ZJ.setAnimationLoop(XJ),this.setAnimationLoop=function(K0){w0=K0},this.dispose=function(){}}}var eq=new IJ,dZ=new KJ;dZ.set(-1,0,0,0,1,0,0,0,1);function JN(J,Q){function $(E,F){if(E.matrixAutoUpdate===!0)E.updateMatrix();F.value.copy(E.matrix)}function K(E,F){if(F.color.getRGB(E.fogColor.value,s$(J)),F.isFog)E.fogNear.value=F.near,E.fogFar.value=F.far;else if(F.isFogExp2)E.fogDensity.value=F.density}function W(E,F,T,A,V){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)Z(E,F);else if(F.isMeshLambertMaterial){if(Z(E,F),F.envMap)E.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)Z(E,F),O(E,F);else if(F.isMeshPhongMaterial){if(Z(E,F),D(E,F),F.envMap)E.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(Z(E,F),G(E,F),F.isMeshPhysicalMaterial)R(E,F,V)}else if(F.isMeshMatcapMaterial)Z(E,F),M(E,F);else if(F.isMeshDepthMaterial)Z(E,F);else if(F.isMeshDistanceMaterial)Z(E,F),z(E,F);else if(F.isMeshNormalMaterial)Z(E,F);else if(F.isLineBasicMaterial){if(X(E,F),F.isLineDashedMaterial)Y(E,F)}else if(F.isPointsMaterial)H(E,F,T,A);else if(F.isSpriteMaterial)U(E,F);else if(F.isShadowMaterial)E.color.value.copy(F.color),E.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function Z(E,F){if(E.opacity.value=F.opacity,F.color)E.diffuse.value.copy(F.color);if(F.emissive)E.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)E.map.value=F.map,$(F.map,E.mapTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,$(F.alphaMap,E.alphaMapTransform);if(F.bumpMap){if(E.bumpMap.value=F.bumpMap,$(F.bumpMap,E.bumpMapTransform),E.bumpScale.value=F.bumpScale,F.side===iJ)E.bumpScale.value*=-1}if(F.normalMap){if(E.normalMap.value=F.normalMap,$(F.normalMap,E.normalMapTransform),E.normalScale.value.copy(F.normalScale),F.side===iJ)E.normalScale.value.negate()}if(F.displacementMap)E.displacementMap.value=F.displacementMap,$(F.displacementMap,E.displacementMapTransform),E.displacementScale.value=F.displacementScale,E.displacementBias.value=F.displacementBias;if(F.emissiveMap)E.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,E.emissiveMapTransform);if(F.specularMap)E.specularMap.value=F.specularMap,$(F.specularMap,E.specularMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest;let T=Q.get(F),A=T.envMap,V=T.envMapRotation;if(A){if(E.envMap.value=A,E.envMapRotation.value.setFromMatrix4(eq.makeRotationFromEuler(V)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(dZ);E.reflectivity.value=F.reflectivity,E.ior.value=F.ior,E.refractionRatio.value=F.refractionRatio}if(F.lightMap)E.lightMap.value=F.lightMap,E.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,E.lightMapTransform);if(F.aoMap)E.aoMap.value=F.aoMap,E.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,E.aoMapTransform)}function X(E,F){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,F.map)E.map.value=F.map,$(F.map,E.mapTransform)}function Y(E,F){E.dashSize.value=F.dashSize,E.totalSize.value=F.dashSize+F.gapSize,E.scale.value=F.scale}function H(E,F,T,A){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,E.size.value=F.size*T,E.scale.value=A*0.5,F.map)E.map.value=F.map,$(F.map,E.uvTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,$(F.alphaMap,E.alphaMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest}function U(E,F){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,E.rotation.value=F.rotation,F.map)E.map.value=F.map,$(F.map,E.mapTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,$(F.alphaMap,E.alphaMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest}function D(E,F){E.specular.value.copy(F.specular),E.shininess.value=Math.max(F.shininess,0.0001)}function O(E,F){if(F.gradientMap)E.gradientMap.value=F.gradientMap}function G(E,F){if(E.metalness.value=F.metalness,F.metalnessMap)E.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=F.roughness,F.roughnessMap)E.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,E.roughnessMapTransform);if(F.envMap)E.envMapIntensity.value=F.envMapIntensity}function R(E,F,T){if(E.ior.value=F.ior,F.sheen>0){if(E.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),E.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)E.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,E.sheenColorMapTransform);if(F.sheenRoughnessMap)E.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(E.clearcoat.value=F.clearcoat,E.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)E.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,E.clearcoatMapTransform);if(F.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(E.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===iJ)E.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)E.dispersion.value=F.dispersion;if(F.iridescence>0){if(E.iridescence.value=F.iridescence,E.iridescenceIOR.value=F.iridescenceIOR,E.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)E.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,E.iridescenceMapTransform);if(F.iridescenceThicknessMap)E.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(F.transmission>0){if(E.transmission.value=F.transmission,E.transmissionSamplerMap.value=T.texture,E.transmissionSamplerSize.value.set(T.width,T.height),F.transmissionMap)E.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=F.thickness,F.thicknessMap)E.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=F.attenuationDistance,E.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(E.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)E.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=F.specularIntensity,E.specularColor.value.copy(F.specularColor),F.specularColorMap)E.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,E.specularColorMapTransform);if(F.specularIntensityMap)E.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,E.specularIntensityMapTransform)}function M(E,F){if(F.matcap)E.matcap.value=F.matcap}function z(E,F){let T=Q.get(F).light;E.referencePosition.value.setFromMatrixPosition(T.matrixWorld),E.nearDistance.value=T.shadow.camera.near,E.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:W}}function QN(J,Q,$,K){let W={},Z={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,P){let C=P.program;K.uniformBlockBinding(V,C)}function U(V,P){let C=W[V.id];if(C===void 0)E(V),C=D(V),W[V.id]=C,V.addEventListener("dispose",T);let j=P.program;K.updateUBOMapping(V,j);let k=Q.render.frame;if(Z[V.id]!==k)G(V),Z[V.id]=k}function D(V){let P=O();V.__bindingPointIndex=P;let C=J.createBuffer(),j=V.__size,k=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,C),J.bufferData(J.UNIFORM_BUFFER,j,k),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,P,C),C}function O(){for(let V=0;V<Y;V++)if(X.indexOf(V)===-1)return X.push(V),V;return a0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(V){let P=W[V.id],C=V.uniforms,j=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,P);for(let k=0,L=C.length;k<L;k++){let i=C[k];if(Array.isArray(i))for(let S=0,n=i.length;S<n;S++)R(i[S],k,S,j);else R(i,k,0,j)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function R(V,P,C,j){if(z(V,P,C,j)===!0){let{__offset:k,value:L}=V;if(Array.isArray(L)){let i=0;for(let S=0;S<L.length;S++){let n=L[S],J0=F(n);if(M(n,V.__data,i),typeof n!=="number"&&typeof n!=="boolean"&&!n.isMatrix3&&!ArrayBuffer.isView(n))i+=J0.storage/Float32Array.BYTES_PER_ELEMENT}}else M(L,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,k,V.__data)}}function M(V,P,C){if(typeof V==="number"||typeof V==="boolean")P[0]=V;else if(V.isMatrix3)P[0]=V.elements[0],P[1]=V.elements[1],P[2]=V.elements[2],P[3]=0,P[4]=V.elements[3],P[5]=V.elements[4],P[6]=V.elements[5],P[7]=0,P[8]=V.elements[6],P[9]=V.elements[7],P[10]=V.elements[8],P[11]=0;else if(ArrayBuffer.isView(V))P.set(new V.constructor(V.buffer,V.byteOffset,P.length));else V.toArray(P,C)}function z(V,P,C,j){let k=V.value,L=P+"_"+C;if(j[L]===void 0){if(typeof k==="number"||typeof k==="boolean")j[L]=k;else if(ArrayBuffer.isView(k))j[L]=k.slice();else j[L]=k.clone();return!0}else{let i=j[L];if(typeof k==="number"||typeof k==="boolean"){if(i!==k)return j[L]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(i.equals(k)===!1)return i.copy(k),!0}return!1}function E(V){let P=V.uniforms,C=0,j=16;for(let L=0,i=P.length;L<i;L++){let S=Array.isArray(P[L])?P[L]:[P[L]];for(let n=0,J0=S.length;n<J0;n++){let u=S[n],t=Array.isArray(u.value)?u.value:[u.value];for(let Q0=0,d=t.length;Q0<d;Q0++){let Y0=t[Q0],N0=F(Y0),E0=C%j,v0=E0%N0.boundary,w0=E0+v0;if(C+=v0,w0!==0&&j-w0<N0.storage)C+=j-w0;u.__data=new Float32Array(N0.storage/Float32Array.BYTES_PER_ELEMENT),u.__offset=C,C+=N0.storage}}}let k=C%j;if(k>0)C+=j-k;return V.__size=C,V.__cache={},this}function F(V){let P={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")P.boundary=4,P.storage=4;else if(V.isVector2)P.boundary=8,P.storage=8;else if(V.isVector3||V.isColor)P.boundary=16,P.storage=12;else if(V.isVector4)P.boundary=16,P.storage=16;else if(V.isMatrix3)P.boundary=48,P.storage=48;else if(V.isMatrix4)P.boundary=64,P.storage=64;else if(V.isTexture)o0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))P.boundary=16,P.storage=V.byteLength;else o0("WebGLRenderer: Unsupported uniform value type.",V);return P}function T(V){let P=V.target;P.removeEventListener("dispose",T);let C=X.indexOf(P.__bindingPointIndex);X.splice(C,1),J.deleteBuffer(W[P.id]),delete W[P.id],delete Z[P.id]}function A(){for(let V in W)J.deleteBuffer(W[V]);X=[],W={},Z={}}return{bind:H,update:U,dispose:A}}var $N=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),u8=null;function KN(){if(u8===null)u8=new c$($N,16,16,x9,J9),u8.name="DFG_LUT",u8.minFilter=Y8,u8.magFilter=Y8,u8.wrapS=y6,u8.wrapT=y6,u8.generateMipmaps=!1,u8.needsUpdate=!0;return u8}class zK{constructor(J={}){let{canvas:Q=aW(),context:$=null,depth:K=!0,stencil:W=!1,alpha:Z=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:D=!1,reversedDepthBuffer:O=!1,outputBufferType:G=j8}=J;this.isWebGLRenderer=!0;let R;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=$.getContextAttributes().alpha}else R=Z;let M=G,z=new Set([K$,$$,Q$]),E=new Set([j8,E9,n7,R7,eQ,J$]),F=new Uint32Array(4),T=new Int32Array(4),A=new x,V=null,P=null,C=[],j=[],k=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=S8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,i=!1,S=null,n=null,J0=null,u=null;this._outputColorSpace=g8;let t=0,Q0=0,d=null,Y0=-1,N0=null,E0=new wJ,v0=new wJ,w0=null,XJ=new QJ(0),ZJ=0,K0=Q.width,O0=Q.height,L0=1,M0=null,X0=null,$0=new wJ(0,0,K0,O0),g=new wJ(0,0,K0,O0),o=!1,f=new a7,_=!1,h=!1,r=new IJ,m=new x,w=new wJ,p0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},m0=!1;function s0(){return d===null?L0:1}let y=$;function JJ(B,p){return Q.getContext(B,p)}try{let B={alpha:!0,depth:K,stencil:W,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:D};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${JW}`);if(Q.addEventListener("webglcontextlost",$J,!1),Q.addEventListener("webglcontextrestored",GJ,!1),Q.addEventListener("webglcontextcreationerror",kJ,!1),y===null){if(y=JJ("webgl2",B),y===null)if(JJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(B){throw a0("WebGLRenderer: "+B.message),B}let b0,l0,N,q,I,v,l,U0,G0,e,Z0,k0,P0,V0,D0,g0,c0,WJ,b,R0,W0,B0,S0;function H0(){if(b0=new qU(y),b0.init(),W0=new aq(y,b0),l0=new $U(y,b0,J,W0),N=new iq(y,b0),l0.reversedDepthBuffer&&O)N.buffers.depth.setReversed(!0);n=y.createFramebuffer(),J0=y.createFramebuffer(),u=y.createFramebuffer(),q=new FU(y),I=new vq,v=new oq(y,b0,N,I,l0,W0,q),l=new UU(L),U0=new RY(y),B0=new JU(y,U0),G0=new NU(y,U0,q,B0),e=new DU(y,G0,U0,B0,q),WJ=new OU(y,l0,v),D0=new KU(I),Z0=new yq(L,l,b0,l0,B0,D0),k0=new JN(L,I),P0=new bq,V0=new dq(b0),c0=new e5(L,l,N,e,R,Y),g0=new sq(L,e,l0),S0=new QN(y,q,l0,N),b=new QU(y,b0,q),R0=new GU(y,b0,q),q.programs=Z0.programs,L.capabilities=l0,L.extensions=b0,L.properties=I,L.renderLists=P0,L.shadowMap=g0,L.state=N,L.info=q}if(H0(),M!==j8)k=new RU(M,Q.width,Q.height,X,K,W);let z0=new mZ(L,y);this.xr=z0,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let B=b0.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=b0.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return L0},this.setPixelRatio=function(B){if(B===void 0)return;L0=B,this.setSize(K0,O0,!1)},this.getSize=function(B){return B.set(K0,O0)},this.setSize=function(B,p,a=!0){if(z0.isPresenting){o0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(K0=B,O0=p,Q.width=Math.floor(B*L0),Q.height=Math.floor(p*L0),a===!0)Q.style.width=B+"px",Q.style.height=p+"px";if(k!==null)k.setSize(Q.width,Q.height);this.setViewport(0,0,B,p)},this.getDrawingBufferSize=function(B){return B.set(K0*L0,O0*L0).floor()},this.setDrawingBufferSize=function(B,p,a){K0=B,O0=p,L0=a,Q.width=Math.floor(B*a),Q.height=Math.floor(p*a),this.setViewport(0,0,B,p)},this.setEffects=function(B){if(M===j8){a0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let p=0;p<B.length;p++)if(B[p].isOutputPass===!0){o0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(E0)},this.getViewport=function(B){return B.copy($0)},this.setViewport=function(B,p,a,c){if(B.isVector4)$0.set(B.x,B.y,B.z,B.w);else $0.set(B,p,a,c);N.viewport(E0.copy($0).multiplyScalar(L0).round())},this.getScissor=function(B){return B.copy(g)},this.setScissor=function(B,p,a,c){if(B.isVector4)g.set(B.x,B.y,B.z,B.w);else g.set(B,p,a,c);N.scissor(v0.copy(g).multiplyScalar(L0).round())},this.getScissorTest=function(){return o},this.setScissorTest=function(B){N.setScissorTest(o=B)},this.setOpaqueSort=function(B){M0=B},this.setTransparentSort=function(B){X0=B},this.getClearColor=function(B){return B.copy(c0.getClearColor())},this.setClearColor=function(){c0.setClearColor(...arguments)},this.getClearAlpha=function(){return c0.getClearAlpha()},this.setClearAlpha=function(){c0.setClearAlpha(...arguments)},this.clear=function(B=!0,p=!0,a=!0){let c=0;if(B){let s=!1;if(d!==null){let T0=d.texture.format;s=z.has(T0)}if(s){let T0=d.texture.type,j0=E.has(T0),_0=c0.getClearColor(),f0=c0.getClearAlpha(),x0=_0.r,t0=_0.g,e0=_0.b;if(j0)F[0]=x0,F[1]=t0,F[2]=e0,F[3]=f0,y.clearBufferuiv(y.COLOR,0,F);else T[0]=x0,T[1]=t0,T[2]=e0,T[3]=f0,y.clearBufferiv(y.COLOR,0,T)}else c|=y.COLOR_BUFFER_BIT}if(p)c|=y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(a)c|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(c!==0)y.clear(c)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),S=B},this.dispose=function(){Q.removeEventListener("webglcontextlost",$J,!1),Q.removeEventListener("webglcontextrestored",GJ,!1),Q.removeEventListener("webglcontextcreationerror",kJ,!1),c0.dispose(),P0.dispose(),V0.dispose(),I.dispose(),l.dispose(),e.dispose(),B0.dispose(),S0.dispose(),Z0.dispose(),z0.dispose(),z0.removeEventListener("sessionstart",C7),z0.removeEventListener("sessionend",T7),E8.stop()};function $J(B){B.preventDefault(),g$("WebGLRenderer: Context Lost."),i=!0}function GJ(){g$("WebGLRenderer: Context Restored."),i=!1;let B=q.autoReset,p=g0.enabled,a=g0.autoUpdate,c=g0.needsUpdate,s=g0.type;H0(),q.autoReset=B,g0.enabled=p,g0.autoUpdate=a,g0.needsUpdate=c,g0.type=s}function kJ(B){a0("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function q8(B){let p=B.target;p.removeEventListener("dispose",q8),D8(p)}function D8(B){w7(B),I.remove(B)}function w7(B){let p=I.get(B).programs;if(p!==void 0){if(p.forEach(function(a){Z0.releaseProgram(a)}),B.isShaderMaterial)Z0.releaseShaderCache(B)}}this.renderBufferDirect=function(B,p,a,c,s,T0){if(p===null)p=p0;let j0=s.isMesh&&s.matrixWorld.determinantAffine()<0,_0=j7(B,p,a,c,s);N.setMaterial(c,j0);let f0=a.index,x0=1;if(c.wireframe===!0){if(f0=G0.getWireframeAttribute(a),f0===void 0)return;x0=2}let t0=a.drawRange,e0=a.attributes.position,d0=t0.start*x0,DJ=(t0.start+t0.count)*x0;if(T0!==null)d0=Math.max(d0,T0.start*x0),DJ=Math.min(DJ,(T0.start+T0.count)*x0);if(f0!==null)d0=Math.max(d0,0),DJ=Math.min(DJ,f0.count);else if(e0!==void 0&&e0!==null)d0=Math.max(d0,0),DJ=Math.min(DJ,e0.count);let _J=DJ-d0;if(_J<0||_J===1/0)return;B0.setup(s,c,_0,a,f0);let BJ,EJ=b;if(f0!==null)BJ=U0.get(f0),EJ=R0,EJ.setIndex(BJ);if(s.isMesh)if(c.wireframe===!0)N.setLineWidth(c.wireframeLinewidth*s0()),EJ.setMode(y.LINES);else EJ.setMode(y.TRIANGLES);else if(s.isLine){let jJ=c.linewidth;if(jJ===void 0)jJ=1;if(N.setLineWidth(jJ*s0()),s.isLineSegments)EJ.setMode(y.LINES);else if(s.isLineLoop)EJ.setMode(y.LINE_LOOP);else EJ.setMode(y.LINE_STRIP)}else if(s.isPoints)EJ.setMode(y.POINTS);else if(s.isSprite)EJ.setMode(y.TRIANGLES);if(s.isBatchedMesh)if(!b0.get("WEBGL_multi_draw")){let{_multiDrawStarts:jJ,_multiDrawCounts:y0,_multiDrawCount:rJ}=s,NJ=f0?U0.get(f0).bytesPerElement:1,tJ=I.get(c).currentProgram.getUniforms();for(let W8=0;W8<rJ;W8++)tJ.setValue(y,"_gl_DrawID",W8),EJ.render(jJ[W8]/NJ,y0[W8])}else EJ.renderMultiDraw(s._multiDrawStarts,s._multiDrawCounts,s._multiDrawCount);else if(s.isInstancedMesh)EJ.renderInstances(d0,_J,s.count);else if(a.isInstancedBufferGeometry){let jJ=a._maxInstanceCount!==void 0?a._maxInstanceCount:1/0,y0=Math.min(a.instanceCount,jJ);EJ.renderInstances(d0,_J,y0)}else EJ.render(d0,_J)};function a9(B,p,a){if(B.transparent===!0&&B.side===PJ&&B.forceSinglePass===!1)B.side=iJ,B.needsUpdate=!0,r9(B,p,a),B.side=O7,B.needsUpdate=!0,r9(B,p,a),B.side=PJ;else r9(B,p,a)}this.compile=function(B,p,a=null){if(a===null)a=B;if(P=V0.get(a),P.init(p),j.push(P),a.traverseVisible(function(s){if(s.isLight&&s.layers.test(p.layers)){if(P.pushLight(s),s.castShadow)P.pushShadow(s)}}),B!==a)B.traverseVisible(function(s){if(s.isLight&&s.layers.test(p.layers)){if(P.pushLight(s),s.castShadow)P.pushShadow(s)}});P.setupLights();let c=new Set;return B.traverse(function(s){if(!(s.isMesh||s.isPoints||s.isLine||s.isSprite))return;let T0=s.material;if(T0)if(Array.isArray(T0))for(let j0=0;j0<T0.length;j0++){let _0=T0[j0];a9(_0,a,s),c.add(_0)}else a9(T0,a,s),c.add(T0)}),P=j.pop(),c},this.compileAsync=function(B,p,a=null){let c=this.compile(B,p,a);return new Promise((s)=>{function T0(){if(c.forEach(function(j0){if(I.get(j0).currentProgram.isReady())c.delete(j0)}),c.size===0){s(B);return}setTimeout(T0,10)}if(b0.get("KHR_parallel_shader_compile")!==null)T0();else setTimeout(T0,10)})};let A8=null;function Z6(B){if(A8)A8(B)}function C7(){E8.stop()}function T7(){E8.start()}let E8=new CZ;if(E8.setAnimationLoop(Z6),typeof self<"u")E8.setContext(self);this.setAnimationLoop=function(B){A8=B,z0.setAnimationLoop(B),B===null?E8.stop():E8.start()},z0.addEventListener("sessionstart",C7),z0.addEventListener("sessionend",T7),this.render=function(B,p){if(p!==void 0&&p.isCamera!==!0){a0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(i===!0)return;if(S!==null)S.renderStart(B,p);let a=z0.enabled===!0&&z0.isPresenting===!0,c=k!==null&&(d===null||a)&&k.begin(L,d);if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(p.parent===null&&p.matrixWorldAutoUpdate===!0)p.updateMatrixWorld();if(z0.enabled===!0&&z0.isPresenting===!0&&(k===null||k.isCompositing()===!1)){if(z0.cameraAutoUpdate===!0)z0.updateCamera(p);p=z0.getCamera()}if(B.isScene===!0)B.onBeforeRender(L,B,p,d);if(P=V0.get(B,j.length),P.init(p),P.state.textureUnits=v.getTextureUnits(),j.push(P),r.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),f.setFromProjectionMatrix(r,x$,p.reversedDepth),h=this.localClippingEnabled,_=D0.init(this.clippingPlanes,h),V=P0.get(B,C.length),V.init(),C.push(V),z0.enabled===!0&&z0.isPresenting===!0){let j0=L.xr.getDepthSensingMesh();if(j0!==null)K9(j0,p,-1/0,L.sortObjects)}if(K9(B,p,0,L.sortObjects),V.finish(),L.sortObjects===!0)V.sort(M0,X0,p.reversedDepth);if(m0=z0.enabled===!1||z0.isPresenting===!1||z0.hasDepthSensing()===!1,m0)c0.addToRenderList(V,B);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(_===!0)D0.beginShadows();let s=P.state.shadowsArray;if(g0.render(s,B,p),_===!0)D0.endShadows();if((c&&k.hasRenderPass())===!1){let{opaque:j0,transmissive:_0}=V;if(P.setupLights(),p.isArrayCamera){let f0=p.cameras;if(_0.length>0)for(let x0=0,t0=f0.length;x0<t0;x0++){let e0=f0[x0];Y6(j0,_0,B,e0)}if(m0)c0.render(B);for(let x0=0,t0=f0.length;x0<t0;x0++){let e0=f0[x0];X6(V,B,e0,e0.viewport)}}else{if(_0.length>0)Y6(j0,_0,B,p);if(m0)c0.render(B);X6(V,B,p)}}if(d!==null&&Q0===0)v.updateMultisampleRenderTarget(d),v.updateRenderTargetMipmap(d);if(c)k.end(L);if(B.isScene===!0)B.onAfterRender(L,B,p);if(B0.resetDefaultState(),Y0=-1,N0=null,j.pop(),j.length>0){if(P=j[j.length-1],v.setTextureUnits(P.state.textureUnits),_===!0)D0.setGlobalState(L.clippingPlanes,P.state.camera)}else P=null;if(C.pop(),C.length>0)V=C[C.length-1];else V=null;if(S!==null)S.renderEnd()};function K9(B,p,a,c){if(B.visible===!1)return;if(B.layers.test(p.layers)){if(B.isGroup)a=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(p)}else if(B.isLightProbeGrid)P.pushLightProbeGrid(B);else if(B.isLight){if(P.pushLight(B),B.castShadow)P.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||f.intersectsSprite(B)){if(c)w.setFromMatrixPosition(B.matrixWorld).applyMatrix4(r);let j0=e.update(B),_0=B.material;if(_0.visible)V.push(B,j0,_0,a,w.z,null)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||f.intersectsObject(B)){let j0=e.update(B),_0=B.material;if(c){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();w.copy(B.boundingSphere.center)}else{if(j0.boundingSphere===null)j0.computeBoundingSphere();w.copy(j0.boundingSphere.center)}w.applyMatrix4(B.matrixWorld).applyMatrix4(r)}if(Array.isArray(_0)){let f0=j0.groups;for(let x0=0,t0=f0.length;x0<t0;x0++){let e0=f0[x0],d0=_0[e0.materialIndex];if(d0&&d0.visible)V.push(B,j0,d0,a,w.z,e0)}}else if(_0.visible)V.push(B,j0,_0,a,w.z,null)}}}let T0=B.children;for(let j0=0,_0=T0.length;j0<_0;j0++)K9(T0[j0],p,a,c)}function X6(B,p,a,c){let{opaque:s,transmissive:T0,transparent:j0}=B;if(P.setupLightsView(a),_===!0)D0.setGlobalState(L.clippingPlanes,a);if(c)N.viewport(E0.copy(c));if(s.length>0)W9(s,p,a);if(T0.length>0)W9(T0,p,a);if(j0.length>0)W9(j0,p,a);N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Y6(B,p,a,c){if((a.isScene===!0?a.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[c.id]===void 0){let d0=b0.has("EXT_color_buffer_half_float")||b0.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[c.id]=new z8(1,1,{generateMipmaps:!0,type:d0?J9:j8,minFilter:h9,samples:Math.max(4,l0.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:FJ.workingColorSpace})}let T0=P.state.transmissionRenderTarget[c.id],j0=c.viewport||E0;T0.setSize(j0.z*L.transmissionResolutionScale,j0.w*L.transmissionResolutionScale);let _0=L.getRenderTarget(),f0=L.getActiveCubeFace(),x0=L.getActiveMipmapLevel();if(L.setRenderTarget(T0),L.getClearColor(XJ),ZJ=L.getClearAlpha(),ZJ<1)L.setClearColor(16777215,0.5);if(L.clear(),m0)c0.render(a);let t0=L.toneMapping;L.toneMapping=S8;let e0=c.viewport;if(c.viewport!==void 0)c.viewport=void 0;if(P.setupLightsView(c),_===!0)D0.setGlobalState(L.clippingPlanes,c);if(W9(B,a,c),v.updateMultisampleRenderTarget(T0),v.updateRenderTargetMipmap(T0),b0.has("WEBGL_multisampled_render_to_texture")===!1){let d0=!1;for(let DJ=0,_J=p.length;DJ<_J;DJ++){let BJ=p[DJ],{object:EJ,geometry:jJ,material:y0,group:rJ}=BJ;if(y0.side===PJ&&EJ.layers.test(c.layers)){let NJ=y0.side;y0.side=iJ,y0.needsUpdate=!0,S7(EJ,a,c,jJ,y0,rJ),y0.side=NJ,y0.needsUpdate=!0,d0=!0}}if(d0===!0)v.updateMultisampleRenderTarget(T0),v.updateRenderTargetMipmap(T0)}if(L.setRenderTarget(_0,f0,x0),L.setClearColor(XJ,ZJ),e0!==void 0)c.viewport=e0;L.toneMapping=t0}function W9(B,p,a){let c=p.isScene===!0?p.overrideMaterial:null;for(let s=0,T0=B.length;s<T0;s++){let j0=B[s],{object:_0,geometry:f0,group:x0}=j0,t0=j0.material;if(t0.allowOverride===!0&&c!==null)t0=c;if(_0.layers.test(a.layers))S7(_0,p,a,f0,t0,x0)}}function S7(B,p,a,c,s,T0){if(B.onBeforeRender(L,p,a,c,s,T0),B.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),s.onBeforeRender(L,p,a,c,B,T0),s.transparent===!0&&s.side===PJ&&s.forceSinglePass===!1)s.side=iJ,s.needsUpdate=!0,L.renderBufferDirect(a,p,c,s,B,T0),s.side=O7,s.needsUpdate=!0,L.renderBufferDirect(a,p,c,s,B,T0),s.side=PJ;else L.renderBufferDirect(a,p,c,s,B,T0);B.onAfterRender(L,p,a,c,s,T0)}function r9(B,p,a){if(p.isScene!==!0)p=p0;let c=I.get(B),s=P.state.lights,T0=P.state.shadowsArray,j0=s.state.version,_0=Z0.getParameters(B,s.state,T0,p,a,P.state.lightProbeGridArray),f0=Z0.getProgramCacheKey(_0),x0=c.programs;c.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?p.environment:null,c.fog=p.fog;let t0=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;if(c.envMap=l.get(B.envMap||c.environment,t0),c.envMapRotation=c.environment!==null&&B.envMap===null?p.environmentRotation:B.envMapRotation,x0===void 0)B.addEventListener("dispose",q8),x0=new Map,c.programs=x0;let e0=x0.get(f0);if(e0!==void 0){if(c.currentProgram===e0&&c.lightsStateVersion===j0)return c8(B,_0),e0}else{if(_0.uniforms=Z0.getUniforms(B),S!==null&&B.isNodeMaterial)S.build(B,a,_0);B.onBeforeCompile(_0,L),e0=Z0.acquireProgram(_0,f0),x0.set(f0,e0),c.uniforms=_0.uniforms}let d0=c.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)d0.clippingPlanes=D0.uniform;if(c8(B,_0),c.needsLights=kQ(B),c.lightsStateVersion=j0,c.needsLights)d0.ambientLightColor.value=s.state.ambient,d0.lightProbe.value=s.state.probe,d0.directionalLights.value=s.state.directional,d0.directionalLightShadows.value=s.state.directionalShadow,d0.spotLights.value=s.state.spot,d0.spotLightShadows.value=s.state.spotShadow,d0.rectAreaLights.value=s.state.rectArea,d0.ltc_1.value=s.state.rectAreaLTC1,d0.ltc_2.value=s.state.rectAreaLTC2,d0.pointLights.value=s.state.point,d0.pointLightShadows.value=s.state.pointShadow,d0.hemisphereLights.value=s.state.hemi,d0.directionalShadowMatrix.value=s.state.directionalShadowMatrix,d0.spotLightMatrix.value=s.state.spotLightMatrix,d0.spotLightMap.value=s.state.spotLightMap,d0.pointShadowMatrix.value=s.state.pointShadowMatrix;return c.lightProbeGrid=P.state.lightProbeGridArray.length>0,c.currentProgram=e0,c.uniformsList=null,e0}function H6(B){if(B.uniformsList===null){let p=B.currentProgram.getUniforms();B.uniformsList=$6.seqWithValue(p.seq,B.uniforms)}return B.uniformsList}function c8(B,p){let a=I.get(B);a.outputColorSpace=p.outputColorSpace,a.batching=p.batching,a.batchingColor=p.batchingColor,a.instancing=p.instancing,a.instancingColor=p.instancingColor,a.instancingMorph=p.instancingMorph,a.skinning=p.skinning,a.morphTargets=p.morphTargets,a.morphNormals=p.morphNormals,a.morphColors=p.morphColors,a.morphTargetsCount=p.morphTargetsCount,a.numClippingPlanes=p.numClippingPlanes,a.numIntersection=p.numClipIntersection,a.vertexAlphas=p.vertexAlphas,a.vertexTangents=p.vertexTangents,a.toneMapping=p.toneMapping}function RQ(B,p){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;A.setFromMatrixPosition(p.matrixWorld);for(let a=0,c=B.length;a<c;a++){let s=B[a];if(s.texture!==null&&s.boundingBox.containsPoint(A))return s}return null}function j7(B,p,a,c,s){if(p.isScene!==!0)p=p0;v.resetTextureUnits();let T0=p.fog,j0=c.isMeshStandardMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial?p.environment:null,_0=d===null?L.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:FJ.workingColorSpace,f0=c.isMeshStandardMaterial||c.isMeshLambertMaterial&&!c.envMap||c.isMeshPhongMaterial&&!c.envMap,x0=l.get(c.envMap||j0,f0),t0=c.vertexColors===!0&&!!a.attributes.color&&a.attributes.color.itemSize===4,e0=!!a.attributes.tangent&&(!!c.normalMap||c.anisotropy>0),d0=!!a.morphAttributes.position,DJ=!!a.morphAttributes.normal,_J=!!a.morphAttributes.color,BJ=S8;if(c.toneMapped){if(d===null||d.isXRRenderTarget===!0)BJ=L.toneMapping}let EJ=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,jJ=EJ!==void 0?EJ.length:0,y0=I.get(c),rJ=P.state.lights;if(_===!0){if(h===!0||B!==N0){let MJ=B===N0&&c.id===Y0;D0.setState(c,B,MJ)}}let NJ=!1;if(c.version===y0.__version){if(y0.needsLights&&y0.lightsStateVersion!==rJ.state.version)NJ=!0;else if(y0.outputColorSpace!==_0)NJ=!0;else if(s.isBatchedMesh&&y0.batching===!1)NJ=!0;else if(!s.isBatchedMesh&&y0.batching===!0)NJ=!0;else if(s.isBatchedMesh&&y0.batchingColor===!0&&s.colorTexture===null)NJ=!0;else if(s.isBatchedMesh&&y0.batchingColor===!1&&s.colorTexture!==null)NJ=!0;else if(s.isInstancedMesh&&y0.instancing===!1)NJ=!0;else if(!s.isInstancedMesh&&y0.instancing===!0)NJ=!0;else if(s.isSkinnedMesh&&y0.skinning===!1)NJ=!0;else if(!s.isSkinnedMesh&&y0.skinning===!0)NJ=!0;else if(s.isInstancedMesh&&y0.instancingColor===!0&&s.instanceColor===null)NJ=!0;else if(s.isInstancedMesh&&y0.instancingColor===!1&&s.instanceColor!==null)NJ=!0;else if(s.isInstancedMesh&&y0.instancingMorph===!0&&s.morphTexture===null)NJ=!0;else if(s.isInstancedMesh&&y0.instancingMorph===!1&&s.morphTexture!==null)NJ=!0;else if(y0.envMap!==x0)NJ=!0;else if(c.fog===!0&&y0.fog!==T0)NJ=!0;else if(y0.numClippingPlanes!==void 0&&(y0.numClippingPlanes!==D0.numPlanes||y0.numIntersection!==D0.numIntersection))NJ=!0;else if(y0.vertexAlphas!==t0)NJ=!0;else if(y0.vertexTangents!==e0)NJ=!0;else if(y0.morphTargets!==d0)NJ=!0;else if(y0.morphNormals!==DJ)NJ=!0;else if(y0.morphColors!==_J)NJ=!0;else if(y0.toneMapping!==BJ)NJ=!0;else if(y0.morphTargetsCount!==jJ)NJ=!0;else if(!!y0.lightProbeGrid!==P.state.lightProbeGridArray.length>0)NJ=!0}else NJ=!0,y0.__version=c.version;let tJ=y0.currentProgram;if(NJ===!0){if(tJ=r9(c,p,s),S&&c.isNodeMaterial)S.onUpdateProgram(c,tJ,y0)}let W8=!1,R8=!1,Z9=!1,OJ=tJ.getUniforms(),CJ=y0.uniforms;if(N.useProgram(tJ.program))W8=!0,R8=!0,Z9=!0;if(c.id!==Y0)Y0=c.id,R8=!0;if(y0.needsLights){let MJ=RQ(P.state.lightProbeGridArray,s);if(y0.lightProbeGrid!==MJ)y0.lightProbeGrid=MJ,R8=!0}if(W8||N0!==B){if(N.buffers.depth.getReversed()&&B.reversedDepth!==!0)B._reversedDepth=!0,B.updateProjectionMatrix();OJ.setValue(y,"projectionMatrix",B.projectionMatrix),OJ.setValue(y,"viewMatrix",B.matrixWorldInverse);let I0=OJ.map.cameraPosition;if(I0!==void 0)I0.setValue(y,m.setFromMatrixPosition(B.matrixWorld));if(l0.logarithmicDepthBuffer)OJ.setValue(y,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial)OJ.setValue(y,"isOrthographic",B.isOrthographicCamera===!0);if(N0!==B)N0=B,R8=!0,Z9=!0}if(y0.needsLights){if(rJ.state.directionalShadowMap.length>0)OJ.setValue(y,"directionalShadowMap",rJ.state.directionalShadowMap,v);if(rJ.state.spotShadowMap.length>0)OJ.setValue(y,"spotShadowMap",rJ.state.spotShadowMap,v);if(rJ.state.pointShadowMap.length>0)OJ.setValue(y,"pointShadowMap",rJ.state.pointShadowMap,v)}if(s.isSkinnedMesh){OJ.setOptional(y,s,"bindMatrix"),OJ.setOptional(y,s,"bindMatrixInverse");let MJ=s.skeleton;if(MJ){if(MJ.boneTexture===null)MJ.computeBoneTexture();OJ.setValue(y,"boneTexture",MJ.boneTexture,v)}}if(s.isBatchedMesh){if(OJ.setOptional(y,s,"batchingTexture"),OJ.setValue(y,"batchingTexture",s._matricesTexture,v),OJ.setOptional(y,s,"batchingIdTexture"),OJ.setValue(y,"batchingIdTexture",s._indirectTexture,v),OJ.setOptional(y,s,"batchingColorTexture"),s._colorsTexture!==null)OJ.setValue(y,"batchingColorTexture",s._colorsTexture,v)}let k8=a.morphAttributes;if(k8.position!==void 0||k8.normal!==void 0||k8.color!==void 0)WJ.update(s,a,tJ);if(R8||y0.receiveShadow!==s.receiveShadow)y0.receiveShadow=s.receiveShadow,OJ.setValue(y,"receiveShadow",s.receiveShadow);if((c.isMeshStandardMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial)&&c.envMap===null&&p.environment!==null)CJ.envMapIntensity.value=p.environmentIntensity;if(CJ.dfgLUT!==void 0)CJ.dfgLUT.value=KN();if(R8){if(OJ.setValue(y,"toneMappingExposure",L.toneMappingExposure),y0.needsLights)y7(CJ,Z9);if(T0&&c.fog===!0)k0.refreshFogUniforms(CJ,T0);if(k0.refreshMaterialUniforms(CJ,c,L0,O0,P.state.transmissionRenderTarget[B.id]),y0.needsLights&&y0.lightProbeGrid){let MJ=y0.lightProbeGrid;CJ.probesSH.value=MJ.texture,CJ.probesMin.value.copy(MJ.boundingBox.min),CJ.probesMax.value.copy(MJ.boundingBox.max),CJ.probesResolution.value.copy(MJ.resolution)}$6.upload(y,H6(y0),CJ,v)}if(c.isShaderMaterial&&c.uniformsNeedUpdate===!0)$6.upload(y,H6(y0),CJ,v),c.uniformsNeedUpdate=!1;if(c.isSpriteMaterial)OJ.setValue(y,"center",s.center);if(OJ.setValue(y,"modelViewMatrix",s.modelViewMatrix),OJ.setValue(y,"normalMatrix",s.normalMatrix),OJ.setValue(y,"modelMatrix",s.matrixWorld),c.uniformsGroups!==void 0){let MJ=c.uniformsGroups;for(let I0=0,h0=MJ.length;I0<h0;I0++){let YJ=MJ[I0];S0.update(YJ,tJ),S0.bind(YJ,tJ)}}return tJ}function y7(B,p){B.ambientLightColor.needsUpdate=p,B.lightProbe.needsUpdate=p,B.directionalLights.needsUpdate=p,B.directionalLightShadows.needsUpdate=p,B.pointLights.needsUpdate=p,B.pointLightShadows.needsUpdate=p,B.spotLights.needsUpdate=p,B.spotLightShadows.needsUpdate=p,B.rectAreaLights.needsUpdate=p,B.hemisphereLights.needsUpdate=p}function kQ(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}if(this.getActiveCubeFace=function(){return t},this.getActiveMipmapLevel=function(){return Q0},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(B,p,a){let c=I.get(B);if(c.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,c.__autoAllocateDepthBuffer===!1)c.__useRenderToTexture=!1;I.get(B.texture).__webglTexture=p,I.get(B.depthTexture).__webglTexture=c.__autoAllocateDepthBuffer?void 0:a,c.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,p){let a=I.get(B);a.__webglFramebuffer=p,a.__useDefaultFramebuffer=p===void 0},this.setRenderTarget=function(B,p=0,a=0){d=B,t=p,Q0=a;let c=null,s=!1,T0=!1;if(B){let _0=I.get(B);if(_0.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(y.FRAMEBUFFER,_0.__webglFramebuffer),E0.copy(B.viewport),v0.copy(B.scissor),w0=B.scissorTest,N.viewport(E0),N.scissor(v0),N.setScissorTest(w0),Y0=-1;return}else if(_0.__webglFramebuffer===void 0)v.setupRenderTarget(B);else if(_0.__hasExternalTextures)v.rebindTextures(B,I.get(B.texture).__webglTexture,I.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let t0=B.depthTexture;if(_0.__boundDepthTexture!==t0){if(t0!==null&&I.has(t0)&&(B.width!==t0.image.width||B.height!==t0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(B)}}let f0=B.texture;if(f0.isData3DTexture||f0.isDataArrayTexture||f0.isCompressedArrayTexture)T0=!0;let x0=I.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(x0[p]))c=x0[p][a];else c=x0[p];s=!0}else if(B.samples>0&&v.useMultisampledRTT(B)===!1)c=I.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(x0))c=x0[a];else c=x0;E0.copy(B.viewport),v0.copy(B.scissor),w0=B.scissorTest}else E0.copy($0).multiplyScalar(L0).floor(),v0.copy(g).multiplyScalar(L0).floor(),w0=o;if(a!==0)c=n;if(N.bindFramebuffer(y.FRAMEBUFFER,c))N.drawBuffers(B,c);if(N.viewport(E0),N.scissor(v0),N.setScissorTest(w0),s){let _0=I.get(B.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+p,_0.__webglTexture,a)}else if(T0){let _0=p;for(let f0=0;f0<B.textures.length;f0++){let x0=I.get(B.textures[f0]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+f0,x0.__webglTexture,a,_0)}}else if(B!==null&&a!==0){let _0=I.get(B.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,_0.__webglTexture,a)}Y0=-1},this.readRenderTargetPixels=function(B,p,a,c,s,T0,j0,_0=0){if(!(B&&B.isWebGLRenderTarget)){a0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let f0=I.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&j0!==void 0)f0=f0[j0];if(f0){N.bindFramebuffer(y.FRAMEBUFFER,f0);try{let x0=B.textures[_0],t0=x0.format,e0=x0.type;if(B.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+_0);if(!l0.textureFormatReadable(t0)){a0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!l0.textureTypeReadable(e0)){a0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(p>=0&&p<=B.width-c&&(a>=0&&a<=B.height-s))y.readPixels(p,a,c,s,W0.convert(t0),W0.convert(e0),T0)}finally{let x0=d!==null?I.get(d).__webglFramebuffer:null;N.bindFramebuffer(y.FRAMEBUFFER,x0)}}},this.readRenderTargetPixelsAsync=async function(B,p,a,c,s,T0,j0,_0=0){if(!(B&&B.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let f0=I.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&j0!==void 0)f0=f0[j0];if(f0)if(p>=0&&p<=B.width-c&&(a>=0&&a<=B.height-s)){N.bindFramebuffer(y.FRAMEBUFFER,f0);let x0=B.textures[_0],t0=x0.format,e0=x0.type;if(B.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+_0);if(!l0.textureFormatReadable(t0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!l0.textureTypeReadable(e0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let d0=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,d0),y.bufferData(y.PIXEL_PACK_BUFFER,T0.byteLength,y.STREAM_READ),y.readPixels(p,a,c,s,W0.convert(t0),W0.convert(e0),0);let DJ=d!==null?I.get(d).__webglFramebuffer:null;N.bindFramebuffer(y.FRAMEBUFFER,DJ);let _J=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await tW(y,_J,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,d0),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,T0),y.deleteBuffer(d0),y.deleteSync(_J),T0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,p=null,a=0){let c=Math.pow(2,-a),s=Math.floor(B.image.width*c),T0=Math.floor(B.image.height*c),j0=p!==null?p.x:0,_0=p!==null?p.y:0;v.setTexture2D(B,0),y.copyTexSubImage2D(y.TEXTURE_2D,a,0,0,j0,_0,s,T0),N.unbindTexture()},this.copyTextureToTexture=function(B,p,a=null,c=null,s=0,T0=0){let j0,_0,f0,x0,t0,e0,d0,DJ,_J,BJ=B.isCompressedTexture?B.mipmaps[T0]:B.image;if(a!==null)j0=a.max.x-a.min.x,_0=a.max.y-a.min.y,f0=a.isBox3?a.max.z-a.min.z:1,x0=a.min.x,t0=a.min.y,e0=a.isBox3?a.min.z:0;else{let CJ=Math.pow(2,-s);if(j0=Math.floor(BJ.width*CJ),_0=Math.floor(BJ.height*CJ),B.isDataArrayTexture)f0=BJ.depth;else if(B.isData3DTexture)f0=Math.floor(BJ.depth*CJ);else f0=1;x0=0,t0=0,e0=0}if(c!==null)d0=c.x,DJ=c.y,_J=c.z;else d0=0,DJ=0,_J=0;let EJ=W0.convert(p.format),jJ=W0.convert(p.type),y0;if(p.isData3DTexture)v.setTexture3D(p,0),y0=y.TEXTURE_3D;else if(p.isDataArrayTexture||p.isCompressedArrayTexture)v.setTexture2DArray(p,0),y0=y.TEXTURE_2D_ARRAY;else v.setTexture2D(p,0),y0=y.TEXTURE_2D;N.activeTexture(y.TEXTURE0),N.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,p.flipY),N.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),N.pixelStorei(y.UNPACK_ALIGNMENT,p.unpackAlignment);let rJ=N.getParameter(y.UNPACK_ROW_LENGTH),NJ=N.getParameter(y.UNPACK_IMAGE_HEIGHT),tJ=N.getParameter(y.UNPACK_SKIP_PIXELS),W8=N.getParameter(y.UNPACK_SKIP_ROWS),R8=N.getParameter(y.UNPACK_SKIP_IMAGES);N.pixelStorei(y.UNPACK_ROW_LENGTH,BJ.width),N.pixelStorei(y.UNPACK_IMAGE_HEIGHT,BJ.height),N.pixelStorei(y.UNPACK_SKIP_PIXELS,x0),N.pixelStorei(y.UNPACK_SKIP_ROWS,t0),N.pixelStorei(y.UNPACK_SKIP_IMAGES,e0);let Z9=B.isDataArrayTexture||B.isData3DTexture,OJ=p.isDataArrayTexture||p.isData3DTexture;if(B.isDepthTexture){let CJ=I.get(B),k8=I.get(p),MJ=I.get(CJ.__renderTarget),I0=I.get(k8.__renderTarget);N.bindFramebuffer(y.READ_FRAMEBUFFER,MJ.__webglFramebuffer),N.bindFramebuffer(y.DRAW_FRAMEBUFFER,I0.__webglFramebuffer);for(let h0=0;h0<f0;h0++){if(Z9)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,I.get(B).__webglTexture,s,e0+h0),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,I.get(p).__webglTexture,T0,_J+h0);y.blitFramebuffer(x0,t0,j0,_0,d0,DJ,j0,_0,y.DEPTH_BUFFER_BIT,y.NEAREST)}N.bindFramebuffer(y.READ_FRAMEBUFFER,null),N.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(s!==0||B.isRenderTargetTexture||I.has(B)){let CJ=I.get(B),k8=I.get(p);N.bindFramebuffer(y.READ_FRAMEBUFFER,J0),N.bindFramebuffer(y.DRAW_FRAMEBUFFER,u);for(let MJ=0;MJ<f0;MJ++){if(Z9)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,CJ.__webglTexture,s,e0+MJ);else y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,CJ.__webglTexture,s);if(OJ)y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,k8.__webglTexture,T0,_J+MJ);else y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,k8.__webglTexture,T0);if(s!==0)y.blitFramebuffer(x0,t0,j0,_0,d0,DJ,j0,_0,y.COLOR_BUFFER_BIT,y.NEAREST);else if(OJ)y.copyTexSubImage3D(y0,T0,d0,DJ,_J+MJ,x0,t0,j0,_0);else y.copyTexSubImage2D(y0,T0,d0,DJ,x0,t0,j0,_0)}N.bindFramebuffer(y.READ_FRAMEBUFFER,null),N.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(OJ)if(B.isDataTexture||B.isData3DTexture)y.texSubImage3D(y0,T0,d0,DJ,_J,j0,_0,f0,EJ,jJ,BJ.data);else if(p.isCompressedArrayTexture)y.compressedTexSubImage3D(y0,T0,d0,DJ,_J,j0,_0,f0,EJ,BJ.data);else y.texSubImage3D(y0,T0,d0,DJ,_J,j0,_0,f0,EJ,jJ,BJ);else if(B.isDataTexture)y.texSubImage2D(y.TEXTURE_2D,T0,d0,DJ,j0,_0,EJ,jJ,BJ.data);else if(B.isCompressedTexture)y.compressedTexSubImage2D(y.TEXTURE_2D,T0,d0,DJ,BJ.width,BJ.height,EJ,BJ.data);else y.texSubImage2D(y.TEXTURE_2D,T0,d0,DJ,j0,_0,EJ,jJ,BJ);if(N.pixelStorei(y.UNPACK_ROW_LENGTH,rJ),N.pixelStorei(y.UNPACK_IMAGE_HEIGHT,NJ),N.pixelStorei(y.UNPACK_SKIP_PIXELS,tJ),N.pixelStorei(y.UNPACK_SKIP_ROWS,W8),N.pixelStorei(y.UNPACK_SKIP_IMAGES,R8),T0===0&&p.generateMipmaps)y.generateMipmap(y0);N.unbindTexture()},this.initRenderTarget=function(B){if(I.get(B).__webglFramebuffer===void 0)v.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)v.setTextureCube(B,0);else if(B.isData3DTexture)v.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)v.setTexture2DArray(B,0);else v.setTexture2D(B,0);N.unbindTexture()},this.resetState=function(){t=0,Q0=0,d=null,N.reset(),B0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return x$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=FJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=FJ._getUnpackColorSpace()}}var uZ={type:"change"},PK={type:"start"},cZ={type:"end"},YQ=new V7,lZ=new T8,WN=Math.cos(70*m$.DEG2RAD),gJ=new x,U8=2*Math.PI,VJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},IK=0.000001;class AK extends QQ{constructor(J,Q=null){super(J,Q);if(this.state=VJ.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:F9.ROTATE,MIDDLE:F9.DOLLY,RIGHT:F9.PAN},this.touches={ONE:O9.ROTATE,TWO:O9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new L8,this._lastTargetPosition=new x,this._quat=new L8().setFromUnitVectors(J.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new t7,this._sphericalDelta=new t7,this._scale=1,this._panOffset=new x,this._rotateStart=new i0,this._rotateEnd=new i0,this._rotateDelta=new i0,this._panStart=new i0,this._panEnd=new i0,this._panDelta=new i0,this._dollyStart=new i0,this._dollyEnd=new i0,this._dollyDelta=new i0,this._dollyDirection=new x,this._mouse=new i0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XN.bind(this),this._onPointerDown=ZN.bind(this),this._onPointerUp=YN.bind(this),this._onContextMenu=ON.bind(this),this._onMouseWheel=qN.bind(this),this._onKeyDown=NN.bind(this),this._onTouchStart=GN.bind(this),this._onTouchMove=FN.bind(this),this._onMouseDown=HN.bind(this),this._onMouseMove=UN.bind(this),this._interceptControlDown=DN.bind(this),this._interceptControlUp=EN.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uZ),this.update(),this.state=VJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(gJ.copy(Q).sub(this.target),gJ.applyQuaternion(this._quat),this._spherical.setFromVector3(gJ),this.autoRotate&&this.state===VJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,K=this.maxAzimuthAngle;if(isFinite($)&&isFinite(K)){if($<-Math.PI)$+=U8;else if($>Math.PI)$-=U8;if(K<-Math.PI)K+=U8;else if(K>Math.PI)K-=U8;if($<=K)this._spherical.theta=Math.max($,Math.min(K,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+K)/2?Math.max($,this._spherical.theta):Math.min(K,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let Z=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=Z!=this._spherical.radius}if(gJ.setFromSpherical(this._spherical),gJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(gJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let Z=null;if(this.object.isPerspectiveCamera){let X=gJ.length();Z=this._clampDistance(X*this._scale);let Y=X-Z;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),W=!!Y}else if(this.object.isOrthographicCamera){let X=new x(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=Y!==this.object.zoom;let H=new x(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),Z=gJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(Z!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(Z).add(this.object.position);else if(YQ.origin.copy(this.object.position),YQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(YQ.direction))<WN)this.object.lookAt(this.target);else lZ.setFromNormalAndCoplanarPoint(this.object.up,this.target),YQ.intersectPlane(lZ,this.target)}else if(this.object.isOrthographicCamera){let Z=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),Z!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>IK||8*(1-this._lastQuaternion.dot(this.object.quaternion))>IK||this._lastTargetPosition.distanceToSquared(this.target)>IK)return this.dispatchEvent(uZ),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return U8/60*this.autoRotateSpeed*J;else return U8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){gJ.setFromMatrixColumn(Q,0),gJ.multiplyScalar(-J),this._panOffset.add(gJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)gJ.setFromMatrixColumn(Q,1);else gJ.setFromMatrixColumn(Q,0),gJ.crossVectors(this.object.up,gJ);gJ.multiplyScalar(J),this._panOffset.add(gJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let K=this.object.position;gJ.copy(K).sub(this.target);let W=gJ.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*W/$.clientHeight,this.object.matrix),this._panUp(2*Q*W/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),K=J-$.left,W=Q-$.top,Z=$.width,X=$.height;this._mouse.x=K/Z*2-1,this._mouse.y=-(W/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(U8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(U8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(U8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-U8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(U8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-U8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateStart.set($,K)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panStart.set($,K)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,K=J.pageY-Q.y,W=Math.sqrt($*$+K*K);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),K=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._rotateEnd.set(K,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(U8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(U8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panEnd.set($,K)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,K=J.pageY-Q.y,W=Math.sqrt($*$+K*K);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let Z=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(Z,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new i0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function ZN(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function XN(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function YN(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cZ),this.state=VJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function HN(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case F9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=VJ.DOLLY;break;case F9.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=VJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=VJ.ROTATE}break;case F9.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=VJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=VJ.PAN}break;default:this.state=VJ.NONE}if(this.state!==VJ.NONE)this.dispatchEvent(PK)}function UN(J){switch(this.state){case VJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case VJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case VJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function qN(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==VJ.NONE)return;J.preventDefault(),this.dispatchEvent(PK),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(cZ)}function NN(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function GN(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case O9.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=VJ.TOUCH_ROTATE;break;case O9.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=VJ.TOUCH_PAN;break;default:this.state=VJ.NONE}break;case 2:switch(this.touches.TWO){case O9.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=VJ.TOUCH_DOLLY_PAN;break;case O9.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=VJ.TOUCH_DOLLY_ROTATE;break;default:this.state=VJ.NONE}break;default:this.state=VJ.NONE}if(this.state!==VJ.NONE)this.dispatchEvent(PK)}function FN(J){switch(this._trackPointer(J),this.state){case VJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case VJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case VJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case VJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=VJ.NONE}}function ON(J){if(this.enabled===!1)return;J.preventDefault()}function DN(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function EN(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function nZ(J){let Q;try{Q=new zK({antialias:!0,alpha:!1})}catch(X0){if(console.error("WebGL renderer unavailable:",X0),J)J.innerHTML='<div class="webgl-fallback" style="color:#ffd700;font-family:Orbitron,sans-serif;text-align:center;padding:32px;margin:24px;border:2px solid #7b2d8e;border-radius:18px;background:rgba(26,0,37,0.88);"><h2>WebGL unavailable</h2><p style="color:#9980aa;margin-top:8px;">This game requires a browser with WebGL support. Try a recent Chrome, Firefox, or Edge.</p></div>';return null}Q.setSize(window.innerWidth,window.innerHeight),Q.setPixelRatio(Math.min(window.devicePixelRatio,2)),Q.shadowMap.enabled=!0,Q.shadowMap.type=y9,Q.toneMapping=d7,Q.toneMappingExposure=1.6,Q.outputColorSpace=g8,J.appendChild(Q.domElement);let $=new c6;$.background=new QJ(853016),$.fog=new o7(853016,0.028);let K=new v8(40,48,48),W=new H8({side:iJ,fog:!1,uniforms:{topColor:{value:new QJ(1968957)},bottomColor:{value:new QJ(853016)},moonColor:{value:new QJ(16773833)},time:{value:0}},vertexShader:`
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
    `}),Z=new F0(K,W);$.add(Z);let X=new uJ(40,window.innerWidth/window.innerHeight,0.1,50);X.position.set(8,6,9);let Y=new AK(X,Q.domElement);Y.target.set(0,0.6,-0.5),Y.enableDamping=!0,Y.dampingFactor=0.08,Y.minDistance=4,Y.maxDistance=20,Y.maxPolarAngle=Math.PI/2,Y.minPolarAngle=Math.PI/7,Y.update(),$.add(new JQ(8934860,1.4));let H=new P7(16772829,2.2);H.position.set(5,10,4),H.castShadow=!0,H.shadow.mapSize.width=1024,H.shadow.mapSize.height=1024,$.add(H);let U=new P7(14527231,1.2);U.position.set(-4,5,-3),$.add(U);let D=new P7(4517631,0.8);D.position.set(5,3,-4),$.add(D);let O=new B9(16768392,1.2,15,Math.PI/5,0.5,1);O.position.set(0,7,2),O.target.position.set(0,0,-0.5),$.add(O),$.add(O.target);let G=new B9(14527231,0.8,12,Math.PI/4,0.5,1);G.position.set(-2,6,-1),G.target.position.set(0,0.3,0),$.add(G),$.add(G.target);let R=new B9(16766720,1.5,10,Math.PI/6,0.6,1);R.position.set(-2,5,-4),R.target.position.set(-2,1.5,-3),$.add(R),$.add(R.target);let M=new B9(16766720,1.5,10,Math.PI/6,0.6,1);M.position.set(2,5,-4),M.target.position.set(2,1.5,-3),$.add(M),$.add(M.target);let z=new B9(16777215,1,10,Math.PI/8,0.4,1);z.position.set(0,6,-3),z.target.position.set(0,1.5,-3),$.add(z),$.add(z.target);let E=new d8(16766720,0.6,4);E.position.set(-2.5,2,-2.5),$.add(E);let F=new d8(16766720,0.6,4);F.position.set(2.5,2,-2.5),$.add(F);let T=new d8(16755268,0.5,5);T.position.set(0,2.5,-2.5),$.add(T);let A=new d8(16732120,0.35,7);A.position.set(0,2.4,0.8),$.add(A);let V={strength:0,color:new QJ(16732120)},P=[];[[-6,4],[6,4],[-6,-2],[6,-2],[-6,-5],[6,-5]].forEach(([X0,$0])=>{let g=new r0({color:8939059,roughness:0.25,metalness:0.85,emissive:5583616,emissiveIntensity:0.1}),o=new F0(new mJ(0.25,0.35,3.5,8),g);o.position.set(X0,1.75,$0),o.castShadow=!0,$.add(o);let f=new r0({color:14527027,roughness:0.15,metalness:0.9,emissive:11171584,emissiveIntensity:0.3}),_=new F0(new mJ(0.45,0.35,0.25,8),f);_.position.set(X0,3.6,$0),$.add(_);let h=new F0(new mJ(0.38,0.42,0.15,8),f);h.position.set(X0,0.05,$0),$.add(h);let r=new r0({color:6702114,roughness:0.7,metalness:0.6}),m=new F0(new mJ(0.04,0.06,0.3,6),r);m.position.set(X0,3.85,$0),$.add(m);let w=new r0({color:16737792,emissive:16729088,emissiveIntensity:2.5,transparent:!0,opacity:0.7}),p0=new F0(new d9(0.15,0.5,6),w.clone());p0.position.set(X0,4.15,$0),$.add(p0);let m0=new r0({color:16772676,emissive:16777096,emissiveIntensity:4,transparent:!0,opacity:0.85}),s0=new F0(new d9(0.07,0.3,6),m0.clone());s0.position.set(X0,4.1,$0),$.add(s0);let y=new hJ({color:16777215,transparent:!0,opacity:0.6}),JJ=new F0(new d9(0.03,0.12,4),y.clone());JJ.position.set(X0,4.05,$0),$.add(JJ);let b0=new d8(16737792,1,5);b0.position.set(X0,4.2,$0),$.add(b0),P.push({outer:p0,inner:s0,core:JJ,light:b0,baseY:4.15,phase:Math.random()*Math.PI*2,pos:{x:X0,z:$0}})});let j=new hJ({color:16763972,transparent:!0,opacity:0.2}),k=[];for(let X0=0;X0<8;X0++){let $0=X0/8*Math.PI*2,g=5.5+Math.random()*2.5,o=3+Math.random()*2,f=Math.cos($0)*g,_=Math.sin($0)*g-1,h=new F0(new v8(0.12,8,8),j);h.position.set(f,o,_),$.add(h);let r=new d8(16763972,0.15,2);r.position.copy(h.position),$.add(r),k.push({mesh:h,light:r,angle:$0,radius:g,baseHeight:o,phase:Math.random()*Math.PI*2})}let L=new k9({color:14531583,size:0.04,transparent:!0,opacity:0.6,blending:f8}),i=new SJ,S=new Float32Array(1800);for(let X0=0;X0<600;X0++)S[X0*3]=(Math.random()-0.5)*40,S[X0*3+1]=Math.random()*15,S[X0*3+2]=(Math.random()-0.5)*40-5;i.setAttribute("position",new bJ(S,3));let n=new m9(i,L);$.add(n);let J0=240,u=new SJ,t=new Float32Array(J0*3),Q0=new Float32Array(J0*3),d=new Float32Array(J0),Y0=new Float32Array(J0);for(let X0=0;X0<J0;X0++){let $0=X0*3;t[$0]=(Math.random()-0.5)*14,t[$0+1]=0.35+Math.random()*5.2,t[$0+2]=(Math.random()-0.5)*13-1,Q0[$0]=0.7+Math.random()*0.3,Q0[$0+1]=0.25+Math.random()*0.55,Q0[$0+2]=0.8+Math.random()*0.2,d[X0]=Math.random()*Math.PI*2,Y0[X0]=0.08+Math.random()*0.18}u.setAttribute("position",new bJ(t,3)),u.setAttribute("color",new bJ(Q0,3));let N0=new k9({size:0.055,vertexColors:!0,transparent:!0,opacity:0.62,blending:f8,depthWrite:!1}),E0=new m9(u,N0);$.add(E0);function v0(){let X0=document.createElement("canvas");X0.width=1024,X0.height=1024;let $0=X0.getContext("2d"),g=$0.createRadialGradient(512,512,0,512,512,720);g.addColorStop(0,"#120820"),g.addColorStop(1,"#0a0515"),$0.fillStyle=g,$0.fillRect(0,0,1024,1024);let o=8,f=1024/o;for(let h=0;h<o;h++)for(let r=0;r<o;r++)if((h+r)%2===0)$0.fillStyle="rgba(30, 15, 50, 0.35)",$0.fillRect(h*f,r*f,f,f);$0.strokeStyle="rgba(255, 215, 0, 0.12)",$0.lineWidth=2;for(let h=0;h<=o;h++)$0.beginPath(),$0.moveTo(h*f,0),$0.lineTo(h*f,1024),$0.stroke(),$0.beginPath(),$0.moveTo(0,h*f),$0.lineTo(1024,h*f),$0.stroke();for(let h=0;h<5000;h++)$0.fillStyle=`rgba(255, 255, 255, ${Math.random()*0.03})`,$0.fillRect(Math.random()*1024,Math.random()*1024,2,2);let _=new m8(X0);return _.wrapS=l7,_.wrapT=l7,_.repeat.set(4,4),_}let w0=v0(),XJ=new F0(new y8(40,40),new r0({map:w0,color:16777215,roughness:0.35,metalness:0.45,emissive:1116194,emissiveIntensity:0.15}));XJ.rotation.x=-Math.PI/2,XJ.position.y=-0.1,XJ.receiveShadow=!0,$.add(XJ);let ZJ=new hJ({color:13404415,transparent:!0,opacity:0.08});for(let X0=-10;X0<=10;X0++){let $0=new F0(new u0(40,0.003,0.015),ZJ);$0.position.set(0,-0.09,X0*2),$.add($0);let g=new F0(new u0(0.015,0.003,40),ZJ);g.position.set(X0*2,-0.09,0),$.add(g)}let K0=new F0(new V9(4,4.2,32),new hJ({color:16766720,transparent:!0,opacity:0.08,side:PJ}));K0.rotation.x=-Math.PI/2,K0.position.set(0,-0.08,0),$.add(K0),[[-4.5,1.2,-3,16766720],[4.5,1.2,-3,16766720],[-4.5,1.2,2,16729190],[4.5,1.2,2,65416],[-3,0.5,-3,4517631],[3,0.5,-3,16746564]].forEach(([X0,$0,g,o])=>{let f=new d8(o,0.7,4);f.position.set(X0,$0,g),$.add(f);let _=new F0(new v8(0.06,8,8),new hJ({color:o}));_.position.copy(f.position),$.add(_)});let O0=new hJ({color:4456550,transparent:!0,opacity:0.04,side:PJ}),L0=[];for(let X0=0;X0<6;X0++){let $0=new F0(new y8(3+Math.random()*2,0.3),O0),g=0.05+Math.random()*0.1;$0.position.set((Math.random()-0.5)*8,g,(Math.random()-0.5)*8-1),$0.rotation.y=Math.random()*Math.PI*2,$.add($0),L0.push({mesh:$0,baseY:g,baseX:$0.position.x,phase:Math.random()*Math.PI*2})}window.addEventListener("resize",()=>{X.aspect=window.innerWidth/window.innerHeight,X.updateProjectionMatrix(),Q.setSize(window.innerWidth,window.innerHeight)});let M0=0;return{scene:$,camera:X,renderer:Q,controls:Y,flameData:P,lanterns:k,smokeData:L0,pulseEvent(X0="win"){let $0={win:3799039,bigwin:16767053,jackpot:16732120,lose:16727683};V.color.set($0[X0]||$0.win),V.strength=X0==="jackpot"?2.4:X0==="bigwin"?1.35:0.75},updateAmbient(X0,$0=0.016666666666666666){W.uniforms.time.value=X0;let g=0.42+0.32*Math.sin(X0*0.6);L.opacity=g;let o=0.5+0.5*Math.sin(X0*0.35+1);L.color.setRGB(0.78+o*0.1,0.66+(1-o)*0.1,0.95);for(let f of L0)f.mesh.position.y=f.baseY+Math.sin(X0*0.4+f.phase)*0.18,f.mesh.position.x=f.baseX+Math.sin(X0*0.25+f.phase*1.7)*0.35;if(M0+=$0,M0>=0.03333333333333333){let f=M0;M0=0;let _=u.attributes.position.array;for(let h=0;h<J0;h++){let r=h*3;if(_[r+1]+=Y0[h]*f*0.24,_[r]+=Math.sin(X0*0.45+d[h])*f*0.05,_[r+1]>5.8)_[r+1]=0.25}u.attributes.position.needsUpdate=!0}N0.opacity=0.42+0.2*(0.5+0.5*Math.sin(X0*0.9)),V.strength*=Math.exp(-4.5*$0),A.color.copy(V.color),A.intensity=0.35+V.strength,A.distance=7+V.strength*2},updateFlames(X0){for(let $0 of P){let g=0.5+0.5*Math.sin(X0*8+$0.phase),o=0.4+0.6*Math.sin(X0*11+$0.phase*1.3),f=g*o;if($0.outer.material.emissiveIntensity=1.5+2.5*f,$0.outer.material.opacity=0.4+0.4*f,$0.inner.material.emissiveIntensity=2.5+4*f,$0.light.intensity=0.6+0.8*f,$0.outer.position.x=$0.pos.x+Math.sin(X0*6+$0.phase)*0.04,$0.outer.position.z=$0.pos.z+Math.cos(X0*8+$0.phase)*0.04,$0.outer.scale.x=0.9+0.2*Math.sin(X0*5+$0.phase*0.7),$0.outer.scale.z=0.9+0.2*Math.cos(X0*7+$0.phase),$0.outer.scale.y=0.8+0.4*Math.sin(X0*9+$0.phase),$0.inner.position.copy($0.outer.position),$0.inner.position.y=$0.baseY+Math.sin(X0*6+$0.phase)*0.04,$0.core)$0.core.position.copy($0.inner.position),$0.core.position.y=$0.baseY-0.1+Math.sin(X0*10+$0.phase)*0.02,$0.core.material.opacity=0.3+0.5*f;$0.light.position.copy($0.outer.position),$0.light.position.y=4.2}for(let $0 of k)$0.mesh.position.y=$0.baseHeight+Math.sin(X0*0.5+$0.phase)*0.08,$0.light.position.y=$0.mesh.position.y}}}function sZ(J){let Q=new X8,$=7,K=6,W=0.5,Z=0.54,X=-2.75,Y=1.6,H=-4.05,U=-3.2,D=3.2,O=[],G=new r0({color:1706037,roughness:0.5,metalness:0.6,emissive:656416,emissiveIntensity:0.12}),R=new r0({color:918560,roughness:0.6,metalness:0.5,emissive:328208,emissiveIntensity:0.08}),M=new F0(new u0(7.8,0.2,6.6),R);M.position.set(0,0.1,0.1),M.castShadow=!0,M.receiveShadow=!0,Q.add(M);let z=new F0(new u0(7.5,0.175,6.3),G);z.position.set(0,0.275,0.05),z.castShadow=!0,z.receiveShadow=!0,Q.add(z);let E=new F0(new u0(7,0.125,6),G);E.position.set(0,0.425,0),E.castShadow=!0,E.receiveShadow=!0,Q.add(E);let F=new r0({color:16766720,roughness:0.15,metalness:0.92,emissive:8939008,emissiveIntensity:0.2}),A=new F0(new u0(7.65,0.05,6.45),F);A.position.set(0,0.2,0.08),Q.add(A);let V=new F0(new u0(7.25,0.05,6.15),F);V.position.set(0,0.35,0.03),Q.add(V);let P=new r0({color:3807829,roughness:0.95,metalness:0.02,emissive:1706544,emissiveIntensity:0.25}),C=new F0(new u0(6.5,0.04,6),P);C.position.set(0,0.52,0),C.receiveShadow=!0,Q.add(C);let j=3.2,k=-1.2,L=0.9,i=1.2,S=0.08,n=0.54+S,J0=-1.5,u=0.45,t=0.7,Q0=J0-u/2,d=J0+u/2,Y0=k+j/2,N0=k-j/2,E0=J0,v0=new r0({color:13404415,emissive:11158783,emissiveIntensity:1.5,transparent:!0,opacity:0.6,side:PJ}),w0=new F0(new V9(0.2,0.4,20,1),v0);w0.position.set(0,0.53,E0),w0.rotation.x=-Math.PI/2,Q.add(w0);let XJ=new X8,ZJ=3.3,K0=2.9000000000000004,O0=E0,L0=new r0({color:6706602,roughness:0.3,metalness:0.8,emissive:4465322,emissiveIntensity:0.2}),M0=new F0(new u0(K0*2+0.5,0.04,0.04),L0);M0.position.set(0,ZJ,O0),XJ.add(M0);let X0=new r0({color:8943564,roughness:0.2,metalness:0.9,emissive:6702250,emissiveIntensity:0.3});for(let I0 of[-1,1]){let h0=new F0(new v8(0.06,6,6),X0);h0.position.set(I0*(K0+0.25),ZJ,O0),XJ.add(h0)}let $0=new r0({color:13404415,emissive:11158783,emissiveIntensity:2}),g=new F0(new B7(0.1,0),$0);g.position.set(0,ZJ,O0),XJ.add(g);let o=new hJ({color:16777215,transparent:!0,opacity:0.6}),f=new F0(new B7(0.05,0),o);f.position.set(0,ZJ,O0),XJ.add(f);let _=new hJ({color:13404415,transparent:!0,opacity:0.08,side:PJ}),h=new F0(new u0(0.02,ZJ-0.5,0.02),_);h.position.set(0,0.5+(ZJ-0.5)/2,O0),XJ.add(h);let r=new hJ({color:13404415,transparent:!0,opacity:0.15,side:PJ}),m=new F0(new V9(0.1,0.25,16,1),r);m.rotation.x=-Math.PI/2,m.position.set(0,0.52,O0),XJ.add(m),Q.add(XJ);let w=new X8,p0=new r0({color:3809376,roughness:0.4,metalness:0.6,emissive:1706544,emissiveIntensity:0.3}),m0=new r0({color:13404415,roughness:0.2,metalness:0.8,emissive:11158783,emissiveIntensity:0.6}),s0=new r0({color:4469640,roughness:0.3,metalness:0.7,emissive:2232678,emissiveIntensity:0.4}),y=3.2-t/2,JJ=new F0(new u0(y,S,j),p0);JJ.position.set(-(t/2+y/2),0.54+S/2,k),JJ.castShadow=!0,JJ.receiveShadow=!0,w.add(JJ);let b0=new F0(new u0(y,S,j),p0);b0.position.set(t/2+y/2,0.54+S/2,k),b0.castShadow=!0,b0.receiveShadow=!0,w.add(b0);let l0=6.4,N=S+0.06,q=new F0(new u0(l0,N,0.06),m0);q.position.set(0,0.54+N/2,k+j/2),w.add(q);let I=S+0.22,v=0.54+I/2,l=new F0(new u0(l0,I,0.06),s0);l.position.set(0,v,k-j/2),l.castShadow=!0,w.add(l);for(let I0 of[-1,1]){let h0=S+0.12,YJ=new F0(new u0(0.06,h0,j),s0);YJ.position.set(I0*(l0/2),0.54+h0/2,k),w.add(YJ)}let U0=new r0({color:13404415,emissive:11158783,emissiveIntensity:1.5}),G0=new F0(new u0(l0,0.02,0.02),U0);G0.position.set(0,0.54+S+0.01,k+j/2+0.02),w.add(G0);let e=[],Z0=[16732120,3799039,16767053,8086015];for(let I0=0;I0<16;I0++){let h0=new hJ({color:Z0[I0%Z0.length],transparent:!0,opacity:0.8}),YJ=new F0(new v8(0.035,8,8),h0);YJ.position.set(-l0/2+0.18+I0*(l0-0.36)/15,0.54+S+0.035,k+j/2+0.035),w.add(YJ),e.push({mesh:YJ,phase:I0*0.55})}Q.add(w);let k0=k,P0=k,V0=0,D0=-1,g0=2.8,c0=new r0({color:2757734,roughness:0.4,metalness:0,transparent:!0,opacity:0.2,side:PJ,emissive:656416,emissiveIntensity:0.18,depthWrite:!1}),WJ=new F0(new u0(7.3,g0,0.2),c0);WJ.position.set(0,0.5+g0/2,-4.05),WJ.castShadow=!1,WJ.receiveShadow=!1,WJ.renderOrder=1,Q.add(WJ);let b=new hJ({color:10181046,transparent:!0,opacity:0.08,blending:f8,side:PJ,depthWrite:!1}),R0=new F0(new y8(7.25,g0-0.1),b);R0.position.set(0,0.5+g0/2,-3.9299999999999997);let W0=new r0({color:13404415,emissive:11158783,emissiveIntensity:2}),B0=new F0(new u0(7.15,0.03,0.03),W0);B0.position.set(0,0.62,-3.9099999999999997),Q.add(B0),R0.renderOrder=2,Q.add(R0);let S0=new r0({color:16766720,emissive:16755200,emissiveIntensity:2.2}),H0=0.06,z0=7.25,$J=g0+0.1;[{x:0,y:0.5+g0+0.07,w:z0},{x:0,y:0.44,w:z0}].forEach(({x:I0,y:h0,w:YJ})=>{let UJ=new F0(new u0(YJ,H0,H0),S0);UJ.position.set(I0,h0,-3.94),Q.add(UJ)}),[{x:-z0/2+H0/2},{x:z0/2-H0/2}].forEach(({x:I0})=>{let h0=new F0(new u0(H0,$J,H0),S0);h0.position.set(I0,0.5+g0/2,-3.94),Q.add(h0)});let GJ=new X8;GJ.position.set(0,1.8,-3.92),Q.add(GJ);let kJ=new r0({color:16766720,emissive:13142528,emissiveIntensity:1.4,roughness:0.12,metalness:0.95}),q8=new F0(new mJ(0.78,0.78,0.16,32),kJ);q8.rotation.z=Math.PI/2,GJ.add(q8);let D8=new r0({color:16774307,emissive:16766720,emissiveIntensity:1.8}),w7=new F0(new L7(0.62,0.025,8,32),D8);w7.rotation.y=Math.PI/2,w7.position.z=0.085,GJ.add(w7);let a9=new F0(new L7(0.5,0.02,8,24),D8);a9.rotation.y=Math.PI/2,a9.position.z=0.09,GJ.add(a9);let A8=new r0({color:16774307,emissive:16766720,emissiveIntensity:2.6}),Z6=new F0(new u0(0.06,0.6,0.04),A8);Z6.position.set(0,0,0.09),GJ.add(Z6);let C7=new F0(new u0(0.24,0.06,0.04),A8);C7.position.set(0,0.22,0.09),GJ.add(C7);let T7=new F0(new u0(0.24,0.06,0.04),A8);T7.position.set(0,-0.22,0.09),GJ.add(T7);let E8=new F0(new u0(0.13,0.05,0.04),A8);E8.position.set(-0.04,0.07,0.09),GJ.add(E8);let K9=new F0(new u0(0.13,0.05,0.04),A8);K9.position.set(0.04,-0.07,0.09),GJ.add(K9),[-0.09].forEach((I0)=>{let h0=new F0(new u0(0.13,0.05,0.04),A8);h0.position.set(-E8.position.x,-E8.position.y,I0),GJ.add(h0);let YJ=new F0(new u0(0.13,0.05,0.04),A8);YJ.position.set(-K9.position.x,-K9.position.y,I0),GJ.add(YJ)});function X6(){let YJ=document.createElement("canvas");YJ.width=1024,YJ.height=224;let UJ=YJ.getContext("2d"),eJ=UJ.createLinearGradient(0,0,0,224);eJ.addColorStop(0,"#ffe9a3"),eJ.addColorStop(0.5,"#ffd700"),eJ.addColorStop(1,"#b8860b"),UJ.fillStyle=eJ,UJ.fillRect(0,0,1024,224),UJ.fillStyle="#150527",UJ.fillRect(14,14,996,196),UJ.strokeStyle="rgba(255, 215, 0, 0.55)",UJ.lineWidth=3,UJ.strokeRect(26,26,972,172),UJ.textAlign="center",UJ.textBaseline="middle",UJ.font="900 104px Orbitron, Arial, sans-serif";let Z8=UJ.createLinearGradient(0,56,0,190.4);Z8.addColorStop(0,"#fff8d0"),Z8.addColorStop(0.45,"#ffd700"),Z8.addColorStop(1,"#e8930c"),UJ.shadowColor="rgba(255, 200, 40, 0.95)",UJ.shadowBlur=34,UJ.fillStyle=Z8,UJ.fillText("COIN PUSHER",512,116),UJ.shadowBlur=0,UJ.fillStyle="rgba(255, 215, 0, 0.9)",UJ.font="900 58px Orbitron, Arial, sans-serif",UJ.fillText("✦",82,114),UJ.fillText("✦",942,114);let cJ=new m8(YJ);return cJ.colorSpace=g8,cJ.anisotropy=4,cJ}let Y6=new hJ({map:X6(),transparent:!0,side:PJ,toneMapped:!1}),W9=new F0(new y8(4.2,0.72),Y6);W9.position.set(0,3.45,-3.92),Q.add(W9);let S7=[];[-2.55,2.55].forEach((I0,h0)=>{let YJ=new r0({color:16766720,roughness:0.18,metalness:0.92,emissive:13404160,emissiveIntensity:0.7}),UJ=new F0(new mJ(0.15,0.18,2.2,12),YJ);UJ.position.set(I0,1.8,-3.92),Q.add(UJ);let eJ=new F0(new mJ(0.22,0.18,0.18,12),YJ);eJ.position.set(I0,3,-3.92),Q.add(eJ);let Z8=new F0(new mJ(0.22,0.24,0.12,12),YJ);Z8.position.set(I0,0.75,-3.92),Q.add(Z8);let cJ=new F0(new v8(0.1,16,16),new hJ({color:16770688,transparent:!0,opacity:0.85}));cJ.position.set(I0,3.2,-3.92),Q.add(cJ);let M8=[16720452,4521864,4491519,16755234,13395711];for(let TJ=0;TJ<5;TJ++){let J8=new r0({color:M8[TJ%M8.length],emissive:M8[TJ%M8.length],emissiveIntensity:0.45,roughness:0.3,metalness:0.5}),X9=new F0(new mJ(0.2,0.2,0.045,12),J8);X9.position.set(I0+(h0===0?-0.4:0.4),0.9+TJ*0.05,-3.8899999999999997),Q.add(X9)}S7.push({orb:cJ,phase:h0*0.5})}),[-3.25,3.25].forEach((I0)=>{let h0=new X8;h0.position.set(I0,2.55,-3.92);let YJ=new r0({color:16766720,emissive:16755200,emissiveIntensity:2.2}),UJ=new F0(new u0(0.08,0.78,0.05),YJ);h0.add(UJ);let eJ=new F0(new u0(0.32,0.08,0.05),YJ);eJ.position.y=0.28,h0.add(eJ);let Z8=new F0(new u0(0.32,0.08,0.05),YJ);Z8.position.y=-0.28,h0.add(Z8);let cJ=new F0(new u0(0.18,0.06,0.05),YJ);cJ.position.set(-0.05,0.1,0),h0.add(cJ);let M8=new F0(new u0(0.18,0.06,0.05),YJ);M8.position.set(0.05,-0.1,0),h0.add(M8),Q.add(h0)}),Q.userData=Q.userData||{},Q.userData.wallAnims={heroCoinGroup:GJ,sideColumns:S7,frameGoldMat:S0,marquee:W9,shelfNeonMat:U0,shelfBulbs:e,zoneLeds:O};let r9=new r0({color:1706037,roughness:0.4,metalness:0.7,emissive:656416,emissiveIntensity:0.1}),H6=new r0({color:3351142,roughness:0.25,metalness:0.9,emissive:2232661,emissiveIntensity:0.2}),c8=3.2;[-3.75,3.75].forEach((I0,h0)=>{let YJ=new F0(new u0(0.4,c8,6.4),r9);YJ.position.set(I0,0.5+c8/2,0),YJ.castShadow=!0,Q.add(YJ);let UJ=new F0(new u0(0.42,c8,0.05),H6);UJ.position.set(I0,0.5+c8/2,3.15),Q.add(UJ);let eJ=new F0(new u0(0.44,c8*0.8,0.03),new r0({color:16766720,emissive:11171584,emissiveIntensity:0.3,metalness:0.92,roughness:0.15}));eJ.position.set(I0,0.5+c8*0.6,3.16),Q.add(eJ);let Z8=new hJ({color:524818,transparent:!0,opacity:0.4});for(let cJ=0;cJ<4;cJ++){let M8=new F0(new u0(0.04,0.55,0.01),Z8);M8.position.set(I0+(h0===0?0.1:-0.1),2.3+cJ*0.7,-1.5),Q.add(M8)}});let RQ=new z7({color:12312063,transparent:!0,opacity:0.06,roughness:0.02,metalness:0,side:PJ,depthWrite:!1}),j7=new F0(new u0(6.8,2.2,0.04),RQ);j7.position.set(0,2.3,1.5),j7.renderOrder=4,Q.add(j7);let y7=new F0(new u0(7.3,2.5,0.06),new z7({color:14531583,transparent:!0,opacity:0.04,roughness:0.05,metalness:0,side:PJ,depthWrite:!1}));y7.position.set(0,2.5,-3.5),y7.renderOrder=3,Q.add(y7);let kQ=new r0({color:8943564,roughness:0.2,metalness:0.8,emissive:4469674,emissiveIntensity:0.1});[[-3.65,1.5],[3.65,1.5]].forEach(([I0,h0])=>{let YJ=new F0(new u0(0.06,2.3,0.06),kQ);YJ.position.set(I0,2.3,h0),Q.add(YJ)});let B=3,p=[{type:"hole",width:1},{type:"win",width:4.4},{type:"hole",width:1}],a=[],c=-3.2;for(let I0=0;I0<B;I0++){let h0=p[I0].width;a.push({startX:c,endX:c+h0,centerX:c+h0/2,type:p[I0].type,width:h0}),c+=h0}let s=new r0({color:1837624,roughness:0.4,metalness:0.6,emissive:853024,emissiveIntensity:0.3,side:PJ}),T0=new r0({color:3351142,roughness:0.3,metalness:0.8,emissive:1706544,emissiveIntensity:0.25,side:PJ}),j0=new z7({color:10079487,transparent:!0,opacity:0.12,roughness:0.05,metalness:0,side:PJ,depthWrite:!1}),_0=new r0({color:16766720,roughness:0.15,metalness:0.9,emissive:8939008,emissiveIntensity:0.35}),f0=1.6,x0=3.4,t0=0.32000000000000006,e0=0.09999999999999998,d0=x0-f0,DJ=Math.atan2(t0-e0,d0),_J=(f0+x0)/2,BJ=new F0(new u0(6.5,0.03,d0),s);BJ.position.set(0,(t0+e0)/2,_J),BJ.rotation.x=DJ,BJ.receiveShadow=!0,Q.add(BJ);for(let I0 of[-1,1]){let h0=new F0(new u0(0.04,0.3,d0),j0);h0.position.set(I0*6.5/2,(t0+e0)/2+0.1,_J),h0.rotation.x=DJ,Q.add(h0)}let EJ=new F0(new u0(7.6,0.04,0.55),s);EJ.position.set(0,e0-0.02,x0+0.2),EJ.receiveShadow=!0,Q.add(EJ);for(let I0 of[-1,1]){let h0=new F0(new u0(0.05,0.55,0.6),j0);h0.position.set(I0*7.6/2,e0+0.26,x0+0.2),Q.add(h0)}let jJ=new F0(new u0(7.6,0.55,0.04),j0);jJ.position.set(0,e0+0.27,x0+0.5),jJ.renderOrder=5,Q.add(jJ);let y0=new F0(new u0(7.64,0.035,0.05),_0);y0.position.set(0,e0+0.55,x0+0.5),Q.add(y0);let rJ={win:new r0({color:65416,emissive:65348,emissiveIntensity:2.6}),hole:new r0({color:16720452,emissive:16711714,emissiveIntensity:2.6})};a.forEach((I0)=>{let h0=new F0(new u0(I0.width-0.05,0.03,0.03),rJ[I0.type]);h0.position.set(I0.centerX,t0+0.05,f0-0.03),Q.add(h0),O.push({mesh:h0,type:I0.type,phase:I0.centerX*0.7})});let NJ=k+j/2+0.2,tJ=1.55,W8=0.18,R8=tJ-NJ,Z9=new r0({color:3807829,roughness:0.6,metalness:0.3,emissive:1706544,emissiveIntensity:0.2}),OJ=new F0(new u0(6.5,0.02,R8),Z9);OJ.position.set(0,0.54-W8/2,NJ+R8/2),OJ.rotation.x=Math.atan2(W8,R8),OJ.receiveShadow=!0,Q.add(OJ);let CJ=new r0({color:4517631,emissive:2280703,emissiveIntensity:1.2});[[-3.2,-2.6,4.5],[3.2,-2.6,4.5]].forEach(([I0,h0,YJ])=>{let UJ=new F0(new u0(0.02,0.02,YJ),CJ);UJ.position.set(I0,0.8,h0),Q.add(UJ)}),J.add(Q);let k8=0;function MJ(I0){let h0=Math.sin(I0*0.6)*(K0-0.2);k8=h0;let YJ=I0*i,UJ=Math.sin(YJ),eJ=UJ>0?Math.pow(UJ,1.3):-Math.pow(-UJ,0.7),Z8=k+eJ*L;g.position.x=h0,f.position.x=h0,h.position.x=h0,h.position.z=O0,h.position.y=0.5+(ZJ-0.5)/2,h.scale.y=1+Math.sin(I0*0.6)*0.1,m.position.x=h0,m.position.z=O0;let cJ=0.8+0.2*Math.sin(I0*1.2);m.material.opacity=0.1+0.15*cJ,g.position.y=ZJ+Math.sin(I0*2+h0)*0.02,f.position.y=g.position.y,g.rotation.x=I0*0.5,g.rotation.y=I0*0.3,f.rotation.x=g.rotation.x,f.rotation.y=g.rotation.y,P0=k0,k0=Z8;let M8=Math.max(I0-D0,0.001);if(D0<0)V0=0;else V0=(k0-P0)/M8;D0=I0,w.position.z=k0-k,w0.position.x=k8;let TJ=Q.userData&&Q.userData.wallAnims;if(TJ){if(TJ.heroCoinGroup)TJ.heroCoinGroup.rotation.y=I0*0.28;if(TJ.marquee){let J8=0.5+0.5*Math.sin(I0*1.2);TJ.marquee.scale.set(1+0.02*J8,1+0.02*J8,1)}if(TJ.sideColumns)for(let J8 of TJ.sideColumns)J8.orb.material.opacity=0.6+0.4*Math.sin(I0*2+J8.phase);if(TJ.frameGoldMat)TJ.frameGoldMat.emissiveIntensity=1.6+1*Math.sin(I0*0.9);if(TJ.shelfNeonMat)TJ.shelfNeonMat.emissiveIntensity=1.25+0.8*(0.5+0.5*Math.sin(I0*2.2));if(TJ.shelfBulbs)for(let J8 of TJ.shelfBulbs){let X9=0.5+0.5*Math.sin(I0*4.5-J8.phase);J8.mesh.material.opacity=0.3+X9*0.7,J8.mesh.scale.setScalar(0.8+X9*0.5)}if(TJ.zoneLeds)for(let J8 of TJ.zoneLeds){let X9=0.5+0.5*Math.sin(I0*2.6+J8.phase);J8.mesh.material.emissiveIntensity=J8.type==="win"?2.1+X9*1.5:1.7+X9*1.1}}}return{group:Q,width:7,depth:6,height:0.5,surfaceY:0.54,backZ:-2.75,frontDropZ:1.6,leftX:-3.2,rightX:3.2,winZ:2.6,zones:a,getZoneType(I0){for(let h0 of a)if(I0>=h0.startX&&I0<h0.endX)return h0.type;return"hole"},mechX:0,get dropX(){return k8},dropZ:E0,dropHeight:3.5,updateMechanism:MJ,get shelfZ(){return k0},get shelfVelocity(){return V0},get shelfFrontZ(){return k0+j/2},get shelfBackZ(){return k0-j/2},shelfSurfaceY:n,shelfThickness:S,slotCenterZ:J0,slotBackZ:Q0,slotFrontZ:d,slotWidth:t,slotHalfWidth:t/2,shelfAmplitude:L,shelfSpeed:i,shelfNeutralZ:k,shelfDepth:j,slopeStartZ:NJ,slopeEndZ:tJ,slopeDrop:W8}}var i9=0.06,RN=0.5,kN=0.22,HQ=0.01,MN=0.2,VN=0.28,iZ=0.008,K6=6000,BN=2.8,F8=0.3,oZ=14,aZ=0.1,rZ=0.35,UQ=2.5,$8=0.28,LN=0.25,zN=0.15,tZ=0,IN=6,z9=0.6;function eZ(J,Q,$=0,K=null){tZ=$;let W=[],Z=0,X=new X8;J.add(X);function Y(g,o,f,_,h,r){g.beginPath();for(let m=0;m<_*2;m++){let w=m%2===0?h:r,p0=m*Math.PI/_-Math.PI/2,m0=o+Math.cos(p0)*w,s0=f+Math.sin(p0)*w;if(m===0)g.moveTo(m0,s0);else g.lineTo(m0,s0)}g.closePath(),g.fill()}function H(g){let f=document.createElement("canvas");f.width=128,f.height=128;let _=f.getContext("2d"),h=64,r=64,m=62,w=[["#fff3c0","#f2c94c","#b8860b"],["#fffbe6","#ffe27a","#c9951e"],["#ffe9a3","#f0b63a","#a06a12"]],[p0,m0,s0]=w[g%w.length],y=_.createRadialGradient(h-12,r-12,m*0.15,h,r,m);y.addColorStop(0,p0),y.addColorStop(0.65,m0),y.addColorStop(1,s0),_.fillStyle=y,_.beginPath(),_.arc(h,r,m,0,Math.PI*2),_.fill(),_.strokeStyle="rgba(90,60,10,0.9)",_.lineWidth=7,_.beginPath(),_.arc(h,r,m-2,0,Math.PI*2),_.stroke(),_.strokeStyle="rgba(255,246,200,0.55)",_.lineWidth=2,_.beginPath(),_.arc(h,r,m-9,0,Math.PI*2),_.stroke(),_.strokeStyle="rgba(255,255,255,0.35)",_.lineWidth=3,_.beginPath(),_.arc(h,r,m*0.6,0,Math.PI*2),_.stroke(),_.strokeStyle="rgba(90,60,10,0.45)",_.lineWidth=2;for(let b0=0;b0<48;b0++){let l0=b0/48*Math.PI*2;_.beginPath(),_.moveTo(h+Math.cos(l0)*(m-2),r+Math.sin(l0)*(m-2)),_.lineTo(h+Math.cos(l0)*(m-8),r+Math.sin(l0)*(m-8)),_.stroke()}if(_.fillStyle="rgba(110,68,0,0.95)",_.textAlign="center",_.textBaseline="middle",g%3===0)_.font="900 62px Arial",_.fillText("1",h,r+5);else if(g%3===1)Y(_,h,r-2,5,m*0.42,m*0.19);else _.font="900 58px Arial",_.fillText("C",h,r+5);_.strokeStyle="rgba(255,255,255,0.22)",_.lineWidth=3,_.beginPath(),_.arc(h-7,r-7,m*0.78,Math.PI,Math.PI*1.7),_.stroke();let JJ=new m8(f);return JJ.colorSpace=g8,JJ}function U(g){let _=document.createElement("canvas");_.width=256,_.height=128;let h=_.getContext("2d"),r=h.createLinearGradient(0,0,0,128);r.addColorStop(0,g%2?"#3ddc84":"#2ecf7e"),r.addColorStop(1,g%2?"#1aa864":"#0f8f52"),h.fillStyle=r,h.fillRect(0,0,256,128),h.strokeStyle="rgba(255,255,255,0.85)",h.lineWidth=5,h.strokeRect(7,7,242,114),h.strokeStyle="rgba(0,80,40,0.8)",h.lineWidth=2,h.strokeRect(13,13,230,102),h.fillStyle="rgba(255,255,255,0.95)",h.textAlign="center",h.textBaseline="middle",h.font="900 92px Arial",h.fillText("$",128,68),h.font="900 26px Arial",h.fillText("10",30,26),h.fillText("10",226,102);let m=new m8(_);return m.colorSpace=g8,m}function D(g){let _=document.createElement("canvas");_.width=128,_.height=176;let h=_.getContext("2d");h.fillStyle="#fdf6ec",h.fillRect(0,0,128,176),h.strokeStyle="rgba(60,20,80,0.8)",h.lineWidth=6,h.strokeRect(4,4,120,168),h.strokeStyle="rgba(60,20,80,0.35)",h.lineWidth=2,h.strokeRect(12,12,104,152);let r=g===0||g===1;h.fillStyle=r?"#e02a4d":"#2b2b33";let m=["♥","♦","♠","♣"];h.font="70px serif",h.fillText(m[g%4],64,92),h.font="900 30px serif",h.fillText("A",26,28),h.fillText("A",102,148);let w=new m8(_);return w.colorSpace=g8,w}let O=new mJ($8*0.97,$8,i9,32),G=new u0(RN,HQ,kN),R=new u0(MN,iZ,VN),M=[0,1,2].map((g)=>new r0({map:H(g),roughness:0.3,metalness:0.9,emissive:5583616,emissiveIntensity:0.07})),z=new r0({color:13212218,roughness:0.35,metalness:0.92,emissive:5583616,emissiveIntensity:0.07}),E={coin:[0,1,2].map((g)=>[z,M[g],M[g]]),bill:[0,1].map((g)=>new r0({map:U(g),roughness:0.4,metalness:0.05,emissive:13073,emissiveIntensity:0.1})),card:[0,1,2,3].map((g)=>new r0({map:D(g),roughness:0.65,metalness:0,emissive:2228292,emissiveIntensity:0.04}))};function F(g){if(g==="coin")return $8;if(g==="dollar")return LN;return zN}function T(g){if(g==="coin")return i9/2;if(g==="dollar")return HQ/2;return iZ/2}let A=new Map;function V(){A.clear()}function P(g,o){return g*73856093^o*19349663}function C(g){let o=Math.floor(g.x/z9),f=Math.floor(g.z/z9),_=P(o,f),h=A.get(_);if(!h)h=[],A.set(_,h);h.push(g)}function j(g){let o=Math.floor(g.x/z9),f=Math.floor(g.z/z9),_=[];for(let h=-1;h<=1;h++)for(let r=-1;r<=1;r++){let m=A.get(P(o+h,f+r));if(m)for(let w=0;w<m.length;w++)_.push(m[w])}return _}function k(g,o,f){let _=new F0(O,E.coin[Math.floor(Math.random()*3)]);return _.position.set(g,f,o),_.rotation.y=Math.random()*Math.PI*2,_.castShadow=!0,_.receiveShadow=!0,X.add(_),_}function L(g,o,f){let _=new F0(G,E.bill[Math.floor(Math.random()*2)]);return _.position.set(g,f,o),_.rotation.y=Math.random()*Math.PI*2,_.castShadow=!0,_.receiveShadow=!0,X.add(_),_}function i(g,o){let f=Q.shelfSurfaceY+0.1,_=E.card[Math.floor(Math.random()*4)],h=new F0(R,_);h.position.set(g,f,o),h.rotation.y=Math.random()*Math.PI*2,h.castShadow=!0,h.receiveShadow=!0,X.add(h);let r=`card_${++tZ}`;return h.userData={isCard:!0,cardId:r,collected:!1},h}function S(g,o,f,_,h="sliding"){let r;if(g==="card")r=i(o,f),_=r.position.y,h="floating";else if(g==="dollar")r=L(o,f,_);else r=k(o,f,_);let m={mesh:r,type:g,x:o,y:_,z:f,vx:0,vy:0,vz:0,state:h,yawVelocity:(Math.random()-0.5)*0.12,spin:0,_dropTime:0,_slotTimer:0};return W.push(m),m}function n(g=55,o=6){u();let f=Math.floor(g*0.6);for(let _=0;_<Math.min(f,K6);_++){let h=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),r=Q.shelfBackZ+0.2+Math.random()*(Q.shelfAmplitude*1.2),m=Q.shelfSurfaceY+i9/2,w=S("coin",h,r,m,"sliding");w.onShelf=!0,w.vz=(Math.random()-0.5)*0.05}for(let _=0;_<Math.min(g-f,K6);_++){let h=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),r=Q.frontDropZ-0.5+Math.random()*0.8;S("coin",h,r,Q.surfaceY+i9/2,"sliding")}for(let _=0;_<Math.min(o,K6-g);_++){let h=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),r=Q.shelfBackZ+0.3+Math.random()*(Q.shelfDepth*0.5),m=S("dollar",h,r,Q.shelfSurfaceY+HQ/2,"sliding");m.onShelf=!0}for(let _=0;_<3;_++){let h=Q.leftX+0.5+Math.random()*(Q.rightX-Q.leftX-1),r=Q.shelfBackZ+0.5+Math.random()*(Q.shelfDepth*0.5),m=S("card",h,r);m.vz=0.06+Math.random()*0.07}for(let _=0;_<8;_++)d(),Y0(),N0();for(let _ of W)if(_.state==="sliding"&&_.type!=="card")_.y=Math.max(_.y,t(_));J0(2);for(let _=0;_<10;_++)d(),Y0(),N0();for(let _ of W)if(_.state==="sliding"&&_.type!=="card")_.y=Math.max(_.y,t(_))}function J0(g){for(let o=0;o<g;o++){let f=Q.leftX+1.2+Math.random()*(Q.rightX-Q.leftX-2.4),_=Q.shelfBackZ+0.6+Math.random()*(Q.shelfDepth-1.8),h=6+Math.floor(Math.random()*6);for(let r=0;r<h;r++){let m=Math.sin(r*0.3)*0.006,w=Math.cos(r*0.4)*0.006,p0=Q.shelfSurfaceY+i9/2+r*(i9+0.001),m0=S("coin",f+m,_+w,p0,"sliding");m0.onShelf=!0,m0.vy=0}}}function u(){W.forEach((g)=>X.remove(g.mesh)),W.length=0}function t(g){let o=T(g.type);if(g.onShelf)return Q.shelfSurfaceY+o;if(g.z>Q.slopeStartZ&&g.z<Q.frontDropZ){let f=Math.max(0,Math.min(1,(g.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ)));return Q.surfaceY+o-f*Q.slopeDrop}return Q.surfaceY+o}function Q0(g){let o=$8*4;for(let f=0;f<W.length;f++){let _=W[f];if(_===g||_.onShelf||_.state!=="sliding")continue;let h=_.x-g.x,r=_.z-g.z,m=Math.sqrt(h*h+r*r);if(m<o&&m>0.01){let w=(1-m/o)*0.3;_.vx+=h/m*w,_.vz+=r/m*w*0.5}}}function d(){V();let g=new Map;for(let f=0;f<W.length;f++){let _=W[f];if(g.set(_,f),_.state==="dropping"||_.state==="falling")continue;C(_)}let o=new Set;for(let f=0;f<W.length;f++){let _=W[f];if(_.state==="dropping"||_.state==="falling")continue;if(_.state==="floating")continue;let h=j(_);for(let r=0;r<h.length;r++){let m=h[r];if(m===_)continue;let w=g.get(m);if(w===void 0)continue;let p0=f<w?`${f}:${w}`:`${w}:${f}`;if(o.has(p0))continue;o.add(p0);let m0=F(_.type),s0=F(m.type),y=m0+s0+0.02,JJ=m.x-_.x,b0=m.z-_.z,l0=Math.sqrt(JJ*JJ+b0*b0);if(l0<y&&l0>0.001){let N=y-l0,q=JJ/l0,I=b0/l0;if(_.state==="falling"&&m.state==="sliding")m.vz+=N*0.3,m.vx+=(Math.random()-0.5)*N*0.15,_.vx-=q*N*0.15,_.vz-=I*N*0.15;else if(m.state==="falling"&&_.state==="sliding")_.vz+=N*0.3,_.vx+=(Math.random()-0.5)*N*0.15,m.vx-=q*N*0.15,m.vz-=I*N*0.15;else{let v=N*0.3;_.x-=q*v,_.z-=I*v,m.x+=q*v,m.z+=I*v;let l=(m.vx-_.vx)*q+(m.vz-_.vz)*I;if(l<0){let U0=performance.now();if(K&&_.type==="coin"&&m.type==="coin"&&l<-0.18&&U0-Z>42)Z=U0,K(_.x+q*m0,_.y,_.z+I*m0,Math.min(1,Math.abs(l)));let G0=l*F8*0.5;_.vx+=G0*q,_.vz+=G0*I,m.vx-=G0*q,m.vz-=G0*I}}}}}for(let f=0;f<W.length;f++){let _=W[f];if(_.type==="card")continue;if(Math.abs(_.vx)>UQ)_.vx=Math.sign(_.vx)*UQ;if(Math.abs(_.vz)>UQ)_.vz=Math.sign(_.vz)*UQ}}function Y0(){let g=new Map;for(let o=0;o<W.length;o++){let f=W[o];if(f.type==="card"||f.state==="falling"||f.state==="dropping")continue;let _=Math.floor(f.x/z9),h=Math.floor(f.z/z9),r=P(_,h),m=g.get(r);if(!m)m=[],g.set(r,m);m.push(f)}for(let o=0;o<2;o++)for(let f=0;f<W.length;f++){let _=W[f];if(_.type==="card"||_.state==="falling"||_.state==="dropping")continue;let h=T(_.type),r=F(_.type),m=t(_)-h,w=Math.floor(_.x/z9),p0=Math.floor(_.z/z9);for(let s0=-1;s0<=1;s0++)for(let y=-1;y<=1;y++){let JJ=g.get(P(w+s0,p0+y));if(!JJ)continue;for(let b0=0;b0<JJ.length;b0++){let l0=JJ[b0];if(l0===_)continue;let N=F(l0.type),q=l0.x-_.x,I=l0.z-_.z;if(Math.sqrt(q*q+I*I)>r+N*0.95)continue;let l=T(l0.type),U0=l0.y+l;if(U0<_.y-h+0.02&&U0>m)m=U0}}let m0=m+h;if(_.y<m0-0.001){if(_.y=m0,_.vy<0)_.vy=0}}}function N0(){for(let g=0;g<W.length;g++){let o=W[g];if(o.state==="dropping"||o.state==="falling")continue;let f=F(o.type),_=Math.max(0,(o.z-Q.backZ)/(Q.frontDropZ-Q.backZ)),h=Q.leftX+f+_*0.05,r=Q.rightX-f-_*0.05;if(o.x<h)o.x=h,o.vx=Math.abs(o.vx)*F8*0.5;if(o.x>r)o.x=r,o.vx=-Math.abs(o.vx)*F8*0.5;if(o.z<Q.backZ+f)o.z=Q.backZ+f,o.vz=Math.abs(o.vz)*F8;if(o.onShelf&&o.z<Q.shelfBackZ+f+0.03)o.z=Q.shelfBackZ+f+0.03,o.vz=Math.abs(o.vz)*F8;if(!o.onShelf&&o.z<Q.backZ+f)o.z=Q.backZ+f,o.vz=Math.abs(o.vz)*F8}}function E0(g){let o=Q.shelfFrontZ,f=Q.shelfBackZ-0.5,_=Math.max(0,Q.shelfVelocity)*0.8;for(let h=0;h<W.length;h++){let r=W[h];if(r.onShelf||r.state!=="sliding"||r.type==="card")continue;if(r.z>f&&r.z<o+1.5){let m=o-r.z,w=Math.max(0,1-m/2);r.vz+=_*w*g}if(Q.shelfVelocity>0){let m=Q.shelfFrontZ,w=m+F(r.type)+0.02;if(r.z<w&&r.z>m-0.35){if(r.z+=Math.min(w-r.z,Q.shelfVelocity*g*2),r.vz<0.2)r.vz=0.2}}}}function v0(g=1,o="coin"){if(W.length>=K6){let m=[];for(let w=0;w<W.length&&m.length<3;w++)if(W[w].type!=="card"&&W[w].state==="sliding")m.push(w);m.reverse().forEach((w)=>{X.remove(W[w].mesh),W.splice(w,1)})}let f=Q.dropX+(Math.random()-0.5)*0.08,_=Q.dropZ,h=Q.dropHeight,r=S(o,f,_,h,"falling");return r.y=h,r.vy=-0.2,r.vz=(Math.random()-0.5)*0.05+g*0.02,r.vx=(Math.random()-0.5)*0.05,r.spin=6+Math.random()*3,r._dropTime=performance.now(),r}function w0(){let g={win:{coins:0,dollars:0,cards:[]},hole:{coins:0,dollars:0,cards:[]}},o=[];for(let f=0;f<W.length;f++){let _=W[f],h=_.z>Q.frontDropZ&&_.y<Q.surfaceY-0.05;if(_.z>Q.winZ||h){let r=Q.getZoneType(_.x);if(_.type==="card")g[r].cards.push(_.mesh.userData.cardId);else if(_.type==="dollar")g[r].dollars++;else g[r].coins++;o.push(f)}}return o.reverse().forEach((f)=>{X.remove(W[f].mesh),W.splice(f,1)}),g}function XJ(g,o){let _=g/4;for(let r=0;r<4;r++){for(let m=0;m<W.length;m++){let w=W[m];if(w.type==="card"||w.state==="floating")continue;if(w.state==="falling"){w.vy-=oZ*_,w.y+=w.vy*_,w.x+=w.vx*_,w.z+=w.vz*_;let p0=Math.abs(w.x)<Q.slotHalfWidth,m0=w.z>Q.slotBackZ&&w.z<Q.slotFrontZ,s0=!(p0&&m0),y=T(w.type),JJ=Q.shelfSurfaceY+y,b0=Q.surfaceY+y;if(s0&&w.y<=JJ){if(w.y=JJ,w.vy*=-rZ,Math.abs(w.vy)<=aZ)w.vy=0,w.vx*=0.5,w.vz*=0.5,w.state="sliding",w.onShelf=!0,w.mesh.rotation.x=0,w.mesh.rotation.z=0}else if(w.y<=b0){if(w.y=b0,w.vy*=-rZ,Math.abs(w.vy)<=aZ)w.vy=0,w.vx*=0.5,w.vz*=0.5,w.state="sliding",w.onShelf=!1,w.mesh.rotation.x=0,w.mesh.rotation.z=0}}if(w.state==="dropping"){if(w.vy-=oZ*_,w.x<Q.leftX+$8)w.x=Q.leftX+$8,w.vx=Math.abs(w.vx)*F8;if(w.x>Q.rightX-$8)w.x=Q.rightX-$8,w.vx=-Math.abs(w.vx)*F8;if(w.z>=Q.frontDropZ)w.vz+=4*_,w.vx*=0.98;else w.vx*=0.95,w.vz*=0.93;if(w.y+=w.vy*_,w.z+=w.vz*_,w.x+=w.vx*_,w.y<=Q.surfaceY+T(w.type)&&w.z<Q.frontDropZ){let p0=Q.surfaceY+T(w.type);if(w.z>Q.slopeStartZ&&w.z<Q.slopeEndZ){let m0=Math.max(0,Math.min(1,(w.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ)));p0=Q.surfaceY+T(w.type)-m0*Q.slopeDrop}w.y=p0,w.vy=0,w.vx*=0.3,w.vz*=0.3,w.state="sliding",w.onShelf=!1,w.mesh.rotation.x=0,w.mesh.rotation.z=0}}if(w.state==="sliding"){if(w.onShelf){let m0=Math.abs(w.x)<Q.slotHalfWidth,s0=w.z>Q.slotBackZ&&w.z<Q.slotFrontZ;if(performance.now()-(w._dropTime||0)<500||m0&&s0)w._slotTimer=(w._slotTimer||0)+_;else{let JJ=Q.shelfVelocity>0?2.2:1.1;w.vz+=(Q.shelfVelocity-w.vz)*JJ*_}}w.x+=w.vx*_,w.z+=w.vz*_;let p0=Math.exp(-BN*_);if(w.vx*=p0,w.vz*=p0,Math.abs(w.vx)<0.004)w.vx=0;if(Math.abs(w.vz)<0.004)w.vz=0;if(w.onShelf){let m0=Q.shelfBackZ+$8+0.03;if(w.z<m0)if(w.z=m0,Q.shelfVelocity>0)w.vz+=Q.shelfVelocity*0.6;else w.vz=0}if(w.onShelf){let m0=Q.shelfFrontZ-F(w.type);if(w.z>m0){if(w.state="dropping",w.onShelf=!1,w.vy=-0.1,w.vz<0.15)w.vz=0.15;Q0(w)}}if(w.onShelf){let m0=Math.abs(w.x)<Q.slotHalfWidth,s0=w.z>Q.slotBackZ&&w.z<Q.slotFrontZ;if(m0&&s0&&Q.shelfVelocity<-0.3&&(w._slotTimer||0)>0.3)w.onShelf=!1,w.state="falling",w.vy=-0.5,w._slotTimer=0}if(!w.onShelf&&w.z>Q.frontDropZ){if(w.state="dropping",w.vy=-0.3,w.vz<0.5)w.vz=0.5}if(!w.onShelf&&w.z>Q.slopeStartZ+F(w.type)*0.5&&w.z<Q.frontDropZ){if(Math.abs(w.y-(Q.surfaceY+T(w.type)))<0.15){let s0=Math.max(0,Math.min(1,(w.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ))),y=2+s0*3;w.vz+=y*_;let JJ=Q.surfaceY+T(w.type)-s0*Q.slopeDrop;if(w.y<JJ+0.01)w.y=JJ}}}}d(),Y0(),N0();for(let m=0;m<W.length;m++){let w=W[m];if(w.state==="sliding"&&w.type!=="card"){let p0=t(w);if(w.y<p0)w.y=p0}}E0(_);for(let m=0;m<W.length;m++){let w=W[m];if(w.type==="card"||w.state==="dropping")continue;if(w.state==="falling"){if(w.x<Q.leftX+$8)w.x=Q.leftX+$8,w.vx=Math.abs(w.vx)*F8;if(w.x>Q.rightX-$8)w.x=Q.rightX-$8,w.vx=-Math.abs(w.vx)*F8;if(w.z<Q.backZ+$8)w.z=Q.backZ+$8,w.vz=Math.abs(w.vz)*F8}if(w.state==="sliding"&&w.onShelf){let p0=F(w.type);if(w.x<Q.leftX+p0+0.06)w.x=Q.leftX+p0+0.06,w.vx=Math.abs(w.vx)*F8;if(w.x>Q.rightX-p0-0.06)w.x=Q.rightX-p0-0.06,w.vx=-Math.abs(w.vx)*F8}}}let h=performance.now();for(let r=0;r<W.length;r++){let m=W[r];if(m.type==="card"||m.state==="floating"){m.z+=m.vz*g,m.y=Q.shelfSurfaceY+0.12+Math.sin(h*0.001+m.x)*0.01,m.mesh.rotation.y+=g*0.5,m.mesh.position.set(m.x,m.y,m.z);continue}if(m.state==="falling")m.mesh.rotation.y+=g*m.spin,m.mesh.rotation.x=Math.sin(h*0.01+m.x)*0.1,m.mesh.rotation.z=Math.cos(h*0.01+m.z)*0.1;else if(m.state==="dropping")m.mesh.rotation.x+=g*1.8,m.mesh.rotation.z+=g*1.1;else if(m.state==="sliding"){m.mesh.rotation.x=0,m.mesh.rotation.z=0;let p0=Math.sqrt(m.vx*m.vx+m.vz*m.vz)>0.05?(m.vx-m.vz)*0.08:0;m.yawVelocity+=(p0-m.yawVelocity)*Math.min(1,g*5),m.yawVelocity*=Math.exp(-2.4*g),m.mesh.rotation.y+=m.yawVelocity*g}m.mesh.position.set(m.x,m.y,m.z)}ZJ(o),$0(g)}function ZJ(g){let o=W.filter((_)=>_.type!=="card").length,f=W.filter((_)=>_.type==="card").length;if(o<15&&W.length<K6-15){let _=15-o;for(let h=0;h<_;h++){let r=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),m="coin";if(Math.random()<0.12)m="dollar";else if(Math.random()<0.04&&f<IN){m="card";let m0=Q.shelfBackZ+0.5+Math.random()*(Q.shelfDepth*0.5),s0=S("card",r,m0);s0.vz=0.06+Math.random()*0.07;continue}let w=Q.shelfBackZ+0.2+Math.random()*(Q.shelfDepth*0.5),p0=S(m,r,w,Q.shelfSurfaceY+(m==="coin"?i9/2:HQ/2),"sliding");p0.onShelf=!0}}}let K0=36,O0=new mJ(0.19,0.19,0.04,20),L0=[],M0=(g)=>0.32-Math.max(0,g-Q.frontDropZ)*0.122;function X0(g,o,f){let _=Math.max(0,Math.min(Math.floor(g||0),12));for(let h=0;h<_;h++){if(L0.length>=K0){let w=L0.shift();X.remove(w.mesh)}let r=new F0(O0,E.coin[Math.floor(Math.random()*3)]);r.castShadow=!0,X.add(r);let m=Q.frontDropZ+1.6+Math.random()*0.5;L0.push({mesh:r,t:0,dur:1+Math.random()*0.5,x0:o+Math.random()*(f-o),y0:1.3+Math.random()*0.25,z0:Q.frontDropZ+0.08,x1:Math.max(-3,Math.min(3,(Math.random()-0.5)*5.2)),z1:m,settleY:M0(m)+0.03+Math.random()*0.07,spin:6+Math.random()*8,phase:Math.random()*Math.PI*2,settled:!1})}}function $0(g){for(let o=L0.length-1;o>=0;o--){let f=L0[o];f.t+=g;let _=Math.min(1,f.t/f.dur);if(f.settled){f.mesh.position.set(f.x1,f.settleY+Math.sin(f.t*1.4+f.phase)*0.004,f.z1),f.mesh.rotation.y+=g*0.2;continue}let h=Math.min(1,_/0.45),r={x:f.x0,y:f.y0+0.35,z:f.z0},m={x:f.x0,y:M0(f.z0+0.1)+0.02,z:f.z0+0.1},w=1-h,p0=w*w*f.x0+2*w*h*r.x+h*h*m.x,m0=w*w*f.y0+2*w*h*r.y+h*h*m.y,s0=w*w*f.z0+2*w*h*r.z+h*h*m.z;if(_<0.45)f.mesh.position.set(p0,Math.max(m0,M0(s0)),s0);else{let y=Math.min(1,(_-0.45)/0.55),JJ={x:(f.x0+f.x1)/2,y:M0((f.z0+f.z1)/2)+0.22,z:(f.z0+f.z1)/2},b0=1-y,l0=b0*b0*m.x+2*b0*y*JJ.x+y*y*f.x1,N=b0*b0*m.y+2*b0*y*JJ.y+y*y*f.settleY,q=b0*b0*m.z+2*b0*y*JJ.z+y*y*f.z1;if(f.mesh.position.set(l0,Math.max(N,M0(q)-0.01),q),_>=1)f.settled=!0}f.mesh.rotation.x+=g*f.spin*0.7,f.mesh.rotation.z+=g*f.spin}}return{initObjects:n,dropObject:v0,collectFallen:w0,update:XJ,clearObjects:u,group:X,spawnWinCoins:X0}}var _K={en:{coins:"coins",dollars:"dollars",total:"total",prestige:"prestige",coinsBtn:"Coins",dollarsBtn:"Dollars",dropCoin:"DROP COIN",dropDollar:"DROP BILL",dropSub:"SPACE to drop",costCoin:"-1 coin",costDollar:"-1 $",shop:"Shop",prestigeTab:"Prestige",shopTitle:"Upgrades",prestigePoints:"Prestige Points",prestigeSacrifice:"SACRIFICE PROGRESS",prestigeDesc:"Lose everything but gain permanent prestige points",pushPower:"Demon Push",pushPowerDesc:"Coins push with the force of the underworld",multiDrop:"Multi-Drop",multiDropDesc:"Drop multiple coins at once",autoDrop:"Auto Dealer",autoDropDesc:"A phantom dealer drops for you!",multiplier:"Devil Multiplier",multiplierDesc:"Multiplies all rewards by sacred fire",maxCoins:"Infinite Wallet",maxCoinsDesc:"Max coin capacity increased by spirits",regenSpeed:"Occult Regen",regenDesc:"Free coins arrive from beyond the grave",dollarMagnet:"Dollar Magnet",dollarMagnetDesc:"Multiplies your dollar earnings",luck:"Fortune's Favor",luckDesc:"WIN zones have a chance to roll bonus coins (2×–4×)",comboShield:"Combo Shield",comboShieldDesc:"Combo decays more slowly between drops",prestigeBoost:"Prestige Boost",prestigeBoostDesc:"Gain more prestige points per reset",level:"Lv.",max:"MAX",soulBonus:"Soul Pact",soulBonusDesc:"Start each life with +50% max coins",darkMultiplier:"Dark Multiplier",darkMultiplierDesc:"Permanent +1 reward multiplier per level",voidDollars:"Void Blessing",voidDollarsDesc:"Start with starting-game dollars",occultAuto:"Occult Auto-Drop",occultAutoDesc:"Auto-drop 2x faster (permanent)",saintGold:"Saint Blessing",saintGoldDesc:"Coin gains +4 per level (compounds with Dark Multiplier)",upgraded:"Upgraded! Lv.",notEnoughCoins:"Not enough coins!",notEnoughDollars:"Not enough dollars!",maxLevel:"Already max level!",prestigeUp:"Prestige up! Lv.",notEnoughPrestige:"Not enough prestige points",coinsEarned:"coins earned!",coinsLost:"coins lost to the void...",cardsLost:"card(s) lost!",comboText:"COMBO x",freeCoins:"free coins claimed!",prestigeGain:"PRESTIGE! +",prestigeTotal:" (Total: ",prestigeWait:"Earn more before prestiging (",prestigeCurrent:" pts current)",resetConfirm:"Reset all progress (except prestige)?",categoryEconomy:"⚙ ECONOMY",categoryPush:"⚒ PUSH",categoryCapacity:"\uD83E\uDEA3 CAPACITY",categoryLuck:"\uD83C\uDF40 LUCK",categoryCurrency:"\uD83D\uDCB1 CURRENCY",categoryMeta:"✨ META",buy:"BUY",buyMax:"BUY MAX",noFunds:"Out of Funds!",freeCoinsDesc:"The spirits of the casino offer you a second chance...",claimBonus:"CLAIM BONUS",nextDonation:"Next donation in ",help:"Help",wastedCoins:"coins wasted (max reached)",cardCollected:"Bonus card collected! #",cardBonus:"bonus reward!",milestone:"MILESTONE",milestoneReached:"Milestone reached! +",milestoneBonusSuffix:" free coins",milestone100:"First hundred",milestone500:"Half a grand",milestone1k:"Four digits",milestone5k:"Heavy wallet",milestone10k:"Ten thousand!",milestone50k:"Halfway to a fortune",milestone100k:"Six figures",milestone500k:"Half a million",milestone1m:"MILLIONAIRE",jackpot:"JACKPOT!",jackpotBonus:"Jackpot bonus: +",winStreak:"WIN STREAK",streakBroken:"Streak broken",statsTitle:"\uD83D\uDCCA LIFETIME RECORDS",statsPeakCoins:"Peak coins",statsPeakDollars:"Peak dollars",statsPeakCombo:"Peak combo",statsTotalDrops:"Total drops",statsJackpots:"JACKPOTS hit",statsMilestones:"Milestones cleared",statsBestStreak:"Best win streak",jackpotChance:"Jackpot's Favor",jackpotChanceDesc:"Increases the chance of hitting the JACKPOT!",goldenTouch:"Golden Touch",goldenTouchDesc:"Chance to double earned coin batches",gambleTitle:"⚡ RISK IT",gambleDesc:"Double or Nothing! 50/50 chance",gambleWin:"YOU WON!",gambleLose:"YOU LOST!",gambleGain:"Profit: +",gambleLoss:"Loss: -",gambleWager:"Wager:",gambleMax:"MAX",gambleHalf:"HALF",comboBig:"COMBO"},fr:{coins:"pieces",dollars:"dollars",total:"total",prestige:"prestige",coinsBtn:"Pieces",dollarsBtn:"Dollars",dropCoin:"LACHER PIECE",dropDollar:"LACHER BILLET",dropSub:"ESPACE pour drop",costCoin:"-1 piece",costDollar:"-1 $",shop:"Boutique",prestigeTab:"Prestige",shopTitle:"Ameliorations",prestigePoints:"Points de Prestige",prestigeSacrifice:"SACRIFIER LA PROGRESSION",prestigeDesc:"Perds tout mais gagne des points de prestige permanents",pushPower:"Poussee Demoniaque",pushPowerDesc:"Les pieces poussent avec la force des enfers",multiDrop:"Multi-Drop",multiDropDesc:"Lache plusieurs pieces physiques d'un coup",autoDrop:"Croupier Automatique",autoDropDesc:"Un croupier fantome drop pour toi !",multiplier:"Multiplicateur du Diable",multiplierDesc:"Multiplie toutes les recompenses par le feu sacre",maxCoins:"Portefeuille de l'Infini",maxCoinsDesc:"Capacite max augmente par les esprits",regenSpeed:"Regeneration Occulte",regenDesc:"Les pieces gratuites arrivent d'outre-tombe",dollarMagnet:"Aimant a Dollars",dollarMagnetDesc:"Multiplie tes gains en dollars",luck:"Faveur de la Fortune",luckDesc:"Les zones WIN ont une chance de donner un bonus (x2-x4)",comboShield:"Bouclier de Combo",comboShieldDesc:"Le combo s'estompe plus lentement entre les drops",prestigeBoost:"Gain de Prestige Accru",prestigeBoostDesc:"Gagne plus de points de prestige a chaque reset",level:"Niv.",max:"MAX",soulBonus:"Pacte des Ames",soulBonusDesc:"Commence chaque vie avec +50% de pieces max",darkMultiplier:"Multiplicateur Obscur",darkMultiplierDesc:"+1 multiplicateur de recompense permanent par niveau",voidDollars:"Benediction du Vide",voidDollarsDesc:"Commence avec des dollars d'entree de jeu",occultAuto:"Auto-Drop Occulte",occultAutoDesc:"Auto-drop 2x plus rapide (permanent)",saintGold:"Benediction des Saints",saintGoldDesc:"Gains de pieces +4 par niveau (se combine avec Multiplicateur Obscur)",upgraded:"Ameliore ! Niv.",notEnoughCoins:"Pas assez de pieces !",notEnoughDollars:"Pas assez de dollars !",maxLevel:"Deja max level !",prestigeUp:"Prestige up ! Niv.",notEnoughPrestige:"Pas assez de points de prestige",coinsEarned:"pieces gagnees !",coinsLost:"pieces perdues dans le vide...",cardsLost:"carte(s) perdue(s) !",comboText:"Combo x",freeCoins:"pieces gratuites !",prestigeGain:"PRESTIGE ! +",prestigeTotal:" (Total: ",prestigeWait:"Gagne plus avant de prestiger (",prestigeCurrent:" pts actuels)",resetConfirm:"Reinitialiser toute la progression (hors prestige) ?",categoryEconomy:"⚙ ECONOMIE",categoryPush:"⚒ POUSSEE",categoryCapacity:"\uD83E\uDEA3 CAPACITE",categoryLuck:"\uD83C\uDF40 CHANCE",categoryCurrency:"\uD83D\uDCB1 MONNAIE",categoryMeta:"✨ META",buy:"ACHETER",buyMax:"ACHETER MAX",noFunds:"Plus de fonds !",freeCoinsDesc:"Les esprits du casino t'offrent une seconde chance...",claimBonus:"RECLAMER LE BUTIN",nextDonation:"Prochain don dans ",help:"Aide",wastedCoins:"pieces gaspilees (max atteint)",cardCollected:"Carte bonus collectionnee ! #",cardBonus:"recompense bonus !",milestone:"JALON",milestoneReached:"Jalon atteint ! +",milestoneBonusSuffix:" pieces gratuites",milestone100:"Premiere centaine",milestone500:"Un demi-millier",milestone1k:"Quatre chiffres",milestone5k:"Portefeuille lourd",milestone10k:"Dix mille !",milestone50k:"A mi-chemin de la fortune",milestone100k:"Six chiffres",milestone500k:"Un demi-million",milestone1m:"MILLIONNAIRE",jackpot:"JACKPOT !",jackpotBonus:"Bonus jackpot : +",winStreak:"SERIE DE VICTOIRES",streakBroken:"Serie cassee",statsTitle:"\uD83D\uDCCA RECORDS A VIE",statsPeakCoins:"Pieces max",statsPeakDollars:"Dollars max",statsPeakCombo:"Combo max",statsTotalDrops:"Total de drops",statsJackpots:"JACKPOTS reussis",statsMilestones:"Jalons franchis",statsBestStreak:"Meilleure serie",jackpotChance:"Faveur du Jackpot",jackpotChanceDesc:"Augmente les chances de gagner le JACKPOT !",goldenTouch:"Touche Doree",goldenTouchDesc:"Chance de doubler les gains de pieces",gambleTitle:"⚡ RISQUE TOUT",gambleDesc:"Double ou Rien ! 50/50 de chance",gambleWin:"GAGNE !",gambleLose:"PERDU !",gambleGain:"Gain: +",gambleLoss:"Perte: -",gambleWager:"Mise:",gambleMax:"MAX",gambleHalf:"MOITIE",comboBig:"COMBO"}},qQ=localStorage.getItem("coinpusher_lang")||"en";function A0(J){return _K[qQ]&&_K[qQ][J]||_K.en[J]||J}function wK(){return qQ}function JX(J){qQ=J,localStorage.setItem("coinpusher_lang",J)}var AJ=Object.freeze({ECONOMY:"economy",PUSH:"push",CAPACITY:"capacity",LUCK:"luck",CURRENCY:"currency",META:"meta"}),PN=[{id:"pushPower",nameKey:"pushPower",descKey:"pushPowerDesc",icon:"\uD83D\uDC80",baseCost:10,costMultiplier:1.45,maxLevel:20,effect:(J)=>1+J*0.3,category:AJ.PUSH},{id:"multiDrop",nameKey:"multiDrop",descKey:"multiDropDesc",icon:"\uD83C\uDFB0",baseCost:25,costMultiplier:1.55,maxLevel:10,effect:(J)=>1+J,category:AJ.ECONOMY},{id:"autoDrop",nameKey:"autoDrop",descKey:"autoDropDesc",icon:"\uD83C\uDCCF",baseCost:60,costMultiplier:1.7,maxLevel:12,effect:(J)=>J*0.5,category:AJ.ECONOMY},{id:"multiplier",nameKey:"multiplier",descKey:"multiplierDesc",icon:"♦️",baseCost:40,costMultiplier:1.85,maxLevel:25,effect:(J)=>1+J*0.4,category:AJ.ECONOMY},{id:"maxCoins",nameKey:"maxCoins",descKey:"maxCoinsDesc",icon:"\uD83E\uDE99",baseCost:15,costMultiplier:1.35,maxLevel:40,effect:(J)=>100+J*30,category:AJ.CAPACITY},{id:"regenSpeed",nameKey:"regenSpeed",descKey:"regenDesc",icon:"⏳",baseCost:20,costMultiplier:1.5,maxLevel:20,effect:(J)=>Math.max(1,30-J*1.4),category:AJ.CAPACITY},{id:"dollarMagnet",nameKey:"dollarMagnet",descKey:"dollarMagnetDesc",icon:"\uD83D\uDCB5",baseCost:80,costMultiplier:1.6,maxLevel:15,effect:(J)=>1+J*0.3,category:AJ.CURRENCY},{id:"luck",nameKey:"luck",descKey:"luckDesc",icon:"\uD83C\uDF40",baseCost:200,costMultiplier:1.9,maxLevel:10,effect:(J)=>J*0.05,category:AJ.LUCK},{id:"comboShield",nameKey:"comboShield",descKey:"comboShieldDesc",icon:"\uD83D\uDEE1️",baseCost:120,costMultiplier:1.7,maxLevel:8,effect:(J)=>Math.min(8,2.5+J*0.6),category:AJ.CAPACITY},{id:"prestigeBoost",nameKey:"prestigeBoost",descKey:"prestigeBoostDesc",icon:"\uD83C\uDF1F",baseCost:500,costMultiplier:2,maxLevel:10,effect:(J)=>1+J*0.3,category:AJ.META},{id:"jackpotChance",nameKey:"jackpotChance",descKey:"jackpotChanceDesc",icon:"\uD83C\uDFB0",baseCost:350,costMultiplier:2,maxLevel:10,effect:(J)=>0.02+J*0.005,category:AJ.LUCK},{id:"goldenTouch",nameKey:"goldenTouch",descKey:"goldenTouchDesc",icon:"\uD83E\uDD32",baseCost:500,costMultiplier:2.1,maxLevel:10,effect:(J)=>J*0.04,category:AJ.LUCK}],Q9=PN.map((J)=>({...J,get name(){return A0(J.nameKey)},get desc(){return A0(J.descKey)}}));function W6(J,Q){return Math.floor(J.baseCost*Math.pow(J.costMultiplier,Q))}function aJ(J,Q){return J.effect(Q)}function QX(J,Q,$,K=99){let W=[];for(let Z=0;Z<K;Z++){let X=Q+Z;if(X>=J.maxLevel)break;let Y=W6(J,X);if(Y>$)break;W.push(Y),$-=Y}return W}var $X=[{id:"soulBonus",nameKey:"soulBonus",descKey:"soulBonusDesc",icon:"\uD83D\uDC9C",baseCost:1,costMultiplier:2,maxLevel:10,effect:(J)=>1+J*0.5},{id:"darkMultiplier",nameKey:"darkMultiplier",descKey:"darkMultiplierDesc",icon:"\uD83C\uDF19",baseCost:3,costMultiplier:2.5,maxLevel:8,effect:(J)=>1+J},{id:"voidDollars",nameKey:"voidDollars",descKey:"voidDollarsDesc",icon:"\uD83D\uDCB5",baseCost:2,costMultiplier:2,maxLevel:10,effect:(J)=>J*50},{id:"occultAuto",nameKey:"occultAuto",descKey:"occultAutoDesc",icon:"\uD83D\uDD2E",baseCost:5,costMultiplier:3,maxLevel:5,effect:(J)=>1+J*0.4},{id:"saintGold",nameKey:"saintGold",descKey:"saintGoldDesc",icon:"⭐",baseCost:8,costMultiplier:3,maxLevel:5,effect:(J)=>1+J*4}],NQ=$X.map((J)=>({...J,get name(){return A0(J.nameKey)},get desc(){return A0(J.descKey)}}));function GQ(J,Q){return Math.floor(J.baseCost*Math.pow(J.costMultiplier,Q))}function KX(J,Q){return J.effect(Q)}function WX(J,Q){let $=J+Q*10;return Math.max(1,Math.floor(Math.sqrt($/50)))}function FQ(J){let Q={soulMultiplier:1,darkMultiplier:1,voidStartingDollars:0,occultSpeedBonus:1,saintMultiplier:1};if(!J.prestigeUpgrades)return Q;return $X.forEach(($)=>{let K=J.prestigeUpgrades[$.id]||0;if(K>0){let W=KX($,K);switch($.id){case"soulBonus":Q.soulMultiplier=W;break;case"darkMultiplier":Q.darkMultiplier=W;break;case"voidDollars":Q.voidStartingDollars=W;break;case"occultAuto":Q.occultSpeedBonus=W;break;case"saintGold":Q.saintMultiplier=W;break}}}),Q}function O8(J){try{let Q={schemaVersion:2,coins:J.coins,dollars:J.dollars,maxDollars:J.maxDollars,totalEarned:J.totalEarned,totalEarnedLifetime:J.totalEarnedLifetime||J.totalEarned,totalDropped:J.totalDropped,totalDollarsEarned:J.totalDollarsEarned||0,activeCurrency:J.activeCurrency||"coins",autoDropEnabled:J.autoDropEnabled??!1,upgrades:{...J.upgrades},prestigePoints:J.prestigePoints,prestigeUpgrades:{...J.prestigeUpgrades},collectedCards:J.collectedCards||[],dropCount:J.dropCount||0,lastDropTime:J.lastDropTime||0,regenCooldown:typeof J.regenCooldown==="number"?J.regenCooldown:30,isGameOver:!!J.isGameOver,peakCoins:J.peakCoins||0,peakDollars:J.peakDollars||0,peakCombo:J.peakCombo||0,bestWinStreak:J.bestWinStreak||0,winStreak:J.winStreak||0,milestonesHit:Array.isArray(J.milestonesHit)?J.milestonesHit:[],jackpotsHit:J.jackpotsHit||0,gameTime:J.gameTime||0,lastSave:Date.now()};localStorage.setItem("coinpusher3d_save",JSON.stringify(Q))}catch(Q){console.warn("Save failed:",Q)}}function ZX(){try{let J=localStorage.getItem("coinpusher3d_save");if(!J)return null;let Q=JSON.parse(J);if(typeof Q.coins!=="number"||typeof Q.totalEarned!=="number")return null;return Q}catch(J){return console.warn("Load failed:",J),null}}function XX(J){setInterval(()=>{if(J)O8(J)},1e4)}function YX(){localStorage.removeItem("coinpusher3d_save")}function HX(){let J=ZX(),Q=J?.prestigePoints||0,$=J?.prestigeUpgrades||{},K=FQ({prestigePoints:Q,prestigeUpgrades:$}),W=J?.upgrades||{},Z=W.maxCoins||0,X=aJ(Q9[4],Z),H={coins:0,maxCoins:Math.floor(X*K.soulMultiplier),dollars:0,maxDollars:Math.max(10,K.voidStartingDollars||0),totalEarned:0,totalEarnedLifetime:0,totalDropped:0,totalDollarsEarned:0,upgrades:{},dropCount:0,lastDropTime:0,autoDropAccumulator:0,regenCooldown:30,_regenInitialized:!1,isGameOver:!1,gameTime:0,activeCurrency:J?.activeCurrency||"coins",autoDropEnabled:J?.autoDropEnabled??!1,prestigePoints:Q,prestigeUpgrades:{...$},collectedCards:J?.collectedCards||[],peakCoins:0,peakDollars:0,peakCombo:0,bestWinStreak:0,winStreak:0,milestonesHit:[],jackpotsHit:0};if(J){H.totalEarned=typeof J.totalEarned==="number"?J.totalEarned:0,H.totalEarnedLifetime=typeof J.totalEarnedLifetime==="number"?J.totalEarnedLifetime:H.totalEarned,H.totalDropped=typeof J.totalDropped==="number"?J.totalDropped:0,H.totalDollarsEarned=typeof J.totalDollarsEarned==="number"?J.totalDollarsEarned:0,H.upgrades=W,H.maxDollars=Math.max(10,J.maxDollars||0);let U=typeof J.coins==="number"?J.coins:80;H.coins=Math.min(Math.max(U,80),H.maxCoins);let D=typeof J.dollars==="number"?J.dollars:0;if(H.dollars=Math.min(Math.max(D,10),H.maxDollars),typeof J.dropCount==="number")H.dropCount=J.dropCount;if(typeof J.lastDropTime==="number")H.lastDropTime=J.lastDropTime;if(typeof J.regenCooldown==="number")H.regenCooldown=J.regenCooldown;if(typeof J.isGameOver==="boolean")H.isGameOver=J.isGameOver;if(typeof J.peakCoins==="number")H.peakCoins=J.peakCoins;if(typeof J.peakDollars==="number")H.peakDollars=J.peakDollars;if(typeof J.peakCombo==="number")H.peakCombo=J.peakCombo;if(typeof J.bestWinStreak==="number")H.bestWinStreak=J.bestWinStreak;if(typeof J.winStreak==="number")H.winStreak=J.winStreak;if(Array.isArray(J.milestonesHit))H.milestonesHit=J.milestonesHit;if(typeof J.jackpotsHit==="number")H.jackpotsHit=J.jackpotsHit;if(typeof J.gameTime==="number")H.gameTime=J.gameTime}else H.coins=80,H.dollars=10,H.maxDollars=10;return H}function UX(J,Q){if(J.coins<Q||Q<=0)return{success:!1,reason:"not_enough_coins"};let $=Math.random()<0.5;if($)J.coins+=Q;else J.coins-=Q;return J.totalDropped+=Q,{success:!0,win:$,wager:Q,newBalance:Math.floor(J.coins)}}function K8(J,Q){return J.upgrades[Q]||0}function $9(J){if(J._cachedStats&&J._cachedStatsKey!==void 0){let n=J._cachedStatsKey;if(n.upgradesRef===J.upgrades&&n.prestigeUpgradesRef===J.prestigeUpgrades&&n.activeCurrency===J.activeCurrency&&n.autoDropEnabled===J.autoDropEnabled)return J._cachedStats}let Q=(n)=>Q9.find((J0)=>J0.id===n),$=K8(J,"pushPower"),K=K8(J,"multiDrop"),W=K8(J,"autoDrop"),Z=K8(J,"multiplier"),X=K8(J,"maxCoins"),Y=K8(J,"regenSpeed"),H=K8(J,"dollarMagnet"),U=K8(J,"prestigeBoost"),D=K8(J,"luck"),O=K8(J,"comboShield"),G=K8(J,"jackpotChance"),R=K8(J,"goldenTouch"),M=FQ(J),z=aJ(Q("pushPower"),$),E=aJ(Q("multiDrop"),K),F=aJ(Q("autoDrop"),W)*M.occultSpeedBonus,T=aJ(Q("multiplier"),Z)*M.darkMultiplier*M.saintMultiplier,A=Math.floor(aJ(Q("maxCoins"),X)*M.soulMultiplier),V=aJ(Q("regenSpeed"),Y),P=aJ(Q("dollarMagnet"),H),C=aJ(Q("prestigeBoost"),U),j=aJ(Q("luck"),D),k=aJ(Q("comboShield"),O),L=aJ(Q("jackpotChance"),G),i=aJ(Q("goldenTouch"),R),S={pushPower:z,coinsPerDrop:E,autoDropRate:F,rewardMultiplier:T,maxCoins:A,regenCooldown:V,dollarMultiplier:P,prestigeBoost:C,luckChance:j,comboWindow:k,jackpotChance:L,goldenTouch:i};return J._cachedStats=S,J._cachedStatsKey={upgradesRef:J.upgrades,prestigeUpgradesRef:J.prestigeUpgrades,activeCurrency:J.activeCurrency,autoDropEnabled:J.autoDropEnabled},S}function AN(J){return $9(J).comboWindow||2.5}function qX(J,Q){let $=$9(J);if(J.activeCurrency==="dollars")return _N(J,$,Q);let K=1;if(J.coins<K)return{success:!1,reason:"no_coins"};J.coins-=K,J.totalDropped+=K,J.dropCount++,J.lastDropTime=Date.now();let W=0;if(J.dropCount%10===0)W=1,J.coins=Math.min(J.coins+W,J.maxCoins);if(Q)Q({spent:K,earned:0,total:J.coins,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:$.pushPower,currency:"coins",coinsPerDrop:$.coinsPerDrop,comboBonus:W});return{success:!0,spent:K,earned:0,total:J.coins,stats:$}}function _N(J,Q,$){if(J.dollars<1)return{success:!1,reason:"no_dollars"};if(J.dollars-=1,J.totalDropped+=1,J.dropCount++,J.lastDropTime=Date.now(),$)$({spent:1,earned:0,total:J.dollars,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:Q.pushPower*0.8,currency:"dollars",coinsPerDrop:1,comboBonus:0});return{success:!0,spent:1,earned:0,total:J.dollars,stats:Q}}function NX(J,Q,$=1){let K=Q9.find((Y)=>Y.id===Q);if(!K)return{success:!1,reason:"not_found"};let W=0,Z=null;for(let Y=0;Y<$;Y++){let H=K8(J,Q);if(H>=K.maxLevel){Z="max_level";break}let U=W6(K,H);if(J.coins<U){Z="not_enough_coins";break}J.coins-=U,J.upgrades[Q]=H+1,W++}if(W===0)return{success:!1,reason:Z||"not_enough_coins"};let X=$9(J);return J.maxCoins=X.maxCoins,O8(J),{success:!0,newLevel:J.upgrades[Q],levelsPurchased:W,stats:X}}function GX(J,Q){let $=NQ.find((Z)=>Z.id===Q);if(!$)return{success:!1,reason:"not_found"};let K=J.prestigeUpgrades[Q]||0;if(K>=$.maxLevel)return{success:!1,reason:"max_level"};let W=GQ($,K);if(J.prestigePoints<W)return{success:!1,reason:"not_enough_prestige"};return J.prestigePoints-=W,J.prestigeUpgrades[Q]=(J.prestigeUpgrades[Q]||0)+1,O8(J),{success:!0,newLevel:J.prestigeUpgrades[Q]}}function FX(J){let Q=$9(J),$=Math.max(5,Math.floor(J.totalEarnedLifetime/100));return J.coins=Math.min(J.coins+$,J.maxCoins),J.regenCooldown=Q.regenCooldown,J._regenInitialized=!1,$}function OX(J){let Q=J.totalEarnedLifetime||J.totalEarned,$=J.totalDollarsEarned||0,K=J.upgrades.prestigeBoost||0,W=K>0?aJ(Q9[7],K):1,Z=WX(Q,$),X=Math.floor(Z*W);if(X<=J.prestigePoints)return{success:!1,reason:"no_gain",current:J.prestigePoints};if(Q<100&&$<10)return{success:!1,reason:"no_gain",current:J.prestigePoints};let Y=[...J.collectedCards||[]],H={...J.prestigeUpgrades};J.upgrades={},J.dropCount=0,J.lastDropTime=0,J.autoDropAccumulator=0,J.regenCooldown=30,J._regenInitialized=!1,J.isGameOver=!1,J.gameTime=0,J.totalEarned=0,J.totalDropped=0,J.totalDollarsEarned=0,J.prestigePoints=X,J.prestigeUpgrades=H,J.collectedCards=Y;let U=J.prestigeUpgrades.soulBonus||0,D=J.prestigeUpgrades.voidDollars||0;return J.maxCoins=Math.floor(aJ(Q9[4],0)*FQ(J).soulMultiplier),J.coins=Math.min(Math.max(25,Math.floor(25*(1+U*0.5))),J.maxCoins),J.maxDollars=Math.max(10,D*50),J.dollars=J.maxDollars,O8(J),{success:!0,prestigePoints:X,gained:X}}function DX(J,Q,$){J.gameTime+=Q;let K=$9(J);if(J.autoDropEnabled&&K.autoDropRate>0){J.autoDropAccumulator+=K.autoDropRate*Q;while(J.autoDropAccumulator>=1&&J.coins>=1){J.autoDropAccumulator-=1;let Z=1;if(J.coins>=Z){if(J.coins-=Z,J.totalDropped+=Z,J.dropCount++,J.lastDropTime=Date.now(),$)$({spent:Z,earned:0,total:J.coins,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:K.pushPower*0.7,isAuto:!0,currency:"coins",coinsPerDrop:K.coinsPerDrop,comboBonus:0})}}}if(J.coins<=0&&J.dollars<=0){if(!J._regenInitialized)J.regenCooldown=K.regenCooldown,J._regenInitialized=!0;if(J.regenCooldown-=Q,J.regenCooldown<=0)J.regenCooldown=0,J.isGameOver=!0}else J.isGameOver=!1,J._regenInitialized=!1,J.regenCooldown=K.regenCooldown;let W=AN(J)*1000;if(Date.now()-J.lastDropTime>W&&J.dropCount>0){if(J._comboDecayAccum=(J._comboDecayAccum||0)+Q,J._comboDecayAccum>=1)J.dropCount=Math.max(0,J.dropCount-Math.floor(J._comboDecayAccum)),J._comboDecayAccum=J._comboDecayAccum%1}else J._comboDecayAccum=0;return J}var wN={drop:{freq:800,type:"sine",duration:0.08,slide:-200},coin:{freq:920,type:"triangle",duration:0.07,slide:180,gain:0.08},sparkle:{freq:1560,type:"sine",duration:0.12,slide:280,gain:0.06},click:{freq:520,type:"square",duration:0.035,slide:-40,gain:0.045},win:{freq:1200,type:"sine",duration:0.15,slide:400},lose:{freq:300,type:"sawtooth",duration:0.2,slide:-100},upgrade:{freq:600,type:"square",duration:0.12,slide:300},prestige:{freq:900,type:"sine",duration:0.4,slide:600},jackpot:{freq:1320,type:"sine",duration:0.6,slide:880,gain:0.22},bigwin:{freq:880,type:"triangle",duration:0.35,slide:660,gain:0.2}};var P9=null,I9=null,OQ=(()=>{try{let J=localStorage.getItem("coinpusher_sound");return J===null?!0:J==="1"}catch(J){return!0}})();function EX(J){if(OQ=!!J,!OQ)jN();try{localStorage.setItem("coinpusher_sound",J?"1":"0")}catch(Q){}}function RX(){return OQ}function CN(){if(!OQ)return null;if(!P9){let J=window.AudioContext||window.webkitAudioContext;if(!J)return null;P9=new J}if(P9.state==="suspended")P9.resume();return SN(TN()),P9}function TN(){return P9}function SN(J){if(!J||I9)return;let Q=J.createGain();Q.gain.setValueAtTime(0.018,J.currentTime),Q.connect(J.destination);let $=J.createBiquadFilter();$.type="lowpass",$.frequency.setValueAtTime(520,J.currentTime),$.Q.setValueAtTime(0.7,J.currentTime),$.connect(Q);let K=J.createOscillator(),W=J.createOscillator();K.type="sine",W.type="triangle",K.frequency.setValueAtTime(110,J.currentTime),W.frequency.setValueAtTime(164.81,J.currentTime),K.connect($),W.connect($),K.start(),W.start(),I9={master:Q,a:K,b:W}}function jN(){if(!I9||!P9)return;let J=P9.currentTime;I9.master.gain.cancelScheduledValues(J),I9.master.gain.setTargetAtTime(0.0001,J,0.04),I9.a.stop(J+0.18),I9.b.stop(J+0.18),I9=null}function P8(J){let Q=wN[J];if(!Q)return;let $=CN();if(!$)return;let K=$.createOscillator(),W=$.createGain();K.type=Q.type,K.frequency.setValueAtTime(Q.freq,$.currentTime),K.frequency.exponentialRampToValueAtTime(Math.max(50,Q.freq+Q.slide),$.currentTime+Q.duration),W.gain.setValueAtTime(Q.gain||0.15,$.currentTime),W.gain.exponentialRampToValueAtTime(0.001,$.currentTime+Q.duration),K.connect(W),W.connect($.destination),K.start(),K.stop($.currentTime+Q.duration)}function kX(J,Q){let $={coinsDisplay:document.getElementById("coins-display"),dollarsDisplay:document.getElementById("dollars-display"),totalEarned:document.getElementById("total-earned"),dropBtn:document.getElementById("drop-btn"),dropIcon:document.querySelector("#drop-btn .btn-icon"),dropText:document.querySelector("#drop-btn .btn-text"),dropSub:document.querySelector("#drop-btn .btn-sub"),upgradesList:document.getElementById("upgrades-list"),prestigeList:document.getElementById("prestige-upgrades-list"),shopView:document.getElementById("shop-view"),prestigeView:document.getElementById("prestige-view"),panelContent:document.getElementById("panel-content"),panelToggle:document.getElementById("panel-toggle"),panelTitle:document.getElementById("panel-title"),tabs:document.querySelectorAll(".tab-btn"),currencyBtns:document.querySelectorAll(".currency-btn"),freeModal:document.getElementById("free-coins-modal"),freeCoinsBtn:document.getElementById("free-coins-btn"),freeCooldown:document.getElementById("free-cooldown"),regenTimer:document.getElementById("regen-timer"),regenCountdown:document.getElementById("regen-countdown"),notifications:document.getElementById("notifications"),dropEffectLabel:document.getElementById("drop-effect-label"),resetBtn:document.getElementById("reset-btn"),prestigeBtn:document.getElementById("prestige-btn"),prestigeBadge:document.getElementById("prestige-badge"),prestigePointsDisplay:document.getElementById("prestige-points-display"),prestigePointsBig:document.getElementById("prestige-points-big"),prestigeProgressBar:document.getElementById("prestige-progress-bar"),prestigeProgressText:document.getElementById("prestige-progress-text"),prestigeProgressWrap:document.getElementById("prestige-progress-wrap"),collectedCards:document.getElementById("collected-cards"),cardsGrid:document.getElementById("cards-grid"),autoDropToggle:document.getElementById("auto-drop-toggle"),soundToggle:document.getElementById("sound-toggle"),langBtn:document.getElementById("lang-btn")},K=J.coins,W=J.dollars,Z=null,X="shop",Y=!1,H=RX(),U=0;function D(N){if(N==="shop")return"\uD83D\uDED2 "+A0("shop");if(N==="prestige")return"\uD83D\uDC51 "+A0("prestigeTab");if(N==="settings")return"⚙ "+A0("help");return""}function O(N){if(N==="shop")return"\uD83D\uDED2 "+A0("shopTitle");if(N==="prestige")return"\uD83D\uDC51 "+A0("prestigeTab");return"⚙ "+A0("help")}function G(){if(!$.langBtn)return;$.langBtn.textContent=wK()==="en"?"FR":"EN"}function R(){JX(wK()==="en"?"fr":"en"),G(),M(),l0.refresh(J)}function M(){document.querySelectorAll(".label").forEach((q)=>{if(q.dataset.key)q.textContent=A0(q.dataset.key)}),document.querySelectorAll(".currency-btn").forEach((q)=>{q.textContent=q.dataset.currency==="coins"?"\uD83E\uDE99 "+A0("coinsBtn"):"\uD83D\uDCB5 "+A0("dollarsBtn")}),F(),z(),C(),k()}function z(){if($.tabs.forEach((I)=>{I.textContent=D(I.dataset.tab)}),$.panelTitle)$.panelTitle.textContent=O(X);let N=document.querySelector(".prestige-sub");if(N)N.textContent="⭐ "+A0("prestigePoints");if($.prestigeBtn)$.prestigeBtn.textContent="\uD83D\uDD25 "+A0("prestigeSacrifice");let q=document.querySelector(".prestige-sub-desc");if(q)q.textContent=A0("prestigeDesc");if($.freeModal){let I=$.freeModal.querySelector("h2"),v=$.freeModal.querySelector("p");if(I)I.textContent="\uD83D\uDC80 "+A0("noFunds");if(v)v.textContent=A0("freeCoinsDesc");let l=$.freeCoinsBtn?.querySelector("span");if(l)l.textContent="\uD83C\uDF81 "+A0("claimBonus")}}function E(){let N=Math.floor(J.coins),q=Math.floor(J.dollars);if(N!==K){if($.coinsDisplay.textContent=N,N>K)$.coinsDisplay.classList.remove("pop"),$.coinsDisplay.offsetWidth,$.coinsDisplay.classList.add("pop");K=N}if(q!==W){if($.dollarsDisplay.textContent=q,q>W)$.dollarsDisplay.classList.remove("pop"),$.dollarsDisplay.offsetWidth,$.dollarsDisplay.classList.add("pop");W=q}if($.totalEarned.textContent=Math.floor(J.totalEarnedLifetime||J.totalEarned),J.prestigePoints>0){if($.prestigeBadge.classList.remove("hidden"),$.prestigePointsDisplay.textContent=J.prestigePoints,$.prestigePointsBig.textContent=J.prestigePoints,J.prestigePoints>=10)$.prestigeBadge.classList.add("prestige-high")}else $.prestigeBadge.classList.add("hidden")}function F(){let N=J.activeCurrency==="coins";$.currencyBtns.forEach((q)=>{q.classList.toggle("active",q.dataset.currency===J.activeCurrency),q.classList.toggle("dollar-mode",q.dataset.currency==="dollars")}),$.dropIcon.textContent=N?"\uD83E\uDE99":"\uD83D\uDCB5",$.dropText.textContent=N?A0("dropCoin"):A0("dropDollar"),$.dropSub.textContent=N?A0("costCoin"):A0("costDollar"),$.dropBtn.style.borderColor=N?"#ffd700":"#00ff88",$.dropBtn.style.color=N?"#fff4a3":"#00ff88"}function T(N){$.dropBtn.disabled=!N}function A(N){if(X=N,$.tabs.forEach((q)=>q.classList.toggle("active",q.dataset.tab===N)),$.shopView.classList.toggle("hidden",N!=="shop"),$.prestigeView.classList.toggle("hidden",N!=="prestige"),$.settingsView=$.settingsView||document.getElementById("settings-view"),$.settingsView)$.settingsView.classList.toggle("hidden",N!=="settings");if($.panelTitle.textContent=O(N),N==="prestige")$.prestigePointsBig.textContent=J.prestigePoints||0,k(),w0(),J0()}function V(N,q){let I=N.effect(q);switch(N.id){case"pushPower":return"Push "+I.toFixed(2)+"x";case"multiDrop":return Math.floor(Math.max(1,I))+" coins/drop";case"autoDrop":return I.toFixed(2)+"/s";case"multiplier":return"x"+I.toFixed(2);case"maxCoins":return I+" max";case"regenSpeed":return I.toFixed(1)+"s";case"dollarMagnet":return"x"+I.toFixed(2);case"luck":return"+"+(I*100).toFixed(0)+"% chance";case"comboShield":return I.toFixed(1)+"s window";case"prestigeBoost":return"x"+I.toFixed(2);case"jackpotChance":return"+"+((I-0.02)*100).toFixed(1)+"% extra";case"goldenTouch":return(I*100).toFixed(0)+"% double";default:return""}}function P(){let N=[AJ.ECONOMY,AJ.PUSH,AJ.CAPACITY,AJ.LUCK,AJ.CURRENCY,AJ.META],q=[];return N.forEach((I)=>{Q9.forEach((v)=>{if(v.category===I)q.push(v)})}),q}function C(){$.upgradesList.innerHTML="",[AJ.ECONOMY,AJ.PUSH,AJ.CAPACITY,AJ.LUCK,AJ.CURRENCY,AJ.META].forEach((q)=>{let I=Q9.filter((U0)=>U0.category===q);if(I.length===0)return;let v=document.createElement("div");v.className="upgrade-category-header cat-"+q;let l="category"+q.charAt(0).toUpperCase()+q.slice(1);v.textContent="◆ "+A0(l),$.upgradesList.appendChild(v),I.forEach(j)})}function j(N){let q=K8(J,N.id),I=q>=N.maxLevel,v=W6(N,q),l=J.coins>=v,U0=I?[]:QX(N,q,J.coins),G0=U0.length,e=U0.reduce((W0,B0)=>W0+B0,0),Z0=G0>1,k0=Z0?"⇧ "+G0+" for \uD83E\uDE99"+e.toLocaleString():null,P0=V(N,q),V0=I?"":V(N,q+1),D0=P0?'<div class="upgrade-effect">'+P0+(V0&&V0!==P0?' <span class="effect-arrow">→</span> <span class="effect-next">'+V0+"</span>":"")+"</div>":"",g0=Math.round(q/N.maxLevel*100),c0='<div class="upgrade-bar-wrap"><div class="upgrade-bar'+(I?" maxed":"")+'" style="width:'+g0+'%"></div></div>',WJ=document.createElement("div"),b="upgrade-item cat-"+N.category+(I?" bought":"")+(l&&!I?" affordable":"");WJ.className=b;let R0=I?A0("max"):Z0?'<span class="upgrade-cost-bulk">'+k0+'</span><span class="upgrade-cost-single">\uD83E\uDE99'+v.toLocaleString()+"</span>":"\uD83E\uDE99"+v.toLocaleString();if(WJ.innerHTML='<div class="upgrade-icon">'+N.icon+'</div><div class="upgrade-info"><div class="upgrade-name">'+N.name+'</div><div class="upgrade-desc">'+N.desc+"</div>"+D0+c0+'<div class="upgrade-level">'+A0("level")+" "+q+"/"+N.maxLevel+'</div></div><div class="upgrade-cost '+(l||I?"":"locked")+'">'+R0+"</div>",!I)WJ.style.cursor=l?"pointer":"not-allowed",WJ.addEventListener("click",(W0)=>{let B0=W0.shiftKey?G0:1;if(Q.onBuyUpgrade)Q.onBuyUpgrade(N.id,B0)});$.upgradesList.appendChild(WJ)}function k(){$.prestigeList.innerHTML="";let N=J.prestigePoints||0;NQ.forEach((q)=>{let I=J.prestigeUpgrades[q.id]||0,v=I>=q.maxLevel,l=GQ(q,I),U0=N>=l,G0=document.createElement("div");if(G0.className="upgrade-item"+(v?" bought":""),G0.innerHTML='<div class="upgrade-icon">'+q.icon+'</div><div class="upgrade-info"><div class="upgrade-name">'+q.name+'</div><div class="upgrade-desc">'+q.desc+'</div><div class="upgrade-level">'+A0("level")+" "+I+"/"+q.maxLevel+'</div></div><div class="upgrade-cost prestige-cost '+(U0||v?"":"locked")+'">'+(v?A0("max"):"\uD83D\uDC51"+l)+"</div>",!v)G0.style.cursor=U0?"pointer":"not-allowed",G0.addEventListener("click",()=>{if(Q.onBuyPrestigeUpgrade)Q.onBuyPrestigeUpgrade(q.id)});$.prestigeList.appendChild(G0)})}function L(N,q="info"){let I=document.createElement("div");I.className="notification "+q,I.textContent=N,I.setAttribute("role","status"),$.notifications.appendChild(I),setTimeout(()=>{if(I.parentNode)I.remove()},2500)}function i(N){let q=document.createElement("div");q.className="jackpot-banner",q.innerHTML='\uD83C\uDFB0 <span class="jackpot-text">'+A0("jackpot")+'</span> <span class="jackpot-bonus">+'+N+" \uD83E\uDE99</span>",document.body.appendChild(q),requestAnimationFrame(()=>q.classList.add("show"));let I=document.createElement("div");I.className="jackpot-burst";for(let v=0;v<10;v++){let l=document.createElement("div");l.className="jackpot-particle",l.textContent="\uD83E\uDE99",l.style.setProperty("--dx",(Math.random()-0.5)*400+"px"),l.style.setProperty("--dy",Math.random()*-200-60+"px"),l.style.animationDelay=Math.random()*0.2+"s",I.appendChild(l)}q.appendChild(I),setTimeout(()=>{q.classList.remove("show"),q.classList.add("hide"),setTimeout(()=>{if(q.parentNode)q.remove()},500)},2200)}function S(N,q){let I=document.createElement("div");I.className="milestone-banner",I.innerHTML='<div class="milestone-eyebrow">'+A0("milestone")+'</div><div class="milestone-title">'+A0(N.key)+'</div><div class="milestone-subtitle">'+N.value.toLocaleString()+" lifetime coins</div>"+(q>0?'<div class="milestone-bonus">+'+q+" \uD83E\uDE99 "+A0("milestoneBonusSuffix")+"</div>":""),document.body.appendChild(I),requestAnimationFrame(()=>I.classList.add("show")),setTimeout(()=>{I.classList.remove("show"),I.classList.add("hide"),setTimeout(()=>{if(I.parentNode)I.remove()},600)},3500)}function n(N,q,I){let v=document.getElementById("streak-chip");if(N<=2&&!I){if(v)v.classList.add("hidden");return}if(!v){v=document.createElement("div"),v.id="streak-chip",v.className="streak-chip hidden";let l=document.getElementById("drop-area");if(l)l.appendChild(v)}if(v.classList.remove("hidden"),I)v.classList.remove("streak-hot"),v.classList.add("streak-broken"),v.innerHTML="\uD83D\uDC94 "+A0("streakBroken")+" · best "+q,setTimeout(()=>{if(v)v.classList.remove("streak-broken"),v.classList.add("hidden")},1800);else v.classList.add("streak-hot"),v.classList.remove("streak-broken"),v.innerHTML="\uD83D\uDD25 "+A0("winStreak")+" <b>x"+N+"</b>"+(q>N?" · best "+q:"")}function J0(){let N=document.getElementById("stats-panel"),q=$.prestigeView;if(!q)return;if(!N){N=document.createElement("div"),N.id="stats-panel",N.className="stats-panel";let l=$.prestigeList;if(l&&l.parentNode===q)q.insertBefore(N,l);else q.appendChild(N)}let I=Math.floor(J.totalEarnedLifetime||J.totalEarned||0),v=[[A0("statsTotalDrops"),Math.floor(J.totalDropped||0).toLocaleString()],[A0("statsPeakCoins"),Math.floor(J.peakCoins||0).toLocaleString()],[A0("statsPeakDollars"),Math.floor(J.peakDollars||0).toLocaleString()],[A0("statsPeakCombo"),"x"+(J.peakCombo||0)],[A0("statsBestStreak"),"x"+(J.bestWinStreak||0)],[A0("statsJackpots"),"\uD83C\uDFB0 "+(J.jackpotsHit||0)],[A0("statsMilestones"),"\uD83C\uDFC5 "+(J.milestonesHit||[]).length+"/9"],[A0("total"),I.toLocaleString()]];N.innerHTML='<div class="stats-title">'+A0("statsTitle")+"</div>"+v.map(([l,U0])=>'<div class="stats-row"><span class="stats-key">'+l+'</span><span class="stats-val">'+U0+"</span></div>").join("")}function u(N,q,I){let v=document.createElement("div");v.className="floating-reward",v.textContent=N,v.style.left=q+"px",v.style.top=I+"px",document.body.appendChild(v),setTimeout(()=>{if(v.parentNode)v.remove()},1200)}function t(N){let q=$.dropBtn;if(N>5){if($.dropEffectLabel.textContent="\uD83D\uDD25 "+A0("comboText")+N+"!",$.dropEffectLabel.style.color="#ff2d95",$.dropEffectLabel.classList.remove("mega"),$.dropEffectLabel.classList.add("mega"),q)q.classList.add("combo-hot"),q.classList.remove("combo-warm")}else if(N>3){if($.dropEffectLabel.textContent="✨ x"+N,$.dropEffectLabel.style.color="#ffd700",$.dropEffectLabel.classList.remove("mega"),q)q.classList.add("combo-warm"),q.classList.remove("combo-hot")}else if(N>1){if($.dropEffectLabel.textContent="✨ x"+N,$.dropEffectLabel.style.color="#fff4a3",$.dropEffectLabel.classList.remove("mega"),q)q.classList.remove("combo-warm","combo-hot")}else if($.dropEffectLabel.textContent="",$.dropEffectLabel.classList.remove("mega"),q)q.classList.remove("combo-warm","combo-hot")}function Q0(N=30){if(!$.freeModal.classList.contains("hidden"))return;$.freeModal.classList.remove("hidden");let q=Math.max(1,Math.ceil(N));if($.freeCooldown.textContent=q,$.freeCoinsBtn.disabled=!0,Z)clearInterval(Z);Z=setInterval(()=>{if(q--,$.freeCooldown.textContent=q,q<=0)clearInterval(Z),Z=null,$.freeCoinsBtn.disabled=!1},1000),$.freeCoinsBtn.onclick=()=>{if($.freeCoinsBtn.disabled)return;if(Q.onClaimFree)Q.onClaimFree();d()}}function d(){if($.freeModal.classList.add("hidden"),Z)clearInterval(Z),Z=null}function Y0(N){if(N>0)$.regenTimer.classList.remove("hidden"),$.regenCountdown.textContent=Math.ceil(N);else $.regenTimer.classList.add("hidden")}function N0(N){let q=N.currency==="dollars"?"\uD83D\uDCB5":"\uD83E\uDE99";if(N.isAuto){if(N.earned>0)u("\uD83E\uDD16 +"+N.earned+" "+q,window.innerWidth/2-40,window.innerHeight/2-50);return}if(N.earned>0){let I=$.dropBtn.getBoundingClientRect(),v="+"+N.earned+" "+q;if(N.earned>=5)v="\uD83C\uDF89 +"+N.earned+" "+q;if(N.isCombo)v="\uD83D\uDD25 "+A0("comboText")+N.comboCount+"! +"+N.earned+" "+q;u(v,I.left+I.width/2-40,I.top-30)}if(N.isCombo&&N.comboCount>3)L("\uD83D\uDD25 "+A0("comboText")+N.comboCount+"!","success")}function E0(N){let q=document.querySelector(".coins-wasted");if(q)q.remove();let I=document.createElement("div");I.className="coins-wasted",I.textContent="⚠️ +"+N+" "+A0("wastedCoins"),I.style.left=window.innerWidth/2-100+"px",I.style.top="120px",document.body.appendChild(I),setTimeout(()=>{if(I.parentNode)I.remove()},2200)}function v0(){if(!$.prestigeProgressBar||!$.prestigeProgressText)return;let N=100,q=Math.min(1,(J.totalEarnedLifetime||J.totalEarned||0)/N);$.prestigeProgressBar.style.width=q*100+"%",$.prestigeProgressText.textContent=Math.floor(J.totalEarnedLifetime||J.totalEarned||0)+" / "+N}function w0(){if(!$.cardsGrid)return;let N=J.collectedCards||[];if(N.length>0)$.collectedCards.classList.remove("hidden"),$.cardsGrid.innerHTML="",N.forEach((q,I)=>{let v=document.createElement("div");v.className="card-item",v.textContent="\uD83C\uDCCF "+(I+1),v.title=q,$.cardsGrid.appendChild(v)});else $.collectedCards.classList.add("hidden")}function XJ(N,q,I,v){let l=document.createElement("div");l.className="zone-feedback "+q,l.textContent=N,l.style.left=I+"px",l.style.top=v+"px",document.body.appendChild(l),setTimeout(()=>{if(l.parentNode)l.remove()},1500)}function ZJ(N){let q=N>=2?"shake-hard":"shake-soft";document.body.classList.remove("shake-soft","shake-hard"),document.body.offsetWidth,document.body.classList.add(q)}function K0(N){E(),F(),C();let q=N.activeCurrency==="dollars"?N.dollars>=1:N.coins>=1;if(T(q),N.isGameOver)Q0(N.regenCooldown);if($.autoDropToggle)$.autoDropToggle.checked=!!N.autoDropEnabled;if(t(N.dropCount),v0(),X==="prestige")$.prestigePointsBig.textContent=N.prestigePoints||0,k(),w0();let I=N.totalEarned>=100||N.totalDollarsEarned>=10;if($.prestigeBtn.disabled=!I,N.prestigePoints>0)$.prestigeBadge.classList.remove("hidden"),$.prestigePointsDisplay.textContent=N.prestigePoints}function O0(){return Y}function L0(){return H}function M0(N){if(Y=!!N,J.autoDropEnabled=Y,$.autoDropToggle)$.autoDropToggle.checked=Y}function X0(N){if(H=!!N,EX(H),$.soundToggle)$.soundToggle.checked=H}let $0="coinpusher_tutorial_dismissed";function g(){try{return localStorage.getItem($0)==="1"}catch(N){return!1}}function o(){let N=document.getElementById("tutorial-overlay");if(!N||N.classList.contains("hidden"))return;N.classList.add("hiding");try{localStorage.setItem($0,"1")}catch(q){}setTimeout(()=>{N.classList.add("hidden"),N.classList.remove("hiding")},350)}function f(){if(g())return;setTimeout(()=>{let N=document.getElementById("tutorial-overlay");if(!N)return;N.classList.remove("hidden"),N.addEventListener("click",o,{once:!0})},700)}if($.dropBtn.addEventListener("click",()=>{if(Q.onDrop)Q.onDrop();o()}),document.addEventListener("keydown",(N)=>{let q=N.target;if(q&&(q.tagName==="INPUT"||q.tagName==="TEXTAREA"))return;if(N.code==="Space"&&!N.repeat){if(N.preventDefault(),o(),Q.onDrop)Q.onDrop()}}),$.currencyBtns.forEach((N)=>{N.addEventListener("click",()=>{if(Q.onCurrencySwitch)Q.onCurrencySwitch(N.dataset.currency)}),N.addEventListener("pointerenter",()=>{let q=performance.now();if(H&&q-U>120)U=q,P8("click")},{passive:!0})}),$.tabs.forEach((N)=>{N.addEventListener("click",()=>A(N.dataset.tab))}),$.panelToggle.addEventListener("click",()=>{$.panelContent.classList.toggle("collapsed"),$.panelToggle.classList.toggle("collapsed")}),$.resetBtn)$.resetBtn.addEventListener("click",()=>{if(Q.onReset)Q.onReset()});if($.prestigeBtn)$.prestigeBtn.addEventListener("click",()=>{if(Q.onPrestige)Q.onPrestige()});if($.langBtn)$.langBtn.addEventListener("click",R);if($.autoDropToggle)$.autoDropToggle.addEventListener("change",(N)=>{Y=N.target.checked,J.autoDropEnabled=Y});if($.soundToggle)$.soundToggle.addEventListener("change",(N)=>{H=N.target.checked,X0(H)});if(document.addEventListener("keydown",(N)=>{let q=N.target;if(q&&(q.tagName==="INPUT"||q.tagName==="TEXTAREA"))return;if(o(),N.code==="Tab"&&!N.repeat&&l0.isPrestigeReady&&l0.isPrestigeReady()){if(N.preventDefault(),Q.onPrestige)Q.onPrestige();return}let I=P();if(N.key>="1"&&N.key<="9"){let v=parseInt(N.key)-1;if(v<I.length&&Q.onBuyUpgrade)Q.onBuyUpgrade(I[v].id)}else if(N.key==="0"){if(9<I.length&&Q.onBuyUpgrade)Q.onBuyUpgrade(I[9].id)}}),$.soundToggle)$.soundToggle.checked=H;G(),M(),f();let _=K0;function h(N){_(N),l0.isPrestigeReady=()=>!!(N&&(N.totalEarned>=100||N.totalDollarsEarned>=10))}function r(N=20){let q=document.getElementById("coin-rain-container");if(!q)q=document.createElement("div"),q.id="coin-rain-container",document.body.appendChild(q);let I=["\uD83E\uDE99","\uD83D\uDCB0","⭐","✨","\uD83E\uDE99"];for(let v=0;v<N;v++){let l=document.createElement("div");l.className="coin-rain-particle",l.textContent=I[Math.floor(Math.random()*I.length)],l.style.left=Math.random()*100+"%",l.style.fontSize=16+Math.random()*18+"px",l.style.animationDuration=1.5+Math.random()*2+"s",l.style.animationDelay=Math.random()*0.8+"s",q.appendChild(l),setTimeout(()=>{if(l.parentNode)l.remove()},4000)}}function m(){let N=document.createElement("div");N.className="upgrade-flash",document.body.appendChild(N),setTimeout(()=>{if(N.parentNode)N.remove()},700)}let w=null;function p0(){if(!w)w=document.createElement("div"),w.className="gamble-btn-container",w.id="gamble-section";let N=$.shopView;if(N&&!w.parentNode){let P0=$.upgradesList;if(P0&&P0.parentNode===N)P0.after(w);else N.appendChild(w)}let q=Math.floor(J.coins),I=q>=1,v=Math.max(1,Math.min(q,m0||q)),l=A0("gambleMax"),U0=A0("gambleHalf");w.innerHTML=`
      <button class="gamble-btn" id="gamble-btn" ${I?"":"disabled"}>
        \uD83C\uDFB2 ${A0("gambleTitle")}
      </button>
      <div style="font-size:11px;color:var(--text-dim);margin-top:2px;">${A0("gambleDesc")}</div>
      <div class="gamble-controls">
        <button class="gamble-wager-btn" id="gamble-half-btn" ${I?"":"disabled"}>½ ${U0}</button>
        <input type="number" class="gamble-wager-input" id="gamble-wager"
          value="${Math.min(v,q)}" min="1" max="${Math.max(1,q)}" ${I?"":"disabled"}>
        <button class="gamble-wager-btn" id="gamble-max-btn" ${I?"":"disabled"}>${l}</button>
      </div>
    `;let G0=w.querySelector("#gamble-btn"),e=w.querySelector("#gamble-wager"),Z0=w.querySelector("#gamble-half-btn"),k0=w.querySelector("#gamble-max-btn");if(G0)G0.addEventListener("click",()=>{let P0=parseInt(e?.value||1);if(P0>0&&Q.onGamble)Q.onGamble(P0)});if(Z0)Z0.addEventListener("click",()=>{let P0=Math.max(1,Math.floor(q/2));if(e)e.value=P0;m0=P0});if(k0)k0.addEventListener("click",()=>{if(e)e.value=q;m0=q});if(e)e.addEventListener("change",()=>{let P0=parseInt(e.value)||1;m0=Math.max(1,Math.min(P0,q)),e.value=m0})}let m0=10;function s0(){if(w&&w.parentNode)p0()}function y(N){let q=document.createElement("div");q.className="gamble-result-overlay";let I=document.createElement("div");I.className="gamble-result-card "+(N.win?"win":"lose");let v=N.win?"\uD83C\uDF89":"\uD83D\uDC80",l=N.win?A0("gambleWin"):A0("gambleLose"),U0=N.win?"+"+N.wager:"-"+N.wager;if(I.innerHTML=`
      <div class="gamble-result-title">${v} ${l}</div>
      <div class="gamble-result-amount">${U0} \uD83E\uDE99</div>
    `,q.appendChild(I),document.body.appendChild(q),N.win)r(30);setTimeout(()=>{q.style.transition="opacity 0.3s",q.style.opacity="0",setTimeout(()=>{if(q.parentNode)q.remove()},350)},1400)}let JJ=h;function b0(N){JJ(N),s0()}let l0={updateHUD:E,updateDropButton:T,renderUpgrades:C,renderPrestigeUpgrades:k,showNotification:L,showFloatingReward:u,showJackpot:i,showMilestone:S,updateStreak:n,renderStatsPanel:J0,showDropResult:N0,showFreeModal:Q0,hideFreeModal:d,updateRegenTimer:Y0,updateCombo:t,refresh:b0,switchTab:A,updateCurrencyUI:F,showCoinsWasted:E0,showZoneFeedback:XJ,renderPrestigeProgress:v0,renderCollectedCards:w0,isAutoDropEnabled:O0,isSoundEnabled:L0,setAutoDropEnabled:M0,setSoundEnabled:X0,isPrestigeReady:()=>!1,dismissTutorial:o,screenShake:ZJ,showCoinRain:r,showUpgradeFlash:m,renderGambleUI:p0,showGambleResult:y};return l0}var yN=document.getElementById("canvas-container"),BX=nZ(yN);if(!BX)throw console.warn("Aborting game init: WebGL unavailable."),Error("WebGL unavailable");var{scene:EQ,camera:vN,renderer:hN,controls:bN,updateFlames:fN,updateAmbient:xN,pulseEvent:MX}=BX,dJ=sZ(EQ),q0=HX(),gN=(q0.collectedCards||[]).length,TK=[],DQ=null,o9=eZ(EQ,dJ,gN,(J,Q,$,K)=>{let W={x:J,y:Q,z:$,strength:K};if(DQ)DQ(W);else TK.push(W)});function pN(){if(!qX(q0,(Q)=>{let $=Q.currency==="dollars"?"dollar":"coin",K=Math.max(1,Math.floor(Q.coinsPerDrop||1));for(let W=0;W<K;W++)setTimeout(()=>o9.dropObject(Q.pushForce,$),W*50);if(A9.emit(dJ.dropX,dJ.dropHeight-0.3,dJ.dropZ,Math.min(12,K*3)),Q.comboBonus>0)n0.showNotification("\uD83D\uDD25 Combo bonus +"+Q.comboBonus+" coin!","success");n0.showDropResult(Q),n0.updateCombo(Q.comboCount),P8("drop")}).success){let $=(q0.activeCurrency==="dollars"?"\uD83D\uDCB5":"\uD83E\uDE99")+" "+A0(q0.activeCurrency==="dollars"?"notEnoughDollars":"notEnoughCoins");if(n0.showNotification($,"danger"),q0.activeCurrency==="coins"&&q0.coins<=0&&q0.dollars<=0){if(!q0._regenInitialized)q0.regenCooldown=$9(q0).regenCooldown,q0._regenInitialized=!0;q0.isGameOver=!0}}n0.refresh(q0),O8(q0)}function mN(J,Q=1){let $=NX(q0,J,Q);if($.success){let K=$.levelsPurchased>1?"⬆️ "+A0("upgraded")+$.newLevel+" (+"+$.levelsPurchased+")":"⬆️ "+A0("upgraded")+$.newLevel;n0.showNotification(K,"success"),n0.showUpgradeFlash(),n0.refresh(q0),O8(q0),P8("upgrade")}else if($.reason==="not_enough_coins")n0.showNotification("\uD83E\uDE99 "+A0("notEnoughCoins"),"danger");else if($.reason==="max_level")n0.showNotification("⭐ "+A0("maxLevel"),"info")}function dN(J){let Q=GX(q0,J);if(Q.success)n0.showNotification("\uD83D\uDC51 "+A0("prestigeUp")+Q.newLevel,"prestige"),n0.refresh(q0),O8(q0),P8("upgrade");else if(Q.reason==="not_enough_prestige")n0.showNotification(A0("notEnoughPrestige"),"danger");else if(Q.reason==="max_level")n0.showNotification("⭐ "+A0("maxLevel"),"info")}function uN(){let J=FX(q0);n0.showNotification("\uD83C\uDF81 +"+J+" "+A0("freeCoins"),"success"),q0.isGameOver=!1,n0.hideFreeModal(),n0.refresh(q0),O8(q0)}function lN(J){q0.activeCurrency=J,n0.updateCurrencyUI(),n0.updateDropButton(J==="coins"?q0.coins>=1:q0.dollars>=1)}function cN(){let J=OX(q0);if(J.success)n0.showNotification("\uD83C\uDF1F "+A0("prestigeGain")+J.gained+A0("prestigeTotal")+J.prestigePoints+")","prestige"),o9.initObjects(20,3),n0.refresh(q0),n0.switchTab("prestige"),O8(q0),P8("prestige");else if(J.reason==="no_gain")n0.showNotification(A0("prestigeWait")+J.current+A0("prestigeCurrent"),"info")}function nN(){if(confirm(A0("resetConfirm")))YX(),location.reload()}function sN(J){let Q=UX(q0,J);if(Q.success)n0.showGambleResult(Q),n0.refresh(q0),O8(q0),P8(Q.win?"win":"lose");else n0.showNotification("\uD83E\uDE99 "+A0("notEnoughCoins"),"danger")}var n0=kX(q0,{onDrop:pN,onBuyUpgrade:mN,onBuyPrestigeUpgrade:dN,onClaimFree:uN,onReset:nN,onPrestige:cN,onCurrencySwitch:lN,onGamble:sN});n0.renderGambleUI();var A9=(()=>{let Q=new SJ,$=new Float32Array(600),K=new Float32Array(600),W=new Float32Array(600),Z=new Float32Array(200);for(let O=0;O<200;O++)$[O*3]=0,$[O*3+1]=-10,$[O*3+2]=0,K[O*3]=0.6+Math.random()*0.4,K[O*3+1]=0.2+Math.random()*0.3,K[O*3+2]=0.6+Math.random()*0.4,Z[O]=0;Q.setAttribute("position",new bJ($,3)),Q.setAttribute("color",new bJ(K,3));let X=new k9({size:0.04,vertexColors:!0,transparent:!0,opacity:0.7,blending:f8}),Y=new m9(Q,X);EQ.add(Y);let H=0;function U(O,G,R,M=10){let z=Q.attributes.position.array;for(let E=0;E<Math.min(M,200);E++){let F=(H+E)%200;z[F*3]=O+(Math.random()-0.5)*0.6,z[F*3+1]=G+(Math.random()-0.5)*0.6,z[F*3+2]=R+(Math.random()-0.5)*0.6,W[F*3]=(Math.random()-0.5)*2,W[F*3+1]=Math.random()*3+1,W[F*3+2]=(Math.random()-0.5)*2,Z[F]=1+Math.random()}H=(H+M)%200,Q.attributes.position.needsUpdate=!0}function D(O){let G=Q.attributes.position.array,R=!1;for(let M=0;M<200;M++)if(Z[M]>0){if(Z[M]-=O,G[M*3]+=W[M*3]*O,G[M*3+1]+=W[M*3+1]*O,G[M*3+2]+=W[M*3+2]*O,W[M*3+1]-=4*O,R=!0,Z[M]<=0)G[M*3+1]=-10}if(R)Q.attributes.position.needsUpdate=!0}return{emit:U,update:D}})();DQ=({x:J,y:Q,z:$,strength:K})=>{P8(K>0.55?"sparkle":"coin"),A9.emit(J,Q+0.04,$,K>0.55?3:1)};for(let J of TK)DQ(J);TK.length=0;XX(q0);o9.initObjects(20,5);n0.refresh(q0);var VX=performance.now(),CK=0,iN=[{value:100,key:"milestone100"},{value:500,key:"milestone500"},{value:1000,key:"milestone1k"},{value:5000,key:"milestone5k"},{value:1e4,key:"milestone10k"},{value:50000,key:"milestone50k"},{value:1e5,key:"milestone100k"},{value:500000,key:"milestone500k"},{value:1e6,key:"milestone1m"}];function oN(J,Q){let $=J.milestonesHit||[];for(let K of iN)if(Q>=K.value&&!$.includes(K.value))return K;return null}function aN(J){if(J.coins>(J.peakCoins||0))J.peakCoins=Math.floor(J.coins);if(J.dollars>(J.peakDollars||0))J.peakDollars=Math.floor(J.dollars);if(J.dropCount>(J.peakCombo||0))J.peakCombo=J.dropCount}function LX(J){requestAnimationFrame(LX);let Q=Math.min((J-VX)/1000,0.05);if(VX=J,DX(q0,Q,($)=>{let K=$.currency==="dollars"?"dollar":"coin",W=Math.max(1,Math.floor($.coinsPerDrop||1));for(let Z=0;Z<W;Z++)setTimeout(()=>o9.dropObject($.pushForce,K),Z*50);A9.emit(dJ.dropX,dJ.dropHeight-0.3,dJ.dropZ,Math.min(10,W*2)),n0.showDropResult($),n0.updateCombo($.comboCount)}),CK+=Q,CK>0.5){CK=0;let $=o9.collectFallen(),K=$9(q0),W=Math.floor($.win.coins*K.rewardMultiplier),Z=Math.floor($.win.dollars*K.dollarMultiplier),X=$.hole.coins,Y=$.hole.dollars;if(W>0||Z>0||$.win.cards.length>0){let H=0,U=Math.max(0,Math.min(1,K.luckChance||0));if(U>0&&$.win.coins>0){for(let V=0;V<$.win.coins;V++)if(Math.random()<U){let P=Math.random()<0.6?2:Math.random()<0.85?3:4;H+=P-1}}let D=0;if(U>0&&$.win.cards.length>0){for(let V=0;V<$.win.cards.length;V++)if(Math.random()<U)D+=5}let O=W+H+D,G=1,R=K.goldenTouch||0;if(R>0&&Math.random()<R&&O>0)G=2,n0.showNotification("\uD83E\uDD32 GOLDEN TOUCH! Double coins!","prestige"),n0.showZoneFeedback("×2 GOLDEN!","win",window.innerWidth/2,window.innerHeight/2+120);let M=O*G,z=Math.min(M,q0.maxCoins-q0.coins),E=M-Math.max(0,z);if(q0.coins+=Math.max(0,z),q0.totalEarned+=Math.max(0,z),q0.totalEarnedLifetime=(q0.totalEarnedLifetime||0)+Math.max(0,z),Z>0){let V=Math.min(Z,q0.maxDollars-q0.dollars);q0.dollars+=Math.max(0,V),q0.totalDollarsEarned=(q0.totalDollarsEarned||0)+Math.max(0,V)}if(H>1)n0.showNotification("\uD83C\uDF40 Lucky bonus +"+H+" !","prestige");if(E>0&&q0.coins>=q0.maxCoins)n0.showCoinsWasted(E);A9.emit(0,dJ.height+0.3,dJ.frontDropZ+0.3,(W+Z+$.win.cards.length)*5);let F=W+Z+$.win.cards.length;if(F>0)o9.spawnWinCoins(F,dJ.leftX+1,dJ.rightX-1);if(z>0){if(MX(z>=5?"bigwin":"win"),n0.showNotification("\uD83C\uDF89 +"+z+" "+A0("coinsEarned"),"success"),P8(z>=5?"bigwin":"win"),n0.showZoneFeedback("+"+z,"win",window.innerWidth/2+(Math.random()-0.5)*100,window.innerHeight/2+80),z>=10)n0.screenShake(2);else if(z>=3)n0.screenShake(1)}let T=K.jackpotChance||0.02;if(z>0&&Math.random()<T){let V=Math.random(),P=V<0.7?25:V<0.95?50:100;n0.showJackpot(P),n0.screenShake(2),MX("jackpot"),P8("jackpot"),n0.showCoinRain(35),A9.emit(0,dJ.height+0.6,dJ.frontDropZ+0.5,60),q0.coins=Math.min(q0.coins+P,q0.maxCoins),q0.totalEarned+=P,q0.totalEarnedLifetime=(q0.totalEarnedLifetime||q0.totalEarned)+P,q0.jackpotsHit=(q0.jackpotsHit||0)+1}let A=0;while(A++<4){let V=oN(q0,q0.totalEarnedLifetime||0);if(!V)break;q0.milestonesHit.push(V.value);let P=Math.floor(V.value*0.05);if(P>0)q0.coins=Math.min(q0.coins+P,q0.maxCoins),q0.totalEarned+=P,q0.totalEarnedLifetime=(q0.totalEarnedLifetime||q0.totalEarned)+P;n0.showMilestone(V,P),n0.showCoinRain(15),A9.emit(0,dJ.height+0.5,dJ.frontDropZ+0.4,25)}if($.win.cards.length>0){if(!q0.collectedCards)q0.collectedCards=[];$.win.cards.forEach((V)=>{if(!q0.collectedCards.includes(V)){q0.collectedCards.push(V),n0.showNotification("\uD83C\uDCCF "+A0("cardCollected")+q0.collectedCards.length,"prestige");let P=10;q0.coins=Math.min(q0.coins+P,q0.maxCoins),q0.totalEarned+=P,q0.totalEarnedLifetime=(q0.totalEarnedLifetime||q0.totalEarned)+P}})}}if(X>0||Y>0||$.hole.cards.length>0){if(A9.emit(0,dJ.height+0.3,dJ.frontDropZ+0.3,(X+Y+$.hole.cards.length)*3),X>1){if(n0.showNotification("\uD83D\uDC80 "+X+" "+A0("coinsLost"),"danger"),P8("lose"),n0.showZoneFeedback("-"+X,"hole",window.innerWidth/2+(Math.random()-0.5)*100,window.innerHeight/2+80),X>=3)n0.screenShake(1)}if(Y>0)n0.showNotification("\uD83D\uDC80 "+Y+" $ "+A0("coinsLost"),"danger");if($.hole.cards.length>0)n0.showNotification("\uD83D\uDC94 "+$.hole.cards.length+" "+A0("cardsLost"),"danger")}if(X>0){if(q0.winStreak>0)q0.bestWinStreak=Math.max(q0.bestWinStreak||0,q0.winStreak);q0.winStreak=0,n0.updateStreak(0,q0.bestWinStreak||0,!0)}else if(W>0||Z>0){if(q0.winStreak=(q0.winStreak||0)+1,q0.winStreak>(q0.bestWinStreak||0))q0.bestWinStreak=q0.winStreak;n0.updateStreak(q0.winStreak,q0.bestWinStreak||0,!1)}aN(q0)}if(dJ.updateMechanism(J/1000),o9.update(Q,J/1000),A9.update(Q),fN(J/1000),xN(J/1000,Q),n0.updateHUD(),q0.coins<=0&&q0.dollars<=0&&q0.regenCooldown>0)n0.updateRegenTimer(q0.regenCooldown);else if(q0.isGameOver)n0.showFreeModal(Math.max(1,q0.regenCooldown));else n0.hideFreeModal();bN.update(),hN.render(EQ,vN)}LX(performance.now());window.addEventListener("beforeunload",()=>O8(q0));console.log("\uD83C\uDCCF COIN PUSHER CASINO OCCULT loaded!");console.log("\uD83C\uDFAE SPACE=drop, 1-9,0=upgrades, TAB=prestige");
