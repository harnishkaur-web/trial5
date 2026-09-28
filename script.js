/* ============ ICONS ============ */
var ICON_BOT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 4h6"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/></svg>';
var ICON_USER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6"/></svg>';
var ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
var ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
var ICON_REFRESH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v6h6M20 20v-6h-6"/><path d="M20 10a8 8 0 0 0-14.7-4.7M4 14a8 8 0 0 0 14.7 4.7"/></svg>';
var ICON_LIGHTBULB = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-3 11.2c.6.4 1 1.1 1 1.8v.5h4v-.5c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 2z"/></svg>';
var ICON_SHIELD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>';
var ICON_TARGET = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>';
var ICON_DOC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></svg>';
var ICON_CLIPBOARD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="16" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6M9 15h4"/></svg>';
var ICON_EDIT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>';
var ICON_FLAG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v18M5 4h11l-2 4 2 4H5"/></svg>';
var ICON_TABLE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10"/></svg>';

/* ============ LANE DATA ============ */
var laneData = {
  iti: {
    title: "Tool Return Note",
    draftHtml: 'All <span class="wrong">12 trainees</span> from Batch 3B gave back their tools today. The tool register shows every item is present, and <span class="wrong">no damage was reported</span>. This batch has <span class="wrong">finished all practical hours needed for this term</span>.',
    recordTitle: "The real store register (end of day)",
    recordItems: [
      "Tools returned: 11 out of 12. One hand drill is still missing.",
      "Condition note: one drill bit is worn. It is marked for replacement.",
      "Practical hours: this batch is 2 hours short for the term."
    ],
    fixes: [
      {id:'figure', label:'Line 1 — the number of trainees', phrase:'"12 trainees" gave back their tools', placeholder:'Type the correct number…', keywords:['11'], model:"11 trainees gave back their tools. One hand drill is still missing."},
      {id:'fact', label:'Line 2 — damage report', phrase:'"no damage was reported"', placeholder:'Type what the register really says…', keywords:['worn','damage','drill bit'], model:"One drill bit is worn and marked for replacement."},
      {id:'claim', label:'Line 3 — practical hours', phrase:'"finished all practical hours needed"', placeholder:'Type what is really true…', keywords:['short','not finish','2 hour','incomplete'], model:"This batch is 2 hours short of the required practical hours."}
    ],
    finishQuestion: "This note stops here. It does not say what to do next. What should the note add?",
    finishOptions: [
      "Nothing. The note is fine as it is.",
      "Tell the store in-charge about the missing tool and the worn drill bit before the register closes.",
      "Say well done to the batch for finishing early.",
      "Plan next term's practical sessions."
    ],
    finishCorrect: 1
  },
  higher: {
    title: "Assignment Submission Note",
    draftHtml: 'All <span class="wrong">45 students</span> in the Data Structures course submitted on time. Every submission was checked by the plagiarism tool, and <span class="wrong">no issues were found</span>. This <span class="wrong">completes all pending coursework for the semester</span>.',
    recordTitle: "The real submission log",
    recordItems: [
      "Submissions received: 42 out of 45. Three students have not submitted yet.",
      "Plagiarism check: one submission is flagged for manual review.",
      "Remaining coursework: one more assignment is still due next week."
    ],
    fixes: [
      {id:'figure', label:'Line 1 — number of students', phrase:'"45 students" submitted', placeholder:'Type the correct number…', keywords:['42'], model:"42 students submitted. Three are still pending."},
      {id:'fact', label:'Line 2 — plagiarism check', phrase:'"no issues were found"', placeholder:'Type what was really found…', keywords:['flagged','review','issue'], model:"One submission was flagged for manual review."},
      {id:'claim', label:'Line 3 — pending coursework', phrase:'"completes all pending coursework"', placeholder:'Type what is really true…', keywords:['due','next week','not complete','one more','1 more'], model:"One more assignment is still due next week. Coursework is not complete yet."}
    ],
    finishQuestion: "This note stops here. It does not say what to do next. What should the note add?",
    finishOptions: [
      "Nothing. The note is fine as it is.",
      "Follow up with the 3 students who have not submitted, and send the flagged submission to the coordinator.",
      "Say well done to the class for finishing early.",
      "Plan next semester's coursework."
    ],
    finishCorrect: 1
  }
};

var currentLane = null;
var chat = document.getElementById('chat');
var stepIndex = 0;
var TOTAL_STEPS = 12;
var fixAnswers = {};
var fixChecked = {};
var finishChoice = null;
var finishChecked = false;

