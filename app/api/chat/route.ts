import { NextRequest, NextResponse } from 'next/server'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface RequestBody {
  question: string
  history: Message[]
}

// Educational knowledge base for different subjects
const generateEducationalResponse = (question: string, history: Message[]): string => {
  const lowerQuestion = question.toLowerCase()

  // Math questions
  if (lowerQuestion.match(/math|calculate|solve|equation|algebra|geometry|trigonometry|calculus/)) {
    return generateMathResponse(question)
  }

  // Science questions
  if (lowerQuestion.match(/science|physics|chemistry|biology|atom|cell|energy|force|molecule/)) {
    return generateScienceResponse(question)
  }

  // History questions
  if (lowerQuestion.match(/history|historical|war|ancient|revolution|civilization/)) {
    return generateHistoryResponse(question)
  }

  // Language/Grammar questions
  if (lowerQuestion.match(/grammar|writing|essay|sentence|paragraph|punctuation|spelling/)) {
    return generateLanguageResponse(question)
  }

  // Study tips
  if (lowerQuestion.match(/study|learn|memorize|exam|test|homework|focus|concentrate/)) {
    return generateStudyTipsResponse(question)
  }

  // General educational response
  return generateGeneralResponse(question)
}

const generateMathResponse = (question: string): string => {
  const responses = [
    `Great math question! Let me help you understand this step by step.

**Here's how we can approach this:**

1. **Identify what we know** - Look at the given information
2. **Determine what we need to find** - What is the question asking?
3. **Choose the right method** - Which formula or strategy works best?
4. **Solve carefully** - Work through it methodically
5. **Check your answer** - Does it make sense?

**Key tip:** Math is all about patterns and logical thinking. Don't rush - take your time to understand each step!

Would you like me to walk through a specific example? Or do you need help with a particular concept?`,

    `I love helping with math! Let's break this down together.

**Remember these important principles:**
- Mathematics builds on itself - if you're stuck, check if you understand the basics
- Draw diagrams or pictures when possible - visual learning helps!
- Practice is essential - the more problems you solve, the more confident you'll become

**For your question specifically:**
Think about what mathematical operations or formulas might apply here. Sometimes the hardest part is knowing where to start, so let's tackle it piece by piece.

What part feels most confusing to you? I'm here to help clarify!`
  ]
  return responses[Math.floor(Math.random() * responses.length)]
}

const generateScienceResponse = (question: string): string => {
  return `Excellent science question! Let me help you explore this topic.

**Understanding the concept:**

Science is all about asking "why" and "how" - and you're doing exactly that! Here's what you should know:

🔬 **The Scientific Approach:**
1. **Observe** - What do we see happening?
2. **Question** - Why does it happen?
3. **Hypothesize** - What might be the explanation?
4. **Test** - How can we verify it?
5. **Conclude** - What did we learn?

**Key insight for your question:**
Natural phenomena often have multiple layers of explanation. Start with the basic mechanism, then dive deeper into the "why" behind it.

**Real-world connection:**
Try to connect this concept to things you see in everyday life - it makes learning so much more meaningful and memorable!

Would you like me to explain a specific part in more detail? I'm here to make sure you really understand it! 🌟`
}

const generateHistoryResponse = (question: string): string => {
  return `What a fascinating history question! Let's explore this together.

**Understanding Historical Context:**

History isn't just about memorizing dates and names - it's about understanding why events happened and how they shaped our world today.

📚 **Thinking Like a Historian:**
- **Cause and Effect** - What led to this event?
- **Multiple Perspectives** - How did different groups experience it?
- **Impact** - What changed as a result?
- **Connections** - How does this relate to other events?

**For your question:**
Remember that historical events don't happen in isolation. There are always social, economic, political, and cultural factors at play.

**Study tip:** Create a timeline in your mind or on paper. Seeing how events connect chronologically really helps understanding!

Is there a particular aspect or time period you'd like to explore further? I'm here to help you see the big picture! 🌍`
}

const generateLanguageResponse = (question: string): string => {
  return `Great language question! Clear communication is such an important skill.

**Understanding Language and Writing:**

✍️ **Key Principles:**
- **Clarity** - Make sure your message is easy to understand
- **Structure** - Organize your thoughts logically
- **Purpose** - Know what you want to achieve with your writing
- **Audience** - Consider who will read it

**For your specific question:**
Language rules can seem complicated, but they exist to help us communicate more effectively. Think of grammar as a tool, not a obstacle!

**Helpful approach:**
1. Read your work aloud - does it sound natural?
2. Break complex sentences into simpler ones
3. Use examples to make your point clearer
4. Revise and edit - good writing often comes in the rewrite!

**Remember:** Even professional writers make mistakes and need editing. The goal is progress, not perfection!

What specific aspect would you like to work on? I'm here to help you improve! 📝`
}

const generateStudyTipsResponse = (question: string): string => {
  return `I'm so glad you're asking about effective studying! That shows real maturity and dedication.

**Powerful Study Strategies:**

🎯 **Active Learning Techniques:**
1. **Spaced Repetition** - Review material over several days, not all at once
2. **Self-Testing** - Quiz yourself regularly
3. **Teach Others** - Explain concepts to a friend or family member
4. **Mix It Up** - Study different subjects in rotation
5. **Take Breaks** - Your brain needs rest to consolidate learning!

**Specific tips for your situation:**
- **Focus**: Try the Pomodoro Technique (25 minutes focused work, 5 minute break)
- **Environment**: Find a quiet, organized space with minimal distractions
- **Sleep**: Never underestimate this! Your brain processes information during sleep
- **Healthy habits**: Exercise, good nutrition, and hydration all boost cognitive function

**Remember:** Everyone learns differently! Experiment with different methods to find what works best for YOU. The fact that you're asking means you're already on the right track!

What subject are you currently working on? I'd love to provide more specific help! 💪`
}

const generateGeneralResponse = (question: string): string => {
  return `Thank you for your question! I'm here to help you learn and understand.

**Let's approach this together:**

Learning is a journey, and every question you ask is a step forward. Here's how I can help:

🌟 **My approach with you:**
1. **Break it down** - Complex topics into manageable pieces
2. **Explain clearly** - Using examples you can relate to
3. **Build understanding** - Not just memorization
4. **Encourage curiosity** - Keep asking "why"!

**For your specific question:**
I want to make sure I give you the most helpful answer. This topic might involve several concepts, so let's tackle them one at a time.

**Remember:**
- There's no such thing as a "stupid question"
- Making mistakes is how we learn
- Understanding deeply is better than memorizing quickly
- I'm always here to help clarify anything!

Could you tell me a bit more about what specifically you'd like to understand? Or is there a particular angle you're approaching this from (homework, test prep, general curiosity)? The more I know, the better I can tailor my explanation for you! 😊

Feel free to ask follow-up questions - that's how real learning happens!`
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json()
    const { question, history } = body

    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Invalid question' },
        { status: 400 }
      )
    }

    const answer = generateEducationalResponse(question, history || [])

    return NextResponse.json({ answer })
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
