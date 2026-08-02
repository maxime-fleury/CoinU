var FW="185",k9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},M9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},OW=0,J$=1,DW=2;var Q$=0,m9=1,EW=2,L7=3,z7=0,$8=1,LJ=2,l8=0,o7=1,I8=2,$$=3,K$=4,RW=5;var I7=100,kW=101,MW=102,VW=103,BW=104,LW=200,zW=201,IW=202,PW=203,AW=204,_W=205,wW=206,CW=207,TW=208,SW=209,jW=210,yW=211,vW=212,hW=213,bW=214,fW=0,xW=1,gW=2,W$=3,pW=4,mW=5,dW=6,uW=7,lW=0,cW=1,nW=2,b8=0,Z$=1,X$=2,Y$=3,r7=4,H$=5,U$=6,q$=7;var P7=301,d9=302,u6=303,l6=304,a7=306,t7=1000,c6=1001,sW=1002,V9=1003,iW=1004;var e7=1005;var G8=1006,n6=1007;var u9=1008;var f8=1009,oW=1010,rW=1011,J6=1012,N$=1013,B9=1014,W9=1015,Z9=1016,G$=1017,F$=1018,A7=1020,aW=35902,tW=35899,eW=1021,JZ=1022,c8=1023,l9=1026,c9=1027,QZ=1028,O$=1029,n9=1030,D$=1031;var E$=1033,s6=33776,i6=33777,o6=33778,r6=33779,R$=35840,k$=35841,M$=35842,V$=35843,B$=36196,L$=37492,z$=37496,I$=37488,P$=37489,a6=37490,A$=37491,_$=37808,w$=37809,C$=37810,T$=37811,S$=37812,j$=37813,y$=37814,v$=37815,h$=37816,b$=37817,f$=37818,x$=37819,g$=37820,p$=37821,m$=36492,d$=36494,u$=36495,l$=36283,c$=36284,t6=36285,n$=36286;var s$=0,$Z=1,s9="",P8="srgb",i$="srgb-linear",o$="linear",zJ="srgb";var KZ=512,WZ=513,ZZ=514,e6=515,XZ=516,YZ=517,JQ=518,HZ=519;var r$="300 es",a$=2000;function cX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function nX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function i7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function UZ(){let J=i7("canvas");return J.style.display="block",J}var lK={},B7=null;function t$(...J){let Q="THREE."+J.shift();if(B7)B7("log",Q,...J);else console.log(Q,...J)}function qZ(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function r0(...J){J=qZ(J);let Q="THREE."+J.shift();if(B7)B7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function JJ(...J){J=qZ(J);let Q="THREE."+J.shift();if(B7)B7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function g9(...J){let Q=J.join(" ");if(Q in lK)return;lK[Q]=!0,r0(...J)}function NZ(J,Q,$){return new Promise(function(K,W){function Z(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(Z,$);break;default:K()}}setTimeout(Z,$)})}var GZ={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class n8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let K=$[J];if(K!==void 0){let W=K.indexOf(Q);if(W!==-1)K.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let K=$.slice(0);for(let W=0,Z=K.length;W<Z;W++)K[W].call(this,J);J.target=null}}}var J8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cK=1234567,n7=Math.PI/180,p9=180/Math.PI;function _7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(J8[J&255]+J8[J>>8&255]+J8[J>>16&255]+J8[J>>24&255]+"-"+J8[Q&255]+J8[Q>>8&255]+"-"+J8[Q>>16&15|64]+J8[Q>>24&255]+"-"+J8[$&63|128]+J8[$>>8&255]+"-"+J8[$>>16&255]+J8[$>>24&255]+J8[K&255]+J8[K>>8&255]+J8[K>>16&255]+J8[K>>24&255]).toLowerCase()}function UJ(J,Q,$){return Math.max(Q,Math.min($,J))}function e$(J,Q){return(J%Q+Q)%Q}function sX(J,Q,$,K,W){return K+(J-Q)*(W-K)/($-Q)}function iX(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function s7(J,Q,$){return(1-$)*J+$*Q}function oX(J,Q,$,K){return s7(J,Q,1-Math.exp(-$*K))}function rX(J,Q=1){return Q-Math.abs(e$(J,Q*2)-Q)}function aX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function tX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function eX(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function JY(J,Q){return J+Math.random()*(Q-J)}function QY(J){return J*(0.5-Math.random())}function $Y(J){if(J!==void 0)cK=J;let Q=cK+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function KY(J){return J*n7}function WY(J){return J*p9}function ZY(J){return(J&J-1)===0&&J!==0}function XY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function YY(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function HY(J,Q,$,K,W){let{cos:Z,sin:X}=Math,Y=Z($/2),H=X($/2),U=Z((Q+K)/2),O=X((Q+K)/2),D=Z((Q-K)/2),G=X((Q-K)/2),R=Z((K-Q)/2),M=X((K-Q)/2);switch(W){case"XYX":J.set(Y*O,H*D,H*G,Y*U);break;case"YZY":J.set(H*G,Y*O,H*D,Y*U);break;case"ZXZ":J.set(H*D,H*G,Y*O,Y*U);break;case"XZX":J.set(Y*O,H*M,H*R,Y*U);break;case"YXY":J.set(H*R,Y*O,H*M,Y*U);break;case"ZYZ":J.set(H*M,H*R,Y*O,Y*U);break;default:r0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function M7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function X8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var JK={DEG2RAD:n7,RAD2DEG:p9,generateUUID:_7,clamp:UJ,euclideanModulo:e$,mapLinear:sX,inverseLerp:iX,lerp:s7,damp:oX,pingpong:rX,smoothstep:aX,smootherstep:tX,randInt:eX,randFloat:JY,randFloatSpread:QY,seededRandom:$Y,degToRad:KY,radToDeg:WY,isPowerOfTwo:ZY,ceilPowerOfTwo:XY,floorPowerOfTwo:YY,setQuaternionFromProperEuler:HY,normalize:X8,denormalize:M7};class i0{static{i0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6],this.y=K[1]*Q+K[4]*$+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=UJ(this.x,J.x,Q.x),this.y=UJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=UJ(this.x,J,Q),this.y=UJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(UJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(UJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),K=Math.sin(Q),W=this.x-J.x,Z=this.y-J.y;return this.x=W*$-Z*K+J.x,this.y=W*K+Z*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class A8{constructor(J=0,Q=0,$=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=K}static slerpFlat(J,Q,$,K,W,Z,X){let Y=$[K+0],H=$[K+1],U=$[K+2],O=$[K+3],D=W[Z+0],G=W[Z+1],R=W[Z+2],M=W[Z+3];if(O!==M||Y!==D||H!==G||U!==R){let P=Y*D+H*G+U*R+O*M;if(P<0)D=-D,G=-G,R=-R,M=-M,P=-P;let E=1-X;if(P<0.9995){let F=Math.acos(P),T=Math.sin(F);E=Math.sin(E*F)/T,X=Math.sin(X*F)/T,Y=Y*E+D*X,H=H*E+G*X,U=U*E+R*X,O=O*E+M*X}else{Y=Y*E+D*X,H=H*E+G*X,U=U*E+R*X,O=O*E+M*X;let F=1/Math.sqrt(Y*Y+H*H+U*U+O*O);Y*=F,H*=F,U*=F,O*=F}}J[Q]=Y,J[Q+1]=H,J[Q+2]=U,J[Q+3]=O}static multiplyQuaternionsFlat(J,Q,$,K,W,Z){let X=$[K],Y=$[K+1],H=$[K+2],U=$[K+3],O=W[Z],D=W[Z+1],G=W[Z+2],R=W[Z+3];return J[Q]=X*R+U*O+Y*G-H*D,J[Q+1]=Y*R+U*D+H*O-X*G,J[Q+2]=H*R+U*G+X*D-Y*O,J[Q+3]=U*R-X*O-Y*D-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,K){return this._x=J,this._y=Q,this._z=$,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:K,_z:W,_order:Z}=J,X=Math.cos,Y=Math.sin,H=X($/2),U=X(K/2),O=X(W/2),D=Y($/2),G=Y(K/2),R=Y(W/2);switch(Z){case"XYZ":this._x=D*U*O+H*G*R,this._y=H*G*O-D*U*R,this._z=H*U*R+D*G*O,this._w=H*U*O-D*G*R;break;case"YXZ":this._x=D*U*O+H*G*R,this._y=H*G*O-D*U*R,this._z=H*U*R-D*G*O,this._w=H*U*O+D*G*R;break;case"ZXY":this._x=D*U*O-H*G*R,this._y=H*G*O+D*U*R,this._z=H*U*R+D*G*O,this._w=H*U*O-D*G*R;break;case"ZYX":this._x=D*U*O-H*G*R,this._y=H*G*O+D*U*R,this._z=H*U*R-D*G*O,this._w=H*U*O+D*G*R;break;case"YZX":this._x=D*U*O+H*G*R,this._y=H*G*O+D*U*R,this._z=H*U*R-D*G*O,this._w=H*U*O-D*G*R;break;case"XZY":this._x=D*U*O-H*G*R,this._y=H*G*O-D*U*R,this._z=H*U*R+D*G*O,this._w=H*U*O+D*G*R;break;default:r0("Quaternion: .setFromEuler() encountered an unknown order: "+Z)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,K=Math.sin($);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],K=Q[4],W=Q[8],Z=Q[1],X=Q[5],Y=Q[9],H=Q[2],U=Q[6],O=Q[10],D=$+X+O;if(D>0){let G=0.5/Math.sqrt(D+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(W-H)*G,this._z=(Z-K)*G}else if($>X&&$>O){let G=2*Math.sqrt(1+$-X-O);this._w=(U-Y)/G,this._x=0.25*G,this._y=(K+Z)/G,this._z=(W+H)/G}else if(X>O){let G=2*Math.sqrt(1+X-$-O);this._w=(W-H)/G,this._x=(K+Z)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+O-$-X);this._w=(Z-K)/G,this._x=(W+H)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(UJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let K=Math.min(1,Q/$);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:K,_z:W,_w:Z}=J,X=Q._x,Y=Q._y,H=Q._z,U=Q._w;return this._x=$*U+Z*X+K*H-W*Y,this._y=K*U+Z*Y+W*X-$*H,this._z=W*U+Z*H+$*Y-K*X,this._w=Z*U-$*X-K*Y-W*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:K,_z:W,_w:Z}=J,X=this.dot(J);if(X<0)$=-$,K=-K,W=-W,Z=-Z,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+Z*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+Z*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),K=Math.sqrt(1-$),W=Math.sqrt($);return this.set(K*Math.sin(J),K*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class g{static{g.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(nK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(nK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*K,this.y=W[1]*Q+W[4]*$+W[7]*K,this.z=W[2]*Q+W[5]*$+W[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,K=this.z,W=J.elements,Z=1/(W[3]*Q+W[7]*$+W[11]*K+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*K+W[12])*Z,this.y=(W[1]*Q+W[5]*$+W[9]*K+W[13])*Z,this.z=(W[2]*Q+W[6]*$+W[10]*K+W[14])*Z,this}applyQuaternion(J){let Q=this.x,$=this.y,K=this.z,W=J.x,Z=J.y,X=J.z,Y=J.w,H=2*(Z*K-X*$),U=2*(X*Q-W*K),O=2*(W*$-Z*Q);return this.x=Q+Y*H+Z*O-X*U,this.y=$+Y*U+X*H-W*O,this.z=K+Y*O+W*U-Z*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*K,this.y=W[1]*Q+W[5]*$+W[9]*K,this.z=W[2]*Q+W[6]*$+W[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=UJ(this.x,J.x,Q.x),this.y=UJ(this.y,J.y,Q.y),this.z=UJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=UJ(this.x,J,Q),this.y=UJ(this.y,J,Q),this.z=UJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(UJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:K,z:W}=J,Z=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-W*X,this.y=W*Z-$*Y,this.z=$*X-K*Z,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return SQ.copy(this).projectOnVector(J),this.sub(SQ)}reflect(J){return this.sub(SQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(UJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,K=this.z-J.z;return Q*Q+$*$+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let K=Math.sin(Q)*J;return this.x=K*Math.sin($),this.y=Math.cos(Q)*J,this.z=K*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var SQ=new g,nK=new A8;class WJ{static{WJ.prototype.isMatrix3=!0}constructor(J,Q,$,K,W,Z,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,K,W,Z,X,Y,H)}set(J,Q,$,K,W,Z,X,Y,H){let U=this.elements;return U[0]=J,U[1]=K,U[2]=X,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=Z,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,K=Q.elements,W=this.elements,Z=$[0],X=$[3],Y=$[6],H=$[1],U=$[4],O=$[7],D=$[2],G=$[5],R=$[8],M=K[0],P=K[3],E=K[6],F=K[1],T=K[4],w=K[7],L=K[2],A=K[5],C=K[8];return W[0]=Z*M+X*F+Y*L,W[3]=Z*P+X*T+Y*A,W[6]=Z*E+X*w+Y*C,W[1]=H*M+U*F+O*L,W[4]=H*P+U*T+O*A,W[7]=H*E+U*w+O*C,W[2]=D*M+G*F+R*L,W[5]=D*P+G*T+R*A,W[8]=D*E+G*w+R*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return Q*Z*U-Q*X*H-$*W*U+$*X*Y+K*W*H-K*Z*Y}invert(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],O=U*Z-X*H,D=X*Y-U*W,G=H*W-Z*Y,R=Q*O+$*D+K*G;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/R;return J[0]=O*M,J[1]=(K*H-U*$)*M,J[2]=(X*$-K*Z)*M,J[3]=D*M,J[4]=(U*Q-K*Y)*M,J[5]=(K*W-X*Q)*M,J[6]=G*M,J[7]=($*Y-H*Q)*M,J[8]=(Z*Q-$*W)*M,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,K,W,Z,X){let Y=Math.cos(W),H=Math.sin(W);return this.set($*Y,$*H,-$*(Y*Z+H*X)+Z+J,-K*H,K*Y,-K*(-H*Z+Y*X)+X+Q,0,0,1),this}scale(J,Q){return g9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jQ.makeScale(J,Q)),this}rotate(J){return g9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jQ.makeRotation(-J)),this}translate(J,Q){return g9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let K=0;K<9;K++)if(Q[K]!==$[K])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var jQ=new WJ,sK=new WJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),iK=new WJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function UY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,Z,X){if(this.enabled===!1||Z===X||!Z||!X)return W;if(this.spaces[Z].transfer==="srgb")W.r=$9(W.r),W.g=$9(W.g),W.b=$9(W.b);if(this.spaces[Z].primaries!==this.spaces[X].primaries)W.applyMatrix3(this.spaces[Z].toXYZ),W.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")W.r=V7(W.r),W.g=V7(W.g),W.b=V7(W.b);return W},workingToColorSpace:function(W,Z){return this.convert(W,this.workingColorSpace,Z)},colorSpaceToWorking:function(W,Z){return this.convert(W,Z,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,Z=this.workingColorSpace){return W.fromArray(this.spaces[Z].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,Z,X){return W.copy(this.spaces[Z].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,Z){return g9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,Z)},toWorkingColorSpace:function(W,Z){return g9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,Z)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:sK,fromXYZ:iK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:sK,fromXYZ:iK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var FJ=UY();function $9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function V7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var Y7;class QK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(Y7===void 0)Y7=i7("canvas");Y7.width=J.width,Y7.height=J.height;let K=Y7.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);$=Y7}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=i7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let K=$.getImageData(0,0,J.width,J.height),W=K.data;for(let Z=0;Z<W.length;Z++)W[Z]=$9(W[Z]/255)*255;return $.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor($9(Q[$]/255)*255);else Q[$]=$9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return r0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var qY=0;class Q6{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qY++}),this.uuid=_7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},K=this.data;if(K!==null){let W;if(Array.isArray(K)){W=[];for(let Z=0,X=K.length;Z<X;Z++)if(K[Z].isDataTexture)W.push(yQ(K[Z].image));else W.push(yQ(K[Z]))}else W=yQ(K);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function yQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return QK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return r0("Texture: Unable to serialize Texture."),{}}var NY=0,vQ=new g;class aJ extends n8{constructor(J=aJ.DEFAULT_IMAGE,Q=aJ.DEFAULT_MAPPING,$=1001,K=1001,W=1006,Z=1008,X=1023,Y=1009,H=aJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:NY++}),this.uuid=_7(),this.name="",this.source=new Q6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=K,this.magFilter=W,this.minFilter=Z,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new i0(0,0),this.repeat=new i0(1,1),this.center=new i0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new WJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vQ).x}get height(){return this.source.getSize(vQ).y}get depth(){return this.source.getSize(vQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){r0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){r0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&$&&(K.isVector2&&$.isVector2))K.copy($);else if(K&&$&&(K.isVector3&&$.isVector3))K.copy($);else if(K&&$&&(K.isMatrix3&&$.isMatrix3))K.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}aJ.DEFAULT_IMAGE=null;aJ.DEFAULT_MAPPING=300;aJ.DEFAULT_ANISOTROPY=1;class jJ{static{jJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,K=1){this.x=J,this.y=Q,this.z=$,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,K){return this.x=J,this.y=Q,this.z=$,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,K=this.z,W=this.w,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*K+Z[12]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*K+Z[13]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*K+Z[14]*W,this.w=Z[3]*Q+Z[7]*$+Z[11]*K+Z[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,K,W,Z=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],O=Y[8],D=Y[1],G=Y[5],R=Y[9],M=Y[2],P=Y[6],E=Y[10];if(Math.abs(U-D)<0.01&&Math.abs(O-M)<0.01&&Math.abs(R-P)<0.01){if(Math.abs(U+D)<0.1&&Math.abs(O+M)<0.1&&Math.abs(R+P)<0.1&&Math.abs(H+G+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let T=(H+1)/2,w=(G+1)/2,L=(E+1)/2,A=(U+D)/4,C=(O+M)/4,S=(R+P)/4;if(T>w&&T>L)if(T<0.01)$=0,K=0.707106781,W=0.707106781;else $=Math.sqrt(T),K=A/$,W=C/$;else if(w>L)if(w<0.01)$=0.707106781,K=0,W=0.707106781;else K=Math.sqrt(w),$=A/K,W=S/K;else if(L<0.01)$=0.707106781,K=0.707106781,W=0;else W=Math.sqrt(L),$=C/W,K=S/W;return this.set($,K,W,Q),this}let F=Math.sqrt((P-R)*(P-R)+(O-M)*(O-M)+(D-U)*(D-U));if(Math.abs(F)<0.001)F=1;return this.x=(P-R)/F,this.y=(O-M)/F,this.z=(D-U)/F,this.w=Math.acos((H+G+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=UJ(this.x,J.x,Q.x),this.y=UJ(this.y,J.y,Q.y),this.z=UJ(this.z,J.z,Q.z),this.w=UJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=UJ(this.x,J,Q),this.y=UJ(this.y,J,Q),this.z=UJ(this.z,J,Q),this.w=UJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(UJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $K extends n8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new jJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new jJ(0,0,J,Q),this.textures=[];let K={width:J,height:Q,depth:$.depth},W=new aJ(K),Z=$.count;for(let X=0;X<Z;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let K=0,W=this.textures.length;K<W;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=$,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new Q6(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _8 extends $K{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class QQ extends aJ{constructor(J=null,Q=1,$=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class KK extends aJ{constructor(J=null,Q=1,$=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class CJ{static{CJ.prototype.isMatrix4=!0}constructor(J,Q,$,K,W,Z,X,Y,H,U,O,D,G,R,M,P){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,K,W,Z,X,Y,H,U,O,D,G,R,M,P)}set(J,Q,$,K,W,Z,X,Y,H,U,O,D,G,R,M,P){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=$,E[12]=K,E[1]=W,E[5]=Z,E[9]=X,E[13]=Y,E[2]=H,E[6]=U,E[10]=O,E[14]=D,E[3]=G,E[7]=R,E[11]=M,E[15]=P,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new CJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,K=1/H7.setFromMatrixColumn(J,0).length(),W=1/H7.setFromMatrixColumn(J,1).length(),Z=1/H7.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*K,Q[1]=$[1]*K,Q[2]=$[2]*K,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*Z,Q[9]=$[9]*Z,Q[10]=$[10]*Z,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,K=J.y,W=J.z,Z=Math.cos($),X=Math.sin($),Y=Math.cos(K),H=Math.sin(K),U=Math.cos(W),O=Math.sin(W);if(J.order==="XYZ"){let D=Z*U,G=Z*O,R=X*U,M=X*O;Q[0]=Y*U,Q[4]=-Y*O,Q[8]=H,Q[1]=G+R*H,Q[5]=D-M*H,Q[9]=-X*Y,Q[2]=M-D*H,Q[6]=R+G*H,Q[10]=Z*Y}else if(J.order==="YXZ"){let D=Y*U,G=Y*O,R=H*U,M=H*O;Q[0]=D+M*X,Q[4]=R*X-G,Q[8]=Z*H,Q[1]=Z*O,Q[5]=Z*U,Q[9]=-X,Q[2]=G*X-R,Q[6]=M+D*X,Q[10]=Z*Y}else if(J.order==="ZXY"){let D=Y*U,G=Y*O,R=H*U,M=H*O;Q[0]=D-M*X,Q[4]=-Z*O,Q[8]=R+G*X,Q[1]=G+R*X,Q[5]=Z*U,Q[9]=M-D*X,Q[2]=-Z*H,Q[6]=X,Q[10]=Z*Y}else if(J.order==="ZYX"){let D=Z*U,G=Z*O,R=X*U,M=X*O;Q[0]=Y*U,Q[4]=R*H-G,Q[8]=D*H+M,Q[1]=Y*O,Q[5]=M*H+D,Q[9]=G*H-R,Q[2]=-H,Q[6]=X*Y,Q[10]=Z*Y}else if(J.order==="YZX"){let D=Z*Y,G=Z*H,R=X*Y,M=X*H;Q[0]=Y*U,Q[4]=M-D*O,Q[8]=R*O+G,Q[1]=O,Q[5]=Z*U,Q[9]=-X*U,Q[2]=-H*U,Q[6]=G*O+R,Q[10]=D-M*O}else if(J.order==="XZY"){let D=Z*Y,G=Z*H,R=X*Y,M=X*H;Q[0]=Y*U,Q[4]=-O,Q[8]=H*U,Q[1]=D*O+M,Q[5]=Z*U,Q[9]=G*O-R,Q[2]=R*O-G,Q[6]=X*U,Q[10]=M*O+D}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(GY,J,FY)}lookAt(J,Q,$){let K=this.elements;if(E8.subVectors(J,Q),E8.lengthSq()===0)E8.z=1;if(E8.normalize(),G9.crossVectors($,E8),G9.lengthSq()===0){if(Math.abs($.z)===1)E8.x+=0.0001;else E8.z+=0.0001;E8.normalize(),G9.crossVectors($,E8)}return G9.normalize(),B6.crossVectors(E8,G9),K[0]=G9.x,K[4]=B6.x,K[8]=E8.x,K[1]=G9.y,K[5]=B6.y,K[9]=E8.y,K[2]=G9.z,K[6]=B6.z,K[10]=E8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,K=Q.elements,W=this.elements,Z=$[0],X=$[4],Y=$[8],H=$[12],U=$[1],O=$[5],D=$[9],G=$[13],R=$[2],M=$[6],P=$[10],E=$[14],F=$[3],T=$[7],w=$[11],L=$[15],A=K[0],C=K[4],S=K[8],k=K[12],z=K[1],u=K[5],j=K[9],n=K[13],J0=K[2],s=K[6],e=K[10],$0=K[14],d=K[3],X0=K[7],q0=K[11],L0=K[15];return W[0]=Z*A+X*z+Y*J0+H*d,W[4]=Z*C+X*u+Y*s+H*X0,W[8]=Z*S+X*j+Y*e+H*q0,W[12]=Z*k+X*n+Y*$0+H*L0,W[1]=U*A+O*z+D*J0+G*d,W[5]=U*C+O*u+D*s+G*X0,W[9]=U*S+O*j+D*e+G*q0,W[13]=U*k+O*n+D*$0+G*L0,W[2]=R*A+M*z+P*J0+E*d,W[6]=R*C+M*u+P*s+E*X0,W[10]=R*S+M*j+P*e+E*q0,W[14]=R*k+M*n+P*$0+E*L0,W[3]=F*A+T*z+w*J0+L*d,W[7]=F*C+T*u+w*s+L*X0,W[11]=F*S+T*j+w*e+L*q0,W[15]=F*k+T*n+w*$0+L*L0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],K=J[8],W=J[12],Z=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],O=J[6],D=J[10],G=J[14],R=J[3],M=J[7],P=J[11],E=J[15],F=Y*G-H*D,T=X*G-H*O,w=X*D-Y*O,L=Z*G-H*U,A=Z*D-Y*U,C=Z*O-X*U;return Q*(M*F-P*T+E*w)-$*(R*F-P*L+E*A)+K*(R*T-M*L+E*C)-W*(R*w-M*A+P*C)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],K=J[8],W=J[1],Z=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return Q*(Z*U-X*H)-$*(W*U-X*Y)+K*(W*H-Z*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],O=J[9],D=J[10],G=J[11],R=J[12],M=J[13],P=J[14],E=J[15],F=Q*X-$*Z,T=Q*Y-K*Z,w=Q*H-W*Z,L=$*Y-K*X,A=$*H-W*X,C=K*H-W*Y,S=U*M-O*R,k=U*P-D*R,z=U*E-G*R,u=O*P-D*M,j=O*E-G*M,n=D*E-G*P,J0=F*n-T*j+w*u+L*z-A*k+C*S;if(J0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let s=1/J0;return J[0]=(X*n-Y*j+H*u)*s,J[1]=(K*j-$*n-W*u)*s,J[2]=(M*C-P*A+E*L)*s,J[3]=(D*A-O*C-G*L)*s,J[4]=(Y*z-Z*n-H*k)*s,J[5]=(Q*n-K*z+W*k)*s,J[6]=(P*w-R*C-E*T)*s,J[7]=(U*C-D*w+G*T)*s,J[8]=(Z*j-X*z+H*S)*s,J[9]=($*z-Q*j-W*S)*s,J[10]=(R*A-M*w+E*F)*s,J[11]=(O*w-U*A-G*F)*s,J[12]=(X*k-Z*u-Y*S)*s,J[13]=(Q*u-$*k+K*S)*s,J[14]=(M*T-R*L-P*F)*s,J[15]=(U*L-O*T+D*F)*s,this}scale(J){let Q=this.elements,$=J.x,K=J.y,W=J.z;return Q[0]*=$,Q[4]*=K,Q[8]*=W,Q[1]*=$,Q[5]*=K,Q[9]*=W,Q[2]*=$,Q[6]*=K,Q[10]*=W,Q[3]*=$,Q[7]*=K,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,K))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),K=Math.sin(Q),W=1-$,Z=J.x,X=J.y,Y=J.z,H=W*Z,U=W*X;return this.set(H*Z+$,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,U*X+$,U*Y-K*Z,0,H*Y-K*X,U*Y+K*Z,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,K,W,Z){return this.set(1,$,W,0,J,1,Z,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,$){let K=this.elements,W=Q._x,Z=Q._y,X=Q._z,Y=Q._w,H=W+W,U=Z+Z,O=X+X,D=W*H,G=W*U,R=W*O,M=Z*U,P=Z*O,E=X*O,F=Y*H,T=Y*U,w=Y*O,L=$.x,A=$.y,C=$.z;return K[0]=(1-(M+E))*L,K[1]=(G+w)*L,K[2]=(R-T)*L,K[3]=0,K[4]=(G-w)*A,K[5]=(1-(D+E))*A,K[6]=(P+F)*A,K[7]=0,K[8]=(R+T)*C,K[9]=(P-F)*C,K[10]=(1-(D+M))*C,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,$){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let Z=H7.set(K[0],K[1],K[2]).length(),X=H7.set(K[4],K[5],K[6]).length(),Y=H7.set(K[8],K[9],K[10]).length();if(W<0)Z=-Z;j8.copy(this);let H=1/Z,U=1/X,O=1/Y;return j8.elements[0]*=H,j8.elements[1]*=H,j8.elements[2]*=H,j8.elements[4]*=U,j8.elements[5]*=U,j8.elements[6]*=U,j8.elements[8]*=O,j8.elements[9]*=O,j8.elements[10]*=O,Q.setFromRotationMatrix(j8),$.x=Z,$.y=X,$.z=Y,this}makePerspective(J,Q,$,K,W,Z,X=2000,Y=!1){let H=this.elements,U=2*W/(Q-J),O=2*W/($-K),D=(Q+J)/(Q-J),G=($+K)/($-K),R,M;if(Y)R=W/(Z-W),M=Z*W/(Z-W);else if(X===2000)R=-(Z+W)/(Z-W),M=-2*Z*W/(Z-W);else if(X===2001)R=-Z/(Z-W),M=-Z*W/(Z-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=D,H[12]=0,H[1]=0,H[5]=O,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=R,H[14]=M,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,K,W,Z,X=2000,Y=!1){let H=this.elements,U=2/(Q-J),O=2/($-K),D=-(Q+J)/(Q-J),G=-($+K)/($-K),R,M;if(Y)R=1/(Z-W),M=Z/(Z-W);else if(X===2000)R=-2/(Z-W),M=-(Z+W)/(Z-W);else if(X===2001)R=-1/(Z-W),M=-W/(Z-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=D,H[1]=0,H[5]=O,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=R,H[14]=M,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let K=0;K<16;K++)if(Q[K]!==$[K])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var H7=new g,j8=new CJ,GY=new g(0,0,0),FY=new g(1,1,1),G9=new g,B6=new g,E8=new g,oK=new CJ,rK=new A8;class K9{constructor(J=0,Q=0,$=0,K=K9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,K=this._order){return this._x=J,this._y=Q,this._z=$,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let K=J.elements,W=K[0],Z=K[4],X=K[8],Y=K[1],H=K[5],U=K[9],O=K[2],D=K[6],G=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(UJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-Z,W);else this._x=Math.atan2(D,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-UJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,G),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-O,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(UJ(D,-1,1)),Math.abs(D)<0.9999999)this._y=Math.atan2(-O,G),this._z=Math.atan2(-Z,H);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-UJ(O,-1,1)),Math.abs(O)<0.9999999)this._x=Math.atan2(D,G),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-Z,H);break;case"YZX":if(this._z=Math.asin(UJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-O,W);else this._x=0,this._y=Math.atan2(X,G);break;case"XZY":if(this._z=Math.asin(-UJ(Z,-1,1)),Math.abs(Z)<0.9999999)this._x=Math.atan2(D,H),this._y=Math.atan2(X,W);else this._x=Math.atan2(-U,G),this._y=0;break;default:r0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return oK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(oK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return rK.setFromEuler(this),this.setFromQuaternion(rK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}K9.DEFAULT_ORDER="XYZ";class $Q{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var OY=0,aK=new g,U7=new A8,a8=new CJ,L6=new g,d7=new g,DY=new g,EY=new A8,tK=new g(1,0,0),eK=new g(0,1,0),JW=new g(0,0,1),QW={type:"added"},RY={type:"removed"},q7={type:"childadded",child:null},hQ={type:"childremoved",child:null};class xJ extends n8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:OY++}),this.uuid=_7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xJ.DEFAULT_UP.clone();let J=new g,Q=new K9,$=new A8,K=new g(1,1,1);function W(){$.setFromEuler(Q,!1)}function Z(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(Z),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new CJ},normalMatrix:{value:new WJ}}),this.matrix=new CJ,this.matrixWorld=new CJ,this.matrixAutoUpdate=xJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $Q,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return U7.setFromAxisAngle(J,Q),this.quaternion.multiply(U7),this}rotateOnWorldAxis(J,Q){return U7.setFromAxisAngle(J,Q),this.quaternion.premultiply(U7),this}rotateX(J){return this.rotateOnAxis(tK,J)}rotateY(J){return this.rotateOnAxis(eK,J)}rotateZ(J){return this.rotateOnAxis(JW,J)}translateOnAxis(J,Q){return aK.copy(J).applyQuaternion(this.quaternion),this.position.add(aK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(tK,J)}translateY(J){return this.translateOnAxis(eK,J)}translateZ(J){return this.translateOnAxis(JW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(a8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)L6.copy(J);else L6.set(J,Q,$);let K=this.parent;if(this.updateWorldMatrix(!0,!1),d7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)a8.lookAt(d7,L6,this.up);else a8.lookAt(L6,d7,this.up);if(this.quaternion.setFromRotationMatrix(a8),K)a8.extractRotation(K.matrixWorld),U7.setFromRotationMatrix(a8),this.quaternion.premultiply(U7.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return JJ("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(QW),q7.child=J,this.dispatchEvent(q7),q7.child=null;else JJ("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(RY),hQ.child=J,this.dispatchEvent(hQ),hQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),a8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),a8.multiply(J.parent.matrixWorld);return J.applyMatrix4(a8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(QW),q7.child=J,this.dispatchEvent(q7),q7.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,K=this.children.length;$<K;$++){let Z=this.children[$].getObjectByProperty(J,Q);if(Z!==void 0)return Z}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let K=this.children;for(let W=0,Z=K.length;W<Z;W++)K[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(d7,J,DY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(d7,EY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:K}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*K,W[13]+=$-W[1]*Q-W[5]*$-W[9]*K,W[14]+=K-W[2]*Q-W[6]*$-W[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let Z=0,X=W.length;Z<X;Z++)W[Z].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,this.name!=="")K.name=this.name;if(this.castShadow===!0)K.castShadow=!0;if(this.receiveShadow===!0)K.receiveShadow=!0;if(this.visible===!1)K.visible=!1;if(this.frustumCulled===!1)K.frustumCulled=!1;if(this.renderOrder!==0)K.renderOrder=this.renderOrder;if(this.static!==!1)K.static=this.static;if(Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)K.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function W(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=W(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let O=Y[H];W(J.shapes,O)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push(W(J.materials,this.material[Y]));K.material=X}else K.material=W(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push(W(J.animations,Y))}}if(Q){let X=Z(J.geometries),Y=Z(J.materials),H=Z(J.textures),U=Z(J.images),O=Z(J.shapes),D=Z(J.skeletons),G=Z(J.animations),R=Z(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(O.length>0)$.shapes=O;if(D.length>0)$.skeletons=D;if(G.length>0)$.animations=G;if(R.length>0)$.nodes=R}return $.object=K,$;function Z(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let K=J.children[$];this.add(K.clone())}return this}}xJ.DEFAULT_UP=new g(0,1,0);xJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;xJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class N8 extends xJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var kY={type:"move"};class $6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new N8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new N8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new g,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new g;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new N8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new g,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new g,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let K=null,W=null,Z=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){Z=!0;for(let M of J.hand.values()){let P=Q.getJointPose(M,$),E=this._getHandJoint(H,M);if(P!==null)E.matrix.fromArray(P.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=P.radius;E.visible=P!==null}let U=H.joints["index-finger-tip"],O=H.joints["thumb-tip"],D=U.position.distanceTo(O.position),G=0.02,R=0.005;if(H.inputState.pinching&&D>G+R)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&D<=G-R)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,$),K===null&&W!==null)K=W;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(kY)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=W!==null;if(H!==null)H.visible=Z!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new N8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var FZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},F9={h:0,s:0,l:0},z6={h:0,s:0,l:0};function bQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class KJ{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,FJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,K=FJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,FJ.colorSpaceToWorking(this,K),this}setHSL(J,Q,$,K=FJ.workingColorSpace){if(J=e$(J,1),Q=UJ(Q,0,1),$=UJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,Z=2*$-W;this.r=bQ(Z,W,J+0.3333333333333333),this.g=bQ(Z,W,J),this.b=bQ(Z,W,J-0.3333333333333333)}return FJ.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)r0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,Z=K[1],X=K[2];switch(Z){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:r0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=K[1],Z=W.length;if(Z===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(Z===6)return this.setHex(parseInt(W,16),Q);else r0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=FZ[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else r0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=$9(J.r),this.g=$9(J.g),this.b=$9(J.b),this}copyLinearToSRGB(J){return this.r=V7(J.r),this.g=V7(J.g),this.b=V7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return FJ.workingToColorSpace(Q8.copy(this),J),Math.round(UJ(Q8.r*255,0,255))*65536+Math.round(UJ(Q8.g*255,0,255))*256+Math.round(UJ(Q8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=FJ.workingColorSpace){FJ.workingToColorSpace(Q8.copy(this),Q);let{r:$,g:K,b:W}=Q8,Z=Math.max($,K,W),X=Math.min($,K,W),Y,H,U=(X+Z)/2;if(X===Z)Y=0,H=0;else{let O=Z-X;switch(H=U<=0.5?O/(Z+X):O/(2-Z-X),Z){case $:Y=(K-W)/O+(K<W?6:0);break;case K:Y=(W-$)/O+2;break;case W:Y=($-K)/O+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,Q=FJ.workingColorSpace){return FJ.workingToColorSpace(Q8.copy(this),Q),J.r=Q8.r,J.g=Q8.g,J.b=Q8.b,J}getStyle(J="srgb"){FJ.workingToColorSpace(Q8.copy(this),J);let{r:Q,g:$,b:K}=Q8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(K*255)})`}offsetHSL(J,Q,$){return this.getHSL(F9),this.setHSL(F9.h+J,F9.s+Q,F9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(F9),J.getHSL(z6);let $=s7(F9.h,z6.h,Q),K=s7(F9.s,z6.s,Q),W=s7(F9.l,z6.l,Q);return this.setHSL($,K,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,K=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*K,this.g=W[1]*Q+W[4]*$+W[7]*K,this.b=W[2]*Q+W[5]*$+W[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Q8=new KJ;KJ.NAMES=FZ;class K6{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new KJ(J),this.density=Q}clone(){return new K6(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class KQ extends xJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new K9,this.environmentIntensity=1,this.environmentRotation=new K9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var y8=new g,t8=new g,fQ=new g,e8=new g,N7=new g,G7=new g,$W=new g,xQ=new g,gQ=new g,pQ=new g,mQ=new jJ,dQ=new jJ,uQ=new jJ;class z8{constructor(J=new g,Q=new g,$=new g){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,K){K.subVectors($,Q),y8.subVectors(J,Q),K.cross(y8);let W=K.lengthSq();if(W>0)return K.multiplyScalar(1/Math.sqrt(W));return K.set(0,0,0)}static getBarycoord(J,Q,$,K,W){y8.subVectors(K,Q),t8.subVectors($,Q),fQ.subVectors(J,Q);let Z=y8.dot(y8),X=y8.dot(t8),Y=y8.dot(fQ),H=t8.dot(t8),U=t8.dot(fQ),O=Z*H-X*X;if(O===0)return W.set(0,0,0),null;let D=1/O,G=(H*Y-X*U)*D,R=(Z*U-X*Y)*D;return W.set(1-G-R,R,G)}static containsPoint(J,Q,$,K){if(this.getBarycoord(J,Q,$,K,e8)===null)return!1;return e8.x>=0&&e8.y>=0&&e8.x+e8.y<=1}static getInterpolation(J,Q,$,K,W,Z,X,Y){if(this.getBarycoord(J,Q,$,K,e8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,e8.x),Y.addScaledVector(Z,e8.y),Y.addScaledVector(X,e8.z),Y}static getInterpolatedAttribute(J,Q,$,K,W,Z){return mQ.setScalar(0),dQ.setScalar(0),uQ.setScalar(0),mQ.fromBufferAttribute(J,Q),dQ.fromBufferAttribute(J,$),uQ.fromBufferAttribute(J,K),Z.setScalar(0),Z.addScaledVector(mQ,W.x),Z.addScaledVector(dQ,W.y),Z.addScaledVector(uQ,W.z),Z}static isFrontFacing(J,Q,$,K){return y8.subVectors($,Q),t8.subVectors(J,Q),y8.cross(t8).dot(K)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,K){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,$,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return y8.subVectors(this.c,this.b),t8.subVectors(this.a,this.b),y8.cross(t8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return z8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return z8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,K,W){return z8.getInterpolation(J,this.a,this.b,this.c,Q,$,K,W)}containsPoint(J){return z8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return z8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,K=this.b,W=this.c,Z,X;N7.subVectors(K,$),G7.subVectors(W,$),xQ.subVectors(J,$);let Y=N7.dot(xQ),H=G7.dot(xQ);if(Y<=0&&H<=0)return Q.copy($);gQ.subVectors(J,K);let U=N7.dot(gQ),O=G7.dot(gQ);if(U>=0&&O<=U)return Q.copy(K);let D=Y*O-U*H;if(D<=0&&Y>=0&&U<=0)return Z=Y/(Y-U),Q.copy($).addScaledVector(N7,Z);pQ.subVectors(J,W);let G=N7.dot(pQ),R=G7.dot(pQ);if(R>=0&&G<=R)return Q.copy(W);let M=G*H-Y*R;if(M<=0&&H>=0&&R<=0)return X=H/(H-R),Q.copy($).addScaledVector(G7,X);let P=U*R-G*O;if(P<=0&&O-U>=0&&G-R>=0)return $W.subVectors(W,K),X=(O-U)/(O-U+(G-R)),Q.copy(K).addScaledVector($W,X);let E=1/(P+M+D);return Z=M*E,X=D*E,Q.copy($).addScaledVector(N7,Z).addScaledVector(G7,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class i9{constructor(J=new g(1/0,1/0,1/0),Q=new g(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(v8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(v8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=v8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let Z=0,X=W.count;Z<X;Z++){if(J.isMesh===!0)J.getVertexPosition(Z,v8);else v8.fromBufferAttribute(W,Z);v8.applyMatrix4(J.matrixWorld),this.expandByPoint(v8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();I6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();I6.copy($.boundingBox)}I6.applyMatrix4(J.matrixWorld),this.union(I6)}}let K=J.children;for(let W=0,Z=K.length;W<Z;W++)this.expandByObject(K[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,v8),v8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(u7),P6.subVectors(this.max,u7),F7.subVectors(J.a,u7),O7.subVectors(J.b,u7),D7.subVectors(J.c,u7),O9.subVectors(O7,F7),D9.subVectors(D7,O7),h9.subVectors(F7,D7);let Q=[0,-O9.z,O9.y,0,-D9.z,D9.y,0,-h9.z,h9.y,O9.z,0,-O9.x,D9.z,0,-D9.x,h9.z,0,-h9.x,-O9.y,O9.x,0,-D9.y,D9.x,0,-h9.y,h9.x,0];if(!lQ(Q,F7,O7,D7,P6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!lQ(Q,F7,O7,D7,P6))return!1;return A6.crossVectors(O9,D9),Q=[A6.x,A6.y,A6.z],lQ(Q,F7,O7,D7,P6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,v8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(v8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return J9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),J9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),J9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),J9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),J9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),J9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),J9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),J9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(J9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var J9=[new g,new g,new g,new g,new g,new g,new g,new g],v8=new g,I6=new i9,F7=new g,O7=new g,D7=new g,O9=new g,D9=new g,h9=new g,u7=new g,P6=new g,A6=new g,b9=new g;function lQ(J,Q,$,K,W){for(let Z=0,X=J.length-3;Z<=X;Z+=3){b9.fromArray(J,Z);let Y=W.x*Math.abs(b9.x)+W.y*Math.abs(b9.y)+W.z*Math.abs(b9.z),H=Q.dot(b9),U=$.dot(b9),O=K.dot(b9);if(Math.max(-Math.max(H,U,O),Math.min(H,U,O))>Y)return!1}return!0}var fJ=new g,_6=new i0,MY=0;class gJ extends n8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let K=0,W=this.itemSize;K<W;K++)this.array[J+K]=Q.array[$+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)_6.fromBufferAttribute(this,Q),_6.applyMatrix3(J),this.setXY(Q,_6.x,_6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)fJ.fromBufferAttribute(this,Q),fJ.applyMatrix3(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)fJ.fromBufferAttribute(this,Q),fJ.applyMatrix4(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)fJ.fromBufferAttribute(this,Q),fJ.applyNormalMatrix(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)fJ.fromBufferAttribute(this,Q),fJ.transformDirection(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=M7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=X8($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=M7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=X8(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=M7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=X8(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=M7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=X8(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=M7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=X8(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=X8(Q,this.array),$=X8($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,K){if(J*=this.itemSize,this.normalized)Q=X8(Q,this.array),$=X8($,this.array),K=X8(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=K,this}setXYZW(J,Q,$,K,W){if(J*=this.itemSize,this.normalized)Q=X8(Q,this.array),$=X8($,this.array),K=X8(K,this.array),W=X8(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=K,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class WQ extends gJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class ZQ extends gJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class IJ extends gJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var VY=new i9,l7=new g,cQ=new g;class w7{constructor(J=new g,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else VY.setFromPoints(J).getCenter($);let K=0;for(let W=0,Z=J.length;W<Z;W++)K=Math.max(K,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;l7.subVectors(J,this.center);let Q=l7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),K=($-this.radius)*0.5;this.center.addScaledVector(l7,K/$),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else cQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(l7.copy(J.center).add(cQ)),this.expandByPoint(l7.copy(J.center).sub(cQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var BY=0,L8=new CJ,nQ=new xJ,E7=new g,R8=new i9,c7=new i9,nJ=new g;class bJ extends n8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BY++}),this.uuid=_7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((cX(J))?ZQ:WQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new WJ().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return L8.makeRotationFromQuaternion(J),this.applyMatrix4(L8),this}rotateX(J){return L8.makeRotationX(J),this.applyMatrix4(L8),this}rotateY(J){return L8.makeRotationY(J),this.applyMatrix4(L8),this}rotateZ(J){return L8.makeRotationZ(J),this.applyMatrix4(L8),this}translate(J,Q,$){return L8.makeTranslation(J,Q,$),this.applyMatrix4(L8),this}scale(J,Q,$){return L8.makeScale(J,Q,$),this.applyMatrix4(L8),this}lookAt(J){return nQ.lookAt(J),nQ.updateMatrix(),this.applyMatrix4(nQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(E7).negate(),this.translate(E7.x,E7.y,E7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let K=0,W=J.length;K<W;K++){let Z=J[K];$.push(Z.x,Z.y,Z.z||0)}this.setAttribute("position",new IJ($,3))}else{let $=Math.min(J.length,Q.count);for(let K=0;K<$;K++){let W=J[K];Q.setXYZ(K,W.x,W.y,W.z||0)}if(J.length>Q.count)r0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new i9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){JJ("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new g(-1/0,-1/0,-1/0),new g(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,K=Q.length;$<K;$++){let W=Q[$];if(R8.setFromBufferAttribute(W),this.morphTargetsRelative)nJ.addVectors(this.boundingBox.min,R8.min),this.boundingBox.expandByPoint(nJ),nJ.addVectors(this.boundingBox.max,R8.max),this.boundingBox.expandByPoint(nJ);else this.boundingBox.expandByPoint(R8.min),this.boundingBox.expandByPoint(R8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))JJ('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new w7;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){JJ("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new g,1/0);return}if(J){let $=this.boundingSphere.center;if(R8.setFromBufferAttribute(J),Q)for(let W=0,Z=Q.length;W<Z;W++){let X=Q[W];if(c7.setFromBufferAttribute(X),this.morphTargetsRelative)nJ.addVectors(R8.min,c7.min),R8.expandByPoint(nJ),nJ.addVectors(R8.max,c7.max),R8.expandByPoint(nJ);else R8.expandByPoint(c7.min),R8.expandByPoint(c7.max)}R8.getCenter($);let K=0;for(let W=0,Z=J.count;W<Z;W++)nJ.fromBufferAttribute(J,W),K=Math.max(K,$.distanceToSquared(nJ));if(Q)for(let W=0,Z=Q.length;W<Z;W++){let X=Q[W],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(nJ.fromBufferAttribute(X,H),Y)E7.fromBufferAttribute(J,H),nJ.add(E7);K=Math.max(K,$.distanceToSquared(nJ))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))JJ('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){JJ("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:K,uv:W}=Q,Z=this.getAttribute("tangent");if(Z===void 0||Z.count!==$.count)Z=new gJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",Z);let X=[],Y=[];for(let S=0;S<$.count;S++)X[S]=new g,Y[S]=new g;let H=new g,U=new g,O=new g,D=new i0,G=new i0,R=new i0,M=new g,P=new g;function E(S,k,z){H.fromBufferAttribute($,S),U.fromBufferAttribute($,k),O.fromBufferAttribute($,z),D.fromBufferAttribute(W,S),G.fromBufferAttribute(W,k),R.fromBufferAttribute(W,z),U.sub(H),O.sub(H),G.sub(D),R.sub(D);let u=1/(G.x*R.y-R.x*G.y);if(!isFinite(u))return;M.copy(U).multiplyScalar(R.y).addScaledVector(O,-G.y).multiplyScalar(u),P.copy(O).multiplyScalar(G.x).addScaledVector(U,-R.x).multiplyScalar(u),X[S].add(M),X[k].add(M),X[z].add(M),Y[S].add(P),Y[k].add(P),Y[z].add(P)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let S=0,k=F.length;S<k;++S){let z=F[S],u=z.start,j=z.count;for(let n=u,J0=u+j;n<J0;n+=3)E(J.getX(n+0),J.getX(n+1),J.getX(n+2))}let T=new g,w=new g,L=new g,A=new g;function C(S){L.fromBufferAttribute(K,S),A.copy(L);let k=X[S];T.copy(k),T.sub(L.multiplyScalar(L.dot(k))).normalize(),w.crossVectors(A,k);let u=w.dot(Y[S])<0?-1:1;Z.setXYZW(S,T.x,T.y,T.z,u)}for(let S=0,k=F.length;S<k;++S){let z=F[S],u=z.start,j=z.count;for(let n=u,J0=u+j;n<J0;n+=3)C(J.getX(n+0)),C(J.getX(n+1)),C(J.getX(n+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new gJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let D=0,G=$.count;D<G;D++)$.setXYZ(D,0,0,0);let K=new g,W=new g,Z=new g,X=new g,Y=new g,H=new g,U=new g,O=new g;if(J)for(let D=0,G=J.count;D<G;D+=3){let R=J.getX(D+0),M=J.getX(D+1),P=J.getX(D+2);K.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,M),Z.fromBufferAttribute(Q,P),U.subVectors(Z,W),O.subVectors(K,W),U.cross(O),X.fromBufferAttribute($,R),Y.fromBufferAttribute($,M),H.fromBufferAttribute($,P),X.add(U),Y.add(U),H.add(U),$.setXYZ(R,X.x,X.y,X.z),$.setXYZ(M,Y.x,Y.y,Y.z),$.setXYZ(P,H.x,H.y,H.z)}else for(let D=0,G=Q.count;D<G;D+=3)K.fromBufferAttribute(Q,D+0),W.fromBufferAttribute(Q,D+1),Z.fromBufferAttribute(Q,D+2),U.subVectors(Z,W),O.subVectors(K,W),U.cross(O),$.setXYZ(D+0,U.x,U.y,U.z),$.setXYZ(D+1,U.x,U.y,U.z),$.setXYZ(D+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)nJ.fromBufferAttribute(J,Q),nJ.normalize(),J.setXYZ(Q,nJ.x,nJ.y,nJ.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:O}=X,D=new H.constructor(Y.length*U),G=0,R=0;for(let M=0,P=Y.length;M<P;M++){if(X.isInterleavedBufferAttribute)G=Y[M]*X.data.stride+X.offset;else G=Y[M]*U;for(let E=0;E<U;E++)D[R++]=H[G++]}return new gJ(D,U,O)}if(this.index===null)return r0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new bJ,$=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,$);Q.setAttribute(X,H)}let W=this.morphAttributes;for(let X in W){let Y=[],H=W[X];for(let U=0,O=H.length;U<O;U++){let D=H[U],G=J(D,$);Y.push(G)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;for(let X=0,Y=Z.length;X<Y;X++){let H=Z[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let H=$[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},W=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let O=0,D=H.length;O<D;O++){let G=H[O];U.push(G.toJSON(J.data))}if(U.length>0)K[Y]=U,W=!0}if(W)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;if(Z.length>0)J.data.groups=JSON.parse(JSON.stringify(Z));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let K=J.attributes;for(let H in K){let U=K[H];this.setAttribute(H,U.clone(Q))}let W=J.morphAttributes;for(let H in W){let U=[],O=W[H];for(let D=0,G=O.length;D<G;D++)U.push(O[D].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let Z=J.groups;for(let H=0,U=Z.length;H<U;H++){let O=Z[H];this.addGroup(O.start,O.count,O.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var LY=0;class L9 extends n8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:LY++}),this.uuid=_7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new KJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){r0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){r0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set($);else if(K&&K.isVector2&&($&&$.isVector2)||K&&K.isEuler&&($&&$.isEuler)||K&&K.isVector3&&($&&$.isVector3))K.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function K(W){let Z=[];for(let X in W){let Y=W[X];delete Y.metadata,Z.push(Y)}return Z}if(Q){let W=K(J.textures),Z=K(J.images);if(W.length>0)$.textures=W;if(Z.length>0)$.images=Z}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new KJ().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new i0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new i0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let K=Q.length;$=Array(K);for(let W=0;W!==K;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var Q9=new g,sQ=new g,w6=new g,E9=new g,iQ=new g,C6=new g,oQ=new g;class C7{constructor(J=new g,Q=new g(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,Q9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=Q9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return Q9.copy(this.origin).addScaledVector(this.direction,Q),Q9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,K){sQ.copy(J).add(Q).multiplyScalar(0.5),w6.copy(Q).sub(J).normalize(),E9.copy(this.origin).sub(sQ);let W=J.distanceTo(Q)*0.5,Z=-this.direction.dot(w6),X=E9.dot(this.direction),Y=-E9.dot(w6),H=E9.lengthSq(),U=Math.abs(1-Z*Z),O,D,G,R;if(U>0)if(O=Z*Y-X,D=Z*X-Y,R=W*U,O>=0)if(D>=-R)if(D<=R){let M=1/U;O*=M,D*=M,G=O*(O+Z*D+2*X)+D*(Z*O+D+2*Y)+H}else D=W,O=Math.max(0,-(Z*D+X)),G=-O*O+D*(D+2*Y)+H;else D=-W,O=Math.max(0,-(Z*D+X)),G=-O*O+D*(D+2*Y)+H;else if(D<=-R)O=Math.max(0,-(-Z*W+X)),D=O>0?-W:Math.min(Math.max(-W,-Y),W),G=-O*O+D*(D+2*Y)+H;else if(D<=R)O=0,D=Math.min(Math.max(-W,-Y),W),G=D*(D+2*Y)+H;else O=Math.max(0,-(Z*W+X)),D=O>0?W:Math.min(Math.max(-W,-Y),W),G=-O*O+D*(D+2*Y)+H;else D=Z>0?-W:W,O=Math.max(0,-(Z*D+X)),G=-O*O+D*(D+2*Y)+H;if($)$.copy(this.origin).addScaledVector(this.direction,O);if(K)K.copy(sQ).addScaledVector(w6,D);return G}intersectSphere(J,Q){Q9.subVectors(J.center,this.origin);let $=Q9.dot(this.direction),K=Q9.dot(Q9)-$*$,W=J.radius*J.radius;if(K>W)return null;let Z=Math.sqrt(W-K),X=$-Z,Y=$+Z;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,K,W,Z,X,Y,H=1/this.direction.x,U=1/this.direction.y,O=1/this.direction.z,D=this.origin;if(H>=0)$=(J.min.x-D.x)*H,K=(J.max.x-D.x)*H;else $=(J.max.x-D.x)*H,K=(J.min.x-D.x)*H;if(U>=0)W=(J.min.y-D.y)*U,Z=(J.max.y-D.y)*U;else W=(J.max.y-D.y)*U,Z=(J.min.y-D.y)*U;if($>Z||W>K)return null;if(W>$||isNaN($))$=W;if(Z<K||isNaN(K))K=Z;if(O>=0)X=(J.min.z-D.z)*O,Y=(J.max.z-D.z)*O;else X=(J.max.z-D.z)*O,Y=(J.min.z-D.z)*O;if($>Y||X>K)return null;if(X>$||$!==$)$=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at($>=0?$:K,Q)}intersectsBox(J){return this.intersectBox(J,Q9)!==null}intersectTriangle(J,Q,$,K,W){iQ.subVectors(Q,J),C6.subVectors($,J),oQ.crossVectors(iQ,C6);let Z=this.direction.dot(oQ),X;if(Z>0){if(K)return null;X=1}else if(Z<0)X=-1,Z=-Z;else return null;E9.subVectors(this.origin,J);let Y=X*this.direction.dot(C6.crossVectors(E9,C6));if(Y<0)return null;let H=X*this.direction.dot(iQ.cross(E9));if(H<0)return null;if(Y+H>Z)return null;let U=-X*E9.dot(oQ);if(U<0)return null;return this.at(U/Z,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vJ extends L9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new KJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new K9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var KW=new CJ,f9=new C7,T6=new w7,WW=new g,S6=new g,j6=new g,y6=new g,rQ=new g,v6=new g,ZW=new g,h6=new g;class U0 extends xJ{constructor(J=new bJ,Q=new vJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let K=Q[$[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Z=K.length;W<Z;W++){let X=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition(J,Q){let $=this.geometry,K=$.attributes.position,W=$.morphAttributes.position,Z=$.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if(W&&X){v6.set(0,0,0);for(let Y=0,H=W.length;Y<H;Y++){let U=X[Y],O=W[Y];if(U===0)continue;if(rQ.fromBufferAttribute(O,J),Z)v6.addScaledVector(rQ,U);else v6.addScaledVector(rQ.sub(Q),U)}Q.add(v6)}return Q}raycast(J,Q){let $=this.geometry,K=this.material,W=this.matrixWorld;if(K===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(T6.copy($.boundingSphere),T6.applyMatrix4(W),f9.copy(J.ray).recast(J.near),T6.containsPoint(f9.origin)===!1){if(f9.intersectSphere(T6,WW)===null)return;if(f9.origin.distanceToSquared(WW)>(J.far-J.near)**2)return}if(KW.copy(W).invert(),f9.copy(J.ray).applyMatrix4(KW),$.boundingBox!==null){if(f9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,f9)}_computeIntersections(J,Q,$){let K,W=this.geometry,Z=this.material,X=W.index,Y=W.attributes.position,H=W.attributes.uv,U=W.attributes.uv1,O=W.attributes.normal,D=W.groups,G=W.drawRange;if(X!==null)if(Array.isArray(Z))for(let R=0,M=D.length;R<M;R++){let P=D[R],E=Z[P.materialIndex],F=Math.max(P.start,G.start),T=Math.min(X.count,Math.min(P.start+P.count,G.start+G.count));for(let w=F,L=T;w<L;w+=3){let A=X.getX(w),C=X.getX(w+1),S=X.getX(w+2);if(K=b6(this,E,J,$,H,U,O,A,C,S),K)K.faceIndex=Math.floor(w/3),K.face.materialIndex=P.materialIndex,Q.push(K)}}else{let R=Math.max(0,G.start),M=Math.min(X.count,G.start+G.count);for(let P=R,E=M;P<E;P+=3){let F=X.getX(P),T=X.getX(P+1),w=X.getX(P+2);if(K=b6(this,Z,J,$,H,U,O,F,T,w),K)K.faceIndex=Math.floor(P/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(Z))for(let R=0,M=D.length;R<M;R++){let P=D[R],E=Z[P.materialIndex],F=Math.max(P.start,G.start),T=Math.min(Y.count,Math.min(P.start+P.count,G.start+G.count));for(let w=F,L=T;w<L;w+=3){let A=w,C=w+1,S=w+2;if(K=b6(this,E,J,$,H,U,O,A,C,S),K)K.faceIndex=Math.floor(w/3),K.face.materialIndex=P.materialIndex,Q.push(K)}}else{let R=Math.max(0,G.start),M=Math.min(Y.count,G.start+G.count);for(let P=R,E=M;P<E;P+=3){let F=P,T=P+1,w=P+2;if(K=b6(this,Z,J,$,H,U,O,F,T,w),K)K.faceIndex=Math.floor(P/3),Q.push(K)}}}}function zY(J,Q,$,K,W,Z,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,Z,W,!0,Y);else H=K.intersectTriangle(W,Z,X,Q.side===0,Y);if(H===null)return null;h6.copy(Y),h6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(h6);if(U<$.near||U>$.far)return null;return{distance:U,point:h6.clone(),object:J}}function b6(J,Q,$,K,W,Z,X,Y,H,U){J.getVertexPosition(Y,S6),J.getVertexPosition(H,j6),J.getVertexPosition(U,y6);let O=zY(J,Q,$,K,S6,j6,y6,ZW);if(O){let D=new g;if(z8.getBarycoord(ZW,S6,j6,y6,D),W)O.uv=z8.getInterpolatedAttribute(W,Y,H,U,D,new i0);if(Z)O.uv1=z8.getInterpolatedAttribute(Z,Y,H,U,D,new i0);if(X){if(O.normal=z8.getInterpolatedAttribute(X,Y,H,U,D,new g),O.normal.dot(K.direction)>0)O.normal.multiplyScalar(-1)}let G={a:Y,b:H,c:U,normal:new g,materialIndex:0};z8.getNormal(S6,j6,y6,G.normal),O.face=G,O.barycoord=D}return O}class WK extends aJ{constructor(J=null,Q=1,$=1,K,W,Z,X,Y,H=1003,U=1003,O,D){super(null,Z,X,Y,H,U,K,W,O,D);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var aQ=new g,IY=new g,PY=new WJ;class h8{constructor(J=new g(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,K){return this.normal.set(J,Q,$),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let K=aQ.subVectors($,Q).cross(IY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let K=J.delta(aQ),W=this.normal.dot(K);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let Z=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(Z<0||Z>1))return null;return Q.copy(J.start).addScaledVector(K,Z)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||PY.getNormalMatrix(J),K=this.coplanarPoint(aQ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-K.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var x9=new w7,AY=new i0(0.5,0.5),f6=new g;class W6{constructor(J=new h8,Q=new h8,$=new h8,K=new h8,W=new h8,Z=new h8){this.planes=[J,Q,$,K,W,Z]}set(J,Q,$,K,W,Z){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(K),X[4].copy(W),X[5].copy(Z),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let K=this.planes,W=J.elements,Z=W[0],X=W[1],Y=W[2],H=W[3],U=W[4],O=W[5],D=W[6],G=W[7],R=W[8],M=W[9],P=W[10],E=W[11],F=W[12],T=W[13],w=W[14],L=W[15];if(K[0].setComponents(H-Z,G-U,E-R,L-F).normalize(),K[1].setComponents(H+Z,G+U,E+R,L+F).normalize(),K[2].setComponents(H+X,G+O,E+M,L+T).normalize(),K[3].setComponents(H-X,G-O,E-M,L-T).normalize(),$)K[4].setComponents(Y,D,P,w).normalize(),K[5].setComponents(H-Y,G-D,E-P,L-w).normalize();else if(K[4].setComponents(H-Y,G-D,E-P,L-w).normalize(),Q===2000)K[5].setComponents(H+Y,G+D,E+P,L+w).normalize();else if(Q===2001)K[5].setComponents(Y,D,P,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();x9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();x9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(x9)}intersectsSprite(J){x9.center.set(0,0,0);let Q=AY.distanceTo(J.center);return x9.radius=0.7071067811865476+Q,x9.applyMatrix4(J.matrixWorld),this.intersectsSphere(x9)}intersectsSphere(J){let Q=this.planes,$=J.center,K=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let K=Q[$];if(f6.x=K.normal.x>0?J.max.x:J.min.x,f6.y=K.normal.y>0?J.max.y:J.min.y,f6.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(f6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class z9 extends L9{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new KJ(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var XW=new CJ,eQ=new C7,x6=new w7,g6=new g;class o9 extends xJ{constructor(J=new bJ,Q=new z9){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,K=this.matrixWorld,W=J.params.Points.threshold,Z=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(x6.copy($.boundingSphere),x6.applyMatrix4(K),x6.radius+=W,J.ray.intersectsSphere(x6)===!1)return;XW.copy(K).invert(),eQ.copy(J.ray).applyMatrix4(XW);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=X*X,H=$.index,O=$.attributes.position;if(H!==null){let D=Math.max(0,Z.start),G=Math.min(H.count,Z.start+Z.count);for(let R=D,M=G;R<M;R++){let P=H.getX(R);g6.fromBufferAttribute(O,P),YW(g6,P,Y,K,J,Q,this)}}else{let D=Math.max(0,Z.start),G=Math.min(O.count,Z.start+Z.count);for(let R=D,M=G;R<M;R++)g6.fromBufferAttribute(O,R),YW(g6,R,Y,K,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let K=Q[$[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Z=K.length;W<Z;W++){let X=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function YW(J,Q,$,K,W,Z,X){let Y=eQ.distanceSqToPoint(J);if(Y<$){let H=new g;eQ.closestPointToPoint(J,H),H.applyMatrix4(K);let U=W.ray.origin.distanceTo(H);if(U<W.near||U>W.far)return;Z.push({distance:U,distanceToRay:Math.sqrt(Y),point:H,index:Q,face:null,faceIndex:null,barycoord:null,object:X})}}class XQ extends aJ{constructor(J=[],Q=301,$,K,W,Z,X,Y,H,U){super(J,Q,$,K,W,Z,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class x8 extends aJ{constructor(J,Q,$,K,W,Z,X,Y,H){super(J,Q,$,K,W,Z,X,Y,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class I9 extends aJ{constructor(J,Q,$=1014,K,W,Z,X=1003,Y=1003,H,U=1026,O=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let D={width:J,height:Q,depth:O};super(D,K,W,Z,X,Y,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new Q6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class ZK extends I9{constructor(J,Q=1014,$=301,K,W,Z=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},O=[U,U,U,U,U,U];super(J,J,Q,$,K,W,Z,X,Y,H);this.image=O,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class YQ extends aJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class d0 extends bJ{constructor(J=1,Q=1,$=1,K=1,W=1,Z=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:K,heightSegments:W,depthSegments:Z};let X=this;K=Math.floor(K),W=Math.floor(W),Z=Math.floor(Z);let Y=[],H=[],U=[],O=[],D=0,G=0;R("z","y","x",-1,-1,$,Q,J,Z,W,0),R("z","y","x",1,-1,$,Q,-J,Z,W,1),R("x","z","y",1,1,J,$,Q,K,Z,2),R("x","z","y",1,-1,J,$,-Q,K,Z,3),R("x","y","z",1,-1,J,Q,$,K,W,4),R("x","y","z",-1,-1,J,Q,-$,K,W,5),this.setIndex(Y),this.setAttribute("position",new IJ(H,3)),this.setAttribute("normal",new IJ(U,3)),this.setAttribute("uv",new IJ(O,2));function R(M,P,E,F,T,w,L,A,C,S,k){let z=w/C,u=L/S,j=w/2,n=L/2,J0=A/2,s=C+1,e=S+1,$0=0,d=0,X0=new g;for(let q0=0;q0<e;q0++){let L0=q0*u-n;for(let y0=0;y0<s;y0++){let T0=y0*z-j;X0[M]=T0*F,X0[P]=L0*T,X0[E]=J0,H.push(X0.x,X0.y,X0.z),X0[M]=0,X0[P]=0,X0[E]=A>0?1:-1,U.push(X0.x,X0.y,X0.z),O.push(y0/C),O.push(1-q0/S),$0+=1}}for(let q0=0;q0<S;q0++)for(let L0=0;L0<C;L0++){let y0=D+L0+s*q0,T0=D+L0+s*(q0+1),OJ=D+(L0+1)+s*(q0+1),qJ=D+(L0+1)+s*q0;Y.push(y0,T0,qJ),Y.push(T0,OJ,qJ),d+=6}X.addGroup(G,d,k),G+=d,D+=$0}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new d0(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class sJ extends bJ{constructor(J=1,Q=1,$=1,K=32,W=1,Z=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:K,heightSegments:W,openEnded:Z,thetaStart:X,thetaLength:Y};let H=this;K=Math.floor(K),W=Math.floor(W);let U=[],O=[],D=[],G=[],R=0,M=[],P=$/2,E=0;if(F(),Z===!1){if(J>0)T(!0);if(Q>0)T(!1)}this.setIndex(U),this.setAttribute("position",new IJ(O,3)),this.setAttribute("normal",new IJ(D,3)),this.setAttribute("uv",new IJ(G,2));function F(){let w=new g,L=new g,A=0,C=(Q-J)/$;for(let S=0;S<=W;S++){let k=[],z=S/W,u=z*(Q-J)+J;for(let j=0;j<=K;j++){let n=j/K,J0=n*Y+X,s=Math.sin(J0),e=Math.cos(J0);L.x=u*s,L.y=-z*$+P,L.z=u*e,O.push(L.x,L.y,L.z),w.set(s,C,e).normalize(),D.push(w.x,w.y,w.z),G.push(n,1-z),k.push(R++)}M.push(k)}for(let S=0;S<K;S++)for(let k=0;k<W;k++){let z=M[k][S],u=M[k+1][S],j=M[k+1][S+1],n=M[k][S+1];if(J>0||k!==0)U.push(z,u,n),A+=3;if(Q>0||k!==W-1)U.push(u,j,n),A+=3}H.addGroup(E,A,0),E+=A}function T(w){let L=R,A=new i0,C=new g,S=0,k=w===!0?J:Q,z=w===!0?1:-1;for(let j=1;j<=K;j++)O.push(0,P*z,0),D.push(0,z,0),G.push(0.5,0.5),R++;let u=R;for(let j=0;j<=K;j++){let J0=j/K*Y+X,s=Math.cos(J0),e=Math.sin(J0);C.x=k*e,C.y=P*z,C.z=k*s,O.push(C.x,C.y,C.z),D.push(0,z,0),A.x=s*0.5+0.5,A.y=e*0.5*z+0.5,G.push(A.x,A.y),R++}for(let j=0;j<K;j++){let n=L+j,J0=u+j;if(w===!0)U.push(J0,J0+1,n);else U.push(J0+1,J0,n);S+=3}H.addGroup(E,S,w===!0?1:2),E+=S}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new sJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class r9 extends sJ{constructor(J=1,Q=1,$=32,K=1,W=!1,Z=0,X=Math.PI*2){super(0,J,Q,$,K,W,Z,X);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:K,openEnded:W,thetaStart:Z,thetaLength:X}}static fromJSON(J){return new r9(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class HQ extends bJ{constructor(J=[],Q=[],$=1,K=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:K};let W=[],Z=[];if(X(K),H($),U(),this.setAttribute("position",new IJ(W,3)),this.setAttribute("normal",new IJ(W.slice(),3)),this.setAttribute("uv",new IJ(Z,2)),K===0)this.computeVertexNormals();else this.normalizeNormals();function X(F){let T=new g,w=new g,L=new g;for(let A=0;A<Q.length;A+=3)G(Q[A+0],T),G(Q[A+1],w),G(Q[A+2],L),Y(T,w,L,F)}function Y(F,T,w,L){let A=L+1,C=[];for(let S=0;S<=A;S++){C[S]=[];let k=F.clone().lerp(w,S/A),z=T.clone().lerp(w,S/A),u=A-S;for(let j=0;j<=u;j++)if(j===0&&S===A)C[S][j]=k;else C[S][j]=k.clone().lerp(z,j/u)}for(let S=0;S<A;S++)for(let k=0;k<2*(A-S)-1;k++){let z=Math.floor(k/2);if(k%2===0)D(C[S][z+1]),D(C[S+1][z]),D(C[S][z]);else D(C[S][z+1]),D(C[S+1][z+1]),D(C[S+1][z])}}function H(F){let T=new g;for(let w=0;w<W.length;w+=3)T.x=W[w+0],T.y=W[w+1],T.z=W[w+2],T.normalize().multiplyScalar(F),W[w+0]=T.x,W[w+1]=T.y,W[w+2]=T.z}function U(){let F=new g;for(let T=0;T<W.length;T+=3){F.x=W[T+0],F.y=W[T+1],F.z=W[T+2];let w=P(F)/2/Math.PI+0.5,L=E(F)/Math.PI+0.5;Z.push(w,1-L)}R(),O()}function O(){for(let F=0;F<Z.length;F+=6){let T=Z[F+0],w=Z[F+2],L=Z[F+4],A=Math.max(T,w,L),C=Math.min(T,w,L);if(A>0.9&&C<0.1){if(T<0.2)Z[F+0]+=1;if(w<0.2)Z[F+2]+=1;if(L<0.2)Z[F+4]+=1}}}function D(F){W.push(F.x,F.y,F.z)}function G(F,T){let w=F*3;T.x=J[w+0],T.y=J[w+1],T.z=J[w+2]}function R(){let F=new g,T=new g,w=new g,L=new g,A=new i0,C=new i0,S=new i0;for(let k=0,z=0;k<W.length;k+=9,z+=6){F.set(W[k+0],W[k+1],W[k+2]),T.set(W[k+3],W[k+4],W[k+5]),w.set(W[k+6],W[k+7],W[k+8]),A.set(Z[z+0],Z[z+1]),C.set(Z[z+2],Z[z+3]),S.set(Z[z+4],Z[z+5]),L.copy(F).add(T).add(w).divideScalar(3);let u=P(L);M(A,z+0,F,u),M(C,z+2,T,u),M(S,z+4,w,u)}}function M(F,T,w,L){if(L<0&&F.x===1)Z[T]=F.x-1;if(w.x===0&&w.z===0)Z[T]=L/2/Math.PI+0.5}function P(F){return Math.atan2(F.z,-F.x)}function E(F){return Math.atan2(-F.y,Math.sqrt(F.x*F.x+F.z*F.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new HQ(J.vertices,J.indices,J.radius,J.detail)}}class P9 extends HQ{constructor(J=1,Q=0){let $=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],K=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super($,K,J,Q);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new P9(J.radius,J.detail)}}class w8 extends bJ{constructor(J=1,Q=1,$=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:K};let W=J/2,Z=Q/2,X=Math.floor($),Y=Math.floor(K),H=X+1,U=Y+1,O=J/X,D=Q/Y,G=[],R=[],M=[],P=[];for(let E=0;E<U;E++){let F=E*D-Z;for(let T=0;T<H;T++){let w=T*O-W;R.push(w,-F,0),M.push(0,0,1),P.push(T/X),P.push(1-E/Y)}}for(let E=0;E<Y;E++)for(let F=0;F<X;F++){let T=F+H*E,w=F+H*(E+1),L=F+1+H*(E+1),A=F+1+H*E;G.push(T,w,A),G.push(w,L,A)}this.setIndex(G),this.setAttribute("position",new IJ(R,3)),this.setAttribute("normal",new IJ(M,3)),this.setAttribute("uv",new IJ(P,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new w8(J.width,J.height,J.widthSegments,J.heightSegments)}}class X9 extends bJ{constructor(J=0.5,Q=1,$=32,K=1,W=0,Z=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:K,thetaStart:W,thetaLength:Z},$=Math.max(3,$),K=Math.max(1,K);let X=[],Y=[],H=[],U=[],O=J,D=(Q-J)/K,G=new g,R=new i0;for(let M=0;M<=K;M++){for(let P=0;P<=$;P++){let E=W+P/$*Z;G.x=O*Math.cos(E),G.y=O*Math.sin(E),Y.push(G.x,G.y,G.z),H.push(0,0,1),R.x=(G.x/Q+1)/2,R.y=(G.y/Q+1)/2,U.push(R.x,R.y)}O+=D}for(let M=0;M<K;M++){let P=M*($+1);for(let E=0;E<$;E++){let F=E+P,T=F,w=F+$+1,L=F+$+2,A=F+1;X.push(T,w,A),X.push(w,L,A)}}this.setIndex(X),this.setAttribute("position",new IJ(Y,3)),this.setAttribute("normal",new IJ(H,3)),this.setAttribute("uv",new IJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new X9(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class g8 extends bJ{constructor(J=1,Q=32,$=16,K=0,W=Math.PI*2,Z=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:K,phiLength:W,thetaStart:Z,thetaLength:X},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(Z+X,Math.PI),H=0,U=[],O=new g,D=new g,G=[],R=[],M=[],P=[];for(let E=0;E<=$;E++){let F=[],T=E/$,w=Z+T*X,L=J*Math.cos(w),A=Math.sqrt(J*J-L*L),C=0;if(E===0&&Z===0)C=0.5/Q;else if(E===$&&Y===Math.PI)C=-0.5/Q;for(let S=0;S<=Q;S++){let k=S/Q,z=K+k*W;O.x=-A*Math.cos(z),O.y=L,O.z=A*Math.sin(z),R.push(O.x,O.y,O.z),D.copy(O).normalize(),M.push(D.x,D.y,D.z),P.push(k+C,1-T),F.push(H++)}U.push(F)}for(let E=0;E<$;E++)for(let F=0;F<Q;F++){let T=U[E][F+1],w=U[E][F],L=U[E+1][F],A=U[E+1][F+1];if(E!==0||Z>0)G.push(T,w,A);if(E!==$-1||Y<Math.PI)G.push(w,L,A)}this.setIndex(G),this.setAttribute("position",new IJ(R,3)),this.setAttribute("normal",new IJ(M,3)),this.setAttribute("uv",new IJ(P,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new g8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class Y9 extends bJ{constructor(J=1,Q=0.4,$=12,K=48,W=Math.PI*2,Z=0,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:K,arc:W,thetaStart:Z,thetaLength:X},$=Math.floor($),K=Math.floor(K);let Y=[],H=[],U=[],O=[],D=new g,G=new g,R=new g;for(let M=0;M<=$;M++){let P=Z+M/$*X;for(let E=0;E<=K;E++){let F=E/K*W;G.x=(J+Q*Math.cos(P))*Math.cos(F),G.y=(J+Q*Math.cos(P))*Math.sin(F),G.z=Q*Math.sin(P),H.push(G.x,G.y,G.z),D.x=J*Math.cos(F),D.y=J*Math.sin(F),R.subVectors(G,D).normalize(),U.push(R.x,R.y,R.z),O.push(E/K),O.push(M/$)}}for(let M=1;M<=$;M++)for(let P=1;P<=K;P++){let E=(K+1)*M+P-1,F=(K+1)*(M-1)+P-1,T=(K+1)*(M-1)+P,w=(K+1)*M+P;Y.push(E,F,w),Y.push(F,T,w)}this.setIndex(Y),this.setAttribute("position",new IJ(H,3)),this.setAttribute("normal",new IJ(U,3)),this.setAttribute("uv",new IJ(O,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Y9(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}function a9(J){let Q={};for(let $ in J){Q[$]={};for(let K in J[$]){let W=J[$][K];if(HW(W))if(W.isRenderTargetTexture)r0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][K]=null;else Q[$][K]=W.clone();else if(Array.isArray(W))if(HW(W[0])){let Z=[];for(let X=0,Y=W.length;X<Y;X++)Z[X]=W[X].clone();Q[$][K]=Z}else Q[$][K]=W.slice();else Q[$][K]=W}}return Q}function K8(J){let Q={};for(let $=0;$<J.length;$++){let K=a9(J[$]);for(let W in K)Q[W]=K[W]}return Q}function HW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function _Y(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function XK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return FJ.workingColorSpace}var OZ={clone:a9,merge:K8},wY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class F8 extends L9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wY,this.fragmentShader=CY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=a9(J.uniforms),this.uniformsGroups=_Y(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let Z=this.uniforms[K].value;if(Z&&Z.isTexture)Q.uniforms[K]={type:"t",value:Z.toJSON(J).uuid};else if(Z&&Z.isColor)Q.uniforms[K]={type:"c",value:Z.getHex()};else if(Z&&Z.isVector2)Q.uniforms[K]={type:"v2",value:Z.toArray()};else if(Z&&Z.isVector3)Q.uniforms[K]={type:"v3",value:Z.toArray()};else if(Z&&Z.isVector4)Q.uniforms[K]={type:"v4",value:Z.toArray()};else if(Z&&Z.isMatrix3)Q.uniforms[K]={type:"m3",value:Z.toArray()};else if(Z&&Z.isMatrix4)Q.uniforms[K]={type:"m4",value:Z.toArray()};else Q.uniforms[K]={value:Z}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let K in this.extensions)if(this.extensions[K]===!0)$[K]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let K=J.uniforms[$];switch(this.uniforms[$]={},K.type){case"t":this.uniforms[$].value=Q[K.value]||null;break;case"c":this.uniforms[$].value=new KJ().setHex(K.value);break;case"v2":this.uniforms[$].value=new i0().fromArray(K.value);break;case"v3":this.uniforms[$].value=new g().fromArray(K.value);break;case"v4":this.uniforms[$].value=new jJ().fromArray(K.value);break;case"m3":this.uniforms[$].value=new WJ().fromArray(K.value);break;case"m4":this.uniforms[$].value=new CJ().fromArray(K.value);break;default:this.uniforms[$].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class YK extends F8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class s0 extends L9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new KJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new KJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new K9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class T7 extends s0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new i0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return UJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new KJ(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new KJ(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new KJ(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class HK extends L9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class UK extends L9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function p6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class t9{constructor(J,Q,$,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,K=Q[$],W=Q[$-1];$:{J:{let Z;Q:{K:if(!(J<K)){for(let X=$+2;;){if(K===void 0){if(J<W)break K;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(W=K,K=Q[++$],J<K)break J}Z=Q.length;break Q}if(!(J>=W)){let X=Q[1];if(J<X)$=2,W=X;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(K=W,W=Q[--$-1],J>=W)break J}Z=$,$=0;break Q}break $}while($<Z){let X=$+Z>>>1;if(J<Q[X])Z=X;else $=X+1}if(K=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,K)}return this.interpolate_($,W,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,K=this.valueSize,W=J*K;for(let Z=0;Z!==K;++Z)Q[Z]=$[W+Z];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class qK extends t9{constructor(J,Q,$,K){super(J,Q,$,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let K=this.parameterPositions,W=J-2,Z=J+1,X=K[W],Y=K[Z];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,X=2*Q-$;break;case 2402:W=K.length-2,X=Q+K[W]-K[W+1];break;default:W=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:Z=J,Y=2*$-Q;break;case 2402:Z=1,Y=$+K[1]-K[0];break;default:Z=J-1,Y=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-$),this._offsetPrev=W*U,this._offsetNext=Z*U}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,O=this._offsetNext,D=this._weightPrev,G=this._weightNext,R=($-Q)/(K-Q),M=R*R,P=M*R,E=-D*P+2*D*M-D*R,F=(1+D)*P+(-1.5-2*D)*M+(-0.5+D)*R+1,T=(-1-G)*P+(1.5+G)*M+0.5*R,w=G*P-G*M;for(let L=0;L!==X;++L)W[L]=E*Z[U+L]+F*Z[H+L]+T*Z[Y+L]+w*Z[O+L];return W}}class NK extends t9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=($-Q)/(K-Q),O=1-U;for(let D=0;D!==X;++D)W[D]=Z[H+D]*O+Z[Y+D]*U;return W}}class GK extends t9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class FK extends t9{interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,O=this.outTangents;if(!U||!O){let R=($-Q)/(K-Q),M=1-R;for(let P=0;P!==X;++P)W[P]=Z[H+P]*M+Z[Y+P]*R;return W}let D=X*2,G=J-1;for(let R=0;R!==X;++R){let M=Z[H+R],P=Z[Y+R],E=G*D+R*2,F=O[E],T=O[E+1],w=J*D+R*2,L=U[w],A=U[w+1],C=($-Q)/(K-Q),S,k,z,u,j;for(let n=0;n<8;n++){S=C*C,k=S*C,z=1-C,u=z*z,j=u*z;let s=j*Q+3*u*C*F+3*z*S*L+k*K-$;if(Math.abs(s)<0.0000000001)break;let e=3*u*(F-Q)+6*z*C*(L-F)+3*S*(K-L);if(Math.abs(e)<0.0000000001)break;C=C-s/e,C=Math.max(0,Math.min(1,C))}W[R]=j*M+3*u*C*T+3*z*S*A+k*P}return W}}class C8{constructor(J,Q,$,K){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=p6(Q,this.TimeBufferType),this.values=p6($,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:p6(J.times,Array),values:p6(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)$.interpolation=K}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new GK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new NK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new qK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new FK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return r0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,K=Q.length;$!==K;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,K=Q.length;$!==K;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,K=$.length,W=0,Z=K-1;while(W!==K&&$[W]<J)++W;while(Z!==-1&&$[Z]>Q)--Z;if(++Z,W!==0||Z!==K){if(W>=Z)Z=Math.max(Z,1),W=Z-1;let X=this.getValueSize();this.times=$.slice(W,Z),this.values=this.values.slice(W*X,Z*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)JJ("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,K=this.values,W=$.length;if(W===0)JJ("KeyframeTrack: Track is empty.",this),J=!1;let Z=null;for(let X=0;X!==W;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){JJ("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(Z!==null&&Z>Y){JJ("KeyframeTrack: Out of order keys.",this,X,Y,Z),J=!1;break}Z=Y}if(K!==void 0){if(nX(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){JJ("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),K=this.getInterpolation()===2302,W=J.length-1,Z=1;for(let X=1;X<W;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!K){let O=X*$,D=O-$,G=O+$;for(let R=0;R!==$;++R){let M=Q[O+R];if(M!==Q[D+R]||M!==Q[G+R]){Y=!0;break}}}else Y=!0;if(Y){if(X!==Z){J[Z]=J[X];let O=X*$,D=Z*$;for(let G=0;G!==$;++G)Q[D+G]=Q[O+G]}++Z}}if(W>0){J[Z]=J[W];for(let X=W*$,Y=Z*$,H=0;H!==$;++H)Q[Y+H]=Q[X+H];++Z}if(Z!==J.length)this.times=J.slice(0,Z),this.values=Q.slice(0,Z*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);return K.createInterpolant=this.createInterpolant,K}}C8.prototype.ValueTypeName="";C8.prototype.TimeBufferType=Float32Array;C8.prototype.ValueBufferType=Float32Array;C8.prototype.DefaultInterpolation=2301;class e9 extends C8{constructor(J,Q,$){super(J,Q,$)}}e9.prototype.ValueTypeName="bool";e9.prototype.ValueBufferType=Array;e9.prototype.DefaultInterpolation=2300;e9.prototype.InterpolantFactoryMethodLinear=void 0;e9.prototype.InterpolantFactoryMethodSmooth=void 0;class OK extends C8{constructor(J,Q,$,K){super(J,Q,$,K)}}OK.prototype.ValueTypeName="color";class DK extends C8{constructor(J,Q,$,K){super(J,Q,$,K)}}DK.prototype.ValueTypeName="number";class EK extends t9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=($-Q)/(K-Q),H=J*X;for(let U=H+X;H!==U;H+=4)A8.slerpFlat(W,0,Z,H-X,Z,H,Y);return W}}class UQ extends C8{constructor(J,Q,$,K){super(J,Q,$,K)}InterpolantFactoryMethodLinear(J){return new EK(this.times,this.values,this.getValueSize(),J)}}UQ.prototype.ValueTypeName="quaternion";UQ.prototype.InterpolantFactoryMethodSmooth=void 0;class J7 extends C8{constructor(J,Q,$){super(J,Q,$)}}J7.prototype.ValueTypeName="string";J7.prototype.ValueBufferType=Array;J7.prototype.DefaultInterpolation=2300;J7.prototype.InterpolantFactoryMethodLinear=void 0;J7.prototype.InterpolantFactoryMethodSmooth=void 0;class RK extends C8{constructor(J,Q,$,K){super(J,Q,$,K)}}RK.prototype.ValueTypeName="vector";class kK{constructor(J,Q,$){let K=this,W=!1,Z=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(X++,W===!1){if(K.onStart!==void 0)K.onStart(U,Z,X)}W=!0},this.itemEnd=function(U){if(Z++,K.onProgress!==void 0)K.onProgress(U,Z,X);if(Z===X){if(W=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(U){if(K.onError!==void 0)K.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,O){return H.push(U,O),this},this.removeHandler=function(U){let O=H.indexOf(U);if(O!==-1)H.splice(O,2);return this},this.getHandler=function(U){for(let O=0,D=H.length;O<D;O+=2){let G=H[O],R=H[O+1];if(G.global)G.lastIndex=0;if(G.test(U))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var DZ=new kK;class MK{constructor(J){if(this.manager=J!==void 0?J:DZ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(K,W){$.load(J,K,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}MK.DEFAULT_MATERIAL_NAME="__DEFAULT";class S7 extends xJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new KJ(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var tQ=new CJ,UW=new g,qW=new g;class qQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new i0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new CJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new W6,this._frameExtents=new i0(1,1),this._viewportCount=1,this._viewports=[new jJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(UW.setFromMatrixPosition(J.matrixWorld),Q.position.copy(UW),qW.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(qW),Q.updateMatrixWorld(),tQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tQ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(tQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var m6=new g,d6=new A8,u8=new g;class NQ extends xJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new CJ,this.projectionMatrix=new CJ,this.projectionMatrixInverse=new CJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(m6,d6,u8),u8.x===1&&u8.y===1&&u8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(m6,d6,u8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(m6,d6,u8),u8.x===1&&u8.y===1&&u8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(m6,d6,u8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var R9=new g,NW=new i0,GW=new i0;class rJ extends NQ{constructor(J=50,Q=1,$=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=p9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(n7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return p9*2*Math.atan(Math.tan(n7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){R9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(R9.x,R9.y).multiplyScalar(-J/R9.z),R9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(R9.x,R9.y).multiplyScalar(-J/R9.z)}getViewSize(J,Q){return this.getViewBounds(J,NW,GW),Q.subVectors(GW,NW)}setViewOffset(J,Q,$,K,W,Z){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=K,this.view.width=W,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(n7*0.5*this.fov)/this.zoom,$=2*Q,K=this.aspect*$,W=-0.5*K,Z=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=Z;W+=Z.offsetX*K/Y,Q-=Z.offsetY*$/H,K*=Z.width/Y,$*=Z.height/H}let X=this.filmOffset;if(X!==0)W+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+K,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class EZ extends qQ{constructor(){super(new rJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=p9*2*J.angle*this.focus,K=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||K!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=K,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class A9 extends S7{constructor(J,Q,$=0,K=Math.PI/3,W=0,Z=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xJ.DEFAULT_UP),this.updateMatrix(),this.target=new xJ,this.distance=$,this.angle=K,this.penumbra=W,this.decay=Z,this.map=null,this.shadow=new EZ}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class RZ extends qQ{constructor(){super(new rJ(90,1,0.5,500));this.isPointLightShadow=!0}}class s8 extends S7{constructor(J,Q,$=0,K=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=K,this.shadow=new RZ}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class Z6 extends NQ{constructor(J=-1,Q=1,$=1,K=-1,W=0.1,Z=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=K,this.near=W,this.far=Z,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,K,W,Z){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=K,this.view.width=W,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,K=(this.top+this.bottom)/2,W=$-J,Z=$+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=H*this.view.offsetX,Z=W+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic(W,Z,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class kZ extends qQ{constructor(){super(new Z6(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class j7 extends S7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xJ.DEFAULT_UP),this.updateMatrix(),this.target=new xJ,this.shadow=new kZ}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class GQ extends S7{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var R7=-90,k7=1;class VK extends xJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new rJ(R7,k7,J,Q);K.layers=this.layers,this.add(K);let W=new rJ(R7,k7,J,Q);W.layers=this.layers,this.add(W);let Z=new rJ(R7,k7,J,Q);Z.layers=this.layers,this.add(Z);let X=new rJ(R7,k7,J,Q);X.layers=this.layers,this.add(X);let Y=new rJ(R7,k7,J,Q);Y.layers=this.layers,this.add(Y);let H=new rJ(R7,k7,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,K,W,Z,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),Z.up.set(0,0,1),Z.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),Z.up.set(0,0,-1),Z.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,Z,X,Y,H,U]=this.children,O=J.getRenderTarget(),D=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let M=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let P=!1;if(J.isWebGLRenderer===!0)P=J.state.buffers.depth.getReversed();else P=J.reversedDepthBuffer;if(J.setRenderTarget($,0,K),P&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,K),P&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,2,K),P&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,K),P&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,K),P&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=M,J.setRenderTarget($,5,K),P&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(O,D,G),J.xr.enabled=R,$.texture.needsPMREMUpdate=!0}}class BK extends rJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var LK="\\[\\]\\.:\\/",TY=new RegExp("["+LK+"]","g"),zK="[^"+LK+"]",SY="[^"+LK.replace("\\.","")+"]",jY=/((?:WC+[\/:])*)/.source.replace("WC",zK),yY=/(WCOD+)?/.source.replace("WCOD",SY),vY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zK),hY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zK),bY=new RegExp("^"+jY+yY+vY+hY+"$"),fY=["material","materials","bones","map"];class MZ{constructor(J,Q,$){let K=$||RJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,K=this._bindings[$];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let K=this._targetGroup.nCachedObjects_,W=$.length;K!==W;++K)$[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class RJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||RJ.parseTrackName(Q),this.node=RJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new RJ(J,Q,$);else return new RJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(TY,"")}static parseTrackName(J){let Q=bY.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=$.nodeName&&$.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let W=$.nodeName.substring(K+1);if(fY.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,K),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let Z=0;Z<W.length;Z++){let X=W[Z];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},K=$(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)J[Q++]=$[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,K=Q.propertyName,W=Q.propertyIndex;if(!J)J=RJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){r0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){JJ("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){JJ("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){JJ("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){JJ("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){JJ("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){JJ("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){JJ("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let Z=J[K];if(Z===void 0){let H=Q.nodeName;JJ("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){JJ("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){JJ("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=Z,this.propertyIndex=W}else if(Z.fromArray!==void 0&&Z.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=Z;else if(Array.isArray(Z))Y=this.BindingType.EntireArray,this.resolvedProperty=Z;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}RJ.Composite=MZ;RJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};RJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};RJ.prototype.GetterByBindingType=[RJ.prototype._getValue_direct,RJ.prototype._getValue_array,RJ.prototype._getValue_arrayElement,RJ.prototype._getValue_toArray];RJ.prototype.SetterByBindingTypeAndVersioning=[[RJ.prototype._setValue_direct,RJ.prototype._setValue_direct_setNeedsUpdate,RJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_array,RJ.prototype._setValue_array_setNeedsUpdate,RJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_arrayElement,RJ.prototype._setValue_arrayElement_setNeedsUpdate,RJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_fromArray,RJ.prototype._setValue_fromArray_setNeedsUpdate,RJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var I1=new Float32Array(1);class X6{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=UJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(UJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class IK{static{IK.prototype.isMatrix2=!0}constructor(J,Q,$,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,K){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=K,this}}class FQ extends n8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(J===void 0){r0("Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function PK(J,Q,$,K){let W=xY(K);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function xY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)r0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function dZ(){let J=null,Q=!1,$=null,K=null;function W(Z,X){$(Z,X),K=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;K=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(Z){$=Z},setContext:function(Z){J=Z}}}function gY(J){let Q=new WeakMap;function $(Y,H){let{array:U,usage:O}=Y,D=U.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,U,O),Y.onUploadCallback();let R;if(U instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)R=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)R=J.SHORT;else if(U instanceof Uint32Array)R=J.UNSIGNED_INT;else if(U instanceof Int32Array)R=J.INT;else if(U instanceof Int8Array)R=J.BYTE;else if(U instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:R,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:D}}function K(Y,H,U){let{array:O,updateRanges:D}=H;if(J.bindBuffer(U,Y),D.length===0)J.bufferSubData(U,0,O);else{D.sort((R,M)=>R.start-M.start);let G=0;for(let R=1;R<D.length;R++){let M=D[G],P=D[R];if(P.start<=M.start+M.count+1)M.count=Math.max(M.count,P.start+P.count-M.start);else++G,D[G]=P}D.length=G+1;for(let R=0,M=D.length;R<M;R++){let P=D[R];J.bufferSubData(U,P.start*O.BYTES_PER_ELEMENT,O,P.start,P.count)}H.clearUpdateRanges()}H.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let O=Q.get(Y);if(!O||O.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(U.buffer,Y,H),U.version=Y.version}}return{get:W,remove:Z,update:X}}var pY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mY=`#ifdef USE_ALPHAHASH
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
#endif`,dY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nY=`#ifdef USE_AOMAP
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
#endif`,sY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iY=`#ifdef USE_BATCHING
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
#endif`,oY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tY=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eY=`#ifdef USE_IRIDESCENCE
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
#endif`,JH=`#ifdef USE_BUMPMAP
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
#endif`,QH=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$H=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,YH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,HH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,UH=`#define PI 3.141592653589793
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
} // validated`,qH=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NH=`vec3 transformedNormal = objectNormal;
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
#endif`,GH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EH="gl_FragColor = linearToOutputTexel( gl_FragColor );",RH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kH=`#ifdef USE_ENVMAP
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
#endif`,MH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VH=`#ifdef USE_ENVMAP
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
#endif`,BH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LH=`#ifdef USE_ENVMAP
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
#endif`,zH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_H=`#ifdef USE_GRADIENTMAP
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
}`,wH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SH=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jH=`#ifdef USE_ENVMAP
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
#endif`,yH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fH=`PhysicalMaterial material;
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
#endif`,xH=`uniform sampler2D dfgLUT;
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
}`,gH=`
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
#endif`,pH=`#if defined( RE_IndirectDiffuse )
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
#endif`,mH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dH=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,uH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rH=`#if defined( USE_POINTS_UV )
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
#endif`,aH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J5=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$5=`#ifdef USE_MORPHTARGETS
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
#endif`,K5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z5=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U5=`#ifdef USE_NORMALMAP
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
#endif`,q5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D5=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P5=`float getShadowMask() {
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
}`,A5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_5=`#ifdef USE_SKINNING
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
#endif`,w5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C5=`#ifdef USE_SKINNING
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
#endif`,T5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y5=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v5=`#ifdef USE_TRANSMISSION
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
#endif`,h5=`#ifdef USE_TRANSMISSION
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
#endif`,b5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m5=`uniform sampler2D t2D;
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
}`,d5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n5=`#include <common>
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
}`,s5=`#if DEPTH_PACKING == 3200
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
}`,i5=`#define DISTANCE
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
}`,o5=`#define DISTANCE
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
}`,r5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t5=`uniform float scale;
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
}`,e5=`uniform vec3 diffuse;
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
}`,JU=`#include <common>
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
}`,QU=`uniform vec3 diffuse;
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
}`,$U=`#define LAMBERT
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
}`,KU=`#define LAMBERT
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
}`,WU=`#define MATCAP
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
}`,ZU=`#define MATCAP
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
}`,XU=`#define NORMAL
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
}`,YU=`#define NORMAL
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
}`,HU=`#define PHONG
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
}`,UU=`#define PHONG
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
}`,qU=`#define STANDARD
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
}`,NU=`#define STANDARD
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
}`,GU=`#define TOON
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
}`,FU=`#define TOON
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
}`,OU=`uniform float size;
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
}`,DU=`uniform vec3 diffuse;
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
}`,EU=`#include <common>
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
}`,RU=`uniform vec3 color;
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
}`,kU=`uniform float rotation;
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
}`,MU=`uniform vec3 diffuse;
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
}`,YJ={alphahash_fragment:pY,alphahash_pars_fragment:mY,alphamap_fragment:dY,alphamap_pars_fragment:uY,alphatest_fragment:lY,alphatest_pars_fragment:cY,aomap_fragment:nY,aomap_pars_fragment:sY,batching_pars_vertex:iY,batching_vertex:oY,begin_vertex:rY,beginnormal_vertex:aY,bsdfs:tY,iridescence_fragment:eY,bumpmap_pars_fragment:JH,clipping_planes_fragment:QH,clipping_planes_pars_fragment:$H,clipping_planes_pars_vertex:KH,clipping_planes_vertex:WH,color_fragment:ZH,color_pars_fragment:XH,color_pars_vertex:YH,color_vertex:HH,common:UH,cube_uv_reflection_fragment:qH,defaultnormal_vertex:NH,displacementmap_pars_vertex:GH,displacementmap_vertex:FH,emissivemap_fragment:OH,emissivemap_pars_fragment:DH,colorspace_fragment:EH,colorspace_pars_fragment:RH,envmap_fragment:kH,envmap_common_pars_fragment:MH,envmap_pars_fragment:VH,envmap_pars_vertex:BH,envmap_physical_pars_fragment:jH,envmap_vertex:LH,fog_vertex:zH,fog_pars_vertex:IH,fog_fragment:PH,fog_pars_fragment:AH,gradientmap_pars_fragment:_H,lightmap_pars_fragment:wH,lights_lambert_fragment:CH,lights_lambert_pars_fragment:TH,lights_pars_begin:SH,lights_toon_fragment:yH,lights_toon_pars_fragment:vH,lights_phong_fragment:hH,lights_phong_pars_fragment:bH,lights_physical_fragment:fH,lights_physical_pars_fragment:xH,lights_fragment_begin:gH,lights_fragment_maps:pH,lights_fragment_end:mH,lightprobes_pars_fragment:dH,logdepthbuf_fragment:uH,logdepthbuf_pars_fragment:lH,logdepthbuf_pars_vertex:cH,logdepthbuf_vertex:nH,map_fragment:sH,map_pars_fragment:iH,map_particle_fragment:oH,map_particle_pars_fragment:rH,metalnessmap_fragment:aH,metalnessmap_pars_fragment:tH,morphinstance_vertex:eH,morphcolor_vertex:J5,morphnormal_vertex:Q5,morphtarget_pars_vertex:$5,morphtarget_vertex:K5,normal_fragment_begin:W5,normal_fragment_maps:Z5,normal_pars_fragment:X5,normal_pars_vertex:Y5,normal_vertex:H5,normalmap_pars_fragment:U5,clearcoat_normal_fragment_begin:q5,clearcoat_normal_fragment_maps:N5,clearcoat_pars_fragment:G5,iridescence_pars_fragment:F5,opaque_fragment:O5,packing:D5,premultiplied_alpha_fragment:E5,project_vertex:R5,dithering_fragment:k5,dithering_pars_fragment:M5,roughnessmap_fragment:V5,roughnessmap_pars_fragment:B5,shadowmap_pars_fragment:L5,shadowmap_pars_vertex:z5,shadowmap_vertex:I5,shadowmask_pars_fragment:P5,skinbase_vertex:A5,skinning_pars_vertex:_5,skinning_vertex:w5,skinnormal_vertex:C5,specularmap_fragment:T5,specularmap_pars_fragment:S5,tonemapping_fragment:j5,tonemapping_pars_fragment:y5,transmission_fragment:v5,transmission_pars_fragment:h5,uv_pars_fragment:b5,uv_pars_vertex:f5,uv_vertex:x5,worldpos_vertex:g5,background_vert:p5,background_frag:m5,backgroundCube_vert:d5,backgroundCube_frag:u5,cube_vert:l5,cube_frag:c5,depth_vert:n5,depth_frag:s5,distance_vert:i5,distance_frag:o5,equirect_vert:r5,equirect_frag:a5,linedashed_vert:t5,linedashed_frag:e5,meshbasic_vert:JU,meshbasic_frag:QU,meshlambert_vert:$U,meshlambert_frag:KU,meshmatcap_vert:WU,meshmatcap_frag:ZU,meshnormal_vert:XU,meshnormal_frag:YU,meshphong_vert:HU,meshphong_frag:UU,meshphysical_vert:qU,meshphysical_frag:NU,meshtoon_vert:GU,meshtoon_frag:FU,points_vert:OU,points_frag:DU,shadow_vert:EU,shadow_frag:RU,sprite_vert:kU,sprite_frag:MU},C0={common:{diffuse:{value:new KJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new WJ},alphaMap:{value:null},alphaMapTransform:{value:new WJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new WJ}},envmap:{envMap:{value:null},envMapRotation:{value:new WJ},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new WJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new WJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new WJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new WJ},normalScale:{value:new i0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new WJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new WJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new WJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new WJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new KJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new g},probesMax:{value:new g},probesResolution:{value:new g}},points:{diffuse:{value:new KJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new WJ},alphaTest:{value:0},uvTransform:{value:new WJ}},sprite:{diffuse:{value:new KJ(16777215)},opacity:{value:1},center:{value:new i0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new WJ},alphaMap:{value:null},alphaMapTransform:{value:new WJ},alphaTest:{value:0}}},o8={basic:{uniforms:K8([C0.common,C0.specularmap,C0.envmap,C0.aomap,C0.lightmap,C0.fog]),vertexShader:YJ.meshbasic_vert,fragmentShader:YJ.meshbasic_frag},lambert:{uniforms:K8([C0.common,C0.specularmap,C0.envmap,C0.aomap,C0.lightmap,C0.emissivemap,C0.bumpmap,C0.normalmap,C0.displacementmap,C0.fog,C0.lights,{emissive:{value:new KJ(0)},envMapIntensity:{value:1}}]),vertexShader:YJ.meshlambert_vert,fragmentShader:YJ.meshlambert_frag},phong:{uniforms:K8([C0.common,C0.specularmap,C0.envmap,C0.aomap,C0.lightmap,C0.emissivemap,C0.bumpmap,C0.normalmap,C0.displacementmap,C0.fog,C0.lights,{emissive:{value:new KJ(0)},specular:{value:new KJ(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:YJ.meshphong_vert,fragmentShader:YJ.meshphong_frag},standard:{uniforms:K8([C0.common,C0.envmap,C0.aomap,C0.lightmap,C0.emissivemap,C0.bumpmap,C0.normalmap,C0.displacementmap,C0.roughnessmap,C0.metalnessmap,C0.fog,C0.lights,{emissive:{value:new KJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:YJ.meshphysical_vert,fragmentShader:YJ.meshphysical_frag},toon:{uniforms:K8([C0.common,C0.aomap,C0.lightmap,C0.emissivemap,C0.bumpmap,C0.normalmap,C0.displacementmap,C0.gradientmap,C0.fog,C0.lights,{emissive:{value:new KJ(0)}}]),vertexShader:YJ.meshtoon_vert,fragmentShader:YJ.meshtoon_frag},matcap:{uniforms:K8([C0.common,C0.bumpmap,C0.normalmap,C0.displacementmap,C0.fog,{matcap:{value:null}}]),vertexShader:YJ.meshmatcap_vert,fragmentShader:YJ.meshmatcap_frag},points:{uniforms:K8([C0.points,C0.fog]),vertexShader:YJ.points_vert,fragmentShader:YJ.points_frag},dashed:{uniforms:K8([C0.common,C0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:YJ.linedashed_vert,fragmentShader:YJ.linedashed_frag},depth:{uniforms:K8([C0.common,C0.displacementmap]),vertexShader:YJ.depth_vert,fragmentShader:YJ.depth_frag},normal:{uniforms:K8([C0.common,C0.bumpmap,C0.normalmap,C0.displacementmap,{opacity:{value:1}}]),vertexShader:YJ.meshnormal_vert,fragmentShader:YJ.meshnormal_frag},sprite:{uniforms:K8([C0.sprite,C0.fog]),vertexShader:YJ.sprite_vert,fragmentShader:YJ.sprite_frag},background:{uniforms:{uvTransform:{value:new WJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:YJ.background_vert,fragmentShader:YJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new WJ}},vertexShader:YJ.backgroundCube_vert,fragmentShader:YJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:YJ.cube_vert,fragmentShader:YJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:YJ.equirect_vert,fragmentShader:YJ.equirect_frag},distance:{uniforms:K8([C0.common,C0.displacementmap,{referencePosition:{value:new g},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:YJ.distance_vert,fragmentShader:YJ.distance_frag},shadow:{uniforms:K8([C0.lights,C0.fog,{color:{value:new KJ(0)},opacity:{value:1}}]),vertexShader:YJ.shadow_vert,fragmentShader:YJ.shadow_frag}};o8.physical={uniforms:K8([o8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new WJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new WJ},clearcoatNormalScale:{value:new i0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new WJ},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new WJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new WJ},sheen:{value:0},sheenColor:{value:new KJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new WJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new WJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new WJ},transmissionSamplerSize:{value:new i0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new WJ},attenuationDistance:{value:0},attenuationColor:{value:new KJ(0)},specularColor:{value:new KJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new WJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new WJ},anisotropyVector:{value:new i0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new WJ}}]),vertexShader:YJ.meshphysical_vert,fragmentShader:YJ.meshphysical_frag};var OQ={r:0,b:0,g:0},VU=new CJ,uZ=new WJ;uZ.set(-1,0,0,0,1,0,0,0,1);function BU(J,Q,$,K,W,Z){let X=new KJ(0),Y=W===!0?0:1,H,U,O=null,D=0,G=null;function R(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){let L=T.backgroundBlurriness>0;w=Q.get(w,L)}return w}function M(T){let w=!1,L=R(T);if(L===null)E(X,Y);else if(L&&L.isColor)E(L,1),w=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")$.buffers.color.setClear(0,0,0,1,Z);else if(A==="alpha-blend")$.buffers.color.setClear(0,0,0,0,Z);if(J.autoClear||w)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function P(T,w){let L=R(w);if(L&&(L.isCubeTexture||L.mapping===a7)){if(U===void 0)U=new U0(new d0(1,1,1),new F8({name:"BackgroundCubeMaterial",uniforms:a9(o8.backgroundCube.uniforms),vertexShader:o8.backgroundCube.vertexShader,fragmentShader:o8.backgroundCube.fragmentShader,side:$8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(A,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(U);if(U.material.uniforms.envMap.value=L,U.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(VU.makeRotationFromEuler(w.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(uZ);if(U.material.toneMapped=FJ.getTransfer(L.colorSpace)!==zJ,O!==L||D!==L.version||G!==J.toneMapping)U.material.needsUpdate=!0,O=L,D=L.version,G=J.toneMapping;U.layers.enableAll(),T.unshift(U,U.geometry,U.material,0,0,null)}else if(L&&L.isTexture){if(H===void 0)H=new U0(new w8(2,2),new F8({name:"BackgroundMaterial",uniforms:a9(o8.background.uniforms),vertexShader:o8.background.vertexShader,fragmentShader:o8.background.fragmentShader,side:z7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=L,H.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,H.material.toneMapped=FJ.getTransfer(L.colorSpace)!==zJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(L.matrix),O!==L||D!==L.version||G!==J.toneMapping)H.material.needsUpdate=!0,O=L,D=L.version,G=J.toneMapping;H.layers.enableAll(),T.unshift(H,H.geometry,H.material,0,0,null)}}function E(T,w){T.getRGB(OQ,XK(J)),$.buffers.color.setClear(OQ.r,OQ.g,OQ.b,w,Z)}function F(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(T,w=1){X.set(T),Y=w,E(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(T){Y=T,E(X,Y)},render:M,addToRenderList:P,dispose:F}}function LU(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},W=G(null),Z=W,X=!1;function Y(j,n,J0,s,e){let $0=!1,d=D(j,s,J0,n);if(Z!==d)Z=d,U(Z.object);if($0=R(j,s,J0,e),$0)M(j,s,J0,e);if(e!==null)Q.update(e,J.ELEMENT_ARRAY_BUFFER);if($0||X){if(X=!1,L(j,n,J0,s),e!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(e).buffer)}}function H(){return J.createVertexArray()}function U(j){return J.bindVertexArray(j)}function O(j){return J.deleteVertexArray(j)}function D(j,n,J0,s){let e=s.wireframe===!0,$0=K[n.id];if($0===void 0)$0={},K[n.id]=$0;let d=j.isInstancedMesh===!0?j.id:0,X0=$0[d];if(X0===void 0)X0={},$0[d]=X0;let q0=X0[J0.id];if(q0===void 0)q0={},X0[J0.id]=q0;let L0=q0[e];if(L0===void 0)L0=G(H()),q0[e]=L0;return L0}function G(j){let n=[],J0=[],s=[];for(let e=0;e<$;e++)n[e]=0,J0[e]=0,s[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:n,enabledAttributes:J0,attributeDivisors:s,object:j,attributes:{},index:null}}function R(j,n,J0,s){let e=Z.attributes,$0=n.attributes,d=0,X0=J0.getAttributes();for(let q0 in X0)if(X0[q0].location>=0){let y0=e[q0],T0=$0[q0];if(T0===void 0){if(q0==="instanceMatrix"&&j.instanceMatrix)T0=j.instanceMatrix;if(q0==="instanceColor"&&j.instanceColor)T0=j.instanceColor}if(y0===void 0)return!0;if(y0.attribute!==T0)return!0;if(T0&&y0.data!==T0.data)return!0;d++}if(Z.attributesNum!==d)return!0;if(Z.index!==s)return!0;return!1}function M(j,n,J0,s){let e={},$0=n.attributes,d=0,X0=J0.getAttributes();for(let q0 in X0)if(X0[q0].location>=0){let y0=$0[q0];if(y0===void 0){if(q0==="instanceMatrix"&&j.instanceMatrix)y0=j.instanceMatrix;if(q0==="instanceColor"&&j.instanceColor)y0=j.instanceColor}let T0={};if(T0.attribute=y0,y0&&y0.data)T0.data=y0.data;e[q0]=T0,d++}Z.attributes=e,Z.attributesNum=d,Z.index=s}function P(){let j=Z.newAttributes;for(let n=0,J0=j.length;n<J0;n++)j[n]=0}function E(j){F(j,0)}function F(j,n){let{newAttributes:J0,enabledAttributes:s,attributeDivisors:e}=Z;if(J0[j]=1,s[j]===0)J.enableVertexAttribArray(j),s[j]=1;if(e[j]!==n)J.vertexAttribDivisor(j,n),e[j]=n}function T(){let{newAttributes:j,enabledAttributes:n}=Z;for(let J0=0,s=n.length;J0<s;J0++)if(n[J0]!==j[J0])J.disableVertexAttribArray(J0),n[J0]=0}function w(j,n,J0,s,e,$0,d){if(d===!0)J.vertexAttribIPointer(j,n,J0,e,$0);else J.vertexAttribPointer(j,n,J0,s,e,$0)}function L(j,n,J0,s){P();let e=s.attributes,$0=J0.getAttributes(),d=n.defaultAttributeValues;for(let X0 in $0){let q0=$0[X0];if(q0.location>=0){let L0=e[X0];if(L0===void 0){if(X0==="instanceMatrix"&&j.instanceMatrix)L0=j.instanceMatrix;if(X0==="instanceColor"&&j.instanceColor)L0=j.instanceColor}if(L0!==void 0){let{normalized:y0,itemSize:T0}=L0,OJ=Q.get(L0);if(OJ===void 0)continue;let{buffer:qJ,type:K0,bytesPerElement:N0}=OJ,z0=K0===J.INT||K0===J.UNSIGNED_INT||L0.gpuType===N$;if(L0.isInterleavedBufferAttribute){let M0=L0.data,u0=M0.stride,ZJ=L0.offset;if(M0.isInstancedInterleavedBuffer){for(let o=0;o<q0.locationSize;o++)F(q0.location+o,M0.meshPerAttribute);if(j.isInstancedMesh!==!0&&s._maxInstanceCount===void 0)s._maxInstanceCount=M0.meshPerAttribute*M0.count}else for(let o=0;o<q0.locationSize;o++)E(q0.location+o);J.bindBuffer(J.ARRAY_BUFFER,qJ);for(let o=0;o<q0.locationSize;o++)w(q0.location+o,T0/q0.locationSize,K0,y0,u0*N0,(ZJ+T0/q0.locationSize*o)*N0,z0)}else{if(L0.isInstancedBufferAttribute){for(let M0=0;M0<q0.locationSize;M0++)F(q0.location+M0,L0.meshPerAttribute);if(j.isInstancedMesh!==!0&&s._maxInstanceCount===void 0)s._maxInstanceCount=L0.meshPerAttribute*L0.count}else for(let M0=0;M0<q0.locationSize;M0++)E(q0.location+M0);J.bindBuffer(J.ARRAY_BUFFER,qJ);for(let M0=0;M0<q0.locationSize;M0++)w(q0.location+M0,T0/q0.locationSize,K0,y0,T0*N0,T0/q0.locationSize*M0*N0,z0)}}else if(d!==void 0){let y0=d[X0];if(y0!==void 0)switch(y0.length){case 2:J.vertexAttrib2fv(q0.location,y0);break;case 3:J.vertexAttrib3fv(q0.location,y0);break;case 4:J.vertexAttrib4fv(q0.location,y0);break;default:J.vertexAttrib1fv(q0.location,y0)}}}}T()}function A(){z();for(let j in K){let n=K[j];for(let J0 in n){let s=n[J0];for(let e in s){let $0=s[e];for(let d in $0)O($0[d].object),delete $0[d];delete s[e]}}delete K[j]}}function C(j){if(K[j.id]===void 0)return;let n=K[j.id];for(let J0 in n){let s=n[J0];for(let e in s){let $0=s[e];for(let d in $0)O($0[d].object),delete $0[d];delete s[e]}}delete K[j.id]}function S(j){for(let n in K){let J0=K[n];for(let s in J0){let e=J0[s];if(e[j.id]===void 0)continue;let $0=e[j.id];for(let d in $0)O($0[d].object),delete $0[d];delete e[j.id]}}}function k(j){for(let n in K){let J0=K[n],s=j.isInstancedMesh===!0?j.id:0,e=J0[s];if(e===void 0)continue;for(let $0 in e){let d=e[$0];for(let X0 in d)O(d[X0].object),delete d[X0];delete e[$0]}if(delete J0[s],Object.keys(J0).length===0)delete K[n]}}function z(){if(u(),X=!0,Z===W)return;Z=W,U(Z.object)}function u(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:z,resetDefaultState:u,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:k,releaseStatesOfProgram:S,initAttributes:P,enableAttribute:E,disableUnusedAttributes:T}}function zU(J,Q,$){let K;function W(H){K=H}function Z(H,U){J.drawArrays(K,H,U),$.update(U,K,1)}function X(H,U,O){if(O===0)return;J.drawArraysInstanced(K,H,U,O),$.update(U,K,O)}function Y(H,U,O){if(O===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,U,0,O);let G=0;for(let R=0;R<O;R++)G+=U[R];$.update(G,K,1)}this.setMode=W,this.render=Z,this.renderInstances=X,this.renderMultiDraw=Y}function IU(J,Q,$,K){let W;function Z(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let S=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(S){if(S!==c8&&K.convert(S)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(S){let k=S===Z9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(S!==f8&&K.convert(S)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==W9&&!k)return!1;return!0}function H(S){if(S==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";S="mediump"}if(S==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",O=H(U);if(O!==U)r0("WebGLRenderer:",U,"not supported, using",O,"instead."),U=O;let D=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)r0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),T=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),w=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Z,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:D,reversedDepthBuffer:G,maxTextures:R,maxVertexTextures:M,maxTextureSize:P,maxCubemapSize:E,maxAttributes:F,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:L,maxSamples:A,samples:C}}function PU(J){let Q=this,$=null,K=0,W=!1,Z=!1,X=new h8,Y=new WJ,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(D,G){let R=D.length!==0||G||K!==0||W;return W=G,K=D.length,R},this.beginShadows=function(){Z=!0,O(null)},this.endShadows=function(){Z=!1},this.setGlobalState=function(D,G){$=O(D,G,0)},this.setState=function(D,G,R){let{clippingPlanes:M,clipIntersection:P,clipShadows:E}=D,F=J.get(D);if(!W||M===null||M.length===0||Z&&!E)if(Z)O(null);else U();else{let T=Z?0:K,w=T*4,L=F.clippingState||null;H.value=L,L=O(M,G,w,R);for(let A=0;A!==w;++A)L[A]=$[A];F.clippingState=L,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=T}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function O(D,G,R,M){let P=D!==null?D.length:0,E=null;if(P!==0){if(E=H.value,M!==!0||E===null){let F=R+P*4,T=G.matrixWorldInverse;if(Y.getNormalMatrix(T),E===null||E.length<F)E=new Float32Array(F);for(let w=0,L=R;w!==P;++w,L+=4)X.copy(D[w]).applyMatrix4(T,Y),X.normal.toArray(E,L),E[L+3]=X.constant}H.value=E,H.needsUpdate=!0}return Q.numPlanes=P,Q.numIntersection=0,E}}var _9=4,VZ=[0.125,0.215,0.35,0.446,0.526,0.582],Q7=20,AU=256,Y6=new Z6,BZ=new KJ,AK=null,_K=0,wK=0,CK=!1,_U=new g;class jK{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,K=100,W={}){let{size:Z=256,position:X=_U}=W;AK=this._renderer.getRenderTarget(),_K=this._renderer.getActiveCubeFace(),wK=this._renderer.getActiveMipmapLevel(),CK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(Z);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,K,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=IZ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=zZ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(AK,_K,wK),this._renderer.xr.enabled=CK,J.scissorTest=!1,y7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===P7||J.mapping===d9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);AK=this._renderer.getRenderTarget(),_K=this._renderer.getActiveCubeFace(),wK=this._renderer.getActiveMipmapLevel(),CK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:G8,minFilter:G8,generateMipmaps:!1,type:Z9,format:c8,colorSpace:i$,depthBuffer:!1},K=LZ(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=LZ(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wU(W)),this._blurMaterial=TU(W,J,Q),this._ggxMaterial=CU(W,J,Q)}return K}_compileMaterial(J){let Q=new U0(new bJ,J);this._renderer.compile(Q,Y6)}_sceneToCubeUV(J,Q,$,K,W){let Y=new rJ(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],O=this._renderer,D=O.autoClear,G=O.toneMapping;if(O.getClearColor(BZ),O.toneMapping=b8,O.autoClear=!1,O.state.buffers.depth.getReversed())O.setRenderTarget(K),O.clearDepth(),O.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new U0(new d0,new vJ({name:"PMREM.Background",side:$8,depthWrite:!1,depthTest:!1}));let M=this._backgroundBox,P=M.material,E=!1,F=J.background;if(F){if(F.isColor)P.color.copy(F),J.background=null,E=!0}else P.color.copy(BZ),E=!0;for(let T=0;T<6;T++){let w=T%3;if(w===0)Y.up.set(0,H[T],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x+U[T],W.y,W.z);else if(w===1)Y.up.set(0,0,H[T]),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y+U[T],W.z);else Y.up.set(0,H[T],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y,W.z+U[T]);let L=this._cubeSize;if(y7(K,w*L,T>2?L:0,L,L),O.setRenderTarget(K),E)O.render(M,Y);O.render(J,Y)}O.toneMapping=G,O.autoClear=D,J.background=F}_textureToCubeUV(J,Q){let $=this._renderer,K=J.mapping===P7||J.mapping===d9;if(K){if(this._cubemapMaterial===null)this._cubemapMaterial=IZ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=zZ();let W=K?this._cubemapMaterial:this._equirectMaterial,Z=this._lodMeshes[0];Z.material=W;let X=W.uniforms;X.envMap.value=J;let Y=this._cubeSize;y7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(Z,Y6)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let K=this._lodMeshes.length;for(let W=1;W<K;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let K=this._renderer,W=this._pingPongRenderTarget,Z=this._ggxMaterial,X=this._lodMeshes[$];X.material=Z;let Y=Z.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),O=Math.sqrt(H*H-U*U),D=0+H*1.25,G=O*D,{_lodMax:R}=this,M=this._sizeLods[$],P=3*M*($>R-_9?$-R+_9:0),E=4*(this._cubeSize-M);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=R-Q,y7(W,P,E,3*M,2*M),K.setRenderTarget(W),K.render(X,Y6),Y.envMap.value=W.texture,Y.roughness.value=0,Y.mipInt.value=R-$,y7(J,P,E,3*M,2*M),K.setRenderTarget(J),K.render(X,Y6)}_blur(J,Q,$,K,W){let Z=this._pingPongRenderTarget;this._halfBlur(J,Z,Q,$,K,"latitudinal",W),this._halfBlur(Z,J,$,$,K,"longitudinal",W)}_halfBlur(J,Q,$,K,W,Z,X){let Y=this._renderer,H=this._blurMaterial;if(Z!=="latitudinal"&&Z!=="longitudinal")JJ("blur direction must be either latitudinal or longitudinal!");let U=3,O=this._lodMeshes[K];O.material=H;let D=H.uniforms,G=this._sizeLods[$]-1,R=isFinite(W)?Math.PI/(2*G):2*Math.PI/(2*Q7-1),M=W/R,P=isFinite(W)?1+Math.floor(U*M):Q7;if(P>Q7)r0(`sigmaRadians, ${W}, is too large and will clip, as it requested ${P} samples when the maximum is set to ${Q7}`);let E=[],F=0;for(let C=0;C<Q7;++C){let S=C/M,k=Math.exp(-S*S/2);if(E.push(k),C===0)F+=k;else if(C<P)F+=2*k}for(let C=0;C<E.length;C++)E[C]=E[C]/F;if(D.envMap.value=J.texture,D.samples.value=P,D.weights.value=E,D.latitudinal.value=Z==="latitudinal",X)D.poleAxis.value=X;let{_lodMax:T}=this;D.dTheta.value=R,D.mipInt.value=T-$;let w=this._sizeLods[K],L=3*w*(K>T-_9?K-T+_9:0),A=4*(this._cubeSize-w);y7(Q,L,A,3*w,2*w),Y.setRenderTarget(Q),Y.render(O,Y6)}}function wU(J){let Q=[],$=[],K=[],W=J,Z=J-_9+1+VZ.length;for(let X=0;X<Z;X++){let Y=Math.pow(2,W);Q.push(Y);let H=1/Y;if(X>J-_9)H=VZ[X-J+_9-1];else if(X===0)H=0;$.push(H);let U=1/(Y-2),O=-U,D=1+U,G=[O,O,D,O,D,D,O,O,D,D,O,D],R=6,M=6,P=3,E=2,F=1,T=new Float32Array(P*M*R),w=new Float32Array(E*M*R),L=new Float32Array(F*M*R);for(let C=0;C<R;C++){let S=C%3*2/3-1,k=C>2?0:-1,z=[S,k,0,S+0.6666666666666666,k,0,S+0.6666666666666666,k+1,0,S,k,0,S+0.6666666666666666,k+1,0,S,k+1,0];T.set(z,P*M*C),w.set(G,E*M*C);let u=[C,C,C,C,C,C];L.set(u,F*M*C)}let A=new bJ;if(A.setAttribute("position",new gJ(T,P)),A.setAttribute("uv",new gJ(w,E)),A.setAttribute("faceIndex",new gJ(L,F)),K.push(new U0(A,null)),W>_9)W--}return{lodMeshes:K,sizeLods:Q,sigmas:$}}function LZ(J,Q,$){let K=new _8(J,Q,$);return K.texture.mapping=a7,K.texture.name="PMREM.cubeUv",K.scissorTest=!0,K}function y7(J,Q,$,K,W){J.viewport.set(Q,$,K,W),J.scissor.set(Q,$,K,W)}function CU(J,Q,$){return new F8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AU,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:EQ(),fragmentShader:`

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
		`,blending:l8,depthTest:!1,depthWrite:!1})}function TU(J,Q,$){let K=new Float32Array(Q7),W=new g(0,1,0);return new F8({name:"SphericalGaussianBlur",defines:{n:Q7,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:K},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:EQ(),fragmentShader:`

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
		`,blending:l8,depthTest:!1,depthWrite:!1})}function zZ(){return new F8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:EQ(),fragmentShader:`

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
		`,blending:l8,depthTest:!1,depthWrite:!1})}function IZ(){return new F8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:EQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:l8,depthTest:!1,depthWrite:!1})}function EQ(){return`

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
	`}class hK extends _8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},K=[$,$,$,$,$,$];this.texture=new XQ(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new d0(5,5,5),W=new F8({name:"CubemapFromEquirect",uniforms:a9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:$8,blending:l8});W.uniforms.tEquirect.value=Q;let Z=new U0(K,W),X=Q.minFilter;if(Q.minFilter===u9)Q.minFilter=G8;return new VK(1,10,this).update(J,Z),Q.minFilter=X,Z.geometry.dispose(),Z.material.dispose(),this}clear(J,Q=!0,$=!0,K=!0){let W=J.getRenderTarget();for(let Z=0;Z<6;Z++)J.setRenderTarget(this,Z),J.clear(Q,$,K);J.setRenderTarget(W)}}function SU(J){let Q=new WeakMap,$=new WeakMap,K=null;function W(G,R=!1){if(G===null||G===void 0)return null;if(R)return X(G);return Z(G)}function Z(G){if(G&&G.isTexture){let R=G.mapping;if(R===u6||R===l6)if(Q.has(G)){let M=Q.get(G).texture;return Y(M,G.mapping)}else{let M=G.image;if(M&&M.height>0){let P=new hK(M.height);return P.fromEquirectangularTexture(J,G),Q.set(G,P),G.addEventListener("dispose",U),Y(P.texture,G.mapping)}else return null}}return G}function X(G){if(G&&G.isTexture){let R=G.mapping,M=R===u6||R===l6,P=R===P7||R===d9;if(M||P){let E=$.get(G),F=E!==void 0?E.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==F){if(K===null)K=new jK(J);return E=M?K.fromEquirectangular(G,E):K.fromCubemap(G,E),E.texture.pmremVersion=G.pmremVersion,$.set(G,E),E.texture}else if(E!==void 0)return E.texture;else{let T=G.image;if(M&&T&&T.height>0||P&&T&&H(T)){if(K===null)K=new jK(J);return E=M?K.fromEquirectangular(G):K.fromCubemap(G),E.texture.pmremVersion=G.pmremVersion,$.set(G,E),G.addEventListener("dispose",O),E.texture}else return null}}}return G}function Y(G,R){if(R===u6)G.mapping=P7;else if(R===l6)G.mapping=d9;return G}function H(G){let R=0,M=6;for(let P=0;P<M;P++)if(G[P]!==void 0)R++;return R===M}function U(G){let R=G.target;R.removeEventListener("dispose",U);let M=Q.get(R);if(M!==void 0)Q.delete(R),M.dispose()}function O(G){let R=G.target;R.removeEventListener("dispose",O);let M=$.get(R);if(M!==void 0)$.delete(R),M.dispose()}function D(){if(Q=new WeakMap,$=new WeakMap,K!==null)K.dispose(),K=null}return{get:W,dispose:D}}function jU(J){let Q={};function $(K){if(Q[K]!==void 0)return Q[K];let W=J.getExtension(K);return Q[K]=W,W}return{has:function(K){return $(K)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(K){let W=$(K);if(W===null)g9("WebGLRenderer: "+K+" extension not supported.");return W}}}function yU(J,Q,$,K){let W={},Z=new WeakMap;function X(D){let G=D.target;if(G.index!==null)Q.remove(G.index);for(let M in G.attributes)Q.remove(G.attributes[M]);G.removeEventListener("dispose",X),delete W[G.id];let R=Z.get(G);if(R)Q.remove(R),Z.delete(G);if(K.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(D,G){if(W[G.id]===!0)return G;return G.addEventListener("dispose",X),W[G.id]=!0,$.memory.geometries++,G}function H(D){let G=D.attributes;for(let R in G)Q.update(G[R],J.ARRAY_BUFFER)}function U(D){let G=[],R=D.index,M=D.attributes.position,P=0;if(M===void 0)return;if(R!==null){let T=R.array;P=R.version;for(let w=0,L=T.length;w<L;w+=3){let A=T[w+0],C=T[w+1],S=T[w+2];G.push(A,C,C,S,S,A)}}else{let T=M.array;P=M.version;for(let w=0,L=T.length/3-1;w<L;w+=3){let A=w+0,C=w+1,S=w+2;G.push(A,C,C,S,S,A)}}let E=new(M.count>=65535?ZQ:WQ)(G,1);E.version=P;let F=Z.get(D);if(F)Q.remove(F);Z.set(D,E)}function O(D){let G=Z.get(D);if(G){let R=D.index;if(R!==null){if(G.version<R.version)U(D)}}else U(D);return Z.get(D)}return{get:Y,update:H,getWireframeAttribute:O}}function vU(J,Q,$){let K;function W(D){K=D}let Z,X;function Y(D){Z=D.type,X=D.bytesPerElement}function H(D,G){J.drawElements(K,G,Z,D*X),$.update(G,K,1)}function U(D,G,R){if(R===0)return;J.drawElementsInstanced(K,G,Z,D*X,R),$.update(G,K,R)}function O(D,G,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,G,0,Z,D,0,R);let P=0;for(let E=0;E<R;E++)P+=G[E];$.update(P,K,1)}this.setMode=W,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=O}function hU(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function K(Z,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(Z/3);break;case J.LINES:$.lines+=Y*(Z/2);break;case J.LINE_STRIP:$.lines+=Y*(Z-1);break;case J.LINE_LOOP:$.lines+=Y*Z;break;case J.POINTS:$.points+=Y*Z;break;default:JJ("WebGLInfo: Unknown draw mode:",X);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:K}}function bU(J,Q,$){let K=new WeakMap,W=new jJ;function Z(X,Y,H){let U=X.morphTargetInfluences,O=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,D=O!==void 0?O.length:0,G=K.get(Y);if(G===void 0||G.count!==D){let z=function(){S.dispose(),K.delete(Y),Y.removeEventListener("dispose",z)};if(G!==void 0)G.texture.dispose();let R=Y.morphAttributes.position!==void 0,M=Y.morphAttributes.normal!==void 0,P=Y.morphAttributes.color!==void 0,E=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],T=Y.morphAttributes.color||[],w=0;if(R===!0)w=1;if(M===!0)w=2;if(P===!0)w=3;let L=Y.attributes.position.count*w,A=1;if(L>Q.maxTextureSize)A=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let C=new Float32Array(L*A*4*D),S=new QQ(C,L,A,D);S.type=W9,S.needsUpdate=!0;let k=w*4;for(let u=0;u<D;u++){let j=E[u],n=F[u],J0=T[u],s=L*A*4*u;for(let e=0;e<j.count;e++){let $0=e*k;if(R===!0)W.fromBufferAttribute(j,e),C[s+$0+0]=W.x,C[s+$0+1]=W.y,C[s+$0+2]=W.z,C[s+$0+3]=0;if(M===!0)W.fromBufferAttribute(n,e),C[s+$0+4]=W.x,C[s+$0+5]=W.y,C[s+$0+6]=W.z,C[s+$0+7]=0;if(P===!0)W.fromBufferAttribute(J0,e),C[s+$0+8]=W.x,C[s+$0+9]=W.y,C[s+$0+10]=W.z,C[s+$0+11]=J0.itemSize===4?W.w:1}}G={count:D,texture:S,size:new i0(L,A)},K.set(Y,G),Y.addEventListener("dispose",z)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let R=0;for(let P=0;P<U.length;P++)R+=U[P];let M=Y.morphTargetsRelative?1:1-R;H.getUniforms().setValue(J,"morphTargetBaseInfluence",M),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:Z}}function fU(J,Q,$,K,W){let Z=new WeakMap;function X(U){let O=W.render.frame,D=U.geometry,G=Q.get(U,D);if(Z.get(G)!==O)Q.update(G),Z.set(G,O);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(Z.get(U)!==O){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);Z.set(U,O)}}if(U.isSkinnedMesh){let R=U.skeleton;if(Z.get(R)!==O)R.update(),Z.set(R,O)}return G}function Y(){Z=new WeakMap}function H(U){let O=U.target;if(O.removeEventListener("dispose",H),K.releaseStatesOfObject(O),$.remove(O.instanceMatrix),O.instanceColor!==null)$.remove(O.instanceColor)}return{update:X,dispose:Y}}var xU={[Z$]:"LINEAR_TONE_MAPPING",[X$]:"REINHARD_TONE_MAPPING",[Y$]:"CINEON_TONE_MAPPING",[r7]:"ACES_FILMIC_TONE_MAPPING",[U$]:"AGX_TONE_MAPPING",[q$]:"NEUTRAL_TONE_MAPPING",[H$]:"CUSTOM_TONE_MAPPING"};function gU(J,Q,$,K,W,Z){let X=new _8(Q,$,{type:J,depthBuffer:W,stencilBuffer:Z,samples:K?4:0,depthTexture:W?new I9(Q,$):void 0}),Y=new _8(Q,$,{type:Z9,depthBuffer:!1,stencilBuffer:!1}),H=new bJ;H.setAttribute("position",new IJ([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new IJ([0,2,0,0,2,0],2));let U=new YK({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),O=new U0(H,U),D=new Z6(-1,1,1,-1,0,1),G=null,R=null,M=!1,P,E=null,F=[],T=!1;this.setSize=function(w,L){X.setSize(w,L),Y.setSize(w,L);for(let A=0;A<F.length;A++){let C=F[A];if(C.setSize)C.setSize(w,L)}},this.setEffects=function(w){F=w,T=F.length>0&&F[0].isRenderPass===!0;let{width:L,height:A}=X;for(let C=0;C<F.length;C++){let S=F[C];if(S.setSize)S.setSize(L,A)}},this.begin=function(w,L){if(M)return!1;if(w.toneMapping===b8&&F.length===0)return!1;if(E=L,L!==null){let{width:A,height:C}=L;if(X.width!==A||X.height!==C)this.setSize(A,C)}if(T===!1)w.setRenderTarget(X);return P=w.toneMapping,w.toneMapping=b8,!0},this.hasRenderPass=function(){return T},this.end=function(w,L){w.toneMapping=P,M=!0;let A=X,C=Y;for(let S=0;S<F.length;S++){let k=F[S];if(k.enabled===!1)continue;if(k.render(w,C,A,L),k.needsSwap!==!1){let z=A;A=C,C=z}}if(G!==w.outputColorSpace||R!==w.toneMapping){if(G=w.outputColorSpace,R=w.toneMapping,U.defines={},FJ.getTransfer(G)===zJ)U.defines.SRGB_TRANSFER="";let S=xU[R];if(S)U.defines[S]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(E),w.render(O,D),E=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),H.dispose(),U.dispose()}}var lZ=new aJ,yK=new I9(1,1),cZ=new QQ,nZ=new KK,sZ=new XQ,PZ=[],AZ=[],_Z=new Float32Array(16),wZ=new Float32Array(9),CZ=new Float32Array(4);function v7(J,Q,$){let K=J[0];if(K<=0||K>0)return J;let W=Q*$,Z=PZ[W];if(Z===void 0)Z=new Float32Array(W),PZ[W]=Z;if(Q!==0){K.toArray(Z,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(Z,Y)}return Z}function pJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,K=J.length;$<K;$++)if(J[$]!==Q[$])return!1;return!0}function mJ(J,Q){for(let $=0,K=Q.length;$<K;$++)J[$]=Q[$]}function RQ(J,Q){let $=AZ[Q];if($===void 0)$=new Int32Array(Q),AZ[Q]=$;for(let K=0;K!==Q;++K)$[K]=J.allocateTextureUnit();return $}function pU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function mU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(pJ($,Q))return;J.uniform2fv(this.addr,Q),mJ($,Q)}}function dU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(pJ($,Q))return;J.uniform3fv(this.addr,Q),mJ($,Q)}}function uU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(pJ($,Q))return;J.uniform4fv(this.addr,Q),mJ($,Q)}}function lU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(pJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),mJ($,Q)}else{if(pJ($,K))return;CZ.set(K),J.uniformMatrix2fv(this.addr,!1,CZ),mJ($,K)}}function cU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(pJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),mJ($,Q)}else{if(pJ($,K))return;wZ.set(K),J.uniformMatrix3fv(this.addr,!1,wZ),mJ($,K)}}function nU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(pJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),mJ($,Q)}else{if(pJ($,K))return;_Z.set(K),J.uniformMatrix4fv(this.addr,!1,_Z),mJ($,K)}}function sU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function iU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(pJ($,Q))return;J.uniform2iv(this.addr,Q),mJ($,Q)}}function oU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(pJ($,Q))return;J.uniform3iv(this.addr,Q),mJ($,Q)}}function rU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(pJ($,Q))return;J.uniform4iv(this.addr,Q),mJ($,Q)}}function aU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function tU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(pJ($,Q))return;J.uniform2uiv(this.addr,Q),mJ($,Q)}}function eU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(pJ($,Q))return;J.uniform3uiv(this.addr,Q),mJ($,Q)}}function Jq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(pJ($,Q))return;J.uniform4uiv(this.addr,Q),mJ($,Q)}}function Qq(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;let Z;if(this.type===J.SAMPLER_2D_SHADOW)yK.compareFunction=$.isReversedDepthBuffer()?JQ:e6,Z=yK;else Z=lZ;$.setTexture2D(Q||Z,W)}function $q(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTexture3D(Q||nZ,W)}function Kq(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTextureCube(Q||sZ,W)}function Wq(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTexture2DArray(Q||cZ,W)}function Zq(J){switch(J){case 5126:return pU;case 35664:return mU;case 35665:return dU;case 35666:return uU;case 35674:return lU;case 35675:return cU;case 35676:return nU;case 5124:case 35670:return sU;case 35667:case 35671:return iU;case 35668:case 35672:return oU;case 35669:case 35673:return rU;case 5125:return aU;case 36294:return tU;case 36295:return eU;case 36296:return Jq;case 35678:case 36198:case 36298:case 36306:case 35682:return Qq;case 35679:case 36299:case 36307:return $q;case 35680:case 36300:case 36308:case 36293:return Kq;case 36289:case 36303:case 36311:case 36292:return Wq}}function Xq(J,Q){J.uniform1fv(this.addr,Q)}function Yq(J,Q){let $=v7(Q,this.size,2);J.uniform2fv(this.addr,$)}function Hq(J,Q){let $=v7(Q,this.size,3);J.uniform3fv(this.addr,$)}function Uq(J,Q){let $=v7(Q,this.size,4);J.uniform4fv(this.addr,$)}function qq(J,Q){let $=v7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function Nq(J,Q){let $=v7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function Gq(J,Q){let $=v7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function Fq(J,Q){J.uniform1iv(this.addr,Q)}function Oq(J,Q){J.uniform2iv(this.addr,Q)}function Dq(J,Q){J.uniform3iv(this.addr,Q)}function Eq(J,Q){J.uniform4iv(this.addr,Q)}function Rq(J,Q){J.uniform1uiv(this.addr,Q)}function kq(J,Q){J.uniform2uiv(this.addr,Q)}function Mq(J,Q){J.uniform3uiv(this.addr,Q)}function Vq(J,Q){J.uniform4uiv(this.addr,Q)}function Bq(J,Q,$){let K=this.cache,W=Q.length,Z=RQ($,W);if(!pJ(K,Z))J.uniform1iv(this.addr,Z),mJ(K,Z);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=yK;else X=lZ;for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||X,Z[Y])}function Lq(J,Q,$){let K=this.cache,W=Q.length,Z=RQ($,W);if(!pJ(K,Z))J.uniform1iv(this.addr,Z),mJ(K,Z);for(let X=0;X!==W;++X)$.setTexture3D(Q[X]||nZ,Z[X])}function zq(J,Q,$){let K=this.cache,W=Q.length,Z=RQ($,W);if(!pJ(K,Z))J.uniform1iv(this.addr,Z),mJ(K,Z);for(let X=0;X!==W;++X)$.setTextureCube(Q[X]||sZ,Z[X])}function Iq(J,Q,$){let K=this.cache,W=Q.length,Z=RQ($,W);if(!pJ(K,Z))J.uniform1iv(this.addr,Z),mJ(K,Z);for(let X=0;X!==W;++X)$.setTexture2DArray(Q[X]||cZ,Z[X])}function Pq(J){switch(J){case 5126:return Xq;case 35664:return Yq;case 35665:return Hq;case 35666:return Uq;case 35674:return qq;case 35675:return Nq;case 35676:return Gq;case 5124:case 35670:return Fq;case 35667:case 35671:return Oq;case 35668:case 35672:return Dq;case 35669:case 35673:return Eq;case 5125:return Rq;case 36294:return kq;case 36295:return Mq;case 36296:return Vq;case 35678:case 36198:case 36298:case 36306:case 35682:return Bq;case 35679:case 36299:case 36307:return Lq;case 35680:case 36300:case 36308:case 36293:return zq;case 36289:case 36303:case 36311:case 36292:return Iq}}class iZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=Zq(Q.type)}}class oZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=Pq(Q.type)}}class rZ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let K=this.seq;for(let W=0,Z=K.length;W!==Z;++W){let X=K[W];X.setValue(J,Q[X.id],$)}}}var TK=/(\w+)(\])?(\[|\.)?/g;function TZ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Aq(J,Q,$){let K=J.name,W=K.length;TK.lastIndex=0;while(!0){let Z=TK.exec(K),X=TK.lastIndex,Y=Z[1],H=Z[2]==="]",U=Z[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===W){TZ($,U===void 0?new iZ(Y,J,Q):new oZ(Y,J,Q));break}else{let D=$.map[Y];if(D===void 0)D=new rZ(Y),TZ($,D);$=D}}}class q6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let X=J.getActiveUniform(Q,Z),Y=J.getUniformLocation(Q,X.name);Aq(X,Y,this)}let K=[],W=[];for(let Z of this.seq)if(Z.type===J.SAMPLER_2D_SHADOW||Z.type===J.SAMPLER_CUBE_SHADOW||Z.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(Z);else W.push(Z);if(K.length>0)this.seq=K.concat(W)}setValue(J,Q,$,K){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,K)}setOptional(J,Q,$){let K=Q[$];if(K!==void 0)this.setValue(J,$,K)}static upload(J,Q,$,K){for(let W=0,Z=Q.length;W!==Z;++W){let X=Q[W],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let $=[];for(let K=0,W=J.length;K!==W;++K){let Z=J[K];if(Z.id in Q)$.push(Z)}return $}}function SZ(J,Q,$){let K=J.createShader(Q);return J.shaderSource(K,$),J.compileShader(K),K}var _q=37297,wq=0;function Cq(J,Q){let $=J.split(`
`),K=[],W=Math.max(Q-6,0),Z=Math.min(Q+6,$.length);for(let X=W;X<Z;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return K.join(`
`)}var jZ=new WJ;function Tq(J){FJ._getMatrix(jZ,FJ.workingColorSpace,J);let Q=`mat3( ${jZ.elements.map(($)=>$.toFixed(4))} )`;switch(FJ.getTransfer(J)){case o$:return[Q,"LinearTransferOETF"];case zJ:return[Q,"sRGBTransferOETF"];default:return r0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function yZ(J,Q,$){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),Z=(J.getShaderInfoLog(Q)||"").trim();if(K&&Z==="")return"";let X=/ERROR: 0:(\d+)/.exec(Z);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+Z+`

`+Cq(J.getShaderSource(Q),Y)}else return Z}function Sq(J,Q){let $=Tq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var jq={[Z$]:"Linear",[X$]:"Reinhard",[Y$]:"Cineon",[r7]:"ACESFilmic",[U$]:"AgX",[q$]:"Neutral",[H$]:"Custom"};function yq(J,Q){let $=jq[Q];if($===void 0)return r0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var DQ=new g;function vq(){FJ.getLuminanceCoefficients(DQ);let J=DQ.x.toFixed(4),Q=DQ.y.toFixed(4),$=DQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function hq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(U6).join(`
`)}function bq(J){let Q=[];for(let $ in J){let K=J[$];if(K===!1)continue;Q.push("#define "+$+" "+K)}return Q.join(`
`)}function fq(J,Q){let $={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<K;W++){let Z=J.getActiveAttrib(Q,W),X=Z.name,Y=1;if(Z.type===J.FLOAT_MAT2)Y=2;if(Z.type===J.FLOAT_MAT3)Y=3;if(Z.type===J.FLOAT_MAT4)Y=4;$[X]={type:Z.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function U6(J){return J!==""}function vZ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function hZ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var xq=/^[ \t]*#include +<([\w\d./]+)>/gm;function vK(J){return J.replace(xq,pq)}var gq=new Map;function pq(J,Q){let $=YJ[Q];if($===void 0){let K=gq.get(Q);if(K!==void 0)$=YJ[K],r0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,K);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return vK($)}var mq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bZ(J){return J.replace(mq,dq)}function dq(J,Q,$,K){let W="";for(let Z=parseInt(Q);Z<parseInt($);Z++)W+=K.replace(/\[\s*i\s*\]/g,"[ "+Z+" ]").replace(/UNROLLED_LOOP_INDEX/g,Z);return W}function fZ(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var uq={[m9]:"SHADOWMAP_TYPE_PCF",[L7]:"SHADOWMAP_TYPE_VSM"};function lq(J){return uq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cq={[P7]:"ENVMAP_TYPE_CUBE",[d9]:"ENVMAP_TYPE_CUBE",[a7]:"ENVMAP_TYPE_CUBE_UV"};function nq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return cq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var sq={[d9]:"ENVMAP_MODE_REFRACTION"};function iq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return sq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var oq={[lW]:"ENVMAP_BLENDING_MULTIPLY",[cW]:"ENVMAP_BLENDING_MIX",[nW]:"ENVMAP_BLENDING_ADD"};function rq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return oq[J.combine]||"ENVMAP_BLENDING_NONE"}function aq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,K=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:K,maxMip:$}}function tq(J,Q,$,K){let W=J.getContext(),Z=$.defines,X=$.vertexShader,Y=$.fragmentShader,H=lq($),U=nq($),O=iq($),D=rq($),G=aq($),R=hq($),M=bq(Z),P=W.createProgram(),E,F,T=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(U6).join(`
`),E.length>0)E+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(U6).join(`
`),F.length>0)F+=`
`}else E=[fZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+O:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(U6).join(`
`),F=[fZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+O:"",$.envMap?"#define "+D:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==b8?"#define TONE_MAPPING":"",$.toneMapping!==b8?YJ.tonemapping_pars_fragment:"",$.toneMapping!==b8?yq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",YJ.colorspace_pars_fragment,Sq("linearToOutputTexel",$.outputColorSpace),vq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(U6).join(`
`);if(X=vK(X),X=vZ(X,$),X=hZ(X,$),Y=vK(Y),Y=vZ(Y,$),Y=hZ(Y,$),X=bZ(X),Y=bZ(Y),$.isRawShaderMaterial!==!0)T=`#version 300 es
`,E=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,F=["#define varying in",$.glslVersion===r$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===r$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let w=T+E+X,L=T+F+Y,A=SZ(W,W.VERTEX_SHADER,w),C=SZ(W,W.FRAGMENT_SHADER,L);if(W.attachShader(P,A),W.attachShader(P,C),$.index0AttributeName!==void 0)W.bindAttribLocation(P,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(P,0,"position");W.linkProgram(P);function S(j){if(J.debug.checkShaderErrors){let n=W.getProgramInfoLog(P)||"",J0=W.getShaderInfoLog(A)||"",s=W.getShaderInfoLog(C)||"",e=n.trim(),$0=J0.trim(),d=s.trim(),X0=!0,q0=!0;if(W.getProgramParameter(P,W.LINK_STATUS)===!1)if(X0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,P,A,C);else{let L0=yZ(W,A,"vertex"),y0=yZ(W,C,"fragment");JJ("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(P,W.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+e+`
`+L0+`
`+y0)}else if(e!=="")r0("WebGLProgram: Program Info Log:",e);else if($0===""||d==="")q0=!1;if(q0)j.diagnostics={runnable:X0,programLog:e,vertexShader:{log:$0,prefix:E},fragmentShader:{log:d,prefix:F}}}W.deleteShader(A),W.deleteShader(C),k=new q6(W,P),z=fq(W,P)}let k;this.getUniforms=function(){if(k===void 0)S(this);return k};let z;this.getAttributes=function(){if(z===void 0)S(this);return z};let u=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(u===!1)u=W.getProgramParameter(P,_q);return u},this.destroy=function(){K.releaseStatesOfProgram(this),W.deleteProgram(P),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=wq++,this.cacheKey=Q,this.usedTimes=1,this.program=P,this.vertexShader=A,this.fragmentShader=C,this}var eq=0;class aZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has($)===!1)K.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new tZ(J),Q.set(J,$);return $}}class tZ{constructor(J){this.id=eq++,this.code=J,this.usedTimes=0}}function JN(J){return J===n9||J===a6||J===t6}function QN(J,Q,$,K,W,Z){let X=new $Q,Y=new aZ,H=new Set,U=[],O=new Map,D=K.logarithmicDepthBuffer,G=K.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(k){if(H.add(k),k===0)return"uv";return`uv${k}`}function P(k,z,u,j,n,J0){let s=j.fog,e=n.geometry,$0=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?j.environment:null,d=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,X0=Q.get(k.envMap||$0,d),q0=!!X0&&X0.mapping===a7?X0.image.height:null,L0=R[k.type];if(k.precision!==null){if(G=K.getMaxPrecision(k.precision),G!==k.precision)r0("WebGLProgram.getParameters:",k.precision,"not supported, using",G,"instead.")}let y0=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,T0=y0!==void 0?y0.length:0,OJ=0;if(e.morphAttributes.position!==void 0)OJ=1;if(e.morphAttributes.normal!==void 0)OJ=2;if(e.morphAttributes.color!==void 0)OJ=3;let qJ,K0,N0,z0;if(L0){let a0=o8[L0];qJ=a0.vertexShader,K0=a0.fragmentShader}else{qJ=k.vertexShader,K0=k.fragmentShader;let a0=Y.getVertexShaderStage(k),BJ=Y.getFragmentShaderStage(k);Y.update(k,a0,BJ),N0=a0.id,z0=BJ.id}let M0=J.getRenderTarget(),u0=J.state.buffers.depth.getReversed(),ZJ=n.isInstancedMesh===!0,o=n.isBatchedMesh===!0,Q0=!!k.map,y=!!k.matcap,V=!!X0,f=!!k.aoMap,r=!!k.lightMap,b=!!k.bumpMap&&k.wireframe===!1,_=!!k.normalMap,F0=!!k.displacementMap,V0=!!k.emissiveMap,o0=!!k.metalnessMap,v=!!k.roughnessMap,XJ=k.anisotropy>0,v0=k.clearcoat>0,b0=k.dispersion>0,N=k.iridescence>0,q=k.sheen>0,I=k.transmission>0,h=XJ&&!!k.anisotropyMap,l=v0&&!!k.clearcoatMap,Z0=v0&&!!k.clearcoatNormalMap,Y0=v0&&!!k.clearcoatRoughnessMap,m=N&&!!k.iridescenceMap,a=N&&!!k.iridescenceThicknessMap,D0=q&&!!k.sheenColorMap,E0=q&&!!k.sheenRoughnessMap,G0=!!k.specularMap,O0=!!k.specularColorMap,p0=!!k.specularIntensityMap,l0=I&&!!k.transmissionMap,e0=I&&!!k.thicknessMap,x=!!k.gradientMap,R0=!!k.alphaMap,W0=k.alphaTest>0,B0=!!k.alphaHash,j0=!!k.extensions,H0=b8;if(k.toneMapped){if(M0===null||M0.isXRRenderTarget===!0)H0=J.toneMapping}let P0={shaderID:L0,shaderType:k.type,shaderName:k.name,vertexShader:qJ,fragmentShader:K0,defines:k.defines,customVertexShaderID:N0,customFragmentShaderID:z0,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:G,batching:o,batchingColor:o&&n._colorsTexture!==null,instancing:ZJ,instancingColor:ZJ&&n.instanceColor!==null,instancingMorph:ZJ&&n.morphTexture!==null,outputColorSpace:M0===null?J.outputColorSpace:M0.isXRRenderTarget===!0?M0.texture.colorSpace:FJ.workingColorSpace,alphaToCoverage:!!k.alphaToCoverage,map:Q0,matcap:y,envMap:V,envMapMode:V&&X0.mapping,envMapCubeUVHeight:q0,aoMap:f,lightMap:r,bumpMap:b,normalMap:_,displacementMap:F0,emissiveMap:V0,normalMapObjectSpace:_&&k.normalMapType===$Z,normalMapTangentSpace:_&&k.normalMapType===s$,packedNormalMap:_&&k.normalMapType===s$&&JN(k.normalMap.format),metalnessMap:o0,roughnessMap:v,anisotropy:XJ,anisotropyMap:h,clearcoat:v0,clearcoatMap:l,clearcoatNormalMap:Z0,clearcoatRoughnessMap:Y0,dispersion:b0,iridescence:N,iridescenceMap:m,iridescenceThicknessMap:a,sheen:q,sheenColorMap:D0,sheenRoughnessMap:E0,specularMap:G0,specularColorMap:O0,specularIntensityMap:p0,transmission:I,transmissionMap:l0,thicknessMap:e0,gradientMap:x,opaque:k.transparent===!1&&k.blending===o7&&k.alphaToCoverage===!1,alphaMap:R0,alphaTest:W0,alphaHash:B0,combine:k.combine,mapUv:Q0&&M(k.map.channel),aoMapUv:f&&M(k.aoMap.channel),lightMapUv:r&&M(k.lightMap.channel),bumpMapUv:b&&M(k.bumpMap.channel),normalMapUv:_&&M(k.normalMap.channel),displacementMapUv:F0&&M(k.displacementMap.channel),emissiveMapUv:V0&&M(k.emissiveMap.channel),metalnessMapUv:o0&&M(k.metalnessMap.channel),roughnessMapUv:v&&M(k.roughnessMap.channel),anisotropyMapUv:h&&M(k.anisotropyMap.channel),clearcoatMapUv:l&&M(k.clearcoatMap.channel),clearcoatNormalMapUv:Z0&&M(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y0&&M(k.clearcoatRoughnessMap.channel),iridescenceMapUv:m&&M(k.iridescenceMap.channel),iridescenceThicknessMapUv:a&&M(k.iridescenceThicknessMap.channel),sheenColorMapUv:D0&&M(k.sheenColorMap.channel),sheenRoughnessMapUv:E0&&M(k.sheenRoughnessMap.channel),specularMapUv:G0&&M(k.specularMap.channel),specularColorMapUv:O0&&M(k.specularColorMap.channel),specularIntensityMapUv:p0&&M(k.specularIntensityMap.channel),transmissionMapUv:l0&&M(k.transmissionMap.channel),thicknessMapUv:e0&&M(k.thicknessMap.channel),alphaMapUv:R0&&M(k.alphaMap.channel),vertexTangents:!!e.attributes.tangent&&(_||XJ),vertexNormals:!!e.attributes.normal,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!e.attributes.color&&e.attributes.color.itemSize===4,pointsUvs:n.isPoints===!0&&!!e.attributes.uv&&(Q0||R0),fog:!!s,useFog:k.fog===!0,fogExp2:!!s&&s.isFogExp2,flatShading:k.wireframe===!1&&(k.flatShading===!0||e.attributes.normal===void 0&&_===!1&&(k.isMeshLambertMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isMeshPhysicalMaterial)),sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:D,reversedDepthBuffer:u0,skinning:n.isSkinnedMesh===!0,hasPositionAttribute:e.attributes.position!==void 0,morphTargets:e.morphAttributes.position!==void 0,morphNormals:e.morphAttributes.normal!==void 0,morphColors:e.morphAttributes.color!==void 0,morphTargetsCount:T0,morphTextureStride:OJ,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:J0.length,numClippingPlanes:Z.numPlanes,numClipIntersection:Z.numIntersection,dithering:k.dithering,shadowMapEnabled:J.shadowMap.enabled&&u.length>0,shadowMapType:J.shadowMap.type,toneMapping:H0,decodeVideoTexture:Q0&&k.map.isVideoTexture===!0&&FJ.getTransfer(k.map.colorSpace)===zJ,decodeVideoTextureEmissive:V0&&k.emissiveMap.isVideoTexture===!0&&FJ.getTransfer(k.emissiveMap.colorSpace)===zJ,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===LJ,flipSided:k.side===$8,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:j0&&k.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(j0&&k.extensions.multiDraw===!0||o)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return P0.vertexUv1s=H.has(1),P0.vertexUv2s=H.has(2),P0.vertexUv3s=H.has(3),H.clear(),P0}function E(k){let z=[];if(k.shaderID)z.push(k.shaderID);else z.push(k.customVertexShaderID),z.push(k.customFragmentShaderID);if(k.defines!==void 0)for(let u in k.defines)z.push(u),z.push(k.defines[u]);if(k.isRawShaderMaterial===!1)F(z,k),T(z,k),z.push(J.outputColorSpace);return z.push(k.customProgramCacheKey),z.join()}function F(k,z){k.push(z.precision),k.push(z.outputColorSpace),k.push(z.envMapMode),k.push(z.envMapCubeUVHeight),k.push(z.mapUv),k.push(z.alphaMapUv),k.push(z.lightMapUv),k.push(z.aoMapUv),k.push(z.bumpMapUv),k.push(z.normalMapUv),k.push(z.displacementMapUv),k.push(z.emissiveMapUv),k.push(z.metalnessMapUv),k.push(z.roughnessMapUv),k.push(z.anisotropyMapUv),k.push(z.clearcoatMapUv),k.push(z.clearcoatNormalMapUv),k.push(z.clearcoatRoughnessMapUv),k.push(z.iridescenceMapUv),k.push(z.iridescenceThicknessMapUv),k.push(z.sheenColorMapUv),k.push(z.sheenRoughnessMapUv),k.push(z.specularMapUv),k.push(z.specularColorMapUv),k.push(z.specularIntensityMapUv),k.push(z.transmissionMapUv),k.push(z.thicknessMapUv),k.push(z.combine),k.push(z.fogExp2),k.push(z.sizeAttenuation),k.push(z.morphTargetsCount),k.push(z.morphAttributeCount),k.push(z.numDirLights),k.push(z.numPointLights),k.push(z.numSpotLights),k.push(z.numSpotLightMaps),k.push(z.numHemiLights),k.push(z.numRectAreaLights),k.push(z.numDirLightShadows),k.push(z.numPointLightShadows),k.push(z.numSpotLightShadows),k.push(z.numSpotLightShadowsWithMaps),k.push(z.numLightProbes),k.push(z.shadowMapType),k.push(z.toneMapping),k.push(z.numClippingPlanes),k.push(z.numClipIntersection),k.push(z.depthPacking)}function T(k,z){if(X.disableAll(),z.instancing)X.enable(0);if(z.instancingColor)X.enable(1);if(z.instancingMorph)X.enable(2);if(z.matcap)X.enable(3);if(z.envMap)X.enable(4);if(z.normalMapObjectSpace)X.enable(5);if(z.normalMapTangentSpace)X.enable(6);if(z.clearcoat)X.enable(7);if(z.iridescence)X.enable(8);if(z.alphaTest)X.enable(9);if(z.vertexColors)X.enable(10);if(z.vertexAlphas)X.enable(11);if(z.vertexUv1s)X.enable(12);if(z.vertexUv2s)X.enable(13);if(z.vertexUv3s)X.enable(14);if(z.vertexTangents)X.enable(15);if(z.anisotropy)X.enable(16);if(z.alphaHash)X.enable(17);if(z.batching)X.enable(18);if(z.dispersion)X.enable(19);if(z.batchingColor)X.enable(20);if(z.gradientMap)X.enable(21);if(z.packedNormalMap)X.enable(22);if(z.vertexNormals)X.enable(23);if(k.push(X.mask),X.disableAll(),z.fog)X.enable(0);if(z.useFog)X.enable(1);if(z.flatShading)X.enable(2);if(z.logarithmicDepthBuffer)X.enable(3);if(z.reversedDepthBuffer)X.enable(4);if(z.skinning)X.enable(5);if(z.morphTargets)X.enable(6);if(z.morphNormals)X.enable(7);if(z.morphColors)X.enable(8);if(z.premultipliedAlpha)X.enable(9);if(z.shadowMapEnabled)X.enable(10);if(z.doubleSided)X.enable(11);if(z.flipSided)X.enable(12);if(z.useDepthPacking)X.enable(13);if(z.dithering)X.enable(14);if(z.transmission)X.enable(15);if(z.sheen)X.enable(16);if(z.opaque)X.enable(17);if(z.pointsUvs)X.enable(18);if(z.decodeVideoTexture)X.enable(19);if(z.decodeVideoTextureEmissive)X.enable(20);if(z.alphaToCoverage)X.enable(21);if(z.numLightProbeGrids>0)X.enable(22);if(z.hasPositionAttribute)X.enable(23);k.push(X.mask)}function w(k){let z=R[k.type],u;if(z){let j=o8[z];u=OZ.clone(j.uniforms)}else u=k.uniforms;return u}function L(k,z){let u=O.get(z);if(u!==void 0)++u.usedTimes;else u=new tq(J,z,k,W),U.push(u),O.set(z,u);return u}function A(k){if(--k.usedTimes===0){let z=U.indexOf(k);U[z]=U[U.length-1],U.pop(),O.delete(k.cacheKey),k.destroy()}}function C(k){Y.remove(k)}function S(){Y.dispose()}return{getParameters:P,getProgramCacheKey:E,getUniforms:w,acquireProgram:L,releaseProgram:A,releaseShaderCache:C,programs:U,dispose:S}}function $N(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function W(X,Y,H){J.get(X)[Y]=H}function Z(){J=new WeakMap}return{has:Q,get:$,remove:K,update:W,dispose:Z}}function KN(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function xZ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function gZ(){let J=[],Q=0,$=[],K=[],W=[];function Z(){Q=0,$.length=0,K.length=0,W.length=0}function X(G){let R=0;if(G.isInstancedMesh)R+=2;if(G.isSkinnedMesh)R+=1;return R}function Y(G,R,M,P,E,F){let T=J[Q];if(T===void 0)T={id:G.id,object:G,geometry:R,material:M,materialVariant:X(G),groupOrder:P,renderOrder:G.renderOrder,z:E,group:F},J[Q]=T;else T.id=G.id,T.object=G,T.geometry=R,T.material=M,T.materialVariant=X(G),T.groupOrder=P,T.renderOrder=G.renderOrder,T.z=E,T.group=F;return Q++,T}function H(G,R,M,P,E,F){let T=Y(G,R,M,P,E,F);if(M.transmission>0)K.push(T);else if(M.transparent===!0)W.push(T);else $.push(T)}function U(G,R,M,P,E,F){let T=Y(G,R,M,P,E,F);if(M.transmission>0)K.unshift(T);else if(M.transparent===!0)W.unshift(T);else $.unshift(T)}function O(G,R,M){if($.length>1)$.sort(G||KN);if(K.length>1)K.sort(R||xZ);if(W.length>1)W.sort(R||xZ);if(M)$.reverse(),K.reverse(),W.reverse()}function D(){for(let G=Q,R=J.length;G<R;G++){let M=J[G];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:$,transmissive:K,transparent:W,init:Z,push:H,unshift:U,finish:D,sort:O}}function WN(){let J=new WeakMap;function Q(K,W){let Z=J.get(K),X;if(Z===void 0)X=new gZ,J.set(K,[X]);else if(W>=Z.length)X=new gZ,Z.push(X);else X=Z[W];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function ZN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new g,color:new KJ};break;case"SpotLight":$={position:new g,direction:new g,color:new KJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new g,color:new KJ,distance:0,decay:0};break;case"HemisphereLight":$={direction:new g,skyColor:new KJ,groundColor:new KJ};break;case"RectAreaLight":$={color:new KJ,position:new g,halfWidth:new g,halfHeight:new g};break}return J[Q.id]=$,$}}}function XN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var YN=0;function HN(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function UN(J){let Q=new ZN,$=XN(),K={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)K.probe.push(new g);let W=new g,Z=new CJ,X=new CJ;function Y(U){let O=0,D=0,G=0;for(let z=0;z<9;z++)K.probe[z].set(0,0,0);let R=0,M=0,P=0,E=0,F=0,T=0,w=0,L=0,A=0,C=0,S=0;U.sort(HN);for(let z=0,u=U.length;z<u;z++){let j=U[z],n=j.color,J0=j.intensity,s=j.distance,e=null;if(j.shadow&&j.shadow.map)if(j.shadow.map.texture.format===n9)e=j.shadow.map.texture;else e=j.shadow.map.depthTexture||j.shadow.map.texture;if(j.isAmbientLight)O+=n.r*J0,D+=n.g*J0,G+=n.b*J0;else if(j.isLightProbe){for(let $0=0;$0<9;$0++)K.probe[$0].addScaledVector(j.sh.coefficients[$0],J0);S++}else if(j.isDirectionalLight){let $0=Q.get(j);if($0.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let d=j.shadow,X0=$.get(j);X0.shadowIntensity=d.intensity,X0.shadowBias=d.bias,X0.shadowNormalBias=d.normalBias,X0.shadowRadius=d.radius,X0.shadowMapSize=d.mapSize,K.directionalShadow[R]=X0,K.directionalShadowMap[R]=e,K.directionalShadowMatrix[R]=j.shadow.matrix,T++}K.directional[R]=$0,R++}else if(j.isSpotLight){let $0=Q.get(j);$0.position.setFromMatrixPosition(j.matrixWorld),$0.color.copy(n).multiplyScalar(J0),$0.distance=s,$0.coneCos=Math.cos(j.angle),$0.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),$0.decay=j.decay,K.spot[P]=$0;let d=j.shadow;if(j.map){if(K.spotLightMap[A]=j.map,A++,d.updateMatrices(j),j.castShadow)C++}if(K.spotLightMatrix[P]=d.matrix,j.castShadow){let X0=$.get(j);X0.shadowIntensity=d.intensity,X0.shadowBias=d.bias,X0.shadowNormalBias=d.normalBias,X0.shadowRadius=d.radius,X0.shadowMapSize=d.mapSize,K.spotShadow[P]=X0,K.spotShadowMap[P]=e,L++}P++}else if(j.isRectAreaLight){let $0=Q.get(j);$0.color.copy(n).multiplyScalar(J0),$0.halfWidth.set(j.width*0.5,0,0),$0.halfHeight.set(0,j.height*0.5,0),K.rectArea[E]=$0,E++}else if(j.isPointLight){let $0=Q.get(j);if($0.color.copy(j.color).multiplyScalar(j.intensity),$0.distance=j.distance,$0.decay=j.decay,j.castShadow){let d=j.shadow,X0=$.get(j);X0.shadowIntensity=d.intensity,X0.shadowBias=d.bias,X0.shadowNormalBias=d.normalBias,X0.shadowRadius=d.radius,X0.shadowMapSize=d.mapSize,X0.shadowCameraNear=d.camera.near,X0.shadowCameraFar=d.camera.far,K.pointShadow[M]=X0,K.pointShadowMap[M]=e,K.pointShadowMatrix[M]=j.shadow.matrix,w++}K.point[M]=$0,M++}else if(j.isHemisphereLight){let $0=Q.get(j);$0.skyColor.copy(j.color).multiplyScalar(J0),$0.groundColor.copy(j.groundColor).multiplyScalar(J0),K.hemi[F]=$0,F++}}if(E>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=C0.LTC_FLOAT_1,K.rectAreaLTC2=C0.LTC_FLOAT_2;else K.rectAreaLTC1=C0.LTC_HALF_1,K.rectAreaLTC2=C0.LTC_HALF_2;K.ambient[0]=O,K.ambient[1]=D,K.ambient[2]=G;let k=K.hash;if(k.directionalLength!==R||k.pointLength!==M||k.spotLength!==P||k.rectAreaLength!==E||k.hemiLength!==F||k.numDirectionalShadows!==T||k.numPointShadows!==w||k.numSpotShadows!==L||k.numSpotMaps!==A||k.numLightProbes!==S)K.directional.length=R,K.spot.length=P,K.rectArea.length=E,K.point.length=M,K.hemi.length=F,K.directionalShadow.length=T,K.directionalShadowMap.length=T,K.pointShadow.length=w,K.pointShadowMap.length=w,K.spotShadow.length=L,K.spotShadowMap.length=L,K.directionalShadowMatrix.length=T,K.pointShadowMatrix.length=w,K.spotLightMatrix.length=L+A-C,K.spotLightMap.length=A,K.numSpotLightShadowsWithMaps=C,K.numLightProbes=S,k.directionalLength=R,k.pointLength=M,k.spotLength=P,k.rectAreaLength=E,k.hemiLength=F,k.numDirectionalShadows=T,k.numPointShadows=w,k.numSpotShadows=L,k.numSpotMaps=A,k.numLightProbes=S,K.version=YN++}function H(U,O){let D=0,G=0,R=0,M=0,P=0,E=O.matrixWorldInverse;for(let F=0,T=U.length;F<T;F++){let w=U[F];if(w.isDirectionalLight){let L=K.directional[D];L.direction.setFromMatrixPosition(w.matrixWorld),W.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(W),L.direction.transformDirection(E),D++}else if(w.isSpotLight){let L=K.spot[R];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(E),L.direction.setFromMatrixPosition(w.matrixWorld),W.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(W),L.direction.transformDirection(E),R++}else if(w.isRectAreaLight){let L=K.rectArea[M];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(E),X.identity(),Z.copy(w.matrixWorld),Z.premultiply(E),X.extractRotation(Z),L.halfWidth.set(w.width*0.5,0,0),L.halfHeight.set(0,w.height*0.5,0),L.halfWidth.applyMatrix4(X),L.halfHeight.applyMatrix4(X),M++}else if(w.isPointLight){let L=K.point[G];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(E),G++}else if(w.isHemisphereLight){let L=K.hemi[P];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(E),P++}}}return{setup:Y,setupView:H,state:K}}function pZ(J){let Q=new UN(J),$=[],K=[],W=[];function Z(G){D.camera=G,$.length=0,K.length=0,W.length=0}function X(G){$.push(G)}function Y(G){K.push(G)}function H(G){W.push(G)}function U(){Q.setup($)}function O(G){Q.setupView($,G)}let D={lightsArray:$,shadowsArray:K,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:Z,state:D,setupLights:U,setupLightsView:O,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function qN(J){let Q=new WeakMap;function $(W,Z=0){let X=Q.get(W),Y;if(X===void 0)Y=new pZ(J),Q.set(W,[Y]);else if(Z>=X.length)Y=new pZ(J),X.push(Y);else Y=X[Z];return Y}function K(){Q=new WeakMap}return{get:$,dispose:K}}var NN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GN=`uniform sampler2D shadow_pass;
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
}`,FN=[new g(1,0,0),new g(-1,0,0),new g(0,1,0),new g(0,-1,0),new g(0,0,1),new g(0,0,-1)],ON=[new g(0,-1,0),new g(0,-1,0),new g(0,0,1),new g(0,0,-1),new g(0,-1,0),new g(0,-1,0)],mZ=new CJ,H6=new g,SK=new g;function DN(J,Q,$){let K=new W6,W=new i0,Z=new i0,X=new jJ,Y=new HK,H=new UK,U={},O=$.maxTextureSize,D={[z7]:$8,[$8]:z7,[LJ]:LJ},G=new F8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new i0},radius:{value:4}},vertexShader:NN,fragmentShader:GN}),R=G.clone();R.defines.HORIZONTAL_PASS=1;let M=new bJ;M.setAttribute("position",new gJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let P=new U0(M,G),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m9;let F=this.type;this.render=function(C,S,k){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(C.length===0)return;if(this.type===EW)r0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=m9;let z=J.getRenderTarget(),u=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),n=J.state;if(n.setBlending(l8),n.buffers.depth.getReversed()===!0)n.buffers.color.setClear(0,0,0,0);else n.buffers.color.setClear(1,1,1,1);n.buffers.depth.setTest(!0),n.setScissorTest(!1);let J0=F!==this.type;if(J0)S.traverse(function(s){if(s.material)if(Array.isArray(s.material))s.material.forEach((e)=>e.needsUpdate=!0);else s.material.needsUpdate=!0});for(let s=0,e=C.length;s<e;s++){let $0=C[s],d=$0.shadow;if(d===void 0){r0("WebGLShadowMap:",$0,"has no shadow.");continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;W.copy(d.mapSize);let X0=d.getFrameExtents();if(W.multiply(X0),Z.copy(d.mapSize),W.x>O||W.y>O){if(W.x>O)Z.x=Math.floor(O/X0.x),W.x=Z.x*X0.x,d.mapSize.x=Z.x;if(W.y>O)Z.y=Math.floor(O/X0.y),W.y=Z.y*X0.y,d.mapSize.y=Z.y}let q0=J.state.buffers.depth.getReversed();if(d.camera._reversedDepth=q0,d.map===null||J0===!0){if(d.map!==null){if(d.map.depthTexture!==null)d.map.depthTexture.dispose(),d.map.depthTexture=null;d.map.dispose()}if(this.type===L7){if($0.isPointLight){r0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}d.map=new _8(W.x,W.y,{format:n9,type:Z9,minFilter:G8,magFilter:G8,generateMipmaps:!1}),d.map.texture.name=$0.name+".shadowMap",d.map.depthTexture=new I9(W.x,W.y,W9),d.map.depthTexture.name=$0.name+".shadowMapDepth",d.map.depthTexture.format=l9,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=V9,d.map.depthTexture.magFilter=V9}else{if($0.isPointLight)d.map=new hK(W.x),d.map.depthTexture=new ZK(W.x,B9);else d.map=new _8(W.x,W.y),d.map.depthTexture=new I9(W.x,W.y,B9);if(d.map.depthTexture.name=$0.name+".shadowMap",d.map.depthTexture.format=l9,this.type===m9)d.map.depthTexture.compareFunction=q0?JQ:e6,d.map.depthTexture.minFilter=G8,d.map.depthTexture.magFilter=G8;else d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=V9,d.map.depthTexture.magFilter=V9}d.camera.updateProjectionMatrix()}let L0=d.map.isWebGLCubeRenderTarget?6:1;for(let y0=0;y0<L0;y0++){if(d.map.isWebGLCubeRenderTarget)J.setRenderTarget(d.map,y0),J.clear();else{if(y0===0)J.setRenderTarget(d.map),J.clear();let T0=d.getViewport(y0);X.set(Z.x*T0.x,Z.y*T0.y,Z.x*T0.z,Z.y*T0.w),n.viewport(X)}if($0.isPointLight){let{camera:T0,matrix:OJ}=d,qJ=$0.distance||T0.far;if(qJ!==T0.far)T0.far=qJ,T0.updateProjectionMatrix();H6.setFromMatrixPosition($0.matrixWorld),T0.position.copy(H6),SK.copy(T0.position),SK.add(FN[y0]),T0.up.copy(ON[y0]),T0.lookAt(SK),T0.updateMatrixWorld(),OJ.makeTranslation(-H6.x,-H6.y,-H6.z),mZ.multiplyMatrices(T0.projectionMatrix,T0.matrixWorldInverse),d._frustum.setFromProjectionMatrix(mZ,T0.coordinateSystem,T0.reversedDepth)}else d.updateMatrices($0);K=d.getFrustum(),L(S,k,d.camera,$0,this.type)}if(d.isPointLightShadow!==!0&&this.type===L7)T(d,k);d.needsUpdate=!1}F=this.type,E.needsUpdate=!1,J.setRenderTarget(z,u,j)};function T(C,S){let k=Q.update(P);if(G.defines.VSM_SAMPLES!==C.blurSamples)G.defines.VSM_SAMPLES=C.blurSamples,R.defines.VSM_SAMPLES=C.blurSamples,G.needsUpdate=!0,R.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new _8(W.x,W.y,{format:n9,type:Z9});G.uniforms.shadow_pass.value=C.map.depthTexture,G.uniforms.resolution.value=C.mapSize,G.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(S,null,k,G,P,null),R.uniforms.shadow_pass.value=C.mapPass.texture,R.uniforms.resolution.value=C.mapSize,R.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(S,null,k,R,P,null)}function w(C,S,k,z){let u=null,j=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(j!==void 0)u=j;else if(u=k.isPointLight===!0?H:Y,J.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let n=u.uuid,J0=S.uuid,s=U[n];if(s===void 0)s={},U[n]=s;let e=s[J0];if(e===void 0)e=u.clone(),s[J0]=e,S.addEventListener("dispose",A);u=e}if(u.visible=S.visible,u.wireframe=S.wireframe,z===L7)u.side=S.shadowSide!==null?S.shadowSide:S.side;else u.side=S.shadowSide!==null?S.shadowSide:D[S.side];if(u.alphaMap=S.alphaMap,u.alphaTest=S.alphaToCoverage===!0?0.5:S.alphaTest,u.map=S.map,u.clipShadows=S.clipShadows,u.clippingPlanes=S.clippingPlanes,u.clipIntersection=S.clipIntersection,u.displacementMap=S.displacementMap,u.displacementScale=S.displacementScale,u.displacementBias=S.displacementBias,u.wireframeLinewidth=S.wireframeLinewidth,u.linewidth=S.linewidth,k.isPointLight===!0&&u.isMeshDistanceMaterial===!0){let n=J.properties.get(u);n.light=k}return u}function L(C,S,k,z,u){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&u===L7)&&(!C.frustumCulled||K.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let J0=Q.update(C),s=C.material;if(Array.isArray(s)){let e=J0.groups;for(let $0=0,d=e.length;$0<d;$0++){let X0=e[$0],q0=s[X0.materialIndex];if(q0&&q0.visible){let L0=w(C,q0,z,u);C.onBeforeShadow(J,C,S,k,J0,L0,X0),J.renderBufferDirect(k,null,J0,L0,C,X0),C.onAfterShadow(J,C,S,k,J0,L0,X0)}}}else if(s.visible){let e=w(C,s,z,u);C.onBeforeShadow(J,C,S,k,J0,e,null),J.renderBufferDirect(k,null,J0,e,C,null),C.onAfterShadow(J,C,S,k,J0,e,null)}}}let n=C.children;for(let J0=0,s=n.length;J0<s;J0++)L(n[J0],S,k,z,u)}function A(C){C.target.removeEventListener("dispose",A);for(let k in U){let z=U[k],u=C.target.uuid;if(u in z)z[u].dispose(),delete z[u]}}}function EN(J,Q){function $(){let x=!1,R0=new jJ,W0=null,B0=new jJ(0,0,0,0);return{setMask:function(j0){if(W0!==j0&&!x)J.colorMask(j0,j0,j0,j0),W0=j0},setLocked:function(j0){x=j0},setClear:function(j0,H0,P0,a0,BJ){if(BJ===!0)j0*=a0,H0*=a0,P0*=a0;if(R0.set(j0,H0,P0,a0),B0.equals(R0)===!1)J.clearColor(j0,H0,P0,a0),B0.copy(R0)},reset:function(){x=!1,W0=null,B0.set(-1,0,0,0)}}}function K(){let x=!1,R0=!1,W0=null,B0=null,j0=null;return{setReversed:function(H0){if(R0!==H0){let P0=Q.get("EXT_clip_control");if(H0)P0.clipControlEXT(P0.LOWER_LEFT_EXT,P0.ZERO_TO_ONE_EXT);else P0.clipControlEXT(P0.LOWER_LEFT_EXT,P0.NEGATIVE_ONE_TO_ONE_EXT);R0=H0;let a0=j0;j0=null,this.setClear(a0)}},getReversed:function(){return R0},setTest:function(H0){if(H0)M0(J.DEPTH_TEST);else u0(J.DEPTH_TEST)},setMask:function(H0){if(W0!==H0&&!x)J.depthMask(H0),W0=H0},setFunc:function(H0){if(R0)H0=GZ[H0];if(B0!==H0){switch(H0){case fW:J.depthFunc(J.NEVER);break;case xW:J.depthFunc(J.ALWAYS);break;case gW:J.depthFunc(J.LESS);break;case W$:J.depthFunc(J.LEQUAL);break;case pW:J.depthFunc(J.EQUAL);break;case mW:J.depthFunc(J.GEQUAL);break;case dW:J.depthFunc(J.GREATER);break;case uW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}B0=H0}},setLocked:function(H0){x=H0},setClear:function(H0){if(j0!==H0){if(j0=H0,R0)H0=1-H0;J.clearDepth(H0)}},reset:function(){x=!1,W0=null,B0=null,j0=null,R0=!1}}}function W(){let x=!1,R0=null,W0=null,B0=null,j0=null,H0=null,P0=null,a0=null,BJ=null;return{setTest:function(kJ){if(!x)if(kJ)M0(J.STENCIL_TEST);else u0(J.STENCIL_TEST)},setMask:function(kJ){if(R0!==kJ&&!x)J.stencilMask(kJ),R0=kJ},setFunc:function(kJ,SJ,T8){if(W0!==kJ||B0!==SJ||j0!==T8)J.stencilFunc(kJ,SJ,T8),W0=kJ,B0=SJ,j0=T8},setOp:function(kJ,SJ,T8){if(H0!==kJ||P0!==SJ||a0!==T8)J.stencilOp(kJ,SJ,T8),H0=kJ,P0=SJ,a0=T8},setLocked:function(kJ){x=kJ},setClear:function(kJ){if(BJ!==kJ)J.clearStencil(kJ),BJ=kJ},reset:function(){x=!1,R0=null,W0=null,B0=null,j0=null,H0=null,P0=null,a0=null,BJ=null}}}let Z=new $,X=new K,Y=new W,H=new WeakMap,U=new WeakMap,O={},D={},G={},R=new WeakMap,M=[],P=null,E=!1,F=null,T=null,w=null,L=null,A=null,C=null,S=null,k=new KJ(0,0,0),z=0,u=!1,j=null,n=null,J0=null,s=null,e=null,$0=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,X0=0,q0=J.getParameter(J.VERSION);if(q0.indexOf("WebGL")!==-1)X0=parseFloat(/^WebGL (\d)/.exec(q0)[1]),d=X0>=1;else if(q0.indexOf("OpenGL ES")!==-1)X0=parseFloat(/^OpenGL ES (\d)/.exec(q0)[1]),d=X0>=2;let L0=null,y0={},T0=J.getParameter(J.SCISSOR_BOX),OJ=J.getParameter(J.VIEWPORT),qJ=new jJ().fromArray(T0),K0=new jJ().fromArray(OJ);function N0(x,R0,W0,B0){let j0=new Uint8Array(4),H0=J.createTexture();J.bindTexture(x,H0),J.texParameteri(x,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(x,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let P0=0;P0<W0;P0++)if(x===J.TEXTURE_3D||x===J.TEXTURE_2D_ARRAY)J.texImage3D(R0,0,J.RGBA,1,1,B0,0,J.RGBA,J.UNSIGNED_BYTE,j0);else J.texImage2D(R0+P0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,j0);return H0}let z0={};z0[J.TEXTURE_2D]=N0(J.TEXTURE_2D,J.TEXTURE_2D,1),z0[J.TEXTURE_CUBE_MAP]=N0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),z0[J.TEXTURE_2D_ARRAY]=N0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),z0[J.TEXTURE_3D]=N0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),Z.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),M0(J.DEPTH_TEST),X.setFunc(W$),b(!1),_(J$),M0(J.CULL_FACE),f(l8);function M0(x){if(O[x]!==!0)J.enable(x),O[x]=!0}function u0(x){if(O[x]!==!1)J.disable(x),O[x]=!1}function ZJ(x,R0){if(G[x]!==R0){if(J.bindFramebuffer(x,R0),G[x]=R0,x===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=R0;if(x===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=R0;return!0}return!1}function o(x,R0){let W0=M,B0=!1;if(x){if(W0=R.get(R0),W0===void 0)W0=[],R.set(R0,W0);let j0=x.textures;if(W0.length!==j0.length||W0[0]!==J.COLOR_ATTACHMENT0){for(let H0=0,P0=j0.length;H0<P0;H0++)W0[H0]=J.COLOR_ATTACHMENT0+H0;W0.length=j0.length,B0=!0}}else if(W0[0]!==J.BACK)W0[0]=J.BACK,B0=!0;if(B0)J.drawBuffers(W0)}function Q0(x){if(P!==x)return J.useProgram(x),P=x,!0;return!1}let y={[I7]:J.FUNC_ADD,[kW]:J.FUNC_SUBTRACT,[MW]:J.FUNC_REVERSE_SUBTRACT};y[VW]=J.MIN,y[BW]=J.MAX;let V={[LW]:J.ZERO,[zW]:J.ONE,[IW]:J.SRC_COLOR,[AW]:J.SRC_ALPHA,[jW]:J.SRC_ALPHA_SATURATE,[TW]:J.DST_COLOR,[wW]:J.DST_ALPHA,[PW]:J.ONE_MINUS_SRC_COLOR,[_W]:J.ONE_MINUS_SRC_ALPHA,[SW]:J.ONE_MINUS_DST_COLOR,[CW]:J.ONE_MINUS_DST_ALPHA,[yW]:J.CONSTANT_COLOR,[vW]:J.ONE_MINUS_CONSTANT_COLOR,[hW]:J.CONSTANT_ALPHA,[bW]:J.ONE_MINUS_CONSTANT_ALPHA};function f(x,R0,W0,B0,j0,H0,P0,a0,BJ,kJ){if(x===l8){if(E===!0)u0(J.BLEND),E=!1;return}if(E===!1)M0(J.BLEND),E=!0;if(x!==RW){if(x!==F||kJ!==u){if(T!==I7||A!==I7)J.blendEquation(J.FUNC_ADD),T=I7,A=I7;if(kJ)switch(x){case o7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case I8:J.blendFunc(J.ONE,J.ONE);break;case $$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case K$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:JJ("WebGLState: Invalid blending: ",x);break}else switch(x){case o7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case I8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case $$:JJ("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K$:JJ("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:JJ("WebGLState: Invalid blending: ",x);break}w=null,L=null,C=null,S=null,k.set(0,0,0),z=0,F=x,u=kJ}return}if(j0=j0||R0,H0=H0||W0,P0=P0||B0,R0!==T||j0!==A)J.blendEquationSeparate(y[R0],y[j0]),T=R0,A=j0;if(W0!==w||B0!==L||H0!==C||P0!==S)J.blendFuncSeparate(V[W0],V[B0],V[H0],V[P0]),w=W0,L=B0,C=H0,S=P0;if(a0.equals(k)===!1||BJ!==z)J.blendColor(a0.r,a0.g,a0.b,BJ),k.copy(a0),z=BJ;F=x,u=!1}function r(x,R0){x.side===LJ?u0(J.CULL_FACE):M0(J.CULL_FACE);let W0=x.side===$8;if(R0)W0=!W0;b(W0),x.blending===o7&&x.transparent===!1?f(l8):f(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),X.setFunc(x.depthFunc),X.setTest(x.depthTest),X.setMask(x.depthWrite),Z.setMask(x.colorWrite);let B0=x.stencilWrite;if(Y.setTest(B0),B0)Y.setMask(x.stencilWriteMask),Y.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),Y.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass);V0(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?M0(J.SAMPLE_ALPHA_TO_COVERAGE):u0(J.SAMPLE_ALPHA_TO_COVERAGE)}function b(x){if(j!==x){if(x)J.frontFace(J.CW);else J.frontFace(J.CCW);j=x}}function _(x){if(x!==OW){if(M0(J.CULL_FACE),x!==n)if(x===J$)J.cullFace(J.BACK);else if(x===DW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else u0(J.CULL_FACE);n=x}function F0(x){if(x!==J0){if(d)J.lineWidth(x);J0=x}}function V0(x,R0,W0){if(x){if(M0(J.POLYGON_OFFSET_FILL),s!==R0||e!==W0){if(s=R0,e=W0,X.getReversed())R0=-R0;J.polygonOffset(R0,W0)}}else u0(J.POLYGON_OFFSET_FILL)}function o0(x){if(x)M0(J.SCISSOR_TEST);else u0(J.SCISSOR_TEST)}function v(x){if(x===void 0)x=J.TEXTURE0+$0-1;if(L0!==x)J.activeTexture(x),L0=x}function XJ(x,R0,W0){if(W0===void 0)if(L0===null)W0=J.TEXTURE0+$0-1;else W0=L0;let B0=y0[W0];if(B0===void 0)B0={type:void 0,texture:void 0},y0[W0]=B0;if(B0.type!==x||B0.texture!==R0){if(L0!==W0)J.activeTexture(W0),L0=W0;J.bindTexture(x,R0||z0[x]),B0.type=x,B0.texture=R0}}function v0(){let x=y0[L0];if(x!==void 0&&x.type!==void 0)J.bindTexture(x.type,null),x.type=void 0,x.texture=void 0}function b0(){try{J.compressedTexImage2D(...arguments)}catch(x){JJ("WebGLState:",x)}}function N(){try{J.compressedTexImage3D(...arguments)}catch(x){JJ("WebGLState:",x)}}function q(){try{J.texSubImage2D(...arguments)}catch(x){JJ("WebGLState:",x)}}function I(){try{J.texSubImage3D(...arguments)}catch(x){JJ("WebGLState:",x)}}function h(){try{J.compressedTexSubImage2D(...arguments)}catch(x){JJ("WebGLState:",x)}}function l(){try{J.compressedTexSubImage3D(...arguments)}catch(x){JJ("WebGLState:",x)}}function Z0(){try{J.texStorage2D(...arguments)}catch(x){JJ("WebGLState:",x)}}function Y0(){try{J.texStorage3D(...arguments)}catch(x){JJ("WebGLState:",x)}}function m(){try{J.texImage2D(...arguments)}catch(x){JJ("WebGLState:",x)}}function a(){try{J.texImage3D(...arguments)}catch(x){JJ("WebGLState:",x)}}function D0(x){if(D[x]!==void 0)return D[x];else return J.getParameter(x)}function E0(x,R0){if(D[x]!==R0)J.pixelStorei(x,R0),D[x]=R0}function G0(x){if(qJ.equals(x)===!1)J.scissor(x.x,x.y,x.z,x.w),qJ.copy(x)}function O0(x){if(K0.equals(x)===!1)J.viewport(x.x,x.y,x.z,x.w),K0.copy(x)}function p0(x,R0){let W0=U.get(R0);if(W0===void 0)W0=new WeakMap,U.set(R0,W0);let B0=W0.get(x);if(B0===void 0)B0=J.getUniformBlockIndex(R0,x.name),W0.set(x,B0)}function l0(x,R0){let B0=U.get(R0).get(x);if(H.get(R0)!==B0)J.uniformBlockBinding(R0,B0,x.__bindingPointIndex),H.set(R0,B0)}function e0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),O={},D={},L0=null,y0={},G={},R=new WeakMap,M=[],P=null,E=!1,F=null,T=null,w=null,L=null,A=null,C=null,S=null,k=new KJ(0,0,0),z=0,u=!1,j=null,n=null,J0=null,s=null,e=null,qJ.set(0,0,J.canvas.width,J.canvas.height),K0.set(0,0,J.canvas.width,J.canvas.height),Z.reset(),X.reset(),Y.reset()}return{buffers:{color:Z,depth:X,stencil:Y},enable:M0,disable:u0,bindFramebuffer:ZJ,drawBuffers:o,useProgram:Q0,setBlending:f,setMaterial:r,setFlipSided:b,setCullFace:_,setLineWidth:F0,setPolygonOffset:V0,setScissorTest:o0,activeTexture:v,bindTexture:XJ,unbindTexture:v0,compressedTexImage2D:b0,compressedTexImage3D:N,texImage2D:m,texImage3D:a,pixelStorei:E0,getParameter:D0,updateUBOMapping:p0,uniformBlockBinding:l0,texStorage2D:Z0,texStorage3D:Y0,texSubImage2D:q,texSubImage3D:I,compressedTexSubImage2D:h,compressedTexSubImage3D:l,scissor:G0,viewport:O0,reset:e0}}function RN(J,Q,$,K,W,Z,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new i0,O=new WeakMap,D=new Set,G,R=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(N){}function P(N,q){return M?new OffscreenCanvas(N,q):i7("canvas")}function E(N,q,I){let h=1,l=b0(N);if(l.width>I||l.height>I)h=I/Math.max(l.width,l.height);if(h<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Z0=Math.floor(h*l.width),Y0=Math.floor(h*l.height);if(G===void 0)G=P(Z0,Y0);let m=q?P(Z0,Y0):G;return m.width=Z0,m.height=Y0,m.getContext("2d").drawImage(N,0,0,Z0,Y0),r0("WebGLRenderer: Texture has been resized from ("+l.width+"x"+l.height+") to ("+Z0+"x"+Y0+")."),m}else{if("data"in N)r0("WebGLRenderer: Image in DataTexture is too big ("+l.width+"x"+l.height+").");return N}return N}function F(N){return N.generateMipmaps}function T(N){J.generateMipmap(N)}function w(N){if(N.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(N.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(N,q,I,h,l,Z0=!1){if(N!==null){if(J[N]!==void 0)return J[N];r0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Y0;if(h){if(Y0=Q.get("EXT_texture_norm16"),!Y0)r0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let m=q;if(q===J.RED){if(I===J.FLOAT)m=J.R32F;if(I===J.HALF_FLOAT)m=J.R16F;if(I===J.UNSIGNED_BYTE)m=J.R8;if(I===J.UNSIGNED_SHORT&&Y0)m=Y0.R16_EXT;if(I===J.SHORT&&Y0)m=Y0.R16_SNORM_EXT}if(q===J.RED_INTEGER){if(I===J.UNSIGNED_BYTE)m=J.R8UI;if(I===J.UNSIGNED_SHORT)m=J.R16UI;if(I===J.UNSIGNED_INT)m=J.R32UI;if(I===J.BYTE)m=J.R8I;if(I===J.SHORT)m=J.R16I;if(I===J.INT)m=J.R32I}if(q===J.RG){if(I===J.FLOAT)m=J.RG32F;if(I===J.HALF_FLOAT)m=J.RG16F;if(I===J.UNSIGNED_BYTE)m=J.RG8;if(I===J.UNSIGNED_SHORT&&Y0)m=Y0.RG16_EXT;if(I===J.SHORT&&Y0)m=Y0.RG16_SNORM_EXT}if(q===J.RG_INTEGER){if(I===J.UNSIGNED_BYTE)m=J.RG8UI;if(I===J.UNSIGNED_SHORT)m=J.RG16UI;if(I===J.UNSIGNED_INT)m=J.RG32UI;if(I===J.BYTE)m=J.RG8I;if(I===J.SHORT)m=J.RG16I;if(I===J.INT)m=J.RG32I}if(q===J.RGB_INTEGER){if(I===J.UNSIGNED_BYTE)m=J.RGB8UI;if(I===J.UNSIGNED_SHORT)m=J.RGB16UI;if(I===J.UNSIGNED_INT)m=J.RGB32UI;if(I===J.BYTE)m=J.RGB8I;if(I===J.SHORT)m=J.RGB16I;if(I===J.INT)m=J.RGB32I}if(q===J.RGBA_INTEGER){if(I===J.UNSIGNED_BYTE)m=J.RGBA8UI;if(I===J.UNSIGNED_SHORT)m=J.RGBA16UI;if(I===J.UNSIGNED_INT)m=J.RGBA32UI;if(I===J.BYTE)m=J.RGBA8I;if(I===J.SHORT)m=J.RGBA16I;if(I===J.INT)m=J.RGBA32I}if(q===J.RGB){if(I===J.UNSIGNED_SHORT&&Y0)m=Y0.RGB16_EXT;if(I===J.SHORT&&Y0)m=Y0.RGB16_SNORM_EXT;if(I===J.UNSIGNED_INT_5_9_9_9_REV)m=J.RGB9_E5;if(I===J.UNSIGNED_INT_10F_11F_11F_REV)m=J.R11F_G11F_B10F}if(q===J.RGBA){let a=Z0?o$:FJ.getTransfer(l);if(I===J.FLOAT)m=J.RGBA32F;if(I===J.HALF_FLOAT)m=J.RGBA16F;if(I===J.UNSIGNED_BYTE)m=a===zJ?J.SRGB8_ALPHA8:J.RGBA8;if(I===J.UNSIGNED_SHORT&&Y0)m=Y0.RGBA16_EXT;if(I===J.SHORT&&Y0)m=Y0.RGBA16_SNORM_EXT;if(I===J.UNSIGNED_SHORT_4_4_4_4)m=J.RGBA4;if(I===J.UNSIGNED_SHORT_5_5_5_1)m=J.RGB5_A1}if(m===J.R16F||m===J.R32F||m===J.RG16F||m===J.RG32F||m===J.RGBA16F||m===J.RGBA32F)Q.get("EXT_color_buffer_float");return m}function A(N,q){let I;if(N){if(q===null||q===B9||q===A7)I=J.DEPTH24_STENCIL8;else if(q===W9)I=J.DEPTH32F_STENCIL8;else if(q===J6)I=J.DEPTH24_STENCIL8,r0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(q===null||q===B9||q===A7)I=J.DEPTH_COMPONENT24;else if(q===W9)I=J.DEPTH_COMPONENT32F;else if(q===J6)I=J.DEPTH_COMPONENT16;return I}function C(N,q){if(F(N)===!0||N.isFramebufferTexture&&N.minFilter!==V9&&N.minFilter!==G8)return Math.log2(Math.max(q.width,q.height))+1;else if(N.mipmaps!==void 0&&N.mipmaps.length>0)return N.mipmaps.length;else if(N.isCompressedTexture&&Array.isArray(N.image))return q.mipmaps.length;else return 1}function S(N){let q=N.target;if(q.removeEventListener("dispose",S),z(q),q.isVideoTexture)O.delete(q);if(q.isHTMLTexture)D.delete(q)}function k(N){let q=N.target;q.removeEventListener("dispose",k),j(q)}function z(N){let q=K.get(N);if(q.__webglInit===void 0)return;let I=N.source,h=R.get(I);if(h){let l=h[q.__cacheKey];if(l.usedTimes--,l.usedTimes===0)u(N);if(Object.keys(h).length===0)R.delete(I)}K.remove(N)}function u(N){let q=K.get(N);J.deleteTexture(q.__webglTexture);let I=N.source,h=R.get(I);delete h[q.__cacheKey],X.memory.textures--}function j(N){let q=K.get(N);if(N.depthTexture)N.depthTexture.dispose(),K.remove(N.depthTexture);if(N.isWebGLCubeRenderTarget)for(let h=0;h<6;h++){if(Array.isArray(q.__webglFramebuffer[h]))for(let l=0;l<q.__webglFramebuffer[h].length;l++)J.deleteFramebuffer(q.__webglFramebuffer[h][l]);else J.deleteFramebuffer(q.__webglFramebuffer[h]);if(q.__webglDepthbuffer)J.deleteRenderbuffer(q.__webglDepthbuffer[h])}else{if(Array.isArray(q.__webglFramebuffer))for(let h=0;h<q.__webglFramebuffer.length;h++)J.deleteFramebuffer(q.__webglFramebuffer[h]);else J.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer)J.deleteRenderbuffer(q.__webglDepthbuffer);if(q.__webglMultisampledFramebuffer)J.deleteFramebuffer(q.__webglMultisampledFramebuffer);if(q.__webglColorRenderbuffer){for(let h=0;h<q.__webglColorRenderbuffer.length;h++)if(q.__webglColorRenderbuffer[h])J.deleteRenderbuffer(q.__webglColorRenderbuffer[h])}if(q.__webglDepthRenderbuffer)J.deleteRenderbuffer(q.__webglDepthRenderbuffer)}let I=N.textures;for(let h=0,l=I.length;h<l;h++){let Z0=K.get(I[h]);if(Z0.__webglTexture)J.deleteTexture(Z0.__webglTexture),X.memory.textures--;K.remove(I[h])}K.remove(N)}let n=0;function J0(){n=0}function s(){return n}function e(N){n=N}function $0(){let N=n;if(N>=W.maxTextures)r0("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+W.maxTextures);return n+=1,N}function d(N){let q=[];return q.push(N.wrapS),q.push(N.wrapT),q.push(N.wrapR||0),q.push(N.magFilter),q.push(N.minFilter),q.push(N.anisotropy),q.push(N.internalFormat),q.push(N.format),q.push(N.type),q.push(N.generateMipmaps),q.push(N.premultiplyAlpha),q.push(N.flipY),q.push(N.unpackAlignment),q.push(N.colorSpace),q.join()}function X0(N,q){let I=K.get(N);if(N.isVideoTexture)XJ(N);if(N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&I.__version!==N.version){let h=N.image;if(h===null)r0("WebGLRenderer: Texture marked for update but no image data found.");else if(h.complete===!1)r0("WebGLRenderer: Texture marked for update but image is incomplete");else{u0(I,N,q);return}}else if(N.isExternalTexture)I.__webglTexture=N.sourceTexture?N.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,I.__webglTexture,J.TEXTURE0+q)}function q0(N,q){let I=K.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&I.__version!==N.version){u0(I,N,q);return}else if(N.isExternalTexture)I.__webglTexture=N.sourceTexture?N.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,I.__webglTexture,J.TEXTURE0+q)}function L0(N,q){let I=K.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&I.__version!==N.version){u0(I,N,q);return}$.bindTexture(J.TEXTURE_3D,I.__webglTexture,J.TEXTURE0+q)}function y0(N,q){let I=K.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&I.__version!==N.version){ZJ(I,N,q);return}$.bindTexture(J.TEXTURE_CUBE_MAP,I.__webglTexture,J.TEXTURE0+q)}let T0={[t7]:J.REPEAT,[c6]:J.CLAMP_TO_EDGE,[sW]:J.MIRRORED_REPEAT},OJ={[V9]:J.NEAREST,[iW]:J.NEAREST_MIPMAP_NEAREST,[e7]:J.NEAREST_MIPMAP_LINEAR,[G8]:J.LINEAR,[n6]:J.LINEAR_MIPMAP_NEAREST,[u9]:J.LINEAR_MIPMAP_LINEAR},qJ={[KZ]:J.NEVER,[HZ]:J.ALWAYS,[WZ]:J.LESS,[e6]:J.LEQUAL,[ZZ]:J.EQUAL,[JQ]:J.GEQUAL,[XZ]:J.GREATER,[YZ]:J.NOTEQUAL};function K0(N,q){if(q.type===W9&&Q.has("OES_texture_float_linear")===!1&&(q.magFilter===G8||q.magFilter===n6||q.magFilter===e7||q.magFilter===u9||q.minFilter===G8||q.minFilter===n6||q.minFilter===e7||q.minFilter===u9))r0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(N,J.TEXTURE_WRAP_S,T0[q.wrapS]),J.texParameteri(N,J.TEXTURE_WRAP_T,T0[q.wrapT]),N===J.TEXTURE_3D||N===J.TEXTURE_2D_ARRAY)J.texParameteri(N,J.TEXTURE_WRAP_R,T0[q.wrapR]);if(J.texParameteri(N,J.TEXTURE_MAG_FILTER,OJ[q.magFilter]),J.texParameteri(N,J.TEXTURE_MIN_FILTER,OJ[q.minFilter]),q.compareFunction)J.texParameteri(N,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(N,J.TEXTURE_COMPARE_FUNC,qJ[q.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(q.magFilter===V9)return;if(q.minFilter!==e7&&q.minFilter!==u9)return;if(q.type===W9&&Q.has("OES_texture_float_linear")===!1)return;if(q.anisotropy>1||K.get(q).__currentAnisotropy){let I=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(N,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(q.anisotropy,W.getMaxAnisotropy())),K.get(q).__currentAnisotropy=q.anisotropy}}}function N0(N,q){let I=!1;if(N.__webglInit===void 0)N.__webglInit=!0,q.addEventListener("dispose",S);let h=q.source,l=R.get(h);if(l===void 0)l={},R.set(h,l);let Z0=d(q);if(Z0!==N.__cacheKey){if(l[Z0]===void 0)l[Z0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,I=!0;l[Z0].usedTimes++;let Y0=l[N.__cacheKey];if(Y0!==void 0){if(l[N.__cacheKey].usedTimes--,Y0.usedTimes===0)u(q)}N.__cacheKey=Z0,N.__webglTexture=l[Z0].texture}return I}function z0(N,q,I){return Math.floor(Math.floor(N/I)/q)}function M0(N,q,I,h){let Z0=N.updateRanges;if(Z0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,q.width,q.height,I,h,q.data);else{Z0.sort((E0,G0)=>E0.start-G0.start);let Y0=0;for(let E0=1;E0<Z0.length;E0++){let G0=Z0[Y0],O0=Z0[E0],p0=G0.start+G0.count,l0=z0(O0.start,q.width,4),e0=z0(G0.start,q.width,4);if(O0.start<=p0+1&&l0===e0&&z0(O0.start+O0.count-1,q.width,4)===l0)G0.count=Math.max(G0.count,O0.start+O0.count-G0.start);else++Y0,Z0[Y0]=O0}Z0.length=Y0+1;let m=$.getParameter(J.UNPACK_ROW_LENGTH),a=$.getParameter(J.UNPACK_SKIP_PIXELS),D0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,q.width);for(let E0=0,G0=Z0.length;E0<G0;E0++){let O0=Z0[E0],p0=Math.floor(O0.start/4),l0=Math.ceil(O0.count/4),e0=p0%q.width,x=Math.floor(p0/q.width),R0=l0,W0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,e0),$.pixelStorei(J.UNPACK_SKIP_ROWS,x),$.texSubImage2D(J.TEXTURE_2D,0,e0,x,R0,1,I,h,q.data)}N.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,m),$.pixelStorei(J.UNPACK_SKIP_PIXELS,a),$.pixelStorei(J.UNPACK_SKIP_ROWS,D0)}}function u0(N,q,I){let h=J.TEXTURE_2D;if(q.isDataArrayTexture||q.isCompressedArrayTexture)h=J.TEXTURE_2D_ARRAY;if(q.isData3DTexture)h=J.TEXTURE_3D;let l=N0(N,q),Z0=q.source;$.bindTexture(h,N.__webglTexture,J.TEXTURE0+I);let Y0=K.get(Z0);if(Z0.version!==Y0.__version||l===!0){if($.activeTexture(J.TEXTURE0+I),(typeof ImageBitmap<"u"&&q.image instanceof ImageBitmap)===!1){let W0=FJ.getPrimaries(FJ.workingColorSpace),B0=q.colorSpace===s9?null:FJ.getPrimaries(q.colorSpace),j0=q.colorSpace===s9||W0===B0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,q.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,j0)}$.pixelStorei(J.UNPACK_ALIGNMENT,q.unpackAlignment);let a=E(q.image,!1,W.maxTextureSize);a=v0(q,a);let D0=Z.convert(q.format,q.colorSpace),E0=Z.convert(q.type),G0=L(q.internalFormat,D0,E0,q.normalized,q.colorSpace,q.isVideoTexture);K0(h,q);let O0,p0=q.mipmaps,l0=q.isVideoTexture!==!0,e0=Y0.__version===void 0||l===!0,x=Z0.dataReady,R0=C(q,a);if(q.isDepthTexture){if(G0=A(q.format===c9,q.type),e0)if(l0)$.texStorage2D(J.TEXTURE_2D,1,G0,a.width,a.height);else $.texImage2D(J.TEXTURE_2D,0,G0,a.width,a.height,0,D0,E0,null)}else if(q.isDataTexture)if(p0.length>0){if(l0&&e0)$.texStorage2D(J.TEXTURE_2D,R0,G0,p0[0].width,p0[0].height);for(let W0=0,B0=p0.length;W0<B0;W0++)if(O0=p0[W0],l0){if(x)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,O0.width,O0.height,D0,E0,O0.data)}else $.texImage2D(J.TEXTURE_2D,W0,G0,O0.width,O0.height,0,D0,E0,O0.data);q.generateMipmaps=!1}else if(l0){if(e0)$.texStorage2D(J.TEXTURE_2D,R0,G0,a.width,a.height);if(x)M0(q,a,D0,E0)}else $.texImage2D(J.TEXTURE_2D,0,G0,a.width,a.height,0,D0,E0,a.data);else if(q.isCompressedTexture)if(q.isCompressedArrayTexture){if(l0&&e0)$.texStorage3D(J.TEXTURE_2D_ARRAY,R0,G0,p0[0].width,p0[0].height,a.depth);for(let W0=0,B0=p0.length;W0<B0;W0++)if(O0=p0[W0],q.format!==c8)if(D0!==null)if(l0){if(x)if(q.layerUpdates.size>0){let j0=PK(O0.width,O0.height,q.format,q.type);for(let H0 of q.layerUpdates){let P0=O0.data.subarray(H0*j0/O0.data.BYTES_PER_ELEMENT,(H0+1)*j0/O0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,H0,O0.width,O0.height,1,D0,P0)}q.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,0,O0.width,O0.height,a.depth,D0,O0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,W0,G0,O0.width,O0.height,a.depth,0,O0.data,0,0);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(l0){if(x)$.texSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,0,O0.width,O0.height,a.depth,D0,E0,O0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,W0,G0,O0.width,O0.height,a.depth,0,D0,E0,O0.data)}else{if(l0&&e0)$.texStorage2D(J.TEXTURE_2D,R0,G0,p0[0].width,p0[0].height);for(let W0=0,B0=p0.length;W0<B0;W0++)if(O0=p0[W0],q.format!==c8)if(D0!==null)if(l0){if(x)$.compressedTexSubImage2D(J.TEXTURE_2D,W0,0,0,O0.width,O0.height,D0,O0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,W0,G0,O0.width,O0.height,0,O0.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(l0){if(x)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,O0.width,O0.height,D0,E0,O0.data)}else $.texImage2D(J.TEXTURE_2D,W0,G0,O0.width,O0.height,0,D0,E0,O0.data)}else if(q.isDataArrayTexture)if(l0){if(e0)$.texStorage3D(J.TEXTURE_2D_ARRAY,R0,G0,a.width,a.height,a.depth);if(x)if(q.layerUpdates.size>0){let W0=PK(a.width,a.height,q.format,q.type);for(let B0 of q.layerUpdates){let j0=a.data.subarray(B0*W0/a.data.BYTES_PER_ELEMENT,(B0+1)*W0/a.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,B0,a.width,a.height,1,D0,E0,j0)}q.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,a.width,a.height,a.depth,D0,E0,a.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,G0,a.width,a.height,a.depth,0,D0,E0,a.data);else if(q.isData3DTexture)if(l0){if(e0)$.texStorage3D(J.TEXTURE_3D,R0,G0,a.width,a.height,a.depth);if(x)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,a.width,a.height,a.depth,D0,E0,a.data)}else $.texImage3D(J.TEXTURE_3D,0,G0,a.width,a.height,a.depth,0,D0,E0,a.data);else if(q.isFramebufferTexture){if(e0)if(l0)$.texStorage2D(J.TEXTURE_2D,R0,G0,a.width,a.height);else{let{width:W0,height:B0}=a;for(let j0=0;j0<R0;j0++)$.texImage2D(J.TEXTURE_2D,j0,G0,W0,B0,0,D0,E0,null),W0>>=1,B0>>=1}}else if(q.isHTMLTexture){if("texElementImage2D"in J){let W0=J.canvas;if(!W0.hasAttribute("layoutsubtree"))W0.setAttribute("layoutsubtree","true");if(a.parentNode!==W0){W0.appendChild(a),D.add(q),W0.onpaint=(B0)=>{let j0=B0.changedElements;for(let H0 of D)if(j0.includes(H0.image))H0.needsUpdate=!0},W0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,a);else{let{RGBA:j0,RGBA:H0,UNSIGNED_BYTE:P0}=J;J.texElementImage2D(J.TEXTURE_2D,0,j0,H0,P0,a)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(p0.length>0){if(l0&&e0){let W0=b0(p0[0]);$.texStorage2D(J.TEXTURE_2D,R0,G0,W0.width,W0.height)}for(let W0=0,B0=p0.length;W0<B0;W0++)if(O0=p0[W0],l0){if(x)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,D0,E0,O0)}else $.texImage2D(J.TEXTURE_2D,W0,G0,D0,E0,O0);q.generateMipmaps=!1}else if(l0){if(e0){let W0=b0(a);$.texStorage2D(J.TEXTURE_2D,R0,G0,W0.width,W0.height)}if(x)$.texSubImage2D(J.TEXTURE_2D,0,0,0,D0,E0,a)}else $.texImage2D(J.TEXTURE_2D,0,G0,D0,E0,a);if(F(q))T(h);if(Y0.__version=Z0.version,q.onUpdate)q.onUpdate(q)}N.__version=q.version}function ZJ(N,q,I){if(q.image.length!==6)return;let h=N0(N,q),l=q.source;$.bindTexture(J.TEXTURE_CUBE_MAP,N.__webglTexture,J.TEXTURE0+I);let Z0=K.get(l);if(l.version!==Z0.__version||h===!0){$.activeTexture(J.TEXTURE0+I);let Y0=FJ.getPrimaries(FJ.workingColorSpace),m=q.colorSpace===s9?null:FJ.getPrimaries(q.colorSpace),a=q.colorSpace===s9||Y0===m?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,q.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,q.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,a);let D0=q.isCompressedTexture||q.image[0].isCompressedTexture,E0=q.image[0]&&q.image[0].isDataTexture,G0=[];for(let H0=0;H0<6;H0++){if(!D0&&!E0)G0[H0]=E(q.image[H0],!0,W.maxCubemapSize);else G0[H0]=E0?q.image[H0].image:q.image[H0];G0[H0]=v0(q,G0[H0])}let O0=G0[0],p0=Z.convert(q.format,q.colorSpace),l0=Z.convert(q.type),e0=L(q.internalFormat,p0,l0,q.normalized,q.colorSpace),x=q.isVideoTexture!==!0,R0=Z0.__version===void 0||h===!0,W0=l.dataReady,B0=C(q,O0);K0(J.TEXTURE_CUBE_MAP,q);let j0;if(D0){if(x&&R0)$.texStorage2D(J.TEXTURE_CUBE_MAP,B0,e0,O0.width,O0.height);for(let H0=0;H0<6;H0++){j0=G0[H0].mipmaps;for(let P0=0;P0<j0.length;P0++){let a0=j0[P0];if(q.format!==c8)if(p0!==null)if(x){if(W0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,P0,0,0,a0.width,a0.height,p0,a0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,P0,e0,a0.width,a0.height,0,a0.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(x){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,P0,0,0,a0.width,a0.height,p0,l0,a0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,P0,e0,a0.width,a0.height,0,p0,l0,a0.data)}}}else{if(j0=q.mipmaps,x&&R0){if(j0.length>0)B0++;let H0=b0(G0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,B0,e0,H0.width,H0.height)}for(let H0=0;H0<6;H0++)if(E0){if(x){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,0,0,G0[H0].width,G0[H0].height,p0,l0,G0[H0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,e0,G0[H0].width,G0[H0].height,0,p0,l0,G0[H0].data);for(let P0=0;P0<j0.length;P0++){let BJ=j0[P0].image[H0].image;if(x){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,P0+1,0,0,BJ.width,BJ.height,p0,l0,BJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,P0+1,e0,BJ.width,BJ.height,0,p0,l0,BJ.data)}}else{if(x){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,0,0,p0,l0,G0[H0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,e0,p0,l0,G0[H0]);for(let P0=0;P0<j0.length;P0++){let a0=j0[P0];if(x){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,P0+1,0,0,p0,l0,a0.image[H0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,P0+1,e0,p0,l0,a0.image[H0])}}}if(F(q))T(J.TEXTURE_CUBE_MAP);if(Z0.__version=l.version,q.onUpdate)q.onUpdate(q)}N.__version=q.version}function o(N,q,I,h,l,Z0){let Y0=Z.convert(I.format,I.colorSpace),m=Z.convert(I.type),a=L(I.internalFormat,Y0,m,I.normalized,I.colorSpace),D0=K.get(q),E0=K.get(I);if(E0.__renderTarget=q,!D0.__hasExternalTextures){let G0=Math.max(1,q.width>>Z0),O0=Math.max(1,q.height>>Z0);if(l===J.TEXTURE_3D||l===J.TEXTURE_2D_ARRAY)$.texImage3D(l,Z0,a,G0,O0,q.depth,0,Y0,m,null);else $.texImage2D(l,Z0,a,G0,O0,0,Y0,m,null)}if($.bindFramebuffer(J.FRAMEBUFFER,N),v(q))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,h,l,E0.__webglTexture,0,o0(q));else if(l===J.TEXTURE_2D||l>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,h,l,E0.__webglTexture,Z0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function Q0(N,q,I){if(J.bindRenderbuffer(J.RENDERBUFFER,N),q.depthBuffer){let h=q.depthTexture,l=h&&h.isDepthTexture?h.type:null,Z0=A(q.stencilBuffer,l),Y0=q.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(q))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,o0(q),Z0,q.width,q.height);else if(I)J.renderbufferStorageMultisample(J.RENDERBUFFER,o0(q),Z0,q.width,q.height);else J.renderbufferStorage(J.RENDERBUFFER,Z0,q.width,q.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,N)}else{let h=q.textures;for(let l=0;l<h.length;l++){let Z0=h[l],Y0=Z.convert(Z0.format,Z0.colorSpace),m=Z.convert(Z0.type),a=L(Z0.internalFormat,Y0,m,Z0.normalized,Z0.colorSpace);if(v(q))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,o0(q),a,q.width,q.height);else if(I)J.renderbufferStorageMultisample(J.RENDERBUFFER,o0(q),a,q.width,q.height);else J.renderbufferStorage(J.RENDERBUFFER,a,q.width,q.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function y(N,q,I){let h=q.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,N),!(q.depthTexture&&q.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let l=K.get(q.depthTexture);if(l.__renderTarget=q,!l.__webglTexture||q.depthTexture.image.width!==q.width||q.depthTexture.image.height!==q.height)q.depthTexture.image.width=q.width,q.depthTexture.image.height=q.height,q.depthTexture.needsUpdate=!0;if(h){if(l.__webglInit===void 0)l.__webglInit=!0,q.depthTexture.addEventListener("dispose",S);if(l.__webglTexture===void 0){l.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,l.__webglTexture),K0(J.TEXTURE_CUBE_MAP,q.depthTexture);let D0=Z.convert(q.depthTexture.format),E0=Z.convert(q.depthTexture.type),G0;if(q.depthTexture.format===l9)G0=J.DEPTH_COMPONENT24;else if(q.depthTexture.format===c9)G0=J.DEPTH24_STENCIL8;for(let O0=0;O0<6;O0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,0,G0,q.width,q.height,0,D0,E0,null)}}else X0(q.depthTexture,0);let Z0=l.__webglTexture,Y0=o0(q),m=h?J.TEXTURE_CUBE_MAP_POSITIVE_X+I:J.TEXTURE_2D,a=q.depthTexture.format===c9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(q.depthTexture.format===l9)if(v(q))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,m,Z0,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,m,Z0,0);else if(q.depthTexture.format===c9)if(v(q))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,m,Z0,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,m,Z0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function V(N){let q=K.get(N),I=N.isWebGLCubeRenderTarget===!0;if(q.__boundDepthTexture!==N.depthTexture){let h=N.depthTexture;if(q.__depthDisposeCallback)q.__depthDisposeCallback();if(h){let l=()=>{delete q.__boundDepthTexture,delete q.__depthDisposeCallback,h.removeEventListener("dispose",l)};h.addEventListener("dispose",l),q.__depthDisposeCallback=l}q.__boundDepthTexture=h}if(N.depthTexture&&!q.__autoAllocateDepthBuffer)if(I)for(let h=0;h<6;h++)y(q.__webglFramebuffer[h],N,h);else{let h=N.texture.mipmaps;if(h&&h.length>0)y(q.__webglFramebuffer[0],N,0);else y(q.__webglFramebuffer,N,0)}else if(I){q.__webglDepthbuffer=[];for(let h=0;h<6;h++)if($.bindFramebuffer(J.FRAMEBUFFER,q.__webglFramebuffer[h]),q.__webglDepthbuffer[h]===void 0)q.__webglDepthbuffer[h]=J.createRenderbuffer(),Q0(q.__webglDepthbuffer[h],N,!1);else{let l=N.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=q.__webglDepthbuffer[h];J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,l,J.RENDERBUFFER,Z0)}}else{let h=N.texture.mipmaps;if(h&&h.length>0)$.bindFramebuffer(J.FRAMEBUFFER,q.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,q.__webglFramebuffer);if(q.__webglDepthbuffer===void 0)q.__webglDepthbuffer=J.createRenderbuffer(),Q0(q.__webglDepthbuffer,N,!1);else{let l=N.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=q.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,l,J.RENDERBUFFER,Z0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function f(N,q,I){let h=K.get(N);if(q!==void 0)o(h.__webglFramebuffer,N,N.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(I!==void 0)V(N)}function r(N){let q=N.texture,I=K.get(N),h=K.get(q);N.addEventListener("dispose",k);let l=N.textures,Z0=N.isWebGLCubeRenderTarget===!0,Y0=l.length>1;if(!Y0){if(h.__webglTexture===void 0)h.__webglTexture=J.createTexture();h.__version=q.version,X.memory.textures++}if(Z0){I.__webglFramebuffer=[];for(let m=0;m<6;m++)if(q.mipmaps&&q.mipmaps.length>0){I.__webglFramebuffer[m]=[];for(let a=0;a<q.mipmaps.length;a++)I.__webglFramebuffer[m][a]=J.createFramebuffer()}else I.__webglFramebuffer[m]=J.createFramebuffer()}else{if(q.mipmaps&&q.mipmaps.length>0){I.__webglFramebuffer=[];for(let m=0;m<q.mipmaps.length;m++)I.__webglFramebuffer[m]=J.createFramebuffer()}else I.__webglFramebuffer=J.createFramebuffer();if(Y0)for(let m=0,a=l.length;m<a;m++){let D0=K.get(l[m]);if(D0.__webglTexture===void 0)D0.__webglTexture=J.createTexture(),X.memory.textures++}if(N.samples>0&&v(N)===!1){I.__webglMultisampledFramebuffer=J.createFramebuffer(),I.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let m=0;m<l.length;m++){let a=l[m];I.__webglColorRenderbuffer[m]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,I.__webglColorRenderbuffer[m]);let D0=Z.convert(a.format,a.colorSpace),E0=Z.convert(a.type),G0=L(a.internalFormat,D0,E0,a.normalized,a.colorSpace,N.isXRRenderTarget===!0),O0=o0(N);J.renderbufferStorageMultisample(J.RENDERBUFFER,O0,G0,N.width,N.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+m,J.RENDERBUFFER,I.__webglColorRenderbuffer[m])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),N.depthBuffer)I.__webglDepthRenderbuffer=J.createRenderbuffer(),Q0(I.__webglDepthRenderbuffer,N,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Z0){$.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture),K0(J.TEXTURE_CUBE_MAP,q);for(let m=0;m<6;m++)if(q.mipmaps&&q.mipmaps.length>0)for(let a=0;a<q.mipmaps.length;a++)o(I.__webglFramebuffer[m][a],N,q,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,a);else o(I.__webglFramebuffer[m],N,q,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);if(F(q))T(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(Y0){for(let m=0,a=l.length;m<a;m++){let D0=l[m],E0=K.get(D0),G0=J.TEXTURE_2D;if(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)G0=N.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(G0,E0.__webglTexture),K0(G0,D0),o(I.__webglFramebuffer,N,D0,J.COLOR_ATTACHMENT0+m,G0,0),F(D0))T(G0)}$.unbindTexture()}else{let m=J.TEXTURE_2D;if(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)m=N.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(m,h.__webglTexture),K0(m,q),q.mipmaps&&q.mipmaps.length>0)for(let a=0;a<q.mipmaps.length;a++)o(I.__webglFramebuffer[a],N,q,J.COLOR_ATTACHMENT0,m,a);else o(I.__webglFramebuffer,N,q,J.COLOR_ATTACHMENT0,m,0);if(F(q))T(m);$.unbindTexture()}if(N.depthBuffer)V(N)}function b(N){let q=N.textures;for(let I=0,h=q.length;I<h;I++){let l=q[I];if(F(l)){let Z0=w(N),Y0=K.get(l).__webglTexture;$.bindTexture(Z0,Y0),T(Z0),$.unbindTexture()}}}let _=[],F0=[];function V0(N){if(N.samples>0){if(v(N)===!1){let{textures:q,width:I,height:h}=N,l=J.COLOR_BUFFER_BIT,Z0=N.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=K.get(N),m=q.length>1;if(m)for(let D0=0;D0<q.length;D0++)$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+D0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+D0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer);let a=N.texture.mipmaps;if(a&&a.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer);for(let D0=0;D0<q.length;D0++){if(N.resolveDepthBuffer){if(N.depthBuffer)l|=J.DEPTH_BUFFER_BIT;if(N.stencilBuffer&&N.resolveStencilBuffer)l|=J.STENCIL_BUFFER_BIT}if(m){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[D0]);let E0=K.get(q[D0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,E0,0)}if(J.blitFramebuffer(0,0,I,h,0,0,I,h,l,J.NEAREST),H===!0){if(_.length=0,F0.length=0,_.push(J.COLOR_ATTACHMENT0+D0),N.depthBuffer&&N.resolveDepthBuffer===!1)_.push(Z0),F0.push(Z0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,F0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,_)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),m)for(let D0=0;D0<q.length;D0++){$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+D0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[D0]);let E0=K.get(q[D0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+D0,J.TEXTURE_2D,E0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&H){let q=N.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[q])}}}function o0(N){return Math.min(W.maxSamples,N.samples)}function v(N){let q=K.get(N);return N.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&q.__useRenderToTexture!==!1}function XJ(N){let q=X.render.frame;if(O.get(N)!==q)O.set(N,q),N.update()}function v0(N,q){let{colorSpace:I,format:h,type:l}=N;if(N.isCompressedTexture===!0||N.isVideoTexture===!0)return q;if(I!==i$&&I!==s9)if(FJ.getTransfer(I)===zJ){if(h!==c8||l!==f8)r0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else JJ("WebGLTextures: Unsupported texture color space:",I);return q}function b0(N){if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement)U.width=N.naturalWidth||N.width,U.height=N.naturalHeight||N.height;else if(typeof VideoFrame<"u"&&N instanceof VideoFrame)U.width=N.displayWidth,U.height=N.displayHeight;else U.width=N.width,U.height=N.height;return U}this.allocateTextureUnit=$0,this.resetTextureUnits=J0,this.getTextureUnits=s,this.setTextureUnits=e,this.setTexture2D=X0,this.setTexture2DArray=q0,this.setTexture3D=L0,this.setTextureCube=y0,this.rebindTextures=f,this.setupRenderTarget=r,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=V0,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=o,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function kN(J,Q){function $(K,W=s9){let Z,X=FJ.getTransfer(W);if(K===f8)return J.UNSIGNED_BYTE;if(K===G$)return J.UNSIGNED_SHORT_4_4_4_4;if(K===F$)return J.UNSIGNED_SHORT_5_5_5_1;if(K===aW)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===tW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===oW)return J.BYTE;if(K===rW)return J.SHORT;if(K===J6)return J.UNSIGNED_SHORT;if(K===N$)return J.INT;if(K===B9)return J.UNSIGNED_INT;if(K===W9)return J.FLOAT;if(K===Z9)return J.HALF_FLOAT;if(K===eW)return J.ALPHA;if(K===JZ)return J.RGB;if(K===c8)return J.RGBA;if(K===l9)return J.DEPTH_COMPONENT;if(K===c9)return J.DEPTH_STENCIL;if(K===QZ)return J.RED;if(K===O$)return J.RED_INTEGER;if(K===n9)return J.RG;if(K===D$)return J.RG_INTEGER;if(K===E$)return J.RGBA_INTEGER;if(K===s6||K===i6||K===o6||K===r6)if(X===zJ)if(Z=Q.get("WEBGL_compressed_texture_s3tc_srgb"),Z!==null){if(K===s6)return Z.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===i6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===o6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===r6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Z=Q.get("WEBGL_compressed_texture_s3tc"),Z!==null){if(K===s6)return Z.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===i6)return Z.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===o6)return Z.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===r6)return Z.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===R$||K===k$||K===M$||K===V$)if(Z=Q.get("WEBGL_compressed_texture_pvrtc"),Z!==null){if(K===R$)return Z.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===k$)return Z.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===M$)return Z.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===V$)return Z.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===B$||K===L$||K===z$||K===I$||K===P$||K===a6||K===A$)if(Z=Q.get("WEBGL_compressed_texture_etc"),Z!==null){if(K===B$||K===L$)return X===zJ?Z.COMPRESSED_SRGB8_ETC2:Z.COMPRESSED_RGB8_ETC2;if(K===z$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Z.COMPRESSED_RGBA8_ETC2_EAC;if(K===I$)return Z.COMPRESSED_R11_EAC;if(K===P$)return Z.COMPRESSED_SIGNED_R11_EAC;if(K===a6)return Z.COMPRESSED_RG11_EAC;if(K===A$)return Z.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===_$||K===w$||K===C$||K===T$||K===S$||K===j$||K===y$||K===v$||K===h$||K===b$||K===f$||K===x$||K===g$||K===p$)if(Z=Q.get("WEBGL_compressed_texture_astc"),Z!==null){if(K===_$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Z.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===w$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Z.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===C$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Z.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===T$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Z.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===S$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Z.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===j$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Z.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===y$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Z.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===v$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Z.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===h$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Z.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===b$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Z.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===f$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Z.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===x$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Z.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===g$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Z.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===p$)return X===zJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Z.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===m$||K===d$||K===u$)if(Z=Q.get("EXT_texture_compression_bptc"),Z!==null){if(K===m$)return X===zJ?Z.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Z.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===d$)return Z.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===u$)return Z.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===l$||K===c$||K===t6||K===n$)if(Z=Q.get("EXT_texture_compression_rgtc"),Z!==null){if(K===l$)return Z.COMPRESSED_RED_RGTC1_EXT;if(K===c$)return Z.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===t6)return Z.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===n$)return Z.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===A7)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:$}}var MN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VN=`
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

}`;class eZ{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new YQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new F8({vertexShader:MN,fragmentShader:VN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new U0(new w8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JX extends n8{constructor(J,Q){super();let $=this,K=null,W=1,Z=null,X="local-floor",Y=1,H=null,U=null,O=null,D=null,G=null,R=null,M=typeof XRWebGLBinding<"u",P=new eZ,E={},F=Q.getContextAttributes(),T=null,w=null,L=[],A=[],C=new i0,S=null,k=new rJ;k.viewport=new jJ;let z=new rJ;z.viewport=new jJ;let u=[k,z],j=new BK,n=null,J0=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K0){let N0=L[K0];if(N0===void 0)N0=new $6,L[K0]=N0;return N0.getTargetRaySpace()},this.getControllerGrip=function(K0){let N0=L[K0];if(N0===void 0)N0=new $6,L[K0]=N0;return N0.getGripSpace()},this.getHand=function(K0){let N0=L[K0];if(N0===void 0)N0=new $6,L[K0]=N0;return N0.getHandSpace()};function s(K0){let N0=A.indexOf(K0.inputSource);if(N0===-1)return;let z0=L[N0];if(z0!==void 0)z0.update(K0.inputSource,K0.frame,H||Z),z0.dispatchEvent({type:K0.type,data:K0.inputSource})}function e(){K.removeEventListener("select",s),K.removeEventListener("selectstart",s),K.removeEventListener("selectend",s),K.removeEventListener("squeeze",s),K.removeEventListener("squeezestart",s),K.removeEventListener("squeezeend",s),K.removeEventListener("end",e),K.removeEventListener("inputsourceschange",$0);for(let K0=0;K0<L.length;K0++){let N0=A[K0];if(N0===null)continue;A[K0]=null,L[K0].disconnect(N0)}n=null,J0=null,P.reset();for(let K0 in E)delete E[K0];J.setRenderTarget(T),G=null,D=null,O=null,K=null,w=null,qJ.stop(),$.isPresenting=!1,J.setPixelRatio(S),J.setSize(C.width,C.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K0){if(W=K0,$.isPresenting===!0)r0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K0){if(X=K0,$.isPresenting===!0)r0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||Z},this.setReferenceSpace=function(K0){H=K0},this.getBaseLayer=function(){return D!==null?D:G},this.getBinding=function(){if(O===null&&M)O=new XRWebGLBinding(K,Q);return O},this.getFrame=function(){return R},this.getSession=function(){return K},this.setSession=async function(K0){if(K=K0,K!==null){if(T=J.getRenderTarget(),K.addEventListener("select",s),K.addEventListener("selectstart",s),K.addEventListener("selectend",s),K.addEventListener("squeeze",s),K.addEventListener("squeezestart",s),K.addEventListener("squeezeend",s),K.addEventListener("end",e),K.addEventListener("inputsourceschange",$0),F.xrCompatible!==!0)await Q.makeXRCompatible();if(S=J.getPixelRatio(),J.getSize(C),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let z0={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:W};G=new XRWebGLLayer(K,Q,z0),K.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),w=new _8(G.framebufferWidth,G.framebufferHeight,{format:c8,type:f8,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1})}else{let z0=null,M0=null,u0=null;if(F.depth)u0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,z0=F.stencil?c9:l9,M0=F.stencil?A7:B9;let ZJ={colorFormat:Q.RGBA8,depthFormat:u0,scaleFactor:W};O=this.getBinding(),D=O.createProjectionLayer(ZJ),K.updateRenderState({layers:[D]}),J.setPixelRatio(1),J.setSize(D.textureWidth,D.textureHeight,!1),w=new _8(D.textureWidth,D.textureHeight,{format:c8,type:f8,depthTexture:new I9(D.textureWidth,D.textureHeight,M0,void 0,void 0,void 0,void 0,void 0,void 0,z0),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:D.ignoreDepthValues===!1,resolveStencilBuffer:D.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(Y),H=null,Z=await K.requestReferenceSpace(X),qJ.setContext(K),qJ.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return P.getDepthTexture()};function $0(K0){for(let N0=0;N0<K0.removed.length;N0++){let z0=K0.removed[N0],M0=A.indexOf(z0);if(M0>=0)A[M0]=null,L[M0].disconnect(z0)}for(let N0=0;N0<K0.added.length;N0++){let z0=K0.added[N0],M0=A.indexOf(z0);if(M0===-1){for(let ZJ=0;ZJ<L.length;ZJ++)if(ZJ>=A.length){A.push(z0),M0=ZJ;break}else if(A[ZJ]===null){A[ZJ]=z0,M0=ZJ;break}if(M0===-1)break}let u0=L[M0];if(u0)u0.connect(z0)}}let d=new g,X0=new g;function q0(K0,N0,z0){d.setFromMatrixPosition(N0.matrixWorld),X0.setFromMatrixPosition(z0.matrixWorld);let M0=d.distanceTo(X0),u0=N0.projectionMatrix.elements,ZJ=z0.projectionMatrix.elements,o=u0[14]/(u0[10]-1),Q0=u0[14]/(u0[10]+1),y=(u0[9]+1)/u0[5],V=(u0[9]-1)/u0[5],f=(u0[8]-1)/u0[0],r=(ZJ[8]+1)/ZJ[0],b=o*f,_=o*r,F0=M0/(-f+r),V0=F0*-f;if(N0.matrixWorld.decompose(K0.position,K0.quaternion,K0.scale),K0.translateX(V0),K0.translateZ(F0),K0.matrixWorld.compose(K0.position,K0.quaternion,K0.scale),K0.matrixWorldInverse.copy(K0.matrixWorld).invert(),u0[10]===-1)K0.projectionMatrix.copy(N0.projectionMatrix),K0.projectionMatrixInverse.copy(N0.projectionMatrixInverse);else{let o0=o+F0,v=Q0+F0,XJ=b-V0,v0=_+(M0-V0),b0=y*Q0/v*o0,N=V*Q0/v*o0;K0.projectionMatrix.makePerspective(XJ,v0,b0,N,o0,v),K0.projectionMatrixInverse.copy(K0.projectionMatrix).invert()}}function L0(K0,N0){if(N0===null)K0.matrixWorld.copy(K0.matrix);else K0.matrixWorld.multiplyMatrices(N0.matrixWorld,K0.matrix);K0.matrixWorldInverse.copy(K0.matrixWorld).invert()}this.updateCamera=function(K0){if(K===null)return;let{near:N0,far:z0}=K0;if(P.texture!==null){if(P.depthNear>0)N0=P.depthNear;if(P.depthFar>0)z0=P.depthFar}if(j.near=z.near=k.near=N0,j.far=z.far=k.far=z0,n!==j.near||J0!==j.far)K.updateRenderState({depthNear:j.near,depthFar:j.far}),n=j.near,J0=j.far;j.layers.mask=K0.layers.mask|6,k.layers.mask=j.layers.mask&-5,z.layers.mask=j.layers.mask&-3;let M0=K0.parent,u0=j.cameras;L0(j,M0);for(let ZJ=0;ZJ<u0.length;ZJ++)L0(u0[ZJ],M0);if(u0.length===2)q0(j,k,z);else j.projectionMatrix.copy(k.projectionMatrix);y0(K0,j,M0)};function y0(K0,N0,z0){if(z0===null)K0.matrix.copy(N0.matrixWorld);else K0.matrix.copy(z0.matrixWorld),K0.matrix.invert(),K0.matrix.multiply(N0.matrixWorld);if(K0.matrix.decompose(K0.position,K0.quaternion,K0.scale),K0.updateMatrixWorld(!0),K0.projectionMatrix.copy(N0.projectionMatrix),K0.projectionMatrixInverse.copy(N0.projectionMatrixInverse),K0.isPerspectiveCamera)K0.fov=p9*2*Math.atan(1/K0.projectionMatrix.elements[5]),K0.zoom=1}this.getCamera=function(){return j},this.getFoveation=function(){if(D===null&&G===null)return;return Y},this.setFoveation=function(K0){if(Y=K0,D!==null)D.fixedFoveation=K0;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=K0},this.hasDepthSensing=function(){return P.texture!==null},this.getDepthSensingMesh=function(){return P.getMesh(j)},this.getCameraTexture=function(K0){return E[K0]};let T0=null;function OJ(K0,N0){if(U=N0.getViewerPose(H||Z),R=N0,U!==null){let z0=U.views;if(G!==null)J.setRenderTargetFramebuffer(w,G.framebuffer),J.setRenderTarget(w);let M0=!1;if(z0.length!==j.cameras.length)j.cameras.length=0,M0=!0;for(let Q0=0;Q0<z0.length;Q0++){let y=z0[Q0],V=null;if(G!==null)V=G.getViewport(y);else{let r=O.getViewSubImage(D,y);if(V=r.viewport,Q0===0)J.setRenderTargetTextures(w,r.colorTexture,r.depthStencilTexture),J.setRenderTarget(w)}let f=u[Q0];if(f===void 0)f=new rJ,f.layers.enable(Q0),f.viewport=new jJ,u[Q0]=f;if(f.matrix.fromArray(y.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.projectionMatrix.fromArray(y.projectionMatrix),f.projectionMatrixInverse.copy(f.projectionMatrix).invert(),f.viewport.set(V.x,V.y,V.width,V.height),Q0===0)j.matrix.copy(f.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale);if(M0===!0)j.cameras.push(f)}let u0=K.enabledFeatures;if(u0&&u0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&M){O=$.getBinding();let Q0=O.getDepthInformation(z0[0]);if(Q0&&Q0.isValid&&Q0.texture)P.init(Q0,K.renderState)}if(u0&&u0.includes("camera-access")&&M){J.state.unbindTexture(),O=$.getBinding();for(let Q0=0;Q0<z0.length;Q0++){let y=z0[Q0].camera;if(y){let V=E[y];if(!V)V=new YQ,E[y]=V;let f=O.getCameraImage(y);V.sourceTexture=f}}}}for(let z0=0;z0<L.length;z0++){let M0=A[z0],u0=L[z0];if(M0!==null&&u0!==void 0)u0.update(M0,N0,H||Z)}if(T0)T0(K0,N0);if(N0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:N0});R=null}let qJ=new dZ;qJ.setAnimationLoop(OJ),this.setAnimationLoop=function(K0){T0=K0},this.dispose=function(){}}}var BN=new CJ,QX=new WJ;QX.set(-1,0,0,0,1,0,0,0,1);function LN(J,Q){function $(E,F){if(E.matrixAutoUpdate===!0)E.updateMatrix();F.value.copy(E.matrix)}function K(E,F){if(F.color.getRGB(E.fogColor.value,XK(J)),F.isFog)E.fogNear.value=F.near,E.fogFar.value=F.far;else if(F.isFogExp2)E.fogDensity.value=F.density}function W(E,F,T,w,L){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)Z(E,F);else if(F.isMeshLambertMaterial){if(Z(E,F),F.envMap)E.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)Z(E,F),D(E,F);else if(F.isMeshPhongMaterial){if(Z(E,F),O(E,F),F.envMap)E.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(Z(E,F),G(E,F),F.isMeshPhysicalMaterial)R(E,F,L)}else if(F.isMeshMatcapMaterial)Z(E,F),M(E,F);else if(F.isMeshDepthMaterial)Z(E,F);else if(F.isMeshDistanceMaterial)Z(E,F),P(E,F);else if(F.isMeshNormalMaterial)Z(E,F);else if(F.isLineBasicMaterial){if(X(E,F),F.isLineDashedMaterial)Y(E,F)}else if(F.isPointsMaterial)H(E,F,T,w);else if(F.isSpriteMaterial)U(E,F);else if(F.isShadowMaterial)E.color.value.copy(F.color),E.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function Z(E,F){if(E.opacity.value=F.opacity,F.color)E.diffuse.value.copy(F.color);if(F.emissive)E.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)E.map.value=F.map,$(F.map,E.mapTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,$(F.alphaMap,E.alphaMapTransform);if(F.bumpMap){if(E.bumpMap.value=F.bumpMap,$(F.bumpMap,E.bumpMapTransform),E.bumpScale.value=F.bumpScale,F.side===$8)E.bumpScale.value*=-1}if(F.normalMap){if(E.normalMap.value=F.normalMap,$(F.normalMap,E.normalMapTransform),E.normalScale.value.copy(F.normalScale),F.side===$8)E.normalScale.value.negate()}if(F.displacementMap)E.displacementMap.value=F.displacementMap,$(F.displacementMap,E.displacementMapTransform),E.displacementScale.value=F.displacementScale,E.displacementBias.value=F.displacementBias;if(F.emissiveMap)E.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,E.emissiveMapTransform);if(F.specularMap)E.specularMap.value=F.specularMap,$(F.specularMap,E.specularMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest;let T=Q.get(F),w=T.envMap,L=T.envMapRotation;if(w){if(E.envMap.value=w,E.envMapRotation.value.setFromMatrix4(BN.makeRotationFromEuler(L)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(QX);E.reflectivity.value=F.reflectivity,E.ior.value=F.ior,E.refractionRatio.value=F.refractionRatio}if(F.lightMap)E.lightMap.value=F.lightMap,E.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,E.lightMapTransform);if(F.aoMap)E.aoMap.value=F.aoMap,E.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,E.aoMapTransform)}function X(E,F){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,F.map)E.map.value=F.map,$(F.map,E.mapTransform)}function Y(E,F){E.dashSize.value=F.dashSize,E.totalSize.value=F.dashSize+F.gapSize,E.scale.value=F.scale}function H(E,F,T,w){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,E.size.value=F.size*T,E.scale.value=w*0.5,F.map)E.map.value=F.map,$(F.map,E.uvTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,$(F.alphaMap,E.alphaMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest}function U(E,F){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,E.rotation.value=F.rotation,F.map)E.map.value=F.map,$(F.map,E.mapTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,$(F.alphaMap,E.alphaMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest}function O(E,F){E.specular.value.copy(F.specular),E.shininess.value=Math.max(F.shininess,0.0001)}function D(E,F){if(F.gradientMap)E.gradientMap.value=F.gradientMap}function G(E,F){if(E.metalness.value=F.metalness,F.metalnessMap)E.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=F.roughness,F.roughnessMap)E.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,E.roughnessMapTransform);if(F.envMap)E.envMapIntensity.value=F.envMapIntensity}function R(E,F,T){if(E.ior.value=F.ior,F.sheen>0){if(E.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),E.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)E.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,E.sheenColorMapTransform);if(F.sheenRoughnessMap)E.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(E.clearcoat.value=F.clearcoat,E.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)E.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,E.clearcoatMapTransform);if(F.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(E.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===$8)E.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)E.dispersion.value=F.dispersion;if(F.iridescence>0){if(E.iridescence.value=F.iridescence,E.iridescenceIOR.value=F.iridescenceIOR,E.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)E.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,E.iridescenceMapTransform);if(F.iridescenceThicknessMap)E.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(F.transmission>0){if(E.transmission.value=F.transmission,E.transmissionSamplerMap.value=T.texture,E.transmissionSamplerSize.value.set(T.width,T.height),F.transmissionMap)E.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=F.thickness,F.thicknessMap)E.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=F.attenuationDistance,E.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(E.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)E.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=F.specularIntensity,E.specularColor.value.copy(F.specularColor),F.specularColorMap)E.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,E.specularColorMapTransform);if(F.specularIntensityMap)E.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,E.specularIntensityMapTransform)}function M(E,F){if(F.matcap)E.matcap.value=F.matcap}function P(E,F){let T=Q.get(F).light;E.referencePosition.value.setFromMatrixPosition(T.matrixWorld),E.nearDistance.value=T.shadow.camera.near,E.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:W}}function zN(J,Q,$,K){let W={},Z={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(L,A){let C=A.program;K.uniformBlockBinding(L,C)}function U(L,A){let C=W[L.id];if(C===void 0)E(L),C=O(L),W[L.id]=C,L.addEventListener("dispose",T);let S=A.program;K.updateUBOMapping(L,S);let k=Q.render.frame;if(Z[L.id]!==k)G(L),Z[L.id]=k}function O(L){let A=D();L.__bindingPointIndex=A;let C=J.createBuffer(),S=L.__size,k=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,C),J.bufferData(J.UNIFORM_BUFFER,S,k),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,C),C}function D(){for(let L=0;L<Y;L++)if(X.indexOf(L)===-1)return X.push(L),L;return JJ("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(L){let A=W[L.id],C=L.uniforms,S=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let k=0,z=C.length;k<z;k++){let u=C[k];if(Array.isArray(u))for(let j=0,n=u.length;j<n;j++)R(u[j],k,j,S);else R(u,k,0,S)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function R(L,A,C,S){if(P(L,A,C,S)===!0){let{__offset:k,value:z}=L;if(Array.isArray(z)){let u=0;for(let j=0;j<z.length;j++){let n=z[j],J0=F(n);if(M(n,L.__data,u),typeof n!=="number"&&typeof n!=="boolean"&&!n.isMatrix3&&!ArrayBuffer.isView(n))u+=J0.storage/Float32Array.BYTES_PER_ELEMENT}}else M(z,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,k,L.__data)}}function M(L,A,C){if(typeof L==="number"||typeof L==="boolean")A[0]=L;else if(L.isMatrix3)A[0]=L.elements[0],A[1]=L.elements[1],A[2]=L.elements[2],A[3]=0,A[4]=L.elements[3],A[5]=L.elements[4],A[6]=L.elements[5],A[7]=0,A[8]=L.elements[6],A[9]=L.elements[7],A[10]=L.elements[8],A[11]=0;else if(ArrayBuffer.isView(L))A.set(new L.constructor(L.buffer,L.byteOffset,A.length));else L.toArray(A,C)}function P(L,A,C,S){let k=L.value,z=A+"_"+C;if(S[z]===void 0){if(typeof k==="number"||typeof k==="boolean")S[z]=k;else if(ArrayBuffer.isView(k))S[z]=k.slice();else S[z]=k.clone();return!0}else{let u=S[z];if(typeof k==="number"||typeof k==="boolean"){if(u!==k)return S[z]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(u.equals(k)===!1)return u.copy(k),!0}return!1}function E(L){let A=L.uniforms,C=0,S=16;for(let z=0,u=A.length;z<u;z++){let j=Array.isArray(A[z])?A[z]:[A[z]];for(let n=0,J0=j.length;n<J0;n++){let s=j[n],e=Array.isArray(s.value)?s.value:[s.value];for(let $0=0,d=e.length;$0<d;$0++){let X0=e[$0],q0=F(X0),L0=C%S,y0=L0%q0.boundary,T0=L0+y0;if(C+=y0,T0!==0&&S-T0<q0.storage)C+=S-T0;s.__data=new Float32Array(q0.storage/Float32Array.BYTES_PER_ELEMENT),s.__offset=C,C+=q0.storage}}}let k=C%S;if(k>0)C+=S-k;return L.__size=C,L.__cache={},this}function F(L){let A={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")A.boundary=4,A.storage=4;else if(L.isVector2)A.boundary=8,A.storage=8;else if(L.isVector3||L.isColor)A.boundary=16,A.storage=12;else if(L.isVector4)A.boundary=16,A.storage=16;else if(L.isMatrix3)A.boundary=48,A.storage=48;else if(L.isMatrix4)A.boundary=64,A.storage=64;else if(L.isTexture)r0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))A.boundary=16,A.storage=L.byteLength;else r0("WebGLRenderer: Unsupported uniform value type.",L);return A}function T(L){let A=L.target;A.removeEventListener("dispose",T);let C=X.indexOf(A.__bindingPointIndex);X.splice(C,1),J.deleteBuffer(W[A.id]),delete W[A.id],delete Z[A.id]}function w(){for(let L in W)J.deleteBuffer(W[L]);X=[],W={},Z={}}return{bind:H,update:U,dispose:w}}var IN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),i8=null;function PN(){if(i8===null)i8=new WK(IN,16,16,n9,Z9),i8.name="DFG_LUT",i8.minFilter=G8,i8.magFilter=G8,i8.wrapS=c6,i8.wrapT=c6,i8.generateMipmaps=!1,i8.needsUpdate=!0;return i8}class bK{constructor(J={}){let{canvas:Q=UZ(),context:$=null,depth:K=!0,stencil:W=!1,alpha:Z=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:O=!1,reversedDepthBuffer:D=!1,outputBufferType:G=f8}=J;this.isWebGLRenderer=!0;let R;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=$.getContextAttributes().alpha}else R=Z;let M=G,P=new Set([E$,D$,O$]),E=new Set([f8,B9,J6,A7,G$,F$]),F=new Uint32Array(4),T=new Int32Array(4),w=new g,L=null,A=null,C=[],S=[],k=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=b8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,u=!1,j=null,n=null,J0=null,s=null;this._outputColorSpace=P8;let e=0,$0=0,d=null,X0=-1,q0=null,L0=new jJ,y0=new jJ,T0=null,OJ=new KJ(0),qJ=0,K0=Q.width,N0=Q.height,z0=1,M0=null,u0=null,ZJ=new jJ(0,0,K0,N0),o=new jJ(0,0,K0,N0),Q0=!1,y=new W6,V=!1,f=!1,r=new CJ,b=new g,_=new jJ,F0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},V0=!1;function o0(){return d===null?z0:1}let v=$;function XJ(B,p){return Q.getContext(B,p)}try{let B={alpha:!0,depth:K,stencil:W,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:O};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${FW}`);if(Q.addEventListener("webglcontextlost",a0,!1),Q.addEventListener("webglcontextrestored",BJ,!1),Q.addEventListener("webglcontextcreationerror",kJ,!1),v===null){if(v=XJ("webgl2",B),v===null)if(XJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(B){throw JJ("WebGLRenderer: "+B.message),B}let v0,b0,N,q,I,h,l,Z0,Y0,m,a,D0,E0,G0,O0,p0,l0,e0,x,R0,W0,B0,j0;function H0(){if(v0=new jU(v),v0.init(),W0=new kN(v,v0),b0=new IU(v,v0,J,W0),N=new EN(v,v0),b0.reversedDepthBuffer&&D)N.buffers.depth.setReversed(!0);n=v.createFramebuffer(),J0=v.createFramebuffer(),s=v.createFramebuffer(),q=new hU(v),I=new $N,h=new RN(v,v0,N,I,b0,W0,q),l=new SU(z),Z0=new gY(v),B0=new LU(v,Z0),Y0=new yU(v,Z0,q,B0),m=new fU(v,Y0,Z0,B0,q),e0=new bU(v,b0,h),O0=new PU(I),a=new QN(z,l,v0,b0,B0,O0),D0=new LN(z,I),E0=new WN,G0=new qN(v0),l0=new BU(z,l,N,m,R,Y),p0=new DN(z,m,b0),j0=new zN(v,q,b0,N),x=new zU(v,v0,q),R0=new vU(v,v0,q),q.programs=a.programs,z.capabilities=b0,z.extensions=v0,z.properties=I,z.renderLists=E0,z.shadowMap=p0,z.state=N,z.info=q}if(H0(),M!==f8)k=new gU(M,Q.width,Q.height,X,K,W);let P0=new JX(z,v);this.xr=P0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let B=v0.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=v0.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return z0},this.setPixelRatio=function(B){if(B===void 0)return;z0=B,this.setSize(K0,N0,!1)},this.getSize=function(B){return B.set(K0,N0)},this.setSize=function(B,p,t=!0){if(P0.isPresenting){r0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(K0=B,N0=p,Q.width=Math.floor(B*z0),Q.height=Math.floor(p*z0),t===!0)Q.style.width=B+"px",Q.style.height=p+"px";if(k!==null)k.setSize(Q.width,Q.height);this.setViewport(0,0,B,p)},this.getDrawingBufferSize=function(B){return B.set(K0*z0,N0*z0).floor()},this.setDrawingBufferSize=function(B,p,t){K0=B,N0=p,z0=t,Q.width=Math.floor(B*t),Q.height=Math.floor(p*t),this.setViewport(0,0,B,p)},this.setEffects=function(B){if(M===f8){JJ("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let p=0;p<B.length;p++)if(B[p].isOutputPass===!0){r0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(L0)},this.getViewport=function(B){return B.copy(ZJ)},this.setViewport=function(B,p,t,i){if(B.isVector4)ZJ.set(B.x,B.y,B.z,B.w);else ZJ.set(B,p,t,i);N.viewport(L0.copy(ZJ).multiplyScalar(z0).round())},this.getScissor=function(B){return B.copy(o)},this.setScissor=function(B,p,t,i){if(B.isVector4)o.set(B.x,B.y,B.z,B.w);else o.set(B,p,t,i);N.scissor(y0.copy(o).multiplyScalar(z0).round())},this.getScissorTest=function(){return Q0},this.setScissorTest=function(B){N.setScissorTest(Q0=B)},this.setOpaqueSort=function(B){M0=B},this.setTransparentSort=function(B){u0=B},this.getClearColor=function(B){return B.copy(l0.getClearColor())},this.setClearColor=function(){l0.setClearColor(...arguments)},this.getClearAlpha=function(){return l0.getClearAlpha()},this.setClearAlpha=function(){l0.setClearAlpha(...arguments)},this.clear=function(B=!0,p=!0,t=!0){let i=0;if(B){let c=!1;if(d!==null){let A0=d.texture.format;c=P.has(A0)}if(c){let A0=d.texture.type,h0=E.has(A0),w0=l0.getClearColor(),x0=l0.getClearAlpha(),c0=w0.r,QJ=w0.g,$J=w0.b;if(h0)F[0]=c0,F[1]=QJ,F[2]=$J,F[3]=x0,v.clearBufferuiv(v.COLOR,0,F);else T[0]=c0,T[1]=QJ,T[2]=$J,T[3]=x0,v.clearBufferiv(v.COLOR,0,T)}else i|=v.COLOR_BUFFER_BIT}if(p)i|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(t)i|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(i!==0)v.clear(i)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),j=B},this.dispose=function(){Q.removeEventListener("webglcontextlost",a0,!1),Q.removeEventListener("webglcontextrestored",BJ,!1),Q.removeEventListener("webglcontextcreationerror",kJ,!1),l0.dispose(),E0.dispose(),G0.dispose(),I.dispose(),l.dispose(),m.dispose(),B0.dispose(),j0.dispose(),a.dispose(),P0.dispose(),P0.removeEventListener("sessionstart",p8),P0.removeEventListener("sessionend",g7),m8.stop()};function a0(B){B.preventDefault(),t$("WebGLRenderer: Context Lost."),u=!0}function BJ(){t$("WebGLRenderer: Context Restored."),u=!1;let B=q.autoReset,p=p0.enabled,t=p0.autoUpdate,i=p0.needsUpdate,c=p0.type;H0(),q.autoReset=B,p0.enabled=p,p0.autoUpdate=t,p0.needsUpdate=i,p0.type=c}function kJ(B){JJ("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function SJ(B){let p=B.target;p.removeEventListener("dispose",SJ),T8(p)}function T8(B){k6(B),I.remove(B)}function k6(B){let p=I.get(B).programs;if(p!==void 0){if(p.forEach(function(t){a.releaseProgram(t)}),B.isShaderMaterial)a.releaseShaderCache(B)}}this.renderBufferDirect=function(B,p,t,i,c,A0){if(p===null)p=F0;let h0=c.isMesh&&c.matrixWorld.determinantAffine()<0,w0=q9(B,p,t,i,c);N.setMaterial(i,h0);let x0=t.index,c0=1;if(i.wireframe===!0){if(x0=Y0.getWireframeAttribute(t),x0===void 0)return;c0=2}let QJ=t.drawRange,$J=t.attributes.position,g0=QJ.start*c0,NJ=(QJ.start+QJ.count)*c0;if(A0!==null)g0=Math.max(g0,A0.start*c0),NJ=Math.min(NJ,(A0.start+A0.count)*c0);if(x0!==null)g0=Math.max(g0,0),NJ=Math.min(NJ,x0.count);else if($J!==void 0&&$J!==null)g0=Math.max(g0,0),NJ=Math.min(NJ,$J.count);let PJ=NJ-g0;if(PJ<0||PJ===1/0)return;B0.setup(c,i,w0,t,x0);let AJ,DJ=x;if(x0!==null)AJ=Z0.get(x0),DJ=R0,DJ.setIndex(AJ);if(c.isMesh)if(i.wireframe===!0)N.setLineWidth(i.wireframeLinewidth*o0()),DJ.setMode(v.LINES);else DJ.setMode(v.TRIANGLES);else if(c.isLine){let hJ=i.linewidth;if(hJ===void 0)hJ=1;if(N.setLineWidth(hJ*o0()),c.isLineSegments)DJ.setMode(v.LINES);else if(c.isLineLoop)DJ.setMode(v.LINE_LOOP);else DJ.setMode(v.LINE_STRIP)}else if(c.isPoints)DJ.setMode(v.POINTS);else if(c.isSprite)DJ.setMode(v.TRIANGLES);if(c.isBatchedMesh)if(!v0.get("WEBGL_multi_draw")){let{_multiDrawStarts:hJ,_multiDrawCounts:S0,_multiDrawCount:iJ}=c,GJ=x0?Z0.get(x0).bytesPerElement:1,lJ=I.get(i).currentProgram.getUniforms();for(let D8=0;D8<iJ;D8++)lJ.setValue(v,"_gl_DrawID",D8),DJ.render(hJ[D8]/GJ,S0[D8])}else DJ.renderMultiDraw(c._multiDrawStarts,c._multiDrawCounts,c._multiDrawCount);else if(c.isInstancedMesh)DJ.renderInstances(g0,PJ,c.count);else if(t.isInstancedBufferGeometry){let hJ=t._maxInstanceCount!==void 0?t._maxInstanceCount:1/0,S0=Math.min(t.instanceCount,hJ);DJ.renderInstances(g0,PJ,S0)}else DJ.render(g0,PJ)};function f7(B,p,t){if(B.transparent===!0&&B.side===LJ&&B.forceSinglePass===!1)B.side=$8,B.needsUpdate=!0,U9(B,p,t),B.side=z7,B.needsUpdate=!0,U9(B,p,t),B.side=LJ;else U9(B,p,t)}this.compile=function(B,p,t=null){if(t===null)t=B;if(A=G0.get(t),A.init(p),S.push(A),t.traverseVisible(function(c){if(c.isLight&&c.layers.test(p.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}}),B!==t)B.traverseVisible(function(c){if(c.isLight&&c.layers.test(p.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}});A.setupLights();let i=new Set;return B.traverse(function(c){if(!(c.isMesh||c.isPoints||c.isLine||c.isSprite))return;let A0=c.material;if(A0)if(Array.isArray(A0))for(let h0=0;h0<A0.length;h0++){let w0=A0[h0];f7(w0,t,c),i.add(w0)}else f7(A0,t,c),i.add(A0)}),A=S.pop(),i},this.compileAsync=function(B,p,t=null){let i=this.compile(B,p,t);return new Promise((c)=>{function A0(){if(i.forEach(function(h0){if(I.get(h0).currentProgram.isReady())i.delete(h0)}),i.size===0){c(B);return}setTimeout(A0,10)}if(v0.get("KHR_parallel_shader_compile")!==null)A0();else setTimeout(A0,10)})};let S9=null;function x7(B){if(S9)S9(B)}function p8(){m8.stop()}function g7(){m8.start()}let m8=new dZ;if(m8.setAnimationLoop(x7),typeof self<"u")m8.setContext(self);this.setAnimationLoop=function(B){S9=B,P0.setAnimationLoop(B),B===null?m8.stop():m8.start()},P0.addEventListener("sessionstart",p8),P0.addEventListener("sessionend",g7),this.render=function(B,p){if(p!==void 0&&p.isCamera!==!0){JJ("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;if(j!==null)j.renderStart(B,p);let t=P0.enabled===!0&&P0.isPresenting===!0,i=k!==null&&(d===null||t)&&k.begin(z,d);if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(p.parent===null&&p.matrixWorldAutoUpdate===!0)p.updateMatrixWorld();if(P0.enabled===!0&&P0.isPresenting===!0&&(k===null||k.isCompositing()===!1)){if(P0.cameraAutoUpdate===!0)P0.updateCamera(p);p=P0.getCamera()}if(B.isScene===!0)B.onBeforeRender(z,B,p,d);if(A=G0.get(B,S.length),A.init(p),A.state.textureUnits=h.getTextureUnits(),S.push(A),r.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),y.setFromProjectionMatrix(r,a$,p.reversedDepth),f=this.localClippingEnabled,V=O0.init(this.clippingPlanes,f),L=E0.get(B,C.length),L.init(),C.push(L),P0.enabled===!0&&P0.isPresenting===!0){let h0=z.xr.getDepthSensingMesh();if(h0!==null)Z7(h0,p,-1/0,z.sortObjects)}if(Z7(B,p,0,z.sortObjects),L.finish(),z.sortObjects===!0)L.sort(M0,u0,p.reversedDepth);if(V0=P0.enabled===!1||P0.isPresenting===!1||P0.hasDepthSensing()===!1,V0)l0.addToRenderList(L,B);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(V===!0)O0.beginShadows();let c=A.state.shadowsArray;if(p0.render(c,B,p),V===!0)O0.endShadows();if((i&&k.hasRenderPass())===!1){let{opaque:h0,transmissive:w0}=L;if(A.setupLights(),p.isArrayCamera){let x0=p.cameras;if(w0.length>0)for(let c0=0,QJ=x0.length;c0<QJ;c0++){let $J=x0[c0];y9(h0,w0,B,$J)}if(V0)l0.render(B);for(let c0=0,QJ=x0.length;c0<QJ;c0++){let $J=x0[c0];j9(L,B,$J,$J.viewport)}}else{if(w0.length>0)y9(h0,w0,B,p);if(V0)l0.render(B);j9(L,B,p)}}if(d!==null&&$0===0)h.updateMultisampleRenderTarget(d),h.updateRenderTargetMipmap(d);if(i)k.end(z);if(B.isScene===!0)B.onAfterRender(z,B,p);if(B0.resetDefaultState(),X0=-1,q0=null,S.pop(),S.length>0){if(A=S[S.length-1],h.setTextureUnits(A.state.textureUnits),V===!0)O0.setGlobalState(z.clippingPlanes,A.state.camera)}else A=null;if(C.pop(),C.length>0)L=C[C.length-1];else L=null;if(j!==null)j.renderEnd()};function Z7(B,p,t,i){if(B.visible===!1)return;if(B.layers.test(p.layers)){if(B.isGroup)t=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(p)}else if(B.isLightProbeGrid)A.pushLightProbeGrid(B);else if(B.isLight){if(A.pushLight(B),B.castShadow)A.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||y.intersectsSprite(B)){if(i)_.setFromMatrixPosition(B.matrixWorld).applyMatrix4(r);let h0=m.update(B),w0=B.material;if(w0.visible)L.push(B,h0,w0,t,_.z,null)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||y.intersectsObject(B)){let h0=m.update(B),w0=B.material;if(i){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();_.copy(B.boundingSphere.center)}else{if(h0.boundingSphere===null)h0.computeBoundingSphere();_.copy(h0.boundingSphere.center)}_.applyMatrix4(B.matrixWorld).applyMatrix4(r)}if(Array.isArray(w0)){let x0=h0.groups;for(let c0=0,QJ=x0.length;c0<QJ;c0++){let $J=x0[c0],g0=w0[$J.materialIndex];if(g0&&g0.visible)L.push(B,h0,g0,t,_.z,$J)}}else if(w0.visible)L.push(B,h0,w0,t,_.z,null)}}}let A0=B.children;for(let h0=0,w0=A0.length;h0<w0;h0++)Z7(A0[h0],p,t,i)}function j9(B,p,t,i){let{opaque:c,transmissive:A0,transparent:h0}=B;if(A.setupLightsView(t),V===!0)O0.setGlobalState(z.clippingPlanes,t);if(i)N.viewport(L0.copy(i));if(c.length>0)X7(c,p,t);if(A0.length>0)X7(A0,p,t);if(h0.length>0)X7(h0,p,t);N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function y9(B,p,t,i){if((t.isScene===!0?t.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[i.id]===void 0){let g0=v0.has("EXT_color_buffer_half_float")||v0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[i.id]=new _8(1,1,{generateMipmaps:!0,type:g0?Z9:f8,minFilter:u9,samples:Math.max(4,b0.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:FJ.workingColorSpace})}let A0=A.state.transmissionRenderTarget[i.id],h0=i.viewport||L0;A0.setSize(h0.z*z.transmissionResolutionScale,h0.w*z.transmissionResolutionScale);let w0=z.getRenderTarget(),x0=z.getActiveCubeFace(),c0=z.getActiveMipmapLevel();if(z.setRenderTarget(A0),z.getClearColor(OJ),qJ=z.getClearAlpha(),qJ<1)z.setClearColor(16777215,0.5);if(z.clear(),V0)l0.render(t);let QJ=z.toneMapping;z.toneMapping=b8;let $J=i.viewport;if(i.viewport!==void 0)i.viewport=void 0;if(A.setupLightsView(i),V===!0)O0.setGlobalState(z.clippingPlanes,i);if(X7(B,t,i),h.updateMultisampleRenderTarget(A0),h.updateRenderTargetMipmap(A0),v0.has("WEBGL_multisampled_render_to_texture")===!1){let g0=!1;for(let NJ=0,PJ=p.length;NJ<PJ;NJ++){let AJ=p[NJ],{object:DJ,geometry:hJ,material:S0,group:iJ}=AJ;if(S0.side===LJ&&DJ.layers.test(i.layers)){let GJ=S0.side;S0.side=$8,S0.needsUpdate=!0,M6(DJ,t,i,hJ,S0,iJ),S0.side=GJ,S0.needsUpdate=!0,g0=!0}}if(g0===!0)h.updateMultisampleRenderTarget(A0),h.updateRenderTargetMipmap(A0)}if(z.setRenderTarget(w0,x0,c0),z.setClearColor(OJ,qJ),$J!==void 0)i.viewport=$J;z.toneMapping=QJ}function X7(B,p,t){let i=p.isScene===!0?p.overrideMaterial:null;for(let c=0,A0=B.length;c<A0;c++){let h0=B[c],{object:w0,geometry:x0,group:c0}=h0,QJ=h0.material;if(QJ.allowOverride===!0&&i!==null)QJ=i;if(w0.layers.test(t.layers))M6(w0,p,t,x0,QJ,c0)}}function M6(B,p,t,i,c,A0){if(B.onBeforeRender(z,p,t,i,c,A0),B.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),c.onBeforeRender(z,p,t,i,B,A0),c.transparent===!0&&c.side===LJ&&c.forceSinglePass===!1)c.side=$8,c.needsUpdate=!0,z.renderBufferDirect(t,p,i,c,B,A0),c.side=z7,c.needsUpdate=!0,z.renderBufferDirect(t,p,i,c,B,A0),c.side=LJ;else z.renderBufferDirect(t,p,i,c,B,A0);B.onAfterRender(z,p,t,i,c,A0)}function U9(B,p,t){if(p.isScene!==!0)p=F0;let i=I.get(B),c=A.state.lights,A0=A.state.shadowsArray,h0=c.state.version,w0=a.getParameters(B,c.state,A0,p,t,A.state.lightProbeGridArray),x0=a.getProgramCacheKey(w0),c0=i.programs;i.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?p.environment:null,i.fog=p.fog;let QJ=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;if(i.envMap=l.get(B.envMap||i.environment,QJ),i.envMapRotation=i.environment!==null&&B.envMap===null?p.environmentRotation:B.envMapRotation,c0===void 0)B.addEventListener("dispose",SJ),c0=new Map,i.programs=c0;let $J=c0.get(x0);if($J!==void 0){if(i.currentProgram===$J&&i.lightsStateVersion===h0)return V6(B,w0),$J}else{if(w0.uniforms=a.getUniforms(B),j!==null&&B.isNodeMaterial)j.build(B,t,w0);B.onBeforeCompile(w0,z),$J=a.acquireProgram(w0,x0),c0.set(x0,$J),i.uniforms=w0.uniforms}let g0=i.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)g0.clippingPlanes=O0.uniform;if(V6(B,w0),i.needsLights=m7(B),i.lightsStateVersion=h0,i.needsLights)g0.ambientLightColor.value=c.state.ambient,g0.lightProbe.value=c.state.probe,g0.directionalLights.value=c.state.directional,g0.directionalLightShadows.value=c.state.directionalShadow,g0.spotLights.value=c.state.spot,g0.spotLightShadows.value=c.state.spotShadow,g0.rectAreaLights.value=c.state.rectArea,g0.ltc_1.value=c.state.rectAreaLTC1,g0.ltc_2.value=c.state.rectAreaLTC2,g0.pointLights.value=c.state.point,g0.pointLightShadows.value=c.state.pointShadow,g0.hemisphereLights.value=c.state.hemi,g0.directionalShadowMatrix.value=c.state.directionalShadowMatrix,g0.spotLightMatrix.value=c.state.spotLightMatrix,g0.spotLightMap.value=c.state.spotLightMap,g0.pointShadowMatrix.value=c.state.pointShadowMatrix;return i.lightProbeGrid=A.state.lightProbeGridArray.length>0,i.currentProgram=$J,i.uniformsList=null,$J}function p7(B){if(B.uniformsList===null){let p=B.currentProgram.getUniforms();B.uniformsList=q6.seqWithValue(p.seq,B.uniforms)}return B.uniformsList}function V6(B,p){let t=I.get(B);t.outputColorSpace=p.outputColorSpace,t.batching=p.batching,t.batchingColor=p.batchingColor,t.instancing=p.instancing,t.instancingColor=p.instancingColor,t.instancingMorph=p.instancingMorph,t.skinning=p.skinning,t.morphTargets=p.morphTargets,t.morphNormals=p.morphNormals,t.morphColors=p.morphColors,t.morphTargetsCount=p.morphTargetsCount,t.numClippingPlanes=p.numClippingPlanes,t.numIntersection=p.numClipIntersection,t.vertexAlphas=p.vertexAlphas,t.vertexTangents=p.vertexTangents,t.toneMapping=p.toneMapping}function wQ(B,p){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;w.setFromMatrixPosition(p.matrixWorld);for(let t=0,i=B.length;t<i;t++){let c=B[t];if(c.texture!==null&&c.boundingBox.containsPoint(w))return c}return null}function q9(B,p,t,i,c){if(p.isScene!==!0)p=F0;h.resetTextureUnits();let A0=p.fog,h0=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?p.environment:null,w0=d===null?z.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:FJ.workingColorSpace,x0=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,c0=l.get(i.envMap||h0,x0),QJ=i.vertexColors===!0&&!!t.attributes.color&&t.attributes.color.itemSize===4,$J=!!t.attributes.tangent&&(!!i.normalMap||i.anisotropy>0),g0=!!t.morphAttributes.position,NJ=!!t.morphAttributes.normal,PJ=!!t.morphAttributes.color,AJ=b8;if(i.toneMapped){if(d===null||d.isXRRenderTarget===!0)AJ=z.toneMapping}let DJ=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,hJ=DJ!==void 0?DJ.length:0,S0=I.get(i),iJ=A.state.lights;if(V===!0){if(f===!0||B!==q0){let MJ=B===q0&&i.id===X0;O0.setState(i,B,MJ)}}let GJ=!1;if(i.version===S0.__version){if(S0.needsLights&&S0.lightsStateVersion!==iJ.state.version)GJ=!0;else if(S0.outputColorSpace!==w0)GJ=!0;else if(c.isBatchedMesh&&S0.batching===!1)GJ=!0;else if(!c.isBatchedMesh&&S0.batching===!0)GJ=!0;else if(c.isBatchedMesh&&S0.batchingColor===!0&&c.colorTexture===null)GJ=!0;else if(c.isBatchedMesh&&S0.batchingColor===!1&&c.colorTexture!==null)GJ=!0;else if(c.isInstancedMesh&&S0.instancing===!1)GJ=!0;else if(!c.isInstancedMesh&&S0.instancing===!0)GJ=!0;else if(c.isSkinnedMesh&&S0.skinning===!1)GJ=!0;else if(!c.isSkinnedMesh&&S0.skinning===!0)GJ=!0;else if(c.isInstancedMesh&&S0.instancingColor===!0&&c.instanceColor===null)GJ=!0;else if(c.isInstancedMesh&&S0.instancingColor===!1&&c.instanceColor!==null)GJ=!0;else if(c.isInstancedMesh&&S0.instancingMorph===!0&&c.morphTexture===null)GJ=!0;else if(c.isInstancedMesh&&S0.instancingMorph===!1&&c.morphTexture!==null)GJ=!0;else if(S0.envMap!==c0)GJ=!0;else if(i.fog===!0&&S0.fog!==A0)GJ=!0;else if(S0.numClippingPlanes!==void 0&&(S0.numClippingPlanes!==O0.numPlanes||S0.numIntersection!==O0.numIntersection))GJ=!0;else if(S0.vertexAlphas!==QJ)GJ=!0;else if(S0.vertexTangents!==$J)GJ=!0;else if(S0.morphTargets!==g0)GJ=!0;else if(S0.morphNormals!==NJ)GJ=!0;else if(S0.morphColors!==PJ)GJ=!0;else if(S0.toneMapping!==AJ)GJ=!0;else if(S0.morphTargetsCount!==hJ)GJ=!0;else if(!!S0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)GJ=!0}else GJ=!0,S0.__version=i.version;let lJ=S0.currentProgram;if(GJ===!0){if(lJ=U9(i,p,c),j&&i.isNodeMaterial)j.onUpdateProgram(i,lJ,S0)}let D8=!1,tJ=!1,Z8=!1,EJ=lJ.getUniforms(),yJ=S0.uniforms;if(N.useProgram(lJ.program))D8=!0,tJ=!0,Z8=!0;if(i.id!==X0)X0=i.id,tJ=!0;if(S0.needsLights){let MJ=wQ(A.state.lightProbeGridArray,c);if(S0.lightProbeGrid!==MJ)S0.lightProbeGrid=MJ,tJ=!0}if(D8||q0!==B){if(N.buffers.depth.getReversed()&&B.reversedDepth!==!0)B._reversedDepth=!0,B.updateProjectionMatrix();EJ.setValue(v,"projectionMatrix",B.projectionMatrix),EJ.setValue(v,"viewMatrix",B.matrixWorldInverse);let d8=EJ.map.cameraPosition;if(d8!==void 0)d8.setValue(v,b.setFromMatrixPosition(B.matrixWorld));if(b0.logarithmicDepthBuffer)EJ.setValue(v,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial)EJ.setValue(v,"isOrthographic",B.isOrthographicCamera===!0);if(q0!==B)q0=B,tJ=!0,Z8=!0}if(S0.needsLights){if(iJ.state.directionalShadowMap.length>0)EJ.setValue(v,"directionalShadowMap",iJ.state.directionalShadowMap,h);if(iJ.state.spotShadowMap.length>0)EJ.setValue(v,"spotShadowMap",iJ.state.spotShadowMap,h);if(iJ.state.pointShadowMap.length>0)EJ.setValue(v,"pointShadowMap",iJ.state.pointShadowMap,h)}if(c.isSkinnedMesh){EJ.setOptional(v,c,"bindMatrix"),EJ.setOptional(v,c,"bindMatrixInverse");let MJ=c.skeleton;if(MJ){if(MJ.boneTexture===null)MJ.computeBoneTexture();EJ.setValue(v,"boneTexture",MJ.boneTexture,h)}}if(c.isBatchedMesh){if(EJ.setOptional(v,c,"batchingTexture"),EJ.setValue(v,"batchingTexture",c._matricesTexture,h),EJ.setOptional(v,c,"batchingIdTexture"),EJ.setValue(v,"batchingIdTexture",c._indirectTexture,h),EJ.setOptional(v,c,"batchingColorTexture"),c._colorsTexture!==null)EJ.setValue(v,"batchingColorTexture",c._colorsTexture,h)}let S8=t.morphAttributes;if(S8.position!==void 0||S8.normal!==void 0||S8.color!==void 0)e0.update(c,t,lJ);if(tJ||S0.receiveShadow!==c.receiveShadow)S0.receiveShadow=c.receiveShadow,EJ.setValue(v,"receiveShadow",c.receiveShadow);if((i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial)&&i.envMap===null&&p.environment!==null)yJ.envMapIntensity.value=p.environmentIntensity;if(yJ.dfgLUT!==void 0)yJ.dfgLUT.value=PN();if(tJ){if(EJ.setValue(v,"toneMappingExposure",z.toneMappingExposure),S0.needsLights)CQ(yJ,Z8);if(A0&&i.fog===!0)D0.refreshFogUniforms(yJ,A0);if(D0.refreshMaterialUniforms(yJ,i,z0,N0,A.state.transmissionRenderTarget[B.id]),S0.needsLights&&S0.lightProbeGrid){let MJ=S0.lightProbeGrid;yJ.probesSH.value=MJ.texture,yJ.probesMin.value.copy(MJ.boundingBox.min),yJ.probesMax.value.copy(MJ.boundingBox.max),yJ.probesResolution.value.copy(MJ.resolution)}q6.upload(v,p7(S0),yJ,h)}if(i.isShaderMaterial&&i.uniformsNeedUpdate===!0)q6.upload(v,p7(S0),yJ,h),i.uniformsNeedUpdate=!1;if(i.isSpriteMaterial)EJ.setValue(v,"center",c.center);if(EJ.setValue(v,"modelViewMatrix",c.modelViewMatrix),EJ.setValue(v,"normalMatrix",c.normalMatrix),EJ.setValue(v,"modelMatrix",c.matrixWorld),i.uniformsGroups!==void 0){let MJ=i.uniformsGroups;for(let d8=0,N9=MJ.length;d8<N9;d8++){let v9=MJ[d8];j0.update(v9,lJ),j0.bind(v9,lJ)}}return lJ}function CQ(B,p){B.ambientLightColor.needsUpdate=p,B.lightProbe.needsUpdate=p,B.directionalLights.needsUpdate=p,B.directionalLightShadows.needsUpdate=p,B.pointLights.needsUpdate=p,B.pointLightShadows.needsUpdate=p,B.spotLights.needsUpdate=p,B.spotLightShadows.needsUpdate=p,B.rectAreaLights.needsUpdate=p,B.hemisphereLights.needsUpdate=p}function m7(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}if(this.getActiveCubeFace=function(){return e},this.getActiveMipmapLevel=function(){return $0},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(B,p,t){let i=I.get(B);if(i.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,i.__autoAllocateDepthBuffer===!1)i.__useRenderToTexture=!1;I.get(B.texture).__webglTexture=p,I.get(B.depthTexture).__webglTexture=i.__autoAllocateDepthBuffer?void 0:t,i.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,p){let t=I.get(B);t.__webglFramebuffer=p,t.__useDefaultFramebuffer=p===void 0},this.setRenderTarget=function(B,p=0,t=0){d=B,e=p,$0=t;let i=null,c=!1,A0=!1;if(B){let w0=I.get(B);if(w0.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(v.FRAMEBUFFER,w0.__webglFramebuffer),L0.copy(B.viewport),y0.copy(B.scissor),T0=B.scissorTest,N.viewport(L0),N.scissor(y0),N.setScissorTest(T0),X0=-1;return}else if(w0.__webglFramebuffer===void 0)h.setupRenderTarget(B);else if(w0.__hasExternalTextures)h.rebindTextures(B,I.get(B.texture).__webglTexture,I.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let QJ=B.depthTexture;if(w0.__boundDepthTexture!==QJ){if(QJ!==null&&I.has(QJ)&&(B.width!==QJ.image.width||B.height!==QJ.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");h.setupDepthRenderbuffer(B)}}let x0=B.texture;if(x0.isData3DTexture||x0.isDataArrayTexture||x0.isCompressedArrayTexture)A0=!0;let c0=I.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(c0[p]))i=c0[p][t];else i=c0[p];c=!0}else if(B.samples>0&&h.useMultisampledRTT(B)===!1)i=I.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(c0))i=c0[t];else i=c0;L0.copy(B.viewport),y0.copy(B.scissor),T0=B.scissorTest}else L0.copy(ZJ).multiplyScalar(z0).floor(),y0.copy(o).multiplyScalar(z0).floor(),T0=Q0;if(t!==0)i=n;if(N.bindFramebuffer(v.FRAMEBUFFER,i))N.drawBuffers(B,i);if(N.viewport(L0),N.scissor(y0),N.setScissorTest(T0),c){let w0=I.get(B.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+p,w0.__webglTexture,t)}else if(A0){let w0=p;for(let x0=0;x0<B.textures.length;x0++){let c0=I.get(B.textures[x0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+x0,c0.__webglTexture,t,w0)}}else if(B!==null&&t!==0){let w0=I.get(B.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,w0.__webglTexture,t)}X0=-1},this.readRenderTargetPixels=function(B,p,t,i,c,A0,h0,w0=0){if(!(B&&B.isWebGLRenderTarget)){JJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let x0=I.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&h0!==void 0)x0=x0[h0];if(x0){N.bindFramebuffer(v.FRAMEBUFFER,x0);try{let c0=B.textures[w0],QJ=c0.format,$J=c0.type;if(B.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+w0);if(!b0.textureFormatReadable(QJ)){JJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b0.textureTypeReadable($J)){JJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(p>=0&&p<=B.width-i&&(t>=0&&t<=B.height-c))v.readPixels(p,t,i,c,W0.convert(QJ),W0.convert($J),A0)}finally{let c0=d!==null?I.get(d).__webglFramebuffer:null;N.bindFramebuffer(v.FRAMEBUFFER,c0)}}},this.readRenderTargetPixelsAsync=async function(B,p,t,i,c,A0,h0,w0=0){if(!(B&&B.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let x0=I.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&h0!==void 0)x0=x0[h0];if(x0)if(p>=0&&p<=B.width-i&&(t>=0&&t<=B.height-c)){N.bindFramebuffer(v.FRAMEBUFFER,x0);let c0=B.textures[w0],QJ=c0.format,$J=c0.type;if(B.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+w0);if(!b0.textureFormatReadable(QJ))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b0.textureTypeReadable($J))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let g0=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,g0),v.bufferData(v.PIXEL_PACK_BUFFER,A0.byteLength,v.STREAM_READ),v.readPixels(p,t,i,c,W0.convert(QJ),W0.convert($J),0);let NJ=d!==null?I.get(d).__webglFramebuffer:null;N.bindFramebuffer(v.FRAMEBUFFER,NJ);let PJ=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await NZ(v,PJ,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,g0),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,A0),v.deleteBuffer(g0),v.deleteSync(PJ),A0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,p=null,t=0){let i=Math.pow(2,-t),c=Math.floor(B.image.width*i),A0=Math.floor(B.image.height*i),h0=p!==null?p.x:0,w0=p!==null?p.y:0;h.setTexture2D(B,0),v.copyTexSubImage2D(v.TEXTURE_2D,t,0,0,h0,w0,c,A0),N.unbindTexture()},this.copyTextureToTexture=function(B,p,t=null,i=null,c=0,A0=0){let h0,w0,x0,c0,QJ,$J,g0,NJ,PJ,AJ=B.isCompressedTexture?B.mipmaps[A0]:B.image;if(t!==null)h0=t.max.x-t.min.x,w0=t.max.y-t.min.y,x0=t.isBox3?t.max.z-t.min.z:1,c0=t.min.x,QJ=t.min.y,$J=t.isBox3?t.min.z:0;else{let yJ=Math.pow(2,-c);if(h0=Math.floor(AJ.width*yJ),w0=Math.floor(AJ.height*yJ),B.isDataArrayTexture)x0=AJ.depth;else if(B.isData3DTexture)x0=Math.floor(AJ.depth*yJ);else x0=1;c0=0,QJ=0,$J=0}if(i!==null)g0=i.x,NJ=i.y,PJ=i.z;else g0=0,NJ=0,PJ=0;let DJ=W0.convert(p.format),hJ=W0.convert(p.type),S0;if(p.isData3DTexture)h.setTexture3D(p,0),S0=v.TEXTURE_3D;else if(p.isDataArrayTexture||p.isCompressedArrayTexture)h.setTexture2DArray(p,0),S0=v.TEXTURE_2D_ARRAY;else h.setTexture2D(p,0),S0=v.TEXTURE_2D;N.activeTexture(v.TEXTURE0),N.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,p.flipY),N.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),N.pixelStorei(v.UNPACK_ALIGNMENT,p.unpackAlignment);let iJ=N.getParameter(v.UNPACK_ROW_LENGTH),GJ=N.getParameter(v.UNPACK_IMAGE_HEIGHT),lJ=N.getParameter(v.UNPACK_SKIP_PIXELS),D8=N.getParameter(v.UNPACK_SKIP_ROWS),tJ=N.getParameter(v.UNPACK_SKIP_IMAGES);N.pixelStorei(v.UNPACK_ROW_LENGTH,AJ.width),N.pixelStorei(v.UNPACK_IMAGE_HEIGHT,AJ.height),N.pixelStorei(v.UNPACK_SKIP_PIXELS,c0),N.pixelStorei(v.UNPACK_SKIP_ROWS,QJ),N.pixelStorei(v.UNPACK_SKIP_IMAGES,$J);let Z8=B.isDataArrayTexture||B.isData3DTexture,EJ=p.isDataArrayTexture||p.isData3DTexture;if(B.isDepthTexture){let yJ=I.get(B),S8=I.get(p),MJ=I.get(yJ.__renderTarget),d8=I.get(S8.__renderTarget);N.bindFramebuffer(v.READ_FRAMEBUFFER,MJ.__webglFramebuffer),N.bindFramebuffer(v.DRAW_FRAMEBUFFER,d8.__webglFramebuffer);for(let N9=0;N9<x0;N9++){if(Z8)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,I.get(B).__webglTexture,c,$J+N9),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,I.get(p).__webglTexture,A0,PJ+N9);v.blitFramebuffer(c0,QJ,h0,w0,g0,NJ,h0,w0,v.DEPTH_BUFFER_BIT,v.NEAREST)}N.bindFramebuffer(v.READ_FRAMEBUFFER,null),N.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(c!==0||B.isRenderTargetTexture||I.has(B)){let yJ=I.get(B),S8=I.get(p);N.bindFramebuffer(v.READ_FRAMEBUFFER,J0),N.bindFramebuffer(v.DRAW_FRAMEBUFFER,s);for(let MJ=0;MJ<x0;MJ++){if(Z8)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,yJ.__webglTexture,c,$J+MJ);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,yJ.__webglTexture,c);if(EJ)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,S8.__webglTexture,A0,PJ+MJ);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,S8.__webglTexture,A0);if(c!==0)v.blitFramebuffer(c0,QJ,h0,w0,g0,NJ,h0,w0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(EJ)v.copyTexSubImage3D(S0,A0,g0,NJ,PJ+MJ,c0,QJ,h0,w0);else v.copyTexSubImage2D(S0,A0,g0,NJ,c0,QJ,h0,w0)}N.bindFramebuffer(v.READ_FRAMEBUFFER,null),N.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(EJ)if(B.isDataTexture||B.isData3DTexture)v.texSubImage3D(S0,A0,g0,NJ,PJ,h0,w0,x0,DJ,hJ,AJ.data);else if(p.isCompressedArrayTexture)v.compressedTexSubImage3D(S0,A0,g0,NJ,PJ,h0,w0,x0,DJ,AJ.data);else v.texSubImage3D(S0,A0,g0,NJ,PJ,h0,w0,x0,DJ,hJ,AJ);else if(B.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,A0,g0,NJ,h0,w0,DJ,hJ,AJ.data);else if(B.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,A0,g0,NJ,AJ.width,AJ.height,DJ,AJ.data);else v.texSubImage2D(v.TEXTURE_2D,A0,g0,NJ,h0,w0,DJ,hJ,AJ);if(N.pixelStorei(v.UNPACK_ROW_LENGTH,iJ),N.pixelStorei(v.UNPACK_IMAGE_HEIGHT,GJ),N.pixelStorei(v.UNPACK_SKIP_PIXELS,lJ),N.pixelStorei(v.UNPACK_SKIP_ROWS,D8),N.pixelStorei(v.UNPACK_SKIP_IMAGES,tJ),A0===0&&p.generateMipmaps)v.generateMipmap(S0);N.unbindTexture()},this.initRenderTarget=function(B){if(I.get(B).__webglFramebuffer===void 0)h.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)h.setTextureCube(B,0);else if(B.isData3DTexture)h.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)h.setTexture2DArray(B,0);else h.setTexture2D(B,0);N.unbindTexture()},this.resetState=function(){e=0,$0=0,d=null,N.reset(),B0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return a$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=FJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=FJ._getUnpackColorSpace()}}var $X={type:"change"},xK={type:"start"},WX={type:"end"},MQ=new C7,KX=new h8,AN=Math.cos(70*JK.DEG2RAD),dJ=new g,O8=2*Math.PI,VJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fK=0.000001;class gK extends FQ{constructor(J,Q=null){super(J,Q);if(this.state=VJ.NONE,this.target=new g,this.cursor=new g,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:k9.ROTATE,MIDDLE:k9.DOLLY,RIGHT:k9.PAN},this.touches={ONE:M9.ROTATE,TWO:M9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new g,this._lastQuaternion=new A8,this._lastTargetPosition=new g,this._quat=new A8().setFromUnitVectors(J.up,new g(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new X6,this._sphericalDelta=new X6,this._scale=1,this._panOffset=new g,this._rotateStart=new i0,this._rotateEnd=new i0,this._rotateDelta=new i0,this._panStart=new i0,this._panEnd=new i0,this._panDelta=new i0,this._dollyStart=new i0,this._dollyEnd=new i0,this._dollyDelta=new i0,this._dollyDirection=new g,this._mouse=new i0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wN.bind(this),this._onPointerDown=_N.bind(this),this._onPointerUp=CN.bind(this),this._onContextMenu=bN.bind(this),this._onMouseWheel=jN.bind(this),this._onKeyDown=yN.bind(this),this._onTouchStart=vN.bind(this),this._onTouchMove=hN.bind(this),this._onMouseDown=TN.bind(this),this._onMouseMove=SN.bind(this),this._interceptControlDown=fN.bind(this),this._interceptControlUp=xN.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($X),this.update(),this.state=VJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(dJ.copy(Q).sub(this.target),dJ.applyQuaternion(this._quat),this._spherical.setFromVector3(dJ),this.autoRotate&&this.state===VJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,K=this.maxAzimuthAngle;if(isFinite($)&&isFinite(K)){if($<-Math.PI)$+=O8;else if($>Math.PI)$-=O8;if(K<-Math.PI)K+=O8;else if(K>Math.PI)K-=O8;if($<=K)this._spherical.theta=Math.max($,Math.min(K,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+K)/2?Math.max($,this._spherical.theta):Math.min(K,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let Z=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=Z!=this._spherical.radius}if(dJ.setFromSpherical(this._spherical),dJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(dJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let Z=null;if(this.object.isPerspectiveCamera){let X=dJ.length();Z=this._clampDistance(X*this._scale);let Y=X-Z;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),W=!!Y}else if(this.object.isOrthographicCamera){let X=new g(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=Y!==this.object.zoom;let H=new g(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),Z=dJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(Z!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(Z).add(this.object.position);else if(MQ.origin.copy(this.object.position),MQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(MQ.direction))<AN)this.object.lookAt(this.target);else KX.setFromNormalAndCoplanarPoint(this.object.up,this.target),MQ.intersectPlane(KX,this.target)}else if(this.object.isOrthographicCamera){let Z=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),Z!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>fK||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fK||this._lastTargetPosition.distanceToSquared(this.target)>fK)return this.dispatchEvent($X),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return O8/60*this.autoRotateSpeed*J;else return O8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){dJ.setFromMatrixColumn(Q,0),dJ.multiplyScalar(-J),this._panOffset.add(dJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)dJ.setFromMatrixColumn(Q,1);else dJ.setFromMatrixColumn(Q,0),dJ.crossVectors(this.object.up,dJ);dJ.multiplyScalar(J),this._panOffset.add(dJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let K=this.object.position;dJ.copy(K).sub(this.target);let W=dJ.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*W/$.clientHeight,this.object.matrix),this._panUp(2*Q*W/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),K=J-$.left,W=Q-$.top,Z=$.width,X=$.height;this._mouse.x=K/Z*2-1,this._mouse.y=-(W/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(O8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(O8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(O8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-O8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(O8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-O8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateStart.set($,K)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panStart.set($,K)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,K=J.pageY-Q.y,W=Math.sqrt($*$+K*K);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),K=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._rotateEnd.set(K,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(O8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(O8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panEnd.set($,K)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,K=J.pageY-Q.y,W=Math.sqrt($*$+K*K);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let Z=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(Z,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new i0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function _N(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function wN(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function CN(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(WX),this.state=VJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function TN(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case k9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=VJ.DOLLY;break;case k9.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=VJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=VJ.ROTATE}break;case k9.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=VJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=VJ.PAN}break;default:this.state=VJ.NONE}if(this.state!==VJ.NONE)this.dispatchEvent(xK)}function SN(J){switch(this.state){case VJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case VJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case VJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function jN(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==VJ.NONE)return;J.preventDefault(),this.dispatchEvent(xK),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(WX)}function yN(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function vN(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case M9.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=VJ.TOUCH_ROTATE;break;case M9.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=VJ.TOUCH_PAN;break;default:this.state=VJ.NONE}break;case 2:switch(this.touches.TWO){case M9.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=VJ.TOUCH_DOLLY_PAN;break;case M9.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=VJ.TOUCH_DOLLY_ROTATE;break;default:this.state=VJ.NONE}break;default:this.state=VJ.NONE}if(this.state!==VJ.NONE)this.dispatchEvent(xK)}function hN(J){switch(this._trackPointer(J),this.state){case VJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case VJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case VJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case VJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=VJ.NONE}}function bN(J){if(this.enabled===!1)return;J.preventDefault()}function fN(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function xN(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function ZX(J){let Q;try{Q=new bK({antialias:!0,alpha:!1})}catch(y){if(console.error("WebGL renderer unavailable:",y),J)J.innerHTML='<div class="webgl-fallback" style="color:#ffd700;font-family:Orbitron,sans-serif;text-align:center;padding:32px;margin:24px;border:2px solid #7b2d8e;border-radius:18px;background:rgba(26,0,37,0.88);"><h2>WebGL unavailable</h2><p style="color:#9980aa;margin-top:8px;">This game requires a browser with WebGL support. Try a recent Chrome, Firefox, or Edge.</p></div>';return null}Q.setSize(window.innerWidth,window.innerHeight),Q.setPixelRatio(Math.min(window.devicePixelRatio,2)),Q.shadowMap.enabled=!0;let $=typeof navigator<"u"&&/Firefox/i.test(navigator.userAgent);Q.shadowMap.type=$?Q$:m9,Q.toneMapping=r7,Q.toneMappingExposure=1.6,Q.outputColorSpace=P8,J.appendChild(Q.domElement);let K=new KQ;K.background=new KJ(853016),K.fog=new K6(853016,0.028);let W=new g8(40,48,48),Z=new F8({side:$8,fog:!1,uniforms:{topColor:{value:new KJ(1968957)},bottomColor:{value:new KJ(853016)},moonColor:{value:new KJ(16773833)},time:{value:0}},vertexShader:`
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

        // Layered twilight gradient: deep indigo overhead, violet at the
        // horizon, and a cool blue floor fade so the room feels dimensional.
        float up = smoothstep(-0.15, 0.92, h);
        vec3 col = mix(bottomColor, topColor, pow(up, 0.62));
        float horizon = exp(-abs(h + 0.015) * 18.0);
        col += vec3(0.36, 0.08, 0.58) * horizon;
        col += vec3(0.04, 0.22, 0.48) * exp(-abs(h - 0.12) * 9.0);

        // Slow nebula ribbons add color without competing with the machine.
        float cloudA = sin(dir.x * 5.0 + dir.z * 3.0 + time * 0.025);
        float cloudB = sin(dir.z * 8.0 - dir.x * 2.0 - time * 0.018);
        float cloud = smoothstep(0.22, 0.92, cloudA * 0.55 + cloudB * 0.45) * (0.35 + 0.65 * up);
        col += vec3(0.25, 0.03, 0.36) * cloud * 0.22;
        col += vec3(0.02, 0.16, 0.36) * smoothstep(0.35, 0.95, -cloudA) * up * 0.12;

        // Star field (upper hemisphere only, hash-based so it stays cheap).
        if (h > 0.02) {
          vec2 uv = vec2(atan(dir.z, dir.x), asin(dir.y)) * 32.0;
          vec2 id = floor(uv);
          float rnd = hash21(id);
          float rnd2 = hash21(id + vec2(17.0, 7.0));
          if (rnd > 0.78) {
            vec2 f = fract(uv) - 0.5;
            float d = length(f);
            float tw = 0.52 + 0.48 * sin(time * (0.8 + rnd2 * 2.8) + rnd2 * 40.0);
            float star = smoothstep(0.19, 0.018, d) * tw * (0.35 + 0.8 * rnd2);
            vec3 starColor = mix(vec3(0.55, 0.82, 1.0), vec3(1.0, 0.72, 0.92), rnd2);
            col += starColor * star;
            // A few larger stars get a tiny four-point sparkle.
            if (rnd2 > 0.82) col += starColor * smoothstep(0.22, 0.0, abs(f.x) + abs(f.y)) * 0.22;
          }
        }

        // Moon with a broad lavender halo and a subtle cyan rim.
        vec3 moonDir = normalize(vec3(0.45, 0.52, -0.73));
        float md = dot(dir, moonDir);
        float disc = smoothstep(0.9948, 0.9983, md);
        float glow = exp((md - 1.0) * 58.0);
        col += moonColor * disc * 1.75;
        col += vec3(0.58, 0.38, 0.95) * glow * 0.36;
        col += vec3(0.08, 0.42, 0.9) * pow(max(0.0, 1.0 - md), 18.0) * 0.012;

        gl_FragColor = vec4(col, 1.0);
      }
    `}),X=new U0(W,Z);K.add(X);let Y=new rJ(40,window.innerWidth/window.innerHeight,0.1,50);Y.position.set(8,6,9);let H=new gK(Y,Q.domElement);H.target.set(0,0.6,-0.5),H.enableDamping=!0,H.dampingFactor=0.08,H.minDistance=4,H.maxDistance=20,H.maxPolarAngle=Math.PI/2,H.minPolarAngle=Math.PI/7,H.update(),K.add(new GQ(8934860,1.4));let U=new j7(16772829,2.2);U.position.set(5,10,4),U.castShadow=!0,U.shadow.mapSize.width=1024,U.shadow.mapSize.height=1024,K.add(U);let O=new j7(14527231,1.2);O.position.set(-4,5,-3),K.add(O);let D=new j7(4517631,0.8);D.position.set(5,3,-4),K.add(D);let G=new A9(16768392,1.2,15,Math.PI/5,0.5,1);G.position.set(0,7,2),G.target.position.set(0,0,-0.5),K.add(G),K.add(G.target);let R=new A9(14527231,0.8,12,Math.PI/4,0.5,1);R.position.set(-2,6,-1),R.target.position.set(0,0.3,0),K.add(R),K.add(R.target);let M=new A9(16766720,1.5,10,Math.PI/6,0.6,1);M.position.set(-2,5,-4),M.target.position.set(-2,1.5,-3),K.add(M),K.add(M.target);let P=new A9(16766720,1.5,10,Math.PI/6,0.6,1);P.position.set(2,5,-4),P.target.position.set(2,1.5,-3),K.add(P),K.add(P.target);let E=new A9(16777215,1,10,Math.PI/8,0.4,1);E.position.set(0,6,-3),E.target.position.set(0,1.5,-3),K.add(E),K.add(E.target);let F=new s8(16766720,0.6,4);F.position.set(-2.5,2,-2.5),K.add(F);let T=new s8(16766720,0.6,4);T.position.set(2.5,2,-2.5),K.add(T);let w=new s8(16755268,0.5,5);w.position.set(0,2.5,-2.5),K.add(w);let L=new s8(16732120,0.35,7);L.position.set(0,2.4,0.8),K.add(L);let A={strength:0,color:new KJ(16732120)},C=[],S=[];[[-6,4],[6,4],[-6,-2],[6,-2],[-6,-5],[6,-5]].forEach(([y,V],f)=>{let r=new s0({color:2363970,roughness:0.22,metalness:0.88,emissive:2165326,emissiveIntensity:0.35}),b=new U0(new sJ(0.28,0.42,3.5,12),r);b.position.set(y,1.75,V),b.castShadow=!0,K.add(b);let _=new s0({color:16763213,roughness:0.13,metalness:0.94,emissive:12868374,emissiveIntensity:0.72}),F0=new U0(new sJ(0.52,0.38,0.24,12),_);F0.position.set(y,3.6,V),K.add(F0);let V0=new U0(new sJ(0.46,0.54,0.18,12),_);V0.position.set(y,0.05,V),K.add(V0);let o0=[new s0({color:3799039,emissive:47592,emissiveIntensity:1.8,metalness:0.7,roughness:0.18}),new s0({color:16732120,emissive:14096790,emissiveIntensity:1.6,metalness:0.7,roughness:0.18})],v=[];[-1.05,0,1.05].forEach((D0,E0)=>{let G0=new U0(new Y9(0.315,0.035,8,20),o0[E0%2]);G0.position.set(y,1.75+D0,V),G0.rotation.x=Math.PI/2,K.add(G0),v.push(G0)});let XJ=new s0({color:f%2?3799039:16732120,emissive:f%2?47592:14096790,emissiveIntensity:2.8,roughness:0.12,metalness:0.45,transparent:!0,opacity:0.92}),v0=new U0(new P9(0.2,1),XJ);v0.position.set(y,3.88,V),v0.rotation.set(0.2,f*0.7,0.15),K.add(v0);let b0=new U0(new Y9(0.27,0.018,8,24),o0[f%2]);b0.position.set(y,3.88,V),b0.rotation.x=Math.PI/2,K.add(b0),S.push({pillar:b,cap:F0,bands:v,crystal:v0,crystalHalo:b0,phase:f*0.8});let N=new s0({color:6702114,roughness:0.7,metalness:0.6}),q=new U0(new sJ(0.04,0.06,0.3,6),N);q.position.set(y,3.85,V),K.add(q);let I=new s0({color:16739125,emissive:16721007,emissiveIntensity:2.2,transparent:!0,opacity:0.7}),h=new U0(new r9(0.15,0.5,6),I.clone());h.position.set(y,4.15,V),K.add(h);let l=new s0({color:16766719,emissive:16747752,emissiveIntensity:3.6,transparent:!0,opacity:0.85}),Z0=new U0(new r9(0.07,0.3,6),l.clone());Z0.position.set(y,4.1,V),K.add(Z0);let Y0=new vJ({color:16777215,transparent:!0,opacity:0.6}),m=new U0(new r9(0.03,0.12,4),Y0.clone());m.position.set(y,4.05,V),K.add(m);let a=new s8(f%2?3799039:16732120,0.9,5);a.position.set(y,4.2,V),K.add(a),C.push({outer:h,inner:Z0,core:m,light:a,baseY:4.15,phase:Math.random()*Math.PI*2,pos:{x:y,z:V},pillar:b,cap:F0,bands:v,crystal:v0,crystalHalo:b0})});let z=new vJ({color:16763972,transparent:!0,opacity:0.2}),u=[];for(let y=0;y<8;y++){let V=y/8*Math.PI*2,f=5.5+Math.random()*2.5,r=3+Math.random()*2,b=Math.cos(V)*f,_=Math.sin(V)*f-1,F0=new U0(new g8(0.12,8,8),z);F0.position.set(b,r,_),K.add(F0);let V0=new s8(16763972,0.15,2);V0.position.copy(F0.position),K.add(V0),u.push({mesh:F0,light:V0,angle:V,radius:f,baseHeight:r,phase:Math.random()*Math.PI*2})}let j=new z9({color:14531583,size:0.04,transparent:!0,opacity:0.6,blending:I8}),n=new bJ,J0=new Float32Array(1800);for(let y=0;y<600;y++)J0[y*3]=(Math.random()-0.5)*40,J0[y*3+1]=Math.random()*15,J0[y*3+2]=(Math.random()-0.5)*40-5;n.setAttribute("position",new gJ(J0,3));let s=new o9(n,j);K.add(s);let e=240,$0=new bJ,d=new Float32Array(e*3),X0=new Float32Array(e*3),q0=new Float32Array(e),L0=new Float32Array(e);for(let y=0;y<e;y++){let V=y*3;d[V]=(Math.random()-0.5)*14,d[V+1]=0.35+Math.random()*5.2,d[V+2]=(Math.random()-0.5)*13-1,X0[V]=0.7+Math.random()*0.3,X0[V+1]=0.25+Math.random()*0.55,X0[V+2]=0.8+Math.random()*0.2,q0[y]=Math.random()*Math.PI*2,L0[y]=0.08+Math.random()*0.18}$0.setAttribute("position",new gJ(d,3)),$0.setAttribute("color",new gJ(X0,3));let y0=new z9({size:0.055,vertexColors:!0,transparent:!0,opacity:0.62,blending:I8,depthWrite:!1}),T0=new o9($0,y0);K.add(T0);function OJ(){let y=document.createElement("canvas");y.width=1024,y.height=1024;let V=y.getContext("2d"),f=V.createRadialGradient(512,512,0,512,512,720);f.addColorStop(0,"#120820"),f.addColorStop(1,"#0a0515"),V.fillStyle=f,V.fillRect(0,0,1024,1024);let r=8,b=1024/r;for(let F0=0;F0<r;F0++)for(let V0=0;V0<r;V0++)if((F0+V0)%2===0)V.fillStyle="rgba(30, 15, 50, 0.35)",V.fillRect(F0*b,V0*b,b,b);V.strokeStyle="rgba(190, 148, 255, 0.16)",V.lineWidth=1.5;for(let F0=0;F0<=r;F0++)V.beginPath(),V.moveTo(F0*b,0),V.lineTo(F0*b,1024),V.stroke(),V.beginPath(),V.moveTo(0,F0*b),V.lineTo(1024,F0*b),V.stroke();for(let F0=0;F0<5000;F0++)V.fillStyle=`rgba(255, 255, 255, ${Math.random()*0.03})`,V.fillRect(Math.random()*1024,Math.random()*1024,2,2);let _=new x8(y);return _.colorSpace=P8,_.wrapS=t7,_.wrapT=t7,_.repeat.set(4,4),_}let qJ=OJ(),K0=new U0(new w8(40,40),new s0({map:qJ,color:16777215,roughness:0.18,metalness:0.72,emissive:1182516,emissiveIntensity:0.28}));K0.rotation.x=-Math.PI/2,K0.position.y=-0.1,K0.receiveShadow=!0,K.add(K0);let N0=new U0(new X9(4,4.2,32),new vJ({color:16766720,transparent:!0,opacity:0.08,side:LJ}));N0.rotation.x=-Math.PI/2,N0.position.set(0,-0.08,0),K.add(N0);let z0=[],M0=[3799039,16732120,16767053,8086015];[4.25,5.4,7,9].forEach((y,V)=>{let f=new vJ({color:M0[V],transparent:!0,opacity:V===0?0.22:0.11,blending:I8,side:LJ}),r=new U0(new X9(y,y+0.018,96),f);r.rotation.x=-Math.PI/2,r.position.set(0,-0.065+V*0.002,0),K.add(r),z0.push({mesh:r,phase:V*0.8,speed:V%2?-0.025:0.018})});let u0=new vJ({color:3799039,transparent:!0,opacity:0.06,blending:I8});for(let y=0;y<12;y++){let V=y/12*Math.PI*2,f=new U0(new d0(0.018,0.003,9),u0);f.position.set(Math.sin(V)*4.5,-0.062,Math.cos(V)*4.5),f.rotation.y=V,K.add(f)}[[-4.5,1.2,-3,16766720],[4.5,1.2,-3,16766720],[-4.5,1.2,2,16729190],[4.5,1.2,2,65416],[-3,0.5,-3,4517631],[3,0.5,-3,16746564]].forEach(([y,V,f,r])=>{let b=new s8(r,0.7,4);b.position.set(y,V,f),K.add(b);let _=new U0(new g8(0.06,8,8),new vJ({color:r}));_.position.copy(b.position),K.add(_)});let ZJ=new vJ({color:4456550,transparent:!0,opacity:0.04,side:LJ}),o=[];for(let y=0;y<6;y++){let V=new U0(new w8(3+Math.random()*2,0.3),ZJ),f=0.05+Math.random()*0.1;V.position.set((Math.random()-0.5)*8,f,(Math.random()-0.5)*8-1),V.rotation.y=Math.random()*Math.PI*2,K.add(V),o.push({mesh:V,baseY:f,baseX:V.position.x,phase:Math.random()*Math.PI*2})}window.addEventListener("resize",()=>{Y.aspect=window.innerWidth/window.innerHeight,Y.updateProjectionMatrix(),Q.setSize(window.innerWidth,window.innerHeight)});let Q0=0;return{scene:K,camera:Y,renderer:Q,controls:H,flameData:C,pillarAccents:S,lanterns:u,smokeData:o,pulseEvent(y="win"){let V={win:3799039,bigwin:16767053,jackpot:16732120,lose:16727683};A.color.set(V[y]||V.win),A.strength=y==="jackpot"?2.4:y==="bigwin"?1.35:0.75},updateAmbient(y,V=0.016666666666666666){for(let b of z0)b.mesh.rotation.z+=b.speed*V,b.mesh.material.opacity=0.075+0.055*(0.5+0.5*Math.sin(y*0.8+b.phase));for(let b of S){let _=0.5+0.5*Math.sin(y*1.4+b.phase);b.crystal.rotation.y+=V*(0.45+_*0.25),b.crystal.rotation.x=0.2+Math.sin(y*0.7+b.phase)*0.12,b.crystal.scale.setScalar(0.92+_*0.16),b.crystalHalo.rotation.z+=V*0.8,b.cap.material.emissiveIntensity=0.5+_*0.45;for(let F0 of b.bands)F0.material.emissiveIntensity=1+_*1.2}Z.uniforms.time.value=y;let f=0.42+0.32*Math.sin(y*0.6);j.opacity=f;let r=0.5+0.5*Math.sin(y*0.35+1);j.color.setRGB(0.78+r*0.1,0.66+(1-r)*0.1,0.95);for(let b of o)b.mesh.position.y=b.baseY+Math.sin(y*0.4+b.phase)*0.18,b.mesh.position.x=b.baseX+Math.sin(y*0.25+b.phase*1.7)*0.35;if(Q0+=V,Q0>=0.03333333333333333){let b=Q0;Q0=0;let _=$0.attributes.position.array;for(let F0=0;F0<e;F0++){let V0=F0*3;if(_[V0+1]+=L0[F0]*b*0.24,_[V0]+=Math.sin(y*0.45+q0[F0])*b*0.05,_[V0+1]>5.8)_[V0+1]=0.25}$0.attributes.position.needsUpdate=!0}y0.opacity=0.42+0.2*(0.5+0.5*Math.sin(y*0.9)),A.strength*=Math.exp(-4.5*V),L.color.copy(A.color),L.intensity=0.35+A.strength,L.distance=7+A.strength*2},updateFlames(y){for(let V of C){let f=0.5+0.5*Math.sin(y*8+V.phase),r=0.4+0.6*Math.sin(y*11+V.phase*1.3),b=f*r;if(V.outer.material.emissiveIntensity=1.5+2.5*b,V.outer.material.opacity=0.4+0.4*b,V.inner.material.emissiveIntensity=2.5+4*b,V.light.intensity=0.6+0.8*b,V.outer.position.x=V.pos.x+Math.sin(y*6+V.phase)*0.04,V.outer.position.z=V.pos.z+Math.cos(y*8+V.phase)*0.04,V.outer.scale.x=0.9+0.2*Math.sin(y*5+V.phase*0.7),V.outer.scale.z=0.9+0.2*Math.cos(y*7+V.phase),V.outer.scale.y=0.8+0.4*Math.sin(y*9+V.phase),V.inner.position.copy(V.outer.position),V.inner.position.y=V.baseY+Math.sin(y*6+V.phase)*0.04,V.core)V.core.position.copy(V.inner.position),V.core.position.y=V.baseY-0.1+Math.sin(y*10+V.phase)*0.02,V.core.material.opacity=0.3+0.5*b;V.light.position.copy(V.outer.position),V.light.position.y=4.2}for(let V of u)V.mesh.position.y=V.baseHeight+Math.sin(y*0.5+V.phase)*0.08,V.light.position.y=V.mesh.position.y}}}function XX(J){let Q=new N8,$=7,K=6,W=0.5,Z=0.54,X=-2.75,Y=1.6,H=-4.05,U=-3.2,O=3.2,D=[],G=[],R=[],M=new s0({color:1706037,roughness:0.5,metalness:0.6,emissive:656416,emissiveIntensity:0.12}),P=new s0({color:918560,roughness:0.6,metalness:0.5,emissive:328208,emissiveIntensity:0.08}),E=new U0(new d0(7.8,0.2,6.6),P);E.position.set(0,0.1,0.1),E.castShadow=!0,E.receiveShadow=!0,Q.add(E);let F=new U0(new d0(7.5,0.175,6.3),M);F.position.set(0,0.275,0.05),F.castShadow=!0,F.receiveShadow=!0,Q.add(F);let T=new U0(new d0(7,0.125,6),M);T.position.set(0,0.425,0),T.castShadow=!0,T.receiveShadow=!0,Q.add(T);let w=new s0({color:16766720,roughness:0.15,metalness:0.92,emissive:8939008,emissiveIntensity:0.2}),A=new U0(new d0(7.65,0.05,6.45),w);A.position.set(0,0.2,0.08),Q.add(A);let C=new U0(new d0(7.25,0.05,6.15),w);C.position.set(0,0.35,0.03),Q.add(C);let S=new s0({color:3807829,roughness:0.95,metalness:0.02,emissive:1706544,emissiveIntensity:0.25}),k=new U0(new d0(6.5,0.04,6),S);k.position.set(0,0.52,0),k.receiveShadow=!0,Q.add(k);let z=3.2,u=-1.2,j=0.9,n=1.2,J0=0.08,s=0.54+J0,e=-1.5,$0=0.45,d=0.7,X0=e-$0/2,q0=e+$0/2,L0=u+z/2,y0=u-z/2,T0=e,OJ=new s0({color:13404415,emissive:11158783,emissiveIntensity:1.5,transparent:!0,opacity:0.6,side:LJ}),qJ=new U0(new X9(0.2,0.4,20,1),OJ);qJ.position.set(0,0.53,T0),qJ.rotation.x=-Math.PI/2,Q.add(qJ);let K0=new N8,N0=3.3,z0=2.9000000000000004,M0=T0,u0=new s0({color:6706602,roughness:0.3,metalness:0.8,emissive:4465322,emissiveIntensity:0.2}),ZJ=new U0(new d0(z0*2+0.5,0.04,0.04),u0);ZJ.position.set(0,N0,M0),K0.add(ZJ);let o=new s0({color:8943564,roughness:0.2,metalness:0.9,emissive:6702250,emissiveIntensity:0.3});for(let k0 of[-1,1]){let f0=new U0(new g8(0.06,6,6),o);f0.position.set(k0*(z0+0.25),N0,M0),K0.add(f0)}let Q0=new s0({color:13404415,emissive:11158783,emissiveIntensity:2}),y=new U0(new P9(0.1,0),Q0);y.position.set(0,N0,M0),K0.add(y);let V=new vJ({color:16777215,transparent:!0,opacity:0.6}),f=new U0(new P9(0.05,0),V);f.position.set(0,N0,M0),K0.add(f);let r=new vJ({color:13404415,transparent:!0,opacity:0.08,side:LJ}),b=new U0(new d0(0.02,N0-0.5,0.02),r);b.position.set(0,0.5+(N0-0.5)/2,M0),K0.add(b);let _=new vJ({color:13404415,transparent:!0,opacity:0.15,side:LJ}),F0=new U0(new X9(0.1,0.25,16,1),_);F0.rotation.x=-Math.PI/2,F0.position.set(0,0.52,M0),K0.add(F0),Q.add(K0);let V0=new N8,o0=new s0({color:3809376,roughness:0.4,metalness:0.6,emissive:1706544,emissiveIntensity:0.3}),v=new s0({color:13404415,roughness:0.2,metalness:0.8,emissive:11158783,emissiveIntensity:0.6}),XJ=new s0({color:4469640,roughness:0.3,metalness:0.7,emissive:2232678,emissiveIntensity:0.4}),v0=3.2-d/2,b0=new U0(new d0(v0,J0,z),o0);b0.position.set(-(d/2+v0/2),0.54+J0/2,u),b0.castShadow=!0,b0.receiveShadow=!0,V0.add(b0);let N=new U0(new d0(v0,J0,z),o0);N.position.set(d/2+v0/2,0.54+J0/2,u),N.castShadow=!0,N.receiveShadow=!0,V0.add(N);let q=6.4,I=J0+0.06,h=new U0(new d0(q,I,0.06),v);h.position.set(0,0.54+I/2,u+z/2),V0.add(h);let l=J0+0.22,Z0=0.54+l/2,Y0=new U0(new d0(q,l,0.06),XJ);Y0.position.set(0,Z0,u-z/2),Y0.castShadow=!0,V0.add(Y0);for(let k0 of[-1,1]){let f0=J0+0.12,t0=new U0(new d0(0.06,f0,z),XJ);t0.position.set(k0*(q/2),0.54+f0/2,u),V0.add(t0)}let m=new s0({color:13404415,emissive:11158783,emissiveIntensity:1.5}),a=new U0(new d0(q,0.02,0.02),m);a.position.set(0,0.54+J0+0.01,u+z/2+0.02),V0.add(a);let D0=[],E0=[16732120,3799039,16767053,8086015];for(let k0=0;k0<16;k0++){let f0=new vJ({color:E0[k0%E0.length],transparent:!0,opacity:0.8}),t0=new U0(new g8(0.035,8,8),f0);t0.position.set(-q/2+0.18+k0*(q-0.36)/15,0.54+J0+0.035,u+z/2+0.035),V0.add(t0),D0.push({mesh:t0,phase:k0*0.55})}Q.add(V0);let G0=u,O0=u,p0=0,l0=-1,e0=2.8,x=new s0({color:2757734,roughness:0.4,metalness:0,transparent:!0,opacity:0.2,side:LJ,emissive:656416,emissiveIntensity:0.18,depthWrite:!1}),R0=new U0(new d0(7.3,e0,0.2),x);R0.position.set(0,0.5+e0/2,-4.05),R0.castShadow=!1,R0.receiveShadow=!1,R0.renderOrder=1,Q.add(R0);let W0=new vJ({color:10181046,transparent:!0,opacity:0.08,blending:I8,side:LJ,depthWrite:!1}),B0=new U0(new w8(7.25,e0-0.1),W0);B0.position.set(0,0.5+e0/2,-3.9299999999999997);let j0=new s0({color:13404415,emissive:11158783,emissiveIntensity:2}),H0=new U0(new d0(7.15,0.03,0.03),j0);H0.position.set(0,0.62,-3.9099999999999997),Q.add(H0),B0.renderOrder=2,Q.add(B0);let P0=new s0({color:16766720,emissive:16755200,emissiveIntensity:2.2}),a0=0.06,BJ=7.25,kJ=e0+0.1;[{x:0,y:0.5+e0+0.07,w:BJ},{x:0,y:0.44,w:BJ}].forEach(({x:k0,y:f0,w:t0})=>{let m0=new U0(new d0(t0,a0,a0),P0);m0.position.set(k0,f0,-3.94),Q.add(m0)}),[{x:-BJ/2+a0/2},{x:BJ/2-a0/2}].forEach(({x:k0})=>{let f0=new U0(new d0(a0,kJ,a0),P0);f0.position.set(k0,0.5+e0/2,-3.94),Q.add(f0)});let SJ=new N8;SJ.position.set(0,1.8,-3.92),Q.add(SJ);let T8=new s0({color:16766720,emissive:13142528,emissiveIntensity:1.4,roughness:0.12,metalness:0.95}),k6=new U0(new sJ(0.78,0.78,0.16,32),T8);k6.rotation.z=Math.PI/2,SJ.add(k6);let f7=new s0({color:16774307,emissive:16766720,emissiveIntensity:1.8}),S9=new U0(new Y9(0.62,0.025,8,32),f7);S9.rotation.y=Math.PI/2,S9.position.z=0.085,SJ.add(S9);let x7=new U0(new Y9(0.5,0.02,8,24),f7);x7.rotation.y=Math.PI/2,x7.position.z=0.09,SJ.add(x7);let p8=new s0({color:16774307,emissive:16766720,emissiveIntensity:2.6}),g7=new U0(new d0(0.06,0.6,0.04),p8);g7.position.set(0,0,0.09),SJ.add(g7);let m8=new U0(new d0(0.24,0.06,0.04),p8);m8.position.set(0,0.22,0.09),SJ.add(m8);let Z7=new U0(new d0(0.24,0.06,0.04),p8);Z7.position.set(0,-0.22,0.09),SJ.add(Z7);let j9=new U0(new d0(0.13,0.05,0.04),p8);j9.position.set(-0.04,0.07,0.09),SJ.add(j9);let y9=new U0(new d0(0.13,0.05,0.04),p8);y9.position.set(0.04,-0.07,0.09),SJ.add(y9),[-0.09].forEach((k0)=>{let f0=new U0(new d0(0.13,0.05,0.04),p8);f0.position.set(-j9.position.x,-j9.position.y,k0),SJ.add(f0);let t0=new U0(new d0(0.13,0.05,0.04),p8);t0.position.set(-y9.position.x,-y9.position.y,k0),SJ.add(t0)});function X7(){let t0=document.createElement("canvas");t0.width=1024,t0.height=224;let m0=t0.getContext("2d"),cJ=m0.createLinearGradient(0,0,0,224);cJ.addColorStop(0,"#ffe9a3"),cJ.addColorStop(0.5,"#ffd700"),cJ.addColorStop(1,"#b8860b"),m0.fillStyle=cJ,m0.fillRect(0,0,1024,224),m0.fillStyle="#150527",m0.fillRect(14,14,996,196),m0.strokeStyle="rgba(255, 215, 0, 0.55)",m0.lineWidth=3,m0.strokeRect(26,26,972,172),m0.textAlign="center",m0.textBaseline="middle",m0.font="900 104px Orbitron, Arial, sans-serif";let q8=m0.createLinearGradient(0,56,0,190.4);q8.addColorStop(0,"#fff8d0"),q8.addColorStop(0.45,"#ffd700"),q8.addColorStop(1,"#e8930c"),m0.shadowColor="rgba(255, 200, 40, 0.95)",m0.shadowBlur=34,m0.fillStyle=q8,m0.fillText("COIN PUSHER",512,116),m0.shadowBlur=0,m0.fillStyle="rgba(255, 215, 0, 0.9)",m0.font="900 58px Orbitron, Arial, sans-serif",m0.fillText("✦",82,114),m0.fillText("✦",942,114);let eJ=new x8(t0);return eJ.colorSpace=P8,eJ.anisotropy=4,eJ}let M6=new vJ({map:X7(),transparent:!0,side:LJ,toneMapped:!1}),U9=new U0(new w8(4.2,0.72),M6);U9.position.set(0,3.45,-3.92),Q.add(U9);let p7=[];[-2.55,2.55].forEach((k0,f0)=>{let t0=new s0({color:16766720,roughness:0.18,metalness:0.92,emissive:13404160,emissiveIntensity:0.7}),m0=new U0(new sJ(0.15,0.18,2.2,12),t0);m0.position.set(k0,1.8,-3.92),Q.add(m0);let cJ=new U0(new sJ(0.22,0.18,0.18,12),t0);cJ.position.set(k0,3,-3.92),Q.add(cJ);let q8=new U0(new sJ(0.22,0.24,0.12,12),t0);q8.position.set(k0,0.75,-3.92),Q.add(q8);let eJ=new U0(new g8(0.1,16,16),new vJ({color:16770688,transparent:!0,opacity:0.85}));eJ.position.set(k0,3.2,-3.92),Q.add(eJ);let B8=[16720452,4521864,4491519,16755234,13395711];for(let _J=0;_J<5;_J++){let wJ=new s0({color:B8[_J%B8.length],emissive:B8[_J%B8.length],emissiveIntensity:0.45,roughness:0.3,metalness:0.5}),oJ=new U0(new sJ(0.2,0.2,0.045,12),wJ);oJ.position.set(k0+(f0===0?-0.4:0.4),0.9+_J*0.05,-3.8899999999999997),Q.add(oJ)}p7.push({orb:eJ,phase:f0*0.5})}),[-3.25,3.25].forEach((k0)=>{let f0=new N8;f0.position.set(k0,2.55,-3.92);let t0=new s0({color:16766720,emissive:16755200,emissiveIntensity:2.2}),m0=new U0(new d0(0.08,0.78,0.05),t0);f0.add(m0);let cJ=new U0(new d0(0.32,0.08,0.05),t0);cJ.position.y=0.28,f0.add(cJ);let q8=new U0(new d0(0.32,0.08,0.05),t0);q8.position.y=-0.28,f0.add(q8);let eJ=new U0(new d0(0.18,0.06,0.05),t0);eJ.position.set(-0.05,0.1,0),f0.add(eJ);let B8=new U0(new d0(0.18,0.06,0.05),t0);B8.position.set(0.05,-0.1,0),f0.add(B8),Q.add(f0)}),Q.userData=Q.userData||{},Q.userData.wallAnims={heroCoinGroup:SJ,sideColumns:p7,frameGoldMat:P0,marquee:U9,shelfNeonMat:m,shelfBulbs:D0,zoneLeds:D,zoneLaneStrips:G,zoneBadges:R};let V6=new s0({color:1706037,roughness:0.4,metalness:0.7,emissive:656416,emissiveIntensity:0.1}),wQ=new s0({color:3351142,roughness:0.25,metalness:0.9,emissive:2232661,emissiveIntensity:0.2}),q9=3.2;[-3.75,3.75].forEach((k0,f0)=>{let t0=new U0(new d0(0.4,q9,6.4),V6);t0.position.set(k0,0.5+q9/2,0),t0.castShadow=!0,Q.add(t0);let m0=new U0(new d0(0.42,q9,0.05),wQ);m0.position.set(k0,0.5+q9/2,3.15),Q.add(m0);let cJ=new U0(new d0(0.44,q9*0.8,0.03),new s0({color:16766720,emissive:11171584,emissiveIntensity:0.3,metalness:0.92,roughness:0.15}));cJ.position.set(k0,0.5+q9*0.6,3.16),Q.add(cJ);let q8=new vJ({color:524818,transparent:!0,opacity:0.4});for(let eJ=0;eJ<4;eJ++){let B8=new U0(new d0(0.04,0.55,0.01),q8);B8.position.set(k0+(f0===0?0.1:-0.1),2.3+eJ*0.7,-1.5),Q.add(B8)}});let CQ=new T7({color:12312063,transparent:!0,opacity:0.06,roughness:0.02,metalness:0,side:LJ,depthWrite:!1}),m7=new U0(new d0(6.8,2.2,0.04),CQ);m7.position.set(0,2.3,1.5),m7.renderOrder=4,Q.add(m7);let B=new U0(new d0(7.3,2.5,0.06),new T7({color:14531583,transparent:!0,opacity:0.04,roughness:0.05,metalness:0,side:LJ,depthWrite:!1}));B.position.set(0,2.5,-3.5),B.renderOrder=3,Q.add(B);let p=new s0({color:8943564,roughness:0.2,metalness:0.8,emissive:4469674,emissiveIntensity:0.1});[[-3.65,1.5],[3.65,1.5]].forEach(([k0,f0])=>{let t0=new U0(new d0(0.06,2.3,0.06),p);t0.position.set(k0,2.3,f0),Q.add(t0)});let t=3,i=[{type:"hole",width:0.85},{type:"win",width:4.7},{type:"hole",width:0.85}],c=[],A0=-3.2;for(let k0=0;k0<t;k0++){let f0=i[k0].width;c.push({startX:A0,endX:A0+f0,centerX:A0+f0/2,type:i[k0].type,width:f0}),A0+=f0}let h0=new s0({color:1837624,roughness:0.4,metalness:0.6,emissive:853024,emissiveIntensity:0.3,side:LJ}),w0=new s0({color:3351142,roughness:0.3,metalness:0.8,emissive:1706544,emissiveIntensity:0.25,side:LJ}),x0=new T7({color:10079487,transparent:!0,opacity:0.12,roughness:0.05,metalness:0,side:LJ,depthWrite:!1}),c0=new s0({color:16766720,roughness:0.15,metalness:0.9,emissive:8939008,emissiveIntensity:0.35}),QJ=1.6,$J=3.4,g0=0.32000000000000006,NJ=0.09999999999999998,PJ=$J-QJ,AJ=Math.atan2(g0-NJ,PJ),DJ=(QJ+$J)/2,hJ=new U0(new d0(6.5,0.03,PJ),h0);hJ.position.set(0,(g0+NJ)/2,DJ),hJ.rotation.x=AJ,hJ.receiveShadow=!0,Q.add(hJ);for(let k0 of[-1,1]){let f0=new U0(new d0(0.04,0.3,PJ),x0);f0.position.set(k0*6.5/2,(g0+NJ)/2+0.1,DJ),f0.rotation.x=AJ,Q.add(f0)}let S0=new U0(new d0(7.6,0.04,0.55),h0);S0.position.set(0,NJ-0.02,$J+0.2),S0.receiveShadow=!0,Q.add(S0);for(let k0 of[-1,1]){let f0=new U0(new d0(0.05,0.55,0.6),x0);f0.position.set(k0*7.6/2,NJ+0.26,$J+0.2),Q.add(f0)}let iJ=new U0(new d0(7.6,0.55,0.04),x0);iJ.position.set(0,NJ+0.27,$J+0.5),iJ.renderOrder=5,Q.add(iJ);let GJ=new U0(new d0(7.64,0.035,0.05),c0);GJ.position.set(0,NJ+0.55,$J+0.5),Q.add(GJ);let lJ=u+z/2+0.2,D8=1.55,tJ=0.18,Z8=D8-lJ,EJ={win:new s0({color:65416,emissive:65348,emissiveIntensity:2.6}),hole:new s0({color:16720452,emissive:16711714,emissiveIntensity:2.6})},yJ={win:new s0({color:55690,emissive:43622,emissiveIntensity:0.8,transparent:!0,opacity:0.42,roughness:0.55}),hole:new s0({color:13967201,emissive:10027059,emissiveIntensity:0.8,transparent:!0,opacity:0.38,roughness:0.55})},S8=Math.max(0.4,Z8-0.06);function MJ(k0,f0){let t0=document.createElement("canvas");t0.width=256,t0.height=64;let m0=t0.getContext("2d");m0.clearRect(0,0,t0.width,t0.height),m0.fillStyle=f0,m0.globalAlpha=0.88,m0.roundRect(4,4,248,56,14),m0.fill(),m0.globalAlpha=1,m0.strokeStyle="#ffffff",m0.lineWidth=3,m0.stroke(),m0.fillStyle="#13051f",m0.font="900 28px Orbitron, Arial, sans-serif",m0.textAlign="center",m0.textBaseline="middle",m0.fillText(k0,128,33);let cJ=new x8(t0);return cJ.colorSpace=P8,new U0(new w8(0.72,0.18),new vJ({map:cJ,transparent:!0,side:LJ,toneMapped:!1,depthTest:!1,depthWrite:!1}))}c.forEach((k0)=>{let f0=new U0(new d0(k0.width-0.05,0.03,0.03),EJ[k0.type]);f0.position.set(k0.centerX,g0+0.05,QJ-0.03),Q.add(f0),D.push({mesh:f0,type:k0.type,phase:k0.centerX*0.7});let t0=new U0(new d0(k0.width-0.08,0.014,S8),yJ[k0.type]);t0.position.set(k0.centerX,0.54-tJ/2+0.018,lJ+Z8/2),t0.rotation.x=Math.atan2(tJ,Z8),t0.renderOrder=2,Q.add(t0),G.push({mesh:t0,type:k0.type,phase:k0.centerX*0.6});let m0=MJ(k0.type==="win"?"WIN":"RISK",k0.type==="win"?"#00e08b":"#e32b68");m0.position.set(k0.centerX,g0+0.1,QJ+0.015),m0.rotation.x=0,m0.renderOrder=6,Q.add(m0),R.push({mesh:m0,type:k0.type,phase:k0.centerX*0.6})});let d8=new s0({color:16767082,emissive:16747042,emissiveIntensity:1.3,metalness:0.88,roughness:0.2});for(let k0=1;k0<c.length;k0++){let f0=new U0(new d0(0.035,0.08,S8),d8);f0.position.set(c[k0].startX,0.54-tJ/2+0.05,lJ+Z8/2),f0.rotation.x=Math.atan2(tJ,Z8),Q.add(f0)}let N9=new s0({color:3807829,roughness:0.6,metalness:0.3,emissive:1706544,emissiveIntensity:0.2}),v9=new U0(new d0(6.5,0.02,Z8),N9);v9.position.set(0,0.54-tJ/2,lJ+Z8/2),v9.rotation.x=Math.atan2(tJ,Z8),v9.receiveShadow=!0,Q.add(v9);let uX=new s0({color:4517631,emissive:2280703,emissiveIntensity:1.2});[[-3.2,-2.6,4.5],[3.2,-2.6,4.5]].forEach(([k0,f0,t0])=>{let m0=new U0(new d0(0.02,0.02,t0),uX);m0.position.set(k0,0.8,f0),Q.add(m0)}),J.add(Q);let TQ=0;function lX(k0){let f0=Math.sin(k0*0.6)*(z0-0.2);TQ=f0;let t0=k0*n,m0=Math.sin(t0),cJ=m0>0?Math.pow(m0,1.3):-Math.pow(-m0,0.7),q8=u+cJ*j;y.position.x=f0,f.position.x=f0,b.position.x=f0,b.position.z=M0,b.position.y=0.5+(N0-0.5)/2,b.scale.y=1+Math.sin(k0*0.6)*0.1,F0.position.x=f0,F0.position.z=M0;let eJ=0.8+0.2*Math.sin(k0*1.2);F0.material.opacity=0.1+0.15*eJ,y.position.y=N0+Math.sin(k0*2+f0)*0.02,f.position.y=y.position.y,y.rotation.x=k0*0.5,y.rotation.y=k0*0.3,f.rotation.x=y.rotation.x,f.rotation.y=y.rotation.y,O0=G0,G0=q8;let B8=Math.max(k0-l0,0.001);if(l0<0)p0=0;else p0=(G0-O0)/B8;l0=k0,V0.position.z=G0-u,qJ.position.x=TQ;let _J=Q.userData&&Q.userData.wallAnims;if(_J){if(_J.heroCoinGroup)_J.heroCoinGroup.rotation.y=k0*0.28;if(_J.marquee){let wJ=0.5+0.5*Math.sin(k0*1.2);_J.marquee.scale.set(1+0.02*wJ,1+0.02*wJ,1)}if(_J.sideColumns)for(let wJ of _J.sideColumns)wJ.orb.material.opacity=0.6+0.4*Math.sin(k0*2+wJ.phase);if(_J.frameGoldMat)_J.frameGoldMat.emissiveIntensity=1.6+1*Math.sin(k0*0.9);if(_J.shelfNeonMat)_J.shelfNeonMat.emissiveIntensity=1.25+0.8*(0.5+0.5*Math.sin(k0*2.2));if(_J.shelfBulbs)for(let wJ of _J.shelfBulbs){let oJ=0.5+0.5*Math.sin(k0*4.5-wJ.phase);wJ.mesh.material.opacity=0.3+oJ*0.7,wJ.mesh.scale.setScalar(0.8+oJ*0.5)}if(_J.zoneLeds)for(let wJ of _J.zoneLeds){let oJ=0.5+0.5*Math.sin(k0*2.6+wJ.phase);wJ.mesh.material.emissiveIntensity=wJ.type==="win"?2.1+oJ*1.5:1.7+oJ*1.1}if(_J.zoneLaneStrips)for(let wJ of _J.zoneLaneStrips){let oJ=0.5+0.5*Math.sin(k0*2.1+wJ.phase);wJ.mesh.material.opacity=wJ.type==="win"?0.28+oJ*0.22:0.24+oJ*0.18,wJ.mesh.material.emissiveIntensity=wJ.type==="win"?0.65+oJ*0.55:0.55+oJ*0.35}if(_J.zoneBadges)for(let wJ of _J.zoneBadges){let oJ=1+Math.sin(k0*1.8+wJ.phase)*0.035;wJ.mesh.scale.set(oJ,oJ,1),wJ.mesh.material.opacity=0.78+(oJ-0.965)*2}}}return{group:Q,width:7,depth:6,height:0.5,surfaceY:0.54,backZ:-2.75,frontDropZ:1.6,leftX:-3.2,rightX:3.2,winZ:2.6,zones:c,getZoneType(k0){for(let f0 of c)if(k0>=f0.startX&&k0<f0.endX)return f0.type;return"hole"},mechX:0,get dropX(){return TQ},dropZ:T0,dropHeight:3.5,updateMechanism:lX,get shelfZ(){return G0},get shelfVelocity(){return p0},get shelfFrontZ(){return G0+z/2},get shelfBackZ(){return G0-z/2},shelfSurfaceY:s,shelfThickness:J0,slotCenterZ:e,slotBackZ:X0,slotFrontZ:q0,slotWidth:d,slotHalfWidth:d/2,shelfAmplitude:j,shelfSpeed:n,shelfNeutralZ:u,shelfDepth:z,slopeStartZ:lJ,slopeEndZ:D8,slopeDrop:tJ}}var $7=0.06,gN=0.5,pN=0.22,VQ=0.01,mN=0.2,dN=0.28,YX=0.008,N6=6000,uN=2.8,k8=0.3,HX=14,UX=0.1,qX=0.35,BQ=2.5,Y8=0.28,lN=0.25,cN=0.15,NX=0,nN=6,w9=0.6;function GX(J,Q,$=0,K=null){NX=$;let W=[],Z=0,X=new N8;J.add(X);function Y(o,Q0,y,V,f,r){o.beginPath();for(let b=0;b<V*2;b++){let _=b%2===0?f:r,F0=b*Math.PI/V-Math.PI/2,V0=Q0+Math.cos(F0)*_,o0=y+Math.sin(F0)*_;if(b===0)o.moveTo(V0,o0);else o.lineTo(V0,o0)}o.closePath(),o.fill()}function H(o){let y=document.createElement("canvas");y.width=128,y.height=128;let V=y.getContext("2d"),f=64,r=64,b=62,_=[["#fff3c0","#f2c94c","#b8860b"],["#fffbe6","#ffe27a","#c9951e"],["#ffe9a3","#f0b63a","#a06a12"]],[F0,V0,o0]=_[o%_.length],v=V.createRadialGradient(f-12,r-12,b*0.15,f,r,b);v.addColorStop(0,F0),v.addColorStop(0.65,V0),v.addColorStop(1,o0),V.fillStyle=v,V.beginPath(),V.arc(f,r,b,0,Math.PI*2),V.fill(),V.strokeStyle="rgba(90,60,10,0.9)",V.lineWidth=7,V.beginPath(),V.arc(f,r,b-2,0,Math.PI*2),V.stroke(),V.strokeStyle="rgba(255,246,200,0.55)",V.lineWidth=2,V.beginPath(),V.arc(f,r,b-9,0,Math.PI*2),V.stroke(),V.strokeStyle="rgba(255,255,255,0.35)",V.lineWidth=3,V.beginPath(),V.arc(f,r,b*0.6,0,Math.PI*2),V.stroke(),V.strokeStyle="rgba(90,60,10,0.45)",V.lineWidth=2;for(let v0=0;v0<48;v0++){let b0=v0/48*Math.PI*2;V.beginPath(),V.moveTo(f+Math.cos(b0)*(b-2),r+Math.sin(b0)*(b-2)),V.lineTo(f+Math.cos(b0)*(b-8),r+Math.sin(b0)*(b-8)),V.stroke()}if(V.fillStyle="rgba(110,68,0,0.95)",V.textAlign="center",V.textBaseline="middle",o%3===0)V.font="900 62px Arial",V.fillText("1",f,r+5);else if(o%3===1)Y(V,f,r-2,5,b*0.42,b*0.19);else V.font="900 58px Arial",V.fillText("C",f,r+5);V.strokeStyle="rgba(255,255,255,0.22)",V.lineWidth=3,V.beginPath(),V.arc(f-7,r-7,b*0.78,Math.PI,Math.PI*1.7),V.stroke();let XJ=new x8(y);return XJ.colorSpace=P8,XJ}function U(o){let V=document.createElement("canvas");V.width=256,V.height=128;let f=V.getContext("2d"),r=f.createLinearGradient(0,0,0,128);r.addColorStop(0,o%2?"#3ddc84":"#2ecf7e"),r.addColorStop(1,o%2?"#1aa864":"#0f8f52"),f.fillStyle=r,f.fillRect(0,0,256,128),f.strokeStyle="rgba(255,255,255,0.85)",f.lineWidth=5,f.strokeRect(7,7,242,114),f.strokeStyle="rgba(0,80,40,0.8)",f.lineWidth=2,f.strokeRect(13,13,230,102),f.fillStyle="rgba(255,255,255,0.95)",f.textAlign="center",f.textBaseline="middle",f.font="900 92px Arial",f.fillText("$",128,68),f.font="900 26px Arial",f.fillText("10",30,26),f.fillText("10",226,102);let b=new x8(V);return b.colorSpace=P8,b}function O(o){let V=document.createElement("canvas");V.width=128,V.height=176;let f=V.getContext("2d");f.fillStyle="#fdf6ec",f.fillRect(0,0,128,176),f.strokeStyle="rgba(60,20,80,0.8)",f.lineWidth=6,f.strokeRect(4,4,120,168),f.strokeStyle="rgba(60,20,80,0.35)",f.lineWidth=2,f.strokeRect(12,12,104,152);let r=o===0||o===1;f.fillStyle=r?"#e02a4d":"#2b2b33";let b=["♥","♦","♠","♣"];f.font="70px serif",f.fillText(b[o%4],64,92),f.font="900 30px serif",f.fillText("A",26,28),f.fillText("A",102,148);let _=new x8(V);return _.colorSpace=P8,_}let D=new sJ(Y8*0.97,Y8,$7,32),G=new d0(gN,VQ,pN),R=new d0(mN,YX,dN),M=[0,1,2].map((o)=>new s0({map:H(o),roughness:0.3,metalness:0.9,emissive:5583616,emissiveIntensity:0.07})),P=new s0({color:13212218,roughness:0.35,metalness:0.92,emissive:5583616,emissiveIntensity:0.07}),E={coin:[0,1,2].map((o)=>[P,M[o],M[o]]),bill:[0,1].map((o)=>new s0({map:U(o),roughness:0.4,metalness:0.05,emissive:13073,emissiveIntensity:0.1})),card:[0,1,2,3].map((o)=>new s0({map:O(o),roughness:0.65,metalness:0,emissive:2228292,emissiveIntensity:0.04}))};function F(o){if(o==="coin")return Y8;if(o==="dollar")return lN;return cN}function T(o){if(o==="coin")return $7/2;if(o==="dollar")return VQ/2;return YX/2}let w=new Map;function L(){w.clear()}function A(o,Q0){return o*73856093^Q0*19349663}function C(o){let Q0=Math.floor(o.x/w9),y=Math.floor(o.z/w9),V=A(Q0,y),f=w.get(V);if(!f)f=[],w.set(V,f);f.push(o)}function S(o){let Q0=Math.floor(o.x/w9),y=Math.floor(o.z/w9),V=[];for(let f=-1;f<=1;f++)for(let r=-1;r<=1;r++){let b=w.get(A(Q0+f,y+r));if(b)for(let _=0;_<b.length;_++)V.push(b[_])}return V}function k(o,Q0,y){let V=new U0(D,E.coin[Math.floor(Math.random()*3)]);return V.position.set(o,y,Q0),V.rotation.y=Math.random()*Math.PI*2,V.castShadow=!0,V.receiveShadow=!0,X.add(V),V}function z(o,Q0,y){let V=new U0(G,E.bill[Math.floor(Math.random()*2)]);return V.position.set(o,y,Q0),V.rotation.y=Math.random()*Math.PI*2,V.castShadow=!0,V.receiveShadow=!0,X.add(V),V}function u(o,Q0){let y=Q.shelfSurfaceY+0.1,V=E.card[Math.floor(Math.random()*4)],f=new U0(R,V);f.position.set(o,y,Q0),f.rotation.y=Math.random()*Math.PI*2,f.castShadow=!0,f.receiveShadow=!0,X.add(f);let r=`card_${++NX}`;return f.userData={isCard:!0,cardId:r,collected:!1},f}function j(o,Q0,y,V,f="sliding"){let r;if(o==="card")r=u(Q0,y),V=r.position.y,f="floating";else if(o==="dollar")r=z(Q0,y,V);else r=k(Q0,y,V);let b={mesh:r,type:o,x:Q0,y:V,z:y,vx:0,vy:0,vz:0,state:f,yawVelocity:(Math.random()-0.5)*0.12,spin:0,_dropTime:0,_slotTimer:0};return W.push(b),b}function n(o=55,Q0=6){s();let y=Math.floor(o*0.6);for(let V=0;V<Math.min(y,N6);V++){let f=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),r=Q.shelfBackZ+0.2+Math.random()*(Q.shelfAmplitude*1.2),b=Q.shelfSurfaceY+$7/2,_=j("coin",f,r,b,"sliding");_.onShelf=!0,_.vz=(Math.random()-0.5)*0.05}for(let V=0;V<Math.min(o-y,N6);V++){let f=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),r=Q.frontDropZ-0.5+Math.random()*0.8;j("coin",f,r,Q.surfaceY+$7/2,"sliding")}for(let V=0;V<Math.min(Q0,N6-o);V++){let f=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),r=Q.shelfBackZ+0.3+Math.random()*(Q.shelfDepth*0.5),b=j("dollar",f,r,Q.shelfSurfaceY+VQ/2,"sliding");b.onShelf=!0}for(let V=0;V<3;V++){let f=Q.leftX+0.5+Math.random()*(Q.rightX-Q.leftX-1),r=Q.shelfBackZ+0.5+Math.random()*(Q.shelfDepth*0.5),b=j("card",f,r);b.vz=0.06+Math.random()*0.07}for(let V=0;V<8;V++)d(),X0(),q0();for(let V of W)if(V.state==="sliding"&&V.type!=="card")V.y=Math.max(V.y,e(V));J0(2);for(let V=0;V<10;V++)d(),X0(),q0();for(let V of W)if(V.state==="sliding"&&V.type!=="card")V.y=Math.max(V.y,e(V))}function J0(o){for(let Q0=0;Q0<o;Q0++){let y=Q.leftX+1.2+Math.random()*(Q.rightX-Q.leftX-2.4),V=Q.shelfBackZ+0.6+Math.random()*(Q.shelfDepth-1.8),f=6+Math.floor(Math.random()*6);for(let r=0;r<f;r++){let b=Math.sin(r*0.3)*0.006,_=Math.cos(r*0.4)*0.006,F0=Q.shelfSurfaceY+$7/2+r*($7+0.001),V0=j("coin",y+b,V+_,F0,"sliding");V0.onShelf=!0,V0.vy=0}}}function s(){W.forEach((o)=>X.remove(o.mesh)),W.length=0}function e(o){let Q0=T(o.type);if(o.onShelf)return Q.shelfSurfaceY+Q0;if(o.z>Q.slopeStartZ&&o.z<Q.frontDropZ){let y=Math.max(0,Math.min(1,(o.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ)));return Q.surfaceY+Q0-y*Q.slopeDrop}return Q.surfaceY+Q0}function $0(o){let Q0=Y8*4;for(let y=0;y<W.length;y++){let V=W[y];if(V===o||V.onShelf||V.state!=="sliding")continue;let f=V.x-o.x,r=V.z-o.z,b=Math.sqrt(f*f+r*r);if(b<Q0&&b>0.01){let _=(1-b/Q0)*0.3;V.vx+=f/b*_,V.vz+=r/b*_*0.5}}}function d(){L();let o=new Map;for(let y=0;y<W.length;y++){let V=W[y];if(o.set(V,y),V.state==="dropping"||V.state==="floating")continue;C(V)}let Q0=new Set;for(let y=0;y<W.length;y++){let V=W[y];if(V.state==="dropping")continue;if(V.state==="floating")continue;let f=S(V);for(let r=0;r<f.length;r++){let b=f[r];if(b===V)continue;let _=o.get(b);if(_===void 0)continue;let F0=y<_?`${y}:${_}`:`${_}:${y}`;if(Q0.has(F0))continue;Q0.add(F0);let V0=F(V.type),o0=F(b.type),v=V0+o0+0.02,XJ=b.x-V.x,v0=b.z-V.z,b0=Math.sqrt(XJ*XJ+v0*v0),N=Math.abs(b.y-V.y),q=T(V.type)+T(b.type)-N,I=V.state==="falling",h=b.state==="falling";if(!I&&!h&&q<=0.004){if(N<=0.004&&b0<v){let l=Math.min((v-b0)*0.18,0.035),Z0=b0>0.001?XJ/b0:1,Y0=b0>0.001?v0/b0:0;V.x-=Z0*l,V.z-=Y0*l,b.x+=Z0*l,b.z+=Y0*l}continue}if(b0<v){let l=v-b0,Z0=1,Y0=0;if(b0>0.001)Z0=XJ/b0,Y0=v0/b0;else{let m=b.vx-V.vx,a=b.vz-V.vz,D0=Math.sqrt(m*m+a*a);if(D0>0.001)Z0=m/D0,Y0=a/D0}if(I!==h){let m=I?V:b,a=I?b:V,D0=T(m.type),E0=a.y+T(a.type),G0=m.y-D0,O0=G0-E0,p0=m.vy<0,l0=(m._prevY||m.y)-D0>E0&&G0<=E0+0.045;if(p0&&(l0||O0>-0.05&&O0<0.045)){m.y=E0+D0,m.vy=0,m.state="sliding",m.onShelf=!!a.onShelf,m.vx=a.vx*0.7+m.vx*0.2,m.vz=a.vz*0.7+m.vz*0.2,m._dropTime=0,m._slotTimer=0;continue}if(q>0){let e0=Math.min(l*0.12,0.025);a.x+=Z0*e0*(I?1:-1),a.z+=Y0*e0*(I?1:-1),m.vx*=0.85,m.vz*=0.85}}else{let m=Math.min(l*0.3,0.06);V.x-=Z0*m,V.z-=Y0*m,b.x+=Z0*m,b.z+=Y0*m;let a=(b.vx-V.vx)*Z0+(b.vz-V.vz)*Y0;if(a<0){let D0=performance.now();if(K&&V.type==="coin"&&b.type==="coin"&&a<-0.18&&D0-Z>42)Z=D0,K(V.x+Z0*V0,V.y,V.z+Y0*V0,Math.min(1,Math.abs(a)));let E0=a*k8*0.14;V.vx+=E0*Z0,V.vz+=E0*Y0,b.vx-=E0*Z0,b.vz-=E0*Y0}}}}}for(let y=0;y<W.length;y++){let V=W[y];if(V.type==="card")continue;if(Math.abs(V.vx)>BQ)V.vx=Math.sign(V.vx)*BQ;if(Math.abs(V.vz)>BQ)V.vz=Math.sign(V.vz)*BQ}}function X0(){let o=new Map;for(let Q0=0;Q0<W.length;Q0++){let y=W[Q0];if(y.type==="card"||y.state==="falling"||y.state==="dropping")continue;let V=Math.floor(y.x/w9),f=Math.floor(y.z/w9),r=A(V,f),b=o.get(r);if(!b)b=[],o.set(r,b);b.push(y)}for(let Q0=0;Q0<2;Q0++)for(let y=0;y<W.length;y++){let V=W[y];if(V.type==="card"||V.state==="falling"||V.state==="dropping")continue;let f=T(V.type),r=F(V.type),b=e(V)-f,_=Math.floor(V.x/w9),F0=Math.floor(V.z/w9);for(let o0=-1;o0<=1;o0++)for(let v=-1;v<=1;v++){let XJ=o.get(A(_+o0,F0+v));if(!XJ)continue;for(let v0=0;v0<XJ.length;v0++){let b0=XJ[v0];if(b0===V)continue;let N=F(b0.type),q=b0.x-V.x,I=b0.z-V.z;if(Math.sqrt(q*q+I*I)>r+N*0.95)continue;let l=T(b0.type),Z0=b0.y+l;if(Z0<V.y-f+0.02&&Z0>b)b=Z0}}let V0=b+f;if(V.y<V0-0.001){if(V.y=V0,V.vy<0)V.vy=0}}}function q0(){for(let o=0;o<W.length;o++){let Q0=W[o];if(Q0.state==="dropping"||Q0.state==="falling")continue;let y=F(Q0.type),V=Math.max(0,(Q0.z-Q.backZ)/(Q.frontDropZ-Q.backZ)),f=Q.leftX+y+V*0.05,r=Q.rightX-y-V*0.05;if(Q0.x<f)Q0.x=f,Q0.vx=Math.abs(Q0.vx)*k8*0.5;if(Q0.x>r)Q0.x=r,Q0.vx=-Math.abs(Q0.vx)*k8*0.5;if(Q0.z<Q.backZ+y)Q0.z=Q.backZ+y,Q0.vz=Math.abs(Q0.vz)*k8;if(Q0.onShelf&&Q0.z<Q.shelfBackZ+y+0.03)Q0.z=Q.shelfBackZ+y+0.03,Q0.vz=Math.abs(Q0.vz)*k8;if(!Q0.onShelf&&Q0.z<Q.backZ+y)Q0.z=Q.backZ+y,Q0.vz=Math.abs(Q0.vz)*k8}}function L0(o){let Q0=Q.shelfFrontZ,y=Q.shelfBackZ-0.5,V=Math.max(0,Q.shelfVelocity)*0.8;for(let f=0;f<W.length;f++){let r=W[f];if(r.onShelf||r.state!=="sliding"||r.type==="card")continue;if(r.z>y&&r.z<Q0+1.5){let b=Q0-r.z,_=Math.max(0,1-b/2);r.vz+=V*_*o}if(Q.shelfVelocity>0){let b=Q.shelfFrontZ,_=b+F(r.type)+0.02;if(r.z<_&&r.z>b-0.35){if(r.z+=Math.min(_-r.z,Q.shelfVelocity*o*2),r.vz<0.2)r.vz=0.2}}}}function y0(o=1,Q0="coin"){if(W.length>=N6){let b=[];for(let _=0;_<W.length&&b.length<3;_++)if(W[_].type!=="card"&&W[_].state==="sliding")b.push(_);b.reverse().forEach((_)=>{X.remove(W[_].mesh),W.splice(_,1)})}let y=Q.dropX+(Math.random()-0.5)*0.08,V=Q.dropZ,f=Q.dropHeight,r=j(Q0,y,V,f,"falling");return r.y=f,r.vy=-0.2,r.vz=(Math.random()-0.5)*0.05+o*0.02,r.vx=(Math.random()-0.5)*0.05,r.spin=6+Math.random()*3,r._dropTime=performance.now(),r}function T0(){let o={win:{coins:0,dollars:0,cards:[]},hole:{coins:0,dollars:0,cards:[]}},Q0=[];for(let y=0;y<W.length;y++){let V=W[y],f=V.z>Q.frontDropZ&&V.y<Q.surfaceY-0.05;if(V.z>Q.winZ||f){let r=Q.getZoneType(V.x);if(V.type==="card")o[r].cards.push(V.mesh.userData.cardId);else if(V.type==="dollar")o[r].dollars++;else o[r].coins++;Q0.push(y)}}return Q0.reverse().forEach((y)=>{X.remove(W[y].mesh),W.splice(y,1)}),o}function OJ(o,Q0){let V=o/4;for(let r=0;r<4;r++){for(let b=0;b<W.length;b++){let _=W[b];if(_.type==="card"||_.state==="floating")continue;if(_.state==="falling"){_._prevY=_.y,_.vy-=HX*V,_.y+=_.vy*V,_.x+=_.vx*V,_.z+=_.vz*V;let F0=Math.abs(_.x)<Q.slotHalfWidth,V0=_.z>Q.slotBackZ&&_.z<Q.slotFrontZ,o0=!(F0&&V0),v=T(_.type),XJ=Q.shelfSurfaceY+v,v0=Q.surfaceY+v;if(o0&&_.y<=XJ){if(_.y=XJ,_.vy*=-qX,Math.abs(_.vy)<=UX)_.vy=0,_.vx*=0.5,_.vz*=0.5,_.state="sliding",_.onShelf=!0,_.mesh.rotation.x=0,_.mesh.rotation.z=0}else if(_.y<=v0){if(_.y=v0,_.vy*=-qX,Math.abs(_.vy)<=UX)_.vy=0,_.vx*=0.5,_.vz*=0.5,_.state="sliding",_.onShelf=!1,_.mesh.rotation.x=0,_.mesh.rotation.z=0}}if(_.state==="dropping"){if(_.vy-=HX*V,_.x<Q.leftX+Y8)_.x=Q.leftX+Y8,_.vx=Math.abs(_.vx)*k8;if(_.x>Q.rightX-Y8)_.x=Q.rightX-Y8,_.vx=-Math.abs(_.vx)*k8;if(_.z>=Q.frontDropZ)_.vz+=4*V,_.vx*=0.98;else _.vx*=0.95,_.vz*=0.93;if(_.y+=_.vy*V,_.z+=_.vz*V,_.x+=_.vx*V,_.y<=Q.surfaceY+T(_.type)&&_.z<Q.frontDropZ){let F0=Q.surfaceY+T(_.type);if(_.z>Q.slopeStartZ&&_.z<Q.slopeEndZ){let V0=Math.max(0,Math.min(1,(_.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ)));F0=Q.surfaceY+T(_.type)-V0*Q.slopeDrop}_.y=F0,_.vy=0,_.vx*=0.3,_.vz*=0.3,_.state="sliding",_.onShelf=!1,_.mesh.rotation.x=0,_.mesh.rotation.z=0}}if(_.state==="sliding"){if(_.onShelf){let V0=Math.abs(_.x)<Q.slotHalfWidth,o0=_.z>Q.slotBackZ&&_.z<Q.slotFrontZ;if(performance.now()-(_._dropTime||0)<500||V0&&o0)_._slotTimer=(_._slotTimer||0)+V;else{let XJ=Q.shelfVelocity>0?2.2:1.1;_.vz+=(Q.shelfVelocity-_.vz)*XJ*V}}_.x+=_.vx*V,_.z+=_.vz*V;let F0=Math.exp(-uN*V);if(_.vx*=F0,_.vz*=F0,Math.abs(_.vx)<0.004)_.vx=0;if(Math.abs(_.vz)<0.004)_.vz=0;if(_.onShelf){let V0=Q.shelfBackZ+Y8+0.03;if(_.z<V0)if(_.z=V0,Q.shelfVelocity>0)_.vz+=Q.shelfVelocity*0.6;else _.vz=0}if(_.onShelf){let V0=Q.shelfFrontZ-F(_.type);if(_.z>V0){if(_.state="dropping",_.onShelf=!1,_.vy=-0.1,_.vz<0.15)_.vz=0.15;$0(_)}}if(_.onShelf){let V0=Math.abs(_.x)<Q.slotHalfWidth,o0=_.z>Q.slotBackZ&&_.z<Q.slotFrontZ;if(V0&&o0&&Q.shelfVelocity<-0.3&&(_._slotTimer||0)>0.3)_.onShelf=!1,_.state="falling",_.vy=-0.5,_._slotTimer=0}if(!_.onShelf&&_.z>Q.frontDropZ){if(_.state="dropping",_.vy=-0.3,_.vz<0.5)_.vz=0.5}if(!_.onShelf&&_.z>Q.slopeStartZ+F(_.type)*0.5&&_.z<Q.frontDropZ){if(Math.abs(_.y-(Q.surfaceY+T(_.type)))<0.15){let o0=Math.max(0,Math.min(1,(_.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ))),v=2+o0*3;_.vz+=v*V;let XJ=Q.surfaceY+T(_.type)-o0*Q.slopeDrop;if(_.y<XJ+0.01)_.y=XJ}}}}d(),X0(),q0();for(let b=0;b<W.length;b++){let _=W[b];if(_.state==="sliding"&&_.type!=="card"){let F0=e(_);if(_.y<F0)_.y=F0}}L0(V);for(let b=0;b<W.length;b++){let _=W[b];if(_.type==="card"||_.state==="dropping")continue;if(_.state==="falling"){if(_.x<Q.leftX+Y8)_.x=Q.leftX+Y8,_.vx=Math.abs(_.vx)*k8;if(_.x>Q.rightX-Y8)_.x=Q.rightX-Y8,_.vx=-Math.abs(_.vx)*k8;if(_.z<Q.backZ+Y8)_.z=Q.backZ+Y8,_.vz=Math.abs(_.vz)*k8}if(_.state==="sliding"&&_.onShelf){let F0=F(_.type);if(_.x<Q.leftX+F0+0.06)_.x=Q.leftX+F0+0.06,_.vx=Math.abs(_.vx)*k8;if(_.x>Q.rightX-F0-0.06)_.x=Q.rightX-F0-0.06,_.vx=-Math.abs(_.vx)*k8}}}let f=performance.now();for(let r=0;r<W.length;r++){let b=W[r];if(b.type==="card"||b.state==="floating"){b.z+=b.vz*o,b.y=Q.shelfSurfaceY+0.12+Math.sin(f*0.001+b.x)*0.01,b.mesh.rotation.y+=o*0.5,b.mesh.position.set(b.x,b.y,b.z);continue}if(b.state==="falling")b.mesh.rotation.y+=o*b.spin,b.mesh.rotation.x=Math.sin(f*0.01+b.x)*0.1,b.mesh.rotation.z=Math.cos(f*0.01+b.z)*0.1;else if(b.state==="dropping")b.mesh.rotation.x+=o*1.8,b.mesh.rotation.z+=o*1.1;else if(b.state==="sliding"){b.mesh.rotation.x=0,b.mesh.rotation.z=0;let F0=Math.sqrt(b.vx*b.vx+b.vz*b.vz)>0.05?(b.vx-b.vz)*0.08:0;b.yawVelocity+=(F0-b.yawVelocity)*Math.min(1,o*5),b.yawVelocity*=Math.exp(-2.4*o),b.mesh.rotation.y+=b.yawVelocity*o}b.mesh.position.set(b.x,b.y,b.z)}qJ(Q0),ZJ(o)}function qJ(o){let Q0=W.filter((V)=>V.type!=="card").length,y=W.filter((V)=>V.type==="card").length;if(Q0<15&&W.length<N6-15){let V=15-Q0;for(let f=0;f<V;f++){let r=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),b="coin";if(Math.random()<0.12)b="dollar";else if(Math.random()<0.04&&y<nN){b="card";let V0=Q.shelfBackZ+0.5+Math.random()*(Q.shelfDepth*0.5),o0=j("card",r,V0);o0.vz=0.06+Math.random()*0.07;continue}let _=Q.shelfBackZ+0.2+Math.random()*(Q.shelfDepth*0.5),F0=j(b,r,_,Q.shelfSurfaceY+(b==="coin"?$7/2:VQ/2),"sliding");F0.onShelf=!0}}}let K0=36,N0=new sJ(0.19,0.19,0.04,20),z0=[],M0=(o)=>0.32-Math.max(0,o-Q.frontDropZ)*0.122;function u0(o,Q0,y){let V=Math.max(0,Math.min(Math.floor(o||0),12));for(let f=0;f<V;f++){if(z0.length>=K0){let _=z0.shift();X.remove(_.mesh)}let r=new U0(N0,E.coin[Math.floor(Math.random()*3)]);r.castShadow=!0,X.add(r);let b=Q.frontDropZ+1.6+Math.random()*0.5;z0.push({mesh:r,t:0,dur:1+Math.random()*0.5,x0:Q0+Math.random()*(y-Q0),y0:1.3+Math.random()*0.25,z0:Q.frontDropZ+0.08,x1:Math.max(-3,Math.min(3,(Math.random()-0.5)*5.2)),z1:b,settleY:M0(b)+0.03+Math.random()*0.07,spin:6+Math.random()*8,phase:Math.random()*Math.PI*2,settled:!1})}}function ZJ(o){for(let Q0=z0.length-1;Q0>=0;Q0--){let y=z0[Q0];y.t+=o;let V=Math.min(1,y.t/y.dur);if(y.settled){y.mesh.position.set(y.x1,y.settleY+Math.sin(y.t*1.4+y.phase)*0.004,y.z1),y.mesh.rotation.y+=o*0.2;continue}let f=Math.min(1,V/0.45),r={x:y.x0,y:y.y0+0.35,z:y.z0},b={x:y.x0,y:M0(y.z0+0.1)+0.02,z:y.z0+0.1},_=1-f,F0=_*_*y.x0+2*_*f*r.x+f*f*b.x,V0=_*_*y.y0+2*_*f*r.y+f*f*b.y,o0=_*_*y.z0+2*_*f*r.z+f*f*b.z;if(V<0.45)y.mesh.position.set(F0,Math.max(V0,M0(o0)),o0);else{let v=Math.min(1,(V-0.45)/0.55),XJ={x:(y.x0+y.x1)/2,y:M0((y.z0+y.z1)/2)+0.22,z:(y.z0+y.z1)/2},v0=1-v,b0=v0*v0*b.x+2*v0*v*XJ.x+v*v*y.x1,N=v0*v0*b.y+2*v0*v*XJ.y+v*v*y.settleY,q=v0*v0*b.z+2*v0*v*XJ.z+v*v*y.z1;if(y.mesh.position.set(b0,Math.max(N,M0(q)-0.01),q),V>=1)y.settled=!0}y.mesh.rotation.x+=o*y.spin*0.7,y.mesh.rotation.z+=o*y.spin}}return{initObjects:n,dropObject:y0,collectFallen:T0,update:OJ,clearObjects:s,group:X,spawnWinCoins:u0}}var pK={en:{coins:"coins",dollars:"dollars",total:"total",prestige:"prestige",coinsBtn:"Coins",dollarsBtn:"Dollars",dropCoin:"DROP COIN",dropDollar:"DROP BILL",dropSub:"SPACE to drop",costCoin:"-1 coin",costDollar:"-1 $",shop:"Shop",prestigeTab:"Prestige",shopTitle:"Upgrades",prestigePoints:"Prestige Points",prestigeSacrifice:"SACRIFICE PROGRESS",prestigeDesc:"Lose everything but gain permanent prestige points",pushPower:"Demon Push",pushPowerDesc:"Coins push with the force of the underworld",multiDrop:"Multi-Drop",multiDropDesc:"Drop multiple coins at once",autoDrop:"Auto Dealer",autoDropDesc:"A phantom dealer drops for you!",multiplier:"Devil Multiplier",multiplierDesc:"Multiplies all rewards by sacred fire",maxCoins:"Infinite Wallet",maxCoinsDesc:"Max coin capacity increased by spirits",regenSpeed:"Occult Regen",regenDesc:"Free coins arrive from beyond the grave",dollarMagnet:"Dollar Magnet",dollarMagnetDesc:"Multiplies your dollar earnings",luck:"Fortune's Favor",luckDesc:"WIN zones have a chance to roll bonus coins (2×–4×)",comboShield:"Combo Shield",comboShieldDesc:"Combo decays more slowly between drops",prestigeBoost:"Prestige Boost",prestigeBoostDesc:"Gain more prestige points per reset",level:"Lv.",max:"MAX",soulBonus:"Soul Pact",soulBonusDesc:"Start each life with +50% max coins",darkMultiplier:"Dark Multiplier",darkMultiplierDesc:"Permanent +1 reward multiplier per level",voidDollars:"Void Blessing",voidDollarsDesc:"Start with starting-game dollars",occultAuto:"Occult Auto-Drop",occultAutoDesc:"Auto-drop 2x faster (permanent)",saintGold:"Saint Blessing",saintGoldDesc:"Coin gains +4 per level (compounds with Dark Multiplier)",upgraded:"Upgraded! Lv.",notEnoughCoins:"Not enough coins!",notEnoughDollars:"Not enough dollars!",maxLevel:"Already max level!",prestigeUp:"Prestige up! Lv.",notEnoughPrestige:"Not enough prestige points",coinsEarned:"coins earned!",coinsLost:"coins lost to the void...",cardsLost:"card(s) lost!",comboText:"COMBO x",freeCoins:"free coins claimed!",prestigeGain:"PRESTIGE! +",prestigeTotal:" (Total: ",prestigeWait:"Earn more before prestiging (",prestigeCurrent:" pts current)",resetConfirm:"Reset all progress (except prestige)?",categoryEconomy:"⚙ ECONOMY",categoryPush:"⚒ PUSH",categoryCapacity:"\uD83E\uDEA3 CAPACITY",categoryLuck:"\uD83C\uDF40 LUCK",categoryCurrency:"\uD83D\uDCB1 CURRENCY",categoryMeta:"✨ META",buy:"BUY",buyMax:"BUY MAX",noFunds:"Out of Funds!",freeCoinsDesc:"The spirits of the casino offer you a second chance...",claimBonus:"CLAIM BONUS",nextDonation:"Next donation in ",help:"Help",wastedCoins:"coins wasted (max reached)",cardCollected:"Bonus card collected! #",cardBonus:"bonus reward!",milestone:"MILESTONE",milestoneReached:"Milestone reached! +",milestoneBonusSuffix:" free coins",milestone100:"First hundred",milestone500:"Half a grand",milestone1k:"Four digits",milestone5k:"Heavy wallet",milestone10k:"Ten thousand!",milestone50k:"Halfway to a fortune",milestone100k:"Six figures",milestone500k:"Half a million",milestone1m:"MILLIONAIRE",jackpot:"JACKPOT!",jackpotBonus:"Jackpot bonus: +",winStreak:"WIN STREAK",streakBroken:"Streak broken",statsTitle:"\uD83D\uDCCA LIFETIME RECORDS",statsPeakCoins:"Peak coins",statsPeakDollars:"Peak dollars",statsPeakCombo:"Peak combo",statsTotalDrops:"Total drops",statsJackpots:"JACKPOTS hit",statsMilestones:"Milestones cleared",statsBestStreak:"Best win streak",jackpotChance:"Jackpot's Favor",jackpotChanceDesc:"Increases the chance of hitting the JACKPOT!",goldenTouch:"Golden Touch",goldenTouchDesc:"Chance to double earned coin batches",gambleTitle:"⚡ RISK IT",gambleDesc:"Double or Nothing! 50/50 chance",gambleWin:"YOU WON!",gambleLose:"YOU LOST!",gambleGain:"Profit: +",gambleLoss:"Loss: -",gambleWager:"Wager:",gambleMax:"MAX",gambleHalf:"HALF",comboBig:"COMBO"},fr:{coins:"pieces",dollars:"dollars",total:"total",prestige:"prestige",coinsBtn:"Pieces",dollarsBtn:"Dollars",dropCoin:"LACHER PIECE",dropDollar:"LACHER BILLET",dropSub:"ESPACE pour drop",costCoin:"-1 piece",costDollar:"-1 $",shop:"Boutique",prestigeTab:"Prestige",shopTitle:"Ameliorations",prestigePoints:"Points de Prestige",prestigeSacrifice:"SACRIFIER LA PROGRESSION",prestigeDesc:"Perds tout mais gagne des points de prestige permanents",pushPower:"Poussee Demoniaque",pushPowerDesc:"Les pieces poussent avec la force des enfers",multiDrop:"Multi-Drop",multiDropDesc:"Lache plusieurs pieces physiques d'un coup",autoDrop:"Croupier Automatique",autoDropDesc:"Un croupier fantome drop pour toi !",multiplier:"Multiplicateur du Diable",multiplierDesc:"Multiplie toutes les recompenses par le feu sacre",maxCoins:"Portefeuille de l'Infini",maxCoinsDesc:"Capacite max augmente par les esprits",regenSpeed:"Regeneration Occulte",regenDesc:"Les pieces gratuites arrivent d'outre-tombe",dollarMagnet:"Aimant a Dollars",dollarMagnetDesc:"Multiplie tes gains en dollars",luck:"Faveur de la Fortune",luckDesc:"Les zones WIN ont une chance de donner un bonus (x2-x4)",comboShield:"Bouclier de Combo",comboShieldDesc:"Le combo s'estompe plus lentement entre les drops",prestigeBoost:"Gain de Prestige Accru",prestigeBoostDesc:"Gagne plus de points de prestige a chaque reset",level:"Niv.",max:"MAX",soulBonus:"Pacte des Ames",soulBonusDesc:"Commence chaque vie avec +50% de pieces max",darkMultiplier:"Multiplicateur Obscur",darkMultiplierDesc:"+1 multiplicateur de recompense permanent par niveau",voidDollars:"Benediction du Vide",voidDollarsDesc:"Commence avec des dollars d'entree de jeu",occultAuto:"Auto-Drop Occulte",occultAutoDesc:"Auto-drop 2x plus rapide (permanent)",saintGold:"Benediction des Saints",saintGoldDesc:"Gains de pieces +4 par niveau (se combine avec Multiplicateur Obscur)",upgraded:"Ameliore ! Niv.",notEnoughCoins:"Pas assez de pieces !",notEnoughDollars:"Pas assez de dollars !",maxLevel:"Deja max level !",prestigeUp:"Prestige up ! Niv.",notEnoughPrestige:"Pas assez de points de prestige",coinsEarned:"pieces gagnees !",coinsLost:"pieces perdues dans le vide...",cardsLost:"carte(s) perdue(s) !",comboText:"Combo x",freeCoins:"pieces gratuites !",prestigeGain:"PRESTIGE ! +",prestigeTotal:" (Total: ",prestigeWait:"Gagne plus avant de prestiger (",prestigeCurrent:" pts actuels)",resetConfirm:"Reinitialiser toute la progression (hors prestige) ?",categoryEconomy:"⚙ ECONOMIE",categoryPush:"⚒ POUSSEE",categoryCapacity:"\uD83E\uDEA3 CAPACITE",categoryLuck:"\uD83C\uDF40 CHANCE",categoryCurrency:"\uD83D\uDCB1 MONNAIE",categoryMeta:"✨ META",buy:"ACHETER",buyMax:"ACHETER MAX",noFunds:"Plus de fonds !",freeCoinsDesc:"Les esprits du casino t'offrent une seconde chance...",claimBonus:"RECLAMER LE BUTIN",nextDonation:"Prochain don dans ",help:"Aide",wastedCoins:"pieces gaspilees (max atteint)",cardCollected:"Carte bonus collectionnee ! #",cardBonus:"recompense bonus !",milestone:"JALON",milestoneReached:"Jalon atteint ! +",milestoneBonusSuffix:" pieces gratuites",milestone100:"Premiere centaine",milestone500:"Un demi-millier",milestone1k:"Quatre chiffres",milestone5k:"Portefeuille lourd",milestone10k:"Dix mille !",milestone50k:"A mi-chemin de la fortune",milestone100k:"Six chiffres",milestone500k:"Un demi-million",milestone1m:"MILLIONNAIRE",jackpot:"JACKPOT !",jackpotBonus:"Bonus jackpot : +",winStreak:"SERIE DE VICTOIRES",streakBroken:"Serie cassee",statsTitle:"\uD83D\uDCCA RECORDS A VIE",statsPeakCoins:"Pieces max",statsPeakDollars:"Dollars max",statsPeakCombo:"Combo max",statsTotalDrops:"Total de drops",statsJackpots:"JACKPOTS reussis",statsMilestones:"Jalons franchis",statsBestStreak:"Meilleure serie",jackpotChance:"Faveur du Jackpot",jackpotChanceDesc:"Augmente les chances de gagner le JACKPOT !",goldenTouch:"Touche Doree",goldenTouchDesc:"Chance de doubler les gains de pieces",gambleTitle:"⚡ RISQUE TOUT",gambleDesc:"Double ou Rien ! 50/50 de chance",gambleWin:"GAGNE !",gambleLose:"PERDU !",gambleGain:"Gain: +",gambleLoss:"Perte: -",gambleWager:"Mise:",gambleMax:"MAX",gambleHalf:"MOITIE",comboBig:"COMBO"}},LQ=localStorage.getItem("coinpusher_lang")||"en";function _0(J){return pK[LQ]&&pK[LQ][J]||pK.en[J]||J}function mK(){return LQ}function FX(J){LQ=J,localStorage.setItem("coinpusher_lang",J)}var TJ=Object.freeze({ECONOMY:"economy",PUSH:"push",CAPACITY:"capacity",LUCK:"luck",CURRENCY:"currency",META:"meta"}),sN=[{id:"pushPower",nameKey:"pushPower",descKey:"pushPowerDesc",icon:"\uD83D\uDC80",baseCost:10,costMultiplier:1.45,maxLevel:20,effect:(J)=>1+J*0.3,category:TJ.PUSH},{id:"multiDrop",nameKey:"multiDrop",descKey:"multiDropDesc",icon:"\uD83C\uDFB0",baseCost:25,costMultiplier:1.55,maxLevel:10,effect:(J)=>1+J,category:TJ.ECONOMY},{id:"autoDrop",nameKey:"autoDrop",descKey:"autoDropDesc",icon:"\uD83C\uDCCF",baseCost:60,costMultiplier:1.7,maxLevel:12,effect:(J)=>J*0.5,category:TJ.ECONOMY},{id:"multiplier",nameKey:"multiplier",descKey:"multiplierDesc",icon:"♦️",baseCost:40,costMultiplier:1.85,maxLevel:25,effect:(J)=>1+J*0.4,category:TJ.ECONOMY},{id:"maxCoins",nameKey:"maxCoins",descKey:"maxCoinsDesc",icon:"\uD83E\uDE99",baseCost:15,costMultiplier:1.35,maxLevel:40,effect:(J)=>100+J*30,category:TJ.CAPACITY},{id:"regenSpeed",nameKey:"regenSpeed",descKey:"regenDesc",icon:"⏳",baseCost:20,costMultiplier:1.5,maxLevel:20,effect:(J)=>Math.max(1,30-J*1.4),category:TJ.CAPACITY},{id:"dollarMagnet",nameKey:"dollarMagnet",descKey:"dollarMagnetDesc",icon:"\uD83D\uDCB5",baseCost:80,costMultiplier:1.6,maxLevel:15,effect:(J)=>1+J*0.3,category:TJ.CURRENCY},{id:"luck",nameKey:"luck",descKey:"luckDesc",icon:"\uD83C\uDF40",baseCost:200,costMultiplier:1.9,maxLevel:10,effect:(J)=>J*0.05,category:TJ.LUCK},{id:"comboShield",nameKey:"comboShield",descKey:"comboShieldDesc",icon:"\uD83D\uDEE1️",baseCost:120,costMultiplier:1.7,maxLevel:8,effect:(J)=>Math.min(8,2.5+J*0.6),category:TJ.CAPACITY},{id:"prestigeBoost",nameKey:"prestigeBoost",descKey:"prestigeBoostDesc",icon:"\uD83C\uDF1F",baseCost:500,costMultiplier:2,maxLevel:10,effect:(J)=>1+J*0.3,category:TJ.META},{id:"jackpotChance",nameKey:"jackpotChance",descKey:"jackpotChanceDesc",icon:"\uD83C\uDFB0",baseCost:350,costMultiplier:2,maxLevel:10,effect:(J)=>0.02+J*0.005,category:TJ.LUCK},{id:"goldenTouch",nameKey:"goldenTouch",descKey:"goldenTouchDesc",icon:"\uD83E\uDD32",baseCost:500,costMultiplier:2.1,maxLevel:10,effect:(J)=>J*0.04,category:TJ.LUCK}],r8=sN.map((J)=>({...J,get name(){return _0(J.nameKey)},get desc(){return _0(J.descKey)}}));function G6(J,Q){return Math.floor(J.baseCost*Math.pow(J.costMultiplier,Q))}function W8(J,Q){return J.effect(Q)}function OX(J,Q,$,K=99){let W=[];for(let Z=0;Z<K;Z++){let X=Q+Z;if(X>=J.maxLevel)break;let Y=G6(J,X);if(Y>$)break;W.push(Y),$-=Y}return W}var DX=[{id:"soulBonus",nameKey:"soulBonus",descKey:"soulBonusDesc",icon:"\uD83D\uDC9C",baseCost:1,costMultiplier:2,maxLevel:10,effect:(J)=>1+J*0.5},{id:"darkMultiplier",nameKey:"darkMultiplier",descKey:"darkMultiplierDesc",icon:"\uD83C\uDF19",baseCost:3,costMultiplier:2.5,maxLevel:8,effect:(J)=>1+J},{id:"voidDollars",nameKey:"voidDollars",descKey:"voidDollarsDesc",icon:"\uD83D\uDCB5",baseCost:2,costMultiplier:2,maxLevel:10,effect:(J)=>J*50},{id:"occultAuto",nameKey:"occultAuto",descKey:"occultAutoDesc",icon:"\uD83D\uDD2E",baseCost:5,costMultiplier:3,maxLevel:5,effect:(J)=>1+J*0.4},{id:"saintGold",nameKey:"saintGold",descKey:"saintGoldDesc",icon:"⭐",baseCost:8,costMultiplier:3,maxLevel:5,effect:(J)=>1+J*4}],F6=DX.map((J)=>({...J,get name(){return _0(J.nameKey)},get desc(){return _0(J.descKey)}}));function zQ(J,Q){return Math.floor(J.baseCost*Math.pow(J.costMultiplier,Q))}function EX(J,Q){return J.effect(Q)}function RX(J,Q){let $=J+Q*10;return Math.max(1,Math.floor(Math.sqrt($/50)))}function IQ(J){let Q={soulMultiplier:1,darkMultiplier:1,voidStartingDollars:0,occultSpeedBonus:1,saintMultiplier:1};if(!J.prestigeUpgrades)return Q;return DX.forEach(($)=>{let K=J.prestigeUpgrades[$.id]||0;if(K>0){let W=EX($,K);switch($.id){case"soulBonus":Q.soulMultiplier=W;break;case"darkMultiplier":Q.darkMultiplier=W;break;case"voidDollars":Q.voidStartingDollars=W;break;case"occultAuto":Q.occultSpeedBonus=W;break;case"saintGold":Q.saintMultiplier=W;break}}}),Q}function M8(J){try{let Q={schemaVersion:2,coins:J.coins,dollars:J.dollars,maxDollars:J.maxDollars,totalEarned:J.totalEarned,totalEarnedLifetime:J.totalEarnedLifetime||J.totalEarned,totalDropped:J.totalDropped,totalDollarsEarned:J.totalDollarsEarned||0,activeCurrency:J.activeCurrency||"coins",autoDropEnabled:J.autoDropEnabled??!1,upgrades:{...J.upgrades},prestigePoints:J.prestigePoints,prestigeUpgrades:{...J.prestigeUpgrades},collectedCards:J.collectedCards||[],dropCount:J.dropCount||0,lastDropTime:J.lastDropTime||0,regenCooldown:typeof J.regenCooldown==="number"?J.regenCooldown:30,isGameOver:!!J.isGameOver,peakCoins:J.peakCoins||0,peakDollars:J.peakDollars||0,peakCombo:J.peakCombo||0,bestWinStreak:J.bestWinStreak||0,winStreak:J.winStreak||0,milestonesHit:Array.isArray(J.milestonesHit)?J.milestonesHit:[],jackpotsHit:J.jackpotsHit||0,gameTime:J.gameTime||0,lastSave:Date.now()};localStorage.setItem("coinpusher3d_save",JSON.stringify(Q))}catch(Q){console.warn("Save failed:",Q)}}function kX(){try{let J=localStorage.getItem("coinpusher3d_save");if(!J)return null;let Q=JSON.parse(J);if(!Q||!Number.isFinite(Q.coins)||!Number.isFinite(Q.totalEarned))return null;return Q}catch(J){return console.warn("Load failed:",J),null}}function MX(J){setInterval(()=>{if(J)M8(J)},1e4)}function VX(){localStorage.removeItem("coinpusher3d_save")}function K7(J,Q=0){return Number.isFinite(J)?J:Q}function BX(J,Q){let $=J&&typeof J==="object"?J:{},K={};for(let W of Q){let Z=Math.floor(K7($[W.id],0));K[W.id]=Math.max(0,Math.min(W.maxLevel,Z))}return K}function LX(){let J=kX(),Q=Math.max(0,K7(J?.prestigePoints)),$=BX(J?.prestigeUpgrades,F6),K=IQ({prestigePoints:Q,prestigeUpgrades:$}),W=BX(J?.upgrades,r8),Z=W.maxCoins||0,X=W8(r8[4],Z),H={coins:0,maxCoins:Math.floor(X*K.soulMultiplier),dollars:0,maxDollars:Math.max(10,K.voidStartingDollars||0),totalEarned:0,totalEarnedLifetime:0,totalDropped:0,totalDollarsEarned:0,upgrades:{},dropCount:0,lastDropTime:0,autoDropAccumulator:0,regenCooldown:30,_regenInitialized:!1,isGameOver:!1,gameTime:0,activeCurrency:J?.activeCurrency==="dollars"?"dollars":"coins",autoDropEnabled:J?.autoDropEnabled??!1,prestigePoints:Q,prestigeUpgrades:{...$},collectedCards:Array.isArray(J?.collectedCards)?[...J.collectedCards]:[],peakCoins:0,peakDollars:0,peakCombo:0,bestWinStreak:0,winStreak:0,milestonesHit:[],jackpotsHit:0};if(J){H.totalEarned=Math.max(0,K7(J.totalEarned)),H.totalEarnedLifetime=Math.max(0,K7(J.totalEarnedLifetime,H.totalEarned)),H.totalDropped=Math.max(0,K7(J.totalDropped)),H.totalDollarsEarned=Math.max(0,K7(J.totalDollarsEarned)),H.upgrades=W;let U=Math.max(0,K7(J.maxDollars));H.maxDollars=Math.max(10,K.voidStartingDollars||0,U);let O=Number.isFinite(J.coins)?J.coins:0;H.coins=Math.min(Math.max(O,0),H.maxCoins);let D=Number.isFinite(J.dollars)?J.dollars:0;if(H.dollars=Math.min(Math.max(D,0),H.maxDollars),Number.isFinite(J.dropCount))H.dropCount=Math.max(0,Math.floor(J.dropCount));if(Number.isFinite(J.lastDropTime))H.lastDropTime=Math.max(0,J.lastDropTime);if(Number.isFinite(J.regenCooldown))H.regenCooldown=Math.max(0,J.regenCooldown);if(typeof J.isGameOver==="boolean")H.isGameOver=J.isGameOver;if(H.coins<=0&&H.dollars<=0)H._regenInitialized=!0;if(Number.isFinite(J.peakCoins))H.peakCoins=Math.max(0,J.peakCoins);if(Number.isFinite(J.peakDollars))H.peakDollars=Math.max(0,J.peakDollars);if(Number.isFinite(J.peakCombo))H.peakCombo=Math.max(0,Math.floor(J.peakCombo));if(Number.isFinite(J.bestWinStreak))H.bestWinStreak=Math.max(0,Math.floor(J.bestWinStreak));if(Number.isFinite(J.winStreak))H.winStreak=Math.max(0,Math.floor(J.winStreak));if(Array.isArray(J.milestonesHit))H.milestonesHit=J.milestonesHit;if(Number.isFinite(J.jackpotsHit))H.jackpotsHit=Math.max(0,Math.floor(J.jackpotsHit));if(Number.isFinite(J.gameTime))H.gameTime=Math.max(0,J.gameTime)}else H.coins=80,H.dollars=10,H.maxDollars=10;return H}function zX(J,Q){if(J.coins<Q||Q<=0)return{success:!1,reason:"not_enough_coins"};let $=Math.random()<0.5;if($)J.coins+=Q;else J.coins-=Q;return J.totalDropped+=Q,{success:!0,win:$,wager:Q,newBalance:Math.floor(J.coins)}}function H8(J,Q){return J.upgrades[Q]||0}function H9(J){if(J._cachedStats&&J._cachedStatsKey!==void 0){let n=J._cachedStatsKey;if(n.upgradesRef===J.upgrades&&n.prestigeUpgradesRef===J.prestigeUpgrades&&n.activeCurrency===J.activeCurrency&&n.autoDropEnabled===J.autoDropEnabled)return J._cachedStats}let Q=(n)=>r8.find((J0)=>J0.id===n),$=H8(J,"pushPower"),K=H8(J,"multiDrop"),W=H8(J,"autoDrop"),Z=H8(J,"multiplier"),X=H8(J,"maxCoins"),Y=H8(J,"regenSpeed"),H=H8(J,"dollarMagnet"),U=H8(J,"prestigeBoost"),O=H8(J,"luck"),D=H8(J,"comboShield"),G=H8(J,"jackpotChance"),R=H8(J,"goldenTouch"),M=IQ(J),P=W8(Q("pushPower"),$),E=W8(Q("multiDrop"),K),F=W8(Q("autoDrop"),W)*M.occultSpeedBonus,T=W8(Q("multiplier"),Z)*M.darkMultiplier*M.saintMultiplier,w=Math.floor(W8(Q("maxCoins"),X)*M.soulMultiplier),L=W8(Q("regenSpeed"),Y),A=W8(Q("dollarMagnet"),H),C=W8(Q("prestigeBoost"),U),S=W8(Q("luck"),O),k=W8(Q("comboShield"),D),z=W8(Q("jackpotChance"),G),u=W8(Q("goldenTouch"),R),j={pushPower:P,coinsPerDrop:E,autoDropRate:F,rewardMultiplier:T,maxCoins:w,regenCooldown:L,dollarMultiplier:A,prestigeBoost:C,luckChance:S,comboWindow:k,jackpotChance:z,goldenTouch:u};return J._cachedStats=j,J._cachedStatsKey={upgradesRef:J.upgrades,prestigeUpgradesRef:J.prestigeUpgrades,activeCurrency:J.activeCurrency,autoDropEnabled:J.autoDropEnabled},j}function iN(J){return H9(J).comboWindow||2.5}function IX(J,Q){let $=H9(J);if(J.activeCurrency==="dollars")return oN(J,$,Q);let K=1;if(J.coins<K)return{success:!1,reason:"no_coins"};J.coins-=K,J.totalDropped+=K,J.dropCount++,J.lastDropTime=Date.now();let W=0;if(J.dropCount%10===0)W=1,J.coins=Math.min(J.coins+W,J.maxCoins);if(Q)Q({spent:K,earned:0,total:J.coins,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:$.pushPower,currency:"coins",coinsPerDrop:$.coinsPerDrop,comboBonus:W});return{success:!0,spent:K,earned:0,total:J.coins,stats:$}}function oN(J,Q,$){if(J.dollars<1)return{success:!1,reason:"no_dollars"};if(J.dollars-=1,J.totalDropped+=1,J.dropCount++,J.lastDropTime=Date.now(),$)$({spent:1,earned:0,total:J.dollars,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:Q.pushPower*0.8,currency:"dollars",coinsPerDrop:1,comboBonus:0});return{success:!0,spent:1,earned:0,total:J.dollars,stats:Q}}function PX(J,Q,$=1){let K=r8.find((Y)=>Y.id===Q);if(!K)return{success:!1,reason:"not_found"};let W=0,Z=null;for(let Y=0;Y<$;Y++){let H=H8(J,Q);if(H>=K.maxLevel){Z="max_level";break}let U=G6(K,H);if(J.coins<U){Z="not_enough_coins";break}J.coins-=U,J.upgrades[Q]=H+1,W++}if(W===0)return{success:!1,reason:Z||"not_enough_coins"};J._cachedStats=null,J._cachedStatsKey=void 0;let X=H9(J);return J.maxCoins=X.maxCoins,M8(J),{success:!0,newLevel:J.upgrades[Q],levelsPurchased:W,stats:X}}function AX(J,Q){let $=F6.find((Z)=>Z.id===Q);if(!$)return{success:!1,reason:"not_found"};let K=J.prestigeUpgrades[Q]||0;if(K>=$.maxLevel)return{success:!1,reason:"max_level"};let W=zQ($,K);if(J.prestigePoints<W)return{success:!1,reason:"not_enough_prestige"};return J.prestigePoints-=W,J.prestigeUpgrades[Q]=(J.prestigeUpgrades[Q]||0)+1,J._cachedStats=null,J._cachedStatsKey=void 0,M8(J),{success:!0,newLevel:J.prestigeUpgrades[Q]}}function _X(J){let Q=H9(J),$=Math.max(5,Math.floor(J.totalEarnedLifetime/100));return J.coins=Math.min(J.coins+$,J.maxCoins),J.regenCooldown=Q.regenCooldown,J._regenInitialized=!1,$}function wX(J){let Q=J.totalEarnedLifetime||J.totalEarned,$=J.totalDollarsEarned||0,K=J.upgrades.prestigeBoost||0,W=r8.find((G)=>G.id==="prestigeBoost"),Z=K>0&&W?W8(W,K):1,X=RX(Q,$),Y=Math.floor(X*Z);if(Y<=J.prestigePoints)return{success:!1,reason:"no_gain",current:J.prestigePoints};if(Q<100&&$<10)return{success:!1,reason:"no_gain",current:J.prestigePoints};let H=[...J.collectedCards||[]],U={...J.prestigeUpgrades};J.upgrades={},J.dropCount=0,J.lastDropTime=0,J.autoDropAccumulator=0,J.regenCooldown=30,J._regenInitialized=!1,J.isGameOver=!1,J.gameTime=0,J.totalEarned=0,J.totalDropped=0,J.totalDollarsEarned=0,J.prestigePoints=Y,J.prestigeUpgrades=U,J.collectedCards=H;let O=J.prestigeUpgrades.soulBonus||0,D=J.prestigeUpgrades.voidDollars||0;return J.maxCoins=Math.floor(W8(r8[4],0)*IQ(J).soulMultiplier),J.coins=Math.min(Math.max(25,Math.floor(25*(1+O*0.5))),J.maxCoins),J.maxDollars=Math.max(10,D*50),J.dollars=J.maxDollars,M8(J),{success:!0,prestigePoints:Y,gained:Y}}function CX(J,Q,$){J.gameTime+=Q;let K=H9(J);if(J.autoDropEnabled&&K.autoDropRate>0){J.autoDropAccumulator+=K.autoDropRate*Q;while(J.autoDropAccumulator>=1&&J.coins>=1){J.autoDropAccumulator-=1;let Z=1;if(J.coins>=Z){if(J.coins-=Z,J.totalDropped+=Z,J.dropCount++,J.lastDropTime=Date.now(),$)$({spent:Z,earned:0,total:J.coins,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:K.pushPower*0.7,isAuto:!0,currency:"coins",coinsPerDrop:K.coinsPerDrop,comboBonus:0})}}}if(J.coins<=0&&J.dollars<=0){if(!J._regenInitialized)J.regenCooldown=K.regenCooldown,J._regenInitialized=!0;if(J.regenCooldown-=Q,J.regenCooldown<=0)J.regenCooldown=0,J.isGameOver=!0}else J.isGameOver=!1,J._regenInitialized=!1,J.regenCooldown=K.regenCooldown;let W=iN(J)*1000;if(Date.now()-J.lastDropTime>W&&J.dropCount>0){if(J._comboDecayAccum=(J._comboDecayAccum||0)+Q,J._comboDecayAccum>=1)J.dropCount=Math.max(0,J.dropCount-Math.floor(J._comboDecayAccum)),J._comboDecayAccum=J._comboDecayAccum%1}else J._comboDecayAccum=0;return J}var HJ=null,C9=null,h7=null,D6=!1,TX=new Map,E6=(()=>{try{let J=localStorage.getItem("coinpusher_sound");return J===null?!0:J==="1"}catch(J){return!0}})();function jX(J){if(E6=!!J,!E6)D6=!1,Z1();else if(HJ&&HJ.state!=="closed"){if(D6=!0,HJ.state==="suspended")HJ.resume().catch(()=>{});bX()}try{localStorage.setItem("coinpusher_sound",E6?"1":"0")}catch(Q){}}function yX(){return E6}function rN(){if(!E6)return null;if(HJ&&HJ.state==="closed")HJ=null,C9=null,h7=null,O6=null;if(!HJ){let J=window.AudioContext||window.webkitAudioContext;if(!J)return null;HJ=new J,C9=HJ.createGain(),C9.gain.value=0.72;let Q=HJ.createDynamicsCompressor();Q.threshold.value=-20,Q.knee.value=18,Q.ratio.value=5,Q.attack.value=0.004,Q.release.value=0.16,C9.connect(Q),Q.connect(HJ.destination)}if(HJ.state==="suspended")HJ.resume().catch(()=>{});return HJ}function R6(){return HJ?HJ.currentTime:0}function aN(J,Q=0){let $=performance.now(),K=TX.get(J)||-1/0;if($-K<Q)return!1;return TX.set(J,$),!0}function vX(J,Q=0){if(!HJ||!C9)return;if(typeof HJ.createStereoPanner==="function"){let $=HJ.createStereoPanner();$.pan.value=Math.max(-1,Math.min(1,Q)),J.connect($),$.connect(C9)}else J.connect(C9)}function U8({frequency:J,endFrequency:Q=J,duration:$=0.1,type:K="sine",gain:W=0.06,delay:Z=0,pan:X=0,filterType:Y="lowpass",filterFrequency:H=2600}){if(!HJ)return;let U=R6()+Z,O=HJ.createOscillator(),D=HJ.createBiquadFilter(),G=HJ.createGain();O.type=K,O.frequency.setValueAtTime(Math.max(25,J),U),O.frequency.exponentialRampToValueAtTime(Math.max(25,Q),U+$),D.type=Y,D.frequency.setValueAtTime(H,U),D.Q.value=0.7,G.gain.setValueAtTime(0.0001,U),G.gain.linearRampToValueAtTime(W,U+Math.min(0.012,$*0.2)),G.gain.exponentialRampToValueAtTime(0.0001,U+$),O.connect(D),D.connect(G),vX(G,X),O.start(U),O.stop(U+$+0.025)}var O6=null;function hX(){if(!HJ)return null;if(!O6){let J=Math.floor(HJ.sampleRate*1.5);O6=HJ.createBuffer(1,J,HJ.sampleRate);let Q=O6.getChannelData(0);for(let $=0;$<J;$++)Q[$]=Math.random()*2-1}return O6}function b7({duration:J=0.08,gain:Q=0.04,delay:$=0,filterType:K="bandpass",filterFrequency:W=900,pan:Z=0}){if(!HJ)return;let X=hX();if(!X)return;let Y=R6()+$,H=HJ.createBufferSource(),U=HJ.createBiquadFilter(),O=HJ.createGain();H.buffer=X,U.type=K,U.frequency.value=W,U.Q.value=0.8,O.gain.setValueAtTime(0.0001,Y),O.gain.linearRampToValueAtTime(Q,Y+Math.min(0.008,J*0.25)),O.gain.exponentialRampToValueAtTime(0.0001,Y+J),H.connect(U),U.connect(O),vX(O,Z),H.start(Y),H.stop(Y+J+0.025)}function tN(J=1){U8({frequency:760,endFrequency:1120,duration:0.075,type:"triangle",gain:0.045*J,pan:-0.12,filterFrequency:3000}),U8({frequency:1380,endFrequency:980,duration:0.095,type:"sine",gain:0.026*J,delay:0.018,pan:0.12,filterFrequency:4200}),b7({duration:0.025,gain:0.018*J,filterType:"highpass",filterFrequency:1800})}function eN(){b7({duration:0.09,gain:0.045,filterType:"lowpass",filterFrequency:520}),U8({frequency:180,endFrequency:105,duration:0.16,type:"sine",gain:0.07,filterFrequency:700}),U8({frequency:470,endFrequency:720,duration:0.11,type:"triangle",gain:0.035,delay:0.025,filterFrequency:1800})}function J1(J=1){b7({duration:0.055,gain:0.018*J,filterType:"lowpass",filterFrequency:420}),U8({frequency:92,endFrequency:72,duration:0.12,type:"sine",gain:0.025*J,filterFrequency:360})}function SX(J=!1){(J?[523,659,784,1047]:[659,784]).forEach(($,K)=>{U8({frequency:$,endFrequency:$*1.012,duration:J?0.16:0.13,type:"sine",gain:J?0.075:0.055,delay:K*(J?0.075:0.06),pan:(K-1.5)*0.08,filterFrequency:3200})}),b7({duration:J?0.22:0.12,gain:J?0.025:0.012,delay:J?0.15:0.08,filterType:"highpass",filterFrequency:2600})}function Q1(){[523,659,784,1047,1319].forEach((J,Q)=>{U8({frequency:J,endFrequency:J*1.018,duration:0.2,type:"sine",gain:0.085,delay:Q*0.075,pan:Math.sin(Q)*0.22,filterFrequency:3600})}),U8({frequency:1047,endFrequency:1568,duration:0.48,type:"triangle",gain:0.08,delay:0.34,filterFrequency:4200}),b7({duration:0.42,gain:0.035,delay:0.28,filterType:"highpass",filterFrequency:3200})}function $1(){U8({frequency:230,endFrequency:145,duration:0.2,type:"sine",gain:0.07,filterFrequency:800}),U8({frequency:180,endFrequency:105,duration:0.24,type:"triangle",gain:0.045,delay:0.1,filterFrequency:700}),b7({duration:0.07,gain:0.018,filterType:"lowpass",filterFrequency:500,delay:0.08})}function K1(){[440,554,659].forEach((J,Q)=>{U8({frequency:J,endFrequency:J*1.02,duration:0.11,type:"triangle",gain:0.045,delay:Q*0.06,filterFrequency:2400})})}function W1(){[392,523,659,784,1047].forEach((J,Q)=>{U8({frequency:J,endFrequency:J*1.015,duration:0.22,type:"sine",gain:0.07,delay:Q*0.09,pan:(Q-2)*0.08,filterFrequency:3200})})}function bX(){if(!HJ||h7)return;let J=HJ.createGain(),Q=HJ.createBiquadFilter();J.gain.value=0.008,Q.type="lowpass",Q.frequency.value=720,Q.Q.value=0.45,Q.connect(J),J.connect(C9);let $=HJ.createBufferSource();$.buffer=hX(),$.loop=!0;let K=HJ.createOscillator(),W=HJ.createOscillator();K.type="sine",W.type="sine",K.frequency.value=98,W.frequency.value=147;let Z=HJ.createGain();Z.gain.value=0.012,$.connect(Q),K.connect(Z),W.connect(Z),Z.connect(Q),$.start(),K.start(),W.start(),h7={master:J,room:$,humA:K,humB:W}}function Z1(){if(!h7||!HJ)return;let J=h7;h7=null;let Q=R6()+0.08;J.master.gain.cancelScheduledValues(R6()),J.master.gain.setTargetAtTime(0.0001,R6(),0.025),[J.room,J.humA,J.humB].forEach(($)=>{try{$.stop(Q)}catch(K){}})}function V8(J,Q=1){if(!D6&&!(J==="click"||J==="drop"||J==="upgrade"||J==="prestige"))return;if(!rN())return;let W=Math.max(0.15,Math.min(1.5,Q||1));if(!D6&&(J==="click"||J==="drop"||J==="upgrade"||J==="prestige"))D6=!0,bX();if(!aN(J,{coin:55,sparkle:80,click:70,drop:90,mechanism:520,win:120,bigwin:180,jackpot:350,lose:180}[J]||0))return;switch(J){case"coin":tN(W);break;case"sparkle":U8({frequency:1320,endFrequency:1880,duration:0.11,type:"sine",gain:0.035*W,filterFrequency:5000}),U8({frequency:1980,endFrequency:2420,duration:0.08,type:"sine",gain:0.018*W,delay:0.045,filterFrequency:5600});break;case"drop":eN();break;case"mechanism":J1(W);break;case"win":SX(!1);break;case"bigwin":SX(!0);break;case"jackpot":Q1();break;case"lose":$1();break;case"upgrade":K1();break;case"prestige":W1();break;case"click":U8({frequency:340,endFrequency:290,duration:0.04,type:"triangle",gain:0.022,filterFrequency:1800});break;default:break}}function fX(J,Q){let $={coinsDisplay:document.getElementById("coins-display"),dollarsDisplay:document.getElementById("dollars-display"),totalEarned:document.getElementById("total-earned"),dropBtn:document.getElementById("drop-btn"),dropIcon:document.querySelector("#drop-btn .btn-icon"),dropText:document.querySelector("#drop-btn .btn-text"),dropSub:document.querySelector("#drop-btn .btn-sub"),upgradesList:document.getElementById("upgrades-list"),prestigeList:document.getElementById("prestige-upgrades-list"),shopView:document.getElementById("shop-view"),prestigeView:document.getElementById("prestige-view"),panelContent:document.getElementById("panel-content"),panelToggle:document.getElementById("panel-toggle"),panelTitle:document.getElementById("panel-title"),tabs:document.querySelectorAll(".tab-btn"),currencyBtns:document.querySelectorAll(".currency-btn"),freeModal:document.getElementById("free-coins-modal"),freeCoinsBtn:document.getElementById("free-coins-btn"),freeCooldown:document.getElementById("free-cooldown"),regenTimer:document.getElementById("regen-timer"),regenCountdown:document.getElementById("regen-countdown"),notifications:document.getElementById("notifications"),dropEffectLabel:document.getElementById("drop-effect-label"),resetBtn:document.getElementById("reset-btn"),prestigeBtn:document.getElementById("prestige-btn"),prestigeBadge:document.getElementById("prestige-badge"),prestigePointsDisplay:document.getElementById("prestige-points-display"),prestigePointsBig:document.getElementById("prestige-points-big"),prestigeProgressBar:document.getElementById("prestige-progress-bar"),prestigeProgressText:document.getElementById("prestige-progress-text"),prestigeProgressWrap:document.getElementById("prestige-progress-wrap"),collectedCards:document.getElementById("collected-cards"),cardsGrid:document.getElementById("cards-grid"),autoDropToggle:document.getElementById("auto-drop-toggle"),soundToggle:document.getElementById("sound-toggle"),langBtn:document.getElementById("lang-btn")},K=J.coins,W=J.dollars,Z=null,X="shop",Y=!1,H=yX(),U=0;function O(N){if(N==="shop")return"\uD83D\uDED2 "+_0("shop");if(N==="prestige")return"\uD83D\uDC51 "+_0("prestigeTab");if(N==="settings")return"⚙ "+_0("help");return""}function D(N){if(N==="shop")return"\uD83D\uDED2 "+_0("shopTitle");if(N==="prestige")return"\uD83D\uDC51 "+_0("prestigeTab");return"⚙ "+_0("help")}function G(){if(!$.langBtn)return;$.langBtn.textContent=mK()==="en"?"FR":"EN"}function R(){FX(mK()==="en"?"fr":"en"),G(),M(),b0.refresh(J)}function M(){document.querySelectorAll(".label").forEach((q)=>{if(q.dataset.key)q.textContent=_0(q.dataset.key)}),document.querySelectorAll(".currency-btn").forEach((q)=>{q.textContent=q.dataset.currency==="coins"?"\uD83E\uDE99 "+_0("coinsBtn"):"\uD83D\uDCB5 "+_0("dollarsBtn")}),F(),P(),C(),k()}function P(){if($.tabs.forEach((I)=>{I.textContent=O(I.dataset.tab)}),$.panelTitle)$.panelTitle.textContent=D(X);let N=document.querySelector(".prestige-sub");if(N)N.textContent="⭐ "+_0("prestigePoints");if($.prestigeBtn)$.prestigeBtn.textContent="\uD83D\uDD25 "+_0("prestigeSacrifice");let q=document.querySelector(".prestige-sub-desc");if(q)q.textContent=_0("prestigeDesc");if($.freeModal){let I=$.freeModal.querySelector("h2"),h=$.freeModal.querySelector("p");if(I)I.textContent="\uD83D\uDC80 "+_0("noFunds");if(h)h.textContent=_0("freeCoinsDesc");let l=$.freeCoinsBtn?.querySelector("span");if(l)l.textContent="\uD83C\uDF81 "+_0("claimBonus")}}function E(){let N=Math.floor(J.coins),q=Math.floor(J.dollars);if(N!==K){if($.coinsDisplay.textContent=N,N>K)$.coinsDisplay.classList.remove("pop"),$.coinsDisplay.offsetWidth,$.coinsDisplay.classList.add("pop");K=N}if(q!==W){if($.dollarsDisplay.textContent=q,q>W)$.dollarsDisplay.classList.remove("pop"),$.dollarsDisplay.offsetWidth,$.dollarsDisplay.classList.add("pop");W=q}if($.totalEarned.textContent=Math.floor(J.totalEarnedLifetime||J.totalEarned),J.prestigePoints>0){if($.prestigeBadge.classList.remove("hidden"),$.prestigePointsDisplay.textContent=J.prestigePoints,$.prestigePointsBig.textContent=J.prestigePoints,J.prestigePoints>=10)$.prestigeBadge.classList.add("prestige-high")}else $.prestigeBadge.classList.add("hidden")}function F(){let N=J.activeCurrency==="coins";$.currencyBtns.forEach((q)=>{q.classList.toggle("active",q.dataset.currency===J.activeCurrency),q.classList.toggle("dollar-mode",q.dataset.currency==="dollars")}),$.dropIcon.textContent=N?"\uD83E\uDE99":"\uD83D\uDCB5",$.dropText.textContent=N?_0("dropCoin"):_0("dropDollar"),$.dropSub.textContent=N?_0("costCoin"):_0("costDollar"),$.dropBtn.style.borderColor=N?"#ffd700":"#00ff88",$.dropBtn.style.color=N?"#fff4a3":"#00ff88"}function T(N){$.dropBtn.disabled=!N}function w(N){if(X=N,$.tabs.forEach((q)=>q.classList.toggle("active",q.dataset.tab===N)),$.shopView.classList.toggle("hidden",N!=="shop"),$.prestigeView.classList.toggle("hidden",N!=="prestige"),$.settingsView=$.settingsView||document.getElementById("settings-view"),$.settingsView)$.settingsView.classList.toggle("hidden",N!=="settings");if($.panelTitle.textContent=D(N),N==="prestige")$.prestigePointsBig.textContent=J.prestigePoints||0,k(),T0(),J0()}function L(N,q){let I=N.effect(q);switch(N.id){case"pushPower":return"Push "+I.toFixed(2)+"x";case"multiDrop":return Math.floor(Math.max(1,I))+" coins/drop";case"autoDrop":return I.toFixed(2)+"/s";case"multiplier":return"x"+I.toFixed(2);case"maxCoins":return I+" max";case"regenSpeed":return I.toFixed(1)+"s";case"dollarMagnet":return"x"+I.toFixed(2);case"luck":return"+"+(I*100).toFixed(0)+"% chance";case"comboShield":return I.toFixed(1)+"s window";case"prestigeBoost":return"x"+I.toFixed(2);case"jackpotChance":return"+"+((I-0.02)*100).toFixed(1)+"% extra";case"goldenTouch":return(I*100).toFixed(0)+"% double";default:return""}}function A(){let N=[TJ.ECONOMY,TJ.PUSH,TJ.CAPACITY,TJ.LUCK,TJ.CURRENCY,TJ.META],q=[];return N.forEach((I)=>{r8.forEach((h)=>{if(h.category===I)q.push(h)})}),q}function C(){$.upgradesList.innerHTML="",[TJ.ECONOMY,TJ.PUSH,TJ.CAPACITY,TJ.LUCK,TJ.CURRENCY,TJ.META].forEach((q)=>{let I=r8.filter((Z0)=>Z0.category===q);if(I.length===0)return;let h=document.createElement("div");h.className="upgrade-category-header cat-"+q;let l="category"+q.charAt(0).toUpperCase()+q.slice(1);h.textContent="◆ "+_0(l),$.upgradesList.appendChild(h),I.forEach(S)})}function S(N){let q=H8(J,N.id),I=q>=N.maxLevel,h=G6(N,q),l=J.coins>=h,Z0=I?[]:OX(N,q,J.coins),Y0=Z0.length,m=Z0.reduce((W0,B0)=>W0+B0,0),a=Y0>1,D0=a?"⇧ "+Y0+" for \uD83E\uDE99"+m.toLocaleString():null,E0=L(N,q),G0=I?"":L(N,q+1),O0=E0?'<div class="upgrade-effect">'+E0+(G0&&G0!==E0?' <span class="effect-arrow">→</span> <span class="effect-next">'+G0+"</span>":"")+"</div>":"",p0=Math.round(q/N.maxLevel*100),l0='<div class="upgrade-bar-wrap"><div class="upgrade-bar'+(I?" maxed":"")+'" style="width:'+p0+'%"></div></div>',e0=document.createElement("div"),x="upgrade-item cat-"+N.category+(I?" bought":"")+(l&&!I?" affordable":"");e0.className=x;let R0=I?_0("max"):a?'<span class="upgrade-cost-bulk">'+D0+'</span><span class="upgrade-cost-single">\uD83E\uDE99'+h.toLocaleString()+"</span>":"\uD83E\uDE99"+h.toLocaleString();if(e0.innerHTML='<div class="upgrade-icon">'+N.icon+'</div><div class="upgrade-info"><div class="upgrade-name">'+N.name+'</div><div class="upgrade-desc">'+N.desc+"</div>"+O0+l0+'<div class="upgrade-level">'+_0("level")+" "+q+"/"+N.maxLevel+'</div></div><div class="upgrade-cost '+(l||I?"":"locked")+'">'+R0+"</div>",!I)e0.style.cursor=l?"pointer":"not-allowed",e0.addEventListener("click",(W0)=>{let B0=W0.shiftKey?Y0:1;if(Q.onBuyUpgrade)Q.onBuyUpgrade(N.id,B0)});$.upgradesList.appendChild(e0)}function k(){$.prestigeList.innerHTML="";let N=J.prestigePoints||0;F6.forEach((q)=>{let I=J.prestigeUpgrades[q.id]||0,h=I>=q.maxLevel,l=zQ(q,I),Z0=N>=l,Y0=document.createElement("div");if(Y0.className="upgrade-item"+(h?" bought":""),Y0.innerHTML='<div class="upgrade-icon">'+q.icon+'</div><div class="upgrade-info"><div class="upgrade-name">'+q.name+'</div><div class="upgrade-desc">'+q.desc+'</div><div class="upgrade-level">'+_0("level")+" "+I+"/"+q.maxLevel+'</div></div><div class="upgrade-cost prestige-cost '+(Z0||h?"":"locked")+'">'+(h?_0("max"):"\uD83D\uDC51"+l)+"</div>",!h)Y0.style.cursor=Z0?"pointer":"not-allowed",Y0.addEventListener("click",()=>{if(Q.onBuyPrestigeUpgrade)Q.onBuyPrestigeUpgrade(q.id)});$.prestigeList.appendChild(Y0)})}function z(N,q="info"){let I=document.createElement("div");I.className="notification "+q,I.textContent=N,I.setAttribute("role","status"),$.notifications.appendChild(I),setTimeout(()=>{if(I.parentNode)I.remove()},2500)}function u(N){let q=document.createElement("div");q.className="jackpot-banner",q.innerHTML='\uD83C\uDFB0 <span class="jackpot-text">'+_0("jackpot")+'</span> <span class="jackpot-bonus">+'+N+" \uD83E\uDE99</span>",document.body.appendChild(q),requestAnimationFrame(()=>q.classList.add("show"));let I=document.createElement("div");I.className="jackpot-burst";for(let h=0;h<10;h++){let l=document.createElement("div");l.className="jackpot-particle",l.textContent="\uD83E\uDE99",l.style.setProperty("--dx",(Math.random()-0.5)*400+"px"),l.style.setProperty("--dy",Math.random()*-200-60+"px"),l.style.animationDelay=Math.random()*0.2+"s",I.appendChild(l)}q.appendChild(I),setTimeout(()=>{q.classList.remove("show"),q.classList.add("hide"),setTimeout(()=>{if(q.parentNode)q.remove()},500)},2200)}function j(N,q){let I=document.createElement("div");I.className="milestone-banner",I.innerHTML='<div class="milestone-eyebrow">'+_0("milestone")+'</div><div class="milestone-title">'+_0(N.key)+'</div><div class="milestone-subtitle">'+N.value.toLocaleString()+" lifetime coins</div>"+(q>0?'<div class="milestone-bonus">+'+q+" \uD83E\uDE99 "+_0("milestoneBonusSuffix")+"</div>":""),document.body.appendChild(I),requestAnimationFrame(()=>I.classList.add("show")),setTimeout(()=>{I.classList.remove("show"),I.classList.add("hide"),setTimeout(()=>{if(I.parentNode)I.remove()},600)},3500)}function n(N,q,I){let h=document.getElementById("streak-chip");if(N<=2&&!I){if(h)h.classList.add("hidden");return}if(!h){h=document.createElement("div"),h.id="streak-chip",h.className="streak-chip hidden";let l=document.getElementById("drop-area");if(l)l.appendChild(h)}if(h.classList.remove("hidden"),I)h.classList.remove("streak-hot"),h.classList.add("streak-broken"),h.innerHTML="\uD83D\uDC94 "+_0("streakBroken")+" · best "+q,setTimeout(()=>{if(h)h.classList.remove("streak-broken"),h.classList.add("hidden")},1800);else h.classList.add("streak-hot"),h.classList.remove("streak-broken"),h.innerHTML="\uD83D\uDD25 "+_0("winStreak")+" <b>x"+N+"</b>"+(q>N?" · best "+q:"")}function J0(){let N=document.getElementById("stats-panel"),q=$.prestigeView;if(!q)return;if(!N){N=document.createElement("div"),N.id="stats-panel",N.className="stats-panel";let l=$.prestigeList;if(l&&l.parentNode===q)q.insertBefore(N,l);else q.appendChild(N)}let I=Math.floor(J.totalEarnedLifetime||J.totalEarned||0),h=[[_0("statsTotalDrops"),Math.floor(J.totalDropped||0).toLocaleString()],[_0("statsPeakCoins"),Math.floor(J.peakCoins||0).toLocaleString()],[_0("statsPeakDollars"),Math.floor(J.peakDollars||0).toLocaleString()],[_0("statsPeakCombo"),"x"+(J.peakCombo||0)],[_0("statsBestStreak"),"x"+(J.bestWinStreak||0)],[_0("statsJackpots"),"\uD83C\uDFB0 "+(J.jackpotsHit||0)],[_0("statsMilestones"),"\uD83C\uDFC5 "+(J.milestonesHit||[]).length+"/9"],[_0("total"),I.toLocaleString()]];N.innerHTML='<div class="stats-title">'+_0("statsTitle")+"</div>"+h.map(([l,Z0])=>'<div class="stats-row"><span class="stats-key">'+l+'</span><span class="stats-val">'+Z0+"</span></div>").join("")}function s(N,q,I){let h=document.createElement("div");h.className="floating-reward",h.textContent=N,h.style.left=q+"px",h.style.top=I+"px",document.body.appendChild(h),setTimeout(()=>{if(h.parentNode)h.remove()},1200)}function e(N){let q=$.dropBtn;if(N>5){if($.dropEffectLabel.textContent="\uD83D\uDD25 "+_0("comboText")+N+"!",$.dropEffectLabel.style.color="#ff2d95",$.dropEffectLabel.classList.remove("mega"),$.dropEffectLabel.classList.add("mega"),q)q.classList.add("combo-hot"),q.classList.remove("combo-warm")}else if(N>3){if($.dropEffectLabel.textContent="✨ x"+N,$.dropEffectLabel.style.color="#ffd700",$.dropEffectLabel.classList.remove("mega"),q)q.classList.add("combo-warm"),q.classList.remove("combo-hot")}else if(N>1){if($.dropEffectLabel.textContent="✨ x"+N,$.dropEffectLabel.style.color="#fff4a3",$.dropEffectLabel.classList.remove("mega"),q)q.classList.remove("combo-warm","combo-hot")}else if($.dropEffectLabel.textContent="",$.dropEffectLabel.classList.remove("mega"),q)q.classList.remove("combo-warm","combo-hot")}function $0(N=30){if(!$.freeModal.classList.contains("hidden"))return;$.freeModal.classList.remove("hidden");let q=Math.max(1,Math.ceil(N));if($.freeCooldown.textContent=q,$.freeCoinsBtn.disabled=!0,Z)clearInterval(Z);Z=setInterval(()=>{if(q--,$.freeCooldown.textContent=q,q<=0)clearInterval(Z),Z=null,$.freeCoinsBtn.disabled=!1},1000),$.freeCoinsBtn.onclick=()=>{if($.freeCoinsBtn.disabled)return;if(Q.onClaimFree)Q.onClaimFree();d()}}function d(){if($.freeModal.classList.add("hidden"),Z)clearInterval(Z),Z=null}function X0(N){if(N>0)$.regenTimer.classList.remove("hidden"),$.regenCountdown.textContent=Math.ceil(N);else $.regenTimer.classList.add("hidden")}function q0(N){let q=N.currency==="dollars"?"\uD83D\uDCB5":"\uD83E\uDE99";if(N.isAuto){if(N.earned>0)s("\uD83E\uDD16 +"+N.earned+" "+q,window.innerWidth/2-40,window.innerHeight/2-50);return}if(N.earned>0){let I=$.dropBtn.getBoundingClientRect(),h="+"+N.earned+" "+q;if(N.earned>=5)h="\uD83C\uDF89 +"+N.earned+" "+q;if(N.isCombo)h="\uD83D\uDD25 "+_0("comboText")+N.comboCount+"! +"+N.earned+" "+q;s(h,I.left+I.width/2-40,I.top-30)}if(N.isCombo&&N.comboCount>3)z("\uD83D\uDD25 "+_0("comboText")+N.comboCount+"!","success")}function L0(N){let q=document.querySelector(".coins-wasted");if(q)q.remove();let I=document.createElement("div");I.className="coins-wasted",I.textContent="⚠️ +"+N+" "+_0("wastedCoins"),I.style.left=window.innerWidth/2-100+"px",I.style.top="120px",document.body.appendChild(I),setTimeout(()=>{if(I.parentNode)I.remove()},2200)}function y0(){if(!$.prestigeProgressBar||!$.prestigeProgressText)return;let N=100,q=Math.min(1,(J.totalEarnedLifetime||J.totalEarned||0)/N);$.prestigeProgressBar.style.width=q*100+"%",$.prestigeProgressText.textContent=Math.floor(J.totalEarnedLifetime||J.totalEarned||0)+" / "+N}function T0(){if(!$.cardsGrid)return;let N=J.collectedCards||[];if(N.length>0)$.collectedCards.classList.remove("hidden"),$.cardsGrid.innerHTML="",N.forEach((q,I)=>{let h=document.createElement("div");h.className="card-item",h.textContent="\uD83C\uDCCF "+(I+1),h.title=q,$.cardsGrid.appendChild(h)});else $.collectedCards.classList.add("hidden")}function OJ(N,q,I,h){let l=document.createElement("div");l.className="zone-feedback "+q,l.textContent=N,l.style.left=I+"px",l.style.top=h+"px",document.body.appendChild(l),setTimeout(()=>{if(l.parentNode)l.remove()},1500)}function qJ(N){let q=N>=2?"shake-hard":"shake-soft";document.body.classList.remove("shake-soft","shake-hard"),document.body.offsetWidth,document.body.classList.add(q)}function K0(N){E(),F(),C();let q=N.activeCurrency==="dollars"?N.dollars>=1:N.coins>=1;if(T(q),N.isGameOver)$0(N.regenCooldown);if($.autoDropToggle)$.autoDropToggle.checked=!!N.autoDropEnabled;if(e(N.dropCount),y0(),X==="prestige")$.prestigePointsBig.textContent=N.prestigePoints||0,k(),T0();let I=N.totalEarned>=100||N.totalDollarsEarned>=10;if($.prestigeBtn.disabled=!I,N.prestigePoints>0)$.prestigeBadge.classList.remove("hidden"),$.prestigePointsDisplay.textContent=N.prestigePoints}function N0(){return Y}function z0(){return H}function M0(N){if(Y=!!N,J.autoDropEnabled=Y,$.autoDropToggle)$.autoDropToggle.checked=Y}function u0(N){if(H=!!N,jX(H),$.soundToggle)$.soundToggle.checked=H}let ZJ="coinpusher_tutorial_dismissed";function o(){try{return localStorage.getItem(ZJ)==="1"}catch(N){return!1}}function Q0(){let N=document.getElementById("tutorial-overlay");if(!N||N.classList.contains("hidden"))return;N.classList.add("hiding");try{localStorage.setItem(ZJ,"1")}catch(q){}setTimeout(()=>{N.classList.add("hidden"),N.classList.remove("hiding")},350)}function y(){if(o())return;setTimeout(()=>{let N=document.getElementById("tutorial-overlay");if(!N)return;N.classList.remove("hidden"),N.addEventListener("click",Q0,{once:!0})},700)}if($.dropBtn.addEventListener("click",()=>{if(Q.onDrop)Q.onDrop();Q0()}),document.addEventListener("keydown",(N)=>{let q=N.target;if(q&&(q.tagName==="INPUT"||q.tagName==="TEXTAREA"))return;if(N.code==="Space"&&!N.repeat){if(N.preventDefault(),Q0(),Q.onDrop)Q.onDrop()}}),$.currencyBtns.forEach((N)=>{N.addEventListener("click",()=>{if(Q.onCurrencySwitch)Q.onCurrencySwitch(N.dataset.currency)}),N.addEventListener("pointerenter",()=>{let q=performance.now();if(H&&q-U>120)U=q,V8("click")},{passive:!0})}),$.tabs.forEach((N)=>{N.addEventListener("click",()=>w(N.dataset.tab))}),$.panelToggle.addEventListener("click",()=>{$.panelContent.classList.toggle("collapsed"),$.panelToggle.classList.toggle("collapsed")}),$.resetBtn)$.resetBtn.addEventListener("click",()=>{if(Q.onReset)Q.onReset()});if($.prestigeBtn)$.prestigeBtn.addEventListener("click",()=>{if(Q.onPrestige)Q.onPrestige()});if($.langBtn)$.langBtn.addEventListener("click",R);if($.autoDropToggle)$.autoDropToggle.addEventListener("change",(N)=>{Y=N.target.checked,J.autoDropEnabled=Y});if($.soundToggle)$.soundToggle.addEventListener("change",(N)=>{H=N.target.checked,u0(H)});if(document.addEventListener("keydown",(N)=>{let q=N.target;if(q&&(q.tagName==="INPUT"||q.tagName==="TEXTAREA"))return;if(Q0(),N.code==="Tab"&&!N.repeat&&b0.isPrestigeReady&&b0.isPrestigeReady()){if(N.preventDefault(),Q.onPrestige)Q.onPrestige();return}let I=A();if(N.key>="1"&&N.key<="9"){let h=parseInt(N.key)-1;if(h<I.length&&Q.onBuyUpgrade)Q.onBuyUpgrade(I[h].id)}else if(N.key==="0"){if(9<I.length&&Q.onBuyUpgrade)Q.onBuyUpgrade(I[9].id)}}),$.soundToggle)$.soundToggle.checked=H;G(),M(),y();let V=K0;function f(N){V(N),b0.isPrestigeReady=()=>!!(N&&(N.totalEarned>=100||N.totalDollarsEarned>=10))}function r(N=20){let q=document.getElementById("coin-rain-container");if(!q)q=document.createElement("div"),q.id="coin-rain-container",document.body.appendChild(q);let I=["\uD83E\uDE99","\uD83D\uDCB0","⭐","✨","\uD83E\uDE99"];for(let h=0;h<N;h++){let l=document.createElement("div");l.className="coin-rain-particle",l.textContent=I[Math.floor(Math.random()*I.length)],l.style.left=Math.random()*100+"%",l.style.fontSize=16+Math.random()*18+"px",l.style.animationDuration=1.5+Math.random()*2+"s",l.style.animationDelay=Math.random()*0.8+"s",q.appendChild(l),setTimeout(()=>{if(l.parentNode)l.remove()},4000)}}function b(){let N=document.createElement("div");N.className="upgrade-flash",document.body.appendChild(N),setTimeout(()=>{if(N.parentNode)N.remove()},700)}let _=null;function F0(){if(!_)_=document.createElement("div"),_.className="gamble-btn-container",_.id="gamble-section";let N=$.shopView;if(N&&!_.parentNode){let E0=$.upgradesList;if(E0&&E0.parentNode===N)E0.after(_);else N.appendChild(_)}let q=Math.floor(J.coins),I=q>=1,h=Math.max(1,Math.min(q,V0||q)),l=_0("gambleMax"),Z0=_0("gambleHalf");_.innerHTML=`
      <button class="gamble-btn" id="gamble-btn" ${I?"":"disabled"}>
        \uD83C\uDFB2 ${_0("gambleTitle")}
      </button>
      <div style="font-size:11px;color:var(--text-dim);margin-top:2px;">${_0("gambleDesc")}</div>
      <div class="gamble-controls">
        <button class="gamble-wager-btn" id="gamble-half-btn" ${I?"":"disabled"}>½ ${Z0}</button>
        <input type="number" class="gamble-wager-input" id="gamble-wager"
          value="${Math.min(h,q)}" min="1" max="${Math.max(1,q)}" ${I?"":"disabled"}>
        <button class="gamble-wager-btn" id="gamble-max-btn" ${I?"":"disabled"}>${l}</button>
      </div>
    `;let Y0=_.querySelector("#gamble-btn"),m=_.querySelector("#gamble-wager"),a=_.querySelector("#gamble-half-btn"),D0=_.querySelector("#gamble-max-btn");if(Y0)Y0.addEventListener("click",()=>{let E0=parseInt(m?.value||1);if(E0>0&&Q.onGamble)Q.onGamble(E0)});if(a)a.addEventListener("click",()=>{let E0=Math.max(1,Math.floor(q/2));if(m)m.value=E0;V0=E0});if(D0)D0.addEventListener("click",()=>{if(m)m.value=q;V0=q});if(m)m.addEventListener("change",()=>{let E0=parseInt(m.value)||1;V0=Math.max(1,Math.min(E0,q)),m.value=V0})}let V0=10;function o0(){if(_&&_.parentNode)F0()}function v(N){let q=document.createElement("div");q.className="gamble-result-overlay";let I=document.createElement("div");I.className="gamble-result-card "+(N.win?"win":"lose");let h=N.win?"\uD83C\uDF89":"\uD83D\uDC80",l=N.win?_0("gambleWin"):_0("gambleLose"),Z0=N.win?"+"+N.wager:"-"+N.wager;if(I.innerHTML=`
      <div class="gamble-result-title">${h} ${l}</div>
      <div class="gamble-result-amount">${Z0} \uD83E\uDE99</div>
    `,q.appendChild(I),document.body.appendChild(q),N.win)r(30);setTimeout(()=>{q.style.transition="opacity 0.3s",q.style.opacity="0",setTimeout(()=>{if(q.parentNode)q.remove()},350)},1400)}let XJ=f;function v0(N){XJ(N),o0()}let b0={updateHUD:E,updateDropButton:T,renderUpgrades:C,renderPrestigeUpgrades:k,showNotification:z,showFloatingReward:s,showJackpot:u,showMilestone:j,updateStreak:n,renderStatsPanel:J0,showDropResult:q0,showFreeModal:$0,hideFreeModal:d,updateRegenTimer:X0,updateCombo:e,refresh:v0,switchTab:w,updateCurrencyUI:F,showCoinsWasted:L0,showZoneFeedback:OJ,renderPrestigeProgress:y0,renderCollectedCards:T0,isAutoDropEnabled:N0,isSoundEnabled:z0,setAutoDropEnabled:M0,setSoundEnabled:u0,isPrestigeReady:()=>!1,dismissTutorial:Q0,screenShake:qJ,showCoinRain:r,showUpgradeFlash:b,renderGambleUI:F0,showGambleResult:v};return b0}var X1=document.getElementById("canvas-container"),mX=ZX(X1);if(!mX)throw console.warn("Aborting game init: WebGL unavailable."),Error("WebGL unavailable");var{scene:_Q,camera:Y1,renderer:H1,controls:U1,updateFlames:q1,updateAmbient:N1,pulseEvent:xX}=mX,uJ=XX(_Q),I0=LX(),G1=(I0.collectedCards||[]).length,uK=[],AQ=null,W7=GX(_Q,uJ,G1,(J,Q,$,K)=>{let W={x:J,y:Q,z:$,strength:K};if(AQ)AQ(W);else uK.push(W)});function F1(){if(!IX(I0,(Q)=>{let $=Q.currency==="dollars"?"dollar":"coin",K=Math.max(1,Math.floor(Q.coinsPerDrop||1));for(let W=0;W<K;W++)setTimeout(()=>W7.dropObject(Q.pushForce,$),W*50);if(T9.emit(uJ.dropX,uJ.dropHeight-0.3,uJ.dropZ,Math.min(12,K*3)),Q.comboBonus>0)n0.showNotification("\uD83D\uDD25 Combo bonus +"+Q.comboBonus+" coin!","success");n0.showDropResult(Q),n0.updateCombo(Q.comboCount),V8("drop")}).success){let $=(I0.activeCurrency==="dollars"?"\uD83D\uDCB5":"\uD83E\uDE99")+" "+_0(I0.activeCurrency==="dollars"?"notEnoughDollars":"notEnoughCoins");if(n0.showNotification($,"danger"),I0.activeCurrency==="coins"&&I0.coins<=0&&I0.dollars<=0){if(!I0._regenInitialized)I0.regenCooldown=H9(I0).regenCooldown,I0._regenInitialized=!0;I0.isGameOver=!0}}n0.refresh(I0),M8(I0)}function O1(J,Q=1){let $=PX(I0,J,Q);if($.success){let K=$.levelsPurchased>1?"⬆️ "+_0("upgraded")+$.newLevel+" (+"+$.levelsPurchased+")":"⬆️ "+_0("upgraded")+$.newLevel;n0.showNotification(K,"success"),n0.showUpgradeFlash(),n0.refresh(I0),M8(I0),V8("upgrade")}else if($.reason==="not_enough_coins")n0.showNotification("\uD83E\uDE99 "+_0("notEnoughCoins"),"danger");else if($.reason==="max_level")n0.showNotification("⭐ "+_0("maxLevel"),"info")}function D1(J){let Q=AX(I0,J);if(Q.success)n0.showNotification("\uD83D\uDC51 "+_0("prestigeUp")+Q.newLevel,"prestige"),n0.refresh(I0),M8(I0),V8("upgrade");else if(Q.reason==="not_enough_prestige")n0.showNotification(_0("notEnoughPrestige"),"danger");else if(Q.reason==="max_level")n0.showNotification("⭐ "+_0("maxLevel"),"info")}function E1(){let J=_X(I0);n0.showNotification("\uD83C\uDF81 +"+J+" "+_0("freeCoins"),"success"),I0.isGameOver=!1,n0.hideFreeModal(),n0.refresh(I0),M8(I0)}function R1(J){I0.activeCurrency=J,n0.updateCurrencyUI(),n0.updateDropButton(J==="coins"?I0.coins>=1:I0.dollars>=1)}function k1(){let J=wX(I0);if(J.success)n0.showNotification("\uD83C\uDF1F "+_0("prestigeGain")+J.gained+_0("prestigeTotal")+J.prestigePoints+")","prestige"),W7.initObjects(20,3),n0.refresh(I0),n0.switchTab("prestige"),M8(I0),V8("prestige");else if(J.reason==="no_gain")n0.showNotification(_0("prestigeWait")+J.current+_0("prestigeCurrent"),"info")}function M1(){if(confirm(_0("resetConfirm")))VX(),location.reload()}function V1(J){let Q=zX(I0,J);if(Q.success)n0.showGambleResult(Q),n0.refresh(I0),M8(I0),V8(Q.win?"win":"lose");else n0.showNotification("\uD83E\uDE99 "+_0("notEnoughCoins"),"danger")}var n0=fX(I0,{onDrop:F1,onBuyUpgrade:O1,onBuyPrestigeUpgrade:D1,onClaimFree:E1,onReset:M1,onPrestige:k1,onCurrencySwitch:R1,onGamble:V1});n0.renderGambleUI();var T9=(()=>{let Q=new bJ,$=new Float32Array(600),K=new Float32Array(600),W=new Float32Array(600),Z=new Float32Array(200);for(let D=0;D<200;D++)$[D*3]=0,$[D*3+1]=-10,$[D*3+2]=0,K[D*3]=0.6+Math.random()*0.4,K[D*3+1]=0.2+Math.random()*0.3,K[D*3+2]=0.6+Math.random()*0.4,Z[D]=0;Q.setAttribute("position",new gJ($,3)),Q.setAttribute("color",new gJ(K,3));let X=new z9({size:0.04,vertexColors:!0,transparent:!0,opacity:0.7,blending:I8}),Y=new o9(Q,X);_Q.add(Y);let H=0;function U(D,G,R,M=10){let P=Q.attributes.position.array;for(let E=0;E<Math.min(M,200);E++){let F=(H+E)%200;P[F*3]=D+(Math.random()-0.5)*0.6,P[F*3+1]=G+(Math.random()-0.5)*0.6,P[F*3+2]=R+(Math.random()-0.5)*0.6,W[F*3]=(Math.random()-0.5)*2,W[F*3+1]=Math.random()*3+1,W[F*3+2]=(Math.random()-0.5)*2,Z[F]=1+Math.random()}H=(H+M)%200,Q.attributes.position.needsUpdate=!0}function O(D){let G=Q.attributes.position.array,R=!1;for(let M=0;M<200;M++)if(Z[M]>0){if(Z[M]-=D,G[M*3]+=W[M*3]*D,G[M*3+1]+=W[M*3+1]*D,G[M*3+2]+=W[M*3+2]*D,W[M*3+1]-=4*D,R=!0,Z[M]<=0)G[M*3+1]=-10}if(R)Q.attributes.position.needsUpdate=!0}return{emit:U,update:O}})();AQ=({x:J,y:Q,z:$,strength:K})=>{V8(K>0.55?"sparkle":"coin"),T9.emit(J,Q+0.04,$,K>0.55?3:1)};for(let J of uK)AQ(J);uK.length=0;MX(I0);W7.initObjects(20,5);n0.refresh(I0);var gX=0,pX=performance.now(),dK=0,B1=[{value:100,key:"milestone100"},{value:500,key:"milestone500"},{value:1000,key:"milestone1k"},{value:5000,key:"milestone5k"},{value:1e4,key:"milestone10k"},{value:50000,key:"milestone50k"},{value:1e5,key:"milestone100k"},{value:500000,key:"milestone500k"},{value:1e6,key:"milestone1m"}];function L1(J,Q){let $=J.milestonesHit||[];for(let K of B1)if(Q>=K.value&&!$.includes(K.value))return K;return null}function z1(J){if(J.coins>(J.peakCoins||0))J.peakCoins=Math.floor(J.coins);if(J.dollars>(J.peakDollars||0))J.peakDollars=Math.floor(J.dollars);if(J.dropCount>(J.peakCombo||0))J.peakCombo=J.dropCount}function PQ(J,Q){let $=Math.max(0,Number.isFinite(Q)?Q:0),K=Math.max(0,J.maxCoins-J.coins),W=Math.min($,K);return J.coins+=W,J.totalEarned+=W,J.totalEarnedLifetime=(J.totalEarnedLifetime||0)+W,W}function dX(J){requestAnimationFrame(dX);let Q=Math.min((J-pX)/1000,0.05);if(pX=J,CX(I0,Q,(K)=>{let W=K.currency==="dollars"?"dollar":"coin",Z=Math.max(1,Math.floor(K.coinsPerDrop||1));for(let X=0;X<Z;X++)setTimeout(()=>W7.dropObject(K.pushForce,W),X*50);T9.emit(uJ.dropX,uJ.dropHeight-0.3,uJ.dropZ,Math.min(10,Z*2)),n0.showDropResult(K),n0.updateCombo(K.comboCount)}),dK+=Q,dK>0.5){dK=0;let K=W7.collectFallen(),W=H9(I0),Z=Math.floor(K.win.coins*W.rewardMultiplier),X=Math.floor(K.win.dollars*W.dollarMultiplier),Y=K.hole.coins,H=K.hole.dollars;if(Z>0||X>0||K.win.cards.length>0){let U=0,O=Math.max(0,Math.min(1,W.luckChance||0));if(O>0&&K.win.coins>0){for(let A=0;A<K.win.coins;A++)if(Math.random()<O){let C=Math.random()<0.6?2:Math.random()<0.85?3:4;U+=C-1}}let D=0;if(O>0&&K.win.cards.length>0){for(let A=0;A<K.win.cards.length;A++)if(Math.random()<O)D+=5}let G=Z+U+D,R=1,M=W.goldenTouch||0;if(M>0&&Math.random()<M&&G>0)R=2,n0.showNotification("\uD83E\uDD32 GOLDEN TOUCH! Double coins!","prestige"),n0.showZoneFeedback("×2 GOLDEN!","win",window.innerWidth/2,window.innerHeight/2+120);let P=G*R,E=PQ(I0,P),F=Math.max(0,P-E);if(X>0){let A=Math.min(X,I0.maxDollars-I0.dollars);I0.dollars+=Math.max(0,A),I0.totalDollarsEarned=(I0.totalDollarsEarned||0)+Math.max(0,A)}if(U>1)n0.showNotification("\uD83C\uDF40 Lucky bonus +"+U+" !","prestige");if(F>0&&I0.coins>=I0.maxCoins)n0.showCoinsWasted(F);T9.emit(0,uJ.height+0.3,uJ.frontDropZ+0.3,(Z+X+K.win.cards.length)*5);let T=Z+X+K.win.cards.length;if(T>0)W7.spawnWinCoins(T,uJ.leftX+1,uJ.rightX-1);if(E>0){if(xX(E>=5?"bigwin":"win"),n0.showNotification("\uD83C\uDF89 +"+E+" "+_0("coinsEarned"),"success"),V8(E>=5?"bigwin":"win"),n0.showZoneFeedback("+"+E,"win",window.innerWidth/2+(Math.random()-0.5)*100,window.innerHeight/2+80),E>=10)n0.screenShake(2);else if(E>=3)n0.screenShake(1)}let w=W.jackpotChance||0.02;if(E>0&&Math.random()<w){let A=Math.random(),C=A<0.7?25:A<0.95?50:100,S=PQ(I0,C);if(S>0)n0.showJackpot(S),n0.screenShake(2),xX("jackpot"),V8("jackpot"),n0.showCoinRain(35),T9.emit(0,uJ.height+0.6,uJ.frontDropZ+0.5,60),I0.jackpotsHit=(I0.jackpotsHit||0)+1}let L=0;while(L++<4){let A=L1(I0,I0.totalEarnedLifetime||0);if(!A)break;I0.milestonesHit.push(A.value);let C=Math.floor(A.value*0.05);if(C>0)PQ(I0,C);n0.showMilestone(A,C),n0.showCoinRain(15),T9.emit(0,uJ.height+0.5,uJ.frontDropZ+0.4,25)}if(K.win.cards.length>0){if(!I0.collectedCards)I0.collectedCards=[];K.win.cards.forEach((A)=>{if(!I0.collectedCards.includes(A))I0.collectedCards.push(A),n0.showNotification("\uD83C\uDCCF "+_0("cardCollected")+I0.collectedCards.length,"prestige"),PQ(I0,10)})}}if(Y>0||H>0||K.hole.cards.length>0){if(T9.emit(0,uJ.height+0.3,uJ.frontDropZ+0.3,(Y+H+K.hole.cards.length)*3),Y>0){if(n0.showNotification("\uD83D\uDC80 "+Y+" "+_0("coinsLost"),"danger"),V8("lose",Math.min(1.2,0.7+Y*0.12)),n0.showZoneFeedback("-"+Y,"hole",window.innerWidth/2+(Math.random()-0.5)*100,window.innerHeight/2+80),Y>=3)n0.screenShake(1)}if(H>0)n0.showNotification("\uD83D\uDC80 "+H+" $ "+_0("coinsLost"),"danger");if(K.hole.cards.length>0)n0.showNotification("\uD83D\uDC94 "+K.hole.cards.length+" "+_0("cardsLost"),"danger")}if(Y>0){if(I0.winStreak>0)I0.bestWinStreak=Math.max(I0.bestWinStreak||0,I0.winStreak);I0.winStreak=0,n0.updateStreak(0,I0.bestWinStreak||0,!0)}else if(Z>0||X>0){if(I0.winStreak=(I0.winStreak||0)+1,I0.winStreak>(I0.bestWinStreak||0))I0.bestWinStreak=I0.winStreak;n0.updateStreak(I0.winStreak,I0.bestWinStreak||0,!1)}z1(I0)}uJ.updateMechanism(J/1000);let $=uJ.shelfVelocity;if($>0.65&&gX<=0.65)V8("mechanism",Math.min(1.2,0.7+$*0.18));if(gX=$,W7.update(Q,J/1000),T9.update(Q),q1(J/1000),N1(J/1000,Q),n0.updateHUD(),I0.coins<=0&&I0.dollars<=0&&I0.regenCooldown>0)n0.updateRegenTimer(I0.regenCooldown);else if(I0.isGameOver)n0.showFreeModal(Math.max(1,I0.regenCooldown));else n0.hideFreeModal();U1.update(),H1.render(_Q,Y1)}dX(performance.now());window.addEventListener("beforeunload",()=>M8(I0));console.log("\uD83C\uDCCF COIN PUSHER CASINO OCCULT loaded!");console.log("\uD83C\uDFAE SPACE=drop, 1-9,0=upgrades, TAB=prestige");