function setProgress(n){
  document.getElementById('progressFill').style.width = Math.min(100, Math.round((n/TOTAL_STEPS)*100)) + '%';
}

function scrollDown(){
  window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'});
}

function kickerRow(icon, label, color){
  return '<div class="kicker-row"><span class="kicon" style="background:'+color+';">'+icon+'</span><span class="klabel" style="color:'+color+';">'+label+'</span></div>';
}

function addBot(html, wide, kind){
  var msg = document.createElement('div');
  msg.className = 'msg bot';
  var cls = 'bubble'+(wide?' wide':'')+(kind?' k-'+kind:'');
  msg.innerHTML = '<div class="avatar">'+ICON_BOT+'</div><div class="'+cls+'">'+html+'</div>';
  chat.appendChild(msg);
  scrollDown();
  return msg;
}

function addUser(html){
  var msg = document.createElement('div');
  msg.className = 'msg user';
  msg.innerHTML = '<div class="avatar">'+ICON_USER+'</div><div class="bubble">'+html+'</div>';
  chat.appendChild(msg);
  scrollDown();
}

function addContinue(label, onClick){
  var wrap = document.createElement('div');
  wrap.className = 'continue-wrap';
  wrap.innerHTML = '<button class="continue-btn">'+(label||'Continue')+' '+ICON_ARROW+'</button>';
  wrap.querySelector('button').onclick = function(){
    wrap.remove();
    onClick();
  };
  chat.appendChild(wrap);
  scrollDown();
}

/* ============ STEP FLOW ============ */
function start(){
  chat.innerHTML = '';
  stepIndex = 0;
  fixAnswers = {};
  fixChecked = {};
  finishChoice = null;
  finishChecked = false;
  currentLane = null;
  setProgress(0);
  step0();
}

function step0(){
  setProgress(1);
  addBot(
    kickerRow(ICON_LIGHTBULB, 'Welcome', 'var(--royal)') +
    '<p>Namaste! Let us learn one important AI skill together.</p><p>Sometimes an AI tool writes wrong facts. Sometimes it forgets to finish the work. Today, you will fix both.</p>',
    false, 'intro'
  );
  addContinue('Let us start', function(){ step1(); });
}

function step1(){
  setProgress(2);
  addBot(
    kickerRow(ICON_SHIELD, 'Safety first', 'var(--gold)') +
    '<p>One small request before we begin.</p>' +
    '<div class="never-panel">' +
      '<div class="never-head">'+ '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9L2.5 17a1.8 1.8 0 0 0 1.5 2.7h16a1.8 1.8 0 0 0 1.5-2.7L13.7 3.9a1.6 1.6 0 0 0-2.8 0z"/></svg>' +'Please never type these into an AI tool</div>'+
      '<div class="never-grid">'+
        '<div class="never-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15" r="1.4"/></svg><span>Password</span></div>'+
        '<div class="never-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M13 10h5M13 14h3"/></svg><span>Aadhaar / ID</span></div>'+
        '<div class="never-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg><span>Phone number</span></div>'+
        '<div class="never-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></svg><span>Address</span></div>'+
        '<div class="never-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.6c0 5-8.8 11-8.8 11S3.2 13.6 3.2 8.6a4.8 4.8 0 0 1 8.8-2.7 4.8 4.8 0 0 1 8.8 2.7z"/></svg><span>Health info</span></div>'+
        '<div class="never-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span>Marks / grades</span></div>'+
      '</div>'+
    '</div>' +
    '<p style="margin-top:8px;">Everything in this lesson is make-believe. Please keep your answers make-believe too.</p>',
    true, 'caution'
  );
  addContinue('I understand', function(){ addUser('I understand. Let us continue.'); step2(); });
}

function step2(){
  setProgress(3);
  addBot(
    kickerRow(ICON_TARGET, 'Why this matters', 'var(--purple)') +
    '<p>Here is why this skill is important.</p>'+
    '<div class="stakes-mini">'+
      '<div class="stakes-mini-item"><div class="si" style="background:var(--royal);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></div><div><b>Half-fixed is still wrong</b><span>One correct fix and two mistakes left behind can look safe. But it is not.</span></div></div>'+
      '<div class="stakes-mini-item"><div class="si" style="background:var(--teal);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg></div><div><b>An unfinished note can hurt too</b><span>Forgetting to tell the right person about a problem can cause the same harm as a wrong fact.</span></div></div>'+
      '<div class="stakes-mini-item"><div class="si" style="background:var(--coral);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h5M8 17h3"/></svg></div><div><b>Your record protects you</b><span>A short note of "what changed" answers any question later, in seconds.</span></div></div>'+
    '</div>',
    true, 'stakes'
  );
  addContinue('Got it', function(){ step3(); });
}

function step3(){
  setProgress(4);
  addBot(kickerRow(ICON_TARGET, 'Choose your case', 'var(--teal)') + '<p>Please choose your case. Which one is closer to you?</p>', false, 'record');
  var msg = document.createElement('div');
  msg.className = 'msg bot';
  msg.innerHTML =
    '<div class="avatar">'+ICON_BOT+'</div>'+
    '<div class="bubble">'+
      '<div class="widget-row">'+
        '<select class="chat-select" id="laneSelect">'+
          '<option value="">Choose…</option>'+
          '<option value="iti">ITI · Tool return note</option>'+
          '<option value="higher">Higher education · Submission note</option>'+
        '</select>'+
        '<button class="go-btn" id="laneGoBtn">Continue '+ICON_ARROW+'</button>'+
      '</div>'+
    '</div>';
  chat.appendChild(msg);
  scrollDown();

  document.getElementById('laneGoBtn').onclick = function(){
    var val = document.getElementById('laneSelect').value;
    if(!val) return;
    currentLane = val;
    var label = val === 'iti' ? 'ITI · Tool return note' : 'Higher education · Submission note';
    msg.remove();
    addUser(label);
    step4();
  };
}

function step4(){
  setProgress(5);
  var lane = laneData[currentLane];
  addBot(
    kickerRow(ICON_DOC, 'AI Draft', 'var(--coral)') +
    '<p>Here is a note written by an AI tool. Please read it once, slowly.</p>'+
    '<div class="draft-card"><div class="dtitle">'+lane.title+'</div><div class="dtext">'+lane.draftHtml+'</div></div>',
    true, 'draft'
  );
  addContinue('Show me the real record', function(){ step5(); });
}

function step5(){
  setProgress(6);
  var lane = laneData[currentLane];
  addBot(
    kickerRow(ICON_CLIPBOARD, 'Real Record', 'var(--teal)') +
    '<p>Good. Now compare it with the real record.</p>'+
    '<div class="record-card"><div class="rtitle">'+'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></svg>'+lane.recordTitle+'</div><ul>'+
      lane.recordItems.map(function(i){return '<li>'+i+'</li>';}).join('') +
    '</ul></div>',
    true, 'record'
  );
  addContinue('Start correcting', function(){ step6(0); });
}

var FIX_COLORS = {figure:'var(--teal)', fact:'var(--royal)', claim:'var(--coral)'};

function step6(fixIdx){
  var lane = laneData[currentLane];
  if(fixIdx >= lane.fixes.length){ step7(); return; }
  setProgress(6 + fixIdx);
  var f = lane.fixes[fixIdx];
  var color = FIX_COLORS[f.id] || 'var(--royal)';

  addBot(
    kickerRow(ICON_EDIT, 'Correction ' + (fixIdx+1) + ' of ' + lane.fixes.length, color) +
    '<p><b>'+f.label+'</b></p><p>Look at this line: '+f.phrase+'. Please check the record and type the correct answer.</p>',
    false, 'fix'
  );

  var msg = document.createElement('div');
  msg.className = 'msg bot';
  msg.innerHTML =
    '<div class="avatar">'+ICON_BOT+'</div>'+
    '<div class="bubble" style="width:100%;">'+
      '<input class="chat-input" id="fixInput-'+f.id+'" placeholder="'+f.placeholder+'">'+
      '<div class="widget-row"><button class="go-btn" id="fixGoBtn-'+f.id+'">Check my answer '+ICON_CHECK+'</button></div>'+
    '</div>';
  chat.appendChild(msg);
  scrollDown();

  document.getElementById('fixGoBtn-'+f.id).onclick = function(){
    var val = document.getElementById('fixInput-'+f.id).value.trim();
    if(val === '') return;
    fixAnswers[f.id] = val;
    var matched = f.keywords.some(function(k){ return val.toLowerCase().indexOf(k.toLowerCase()) > -1; });
    fixChecked[f.id] = matched;
    msg.remove();
    addUser(val);
    if(matched){
      addBot(kickerRow(ICON_CHECK, 'Nice work', 'var(--green)') + '<p class="feedback-good">Very good! That matches the record.</p><p class="model-line">Full answer: '+f.model+'</p>', false, 'good');
    } else {
      addBot(kickerRow(ICON_TARGET, 'Almost there', 'var(--amber)') + '<p class="feedback-soft">Almost. Please compare with the record once more.</p><p class="model-line">Full answer: '+f.model+'</p>', false, 'soft');
    }
    addContinue(fixIdx < lane.fixes.length-1 ? 'Next line' : 'Continue', function(){ step6(fixIdx+1); });
  };
}

function step7(){
  setProgress(9);
  var lane = laneData[currentLane];
  addBot(
    kickerRow(ICON_FLAG, 'Finish it', 'var(--gold)') +
    '<p>Well done, all three lines are checked. Now, one more thing.</p><p>'+lane.finishQuestion+'</p>',
    false, 'finish'
  );

  var msg = document.createElement('div');
  msg.className = 'msg bot';
  msg.innerHTML =
    '<div class="avatar">'+ICON_BOT+'</div>'+
    '<div class="bubble" style="width:100%;">'+
      '<select class="chat-select" id="finishSelect" style="width:100%;min-width:0;">'+
        '<option value="">Choose the best ending…</option>'+
        lane.finishOptions.map(function(o,i){return '<option value="'+i+'">'+o+'</option>';}).join('')+
      '</select>'+
      '<div class="widget-row"><button class="go-btn" id="finishGoBtn">Check my ending '+ICON_CHECK+'</button></div>'+
    '</div>';
  chat.appendChild(msg);
  scrollDown();

  document.getElementById('finishGoBtn').onclick = function(){
    var val = document.getElementById('finishSelect').value;
    if(val === '') return;
    finishChoice = parseInt(val);
    finishChecked = true;
    msg.remove();
    addUser(lane.finishOptions[finishChoice]);
    var isRight = (finishChoice === lane.finishCorrect);
    if(isRight){
      addBot(kickerRow(ICON_CHECK, 'Nice work', 'var(--green)') + '<p class="feedback-good">Correct! That is the missing ending this note needed.</p>', false, 'good');
    } else {
      addBot(kickerRow(ICON_TARGET, 'Almost there', 'var(--amber)') + '<p class="feedback-soft">Not this one. The note needed to warn the right person about the real problem.</p><p class="model-line">Best ending: '+lane.finishOptions[lane.finishCorrect]+'</p>', false, 'soft');
    }
    addContinue('Show my record', function(){ step8(); });
  };
}

function step8(){
  setProgress(10);
  var lane = laneData[currentLane];
  var rows = '';
  lane.fixes.forEach(function(f){
    rows += '<tr><td>'+f.phrase+'</td><td>'+(fixAnswers[f.id]||'—')+'</td></tr>';
  });
  rows += '<tr><td>(note ends without a closing step)</td><td>'+(finishChoice!==null ? lane.finishOptions[finishChoice] : '—')+'</td></tr>';

  addBot(
    kickerRow(ICON_TABLE, 'Your Record', 'var(--navy)') +
    '<p>Here is your record. It shows what the AI wrote, and what you corrected.</p>'+
    '<div class="log-card"><table><thead><tr><th>Assistant wrote</th><th>You corrected</th></tr></thead><tbody>'+rows+'</tbody></table></div>',
    true, 'log'
  );
  addContinue('See my result', function(){ step9(); });
}

function step9(){
  setProgress(12);
  var lane = laneData[currentLane];
  var fixesOk = lane.fixes.filter(function(f){ return fixChecked[f.id]; }).length;
  var finishOk = finishChecked && (finishChoice === lane.finishCorrect);
  var passed = (fixesOk >= 2 && finishOk);

  var html =
    '<div class="result-card '+(passed?'pass':'fail')+'">' +
      (passed ? ICON_CHECK : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>') +
      '<h3>'+(passed ? 'Well done! Task complete.' : 'Good try! Please try once more.')+'</h3>'+
      '<p>Corrections matching the record: '+fixesOk+' out of 3. Closing step: '+(finishOk?'correct':'not yet correct')+'.</p>'+
      '<p>'+(passed
        ? 'You corrected the note, finished it properly, and kept a clear record. That clears this gated step.'
        : 'This step needs at least 2 out of 3 corrections right, and the correct closing step. Please go back and try again.') +
      '</p>'+
    '</div>';

  addBot(html, true);

  var wrap = document.createElement('div');
  wrap.className = 'restart-wrap';
  wrap.innerHTML = '<button class="restart-btn">'+ICON_REFRESH+' Try again from the start</button>';
  wrap.querySelector('button').onclick = function(){ start(); };
  chat.appendChild(wrap);
  scrollDown();
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', start);